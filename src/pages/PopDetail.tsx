
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PopDetail from '@/components/PopDetail';
import { ArrowLeft } from 'lucide-react';
import { popData } from '@/data/pops';

const PopDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const pop = popData.find(p => p.id === id);
  
  if (!pop) {
    return (
      <Layout className="px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">POP não encontrado</h1>
          <p className="text-muted-foreground mb-8">O procedimento que você está procurando não existe ou foi removido.</p>
          <Link 
            to="/pops" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para lista de POPs
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout className="px-4 py-24 animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/pops" 
          className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista de POPs
        </Link>
        
        <PopDetail
          id={pop.id}
          title={pop.title}
          description={pop.description}
          objective={pop.objective}
          steps={pop.steps}
          imageUrl={pop.imageUrl} // Passa a URL da imagem
        />
      </div>
    </Layout>
  );
};

export default PopDetailPage;
