
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PopCard from '@/components/PopCard';
import { Search } from 'lucide-react';
import { popData } from '@/data/pops';

const Pops: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = new URLSearchParams(window.location.search);
  const initialSearch = searchParams.get('search') || '';
  
  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const filteredPops = popData.filter(pop => 
    pop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pop.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout className="px-4 py-24 animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Procedimentos Operacionais Padrão</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore todos os procedimentos padronizados da DTI para garantir consistência e qualidade nos serviços
          </p>
        </div>
        
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Pesquisar POPs por título, descrição ou ID..." 
              className="w-full py-3 pl-12 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-subtle"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {filteredPops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPops.map((pop) => (
              <PopCard
                key={pop.id}
                id={pop.id}
                title={pop.title}
                description={pop.description}
                imageUrl={pop.imageUrl} // Passa a URL da imagem
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum POP encontrado para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pops;
