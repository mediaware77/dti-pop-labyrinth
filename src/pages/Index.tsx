
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PopCard from '@/components/PopCard';
import { popData } from '@/data/pops';
import { ChevronRight, FileText, Search, HelpCircle } from 'lucide-react';

const Index = () => {
  // Show only the first 3 POPs in the featured section
  const featuredPops = popData.slice(0, 3);

  return (
    <Layout className="pb-20">
      <Hero />
      
      <div id="content" className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        <section className="animate-fade-up">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Procedimentos em Destaque</h2>
            <p className="text-muted-foreground max-w-3xl">
              Conheça alguns dos principais procedimentos operacionais padronizados da DTI, 
              detalhando processos essenciais para o funcionamento da infraestrutura de TI municipal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPops.map((pop) => (
              <PopCard
                key={pop.id}
                id={pop.id}
                title={pop.title}
                description={pop.description}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/pops" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Ver todos os procedimentos
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </section>
        
        <section className="animate-fade-up grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Search className="text-primary" size={24} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Encontre o que precisa</h3>
            <p className="text-muted-foreground mb-6">
              Utilize nossa busca para localizar rapidamente procedimentos específicos. 
              Todos os POPs estão categorizados e documentados detalhadamente para facilitar sua consulta.
            </p>
            
            <Link 
              to="/pops" 
              className="px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors inline-flex"
            >
              Explorar POPs
            </Link>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <HelpCircle className="text-primary" size={24} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Perguntas Frequentes</h3>
            <p className="text-muted-foreground mb-6">
              Tem dúvidas sobre como utilizar os procedimentos ou precisa de esclarecimentos adicionais? 
              Nossa seção de perguntas frequentes oferece respostas rápidas para as dúvidas mais comuns.
            </p>
            
            <Link 
              to="/sobre" 
              className="px-5 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/70 transition-colors inline-flex"
            >
              Saiba mais
            </Link>
          </div>
        </section>
        
        <section className="animate-fade-up">
          <div className="py-10 px-8 md:p-10 bg-primary/5 rounded-xl border border-primary/10 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold">Sugira melhorias</h2>
              <p className="text-muted-foreground">
                Este repositório de procedimentos é uma obra colaborativa em constante evolução. 
                Se você identificou a necessidade de um novo procedimento ou deseja sugerir melhorias, 
                entre em contato com a equipe da DTI.
              </p>
              <div className="pt-4">
                <a 
                  href="mailto:dti@campinagrande.pb.gov.br" 
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contatar a DTI
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
