import React, { useState } from 'react';
import TerminalLine from './TerminalLine';

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const [showEducation, setShowEducation] = useState(false);
  
  return (
    <section className="terminal-section" id="education">
      <TerminalLine 
        text=".data"
        className="terminal-header"
        onComplete={() => setShowEducation(true)}
      />
      
      {showEducation && (
        <div className="mt-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="ml-2">
                <TerminalLine 
                  prompt="degree"
                  text={`db "${edu.degree}"`}
                  delay={40}
                  className="mb-1"
                />
                
                <TerminalLine 
                  prompt="school"
                  text={`db "${edu.school}"`}
                  delay={40}
                  className="mb-1"
                />
                
                <TerminalLine 
                  prompt="year"
                  text={`db "${edu.year}"`}
                  delay={40}
                  className="mb-1"
                />
                
                {edu.details && edu.details.length > 0 && (
                  <div className="mt-2 ml-4">
                    <TerminalLine 
                      prompt="details"
                      text="dd"
                      typing={false}
                      className="mb-1"
                    />
                    
                    {edu.details.map((detail, i) => (
                      <TerminalLine 
                        key={i}
                        prompt="    >"
                        text={detail}
                        delay={30}
                        className="mb-1"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Education;