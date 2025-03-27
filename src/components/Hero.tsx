
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground'; // Import the new component

const Hero: React.FC = () => {
  // Removed unused useEffect and pathRef

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-[#0a0f1a]"> {/* Changed background color */}
      <AnimatedBackground /> {/* Use the new component */}

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-up text-white">
        <div className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          Procedimentos Operacionais Padrão
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Guia dos <span className="text-primary">POPs</span> da DTI {/* Keep primary color for span or adjust later */}
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto"> {/* Adjusted text color */}
          Navegue pelos procedimentos operacionais padronizados da SAD - DTI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link 
            to="/pops" 
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md shadow-subtle hover:bg-primary/90 transition-colors"
          >
            Explorar POPs
          </Link>
          <Link 
            to="/sobre" 
            className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/70 transition-colors"
          >
            Sobre
          </Link>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#content" className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"> {/* Adjusted text color */}
          <span className="text-sm font-medium mb-2">Saiba mais</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
