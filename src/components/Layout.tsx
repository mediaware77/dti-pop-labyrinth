
import React from 'react';
import NavBar from './NavBar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className={cn("flex-1 w-full max-w-[1920px] mx-auto layout-transition", className)}>
        {children}
      </main>
      <footer className="py-8 px-4 border-t border-border/30 backdrop-blur-sm bg-background/50">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Diretoria de Tecnologia da Informação - Prefeitura Municipal de Campina Grande</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
