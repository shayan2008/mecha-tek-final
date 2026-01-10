import React from 'react';
import { Award, Code, Zap, Heart, Shield, Cpu } from 'lucide-react';

const Certificates = () => {
  const certificateCategories = [
    {
      title: 'Programming & Engineering',
      icon: <Code size={24} />,
      color: 'text-blue-400',
      certificates: [
        {
          name: 'Mechatronics Course Certificate',
          details: '100+ hours of comprehensive training',
          issuer: 'Professional Development',
          image: 'Mechatronic Course.png',
        },
        {
          name: 'Altium Designer PCB Design Certificate',
          details: 'Advanced PCB design and layout',
          issuer: 'Altium'
        },
        {
          name: 'STM32 Microcontroller Programming',
          details: 'Embedded systems programming',
          issuer: 'STMicroelectronics'
        }
      ]
    },
    {
      title: 'Safety & Emergency Response',
      icon: <Shield size={24} />,
      color: 'text-red-400',
      certificates: [
        {
          name: 'Lifeguard Certification',
          details: 'Pool and waterfront safety',
          issuer: 'Lifesaving Society'
        },
        {
          name: 'Swim Instructor Certification',
          details: 'Teaching swimming techniques',
          issuer: 'Swim Canada'
        },
        {
          name: 'Standard First Aid & CPR-C',
          details: 'Emergency response training',
          issuer: 'Red Cross'
        },
        {
          name: 'Lifesaving Instructor',
          details: 'Advanced lifesaving instruction',
          issuer: 'Lifesaving Society'
        }
      ]
    },
    {
      title: 'Digital & Technical Skills',
      icon: <Zap size={24} />,
      color: 'text-green-400',
      certificates: [
        {
          name: 'Google Digital Marketing Certificate',
          details: 'Digital marketing fundamentals',
          issuer: 'Google'
        }
      ]
    }
  ];

  const technicalSkills = [
    {
      category: 'Programming',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Hardware',
      skills: ['Arduino', 'Jetson Nano', 'Raspberry Pi', 'STM32', 'ESP32']
    },
    {
      category: 'Circuits/CAD',
      skills: ['Altium', 'EasyEDA', 'SolidWorks', 'Fusion 360']
    },
    {
      category: 'App Development',
      skills: ['JavaFX', 'Android Studio', 'MIT App Inventor', 'Web Development']
    },
    {
      category: 'AI/ML',
      skills: ['OpenCV', 'ML Kit', 'Alpha Vantage', 'GPT Integration']
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Skills</h2>
            <p className="text-xl text-slate-300">
              Professional certifications and technical expertise spanning technology, safety, and education
            </p>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {certificateCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.certificates.map((cert, certIndex) => (
                      <div key={certIndex} className="bg-slate-900/50 rounded-lg p-4 hover:bg-slate-900/70 transition-colors duration-200">
                        <div className="flex items-start space-x-3">
                          <Award size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-white text-sm mb-1">
                              {cert.name}
                            </h5>
                            <p className="text-slate-300 text-xs mb-2">
                              {cert.details}
                            </p>
                            <p className="text-slate-400 text-xs">
                              {cert.issuer}
                            </p>
                            {cert.image && (
                              <img src={cert.image} alt={cert.name} className="mt-2 rounded-lg" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu size={20} className="text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full text-sm hover:bg-slate-900/70 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30">
              <Heart size={32} className="text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                These certifications and skills represent my dedication to continuous learning and professional development. 
                From technical expertise in robotics and programming to safety certifications that enable me to 
                teach and mentor others, each qualification contributes to my ability to make a positive impact 
                in technology and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;