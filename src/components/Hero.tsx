
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (!pathRef.current) return;
    
    const animatePath = () => {
      if (!pathRef.current) return;
      const length = pathRef.current.getTotalLength();
      
      // Initial setup
      pathRef.current.style.strokeDasharray = `${length} ${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      
      // Animate
      let start: number;
      function step(timestamp: number) {
        if (start === undefined) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / 2000, 1);
        
        if (pathRef.current) {
          pathRef.current.style.strokeDashoffset = `${length - (progress * length)}`;
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
    };
    
    animatePath();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 subtle-grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            ref={pathRef}
            d="M30,7.5C30,27.9,15,55.8,5,55.8C-5,55.8,-10,27.9,-10,7.5C-10,-12.9,-5,-25.8,5,-25.8C15,-25.8,30,-12.9,30,7.5Z" 
            transform="translate(100 100) scale(3)" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-primary"
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <div className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          Procedimentos Operacionais Padrão
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Guia Completo dos <span className="text-primary">POPs</span> da DTI
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Navegue pelos procedimentos operacionais padronizados da Diretoria de Tecnologia da Informação da Secretaria de Administração.
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
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#content" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium mb-2">Saiba mais</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
