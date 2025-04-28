import React, { useState, useEffect } from 'react';
import TerminalLine from './TerminalLine';

interface HeaderProps {
  name: string;
  onComplete: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, onComplete }) => {
  const [step, setStep] = useState(0);
  
  const completeStep = () => {
    setStep(prev => prev + 1);
  };
  
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  return (
    <header className="mb-8">
      {step >= 0 && (
        <TerminalLine 
          text="INIT portfolio.sys" 
          onComplete={completeStep}
        />
      )}
      
      {step >= 1 && (
        <TerminalLine 
          text="Loading..." 
          delay={100}
          onComplete={completeStep}
        />
      )}
      
      {step >= 2 && (
        <TerminalLine 
          text={`${name}.exe`}
          onComplete={completeStep}
        />
      )}
      
      {step >= 3 && (
        <TerminalLine 
          text={`"Hello, World!"`}
          prompt=''
          delay={150}
          className="text-xl md:text-2xl mt-4"
        />
      )}
    </header>
  );
};

export default Header;