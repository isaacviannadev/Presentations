# O bug que o TypeScript pegaria às 3h da manhã
### Versão relâmpago — fala contínua de 2 a 3 minutos

Este é o [roteiro completo](roteiro.md) condensado numa fala única. Você fala sem parar e **você mesmo avança os slides** com a seta → nos pontos marcados com **[→]** — aperta e continua falando por cima da transição.

**Regra do roteiro:** o que está em **negrito** coincide de propósito com a tela — são os punchlines; fale exatamente como está escrito, voz e slide juntos. Todo o resto diz o que o slide **não** mostra: enquanto a plateia lê a tela, você conta o porquê e a consequência. Não leia o corpo do slide.

Ritmo natural: ~2min30. Cada slide fica na tela uns 15–20 segundos.

---

*(Slide 0 — Hero já na tela)*

Três da manhã de um sábado. O celular do plantão toca — e é esse terminal aí que tá esperando você. *(aponta)* `TypeError: Cannot read properties of undefined`. Quem já recebeu esse toque sabe: ele nunca chega em hora boa. Nos próximos três minutos eu quero convencer vocês de que esse alarme nunca deveria ter tocado.

**[→]** *(Slide 1 — Abertura)*

**Levanta a mão quem já fez deploy na sexta-feira.** *(espera as mãos)* **Agora deixa levantada quem descobriu no sábado que `user.name` era `undefined`.** *(pausa pro riso)* E vocês conhecem os primos desse erro: o `toFixed` no valor que chegou como string, o `.map` no que voltou `null`. Bugs diferentes na superfície — a mesma doença por baixo.

**[→]** *(Slide 2 — A tese)*

**TypeScript não é sobre escrever tipos. É sobre mover o erro de lugar.** Olha essa escada: o bug é exatamente o mesmo nas três linhas — o que muda é só a data em que você descobre. E cada degrau que ele desce, o preço multiplica: segundos viram minutos, minutos viram o seu fim de semana. Tudo que o TypeScript faz é entregar o bug no degrau de cima: **o sublinhado vermelho, antes do commit**.

**[→]** *(Slide 3 — JavaScript aceita tudo)*

Essa função calcula desconto e rodou três meses em produção sem uma reclamação. Até alguém chamar com `discountPercent` em vez de `discount`. E reparem no que o JavaScript fez: **nada**. Nenhuma exceção, nenhum aviso — multiplicou cem por uma coisa que não existe e seguiu em frente. Ele não deixou o bug passar: ele **cooperou com o bug**. E quando alguém percebe, você não tá mais debugando código — tá respondendo e-mail de cliente com boleto errado.

**[→]** *(Slide 4 — TypeScript reclama agora)*

O mesmo código, com uma interface de três linhas em cima. Foi só isso. E o bug que ia atravessar três meses de produção morre aqui, no editor — que ainda por cima entrega a resposta pronta: ***did you mean 'discount'?*** **O vermelho no editor é irritante. O vermelho no Sentry é caro.**

**[→]** *(Slide 5 — As três objeções)*

As objeções tão aí na tela — são sempre as mesmas três, e podem ler enquanto eu confesso: todas já foram minhas. A do tempo se paga na primeira tarde de debug que você **não** faz. A do verboso morreu em 2016 — olha o card do meio: nenhuma anotação escrita, e mesmo assim tudo tipado. E a terceira... **`any` é o TypeScript em modo avião.** Parece que tá tudo funcionando — até a hora que você precisa dele.

**[→]** *(Slide 6 — Documentação que não mente)*

**Tipo é documentação que não mente.** E não é porque tipo é mais honesto — é porque é a única documentação que tem um fiscal. Comentário, README, JSDoc: todos dependem de um humano lembrar de atualizar. E ninguém lembra. O contrato da direita não depende da memória de ninguém: **se mentir, não compila**.

**[→]** *(Slide 7 — O número)*

Esse número não é achismo: Microsoft e University College London pegaram bugs reais, de projetos públicos — bugs que já tinham escapado do review — e mediram o que acontecia adicionando só os tipos por cima. Quinze por cento morriam na hora. **Um em cada sete bugs. De graça. Antes do commit.**

**[→]** *(Slide 8 — Fechamento)*

**TypeScript não é sobre confiar menos em você. É sobre não precisar confiar na sua memória... às seis da tarde de uma sexta-feira.** Obrigado.

---

## Notas

- **Se estourar o tempo:** corte a frase do card do meio no slide 5 ("A do verboso morreu em 2016...") — emenda direto da tarde de debug pro `any`.
- **Slide 1 é a exceção da regra:** a pergunta coincide com a tela porque é uma instrução pra plateia, não prosa — você está fazendo a dinâmica, não lendo o slide.
- **Slides 2 e 7 têm animação de entrada** (escada de custo e contador). Não espera a animação — fala por cima; ela termina sozinha enquanto você narra.
- **Idioma:** o switch PT/EN fica na nav; confere antes de começar.
