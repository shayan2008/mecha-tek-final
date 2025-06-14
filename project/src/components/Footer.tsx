import React from 'react';
import { Github, Linkedin, Mail, Heart, Download, Globe, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/shayan2008/',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/shayan-doroudiani',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:shayan.doroud86@gmail.com',
      label: 'Email'
    },
    {
      icon: <Globe size={20} />,
      href: 'https://mecha-tek.com',
      label: 'Website'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#awards', label: 'Awards' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shayan Doroudiani</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Mechatronics & AI Systems specialist dedicated to innovation, competition excellence, 
              and inspiring the next generation of STEM leaders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resume */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300 mb-6">
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <span>shayan.doroud86@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>647-975-3236</span>
              </p>
              <p className="flex items-center space-x-2">
                <Globe size={16} />
                <span>Toronto, ON, Canada</span>
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 text-sm"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Shayan Doroudiani. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
              Built with <Heart size={16} className="mx-1 text-red-500" /> and lots of innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;