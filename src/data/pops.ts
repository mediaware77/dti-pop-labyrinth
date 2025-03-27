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
  imageUrl?: string;
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
    ],
    imageUrl: "/public/images/fluxo-001.png"
  },
  {
    id: "POP.DTI.002",
    title: "Dispensa de Licitação",
    description: "Orienta sobre os passos necessários para realizar aquisições de bens ou serviços de TI por meio de dispensa de licitação, desde a coleta de cotações e elaboração do DOD até a análise jurídica e o recebimento do item.",
    objective: "Padronizar o processo de aquisição de bens e serviços de TI através de dispensa de licitação, assegurando a conformidade legal e a eficiência administrativa nas compras públicas de pequeno valor.",
    steps: [
      {
        title: "Identificação da necessidade",
        description: "A equipe da DTI identifica a necessidade de aquisição de bens ou serviços de TI e verifica se o valor estimado se enquadra nos limites legals para dispensa de licitação."
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
    ],
    imageUrl: "/public/images/fluxo-002.png"
  },
  {
    id: "POP.DTI.003",
    title: "Instalação e Configuração de Computadores",
    description: "Procedimento para instalação e configuração de novos computadores para usuários, incluindo preparação do hardware, instalação do sistema operacional e softwares padrão, configuração de rede e entrega ao usuário.",
    objective: "Padronizar o processo de instalação e configuração de computadores para garantir que todos os equipamentos entregues aos usuários estejam configurados de forma consistente, segura e prontos para uso.",
    steps: [
      {
        title: "Recebimento do equipamento",
        description: "Verificar se o equipamento recebido corresponde à especificação solicitada e está em perfeitas condições físicas."
      },
      {
        title: "Preparação do hardware",
        description: "Montar o computador, conectar todos os periféricos e verificar o funcionamento básico do hardware."
      },
      {
        title: "Instalação do sistema operacional",
        description: "Instalar a versão padrão do sistema operacional com todas as atualizações críticas."
      },
      {
        title: "Configuração de rede",
        description: "Configurar o acesso à rede corporativa, incluindo conexão com domínio e configurações de proxy quando necessário."
      },
      {
        title: "Instalação de softwares",
        description: "Instalar o pacote de softwares padrão aprovado pela DTI, incluindo pacote office, antivírus e ferramentas específicas conforme necessidade do usuário."
      },
      {
        title: "Testes finais",
        description: "Realizar testes completos para verificar o funcionamento de todos os componentes e softwares instalados."
      },
      {
        title: "Entrega ao usuário",
        description: "Entregar o equipamento ao usuário final, orientando sobre o uso básico e coletando a assinatura no termo de recebimento."
      }
    ],
    imageUrl: "/public/images/fluxo-003.png"
  },
  {
    id: "POP.DTI.004",
    title: "Manutenção Corretiva de Computadores",
    description: "Procedimento para atendimento de chamados relacionados a falhas em computadores, incluindo diagnóstico do problema, execução da manutenção e testes pós-reparo.",
    objective: "Padronizar o processo de atendimento a chamados de manutenção corretiva de computadores, garantindo rapidez na solução de problemas e minimizando o tempo de indisponibilidade dos equipamentos.",
    steps: [
      {
        title: "Abertura do chamado",
        description: "O usuário abre um chamado no sistema 1Doc descrevendo o problema encontrado no equipamento."
      },
      {
        title: "Triagem inicial",
        description: "A equipe da DTI realiza uma triagem inicial para classificar a urgência e complexidade do problema."
      },
      {
        title: "Diagnóstico técnico",
        description: "O técnico responsável realiza testes para identificar a causa raiz do problema reportado."
      },
      {
        title: "Execução do reparo",
        description: "Com base no diagnóstico, o técnico executa os procedimentos necessários para corrigir o problema."
      },
      {
        title: "Testes pós-reparo",
        description: "Após a correção, são realizados testes para garantir que o problema foi resolvido e não há outros problemas relacionados."
      },
      {
        title: "Retorno ao usuário",
        description: "O equipamento é devolvido ao usuário com orientações sobre o problema ocorrido e como evitar recorrências."
      },
      {
        title: "Encerramento do chamado",
        description: "O chamado é encerrado no sistema com todas as informações sobre o atendimento realizado."
      }
    ],
    imageUrl: "/public/images/fluxo-004.png"
  },
  {
    id: "POP.DTI.005",
    title: "Gerenciamento de Contas de E-mail Institucional",
    description: "Procedimento para criação, modificação e desativação de contas de e-mail institucional (@pmcg.xxx), incluindo configuração de aliases, redirecionamentos e políticas de retenção.",
    objective: "Garantir o gerenciamento adequado das contas de e-mail institucional, mantendo a segurança das comunicações oficiais e a conformidade com as políticas de TI.",
    steps: [
      {
        title: "Recebimento da solicitação",
        description: "A DTI recebe a solicitação formal via sistema 1Doc, devidamente autorizada, contendo todas as informações necessárias do colaborador."
      },
      {
        title: "Verificação de pré-requisitos",
        description: "Verificar se o usuário já possui conta ativa ou se é necessário criar uma nova, seguindo o padrão de nomenclatura estabelecido."
      },
      {
        title: "Criação/modificação da conta",
        description: "Realizar a criação ou modificação da conta no sistema de e-mail, configurando permissões, quotas e políticas conforme necessário."
      },
      {
        title: "Configuração de acesso",
        description: "Configurar o acesso em todos os dispositivos necessários e fornecer as credenciais iniciais ao usuário de forma segura."
      },
      {
        title: "Documentação",
        description: "Registrar todas as alterações no sistema de gestão da DTI para fins de auditoria e histórico."
      }
    ],
    imageUrl: "/public/images/fluxo-005.png"
  },
  {
    id: "POP.DTI.006",
    title: "Backup de Dados Corporativos",
    description: "Procedimento para realização de backups regulares dos dados críticos dos sistemas corporativos, incluindo verificação de integridade e armazenamento seguro.",
    objective: "Garantir a disponibilidade e recuperação dos dados corporativos em caso de falhas, desastres ou corrupção de dados, minimizando o risco de perda de informações.",
    steps: [
      {
        title: "Identificação dos dados críticos",
        description: "Mapear e priorizar os dados e sistemas que necessitam de backup regular, conforme política de backup da DTI."
      },
      {
        title: "Agendamento dos backups",
        description: "Configurar os jobs de backup de acordo com a criticidade dos dados, seguindo o esquema de retenção estabelecido (diário, semanal, mensal)."
      },
      {
        title: "Execução dos backups",
        description: "Executar os backups conforme agendado, monitorando seu progresso e verificando logs de erro."
      },
      {
        title: "Verificação de integridade",
        description: "Realizar testes periódicos de restauração para garantir que os backups estão íntegros e podem ser recuperados quando necessário."
      },
      {
        title: "Armazenamento seguro",
        description: "Armazenar as mídias de backup em local seguro, seguindo a política de rotação e mantendo cópias off-site quando aplicável."
      },
      {
        title: "Documentação",
        description: "Manter registro detalhado de todos os backups realizados, incluindo data, escopo, responsável e resultados dos testes de integridade."
      }
    ],
    imageUrl: "/public/images/fluxo-006.png"
  },
  {
    id: "POP.DTI.007",
    title: "Restauração de Dados a partir de Backup",
    description: "Procedimento para recuperação de dados a partir dos backups corporativos em casos de perda, corrupção ou necessidade de acesso a versões anteriores.",
    objective: "Estabelecer um processo seguro e eficiente para recuperação de dados a partir dos backups, minimizando o tempo de indisponibilidade e garantindo a integridade das informações.",
    steps: [
      {
        title: "Identificação da necessidade",
        description: "Receber e validar a solicitação de restauração, verificando a autorização do solicitante e a criticidade dos dados."
      },
      {
        title: "Localização do backup",
        description: "Identificar a mídia de backup mais recente que contém os dados solicitados, verificando sua integridade."
      },
      {
        title: "Preparação do ambiente",
        description: "Configurar um ambiente seguro para a restauração, evitando sobrescrita acidental de dados atuais."
      },
      {
        title: "Execução da restauração",
        description: "Realizar o procedimento de restauração conforme documentação do sistema, monitorando possíveis erros."
      },
      {
        title: "Verificação dos dados",
        description: "Conferir se os dados restaurados estão completos e íntegros, realizando testes quando necessário."
      },
      {
        title: "Disponibilização",
        description: "Disponibilizar os dados restaurados ao solicitante, orientando sobre eventuais diferenças em relação à versão original."
      },
      {
        title: "Documentação",
        description: "Registrar todo o processo de restauração, incluindo dados recuperados, responsáveis e eventuais observações."
      }
    ],
    imageUrl: "/public/images/fluxo-007.png"
  },
  {
    id: "POP.DTI.008",
    title: "Atualização de Sistemas Operacionais",
    description: "Procedimento para aplicação de atualizações de segurança e patches em sistemas operacionais dos computadores corporativos.",
    objective: "Manter os sistemas operacionais atualizados com os últimos patches de segurança, garantindo a proteção contra vulnerabilidades conhecidas e a estabilidade dos sistemas.",
    steps: [
      {
        title: "Monitoramento de atualizações",
        description: "Acompanhar os lançamentos de atualizações críticas e de segurança pelos fabricantes dos sistemas operacionais."
      },
      {
        title: "Análise de impacto",
        description: "Avaliar o impacto potencial das atualizações nos sistemas corporativos, verificando compatibilidade com aplicativos críticos."
      },
      {
        title: "Planejamento",
        description: "Definir janela de manutenção adequada para aplicação das atualizações, considerando o menor impacto possível nas operações."
      },
      {
        title: "Testes em ambiente controlado",
        description: "Aplicar as atualizações primeiro em um grupo reduzido de máquinas para verificar estabilidade e compatibilidade."
      },
      {
        title: "Implementação",
        description: "Distribuir as atualizações para todos os computadores, utilizando ferramentas de gestão centralizada quando disponível."
      },
      {
        title: "Verificação",
        description: "Confirmar que as atualizações foram aplicadas com sucesso em todos os equipamentos e que os sistemas estão funcionando normalmente."
      },
      {
        title: "Documentação",
        description: "Registrar todas as atualizações aplicadas, incluindo versões, datas e eventuais problemas encontrados."
      }
    ],
    imageUrl: "/public/images/fluxo-008.png"
  },
  {
    id: "POP.DTI.009",
    title: "Gerenciamento de Impressoras e Multifuncionais",
    description: "Procedimento para instalação, configuração e manutenção de impressoras e equipamentos multifuncionais na rede corporativa.",
    objective: "Garantir o funcionamento adequado dos equipamentos de impressão, otimizando o uso de recursos e reduzindo custos operacionais.",
    steps: [
      {
        title: "Recebimento do equipamento",
        description: "Verificar se o equipamento recebido corresponde à especificação solicitada e está em perfeitas condições físicas."
      },
      {
        title: "Configuração de rede",
        description: "Configurar o equipamento na rede corporativa, atribuindo endereço IP fixo e configurando parâmetros de segurança."
      },
      {
        title: "Instalação de drivers",
        description: "Instalar e configurar os drivers nos computadores que terão acesso ao equipamento, seguindo padrões estabelecidos."
      },
      {
        title: "Configuração de filas de impressão",
        description: "Definir filas de impressão com parâmetros padrão para economia de tinta/toner e papel."
      },
      {
        title: "Monitoramento de suprimentos",
        description: "Acompanhar os níveis de tinta/toner e papel, solicitando reposição quando necessário."
      },
      {
        title: "Manutenção preventiva",
        description: "Realizar limpeza e manutenção periódica conforme especificações do fabricante."
      }
    ],
    imageUrl: "/public/images/fluxo-009.png"
  },
  {
    id: "POP.DTI.010",
    title: "Controle de Acesso a Sistemas Críticos",
    description: "Procedimento para gerenciamento de credenciais e permissões de acesso a sistemas críticos da organização.",
    objective: "Garantir que apenas pessoal autorizado tenha acesso a sistemas críticos, seguindo o princípio do menor privilégio.",
    steps: [
      {
        title: "Identificação de necessidades",
        description: "Identificar quais sistemas são considerados críticos e quais níveis de acesso são necessários para cada função."
      },
      {
        title: "Definição de perfis",
        description: "Criar perfis de acesso padronizados para cada tipo de usuário, com permissões mínimas necessárias."
      },
      {
        title: "Solicitação de acesso",
        description: "Receber e validar solicitações de acesso, verificando a necessidade e autorização hierárquica."
      },
      {
        title: "Concessão de acesso",
        description: "Configurar as credenciais e permissões conforme perfil aprovado, utilizando autenticação forte quando possível."
      },
      {
        title: "Revisão periódica",
        description: "Realizar auditorias regulares para verificar se os acessos ainda são necessários e estão adequados."
      },
      {
        title: "Revogação de acesso",
        description: "Remover acessos quando não forem mais necessários, especialmente em casos de mudança de função ou desligamento."
      }
    ],
    imageUrl: "/public/images/fluxo-010.png"
  },
  {
    id: "POP.DTI.011",
    title: "Gestão de Licenças de Software",
    description: "Procedimento para aquisição, distribuição e controle de licenças de software utilizados na organização.",
    objective: "Garantir a conformidade com os termos de licenciamento de software, evitando penalidades por uso indevido e otimizando custos.",
    steps: [
      {
        title: "Inventário de software",
        description: "Manter um registro atualizado de todos os softwares instalados e suas respectivas licenças."
      },
      {
        title: "Análise de necessidades",
        description: "Avaliar novas demandas por software, verificando se já existem licenças disponíveis ou similares instalados."
      },
      {
        title: "Aquisição",
        description: "Adquirir novas licenças quando necessário, seguindo os procedimentos de compra estabelecidos."
      },
      {
        title: "Distribuição",
        description: "Registrar a alocação de cada licença para um usuário ou equipamento específico."
      },
      {
        title: "Monitoramento",
        description: "Acompanhar o uso efetivo das licenças, identificando subutilização ou necessidade de expansão."
      },
      {
        title: "Renovação",
        description: "Gerenciar a renovação de licenças antes do vencimento, reavaliando a necessidade de manutenção."
      }
    ],
    imageUrl: "/public/images/fluxo-011.png"
  },
  {
    id: "POP.DTI.012",
    title: "Resposta a Incidentes de Segurança",
    description: "Procedimento para identificação, contenção e tratamento de incidentes de segurança da informação.",
    objective: "Minimizar o impacto de incidentes de segurança através de ações rápidas e coordenadas, preservando evidências para análise.",
    steps: [
      {
        title: "Identificação",
        description: "Detectar e classificar o incidente de acordo com seu tipo e gravidade."
      },
      {
        title: "Notificação",
        description: "Comunicar imediatamente à equipe de segurança e às partes interessadas conforme política estabelecida."
      },
      {
        title: "Contenção",
        description: "Isolar sistemas afetados para prevenir a propagação do incidente."
      },
      {
        title: "Análise",
        description: "Investigar as causas e o alcance do incidente, preservando evidências."
      },
      {
        title: "Eradicação",
        description: "Remover a ameaça e vulnerabilidades exploradas, aplicando correções necessárias."
      },
      {
        title: "Recuperação",
        description: "Restaurar sistemas e dados afetados, verificando sua integridade."
      },
      {
        title: "Lições aprendidas",
        description: "Documentar o incidente e recomendar melhorias para prevenir recorrências."
      }
    ],
    imageUrl: "/public/images/fluxo-012.png"
  },
  {
    id: "POP.DTI.013",
    title: "Gestão de Ativos de TI",
    description: "Procedimento para cadastro, controle e baixa de ativos de tecnologia da informação da organização.",
    objective: "Manter um inventário atualizado e preciso de todos os ativos de TI, facilitando a gestão patrimonial e o planejamento de recursos.",
    steps: [
      {
        title: "Cadastro inicial",
        description: "Registrar todos os ativos de TI no sistema de gestão patrimonial, incluindo informações técnicas, número de série e localização."
      },
      {
        title: "Etiquetagem",
        description: "Aplicar etiquetas de identificação em todos os equipamentos, seguindo o padrão estabelecido."
      },
      {
        title: "Atualização de status",
        description: "Manter o status de cada ativo atualizado (em uso, em manutenção, disponível, descartado)."
      },
      {
        title: "Auditoria periódica",
        description: "Realizar inventário físico regular para verificar a localização e condição dos ativos."
      },
      {
        title: "Movimentação",
        description: "Registrar todas as transferências de ativos entre setores ou locais."
      },
      {
        title: "Baixa",
        description: "Seguir procedimento de descarte adequado para equipamentos obsoletos ou inoperantes."
      }
    ],
    imageUrl: "/public/images/fluxo-013.png"
  },
  {
    id: "POP.DTI.014",
    title: "Configuração de Rede Corporativa",
    description: "Procedimento para instalação e configuração de equipamentos de rede como switches, roteadores e pontos de acesso wireless.",
    objective: "Garantir a configuração padronizada e segura dos equipamentos de rede, assegurando conectividade e desempenho adequados.",
    steps: [
      {
        title: "Planejamento",
        description: "Definir esquema de endereçamento IP, VLANs e políticas de segurança para o novo equipamento."
      },
      {
        title: "Configuração básica",
        description: "Configurar hostname, credenciais de acesso, NTP e outros parâmetros básicos do equipamento."
      },
      {
        title: "Configuração de rede",
        description: "Definir interfaces, VLANs, ACLs e outros parâmetros específicos conforme necessidade."
      },
      {
        title: "Configuração de segurança",
        description: "Aplicar políticas de segurança como desabilitação de serviços desnecessários, configuração de SNMP segura, etc."
      },
      {
        title: "Testes",
        description: "Verificar conectividade, desempenho e conformidade com as políticas estabelecidas."
      },
      {
        title: "Documentação",
        description: "Registrar todas as configurações no sistema de gestão de rede e atualizar diagramas de topologia."
      }
    ],
    imageUrl: "/public/images/fluxo-014.png"
  },
  {
    id: "POP.DTI.015",
    title: "Monitoramento de Sistemas",
    description: "Procedimento para configuração e operação do sistema de monitoramento de infraestrutura de TI.",
    objective: "Manter a infraestrutura de TI sob monitoramento contínuo, permitindo detecção proativa de problemas e garantia de disponibilidade.",
    steps: [
      {
        title: "Cadastro de dispositivos",
        description: "Adicionar novos equipamentos ao sistema de monitoramento, definindo parâmetros e métricas relevantes."
      },
      {
        title: "Configuração de alertas",
        description: "Definir limiares e destinatários para notificações de acordo com a criticidade de cada sistema."
      },
      {
        title: "Monitoramento contínuo",
        description: "Acompanhar indicadores de desempenho e disponibilidade, identificando tendências e anomalias."
      },
      {
        title: "Análise de eventos",
        description: "Investigar alertas gerados, determinar causas raiz e acionar equipes responsáveis quando necessário."
      },
      {
        title: "Ajustes e otimização",
        description: "Refinar configurações de monitoramento com base em falsos positivos/negativos e mudanças na infraestrutura."
      },
      {
        title: "Relatórios",
        description: "Gerar relatórios periódicos de disponibilidade, desempenho e eventos significativos."
      }
    ],
    imageUrl: "/public/images/fluxo-015.png"
  },
  {
    id: "POP.DTI.016",
    title: "Gestão de Vulnerabilidades",
    description: "Procedimento para identificação, classificação e tratamento de vulnerabilidades em sistemas e aplicações.",
    objective: "Reduzir riscos de segurança através da detecção e correção proativa de vulnerabilidades na infraestrutura de TI.",
    steps: [
      {
        title: "Identificação",
        description: "Realizar varreduras periódicas para detectar vulnerabilidades em sistemas e aplicações."
      },
      {
        title: "Classificação",
        description: "Avaliar a criticidade das vulnerabilidades encontradas com base em potencial impacto e facilidade de exploração."
      },
      {
        title: "Priorização",
        description: "Definir ordem de tratamento considerando criticidade, exposição do sistema e disponibilidade de correções."
      },
      {
        title: "Remediação",
        description: "Aplicar patches, ajustes de configuração ou outras medidas para eliminar ou mitigar as vulnerabilidades."
      },
      {
        title: "Verificação",
        description: "Confirmar que as correções foram efetivas através de nova varredura."
      },
      {
        title: "Documentação",
        description: "Manter registro de todas as vulnerabilidades identificadas e ações tomadas para fins de auditoria."
      }
    ],
    imageUrl: "/public/images/fluxo-016.png"
  },
  {
    id: "POP.DTI.017",
    title: "Suporte e Melhoria ao Sistema e-Cidades",
    description: "Descreve o processo contínuo de suporte técnico e evolução do sistema E-Cidades, abrangendo o diagnóstico de problemas reportados pelos usuários, criação de base de homologação para testes, implementação de correções ou melhorias e migração para o ambiente de produção.",
    objective: "Estabelecer procedimentos padronizados para manutenção, suporte e evolução contínua do sistema e-Cidades, garantindo estabilidade operacional, correção eficiente de problemas e implementação segura de melhorias e atualizações.",
    steps: [
      // ... (steps do POP 17)
    ],
    imageUrl: "/public/images/fluxo-017.png"
  }
];
