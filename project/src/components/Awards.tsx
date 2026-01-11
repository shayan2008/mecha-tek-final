import React from 'react';
import { Trophy, Medal, Award, Globe, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: <Globe size={24} />,
      title: 'Team Canada in Robotics',
      description: 'Selected to represent Canada in international robotics competitions.',
      year: '2025',
      category: 'Robotics',
      color: 'text-red-400',
      image: ['Team Canada Mayor Recognition.jpg', 'Mayor Recognition.jpg', 'Mayor Recognition - Copy.jpg']
    },
    {
      icon: <Trophy size={24} />,
      title: '2x 1st Place, FIRA RoboCup Canada',
      description: 'First place victories in FIRA RoboCup Canada competitions',
      year: '2024',
      category: 'Robotics',
      color: 'text-yellow-400',
      image: ['Fira 1st place autonomous .jpg', 'Fira 1st place autonomous  - Copy.jpg', 'Fira First place DRC.jpg', 'Fira First place DRC - Copy.jpg', 'Fira_ cup.jpg', 'Fira_ cup copy.jpg', 'Fira_ cup copy copy.jpg']
    },
    {
      icon: <Medal size={24} />,
      title: '1st & 2nd Place, RoboCup USA',
      description: 'Rescue Simulation + Super Team categories',
      year: '2024',
      category: 'Robotics',
      color: 'text-yellow-400',
      image: 'Robo cup us open 2nd place.jpg'
    },
    {
      icon: <Award size={24} />,
      title: 'Innovation Award',
      description: 'Recognized for innovative design and problem-solving.',
      year: '2024',
      category: 'Robotics',
      color: 'text-blue-400',
      image: ['Innavtion award.jpg', 'Innavtion award - Copy.jpg']
    },
    {
      icon: <Award size={24} />,
      title: '3rd Place, CETA Robotics Competition',
      description: 'IoT Challenge category',
      year: '2024',
      category: 'Robotics',
      color: 'text-orange-400',
      image: ['CETA.jpg', 'CETA - Copy.jpg']
    },
    {
      icon: <Medal size={24} />,
      title: 'Silver Medal, Toronto Science Fair',
      description: 'MedPort medication tracking system',
      year: '2024',
      category: 'Science',
      color: 'text-gray-400',
      image: ['Medport.jpg', 'Medport _ SienceFair.jpg', 'Medport _ SienceFair copy.jpg', 'Medport _ SienceFair copy copy.jpg']
    },
    {
      icon: <Trophy size={24} />,
      title: '3rd Place, MOSSLTO RoboCup Innovation',
      description: 'TeleSwitch IoT project',
      year: '2024',
      category: 'Robotics',
      color: 'text-orange-400',
      image: 'Participation Mossit.jpg'
    },
    {
      icon: <Award size={24} />,
      title: 'City of Vancouver Recognition',
      description: 'Acknowledged for contributions to the community.',
      year: '2024',
      category: 'Academic',
      color: 'text-purple-400',
      image: ['City of vancovour recognition.jpg', 'City of vancovour recognition - Copy.jpg']
    },
    {
      icon: <Zap size={24} />,
      title: 'Top 20%, OAPT Physics Contest',
      description: 'Ontario Association of Physics Teachers',
      year: '2024',
      category: 'Academic',
      color: 'text-green-400',
      image: 'OAPT.jpg'
    },
    {
      icon: <Trophy size={24} />,
      title: '1st Place, North Region 4x100 Relay',
      description: 'Swimming competition',
      year: '2024',
      category: 'Athletics',
      color: 'text-yellow-400',
      image: 'Medals.jpg'
    },
    {
      icon: <Medal size={24} />,
      title: '3rd Place, 200 Backstroke Division 1',
      description: 'Regional swimming championship',
      year: '2024',
      category: 'Athletics',
      color: 'text-orange-400',
      image: 'Medals - Copy.jpg'
    },
    {
        icon: <Award size={24} />,
        title: 'Merit Award',
        description: 'Awarded for outstanding academic achievement.',
        year: '2024',
        category: 'Academic',
        color: 'text-yellow-400',
        image: 'Merit Award.jpg'
    },
    {
      icon: <Trophy size={24} />,
      title: '1st Place, Ultimate Frisbee',
      description: 'North Region Tier 1',
      year: '2024',
      category: 'Athletics',
      color: 'text-yellow-400'
    },
    {
      icon: <Medal size={24} />,
      title: '3rd place in World Cup Fira 2025 South korea',
      description: 'World Cup Fira in South Korea',
      year: '2025',
      category: 'Robotics',
      color: 'text-orange-400',
      image: ['super team 1st place.jpg', '3rd place in worlds.jpg']
    }
  ];

  const categories = ['All', 'Robotics', 'Science', 'Academic', 'Athletics'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredAwards = activeCategory === 'All' 
    ? awards 
    : awards.filter(award => award.category === activeCategory);

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Awards & Achievements</h2>
            <p className="text-xl text-slate-300 mb-8">
              Recognition for excellence in robotics, academics, and athletics
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAwards.map((award, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-200 border border-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className={`${award.color} mt-1`}>
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {award.title}
                      </h3>
                      <span className="text-sm text-slate-400 ml-2">{award.year}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      {award.description}
                    </p>
                    {award.image && (
                      <div className="relative mt-2 rounded-lg overflow-hidden h-48">
                        {Array.isArray(award.image) ? (
                          <div className="flex overflow-x-auto snap-x snap-mandatory h-full">
                            {award.image.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`${award.title} ${i + 1}`}
                                className="w-full h-full object-cover snap-center flex-shrink-0"
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={award.image}
                            alt={award.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    )}
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-4 ${
                      award.category === 'Robotics' ? 'bg-blue-600/20 text-blue-400' :
                      award.category === 'Science' ? 'bg-green-600/20 text-green-400' :
                      award.category === 'Academic' ? 'bg-purple-600/20 text-purple-400' :
                      'bg-orange-600/20 text-orange-400'
                    }`}>
                      {award.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
