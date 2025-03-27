
import React from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, FileText, Users, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout className="px-4 py-24 animate-fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre a DTI e os POPs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda o papel da Diretoria de Tecnologia da Informação e a importância dos Procedimentos Operacionais Padrão (POPs).
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Seção sobre a DTI com o novo texto */}
          <section className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Diretoria de Tecnologia da Informação</h2>
            <p className="text-muted-foreground mb-4">
              A Diretoria de Tecnologia da Informação é responsável pelo desenvolvimento, implementação e manutenção da infraestrutura e das soluções tecnológicas da Secretaria de Administração da Prefeitura Municipal de Campina Grande. Nosso compromisso é promover a modernização da administração pública por meio do uso estratégico da tecnologia, visando sempre aprimorar a experiência tanto dos servidores municipais quanto dos cidadãos que utilizam os serviços da Prefeitura.
            </p>
            <p className="text-muted-foreground mb-6">
              Atuamos com foco na eficiência, buscando otimizar processos internos mais ágeis e acessíveis. Acreditamos que a transformação digital é essencial para garantir uma gestão pública mais transparente e alinhada às necessidades da população. Por meio da tecnologia, buscamos melhorar e facilitar o acesso aos serviços oferecidos pela Prefeitura.
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

          {/* Seção sobre os POPs */}
          <section className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Procedimentos Operacionais Padrão (POPs)</h2>
            <p className="text-muted-foreground">
              Os POPs documentam e padronizam os processos executados pela DTI. Esta documentação clara e acessível é essencial para manter a qualidade, consistência e eficiência dos serviços de tecnologia prestados à administração municipal e, por extensão, aos cidadãos de Campina Grande. Eles fortalecem a governança de TI, garantem a continuidade dos serviços e promovem a transferência de conhecimento dentro da equipe.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Nossos Princípios</h2> {/* Ajuste no título */}
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
                <h3 className="text-lg font-medium mb-2">Eficiência e Transparência</h3> {/* Ajuste no texto do pilar */}
                <p className="text-sm text-muted-foreground">
                  Otimizar a gestão dos processos de TI, alinhando-os às necessidades da administração e promovendo a transparência.
                </p>
              </div>
            </div>
          </section>
          
          {/* Removida a seção duplicada sobre a DTI */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
