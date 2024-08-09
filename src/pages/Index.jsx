import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Zap } from 'lucide-react';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      setShowEasterEgg(true);
    }
  }, [clickCount]);

  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'experience', component: <Experience /> },
    { id: 'skills', component: <Skills /> },
    { id: 'contact', component: <Contact /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="min-h-screen py-20">
          {section.component}
        </section>
      ))}
      <div
        className="fixed bottom-4 right-4 cursor-pointer"
        onClick={() => setClickCount((prev) => prev + 1)}
      >
        <Zap className="w-8 h-8 text-yellow-400" />
      </div>
      {showEasterEgg && <EasterEgg />}
    </div>
  );
};

const Hero = () => (
  <div className="container mx-auto flex flex-col items-center justify-center h-screen">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl font-bold mb-4 text-center"
    >
      Kristian Ruiz Kyvik
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-2xl text-cyan-400 mb-8 text-center"
    >
      Senior Software Engineer | Tech Lead
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex space-x-4"
    >
      <a href="https://www.linkedin.com/in/kristianruizkyvik/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-8 h-8 text-blue-500 hover:text-blue-400" />
      </a>
      <a href="https://github.com/kristiankyvik" target="_blank" rel="noopener noreferrer">
        <Github className="w-8 h-8 text-purple-500 hover:text-purple-400" />
      </a>
      <a href="mailto:kristiankyvik@gmail.com">
        <Mail className="w-8 h-8 text-green-500 hover:text-green-400" />
      </a>
    </motion.div>
  </div>
);

const About = () => (
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center text-pink-500">About Me</h2>
    <p className="text-xl mb-6 text-center max-w-3xl mx-auto">
      I'm a passionate Senior Software Engineer and Tech Lead with over 10 years of experience in the industry. 
      My expertise lies in building scalable web applications and leading development teams to success.
    </p>
    <p className="text-xl text-center max-w-3xl mx-auto">
      Currently, I'm working at Oda, where I contribute to revolutionizing the online grocery shopping experience.
    </p>
  </div>
);

const Experience = () => (
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Experience</h2>
    <div className="space-y-8">
      <ExperienceItem
        company="Oda"
        position="Senior Software Engineer"
        duration="2021 - Present"
        description="Leading development teams and architecting scalable solutions for online grocery shopping."
      />
      <ExperienceItem
        company="Kolonial.no"
        position="Tech Lead"
        duration="2019 - 2021"
        description="Managed and mentored development teams, implemented best practices, and drove technical initiatives."
      />
      <ExperienceItem
        company="Schibsted"
        position="Software Engineer"
        duration="2016 - 2019"
        description="Developed and maintained large-scale web applications for various Schibsted products."
      />
    </div>
  </div>
);

const ExperienceItem = ({ company, position, duration, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{company}</h3>
    <h4 className="text-xl mb-2 text-green-400">{position}</h4>
    <p className="text-sm mb-2 text-purple-400">{duration}</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Skills = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "GraphQL",
    "REST APIs", "Agile Methodologies", "Team Leadership", "System Architecture"
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-500">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-full text-cyan-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 text-purple-500">Get in Touch</h2>
    <p className="text-xl mb-6">
      Interested in collaborating or just want to say hi? Feel free to reach out!
    </p>
    <a
      href="mailto:kristiankyvik@gmail.com"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
    >
      Send me an email
    </a>
  </div>
);

const EasterEgg = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
  >
    <div className="bg-gray-900 p-8 rounded-lg text-center">
      <h3 className="text-3xl font-bold mb-4 text-yellow-400">Easter Egg Found!</h3>
      <p className="text-xl mb-6 text-cyan-400">
        Congratulations! You've discovered the hidden easter egg. 
        As a reward, here's a fun fact about me:
      </p>
      <p className="text-lg text-pink-400">
        I once coded for 48 hours straight to win a hackathon, 
        fueled only by coffee and my passion for programming!
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </motion.div>
);

export default Index;
