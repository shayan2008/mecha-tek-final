import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You could integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'shayan.doroud86@gmail.com',
      link: 'mailto:shayan.doroud86@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '647-975-3236',
      link: 'tel:647-975-3236'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Toronto, Canada',
      link: '#'
    },
    {
      icon: <Globe size={24} />,
      title: 'Website',
      value: 'mecha-tek.com',
      link: 'https://mecha-tek.com'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/shayan-doroudiani',
      link: 'https://www.linkedin.com/in/shayan-doroudiani'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/shayan2008',
      link: 'https://github.com/shayan2008/'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300">
              Let's discuss robotics, AI, or collaboration opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors duration-200"
                  >
                    <div className="text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{info.title}</h4>
                      <p className="text-slate-300 text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30 mb-8">
                <h4 className="text-lg font-semibold mb-4">Available for:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Robotics collaboration and mentoring</li>
                  <li>• AI and embedded systems projects</li>
                  <li>• Speaking at tech events and competitions</li>
                  <li>• Swimming coaching and instruction</li>
                  <li>• STEM education and outreach</li>
                </ul>
              </div>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
              >
                <Download size={20} />
                <span>📄 Download Resume</span>
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or collaboration idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;