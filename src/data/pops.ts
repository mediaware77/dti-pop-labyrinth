
export interface Step {
  title: string;
  description: string;
}

export interface Pop {
  id: string;
  title: string;
  description: string;
  objective: string;
  steps: Step[];
}

export const popData: Pop[] = [
  {
    id: "POP.DTI.001",
    title: "Criação, alteração e suspensão de usuários nos sistemas internos",
    description: "Procedimento para gerenciar o ciclo de vida das contas de usuário em sistemas essenciais como 1Doc, E-cidades, Central de Compras, Ponto Eletrônico, E-mail Institucional, entre outros.",
    objective: "Padronizar o processo de criação, alteração e suspensão de usuários nos sistemas internos da PMCG, garantindo controle de acesso e segurança da informação, além de manter a consistência dos dados de usuários em todos os sistemas.",
    steps: [
      {
        title: "Recebimento da solicitação",
        description: "A DTI recebe a solicitação formal via sistema 1Doc, devidamente autorizada pela chefia do setor solicitante, contendo as informações necessárias do colaborador e o tipo de acesso requerido."
      },
      {
        title: "Análise e validação dos dados",
        description: "O técnico da DTI responsável verifica a completude e validade das informações fornecidas, incluindo nome completo, CPF, e-mail, setor, cargo/função e tipos de permissões necessárias."
      },
      {
        title: "Cadastro no sistema",
        description: "Após validação, o técnico realiza o cadastro do usuário no sistema solicitado, configurando as permissões de acordo com o perfil e função do colaborador, seguindo o princípio do privilégio mínimo."
      },
      {
        title: "Configuração de credenciais",
        description: "São geradas credenciais iniciais (login e senha temporária) que obrigam o usuário a alterá-las no primeiro acesso, garantindo a confidencialidade."
      },
      {
        title: "Comunicação e documentação",
        description: "As credenciais são enviadas de forma segura ao usuário, e todos os detalhes do cadastro são documentados no sistema de gestão da DTI para fins de auditoria."
      },
      {
        title: "Finalização do atendimento",
        description: "O chamado é finalizado no sistema 1Doc com todas as informações relevantes sobre o atendimento realizado, incluindo data/hora e responsável pela execução."
      }
    ]
  },
  {
    id: "POP.DTI.002",
    title: "Dispensa de Licitação",
    description: "Orienta sobre os passos necessários para realizar aquisições de bens ou serviços de TI por meio de dispensa de licitação, desde a coleta de cotações e elaboração do DOD até a análise jurídica e o recebimento do item.",
    objective: "Padronizar o processo de aquisição de bens e serviços de TI através de dispensa de licitação, assegurando a conformidade legal e a eficiência administrativa nas compras públicas de pequeno valor.",
    steps: [
      {
        title: "Identificação da necessidade",
        description: "A equipe da DTI identifica a necessidade de aquisição de bens ou serviços de TI e verifica se o valor estimado se enquadra nos limites legais para dispensa de licitação."
      },
      {
        title: "Elaboração do Documento de Oficialização de Demanda (DOD)",
        description: "É preparado o DOD contendo a justificativa técnica detalhada, especificações precisas do item, quantitativo necessário e valor estimado baseado em pesquisa preliminar."
      },
      {
        title: "Pesquisa de preços",
        description: "São coletadas no mínimo três cotações de fornecedores diferentes do mercado, além de consulta a contratações similares feitas por outros órgãos públicos e preços registrados no Painel de Preços do Governo Federal."
      },
      {
        title: "Elaboração do Termo de Referência",
        description: "Com base nas informações levantadas, é elaborado o Termo de Referência detalhando todas as condições da contratação, requisitos técnicos, prazos, condições de entrega e critérios de aceitação."
      },
      {
        title: "Análise de viabilidade orçamentária",
        description: "O processo é encaminhado ao setor financeiro para verificação da disponibilidade orçamentária e emissão da nota de pré-empenho."
      },
      {
        title: "Análise jurídica",
        description: "A Procuradoria Geral do Município analisa o processo para verificar a conformidade legal da dispensa de licitação, emitindo parecer jurídico."
      },
      {
        title: "Homologação e empenho",
        description: "Após aprovação jurídica, a autoridade competente homologa a dispensa e é emitida a nota de empenho, formalizando o compromisso de pagamento."
      },
      {
        title: "Contratação e acompanhamento",
        description: "É emitida a ordem de fornecimento ao fornecedor selecionado e designado um fiscal técnico para acompanhar a entrega e instalação do item."
      },
      {
        title: "Recebimento e ateste",
        description: "A DTI realiza o recebimento provisório para testes e verificações técnicas, seguido do recebimento definitivo e ateste da nota fiscal após confirmação da conformidade técnica."
      }
    ]
  },
  {
    id: "POP.DTI.003",
    title: "Adesão de Ata de Registro de Preço",
    description: "Padroniza o processo de adesão a Atas de Registro de Preços existentes para aquisição de produtos ou serviços de TI, descrevendo a verificação de compatibilidade, solicitação ao órgão gerenciador, contato com fornecedor e trâmites internos.",
    objective: "Estabelecer os procedimentos para adesão a Atas de Registro de Preços (carona) de outros órgãos, garantindo celeridade nas aquisições de TI com conformidade legal e vantajosidade para a administração pública.",
    steps: [
      {
        title: "Identificação da necessidade",
        description: "A DTI identifica a necessidade de aquisição de produtos ou serviços de TI e decide pela modalidade de adesão a uma Ata de Registro de Preços existente."
      },
      {
        title: "Busca por Atas vigentes",
        description: "É realizada uma pesquisa no Portal Nacional de Contratações Públicas (PNCP) para identificar Atas de Registro de Preços válidas que contenham os itens desejados com as especificações técnicas compatíveis."
      },
      {
        title: "Análise de vantajosidade",
        description: "A equipe técnica realiza a análise comparativa entre os preços registrados na Ata e os praticados no mercado, através de pesquisa de preços, para comprovar a vantajosidade econômica da adesão."
      },
      {
        title: "Consulta ao órgão gerenciador",
        description: "É formalizada consulta ao órgão gerenciador da Ata selecionada, solicitando autorização para adesão e informando os itens e quantitativos desejados, limitados a 50% dos quantitativos registrados."
      },
      {
        title: "Consulta ao fornecedor",
        description: "Após autorização do órgão gerenciador, é consultado o fornecedor detentor do registro de preços sobre seu interesse e possibilidade de fornecer os itens conforme condições registradas na Ata."
      },
      {
        title: "Instrução processual",
        description: "O processo é instruído com: justificativa da necessidade, especificações técnicas, estudo técnico preliminar, termo de referência, documentação da Ata (edital, ata, publicação), comprovação de vantajosidade e autorizações obtidas."
      },
      {
        title: "Análise jurídica",
        description: "O processo completo é submetido à análise da Procuradoria Geral do Município para verificação da conformidade legal da adesão."
      },
      {
        title: "Emissão de empenho",
        description: "Após aprovação jurídica e verificação de disponibilidade orçamentária, é emitida a nota de empenho correspondente aos itens que serão adquiridos."
      },
      {
        title: "Formalização da contratação",
        description: "É formalizado o contrato ou instrumento equivalente com o fornecedor, estabelecendo prazos, condições de entrega e demais obrigações conforme a Ata de origem."
      },
      {
        title: "Recebimento e fiscalização",
        description: "A DTI realiza o recebimento dos itens, verificando a conformidade com as especificações técnicas, e designa servidor para fiscalizar a execução do contrato."
      }
    ]
  },
  {
    id: "POP.DTI.004",
    title: "Chamados Técnicos de Manutenção de Equipamentos Locados",
    description: "Define o procedimento para atendimento de chamados referentes a equipamentos alugados (desktops, monitores, impressoras etc.), incluindo o registro do problema pelo usuário via 1Doc e encaminhamento para a empresa terceirizada.",
    objective: "Estabelecer o fluxo padrão para gerenciamento e acompanhamento de chamados de manutenção para equipamentos locados, garantindo o rápido restabelecimento de serviços e o cumprimento dos níveis de serviço contratados.",
    steps: [
      {
        title: "Abertura do chamado",
        description: "O usuário registra o problema técnico do equipamento locado através do sistema 1Doc, direcionando para a DTI e informando detalhes do problema, número de patrimônio e localização."
      },
      {
        title: "Recebimento e triagem",
        description: "A equipe da DTI recebe o chamado, realiza a triagem inicial verificando se realmente se trata de um equipamento locado e confirma os dados fornecidos."
      },
      {
        title: "Primeiro nível de atendimento",
        description: "Um técnico da DTI realiza uma avaliação remota ou rápida presencial para verificar se o problema pode ser resolvido com procedimentos simples, evitando o acionamento desnecessário da empresa."
      },
      {
        title: "Abertura de chamado para a empresa contratada",
        description: "Caso o problema não seja solucionado no primeiro nível, a DTI registra um chamado no sistema da empresa contratada, fornecendo todas as informações necessárias e o número de patrimônio do equipamento."
      },
      {
        title: "Acompanhamento do atendimento",
        description: "A DTI monitora o prazo de atendimento conforme SLA estabelecido em contrato e mantém comunicação com a empresa contratada para garantir a resolução dentro do prazo."
      },
      {
        title: "Verificação do serviço",
        description: "Após o atendimento pela empresa contratada, um técnico da DTI verifica se o problema foi efetivamente resolvido, coletando o feedback do usuário."
      },
      {
        title: "Encerramento do chamado",
        description: "Com a confirmação da resolução, o chamado é encerrado nos sistemas da DTI e da empresa contratada, registrando detalhes da solução e tempo de atendimento para relatórios de nível de serviço."
      },
      {
        title: "Comunicação ao usuário",
        description: "O usuário que abriu o chamado é formalmente informado sobre a conclusão do atendimento através do sistema 1Doc, incluindo as ações realizadas e eventuais recomendações."
      }
    ]
  },
  {
    id: "POP.DTI.005",
    title: "Chamados Técnicos de Suporte em Sistemas, Programas e Aplicativos",
    description: "Descreve como a DTI trata solicitações de suporte relacionadas a falhas, dúvidas ou problemas em softwares e sistemas utilizados na PMCG, desde o registro do chamado até a análise e resolução pela equipe de TI.",
    objective: "Padronizar o processo de atendimento a solicitações de suporte em sistemas, programas e aplicativos, garantindo respostas eficientes, solução adequada de problemas e o correto registro das ocorrências para análise futura.",
    steps: [
      {
        title: "Recebimento da solicitação",
        description: "O chamado é registrado pelo usuário no sistema 1Doc com informações sobre o problema enfrentado, sistema/software afetado, print screen de eventuais mensagens de erro e descrição detalhada da situação."
      },
      {
        title: "Classificação e priorização",
        description: "A equipe de suporte da DTI avalia o impacto e a urgência do problema reportado, classificando-o segundo a criticidade (baixa, média, alta, crítica) e designando um técnico responsável pelo atendimento."
      },
      {
        title: "Análise inicial",
        description: "O técnico designado realiza a análise inicial do problema, verificando se é uma situação já conhecida, consultando a base de conhecimento interna e determinando se pode ser resolvido remotamente."
      },
      {
        title: "Atendimento remoto",
        description: "Quando possível, o técnico realiza o atendimento remotamente através de ferramentas de acesso remoto, orientando o usuário por telefone ou mensagem, e realizando os procedimentos necessários para solução."
      },
      {
        title: "Atendimento presencial",
        description: "Se o problema não pode ser resolvido remotamente, o técnico agenda uma visita presencial, levando os recursos necessários para o local de trabalho do usuário."
      },
      {
        title: "Escalonamento",
        description: "Caso o atendente de primeiro nível não consiga resolver o problema, este é escalonado para o nível técnico especializado ou para a equipe de desenvolvimento responsável pelo sistema específico."
      },
      {
        title: "Implementação da solução",
        description: "O técnico implementa a solução identificada, que pode envolver configurações, correções, reinstalação de componentes, atualização de versões ou orientações ao usuário sobre o uso correto do sistema."
      },
      {
        title: "Testes e validação",
        description: "Após implementar a solução, são realizados testes para verificar se o problema foi efetivamente resolvido, preferencialmente com a participação do usuário para validação."
      },
      {
        title: "Documentação da solução",
        description: "A solução aplicada é detalhadamente documentada no sistema de registro de chamados, incluindo procedimentos realizados, configurações alteradas e recomendações, alimentando a base de conhecimento da DTI."
      },
      {
        title: "Encerramento e feedback",
        description: "O chamado é encerrado no sistema 1Doc com todas as informações pertinentes, solicitando feedback do usuário sobre a qualidade do atendimento e eficácia da solução."
      }
    ]
  },
  {
    id: "POP.DTI.006",
    title: "Chamados Técnicos de Suporte em computadores, scanners e impressoras",
    description: "Estabelece o fluxo para atender problemas de hardware em equipamentos não locados (pertencentes à PMCG), incluindo diagnóstico inicial, possibilidade de coleta do equipamento para reparo na DTI e a resolução pela equipe interna.",
    objective: "Padronizar o atendimento de problemas técnicos relacionados a equipamentos de propriedade da PMCG, garantindo diagnóstico preciso, reparo eficiente e documentação adequada de todo o processo de suporte técnico.",
    steps: [
      {
        title: "Registro da solicitação",
        description: "O usuário registra o chamado no sistema 1Doc, detalhando o problema enfrentado no equipamento, informando o número de patrimônio, localização e descrevendo os sintomas apresentados."
      },
      {
        title: "Triagem inicial",
        description: "A equipe da DTI verifica se o equipamento pertence ao patrimônio da PMCG (não é locado) e avalia a complexidade do problema para determinar a abordagem de atendimento."
      },
      {
        title: "Atendimento remoto preliminar",
        description: "Quando possível, é realizado um diagnóstico preliminar por telefone ou mensagem, orientando o usuário a executar procedimentos básicos que podem resolver problemas simples."
      },
      {
        title: "Agendamento de visita técnica",
        description: "Caso não seja possível resolver remotamente, é agendada uma visita técnica ao local onde está o equipamento, conforme a disponibilidade da equipe e prioridade do atendimento."
      },
      {
        title: "Diagnóstico in loco",
        description: "O técnico realiza o diagnóstico presencial, verificando conexões, configurações e componentes do equipamento para identificar a origem do problema."
      },
      {
        title: "Solução imediata ou remoção do equipamento",
        description: "Se o problema for simples, o técnico realiza o reparo imediatamente no local. Caso contrário, o equipamento é removido para a oficina da DTI, mediante registro de termo de retirada."
      },
      {
        title: "Reparo na oficina da DTI",
        description: "Na oficina, o equipamento passa por diagnóstico detalhado, desmontagem se necessário, substituição de peças defeituosas (se disponíveis em estoque) e testes após o reparo."
      },
      {
        title: "Avaliação de viabilidade econômica",
        description: "Em casos de equipamentos antigos ou com danos graves, é realizada uma avaliação técnica sobre a viabilidade econômica do reparo versus substituição, documentando a recomendação."
      },
      {
        title: "Devolução e instalação",
        description: "Após o reparo, o equipamento é devolvido ao setor de origem, reinstalado e configurado, com demonstração do funcionamento ao usuário e coleta de assinatura no termo de devolução."
      },
      {
        title: "Registro de manutenção e encerramento",
        description: "Todas as ações realizadas, peças substituídas e tempo de serviço são registrados no histórico de manutenção do equipamento, e o chamado é encerrado com a descrição completa da solução."
      }
    ]
  },
  {
    id: "POP.DTI.007",
    title: "Envio de Dados de Abastecimento da Frota para o Tribunal de Contas",
    description: "Padroniza a coleta mensal de dados de status e abastecimento da frota municipal (via sistema Frota e Abastecimento), a conferência pela DTI e LOG-TRANS, e o envio consolidado ao Tribunal de Contas do Estado (TCE).",
    objective: "Estabelecer o procedimento para coleta, validação e envio periódico dos dados de abastecimento da frota municipal ao Tribunal de Contas do Estado, assegurando a conformidade com as exigências de transparência e prestação de contas.",
    steps: [
      {
        title: "Extração inicial dos dados",
        description: "No primeiro dia útil após o fechamento do mês, a DTI acessa o sistema de Frota e Abastecimento para extrair o relatório consolidado contendo todos os registros de abastecimento do período."
      },
      {
        title: "Verificação preliminar",
        description: "A equipe da DTI realiza verificação preliminar dos dados extraídos, checando totalização, consistência das informações e possíveis lacunas ou inconsistências nos registros."
      },
      {
        title: "Geração do arquivo de exportação",
        description: "É gerado um arquivo estruturado no formato exigido pelo TCE, contendo campos como placa do veículo, tipo de combustível, quantidade, valor, hodômetro, data e local de abastecimento."
      },
      {
        title: "Envio para validação da LOG-TRANS",
        description: "O arquivo é encaminhado para a Diretoria de Logística e Transportes (LOG-TRANS) para validação dos dados operacionais, confirmação dos veículos ativos e verificação de padrões de consumo."
      },
      {
        title: "Correções e ajustes",
        description: "Com base no feedback da LOG-TRANS, a DTI realiza eventuais correções nos dados, ajustando inconsistências e completando informações faltantes conforme recomendado."
      },
      {
        title: "Validação final",
        description: "Após as correções, é realizada uma validação final conjunta entre DTI e LOG-TRANS, garantindo que todos os dados estejam precisos e completos antes do envio oficial."
      },
      {
        title: "Envio ao Tribunal de Contas",
        description: "A DTI acessa o sistema do TCE utilizando credenciais oficiais da PMCG e realiza o upload do arquivo validado dentro do prazo estabelecido, seguindo o protocolo de envio definido pelo Tribunal."
      },
      {
        title: "Confirmação de recebimento",
        description: "É obtido e arquivado o protocolo ou recibo de confirmação gerado pelo sistema do TCE, comprovando o envio dos dados dentro do prazo e nas especificações exigidas."
      },
      {
        title: "Arquivamento e documentação",
        description: "Uma cópia do arquivo enviado e do comprovante de recebimento é arquivada nos sistemas da DTI para referência futura, auditoria interna e eventual necessidade de esclarecimentos."
      },
      {
        title: "Relatório de envio",
        description: "É elaborado um relatório sucinto de envio, registrando a data, responsáveis, eventuais ocorrências e confirmação de recebimento, que é encaminhado às diretorias competentes da PMCG."
      }
    ]
  },
  {
    id: "POP.DTI.008",
    title: "Disponibilização dos contracheques no site",
    description: "Detalha as etapas para publicação segura dos contracheques dos servidores no portal institucional, desde a solicitação formal pela DRH, extração dos dados do sistema E-CIDADES, tratamento, testes e liberação final para consulta.",
    objective: "Estabelecer o procedimento para a publicação segura e tempestiva dos contracheques dos servidores municipais no portal institucional, garantindo a confidencialidade dos dados e o acesso restrito pelos servidores.",
    steps: [
      {
        title: "Recebimento da solicitação",
        description: "A DTI recebe solicitação formal da Diretoria de Recursos Humanos (DRH) para disponibilização dos contracheques, contendo o período de referência e prazo desejado para publicação."
      },
      {
        title: "Extração dos dados",
        description: "A equipe da DTI acessa o sistema E-CIDADES e executa os procedimentos de extração dos dados de folha de pagamento do período solicitado, utilizando parâmetros específicos de filtragem."
      },
      {
        title: "Processamento e formatação",
        description: "Os dados extraídos são processados e formatados conforme o padrão definido para publicação online, incluindo cálculos de totalização, ajustes de layout e preparação para visualização web."
      },
      {
        title: "Aplicação de medidas de segurança",
        description: "São implementadas medidas de segurança como criptografia dos dados sensíveis, definição de regras de acesso via CPF e senha, e logs de auditoria para monitorar todos os acessos."
      },
      {
        title: "Geração de ambiente de homologação",
        description: "Antes da publicação oficial, os contracheques são publicados em ambiente de homologação para verificação por amostragem pela equipe da DRH, garantindo a precisão dos dados."
      },
      {
        title: "Testes de segurança e usabilidade",
        description: "São realizados testes técnicos para verificar a proteção dos dados, tentativas de acesso não autorizado, performance do sistema e usabilidade da interface para os servidores."
      },
      {
        title: "Correções e ajustes finais",
        description: "Com base nos resultados dos testes e feedback da DRH, são realizados eventuais ajustes e correções necessárias antes da publicação oficial."
      },
      {
        title: "Publicação no ambiente de produção",
        description: "Após todos os testes e aprovações, os contracheques são publicados no ambiente de produção do portal institucional, na área reservada aos servidores."
      },
      {
        title: "Comunicação aos interessados",
        description: "A DTI notifica formalmente a DRH sobre a conclusão da publicação, fornecendo informações técnicas relevantes, estatísticas de acesso e eventuais orientações para os usuários."
      },
      {
        title: "Monitoramento e suporte",
        description: "Durante o período inicial de disponibilização, a DTI mantém monitoramento intensivo para identificar problemas técnicos e fornece suporte prioritário aos usuários que encontrem dificuldades de acesso."
      }
    ]
  },
  {
    id: "POP.DTI.009",
    title: "Desenvolvimento de Site e Sistemas",
    description: "Abrange o ciclo de vida completo para criação ou customização de websites e sistemas internos, desde a solicitação e análise de requisitos, passando pelo planejamento, desenvolvimento, testes de qualidade, correção de erros, implantação e manutenção contínua.",
    objective: "Padronizar o processo de desenvolvimento de sites e sistemas para a PMCG, garantindo que os produtos de software sejam desenvolvidos segundo as melhores práticas de engenharia, com foco nas necessidades dos usuários e na segurança da informação.",
    steps: [
      {
        title: "Recebimento e análise da solicitação",
        description: "A DTI recebe a solicitação formal para desenvolvimento de site ou sistema, realizando reuniões iniciais com os solicitantes para entender os objetivos, escopo e requisitos preliminares."
      },
      {
        title: "Estudo de viabilidade",
        description: "É realizado um estudo técnico para avaliar a viabilidade do projeto, considerando recursos disponíveis, tecnologias necessárias, integrações com sistemas existentes e estimativa de esforço."
      },
      {
        title: "Levantamento detalhado de requisitos",
        description: "São realizadas sessões de levantamento de requisitos com os stakeholders, documentando requisitos funcionais, não-funcionais, regras de negócio e fluxos de processos que o sistema deverá atender."
      },
      {
        title: "Elaboração de proposta técnica",
        description: "A equipe de desenvolvimento elabora uma proposta técnica contendo escopo detalhado, cronograma estimado, recursos necessários e estimativa de custo, que é apresentada para aprovação dos gestores."
      },
      {
        title: "Projeto de arquitetura",
        description: "Após aprovação, é desenvolvida a arquitetura do sistema, definindo componentes, interfaces, banco de dados, integrações e aspectos de segurança conforme os requisitos levantados."
      },
      {
        title: "Desenvolvimento incremental",
        description: "O desenvolvimento é realizado em ciclos incrementais (sprints), com entregas parciais de funcionalidades para validação dos usuários, seguindo metodologias ágeis adaptadas à realidade da PMCG."
      },
      {
        title: "Testes e validação",
        description: "Cada incremento desenvolvido passa por testes unitários, de integração e funcionais, além de validação com usuários-chave para garantir a aderência aos requisitos e identificar melhorias."
      },
      {
        title: "Homologação com usuários",
        description: "Antes da implantação final, o sistema completo é disponibilizado em ambiente de homologação para testes intensivos pelos usuários finais, com coleta estruturada de feedback."
      },
      {
        title: "Correções e ajustes finais",
        description: "Com base no feedback da homologação, são realizadas as correções necessárias e ajustes finais para garantir a qualidade e usabilidade do produto antes da implantação."
      },
      {
        title: "Implantação e treinamento",
        description: "O sistema é implantado no ambiente de produção seguindo um plano de transição, com realização de treinamentos para os usuários e elaboração de documentação técnica e manuais."
      },
      {
        title: "Operação assistida e manutenção",
        description: "Após a implantação, é realizado um período de operação assistida com suporte prioritário, seguido pelo estabelecimento de rotinas de manutenção evolutiva e corretiva conforme necessidades identificadas."
      }
    ]
  },
  {
    id: "POP.DTI.010",
    title: "Lançamento do IPTU",
    description: "Define o suporte técnico da DTI ao processo anual de lançamento do IPTU, incluindo a criação de ambiente de homologação (testes), apoio na configuração e correção de erros, simulação e validação dos dados antes da disponibilização final para os contribuintes via portal e-Cidade Online.",
    objective: "Estabelecer o procedimento para o suporte técnico ao lançamento anual do IPTU, garantindo a precisão nos cálculos, a correta aplicação das regras tributárias e a disponibilização tempestiva dos boletos aos contribuintes.",
    steps: [
      {
        title: "Planejamento inicial",
        description: "A DTI realiza reunião de planejamento com a Secretaria de Finanças para definir o cronograma de lançamento, considerando prazos legais, atualizações necessárias e estratégias de disponibilização."
      },
      {
        title: "Atualização da base de parâmetros",
        description: "São atualizados no sistema e-Cidade os parâmetros para o novo exercício fiscal, incluindo alíquotas, valores de referência, índices de correção e datas de vencimento, conforme definido pela legislação municipal."
      },
      {
        title: "Preparação do ambiente de homologação",
        description: "É criado um ambiente de homologação com cópia da base de dados de produção, onde serão realizados todos os testes e simulações antes do lançamento oficial."
      },
      {
        title: "Simulação de cálculos",
        description: "No ambiente de homologação, são realizadas simulações de cálculo do IPTU para diferentes tipos de imóveis, verificando a aplicação correta de alíquotas, descontos e acréscimos previstos na legislação."
      },
      {
        title: "Validação com amostragem",
        description: "A Secretaria de Finanças seleciona uma amostra representativa de imóveis para validação detalhada dos cálculos, comparando com valores esperados e exercícios anteriores para identificar discrepâncias."
      },
      {
        title: "Correção de inconsistências",
        description: "As inconsistências identificadas durante as simulações e validações são documentadas e corrigidas pela equipe técnica da DTI, com nova rodada de testes após cada correção."
      },
      {
        title: "Geração de lote de teste",
        description: "É gerado um lote completo de carnês de IPTU no ambiente de homologação, verificando a formatação, inclusão de código de barras, informações do contribuinte e mensagens específicas."
      },
      {
        title: "Aprovação para produção",
        description: "Após todas as validações e correções, a Secretaria de Finanças emite aprovação formal para que o lançamento seja realizado no ambiente de produção."
      },
      {
        title: "Processamento em produção",
        description: "A DTI realiza o processamento de lançamento em produção, preferencialmente em período de baixo uso do sistema (noite/fim de semana), monitorando todo o processo para garantir a conclusão sem erros."
      },
      {
        title: "Disponibilização no portal",
        description: "Após o processamento, os carnês de IPTU são disponibilizados no portal e-Cidade Online para consulta e impressão pelos contribuintes, com monitoramento contínuo da performance e estabilidade do sistema."
      },
      {
        title: "Suporte pós-lançamento",
        description: "Durante o período inicial após o lançamento, a DTI mantém equipe dedicada para resolução rápida de eventuais problemas técnicos e suporte prioritário à Secretaria de Finanças para atendimento aos contribuintes."
      }
    ]
  },
  {
    id: "POP.DTI.011",
    title: "Migração de dados na nuvem",
    description: "Estabelece as diretrizes para mover dados de sistemas ou arquivos para ambientes de computação em nuvem de forma segura e estruturada, cobrindo planejamento, preparação do ambiente, backup, transferência, validação e configuração de acessos.",
    objective: "Padronizar o processo de migração de dados e sistemas para ambientes de computação em nuvem, garantindo a integridade, segurança e disponibilidade das informações durante e após a transição.",
    steps: [
      {
        title: "Análise e inventário dos dados",
        description: "Realização de levantamento detalhado dos dados a serem migrados, incluindo volume, formato, estrutura, dependências e classificação quanto à sensibilidade e criticidade."
      },
      {
        title: "Definição da estratégia de migração",
        description: "Seleção da abordagem de migração (big bang, faseada, paralela) e definição de ferramentas e métodos de transferência adequados ao tipo de dados e requisitos de disponibilidade."
      },
      {
        title: "Planejamento detalhado",
        description: "Elaboração de cronograma, definição de responsabilidades, identificação de riscos e planos de contingência, estabelecimento de janelas de manutenção e comunicação com áreas afetadas."
      },
      {
        title: "Preparação do ambiente de destino",
        description: "Configuração da infraestrutura na nuvem, incluindo redes, segurança, armazenamento e serviços necessários para receber os dados, considerando requisitos de performance e escalabilidade."
      },
      {
        title: "Backup completo dos dados",
        description: "Realização de backup integral dos dados na origem antes de iniciar qualquer processo de migração, garantindo a possibilidade de restauração em caso de problemas."
      },
      {
        title: "Migração teste",
        description: "Execução de migração em ambiente de teste com amostra representativa dos dados para validar o processo, identificar problemas potenciais e refinar a estratégia."
      },
      {
        title: "Execução da migração",
        description: "Transferência efetiva dos dados para o ambiente de nuvem conforme a estratégia definida, com monitoramento constante do progresso, performance e integridade da transferência."
      },
      {
        title: "Validação e verificação",
        description: "Verificação completa dos dados migrados para garantir que todos foram transferidos corretamente, através de comparações de checksum, contagens de registros e validações de integridade referencial."
      },
      {
        title: "Configuração de acessos e segurança",
        description: "Implementação de controles de acesso, criptografia, monitoramento e outras medidas de segurança no ambiente de nuvem, seguindo o princípio do privilégio mínimo."
      },
      {
        title: "Testes de integração e performance",
        description: "Realização de testes de integração com outros sistemas, verificação de performance sob diferentes cargas e validação de funcionalidades críticas no novo ambiente."
      },
      {
        title: "Go-live e monitoramento",
        description: "Ativação oficial do ambiente de nuvem para uso produtivo, redirecionamento de acessos e implementação de monitoramento contínuo para detecção precoce de problemas."
      },
      {
        title: "Documentação e transferência de conhecimento",
        description: "Elaboração de documentação detalhada da nova arquitetura, procedimentos operacionais e treinamento das equipes de suporte para o ambiente em nuvem."
      }
    ]
  },
  {
    id: "POP.DTI.012",
    title: "Mapeamento de processos",
    description: "Descreve a metodologia utilizada pela DTI para analisar, documentar (com fluxogramas e diagramas) e otimizar os processos internos da própria diretoria ou de outras áreas da PMCG, visando identificar gargalos, ineficiências e propor melhorias.",
    objective: "Estabelecer uma metodologia padronizada para o mapeamento e documentação de processos de negócio e de TI na PMCG, visando identificar oportunidades de melhoria, eliminar redundâncias e aumentar a eficiência operacional.",
    steps: [
      {
        title: "Identificação e seleção de processos",
        description: "Definição dos processos a serem mapeados com base em critérios como criticidade, impacto organizacional, potencial de melhoria e alinhamento estratégico."
      },
      {
        title: "Planejamento do mapeamento",
        description: "Elaboração do plano de trabalho, definindo objetivos, escopo, participantes, cronograma, recursos necessários e metodologia a ser utilizada (BPMN, fluxogramas, etc.)."
      },
      {
        title: "Coleta de informações preliminares",
        description: "Levantamento inicial de documentação existente, normas, regulamentos e outros materiais que descrevam o processo ou influenciem sua execução."
      },
      {
        title: "Entrevistas com participantes do processo",
        description: "Realização de entrevistas estruturadas com os executores e gestores do processo para entender a situação atual (AS-IS), incluindo entradas, saídas, atividades, regras e pontos críticos."
      },
      {
        title: "Observação direta",
        description: "Acompanhamento da execução do processo na prática para identificar detalhes não mencionados nas entrevistas, variações não documentadas e oportunidades de melhoria."
      },
      {
        title: "Elaboração do diagrama atual (AS-IS)",
        description: "Documentação visual do processo atual utilizando a notação padronizada, representando atividades, responsáveis, decisões, sistemas utilizados e fluxo de informações."
      },
      {
        title: "Validação do mapeamento atual",
        description: "Apresentação do diagrama AS-IS para os participantes do processo para validação, correções e complementações, garantindo que o mapeamento reflita a realidade de execução."
      },
      {
        title: "Análise crítica e identificação de problemas",
        description: "Análise detalhada do processo mapeado para identificar gargalos, redundâncias, atividades sem valor agregado, pontos de risco e oportunidades de automação ou simplificação."
      },
      {
        title: "Proposição de processo futuro (TO-BE)",
        description: "Elaboração de proposta de redesenho do processo, incorporando melhorias identificadas, eliminando ineficiências e aplicando boas práticas de gestão de processos."
      },
      {
        title: "Validação do processo redesenhado",
        description: "Apresentação e discussão do modelo futuro com os stakeholders para validação, ajustes e avaliação de impactos das mudanças propostas."
      },
      {
        title: "Documentação completa",
        description: "Finalização da documentação do processo, incluindo diagramas, descrições detalhadas das atividades, responsabilidades, indicadores de desempenho e instruções de trabalho."
      },
      {
        title: "Plano de implementação",
        description: "Desenvolvimento de um plano de ação para implementação das melhorias propostas, incluindo priorização, recursos necessários, responsáveis e cronograma."
      }
    ]
  },
  {
    id: "POP.DTI.013",
    title: "Modificação e Atualização de Infraestruturas de Rede",
    description: "Orienta sobre como realizar alterações em redes já existentes, incluindo diagnóstico da rede atual, planejamento da modificação (escopo, impacto, recursos), apresentação ao solicitante, aquisição de materiais (se necessário), implementação das mudanças e testes.",
    objective: "Estabelecer um procedimento padronizado para planejamento e execução de modificações em infraestruturas de rede existentes, garantindo estabilidade, segurança e minimização de impactos nos serviços durante as alterações.",
    steps: [
      {
        title: "Análise da solicitação de modificação",
        description: "Recebimento e análise detalhada da solicitação de modificação, identificando requisitos, motivações e expectativas do solicitante quanto às alterações na infraestrutura de rede."
      },
      {
        title: "Diagnóstico da infraestrutura atual",
        description: "Levantamento completo da infraestrutura existente, incluindo documentação de topologia, inventário de equipamentos, configurações atuais e dependências com outros sistemas."
      },
      {
        title: "Avaliação de impacto",
        description: "Análise do impacto potencial das modificações propostas, identificando serviços afetados, usuários impactados, riscos de segurança e disponibilidade, e requisitos de compatibilidade."
      },
      {
        title: "Elaboração do projeto de modificação",
        description: "Desenvolvimento do projeto técnico detalhado contendo as alterações propostas, especificações técnicas, topologia futura, requisitos de hardware/software e estimativa de recursos necessários."
      },
      {
        title: "Planejamento logístico",
        description: "Organização dos aspectos logísticos da modificação, incluindo cronograma, alocação de pessoal técnico, aquisição de materiais/equipamentos necessários e definição de janelas de manutenção."
      },
      {
        title: "Desenvolvimento de plano de rollback",
        description: "Elaboração de procedimentos detalhados para reversão das alterações em caso de problemas, garantindo a possibilidade de restaurar rapidamente a configuração original."
      },
      {
        title: "Comunicação com stakeholders",
        description: "Notificação formal aos usuários e áreas afetadas sobre a intervenção planejada, informando escopo, duração estimada, impactos esperados e canais de suporte durante a transição."
      },
      {
        title: "Implementação controlada",
        description: "Execução das modificações conforme projeto, preferencialmente em etapas e fora do horário de expediente, com acompanhamento constante e validações intermediárias."
      },
      {
        title: "Testes de verificação",
        description: "Realização de testes abrangentes após cada etapa de implementação, verificando conectividade, desempenho, segurança e correto funcionamento de todos os serviços dependentes da rede."
      },
      {
        title: "Ajustes e otimizações",
        description: "Realização de ajustes finos nas configurações com base nos resultados dos testes, otimizando desempenho, balanceamento de carga e segurança da infraestrutura modificada."
      },
      {
        title: "Atualização da documentação",
        description: "Revisão e atualização de toda a documentação da rede, incluindo diagramas de topologia, inventário de equipamentos, configurações e procedimentos operacionais."
      },
      {
        title: "Transferência de conhecimento",
        description: "Compartilhamento das informações sobre as modificações realizadas com a equipe de suporte, incluindo treinamento quando necessário para garantir a correta manutenção da nova configuração."
      }
    ]
  },
  {
    id: "POP.DTI.014",
    title: "Instalação e Configuração de Novas Infraestruturas de Rede",
    description: "Define os passos para implementar uma infraestrutura de rede completamente nova, desde o recebimento da solicitação, planejamento (requisitos, topologia), aquisição de equipamentos, instalação física, configuração lógica (IPs, VLANs, segurança) e validação final.",
    objective: "Padronizar o processo de implementação de novas infraestruturas de rede, garantindo planejamento adequado, instalação correta e configuração segura, em conformidade com os padrões técnicos da PMCG e as necessidades do solicitante.",
    steps: [
      {
        title: "Levantamento de requisitos",
        description: "Realização de reuniões com o solicitante para identificar necessidades específicas, como quantidade de pontos de rede, performance esperada, serviços que utilizarão a rede e requisitos especiais de segurança ou disponibilidade."
      },
      {
        title: "Vistoria do ambiente físico",
        description: "Inspeção detalhada do local onde será implementada a nova infraestrutura, avaliando condições estruturais, disponibilidade de energia, climatização, espaço para equipamentos e rotas para cabeamento."
      },
      {
        title: "Projeto de rede",
        description: "Elaboração do projeto técnico completo, incluindo topologia física e lógica, dimensionamento de equipamentos, especificações de cabeamento, plano de endereçamento IP, segmentação de rede e políticas de segurança."
      },
      {
        title: "Dimensionamento e especificação de materiais",
        description: "Definição detalhada de todos os componentes necessários (switches, roteadores, access points, cabeamento, racks, etc.) com especificações técnicas precisas e quantitativos."
      },
      {
        title: "Elaboração de cronograma",
        description: "Desenvolvimento de cronograma detalhado de implementação, com definição de fases, prazos, dependências entre atividades e marcos de entrega, alinhado com as expectativas do solicitante."
      },
      {
        title: "Aquisição de equipamentos e materiais",
        description: "Acompanhamento do processo de aquisição dos componentes especificados, garantindo conformidade com as especificações técnicas e prazos de entrega compatíveis com o cronograma."
      },
      {
        title: "Preparação do ambiente",
        description: "Adequação do ambiente físico para receber a nova infraestrutura, incluindo instalação de racks, sistemas de energia, climatização e outras preparações estruturais necessárias."
      },
      {
        title: "Instalação do cabeamento estruturado",
        description: "Implementação do sistema de cabeamento seguindo as normas técnicas (ANSI/TIA/EIA), incluindo passagem de cabos, instalação de pontos de rede, identificação e certificação."
      },
      {
        title: "Instalação e configuração de equipamentos ativos",
        description: "Montagem, conexão e configuração inicial dos equipamentos ativos de rede (switches, roteadores, firewalls, etc.) conforme o projeto, incluindo firmware atualizado e configurações de segurança básicas."
      },
      {
        title: "Configuração lógica avançada",
        description: "Implementação de configurações avançadas como VLANs, roteamento, QoS, ACLs, VPNs e outros serviços de rede específicos definidos no projeto."
      },
      {
        title: "Testes de conectividade e performance",
        description: "Realização de testes abrangentes para verificar conectividade em todos os pontos, performance sob diferentes cargas, latência, taxas de transferência e correto funcionamento de todos os serviços previstos."
      },
      {
        title: "Documentação completa",
        description: "Elaboração da documentação final contendo topologia as-built, configurações implementadas, endereçamento IP, credenciais de acesso (em repositório seguro), procedimentos operacionais e recomendações de manutenção."
      },
      {
        title: "Treinamento e entrega formal",
        description: "Realização de treinamento básico para os responsáveis locais e entrega formal da infraestrutura ao solicitante, com termo de aceite detalhando o escopo entregue e garantias aplicáveis."
      }
    ]
  },
  {
    id: "POP.DTI.015",
    title: "Fiscalização de Contratos e Fornecedores",
    description: "Padroniza a atividade de monitoramento contínuo de contratos de prestação de serviços de TI (locação, sistemas de ponto etc.), verificando o cumprimento de prazos, qualidade, condições contratuais e acionando fornecedores ou a assessoria jurídica em caso de inadimplência.",
    objective: "Estabelecer procedimentos padronizados para a fiscalização efetiva de contratos de TI, garantindo o cumprimento das obrigações contratuais pelos fornecedores, a qualidade dos serviços prestados e a otimização dos recursos públicos investidos.",
    steps: [
      {
        title: "Designação formal do fiscal",
        description: "Nomeação oficial do servidor responsável pela fiscalização do contrato, através de portaria ou designação específica, com definição clara de suas atribuições e responsabilidades."
      },
      {
        title: "Estudo aprofundado do contrato",
        description: "Análise detalhada pelo fiscal de todos os termos do contrato, anexos, proposta vencedora, termo de referência e outros documentos relacionados, criando um checklist de obrigações a serem verificadas."
      },
      {
        title: "Reunião inicial com o fornecedor",
        description: "Realização de reunião formal de kickoff com o fornecedor para alinhar entendimentos sobre o contrato, estabelecer canais de comunicação, definir procedimentos de acompanhamento e esclarecer expectativas."
      },
      {
        title: "Elaboração de plano de fiscalização",
        description: "Desenvolvimento de plano estruturado de fiscalização, definindo metodologia, frequência de verificações, documentos de controle, indicadores de desempenho (SLAs) e procedimentos para registro de ocorrências."
      },
      {
        title: "Verificação da conformidade dos serviços",
        description: "Realização de verificações periódicas para avaliar se os serviços estão sendo prestados conforme especificações técnicas, prazos e qualidade definidos no contrato, com registros formais das observações."
      },
      {
        title: "Monitoramento de níveis de serviço",
        description: "Acompanhamento contínuo dos indicadores de nível de serviço (SLAs) estabelecidos, coletando dados, calculando métricas e comparando com os patamares mínimos aceitáveis definidos contratualmente."
      },
      {
        title: "Controle de prazos e entregas",
        description: "Monitoramento rigoroso de cronogramas, marcos de entrega e prazos de atendimento, notificando proativamente o fornecedor sobre vencimentos próximos e registrando eventuais atrasos."
      },
      {
        title: "Verificação de documentação técnica",
        description: "Análise da documentação técnica entregue pelo fornecedor (manuais, relatórios, etc.) quanto à completude, clareza, conformidade com padrões estabelecidos e atendimento às necessidades operacionais."
      },
      {
        title: "Gestão de incidentes e problemas",
        description: "Acompanhamento de incidentes reportados, monitorando tempo de resposta, qualidade da solução e ações preventivas implementadas para evitar recorrências."
      },
      {
        title: "Notificação formal de irregularidades",
        description: "Em caso de identificação de não-conformidades, emissão de notificação formal ao fornecedor detalhando os problemas encontrados, cláusulas contratuais violadas e prazo para regularização."
      },
      {
        title: "Aplicação de sanções administrativas",
        description: "Quando necessário, instrução de processo para aplicação de penalidades previstas no contrato (advertência, multa, suspensão), fornecendo documentação comprobatória das irregularidades e garantindo o contraditório."
      },
      {
        title: "Elaboração de relatórios periódicos",
        description: "Produção de relatórios periódicos de fiscalização documentando o desempenho do fornecedor, ocorrências relevantes, medidas corretivas solicitadas e status atual do contrato."
      },
      {
        title: "Gestão do processo de pagamento",
        description: "Verificação da adequação das faturas apresentadas, conferindo valores, serviços efetivamente prestados e aplicação de eventuais glosas por descumprimentos, antes de atestar para pagamento."
      },
      {
        title: "Avaliação para renovação ou encerramento",
        description: "Antes do término da vigência, elaboração de relatório avaliativo consolidado sobre o desempenho do fornecedor, recomendando fundamentadamente a renovação, modificação ou encerramento do contrato."
      }
    ]
  },
  {
    id: "POP.DTI.016",
    title: "Chamados de Suporte para Telefones VOIP",
    description: "Especifica o fluxo para atendimento de problemas relacionados ao sistema de telefonia VOIP, desde o registro do chamado, diagnóstico (conexão, configuração, aparelho), testes e, se necessário, encaminhamento para a empresa terceirizada responsável pelo sistema.",
    objective: "Padronizar o atendimento a problemas relacionados à telefonia VOIP na PMCG, garantindo diagnóstico preciso, resolução eficiente de problemas e o gerenciamento adequado das interações com a empresa terceirizada responsável pelo sistema.",
    steps: [
      {
        title: "Recebimento da solicitação",
        description: "A DTI recebe o chamado via sistema 1Doc com a descrição detalhada do problema relacionado à telefonia VOIP, incluindo informações como ramal afetado, sintomas observados e impacto nas atividades."
      },
      {
        title: "Triagem e categorização",
        description: "O chamado é analisado, categorizado por tipo de problema (hardware, configuração, conectividade, qualidade) e priorizado conforme criticidade para o funcionamento do setor afetado."
      },
      {
        title: "Verificação inicial remota",
        description: "Realização de verificação remota preliminar, checando status do ramal no sistema de gerenciamento VOIP, registros de log, conectividade de rede e configurações básicas do ramal."
      },
      {
        title: "Diagnóstico de primeiro nível",
        description: "Para problemas simples, são realizadas instruções remotas ao usuário para verificações básicas, como reconexão de cabos, reinicialização do aparelho ou verificação de configurações de volume."
      },
      {
        title: "Atendimento presencial (quando necessário)",
        description: "Caso não seja possível resolver remotamente, um técnico da DTI realiza visita ao local para diagnóstico mais detalhado, testando o aparelho, a conexão física e outros componentes relacionados."
      },
      {
        title: "Resolução de problemas de rede",
        description: "Se identificado que o problema é relacionado à rede (conectividade, qualidade ou configuração), a equipe de redes da DTI é acionada para realizar as correções necessárias."
      },
      {
        title: "Resolução de problemas de configuração",
        description: "Para problemas de configuração, o técnico acessa o sistema de gerenciamento VOIP para ajustar parâmetros como permissões de chamada, encaminhamentos, grupos de busca ou identificadores."
      },
      {
        title: "Substituição de equipamento",
        description: "Em casos de falha no aparelho telefônico, é realizada a substituição temporária por um equipamento de backup enquanto o original é enviado para reparo ou substituição definitiva."
      },
      {
        title: "Escalonamento para empresa terceirizada",
        description: "Quando o problema exige intervenção especializada (falhas no servidor VOIP, problemas no tronco SIP, bugs no sistema), é aberto chamado formal com a empresa terceirizada responsável pelo sistema."
      },
      {
        title: "Acompanhamento de chamados escalonados",
        description: "Para chamados encaminhados à empresa terceirizada, é realizado acompanhamento ativo, cobrando prazos de atendimento conforme SLAs contratuais e validando as soluções propostas."
      },
      {
        title: "Testes e validação da solução",
        description: "Após a implementação da solução (interna ou pela terceirizada), são realizados testes completos de funcionamento, verificando qualidade da chamada, funcionalidades específicas e estabilidade do serviço."
      },
      {
        title: "Documentação e encerramento",
        description: "O chamado é atualizado com todas as ações realizadas, solução implementada, componentes substituídos (se aplicável) e recomendações ao usuário, sendo então encerrado após confirmação de resolução."
      },
      {
        title: "Registro de conhecimento",
        description: "Problemas recorrentes ou soluções importantes são documentados na base de conhecimento da DTI para agilizar a resolução de casos similares no futuro e identificar padrões de falha."
      }
    ]
  },
  {
    id: "POP.DTI.017",
    title: "Suporte e Melhoria ao Sistema e-Cidades",
    description: "Descreve o processo contínuo de suporte técnico e evolução do sistema E-Cidades, abrangendo o diagnóstico de problemas reportados pelos usuários, criação de base de homologação para testes, implementação de correções ou melhorias e migração para o ambiente de produção.",
    objective: "Estabelecer procedimentos padronizados para manutenção, suporte e evolução contínua do sistema e-Cidades, garantindo estabilidade operacional, correção eficiente de problemas e implementação segura de melhorias e atualizações.",
    steps: [
      {
        title: "Recebimento e análise de solicitações",
        description: "A DTI recebe solicitações via sistema 1Doc referentes a problemas, dúvidas ou melhorias no e-Cidades, realizando análise inicial para categorização (erro, melhoria, dúvida) e priorização conforme impacto."
      },
      {
        title: "Diagnóstico detalhado",
        description: "Para problemas técnicos, é realizada investigação aprofundada utilizando logs do sistema, reprodução do erro em ambiente controlado e análise de código/banco de dados quando necessário."
      },
      {
        title: "Suporte ao usuário para dúvidas",
        description: "Em caso de dúvidas operacionais, é fornecida orientação detalhada ao usuário, incluindo procedimentos corretos, documentação de referência ou, quando necessário, treinamento específico."
      },
      {
        title: "Resolução de problemas de configuração",
        description: "Para problemas relacionados a configurações, o técnico realiza os ajustes necessários no sistema, documenta as alterações e valida com o usuário o correto funcionamento após as mudanças."
      },
      {
        title: "Abertura de chamado com fornecedor",
        description: "Para problemas que exigem alterações no código-fonte ou são bugs da aplicação, é aberto chamado técnico formal com o fornecedor do sistema, incluindo evidências detalhadas e documentação do problema."
      },
      {
        title: "Análise de requisitos para melhorias",
        description: "Para solicitações de melhorias, é realizada análise de requisitos com as áreas solicitantes, documentando detalhadamente a funcionalidade desejada, regras de negócio e critérios de aceitação."
      },
      {
        title: "Preparação de ambiente de homologação",
        description: "Antes de qualquer correção ou melhoria significativa, é criado ou atualizado ambiente de homologação espelhando o ambiente de produção, para implementação e testes seguros das alterações."
      },
      {
        title: "Desenvolvimento ou personalização",
        description: "Quando aplicável e dentro das competências da equipe, são desenvolvidas personalizações, relatórios adicionais ou integrações para atender às necessidades específicas da PMCG."
      },
      {
        title: "Testes de validação",
        description: "Todas as alterações (correções ou melhorias) são submetidas a testes rigorosos no ambiente de homologação, preferencialmente com participação dos usuários-chave das áreas afetadas."
      },
      {
        title: "Planejamento de implantação",
        description: "É elaborado plano detalhado para migração das alterações para produção, incluindo janela de manutenção, backup completo pré-implantação, sequência de ações e plano de reversão em caso de problemas."
      },
      {
        title: "Implantação em produção",
        description: "As alterações são implementadas no ambiente de produção, preferencialmente em horários de baixo uso, seguindo rigorosamente o plano de implantação e com monitoramento intensivo durante o processo."
      },
      {
        title: "Validação pós-implantação",
        description: "Após a implantação, são realizados testes de confirmação para verificar o correto funcionamento das alterações e a integridade geral do sistema, incluindo verificação de funcionalidades relacionadas."
      },
      {
        title: "Documentação e comunicação",
        description: "Todas as alterações são documentadas detalhadamente, incluindo manuais de usuário atualizados quando necessário, e comunicadas formalmente aos usuários e gestores afetados."
      },
      {
        title: "Monitoramento contínuo",
        description: "Após implantações significativas, é mantido monitoramento intensificado do sistema por período determinado, para identificar rapidamente eventuais problemas não detectados durante os testes."
      }
    ]
  }
];
