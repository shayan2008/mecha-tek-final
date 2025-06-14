import React from 'react';
import { Bot, Trophy, Users, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Bot size={32} />,
      title: 'Robotics Innovation',
      description: 'Advanced system design, programming logic, and embedded systems integration for competitive robotics.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Competitive Excellence',
      description: 'Leading teams to podium finishes in international competitions like RoboCup and FIRA.'
    },
    {
      icon: <Users size={32} />,
      title: 'Leadership & Mentoring',
      description: 'Team captain, instructor, and mentor contributing to both athletic and technical excellence.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Impact',
      description: 'Competing internationally across USA, Korea, and Brazil with world-class achievements.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="mb-8">
            <img 
              src="/profile-placeholder copy copy.png"
              alt="Shayan Doroudiani" 
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500/30"
            />
          </div>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Shayan Doroudiani is a driven and passionate high school student from Toronto, Canada. He specializes in 
            robotics, AI, and embedded systems, and has represented Canada in world-class competitions such as FIRA and RoboCup. 
            Shayan balances his technical strengths with leadership roles in school clubs and a strong presence in athletics.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            He is a certified lifeguard, swim coach, squash player, and ultimate frisbee champion. Shayan's passion for 
            learning extends beyond the classroom — whether it's coding an AI-powered app, engineering a rescue robot, 
            or winning a 4x100 freestyle relay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors duration-200">
              <div className="text-blue-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-relaxed">
            When not building robots or competing in the pool, Shayan can be found mentoring younger students, 
            exploring cutting-edge AI technologies, or leading his school's robotics initiatives. He believes in 
            the power of technology to solve real-world problems and is passionate about inspiring the next 
            generation of innovators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;