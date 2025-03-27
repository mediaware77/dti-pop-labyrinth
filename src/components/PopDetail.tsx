
import React from 'react';
import { cn } from '@/lib/utils';
import { FileText, Workflow, CheckCircle, Clock } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface PopDetailProps {
  id: string;
  title: string;
  description: string;
  objective: string;
  steps: Step[];
  imageUrl?: string; // Adiciona imageUrl às props
  className?: string;
}

const PopDetail: React.FC<PopDetailProps> = ({
  id,
  title,
  description,
  objective,
  steps,
  imageUrl, // Recebe imageUrl
  className,
}) => {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-4">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {id}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        
        <p className="text-xl text-muted-foreground max-w-4xl">
          {description}
        </p>
      </div>

      {/* Adiciona a imagem se imageUrl existir, com largura máxima e centralizada */}
      {imageUrl && (
        <div className="my-8 flex justify-center">
          <div className="max-w-2xl rounded-lg overflow-hidden border border-border shadow-md">
            <img 
              src={imageUrl?.replace('/public/', '/')} 
              alt={`Fluxograma para ${title}`} 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div className="col-span-1 md:col-span-2 space-y-10">
          <section className="glass-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold">Objetivo</h2>
            </div>
            <p className="text-muted-foreground">
              {objective}
            </p>
          </section>
          
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <Workflow className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold">Procedimento Detalhado</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border/50" />
              
              <ol className="space-y-8">
                {steps.map((step, index) => (
                  <li key={index} className="relative pl-10">
                    <div 
                      className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-medium text-sm"
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
        
        <div className="col-span-1 space-y-6">
          <section className="glass-card rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">Informações Gerais</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Tempo estimado</p>
                  <p className="text-muted-foreground">Variável de acordo com a complexidade</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Resultado esperado</p>
                  <p className="text-muted-foreground">Procedimento executado conforme padrão estabelecido</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="glass-card rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">Documentos Relacionados</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                >
                  Fluxograma do processo
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                >
                  Modelo de documentação
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PopDetail;
