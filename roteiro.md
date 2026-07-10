# O bug que o TypeScript pegaria às 3h da manhã
### Roteiro falado, slide a slide — 6 a 7 minutos

A LP é o deck: **seta →** (ou um scroll) avança um slide. Cada seção abaixo é um slide, com o texto falado, o tom e a deixa pra avançar.

| # | Slide | Tempo |
|---|---|---|
| 0 | Hero — o erro na tela | ~30s |
| 1 | Abertura — "levanta a mão" | ~45s |
| 2 | A tese — mover o erro de lugar | ~1min |
| 3 | JavaScript aceita tudo | ~1min |
| 4 | TypeScript reclama agora | ~45s |
| 5 | As três objeções | ~1min15 |
| 6 | Documentação que não mente | ~45s |
| 7 | O número — 15% | ~40s |
| 8 | Fechamento | ~30s |

---

## Slide 0 — Hero *(~30s)*

> **[Tom: calmo, quase contando um causo. Deixa a tela falar — o título e o TypeError já estão lá.]**

"Três da manhã de um sábado. O celular do plantão toca. E na tela do Sentry, tá isso aqui—"

*(aponta pro terminal na tela, lê devagar)*

"`TypeError: Cannot read properties of undefined`."

*(pausa)*

"Esse é provavelmente o erro mais caro da história do JavaScript. E o que eu quero mostrar nos próximos minutos é que ele — e uma família inteira de primos dele — é **evitável antes do código rodar**. Não com mais testes. Não com mais code review. Com o compilador trabalhando **de graça** pra você."

**→ Avança** no fim da frase "de graça pra você".

---

## Slide 1 — Abertura *(~45s)*

> **[Tom: descontraído, olhando pra plateia. A pergunta do slide é a sua fala — faça ela de verdade.]**

"Levanta a mão quem já fez deploy na sexta-feira."

*(pausa — espera as mãos)*

"Agora deixa a mão levantada quem descobriu **no sábado** que `user.name` era `undefined`."

*(pausa pro riso, olha pras mãos que sobraram)*

"Pois é. Aquele erro do slide anterior tem nome, sobrenome e endereço. E o pior: ele nunca vem sozinho — tem uma família inteira de primos. O `toFixed` no valor que virou string. O `.map` no que era `null`. Todos do mesmo jeito: **descobertos em produção, causados antes do commit**."

**→ Avança** em "antes do commit" — emenda direto na tese.

---

## Slide 2 — A tese *(~1min)*

> **[Tom: aqui muda pra sério. Essa é a frase mais importante da talk — o slide fica vermelho junto com você.]**

"TypeScript não é sobre escrever tipos. É sobre **mover o erro de lugar**."

*(pausa — deixa a frase assentar)*

"Todo bug tem um custo. E o custo não depende do bug — depende de **onde** ele é descoberto."

*(as barras da escada de custo animam na tela; narra acompanhando, de cima pra baixo)*

"No **editor**, agora? Custa dez segundos."

"No **code review**? Custa vinte minutos... e um comentário passivo-agressivo."

"Em **produção**? Custa Sentry lotado, hotfix... e o seu sábado."

*(pausa)*

"O TypeScript faz uma coisa só: desloca o erro pro lugar mais barato dessa escada. O sublinhado vermelho, **antes** do commit."

**→ Avança** dizendo: "Deixa eu mostrar isso acontecendo."

---

## Slide 3 — JavaScript aceita tudo *(~1min)*

> **[Tom: professor mostrando a cena do crime. Aponte as linhas do código conforme fala.]**

"Uma função simples: calcula desconto. `order.total` vezes `order.discount`. Funciona, tá em produção, todo mundo feliz."

*(aponta a chamada da função)*

"Três meses depois, outro dev — ou você mesmo, que dá no mesmo — chama a função passando `discountPercent`."

*(pausa)*

"Reparem no que o JavaScript **não** fez: ele não reclamou. Ele **cooperou com o bug**. `100 * undefined` é `NaN`. E `NaN` não quebra nada — ele viaja feliz pelo sistema, passa pelo carrinho, passa pelo checkout... até aparecer num boleto."

*(pausa)*

"Sem erro. Sem aviso. Sem stack trace. Só um cliente com um boleto escrito `NaN`."

**→ Avança** dizendo: "Agora o mesmo código. Mesma função, mesmo bug. Só que em TypeScript."

---

## Slide 4 — TypeScript reclama agora *(~45s)*

> **[Tom: alívio de tensão. O slide mostra o erro sublinhado — aponte pra ele.]**

"Uma interface de três linhas. Só isso mudou."

*(aponta o sublinhado vermelho e o painel de erro)*

"E o erro aparece **agora**. No editor. Antes do commit, antes do review, antes do boleto. E ainda por cima educado: *'discountPercent' does not exist — did you mean 'discount'?* Ele não só pegou o bug, ele **sugeriu a correção**."

*(pausa — e fala devagar, essa é a frase de efeito)*

"O vermelho no editor é **irritante**. O vermelho no Sentry é **caro**."

**→ Avança** dizendo: "Eu sei o que vocês estão pensando. São sempre as mesmas três coisas."

---

## Slide 5 — As três objeções *(~1min15)*

> **[Tom: volta o humor. Percorra os cards da esquerda pra direita, um por vez.]**

*(card 1)*

"Primeira: **'TypeScript me deixa mais lento.'** Verdade. Você perde uns dez segundos escrevendo o tipo. Em troca, deixa de perder duas horas debugando por que `NaN` apareceu num boleto. É o pior trade da história... pra quem gosta de debugar."

*(card 2)*

"Segunda: **'TypeScript é verboso.'** Isso era verdade em 2016. Olha esse código: não tem **uma** anotação de tipo. E é 100% tipado — o compilador infere tudo. Você só escreve tipo na fronteira: função pública, API, contrato. No meio, ele se vira."

*(card 3)*

"Terceira: **'quando dá problema eu uso `any`.'** Gente... `any` é o TypeScript em modo avião. Tá instalado, tá bonito no package.json, mas não faz absolutamente nada."

*(pausa pro riso)*

"Cada `any` é uma promessa: 'confia, eu sei o que tô fazendo'. O problema é que daqui a seis meses quem lê essa promessa é você. E você não vai lembrar de nada."

**→ Avança** dizendo: "Mas tem um benefício que ninguém fala, e é o que separa júnior de sênior."

---

## Slide 6 — Documentação que não mente *(~45s)*

> **[Tom: sério de novo. Esse é o insight de autoridade — fala pausado.]**

"Tipo é **documentação que não mente**."

*(aponta a lista, item por item)*

"Comentário desatualiza em silêncio. README desatualiza em silêncio. JSDoc desatualiza em silêncio."

*(aponta o código)*

"Esse comentário aqui em cima? Pode estar mentindo **agora mesmo**, e ninguém fica sabendo. Essa assinatura aqui embaixo é diferente: é um contrato. Se ela mentir, **não compila**. É a única documentação do projeto com garantia de estar em dia."

**→ Avança** dizendo: "E pra quem gosta de número, eu trouxe um."

---

## Slide 7 — O número *(~40s)*

> **[Tom: deixa o contador subir na tela antes de falar. O número é o slide.]**

"Um estudo da Microsoft com a University College London — 'To Type or Not to Type' — analisou milhares de bugs reais, de projetos JavaScript públicos no GitHub. A conclusão: cerca de **quinze por cento** deles teriam sido detectados por um verificador de tipos."

*(pausa)*

"Um em cada sete bugs. De graça. Antes do commit."

**→ Avança** em silêncio — o fechamento entra escuro, muda o clima sozinho.

---

## Slide 8 — Fechamento *(~30s)*

> **[Tom: baixa o ritmo. Frases curtas, pausas longas.]**

"TypeScript não é sobre confiar **menos** em você."

*(pausa)*

"É sobre não precisar confiar na sua memória... às seis da tarde de uma sexta-feira."

*(pausa final — deixa o 'obrigado' piscando na tela)*

"Obrigado."

---

## Notas de apresentação

- **Tempo total:** ~6min30 em ritmo natural. Se estourar, corte o **card 2 do slide 5** ("verboso") — é o mais sacrificável; pule direto do card 1 pro `any`.
- **Navegação:** seta → avança, seta ← volta. A transição do scroll horizontal é a própria animação do slide — não precisa pressa: aperta a seta e **espera a transição terminar** antes de voltar a falar.
- **Slide 2:** as barras de custo animam quando o slide entra. Sincroniza: fala cada degrau conforme aponta a barra.
- **Slide 7:** o contador anima de 0 a 15 quando o slide entra. Segura 1 segundo antes de começar a falar — deixa o número chegar.
- **Idioma:** o switch PT/EN fica na nav. Pra plateia internacional, troca antes de começar — o código já é o mesmo nos dois.
- **Divisão com o outro dev:** este roteiro cobre o "porquê". Combina se a outra pessoa cobrir o "como" (setup, migração gradual, `strict mode`, generics). Vocês não se sobrepõem.
- **Pergunta provável da plateia:** "e o custo de migrar um projeto grande?" — resposta pronta: migração é incremental, `allowJs: true` deixa JS e TS convivendo, e dá pra tipar arquivo por arquivo. Ninguém precisa parar o mundo.
