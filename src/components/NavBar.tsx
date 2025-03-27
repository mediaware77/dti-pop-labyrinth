
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-subtle" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md"
            >
              Início
            </Link>
            <Link 
              to="/pops" 
              className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md"
            >
              Procedimentos
            </Link>
            <Link 
              to="/sobre" 
              className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md"
            >
              Sobre
            </Link>
          </nav>
          
          <div className="ml-4 pl-4 border-l border-border/40">
            <form onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value) {
                window.location.href = `/pops?search=${encodeURIComponent(input.value)}`;
              }
            }}>
              <button 
                type="submit"
                className="p-2 text-foreground/60 hover:text-foreground transition-colors rounded-full hover:bg-muted"
                aria-label="Pesquisar"
              >
                <Search size={18} />
              </button>
              <input
                type="text"
                placeholder="Buscar POPs..."
                className="absolute right-12 w-0 opacity-0 focus:w-40 focus:opacity-100 transition-all duration-300 bg-background border border-border rounded-md px-2 py-1"
              />
            </form>
          </div>
        </div>
        
        <button 
          className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[72px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col space-y-6">
          <Link 
            to="/" 
            className="px-4 py-3 text-lg font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/pops" 
            className="px-4 py-3 text-lg font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Procedimentos
          </Link>
          <Link 
            to="/sobre" 
            className="px-4 py-3 text-lg font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar POPs..." 
                className="w-full py-2 pl-10 pr-4 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
