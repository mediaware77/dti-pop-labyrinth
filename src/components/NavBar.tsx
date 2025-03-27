
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 10);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOnHomepage = location.pathname === '/';

  // Determine if dark theme styles (foreground text, colored logo) should be used
  const useDarkTheme = isScrolled || !isOnHomepage;
  const logoSrc = useDarkTheme ? "/2logo_dti.png" : "/branco_dti.png";

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
          <Logo logoSrc={logoSrc} />
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-sm transition-colors rounded-md",
                useDarkTheme ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-gray-300"
              )}
            >
              Início
            </Link>
            <Link
              to="/pops"
              className={cn(
                "px-4 py-2 text-sm transition-colors rounded-md",
                useDarkTheme ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-gray-300"
              )}
            >
              Procedimentos
            </Link>
            <Link
              to="/sobre"
              className={cn(
                "px-4 py-2 text-sm transition-colors rounded-md",
                useDarkTheme ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-gray-300"
              )}
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
                className={cn(
                  "p-2 transition-colors rounded-full",
                  useDarkTheme
                    ? "text-foreground/60 hover:text-foreground hover:bg-muted" 
                    : "text-white hover:text-gray-300 hover:bg-white/10"
                )}
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
          className={cn(
            "md:hidden p-2 transition-colors",
            useDarkTheme ? "text-foreground/80 hover:text-foreground" : "text-white hover:text-gray-300"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[72px] bg-gray-900/95 backdrop-blur-sm shadow-lg z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col space-y-6">
          <Link 
            to="/" 
            className="px-4 py-3 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/pops" 
            className="px-4 py-3 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Procedimentos
          </Link>
          <Link 
            to="/sobre" 
            className="px-4 py-3 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
