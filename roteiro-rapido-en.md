# The bug TypeScript would catch at 3 in the morning
### Versão relâmpago em inglês — fala contínua de 2 a 3 minutos

Versão em inglês do [roteiro rápido](roteiro-rapido.md). Troque o switch PT/EN na nav **antes** de começar. Você fala sem parar e **você mesmo avança os slides** com a seta → nos pontos marcados com **[→]** — aperta e continua falando por cima da transição.

**Regra do roteiro:** o que está em **negrito** coincide de propósito com a tela — são os punchlines; fale exatamente como está escrito, voz e slide juntos. Todo o resto diz o que o slide **não** mostra: enquanto a plateia lê a tela, você conta o porquê e a consequência. Não leia o corpo do slide.

Ritmo natural: ~2min30. Cada slide fica na tela uns 15–20 segundos.

---

*(Slide 0 — Hero já na tela)*

Three in the morning, on a Saturday. The on-call phone goes off — and this terminal right here is what's waiting for you. *(aponta)* `TypeError: Cannot read properties of undefined`. If you've ever gotten that call, you know it never comes at a good time. Over the next three minutes, I want to convince you that this alarm should never have gone off in the first place.

**[→]** *(Slide 1 — Abertura)*

**Raise your hand if you've ever deployed on a Friday.** *(espera as mãos)* **Now keep it up if you found out on Saturday that `user.name` was `undefined`.** *(pausa pro riso)* And you know this error's cousins: the `toFixed` on a value that arrived as a string, the `.map` on something that came back `null`. Different bugs on the surface — same disease underneath.

**[→]** *(Slide 2 — A tese)*

**TypeScript isn't about writing types. It's about moving the error.** Look at this ladder: the bug is exactly the same on all three rows — the only thing that changes is the date you find it. And every step it slides down, the price multiplies: seconds become minutes, minutes become your weekend. All TypeScript does is hand you the bug at the top step: **the red squiggly, before the commit**.

**[→]** *(Slide 3 — JavaScript aceita tudo)*

This function calculates a discount, and it ran in production for three months without a single complaint. Until someone called it with `discountPercent` instead of `discount`. And notice what JavaScript did: **nothing**. No exception, no warning — it multiplied a hundred by something that doesn't exist and just kept going. It didn't let the bug through — it **cooperated with the bug**. And by the time anyone notices, you're not debugging code anymore — you're answering a customer email about a broken invoice.

**[→]** *(Slide 4 — TypeScript reclama agora)*

Same code, with a three-line interface on top. That's all it took. The bug that was going to survive three months in production dies right here, in the editor — which even hands you the answer: ***did you mean 'discount'?*** **Red in the editor is annoying. Red in Sentry is expensive.**

**[→]** *(Slide 5 — As três objeções)*

The objections are right there on screen — always the same three, and you can read them while I confess: I've used every single one. The time one pays for itself with the first afternoon of debugging you **don't** do. The verbose one died in 2016 — look at the middle card: not one annotation written, and everything is still typed. And the third one... **`any` is TypeScript in airplane mode.** Everything looks fine — right up until you actually need it.

**[→]** *(Slide 6 — Documentação que não mente)*

**Types are documentation that can't lie.** And it's not because types are more honest — it's because they're the only documentation with an enforcer. Comments, READMEs, JSDoc: they all depend on a human remembering to update them. And nobody remembers. The contract on the right doesn't depend on anyone's memory: **if it lies, it doesn't compile**.

**[→]** *(Slide 7 — O número)*

This number isn't a hot take: Microsoft and University College London took real bugs from public projects — bugs that had already slipped past review — and measured what happened when you just add types on top. Fifteen percent died on the spot. **One in seven bugs. For free. Before the commit.**

**[→]** *(Slide 8 — Fechamento)*

**TypeScript isn't about trusting yourself less. It's about not having to trust your memory... at 6 pm on a Friday.** Thank you.

---

## Notas

- **Se estourar o tempo:** corte a frase do card do meio no slide 5 ("The verbose one died in 2016...") — emenda direto do afternoon of debugging pro `any`.
- **Slide 1 é a exceção da regra:** a pergunta coincide com a tela porque é uma instrução pra plateia, não prosa — você está fazendo a dinâmica, não lendo o slide.
- **Pronúncia — pontos de atenção:** *squiggly* (/ˈskwɪɡli/), *invoice* (acento na primeira sílaba: ÍN-voice), *undefined* (un-de-FINED), *verbose* (ver-BOUS, "s" de "sim").
- **Slides 2 e 7 têm animação de entrada** (escada de custo e contador). Não espera a animação — fala por cima; ela termina sozinha enquanto você narra.
