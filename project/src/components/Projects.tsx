import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Robotics', 'AI', 'Embedded', 'IoT', 'Apps'];

  const projects = [
    {
      title: 'DRC Explorer Robot',
      description: 'An autonomous mobile robot built for simulated disaster and rescue missions. Uses SLAM-based navigation, onboard sensors, and task modules for map generation and autonomous decision-making.',
      image: '/Line following robot copy copy.jpg',
      technologies: ['Arduino', 'Lidar', 'Python', 'IR Sensors', 'OpenCV'],
      category: 'Robotics',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Autonomous Car (Jetson Nano)',
      description: 'Designed for obstacle avoidance, object detection, and real-time lane correction. Uses Python and OpenCV on the Jetson Nano platform for deep-learning vision integration.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetson Nano', 'Python', 'OpenCV', 'Deep Learning'],
      category: 'AI',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'SwimStroke AI',
      description: 'A motion-sensing AI system that tracks stroke count, speed, and form using machine learning. Offers swimmers personalized technique feedback via a mobile app.',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Android Studio', 'ML Kit', 'Motion Sensors', 'Java'],
      category: 'AI',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'QuantBot',
      description: 'Simulated algorithmic trading bot using the Alpha Vantage API. Performs equity curve analysis, portfolio optimization, and real-time backtesting with custom financial logic.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Alpha Vantage API'],
      category: 'Apps',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'MedPort',
      description: 'IoT-enabled medication reminder box with real-time tracking, sensor logging, and mobile notifications. Award-winning at Toronto Science Fair with refill alerts and dosage logging.',
      image: '/Medport _ SienceFair copy copy.jpg',
      technologies: ['Arduino', 'IoT', 'Mobile App', 'Sensors'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Solar Tracker',
      description: 'An Arduino-powered system that aligns solar panels with maximum light intensity using dual LDR sensors and servo motors. Optimizes energy output using real-time light conditions.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Arduino', 'Servo Motors', 'LDR Sensors', 'Solar Panels'],
      category: 'Embedded',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'TeleSwitch (WiFi & SMS)',
      description: 'A smart plug system controllable via both an app and SMS. Supports multiple devices and includes energy usage analytics and remote scheduling.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ESP32', 'WiFi', 'SMS API', 'Mobile App'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Smart Vase',
      description: 'IoT smart plant system that self-waters based on soil moisture, light level, and humidity feedback. Features a closed-loop automation system with an app dashboard.',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Arduino', 'Sensors', 'IoT', 'Mobile App'],
      category: 'IoT',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Coin Cabin',
      description: 'Hackathon-built AI-powered budgeting and financial literacy tool. Integrates OpenAI\'s GPT to provide spending advice, budgeting strategy, and financial coaching.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['OpenAI GPT', 'Python', 'React', 'API Integration'],
      category: 'Apps',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Line Follower',
      description: 'Advanced line-following robot using PID control and ultrasonic sensors. Adaptable to changes in terrain and capable of path correction in real time.',
      image: '/Line following robot copy copy.jpg',
      technologies: ['Arduino', 'PID Control', 'Ultrasonic Sensors', 'C++'],
      category: 'Robotics',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    },
    {
      title: 'Rescue Line & Maze Robot',
      description: 'Built for competitive maze-solving and line-rescue missions. Uses multi-sensor input (IR, Ultrasonic, Encoder) and an autonomous decision system to complete challenges.',
      image: '/Line following robot copy copy.jpg',
      technologies: ['Arduino', 'IR Sensors', 'Ultrasonic', 'Encoders'],
      category: 'Robotics',
      liveUrl: '#',
      githubUrl: 'https://github.com/shayan2008/'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-300 mb-8">
              Innovative solutions spanning robotics, AI, and embedded systems
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Details</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
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

export default Projects;