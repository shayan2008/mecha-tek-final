import React from 'react';
import { Trophy, Medal, Award, Star, Globe, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: <Trophy size={24} />,
      title: '2x 1st Place, FIRA RoboCup Canada',
      description: 'First place victories in FIRA RoboCup Canada competitions',
      year: '2024',
      category: 'Robotics',
      color: 'text-yellow-400'
    },
    {
      icon: <Medal size={24} />,
      title: '1st & 2nd Place, RoboCup USA',
      description: 'Rescue Simulation + Super Team categories',
      year: '2024',
      category: 'Robotics',
      color: 'text-yellow-400'
    },
    {
      icon: <Globe size={24} />,
      title: 'FIRA World Championships Qualifier',
      description: 'Qualified for Korea & Brazil 2025',
      year: '2025',
      category: 'Robotics',
      color: 'text-blue-400'
    },
    {
      icon: <Award size={24} />,
      title: '3rd Place, CETA Robotics Competition',
      description: 'IoT Challenge category',
      year: '2024',
      category: 'Robotics',
      color: 'text-orange-400'
    },
    {
      icon: <Medal size={24} />,
      title: 'Silver Medal, Toronto Science Fair',
      description: 'MedPort medication tracking system',
      year: '2024',
      category: 'Science',
      color: 'text-gray-400'
    },
    {
      icon: <Trophy size={24} />,
      title: '3rd Place, MOSSLTO RoboCup Innovation',
      description: 'TeleSwitch IoT project',
      year: '2024',
      category: 'Robotics',
      color: 'text-orange-400'
    },
    {
      icon: <Star size={24} />,
      title: 'SHAD Canada 2025',
      description: 'Admitted (declined due to conflict)',
      year: '2025',
      category: 'Academic',
      color: 'text-purple-400'
    },
    {
      icon: <Zap size={24} />,
      title: 'Top 20%, OAPT Physics Contest',
      description: 'Ontario Association of Physics Teachers',
      year: '2024',
      category: 'Academic',
      color: 'text-green-400'
    },
    {
      icon: <Trophy size={24} />,
      title: '1st Place, North Region 4x100 Relay',
      description: 'Swimming competition',
      year: '2024',
      category: 'Athletics',
      color: 'text-yellow-400'
    },
    {
      icon: <Medal size={24} />,
      title: '3rd Place, 200 Backstroke Division 1',
      description: 'Regional swimming championship',
      year: '2024',
      category: 'Athletics',
      color: 'text-orange-400'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Jim Mason Squash Cup',
      description: 'Undefeated season',
      year: '2024',
      category: 'Athletics',
      color: 'text-yellow-400'
    },
    {
      icon: <Trophy size={24} />,
      title: '1st Place, Ultimate Frisbee',
      description: 'North Region Tier 1',
      year: '2024',
      category: 'Athletics',
      color: 'text-yellow-400'
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
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
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