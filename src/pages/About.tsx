
import React from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, FileText, Users, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout className="px-4 py-24 animate-fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre o Projeto</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça mais sobre a iniciativa de documentação dos Procedimentos Operacionais Padrão da DTI
          </p>
        </div>
        
        <div className="space-y-12">
          <section className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">O Projeto POP Labyrinth</h2>
            <p className="text-muted-foreground mb-4">
              O POP Labyrinth é uma iniciativa da Diretoria de Tecnologia da Informação da Prefeitura Municipal de Campina Grande 
              para documentar e padronizar todos os procedimentos operacionais executados pela equipe. Este projeto visa fortalecer 
              a governança de TI, garantir a continuidade dos serviços e promover a transferência de conhecimento.
            </p>
            <p className="text-muted-foreground">
              A documentação clara e acessível de nossos procedimentos é essencial para manter a qualidade e eficiência dos 
              serviços de tecnologia prestados à administração municipal e, por extensão, aos cidadãos de Campina Grande.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Os Pilares do Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Padronização</h3>
                <p className="text-sm text-muted-foreground">
                  Garantir que todos os procedimentos sejam executados de forma consistente, independente de quem os realize
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Compartilhamento</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitar a transferência de conhecimento entre membros da equipe e reduzir a dependência de conhecimento tácito
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Governança</h3>
                <p className="text-sm text-muted-foreground">
                  Melhorar a transparência e gestão dos processos de TI, alinhando-os às necessidades da administração municipal
                </p>
              </div>
            </div>
          </section>
          
          <section className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Diretoria de Tecnologia da Informação</h2>
            <p className="text-muted-foreground mb-4">
              A DTI é o órgão responsável pelo planejamento, desenvolvimento, implantação e manutenção de toda a infraestrutura 
              tecnológica da Prefeitura Municipal de Campina Grande. Nosso trabalho abrange desde o suporte técnico aos usuários 
              até o desenvolvimento de soluções inovadoras para melhorar a eficiência dos serviços públicos.
            </p>
            <p className="text-muted-foreground mb-6">
              Estamos comprometidos com a modernização da administração pública através do uso estratégico da tecnologia, 
              sempre buscando melhorar a experiência tanto dos servidores municipais quanto dos cidadãos que interagem com 
              os serviços da prefeitura.
            </p>
            
            <a 
              href="https://campinagrande.pb.gov.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Visitar o site da Prefeitura
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
