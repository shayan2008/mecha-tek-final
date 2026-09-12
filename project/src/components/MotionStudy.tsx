import { useEffect, useRef, useState } from 'react';
import { RotateCcw, Box, ScanLine } from 'lucide-react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

type Props = { paused: boolean };
export default function MotionStudy({ paused }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const state = useRef({ paused, wire: false, reset: 0 });
  const [wire, setWire] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => { state.current.paused = paused; }, [paused]);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 100);
    camera.position.set(0, .4, 10.8);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, .04);
    scene.environment = env.texture;
    room.dispose();
    const key = new THREE.DirectionalLight(0xffffff, 3); key.position.set(-3, 5, 4); scene.add(key);
    scene.add(new THREE.AmbientLight(0xffffff, .4));
    const blue = new THREE.MeshStandardMaterial({ color: 0x3549f0, metalness: .65, roughness: .25 });
    const alloy = new THREE.MeshStandardMaterial({ color: 0xc2c7cd, metalness: .9, roughness: .24 });
    const ink = new THREE.MeshStandardMaterial({ color: 0x172233, metalness: .55, roughness: .35 });
    const orange = new THREE.MeshStandardMaterial({ color: 0xf2a45a, metalness: .6, roughness: .27 });
    const materials = [blue, alloy, ink, orange];
    const assembly = new THREE.Group(); scene.add(assembly);
    assembly.rotation.set(.35, -.45, -.3);
    function ring(radius: number, material: THREE.Material) {
      const group = new THREE.Group();
      const shape = new THREE.Shape(); shape.absarc(0, 0, radius, 0, Math.PI * 2, false);
      const hole = new THREE.Path(); hole.absarc(0, 0, radius - .18, 0, Math.PI * 2, true); shape.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(shape, {depth:.15, bevelEnabled:true, bevelSegments:3, steps:1, bevelSize:.025, bevelThickness:.025, curveSegments:72});
      geo.translate(0, 0, -.075); group.add(new THREE.Mesh(geo, material));
      const tickGeo = new THREE.BoxGeometry(.045, .1, .025);
      for (let i = 0; i < 48; i++) {
        const tick = new THREE.Mesh(tickGeo, i % 4 === 0 ? alloy : ink); const a = i * Math.PI / 24;
        tick.position.set(Math.sin(a) * (radius - .08), Math.cos(a) * (radius - .08), .108); tick.rotation.z = -a; group.add(tick);
      }
      return group;
    }
    const outer = ring(2.2, blue); const middle = ring(1.81, alloy); const inner = ring(1.42, blue);
    assembly.add(outer); outer.add(middle); middle.add(inner);
    middle.rotation.x = .9; inner.rotation.y = .9;
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(.095, .095, 4.5, 20), alloy); axle.rotation.z = Math.PI/2; assembly.add(axle);
    [-1,1].forEach(sign => { const cap = new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.12,32),ink); cap.rotation.z=Math.PI/2;cap.position.x=sign*2.24;assembly.add(cap); });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.57, 0), orange); inner.add(core);
    const coreWire = new THREE.LineSegments(new THREE.EdgesGeometry(core.geometry), new THREE.LineBasicMaterial({color:0x654126})); core.add(coreWire);
    const axis = new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,2.9,12),ink);inner.add(axis);
    let drag = false, x = 0, y = 0, rx = .35, ry = -.45, observedReset = 0, inView = true, frame = 0, last = 0, elapsed = 0;
    const resize = () => { const {width, height} = el.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();renderer.render(scene,camera); };
    const ro = new ResizeObserver(resize);ro.observe(el);resize();
    const io = new IntersectionObserver(([entry]) => {inView=entry.isIntersecting;});io.observe(el);
    const down = (e: PointerEvent) => { if(e.pointerType==='touch') return; drag=true;x=e.clientX;y=e.clientY;el.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {if(!drag)return;ry+=(e.clientX-x)*.008;rx+=(e.clientY-y)*.008;x=e.clientX;y=e.clientY;};
    const up = () => {drag=false;};
    const keyboard = (e: KeyboardEvent) => {if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();ry+=e.key==='ArrowLeft'?-.15:e.key==='ArrowRight'?.15:0;rx+=e.key==='ArrowUp'?-.15:e.key==='ArrowDown'?.15:0;}};
    el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('keydown',keyboard);
    const animate = (now: number) => {
      frame=requestAnimationFrame(animate);
      if(now-last<32)return;const delta=Math.min((now-last)/1000,.05);last=now;
      if(!inView || document.hidden)return;
      if(observedReset!==state.current.reset){rx=.35;ry=-.45;observedReset=state.current.reset;elapsed=0;}
      if(!state.current.paused&&!drag)elapsed+=delta;
      assembly.rotation.x+=(rx-assembly.rotation.x)*.09;assembly.rotation.y+=(ry-assembly.rotation.y)*.09;
      middle.rotation.x=.8+Math.sin(elapsed*.28)*.7;inner.rotation.y=.65+elapsed*.24;core.rotation.y=elapsed*.12;
      materials.forEach(m=>{m.wireframe=state.current.wire;});
      renderer.render(scene,camera);
    };
    frame=requestAnimationFrame(animate);setReady(true);
    return () => {cancelAnimationFrame(frame);ro.disconnect();io.disconnect();el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up);el.removeEventListener('keydown',keyboard);scene.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.LineSegments)o.geometry.dispose();});materials.forEach(m=>m.dispose());coreWire.material.dispose();env.dispose();pmrem.dispose();renderer.dispose();renderer.domElement.remove();};
  }, []);
  return <div className="motion-study">
    <div className="study-heading mono"><span>STUDY 001</span><span>ROTATIONAL MOTION</span></div>
    {!ready && <svg className="study-fallback" viewBox="0 0 500 500" aria-hidden="true"><g fill="none" stroke="#3549f0" strokeWidth="12"><ellipse cx="250" cy="250" rx="190" ry="130" transform="rotate(-30 250 250)"/><ellipse cx="250" cy="250" rx="165" ry="100" transform="rotate(55 250 250)"/><circle cx="250" cy="250" r="80"/></g></svg>}
    <div ref={host} className="study-canvas" tabIndex={0} role="img" aria-label="Interactive 3D gimbal study. Drag with a mouse or use arrow keys to rotate." />
    <div className="study-bottom"><span className="mono">{ready ? 'DRAG OR USE ARROW KEYS' : 'THREE ROTATING AXES'}</span><div><button aria-label={wire?'Show solid model':'Show wireframe'} aria-pressed={wire} onClick={()=>{setWire(!wire);state.current.wire=!wire;}}>{wire?<Box size={18}/>:<ScanLine size={18}/>}</button><button aria-label="Reset model rotation" onClick={()=>{state.current.reset++;}}><RotateCcw size={17}/></button></div></div>
  </div>;
}
