
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface PopCardProps {
  id: string;
  title: string;
  description: string;
  className?: string;
}

const PopCard: React.FC<PopCardProps> = ({ id, title, description, className }) => {
  return (
    <Link
      to={`/pop/${id}`}
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card p-6 hover-card-effect",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        <div className="mb-3">
          <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {id}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm flex-1">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-border/50 flex justify-end">
          <span className="inline-flex items-center text-sm font-medium text-primary">
            Ver detalhes
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PopCard;
