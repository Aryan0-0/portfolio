import React, { useState } from 'react';
import TerminalLine from './TerminalLine';

interface AboutProps {
  bio: string;
  skills: string[];
}

const About: React.FC<AboutProps> = ({ bio, skills }) => {
  const [showBio, setShowBio] = useState(false);
  
  return (
    <section className="terminal-section" id="about">
      <TerminalLine 
        text='.segment "ABOUT"'
        className="terminal-header"
        onComplete={() => setShowBio(true)}
      />
      
      {showBio && (
        <>
          <TerminalLine 
            prompt=";"
            text="Personal bio"
            typing={false}
            className="mb-2"
          />
          <div className="ml-4 mb-4">
            {bio.split('\n').map((line, index) => (
              <TerminalLine 
                key={index}
                prompt=""
                text={line}
                delay={30}
                typing={true}
              />
            ))}
          </div>
          
          <TerminalLine 
            prompt=";"
            text="Skills array"
            typing={false}
            className="mb-2"
          />
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <TerminalLine 
                key={index}
                prompt="["
                text={`${index}] "${skill}"`}
                delay={20}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default About;