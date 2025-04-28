import React, { useState } from 'react';
import TerminalLine from './TerminalLine';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  email: string;
  github?: string;
  linkedin?: string;
}

const Contact: React.FC<ContactProps> = ({ email, github, linkedin }) => {
  const [showContact, setShowContact] = useState(false);
  
  return (
    <section className="terminal-section" id="contact">
      <TerminalLine 
        text="INTERRUPT 21h"
        className="terminal-header"
        onComplete={() => setShowContact(true)}
      />
      
      {showContact && (
        <>
          <TerminalLine 
            text="/contact"
            prompt=""
            className="mb-4 text-[var(--terminal-orange)]"
          />
          
          <div className="ml-4">
            <div className="mb-4 flex items-center">
              <span className="terminal-prompt">{'>'}</span>
              <span className="terminal-text mr-2">Email:</span>
              <a 
                href={`mailto:${email}`}
                className="text-[var(--terminal-blue)] hover:text-[var(--terminal-white)] flex items-center"
              >
                <Mail size={16} className="mr-2" />
                {email}
              </a>
            </div>
            
            {github && (
              <div className="mb-4 flex items-center">
                <span className="terminal-prompt">{'>'}</span>
                <span className="terminal-text mr-2">GitHub:</span>
                <a 
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--terminal-blue)] hover:text-[var(--terminal-white)] flex items-center"
                >
                  <Github size={16} className="mr-2" />
                  {github}
                </a>
              </div>
            )}
            
            {linkedin && (
              <div className="mb-4 flex items-center">
                <span className="terminal-prompt">{'>'}</span>
                <span className="terminal-text mr-2">LinkedIn:</span>
                <a 
                  href={`https://linkedin.com/in/${linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--terminal-blue)] hover:text-[var(--terminal-white)] flex items-center"
                >
                  <Linkedin size={16} className="mr-2" />
                  {linkedin}
                </a>
              </div>
            )}
          </div>
          
          <div className="mt-8 pt-8 border-t border-[var(--terminal-green)] border-opacity-30">
            <TerminalLine 
              prompt="$"
              text="echo 'Thank you for visiting my portfolio!'"
              typing={true}
              delay={30}
            />
            <pre className="text-[var(--terminal-gray)] text-xs mt-4 max-w-full overflow-auto">

            </pre>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;