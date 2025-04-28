import React, { useState } from 'react';
import TerminalLine from './TerminalLine';
import { ExternalLink, GitBranch, Star } from 'lucide-react';

interface Project {
  name: string;
  tech: string[];
  desc: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [showProjects, setShowProjects] = useState(false);
  
  return (
    <section className="terminal-section" id="projects">
      <TerminalLine 
        text='.segment "PROJECTS"'
        className="terminal-header"
        onComplete={() => setShowProjects(true)}
      />
      
      {showProjects && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="flex items-center justify-between mb-4">
                <TerminalLine 
                  prompt=""
                  text={`PROJECT_${String(index + 1).padStart(2, '0')}`}
                  typing={false}
                  className="text-[var(--terminal-orange)] font-bold"
                />
                <div className="flex items-center space-x-2">
                  <GitBranch size={16} className="text-[var(--terminal-green)]" />
                  <Star size={16} className="text-[var(--terminal-orange)]" />
                </div>
              </div>
              
              <div className="space-y-3">
                <TerminalLine 
                  prompt="name:"
                  text={project.name}
                  delay={30}
                  className="font-medium"
                />
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-[var(--terminal-dark-bg)] text-[var(--terminal-green)] border border-[var(--terminal-green)] border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <TerminalLine 
                  prompt="desc:"
                  text={project.desc}
                  delay={20}
                  className="text-sm opacity-90"
                />
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[var(--terminal-blue)] hover:text-[var(--terminal-white)] transition-colors duration-300 mt-4"
                >
                  <span>View Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;