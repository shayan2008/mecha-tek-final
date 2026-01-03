import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import Certificates from './components/Certificates';
import Gallery from './components/Gallery';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Leadership />
        <Certificates />
        <Gallery />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;