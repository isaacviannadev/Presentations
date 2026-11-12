# TARS · Scheduling de Suites

Notas para as 42 seções da apresentação interativa. As telas são cenários de design ilustrativos; os contratos do backend permanecem em aberto.

## 01 · Scheduling de Suites

Proposta de design com dados ilustrativos. As telas e componentes são editáveis no Figma. Contratos do scheduler ainda precisam ser definidos e validados.

## 02 · Criar um agendamento, tela a tela

HF-10 → HF-12 → HF-33 → HF-14 → HF-15
Os estados representam o fluxo proposto. Os controlos reais dependem de respostas autoritativas do scheduler.

## 03 · Alterar apenas uma ocorrência

HF-08 → HF-16 → HF-17 → HF-35 → HF-36
Os estados representam o fluxo proposto. Os controlos reais dependem de respostas autoritativas do scheduler.

## 04 · Entrada pela Suite

HF-10 — Entrada pela Suite
Entrada: Suites / detalhe
Interação: Inspecionar composição e escolher Schedule this Suite
Saída: Formulário já contextualizado
Regra: Worker e devices são herdados da Suite; TestCases são compatíveis com o worker.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68340
Cenário de design com dados ilustrativos.

## 05 · Entrada pelo overview

HF-11 — Entrada pelo overview
Entrada: Schedule a Suite em Schedules
Interação: Pesquisar e selecionar uma Suite do domínio
Saída: Mesmo formulário com Suite selecionada
Regra: A seleção tem paginação; não se escolhe worker novamente.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68572
Cenário de design com dados ilustrativos.

## 06 · Formulário com conflito

HF-12 — Formulário com conflito
Entrada: Suite selecionada ou edição de horário
Interação: Definir quando e recorrência; inspecionar sobreposição
Saída: Nova tentativa de horário, opções ou preview completo
Regra: Conflito conhecido bloqueia criação/edição; valores são preservados.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-68823
Cenário de design com dados ilustrativos.

## 07 · Formulário sem conflito

HF-33 — Formulário sem conflito
Entrada: Try new time and recheck
Interação: Rever as datas recalculadas e continuar
Saída: Revisão de criação
Regra: A sugestão altera o escopo escolhido; não limpa conflitos sem nova verificação.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69164
Cenário de design com dados ilustrativos.

## 08 · Recorrência Cron

HF-13 — Recorrência Cron
Entrada: Alternador Simple / Cron
Interação: Editar expressão e ler a interpretação; selecionar data prevista
Saída: Preview e revisão Cron
Regra: Datas previstas e disponibilidade verificada têm horizontes diferentes.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69506
Cenário de design com dados ilustrativos.

## 09 · Opções de execução

HF-24 — Opções de execução
Entrada: Advanced execution options
Interação: Definir retry, trace, release e limite de runtime
Saída: Formulário com opções aplicadas
Regra: Runtime estimado, timeout e janela reservada são conceitos distintos; política depende do contrato.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1097-69842
Cenário de design com dados ilustrativos.

## 10 · Modos e finais da recorrência

HF-25 — Modos e finais da recorrência
Entrada: Editar Repeat / Ends
Interação: Once, Daily ou Weekly; Nunca, N ocorrências ou data final
Saída: Preview recalculado
Regra: Conversões Cron → Simple não representáveis pedem decisão explícita.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69108
Cenário de design com dados ilustrativos.

## 11 · Preview completo e outra data

HF-27 — Preview completo e outra data
Entrada: Selecionar ocorrência ou abrir todas as datas
Interação: Consultar dez datas e escolher a segunda data em conflito
Saída: Timeline daquela data, novo horário ou revisão
Regra: Os conflitos da primeira e da quinta ocorrência são independentes.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69406
Cenário de design com dados ilustrativos.

## 12 · Revisão Simple

HF-14 — Revisão Simple
Entrada: Review schedule
Interação: Confirmar Suite, datas, timezone e disponibilidade
Saída: Criando, confirmado ou conflito tardio
Regra: Revalidação na confirmação; concorrência é responsabilidade do scheduler.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69712
Cenário de design com dados ilustrativos.

## 13 · Revisão Cron aberta

HF-34 — Revisão Cron aberta
Entrada: Review schedule no modo Cron
Interação: Distinguir previsão, janela verificada e continuação da regra
Saída: Verificar política/horizonte ou voltar à edição
Regra: Não apresentar uma regra infinita como inteiramente livre após verificar dez datas.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-70360
Cenário de design com dados ilustrativos.

## 14 · Criação confirmada

HF-15 — Criação confirmada
Entrada: Resposta confirmada da criação
Interação: Consultar identidade, primeira ocorrência e escopo
Saída: Agenda, detalhe da regra ou Suite
Regra: Uma resposta ambígua não é uma confirmação; não duplicar o pedido.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-69989
Cenário de design com dados ilustrativos.

## 15 · Saída com alterações

HF-32 — Saída com alterações
Entrada: Cancelar, navegar ou trocar domínio
Interação: Continuar a editar ou descartar alterações
Saída: Mesmo formulário ou destino escolhido
Regra: Suite/worker não atravessam domínios silenciosamente.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1098-70171
Cenário de design com dados ilustrativos.

## 16 · Agendamentos

HF-01 — Agendamentos
Entrada: Menu Schedules
Interação: Pesquisar, filtrar, ordenar e paginar regras
Saída: Detalhe da regra, timeline ou seleção de Suite
Regra: Estado da regra separado da execução; não aplicar Result ao histórico implicitamente.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67300
Cenário de design com dados ilustrativos.

## 17 · Detalhe do agendamento

HF-02 — Detalhe do agendamento
Entrada: Linha da lista de regras
Interação: Consultar recorrência, próximas datas e histórico; editar ou pausar
Saída: Ocorrência, edição de regra ou confirmação de pausa
Regra: Uma execução em curso não transforma a regra em Running.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67631
Cenário de design com dados ilustrativos.

## 18 · Timeline opcional

HF-22 — Timeline opcional
Entrada: Alternador List / Timeline
Interação: Escolher janela, consultar densidade e selecionar um início
Saída: Inspector da ocorrência ou zoom temporal
Regra: Densidade conta todos os resultados filtrados, não apenas a página; não mede capacidade.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1094-67887
Cenário de design com dados ilustrativos.

## 19 · Lista de ocorrências

HF-04 — Lista de ocorrências
Entrada: Separador Agenda
Interação: Filtrar por período, Suite, worker, device, estado ou resultado
Saída: Inspector futuro/concluído; execução
Regra: O intervalo mantém a entidade ocorrência e os filtros.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-67647
Cenário de design com dados ilustrativos.

## 20 · Agenda diária agregada

HF-05 — Agenda diária agregada
Entrada: Dia ou aprofundamento do calendário
Interação: Selecionar uma hora e paginar as ocorrências dessa hora
Saída: Inspector ou execução
Regra: Agregação suporta o cenário ilustrativo de mil ocorrências/dia.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-67992
Cenário de design com dados ilustrativos.

## 21 · Semana

HF-06 — Semana
Entrada: Agenda / Week
Interação: Ler volume por hora e selecionar uma célula
Saída: Dia nessa data/hora ou lista filtrada
Regra: Intensidade é número de inícios; falhas aparecem como informação adicional.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-68359
Cenário de design com dados ilustrativos.

## 22 · Mês

HF-07 — Mês
Entrada: Agenda / Month
Interação: Selecionar dia e consultar totais/resultados
Saída: Vista diária da data selecionada
Regra: Zero, não carregado e futuro projetado têm representações distintas.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-68967
Cenário de design com dados ilustrativos.

## 23 · Intervalo personalizado

HF-23 — Intervalo personalizado
Entrada: Alterar período na Agenda
Interação: Comparar volumes por dia e investigar a lista agrupada
Saída: Dia, ocorrência ou execução
Regra: O gráfico e a lista usam a mesma consulta e totais consistentes.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-69315
Cenário de design com dados ilustrativos.

## 24 · Dia com poucas ocorrências

HF-31 — Dia com poucas ocorrências
Entrada: Filtrar a Agenda por Suite
Interação: Selecionar ocorrências individuais
Saída: Mesmo inspector da lista ou do dia agregado
Regra: A apresentação adapta-se à densidade sem trocar de recurso ou consulta.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1095-69637
Cenário de design com dados ilustrativos.

## 25 · Período e filtros

HF-21 — Período e filtros
Entrada: Date range / More filters
Interação: Aplicar datas inclusivas e filtros explícitos
Saída: Mesma vista e consulta atualizada
Regra: Histórico não desaparece porque a regra foi pausada depois.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70939
Cenário de design com dados ilustrativos.

## 26 · Ocorrência futura

HF-08 — Ocorrência futura
Entrada: Linha, marcador, hora ou dia
Interação: Inspecionar datas, devices e disponibilidade; editar/cancelar
Saída: Escopo, regra ou regresso à Agenda
Regra: As ações referem-se ao futuro; cancelamento não para uma execução.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-69828
Cenário de design com dados ilustrativos.

## 27 · Ocorrência concluída

HF-09 — Ocorrência concluída
Entrada: Lista, dia ou histórico
Interação: Consultar horário real, duração e resultado
Saída: Execução ou regra para mudanças futuras
Regra: A ocorrência passada é apenas de leitura.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70092
Cenário de design com dados ilustrativos.

## 28 · Contexto da série

HF-26 — Contexto da série
Entrada: Inspector da ocorrência
Interação: Consultar vizinhas e opções da execução
Saída: Outra ocorrência, toda a série ou execução
Regra: Repetir execução fica no fluxo de Executions/Quick Run com nova verificação.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70349
Cenário de design com dados ilustrativos.

## 29 · Escopo da edição

HF-16 — Escopo da edição
Entrada: Edit numa ocorrência futura
Interação: Escolher só esta ou esta e futuras
Saída: Formulário com escopo fixado
Regra: Histórico e execuções em curso não são reescritos.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70582
Cenário de design com dados ilustrativos.

## 30 · Edição bloqueada

HF-17 — Edição bloqueada
Entrada: Alterar horário da ocorrência
Interação: Ver conflito e tentar alternativa
Saída: Nova verificação ou descarte
Regra: Reserva anterior permanece até a substituição ser aceite.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-70769
Cenário de design com dados ilustrativos.

## 31 · Edição pronta para guardar

HF-35 — Edição pronta para guardar
Entrada: Alternativa de horário após conflito
Interação: Reverificar a ocorrência escolhida e guardar
Saída: Confirmação da alteração ou conflito tardio
Regra: O escopo continua fixado. Só a confirmação substitui a reserva anterior.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1116-71728
Cenário de design com dados ilustrativos.

## 32 · Alteração confirmada

HF-36 — Alteração confirmada
Entrada: Resposta confirmada da edição
Interação: Conferir o novo horário e o alcance da alteração
Saída: Agenda ou regra
Regra: A alteração afeta apenas a ocorrência de 18 Nov. As restantes datas mantêm-se.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1116-72103
Cenário de design com dados ilustrativos.

## 33 · Escopo do cancelamento

HF-18 — Escopo do cancelamento
Entrada: Cancel numa ocorrência futura
Interação: Rever identidade, datas afetadas e confirmar
Saída: Resultado do cancelamento
Regra: Regra aberta usa todas as futuras, sem inventar uma contagem finita.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1099-71028
Cenário de design com dados ilustrativos.

## 34 · Resultados de gestão

HF-19 — Resultados de gestão
Entrada: Cancelar ou pausar
Interação: Confirmar o que mudou e o próximo destino
Saída: Agenda, regra ou retomada
Regra: Pausar/cancelar não interrompe execuções em curso.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70528
Cenário de design com dados ilustrativos.

## 35 · Retomar uma regra

HF-30 — Retomar uma regra
Entrada: Resume numa regra pausada
Interação: Reverificar datas futuras antes de reativar
Saída: Regra ativa ou pausa mantida por conflito
Regra: Não reproduzir automaticamente ocorrências perdidas.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-70723
Cenário de design com dados ilustrativos.

## 36 · Recuperação e dados incertos

HF-20 — Recuperação e dados incertos
Entrada: Vazio, erro, stale ou resposta ambígua
Interação: Limpar filtros, atualizar ou reconciliar pedido
Saída: Consulta/formulário restaurado ou confirmação
Regra: Não verificado, falha de consulta e zero não são equivalentes.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71237
Cenário de design com dados ilustrativos.

## 37 · Carregamento e submissão

HF-28 — Carregamento e submissão
Entrada: Abrir consulta, verificar ou confirmar
Interação: Aguardar sem repetir o pedido; manter contexto
Saída: Resultado ou recuperação
Regra: Bloquear duplicação e manter valores ao longo da transição.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71461
Cenário de design com dados ilustrativos.

## 38 · Exceções operacionais

HF-29 — Exceções operacionais
Entrada: Permissão, sessão, Suite, device ou DST alterados
Interação: Explicar o bloqueio e oferecer recuperação específica
Saída: Autenticação, refresh, recheck ou edição
Regra: Os estados definem comportamento proposto; não comprovam endpoints disponíveis.
Fonte: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1100-71645
Cenário de design com dados ilustrativos.

## 39 · O que mudou do artefato para o produto

| Parte | Decisão | Referência |
| --- | --- | --- |
| Overview | Lista inicial de regras. Timeline permanece como opção. | HF-01, HF-22 |
| Calendário | Dia, semana e mês mostram ocorrências. Range mantém essa entidade. | HF-04 a HF-07, HF-23 |
| Agendamento | A Suite leva worker, TestCases e devices no domínio atual. | HF-10 a HF-13 |
| Conflito | Uso simultâneo do mesmo device bloqueia criar e editar. | HF-12, HF-17, HF-27 |
| Recorrência | Simple e cron, com finais e datas futuras não verificadas explícitos. | HF-13, HF-25, HF-34 |
| Histórico | Ocorrências concluídas são de leitura. Para repetir, abrir a execução. | HF-09, HF-26 |
| Gestão | Escopo explícito, reserva anterior mantida até confirmar e retomada sem replay. | HF-16 a HF-19, HF-30, HF-35, HF-36 |

Índice: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1122-71783

## 40 · Componentes e responsabilidade

| Camada | Estrutura | Destino |
| --- | --- | --- |
| TARS existente | Header, Sidebar, Button, Input e tokens de cor, espaçamento e raio. | Biblioteca existente |
| Regras e contexto | RuleRow, RuleInspector, SuitePickerRow, SuiteTestCaseRow e SuiteContextStrip. | Scheduling |
| Editor | WhenFields, RecurrenceEditor, ExecutionOptionsForm, DeviceOccupancyRow e AvailabilityRow. | Scheduling |
| Agenda | AgendaToolbar, OccurrenceRow, CalendarDay, OccurrenceCard, DensityCell e TimelineStartMarker. | Scheduling |
| Gestão | OccurrenceInspector, ScopeChoice, ScheduleReview e FeedbackPanel. | Scheduling |
| Candidatos genéricos | DateRangePicker e ResourceTimelineRow. Exigem outro consumidor e validação de contrato. | DS, propostas não publicadas |

Feature masters: https://www.figma.com/design/7mTEuhQzfzbOcwwK0QGcHg/Vodafone-TARS?node-id=1110-69112
Design System proposals: https://www.figma.com/design/768aLZeg5iy40TrtN5Ssc2/TARS-Design-System?node-id=302-3

## 41 · Estados que mudam as ações

| Entidade | Estados | Efeito na experiência |
| --- | --- | --- |
| Regra | Active, Paused, Completed e Cancelled. | Editar ou retomar afeta datas futuras. |
| Ocorrência | Scheduled, Running, Completed, Cancelled e Missed. Queued depende do contrato. | Passado fica em leitura. Running abre execução. |
| Resultado | Passed, Failed ou sem resultado confirmado. | Exibe resultado e motivo sem substituir o estado. |
| Disponibilidade | Not checked, Checking, Available, Conflict, Failed, Stale e Unavailable. | Só uma verificação válida permite continuar. |
| Alteração | Dirty, Submitting, Confirmed, Rejected e Unknown outcome. | Preservar valores. Reconciliar antes de repetir. |
| Contexto | Read-only, sessão expirada, Suite alterada e exceção de timezone. | Explicar o bloqueio e a recuperação específica. |



## 42 · Decisões necessárias antes da implementação

| Nível | Contrato | Definição necessária | Telas |
| --- | --- | --- | --- |
| P0 | Janela por device | Relação entre reserva, estimativa, runtime e retries. | HF-12, HF-24 |
| P0 | Cron sem fim | Horizonte verificado e conflito após esse horizonte. | HF-13, HF-34 |
| P0 | Concorrência | Exclusão atómica entre schedules, execuções e Quick Runs. | HF-12, HF-17 |
| P0 | Confirmação ambígua | Idempotência e consulta do resultado antes de repetir. | HF-20, HF-28 |
| P0 | Domínio e acesso | Permissões e ocupação externa anonimizada. | HF-29, HF-32 |
| P0 | Cron e timezone | Dialeto, horário inexistente ou repetido e execução tardia. | HF-25, HF-29 |
| P0 | Revisão da Suite | Invalidar a verificação quando a composição muda. | HF-29 |
