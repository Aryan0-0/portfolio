import React, { useState } from 'react';
import TerminalLine from './TerminalLine';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [showExperience, setShowExperience] = useState(false);
  
  return (
    <section className="terminal-section" id="experience">
      <TerminalLine 
        text="$ cat experience.log"
        className="terminal-header"
        onComplete={() => setShowExperience(true)}
      />
      
      {showExperience && (
        <div className="mt-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <TerminalLine 
                prompt=">"
                text={`${exp.company} [${exp.period}]`}
                delay={40}
                className="text-[var(--terminal-orange)] font-bold"
              />
              
              <TerminalLine 
                prompt=">"
                text={exp.role}
                delay={30}
                className="mb-2 font-medium"
              />
              
              <div className="ml-8">
                {exp.responsibilities.map((resp, i) => (
                  <TerminalLine 
                    key={i}
                    prompt="•"
                    text={resp}
                    delay={20}
                    className="mb-1"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;