import React from 'react';
import { Users, Award, Calendar, MapPin, Briefcase } from 'lucide-react';

const Leadership = () => {
  const roles = [
    {
      title: 'Captain, Kavosh Robotics Senior Team',
      organization: 'Kavosh Robotics (kavosh.ai)',
      period: '08/2024 - Present',
      location: 'Toronto, ON',
      description: 'Led AI system design and competition strategy. Oversaw embedded hardware/software integration.',
      achievements: [
        '2x FIRA Champion victories',
        'RoboCup USA Top 2 finish',
        'Led autonomous system design and AI integration',
        'Managed team strategy and coordination'
      ],
      color: 'border-blue-500'
    },
    {
      title: 'Captain, Earl Haig Swim Team',
      organization: 'Earl Haig Secondary School',
      period: '08/2024 - Present',
      location: 'Toronto, ON',
      description: 'Managed training sessions and supported teammates in stroke development and endurance.',
      achievements: [
        'Led team to 2nd in North Region',
        'Developed comprehensive training schedules',
        'Mentored team members for performance improvement',
        'Coordinated team strategy and motivation'
      ],
      color: 'border-cyan-500'
    },
    {
      title: 'President, Robotics Club',
      organization: 'Earl Haig Secondary School',
      period: '08/2023 - Present',
      location: 'Toronto, ON',
      description: 'Designed curriculum and training for members. Oversaw CETA IoT competition submission. Created an innovation pipeline for project cycles.',
      achievements: [
        '3rd Place in CETA IoT Challenge',
        'Led CAD, electronics, and embedded systems training',
        'Directed complete project development cycles',
        'Transitioned from lead designer to president role'
      ],
      color: 'border-purple-500'
    },
    {
      title: 'Ultimate Frisbee Team Player',
      organization: 'Earl Haig Secondary School',
      period: '2024 Season',
      location: 'Toronto, ON',
      description: 'Tier 1 team to win North Region. 2nd at City Finals. Played offense/handler with 90% pass success rate.',
      achievements: [
        'North Region Tier 1 Champions',
        '2nd place at City Finals',
        '90% pass success rate as handler',
        'Key offensive strategy contributor'
      ],
      color: 'border-green-500'
    }
  ];

  const workExperience = [
    {
      title: 'Swim Instructor / Lifeguard / Lifesaving Instructor',
      organization: 'City of Toronto',
      period: '04/2024 - Present',
      description: 'Taught lessons across multiple age groups. Delivered lifesaving training & ensured pool safety.',
      skills: ['First Aid', 'CPR-C', 'Swim Instruction', 'Safety Management']
    },
    {
      title: 'Swim Coach',
      organization: 'North York Aquatic Club',
      period: '02/2025 - Present',
      description: 'Trained competitive youth swimmers. Designed drills, techniques, and team routines.',
      skills: ['Competitive Training', 'Technique Development', 'Team Management']
    },
    {
      title: 'Mentor - Local STEM Programs',
      organization: 'Kavosh Robotics',
      period: '2023 - Present',
      description: 'Helped younger students learn Arduino, robotics & AI. Judged and advised younger teams.',
      skills: ['Arduino', 'Robotics', 'AI', 'Mentoring']
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership & Experience</h2>
            <p className="text-xl text-slate-300">
              Leading teams to excellence in robotics, athletics, and academics
            </p>
          </div>

          {/* Leadership Roles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Leadership Roles</h3>
            <div className="space-y-8">
              {roles.map((role, index) => (
                <div key={index} className={`bg-slate-900/50 rounded-lg p-8 border-l-4 ${role.color} hover:bg-slate-900/70 transition-colors duration-200`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">{role.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-300 mb-4">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Users size={16} />
                          <span className="font-medium">{role.organization}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar size={16} />
                          <span>{role.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-yellow-400" />
                      Key Achievements
                    </h5>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {role.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-900/70 transition-colors duration-200">
                  <div className="flex items-start space-x-3 mb-4">
                    <Briefcase size={24} className="text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{job.title}</h4>
                      <p className="text-blue-400 text-sm mb-1">{job.organization}</p>
                      <p className="text-slate-400 text-sm">{job.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;