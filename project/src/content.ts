export const links = {
  github: 'https://github.com/shayan2008',
  linkedin: 'https://www.linkedin.com/in/shayan-doroudiani',
  email: 'mailto:shayan.doroud86@gmail.com',
};
export const projects = [
  { title: 'LaneLab', category: 'Software', type: 'Swimming software · Active project', description: 'Swimming software for practice planning, lane organization and race analysis. Built from my experience as a swimmer and coach.', detail: 'Practice building, lane organization, race analysis, pacing tools, AI coaching and printable deck sheets. Built with React, TypeScript, Cloudflare Workers, D1 and Gemini. Presented with Yichen Liu for CAYIA 2026.', image: '/portfolio/lanelab.jpg', tags: ['React / TypeScript', 'Cloudflare', 'Gemini'], url: 'https://lanelab.studio', label: 'Open LaneLab', featured: true },
  { title: 'Rescue Simulation', category: 'Robotics', type: 'Kavosh · RoboCupJunior', description: 'Autonomous rescue software, written in Python and tested in competition. Our Kavosh team won the 2026 World Cup Rescue Simulation SuperTeam category.', detail: 'Earlier results include second place in Rescue Simulation at RoboCup Americas / US Open 2025. My work spans autonomous decision-making, debugging and preparation with the team.', image: '/Rescue Simulation 2026 Words championship 1st place.png', tags: ['Python', 'Autonomy', 'Team competition'], url: 'https://github.com/shayan2008/Robocup-Junior-simulation', label: 'View source', featured: true },
  { title: 'MedPort', category: 'Hardware', type: 'Toronto Science Fair · Silver, 2025', description: 'A connected medication and supplement box, built with Tom Zhang. I worked on the mechanical design, 3D modeling, electronics and robotics.', detail: 'Sensors record intake events and connect the physical box to a private logging interface. We built and exhibited the prototype at the Toronto Science Fair.', image: '/Medport _ SienceFair copy copy.jpg', tags: ['CAD', 'Electronics', 'IoT'], url: 'https://www.linkedin.com/posts/shayan-doroudiani_it-was-a-great-experience-and-hopefully-we-activity-7319017135526039553-3jU6', label: 'Read the project story', featured: true },
  { title: 'DRC Explorer', category: 'Robotics', type: 'FIRA Canada gold · World Cup bronze, 2025', description: 'C++ and Python development for a competition exploration robot. First in U19 DRC Explorer at FIRA Canada and third at the World Cup in Korea.', detail: 'Work across robot programming, sensing, movement and hardware integration with Kavosh.', image: '/Robot_DRC.png', tags: ['C++', 'Python', 'Robot control'], url: '/Fira First place DRC - Copy.jpg', label: 'View award' },
  { title: 'Autonomous Car', category: 'Robotics', type: 'FIRA Canada · U19 first place, 2025', description: 'Computer vision for a Jetson-based autonomous vehicle, including lane detection and road-sign recognition.', detail: 'Python, OpenCV, YOLO and Roboflow-assisted model development, integrated with the team’s vehicle hardware.', image: '/profile-placeholder copy.png', tags: ['Jetson', 'OpenCV', 'YOLO'], url: '/Fira 1st place autonomous  - Copy.jpg', label: 'View award' },
  { title: 'Media automation pipeline', category: 'Software', type: 'Next Inc. · Internship project, 2026', description: 'A research-to-media workflow that produces scripts, narrated audio and 1080p video with subtitles.', detail: 'Built during my Software / AI internship, connecting research, script generation, narration and media processing.', image: '/pipline.png', tags: ['Python', 'AI', 'Media processing'], url: '/Automated Financial News Pipeline.pdf', label: 'Read the report' },
  { title: 'TeleSwitch', category: 'Hardware', type: 'Connected electronics', description: 'A four-relay smart plug controlled over Wi-Fi and SMS, with a custom circuit and mobile controls.', detail: 'An embedded project combining relay control, wireless communication and circuit design.', image: '/TeleSwitch circuit.png', tags: ['Embedded', 'PCB', 'SMS / Wi-Fi'], url: '/Tele_Switch_Final_EN.pdf', label: 'View presentation' },
  { title: 'Smart Vase', category: 'Hardware', type: 'Connected planter · Built prototype', description: 'Sensor-controlled watering and a mobile interface for a connected planter.', detail: 'A working prototype joining sensors, electronics and a simple control interface.', image: '/Smart Vase2.jpg', tags: ['Sensors', 'IoT', 'Prototyping'], url: '/Smart_Vase_Beautified_EN_pptx-Repaired.pdf', label: 'View presentation' },
  { title: 'SwimTrack', category: 'Software', type: 'Java / JavaFX', description: 'A lightweight desktop app for entering swimmers and race results, then exploring event and performance trends.', detail: 'Data entry and charting without a database dependency.', image: '/swimtrack.png', tags: ['Java', 'JavaFX', 'Charts'], url: 'https://github.com/shayan2008/SwimTrack', label: 'View source' },
  { title: 'Coin Cabin', category: 'Software', type: 'Hackathon project', description: 'A budgeting and financial-literacy tool with AI-assisted spending guidance.', detail: 'Built at a hackathon, with a public implementation in the ignition_hacks repository.', image: '/coin cabin.jpg', tags: ['React', 'Python', 'AI'], url: 'https://github.com/shayan2008/ignition_hacks', label: 'View source' },
  { title: 'SPYS', category: 'Software', type: 'Swimming analysis interface', description: 'A React and TypeScript interface exploring swim progress and stroke analysis.', detail: 'An earlier swimming-software project, separate from LaneLab and SwimTrack.', image: '/SPYS.png', tags: ['React', 'TypeScript', 'Vite'], url: 'https://spys.netlify.app/', label: 'Open project' },
  { title: 'Gesture Imitator', category: 'Software', type: 'Computer vision', description: 'A real-time gesture-recognition and imitation experiment.', detail: 'Exploring human movement as an input for software and robotics.', tags: ['Python', 'Computer vision'], url: 'https://github.com/shayan2008/gesture-imitator', label: 'View source' },
  { title: 'PID Line Follower', category: 'Robotics', type: 'Embedded control', description: 'A five-sensor line-following robot with PID correction and PWM motor control.', detail: 'Tuning sensing and motor response on a physical prototype. Related work includes Rescue Line and preparation for Rescue Maze.', image: '/Line following robot copy copy.jpg', tags: ['C++', 'PID', 'Arduino'], url: '/Robot line followe design.png', label: 'View design' },
  { title: 'Wireless Crane', category: 'Hardware', type: 'Embedded prototype', description: 'A physical crane prototype with wireless movement control.', detail: 'A practical exercise in electromechanical assembly and remote control.', image: '/Wireless Crane.jpg', tags: ['Electronics', 'Wireless control'], url: '/Wireless Crane.jpg', label: 'View build' },
  { title: 'Freestyle pacing with calculus', category: 'Software', type: 'Independent modeling project', description: 'A Python and Streamlit project exploring the connection between calculus, pacing and swimming performance.', detail: 'A Streamlit app that fits a pacing plan to a target time or analyzes four 50 m splits. The model combines underwater velocity decay, an anaerobic reserve and a lactate proxy. Its outputs are simplified comparisons, not physiological measurements.', tags: ['Python', 'Streamlit', 'Mathematical modeling'], url: 'https://calculus-optimiziation-200mfree.streamlit.app/', label: 'Open live optimizer' },
];
export const awards = [
  ['2026', '1st · Rescue Simulation SuperTeam', 'RoboCupJunior World Cup · Kavosh', '/Rescue Simulation 2026 Words championship 1st place.png'],
  ['2026', 'Canadian Achievement Scholarship', 'Scholarship recipient', ''],
  ['2025', '1st · U19 Autonomous Car', 'FIRA Canada Open · Kavosh Senior', '/Fira 1st place autonomous  - Copy.jpg'],
  ['2025', '1st · U19 DRC Explorer', 'FIRA Canada Open · Kavosh Senior', '/Fira First place DRC - Copy.jpg'],
  ['2025', '3rd · DRC Explorer', 'FIRA World Cup · Daegu, South Korea', '/3rd place in worlds.jpg'],
  ['2025', 'Best United Team', 'FIRA World Cup · Tele-Op United Challenge · KAVOSH VIC', '/fira-world-cup-2025.png'],
  ['2025', '2nd · Rescue Simulation', 'RoboCup Americas / US Open · Kavosh', '/Robo cup us open 2nd place.jpg'],
  ['2025', '1st · Rescue Simulation SuperTeam', 'RoboCup Americas / US Open · Team result', '/super team 1st place.jpg'],
  ['2025', 'Silver medal · MedPort', 'Toronto Science Fair · With Tom Zhang', '/Medport _ SienceFair copy copy.jpg'],
  ['2024–25', 'Swimmer of the Year', 'North York Aquatic Club', '/Merit Award.jpg'],
  ['2025', '3rd · CETA Robotics', 'School robotics competition', ''],
  ['2025', 'Top 20% · Physics Contest', 'Ontario Association of Physics Teachers', '/OAPT.jpg'],
  ['2023', '3rd · Mositto Cup', 'Robotics innovation', '/Innavtion award - Copy.jpg'],
];
export const experience = [
  ['2026', 'Software / AI Intern', 'Next Inc.', 'Worked on a media automation pipeline connecting research, scripts, narration and subtitled video output.'],
  ['2024–present', 'Lifeguard & Swim / Lifesaving Instructor', 'City of Toronto', '700+ hours as of September 2026, covering pool supervision, instruction, participant safety and emergency response.'],
  ['2025–present', 'Swim Coach', 'North York Aquatic Club', 'Coach younger swimmers through technique work, drills and feedback. 100+ coaching hours recorded; I also continue to swim with NYAC.'],
  ['Since Grade 10', 'Senior Team Captain & Robotics Teacher', 'Kavosh Robotics', 'Competition development across software, electronics and mechanical systems. Taught robotics in 2025–26, with 100+ teaching hours.'],
  ['400+ hours', 'Robotics Mentor & Teaching Assistant', 'Canadian National Robotics Society', 'Volunteer mentoring, event organization and hands-on support for students learning robotics.'],
  ['Internship', 'Shonood Telecom', 'Telecommunications', 'Earlier internship experience alongside my robotics and software work.'],
];
export const gallery = [
 ['/Medport _ SienceFair copy copy.jpg', 'Presenting MedPort with Tom Zhang'],
 ['/Fira_ cup copy copy.jpg', 'Kavosh at FIRA Canada'],
 ['/Robot_DRC.png', 'DRC Explorer build'],
 ['/Smart Vase2.jpg', 'Smart Vase prototype'],
 ['/TeleSwitch circuit.png', 'TeleSwitch circuit design'],
 ['/Line following robot copy copy.jpg', 'Line-follower prototype'],
];
