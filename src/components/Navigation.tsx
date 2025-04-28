import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleClick = (sectionId: string) => {
    // Add glitch effect to the body temporarily
    document.body.classList.add('glitch');
    setTimeout(() => {
      document.body.classList.remove('glitch');
    }, 300);
    setActiveSection(sectionId);
  };

  return (
    <nav className="mb-12">
      <div className="terminal-line mb-2">
        <span className="terminal-prompt">$</span>
        <span className="terminal-text">SELECT SECTION:</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className={`terminal-line terminal-nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick(section.id);
              }
            }}
          >
            <span className="terminal-prompt">[{index + 1}]</span>
            <span className="terminal-text">{section.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;