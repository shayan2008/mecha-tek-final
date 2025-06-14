import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <div className="absolute inset-0 bg-[url('/src/assets/images/Fira_ cup copy copy.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Shayan Doroudiani
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-slate-200">
            Mechatronics & AI Systems
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Inventor. Competitor. Leader. Athlete.
          </p>
          
          {/* Quick Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
              <div className="text-lg font-bold text-blue-400">🇨🇦 Toronto</div>
              <div className="text-xs text-slate-300">Grade 11</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
              <div className="text-lg font-bold text-purple-400">🏆 15+</div>
              <div className="text-xs text-slate-300">Awards in Robotics & Science</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
              <div className="text-lg font-bold text-cyan-400">🤖 12+</div>
              <div className="text-xs text-slate-300">Technical Projects</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
              <div className="text-lg font-bold text-green-400">🏊 Captain</div>
              <div className="text-xs text-slate-300">Swim, Frisbee, Squash</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
              <div className="text-lg font-bold text-yellow-400">🌍 International</div>
              <div className="text-xs text-slate-300">USA, Korea, Brazil</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/shayan-doroudiani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shayan2008/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:shayan.doroud86@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>💼 View Resume</span>
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Eye size={20} />
              <span>🔬 Explore Projects</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition-colors duration-200"
            >
              📨 Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;