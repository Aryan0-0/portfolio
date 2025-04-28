import React, { useState, useEffect } from 'react';
import CRTEffects from './CRTEffects';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

// Portfolio data
const portfolioData = {
  name: "Aryan Sharma",
  bio: "B.Tech IT student passionate about technology and design.\nSpecializing in modern web technologies and UI/UX design.\nLove turning ideas into real-world solutions through code.\nAlways learning, experimenting, and building smarter systems and on a mission to innovate, one project at a time.",
  skills: [
    "JavaScript", 
    "React.js", 
    "Node.js", 
    "SQL",
    "Python", 
    "C++",
    "C",
    "MongoDB",
    "PostgreSQL",
    "Figma",
    "UI/UX Design",
    "Adobe Illustrator",
    "Machine Learning",
 
  ],
  projects: [
    {
      name: "KhetiSahayak",
      tech: ["React", "Node.js", "MongoDB", "RAG", "ML", "Docker"],
      desc: "A full-featured platform for farmers to rent and get equipment wth chatbot application and yield prediction",
      link: "https://KhetiSahayak.example.com"
    },
    
  ],
  experiences: [
    {
      company: "error 404.",
      role: "error 404",
      period: "error 404",
      responsibilities: [
        "error 404",
      ]
    },
  ],
  education: [
    {
      degree: "BTech in Computer Science",
      school: "Dwarkadas J. Sanghvi College Of Engineering",
      year: "2026",
      details: [
        "Specialized in Information Technology",
        "GPA: 7.7/10.0",
      ]
    },

  ],
  contact: {
    email: "aryansharmaaru1109@gmail.com",
    github: "Aryan0-0",
    linkedin: "Aryan-Sharma2657"
  }
};

const Terminal: React.FC = () => {
  const [headerComplete, setHeaderComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    setPowerOn(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '5') {
        const sections = ['about', 'projects', 'experience', 'education', 'contact'];
        const index = parseInt(e.key) - 1;
        if (index >= 0 && index < sections.length) {
          document.body.classList.add('glitch');
          setTimeout(() => {
            document.body.classList.remove('glitch');
          }, 300);
          setActiveSection(sections[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`terminal-container ${powerOn ? 'power-on' : ''}`}>
      <CRTEffects />
      
      <Header 
        name={portfolioData.name} 
        onComplete={() => setHeaderComplete(true)} 
      />
      
      {headerComplete && (
        <>
          <Navigation 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          
          <div className="space-y-8">
            {activeSection === 'about' && (
              <About 
                bio={portfolioData.bio} 
                skills={portfolioData.skills} 
              />
            )}
            
            {activeSection === 'projects' && (
              <Projects 
                projects={portfolioData.projects} 
              />
            )}
            
            {activeSection === 'experience' && (
              <Experience 
                experiences={portfolioData.experiences} 
              />
            )}
            
            {activeSection === 'education' && (
              <Education 
                education={portfolioData.education} 
              />
            )}
            
            {activeSection === 'contact' && (
              <Contact 
                email={portfolioData.contact.email}
                github={portfolioData.contact.github}
                linkedin={portfolioData.contact.linkedin}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Terminal;