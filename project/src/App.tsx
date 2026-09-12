import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Plus, Minus, X, Menu, Pause, Play, Github, Linkedin, Mail, Cpu, Code2, Waves, MoveUpRight } from 'lucide-react';
import { projects, awards, experience, gallery, links } from './content';
import { LaneVisual, RescueVisual, PacingVisual } from './components/ProjectVisuals';
const MotionStudy = lazy(() => import('./components/MotionStudy'));
const optimizer = 'https://calculus-optimiziation-200mfree.streamlit.app/';
const asset = (path: string) => path.startsWith('/') ? encodeURI(path) : path;
type Project = typeof projects[number];
const navigation = [['projects', 'Work'], ['about', 'About'], ['leadership', 'Experience'], ['awards', 'Recognition'], ['contact', 'Contact']];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [paused, setPaused] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState('All');
  const [allAwards, setAllAwards] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [photo, setPhoto] = useState<string[]>([]);
  const modal = useRef<HTMLDialogElement>(null);
  const photoModal = useRef<HTMLDialogElement>(null);
  const strip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running';
  }, [paused]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(preference.matches);
    preference.addEventListener('change', update);
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); reveal.unobserve(entry.target); }
    }), { threshold: .06 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    const sections = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(el => sections.observe(el));
    const scroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--progress', `${height > 0 ? window.scrollY / height * 100 : 0}%`);
    };
    window.addEventListener('scroll', scroll, { passive: true }); scroll();
    return () => { reveal.disconnect(); sections.disconnect(); preference.removeEventListener('change', update); window.removeEventListener('scroll', scroll); };
  }, []);

  const openProject = (p: Project) => { setSelected(p); modal.current?.showModal(); };
  const openPhoto = (src: string, caption: string) => { setPhoto([src, caption]); photoModal.current?.showModal(); };
  const filtered = projects.filter(p => filter === 'All' || p.category === filter);
  const closeOnBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => { if (e.target === e.currentTarget) e.currentTarget.close(); };
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="#home" className="signature" aria-label="Shayan Doroudiani home">sd<span className="signature-dot">.</span><span className="signature-caption mono">MECHA TEK</span></a>
      <nav className={menu ? 'navigation open' : 'navigation'} aria-label="Main navigation">
        {navigation.map(([id, text]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setMenu(false)}>{text}<span /></a>)}
      </nav>
      <div className="header-actions"><button className="motion-toggle" aria-label={paused ? 'Enable animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}<span className="mono">MOTION {paused ? 'OFF' : 'ON'}</span></button><button className="menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></div>
    </header>
    <aside className="side-rail" aria-hidden="true"><span className="rail-type mono">SHAYAN DOROUDIANI — SELECTED WORK</span><span className="rail-line"><i /></span><span className="mono">2026</span></aside>
    <main id="main">
      <section className="hero container" id="home">
        <div className="hero-top mono"><span>ENGINEERING SCIENCE / UNIVERSITY OF TORONTO</span><span>43.65° N &nbsp; 79.38° W</span></div>
        <div className="hero-stage">
          <div className="hero-name"><p className="hello mono"><span className="small-cross">+</span> HI, I’M</p><h1>Shayan<span>Doroudiani<span className="name-period">.</span></span></h1><p className="hero-intro">I build robots and software.<br />Sometimes, the two meet.</p><p className="hero-bio">First-year Engineering Science student.<br />Competitive swimmer. Coach. Curious about how things work.</p><a className="round-link" href="#projects"><span className="round-icon"><ArrowDown size={20} /></span>Explore the work</a></div>
          <div className="hero-object"><Suspense fallback={<div className="model-loading mono">ROTATIONAL MOTION / LOADING STUDY</div>}><MotionStudy paused={paused} /></Suspense></div>
        </div>
        <div className="hero-footer"><div className="hero-credit"><span className="mono">CURRENTLY</span><p>U of T Engineering Science <span>3T0</span></p></div><a href="#awards" className="latest"><span className="latest-mark">↗</span><div><span className="mono">WITH KAVOSH / 2026</span><p>RoboCupJunior World Cup<br /><strong>1st · Rescue Simulation SuperTeam</strong></p></div><ArrowUpRight size={20} /></a></div>
      </section>

      <section className="work-section section container" id="projects">
        <div className="section-heading reveal"><div className="section-label mono"><span>01</span> SELECTED WORK</div><div className="heading-line"><h2>A few things<br />I’ve <span className="serif-word">made.</span></h2><p>From a robot’s next move<br />to a coach’s next practice.</p></div></div>
        <div className="featured-grid">
          <article className="feature-card lane-card reveal">
            <button className="feature-art" onClick={() => openProject(projects[0])} aria-label="Explore LaneLab project"><LaneVisual /><span className="art-top mono">01 / SWIMMING SOFTWARE</span><span className="art-open"><ArrowUpRight /></span><div className="lane-title">Lane<span>Lab</span><small>Built from time on deck.</small></div></button>
            <div className="feature-description"><div><h3>LaneLab</h3><span className="mono">REACT · TYPESCRIPT · CLOUDFLARE</span></div><p>Practice plans, lane organization and race analysis in one workspace. Built from my experience as a swimmer and coach.</p><a className="link" href="https://lanelab.studio" target="_blank" rel="noreferrer">Open LaneLab <ArrowUpRight size={17} /></a></div>
          </article>
          <article className="feature-card rescue-card reveal">
            <button className="feature-art" onClick={() => openProject(projects[1])} aria-label="Explore Rescue Simulation project"><RescueVisual /><span className="art-top mono">02 / AUTONOMOUS ROBOTICS</span><span className="art-open"><ArrowUpRight /></span><span className="simulation-note mono">PATH-PLANNING ILLUSTRATION</span></button>
            <div className="feature-description"><div><h3>Rescue Simulation</h3><span className="mono">PYTHON · KAVOSH · ROBOCUPJUNIOR</span></div><p>Autonomous rescue software and competition work with Kavosh. World Cup SuperTeam champions in 2026.</p><button className="link" onClick={() => openProject(projects[1])}>The project & result <ArrowUpRight size={17} /></button></div>
          </article>
          <article className="feature-card medport-card reveal">
            <button className="feature-art" onClick={() => openProject(projects[2])} aria-label="Explore MedPort project"><img src={asset('/Medport _ SienceFair copy copy.jpg')} alt="Shayan and Tom Zhang presenting MedPort at the Toronto Science Fair" loading="lazy" /><span className="art-top mono">03 / CONNECTED HARDWARE</span><span className="art-open"><ArrowUpRight /></span><span className="photo-tag mono">TORONTO SCIENCE FAIR / SILVER</span></button>
            <div className="feature-description"><div><h3>MedPort</h3><span className="mono">MECHANICAL DESIGN · ELECTRONICS · IOT</span></div><p>A connected medication and supplement box, built with Tom Zhang. My work covered 3D modeling, mechanical design and electronics.</p><button className="link" onClick={() => openProject(projects[2])}>See what we built <ArrowUpRight size={17} /></button></div>
          </article>
        </div>
        <div className="project-index"><button className="archive-toggle" aria-expanded={expanded} aria-controls="project-archive" onClick={() => setExpanded(!expanded)}><span><span className="mono">PROJECT INDEX</span><strong>{expanded ? 'Close the index' : 'More experiments & builds'}</strong></span><span className="archive-count mono">{projects.length} PROJECTS {expanded ? <Minus /> : <Plus />}</span></button>
          {expanded && <div id="project-archive"><div className="filters" aria-label="Filter projects">{['All', 'Robotics', 'Hardware', 'Software'].map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}<span>{f === 'All' ? projects.length : projects.filter(p => p.category === f).length}</span></button>)}</div><div className="archive-list">{filtered.map((p) => <button key={p.title} className="archive-row" onClick={() => openProject(p)}><span className="mono">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span><strong>{p.title}</strong><span className="archive-category mono">{p.category}</span><ArrowUpRight size={20} /></button>)}</div></div>}
        </div>
      </section>

      <section className="research-band" id="research"><div className="container research-grid"><div className="research-copy reveal"><span className="mono">ANOTHER SIDE OF THE SAME QUESTION</span><h2>Four lengths.<br /><span className="serif-word">One race.</span></h2><p>How do you distribute your effort over 200 metres? My freestyle optimizer explores pacing, underwater speed and energy limits with calculus, Python and Streamlit.</p><div className="research-links"><a className="button blue-button" href={optimizer} target="_blank" rel="noreferrer">Open the live optimizer <ArrowUpRight size={18} /></a><a className="link" href="https://github.com/shayan2008/Calculus-Optimization-of-200-Free" target="_blank" rel="noreferrer">Source code <Github size={16} /></a><a className="link" href={asset('/200m_freestyle_calculus_optimization_report.pdf')} target="_blank" rel="noreferrer">Read the report <ArrowUpRight size={16} /></a></div></div><div className="research-diagram reveal"><div className="diagram-title"><span className="distance">200<span>m</span></span><span className="mono">FREESTYLE<br />PACING STUDY</span></div><PacingVisual /></div></div></section>

      <section className="section container about-section" id="about"><div className="section-label mono reveal"><span>02</span> A LITTLE CONTEXT</div><div className="about-grid"><div className="about-left reveal"><div className="portrait-composition"><span className="portrait-label mono">SHAYAN / TORONTO</span><img src="/profile-placeholder.png" alt="Shayan Doroudiani" loading="lazy" /><span className="portrait-corner">+</span></div><p className="portrait-caption">Usually building something.<br />Or at the pool.</p><a className="link" href="/resume-2026.html" target="_blank" rel="noreferrer">View / print résumé <ArrowUpRight size={17} /></a></div><div className="about-copy reveal"><h2>I like knowing<br /><span className="serif-word">what’s underneath.</span></h2><p className="large-copy">The code behind a robot’s decision. The circuit behind a sensor. The maths behind a race.</p><p>I moved from Iran to Canada in Grade 10 and graduated from Earl Haig in 2026. I’m now studying Engineering Science at the University of Toronto, with an interest in robotics, embedded systems and machine intelligence.</p><p>With Kavosh, I’ve worked across competition software, electronics and mechanical systems. Through LaneLab, I’m connecting that technical work to another part of my life: swimming and coaching.</p><p>Away from projects, I read philosophy, play chess and spend a lot of time in the water. I still swim and coach with NYAC, where I was named Swimmer of the Year for 2024–25.</p><div className="toolkit"><div><Cpu /><h3>Hardware</h3><p>Arduino, ESP32, STM32, Jetson, SolidWorks, Fusion 360, PCB design</p></div><div><Code2 /><h3>Software</h3><p>Python, C / C++, Java, React, TypeScript, OpenCV, YOLO</p></div><div><Waves /><h3>On deck</h3><p>Swim coaching, instruction, lifesaving and practice planning</p></div></div></div></div></section>

      <section className="section experience-section" id="leadership"><div className="container"><div className="section-heading reveal"><div className="section-label mono"><span>03</span> EXPERIENCE</div><div className="heading-line"><h2>Where I’ve<br /><span className="serif-word">spent my time.</span></h2><p>Building systems.<br />Teaching people. Leading teams.</p></div></div><div className="experience-list">{experience.map(([date, title, org, description]) => <article key={title} className="experience-row reveal"><span className="mono experience-date">{date}</span><div><h3>{title}</h3><p className="organization">{org}</p></div><p>{description}</p></article>)}</div><div className="school-record reveal"><h3>At Earl Haig</h3><div><p><strong>Robotics Club President, 2025–26.</strong> Previously co-president and lead designer. Expanded the club to 40+ members and four weekly meetings; founded its VEX team and AI division.</p><p><strong>Science Fair Manager, 2025–26.</strong> Science Society. Hack Club Executive Trainer in 2024–25.</p><p><strong>Swim Team Head Captain, 2025–26.</strong> Previously Open Boys Captain. OFSAA qualifier with regional medals and a city silver. Also played on the Ultimate Frisbee team, which placed first at regionals and second at city level.</p></div></div></div></section>

      <section className="section container awards-section" id="awards"><div className="section-heading reveal"><div className="section-label mono"><span>04</span> RECOGNITION</div><div className="heading-line"><h2>A few <span className="serif-word">milestones.</span></h2><p>Team results and individual recognition.<br />Original records, where available.</p></div></div><div className="award-spotlight reveal"><div className="spotlight-number">01<span>ST</span></div><div className="spotlight-copy"><span className="mono">2026 / KAVOSH</span><h3>RoboCupJunior<br />World Cup</h3><p>Rescue Simulation SuperTeam</p><button className="link" onClick={() => openPhoto(awards[0][3], '2026 RoboCupJunior World Cup · Rescue Simulation SuperTeam · 1st with Kavosh')}>View the trophy <ArrowUpRight size={17} /></button></div><MoveUpRight className="spotlight-arrow" strokeWidth={.7} aria-hidden="true" /></div><div className="awards-list">{(allAwards ? awards.slice(1) : awards.slice(1, 6)).map(([year, title, event, img]) => <div className="award-row" key={title}><span className="mono">{year}</span><div><h3>{title}</h3><p>{event}</p></div>{img && <button className="icon-button" aria-label={'View record for ' + title} onClick={() => openPhoto(img, title + ' · ' + event)}><ArrowUpRight size={20} /></button>}</div>)}</div><button className="more-awards link" aria-expanded={allAwards} onClick={() => setAllAwards(!allAwards)}>{allAwards ? 'Show fewer' : 'All awards & results'} {allAwards ? <Minus size={18} /> : <Plus size={18} />}</button>{allAwards && <p className="evidence-note">Original records keep their printed wording. The 2025 US Open SuperTeam certificate identifies the event without a placement. The NYAC trophy reads “Merit Award, Senior B Group”; the title above reflects my club award.</p>}<div className="credentials"><div><span className="mono">CAYIA / 2026</span><h3>LaneLab competition entry</h3><p>Engineering and coaching workflows, alongside Yichen Liu on product, design and communication.</p></div><div id="certificates"><span className="mono">TRAINING & QUALIFICATIONS</span><h3>Aquatics & mechatronics</h3><p>National Lifeguard, Standard First Aid / CPR-C, Swim Instructor, Lifesaving Instructor and NCCP Swimming 101. Also completed a 500-hour mechatronics course.</p><a className="link" href={asset('/Mechatronic Course - Copy.png')} target="_blank" rel="noreferrer">Mechatronics certificate <ArrowUpRight size={17} /></a></div></div></section>

      <section className="section gallery-section" id="gallery"><div className="container"><div className="gallery-heading reveal"><div><span className="mono">A FEW FRAMES ALONG THE WAY</span><h2>Off the <span className="serif-word">screen.</span></h2></div><div className="gallery-controls"><button className="icon-button" aria-label="Previous photos" onClick={() => strip.current?.scrollBy({left:-400,behavior:paused?'instant':'smooth'})}><ArrowLeft size={20}/></button><button className="icon-button" aria-label="Next photos" onClick={() => strip.current?.scrollBy({left:400,behavior:paused?'instant':'smooth'})}><ArrowRight size={20}/></button></div></div></div><div className="filmstrip" ref={strip}>{gallery.map(([src,caption],i)=><button className="film-frame" key={src} onClick={()=>openPhoto(src,caption)}><div className="frame-holes" aria-hidden="true"/><img src={asset(src)} alt={caption} loading="lazy"/><span><b className="mono">{String(i+1).padStart(2,'0')}</b>{caption}<ArrowUpRight size={16}/></span></button>)}</div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy reveal"><span className="mono">05 / SAY HELLO</span><h2>Let’s <span className="serif-word">talk.</span><ArrowUpRight aria-hidden="true"/></h2><p>About a project, an opportunity,<br />or something you’re curious about.</p><a className="email-link" href={links.email}>shayan.doroud86@gmail.com <ArrowUpRight size={22}/></a><div className="social-links"><a href={links.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a><a href="/resume-2026.html" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={17}/></a></div></div><form className="contact-form reveal" onSubmit={e=>{e.preventDefault();const d=new FormData(e.currentTarget);window.location.href=links.email+'?subject='+encodeURIComponent('Portfolio inquiry from '+d.get('name'))+'&body='+encodeURIComponent(`${d.get('message')}\n\nFrom: ${d.get('name')}\nReply to: ${d.get('email')}`);}}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required/><label htmlFor="email">Email</label><input id="email" name="email" autoComplete="email" type="email" required/><label htmlFor="message">What’s on your mind?</label><textarea id="message" name="message" rows={3} required/><button className="button" type="submit">Open email draft <Mail size={17}/></button><p className="form-note">Opens your email app. You send the message from there.</p></form></div><footer className="container"><a className="signature" href="#home">sd<span className="signature-dot">.</span></a><p className="mono">© {new Date().getFullYear()} SHAYAN DOROUDIANI</p><a className="mono" href="#home">BACK TO TOP ↑</a></footer></section>
    </main>

    <dialog aria-label="Project details" className="project-dialog" ref={modal} onClick={closeOnBackdrop}><div className="dialog-header"><span className="mono">PROJECT NOTES</span><button className="icon-button" aria-label="Close project" onClick={()=>modal.current?.close()}><X/></button></div>{selected && <div className="dialog-content"><span className="mono">{selected.type}</span><h2>{selected.title}</h2><p className="dialog-intro">{selected.description}</p>{selected.image && <img className="dialog-image" src={asset(selected.image)} alt={selected.title+' project image'}/>}<p>{selected.detail}</p><ul className="tags">{selected.tags.map(t=><li key={t}>{t}</li>)}</ul><a className="button blue-button" href={asset(selected.url)} target="_blank" rel="noreferrer">{selected.label}<ArrowUpRight size={18}/></a>{selected.title==='Freestyle pacing with calculus' && <div className="dialog-extra"><a className="link" href="https://github.com/shayan2008/Calculus-Optimization-of-200-Free" target="_blank" rel="noreferrer">Source code <Github size={16}/></a><a className="link" href={asset('/200m_freestyle_calculus_optimization_report.pdf')} target="_blank" rel="noreferrer">Full report <ArrowUpRight size={16}/></a></div>}</div>}</dialog>
    <dialog aria-label="Image viewer" className="image-dialog" ref={photoModal} onClick={closeOnBackdrop}><div className="dialog-header"><p>{photo[1]}</p><button className="icon-button" aria-label="Close image" onClick={()=>photoModal.current?.close()}><X/></button></div>{photo[0]&&<img src={asset(photo[0])} alt={photo[1]}/>}<a className="link" href={asset(photo[0]||'#')} target="_blank" rel="noreferrer">Open original image <ArrowUpRight size={17}/></a></dialog>
  </>;
}
export default App;
