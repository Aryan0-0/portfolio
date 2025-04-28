import React from 'react';
import TypeWriter from './TypeWriter';

interface TerminalLineProps {
  prompt?: string;
  text: string;
  delay?: number;
  typing?: boolean;
  className?: string;
  onComplete?: () => void;
}

const TerminalLine: React.FC<TerminalLineProps> = ({ 
  prompt = '>', 
  text, 
  delay = 50, 
  typing = true,
  className = "",
  onComplete
}) => {
  return (
    <div className={`terminal-line ${className}`}>
      {prompt && <span className="terminal-prompt">{prompt}</span>}
      {typing ? (
        <TypeWriter 
          text={text} 
          delay={delay} 
          className="terminal-text"
          onComplete={onComplete}
        />
      ) : (
        <span className="terminal-text">{text}</span>
      )}
    </div>
  );
};

export default TerminalLine;