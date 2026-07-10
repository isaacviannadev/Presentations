# O bug que o TypeScript pegaria às 3h da manhã
### Roteiro — 5 a 7 minutos

---

## 1. Abertura (≈1 min)

> **[Tom: descontraído, olhando pra plateia]**

"Levanta a mão quem já fez deploy na sexta-feira."

*(pausa)*

"Agora deixa a mão levantada quem descobriu no sábado que `user.name` era `undefined`."

*(pausa pro riso)*

"Esse erro tem nome, sobrenome e endereço:"

```
TypeError: Cannot read properties of undefined (reading 'name')
```

"Esse é provavelmente o erro mais caro da história do JavaScript. E o que eu quero mostrar hoje é que ele — e uma família inteira de primos dele — é **evitável antes do código rodar**. Não com mais testes, não com mais code review. Com o compilador trabalhando de graça pra você."

---

## 2. O argumento real (≈2 min)

> **[Tom: aqui muda pra sério. Essa é a tese.]**

"TypeScript não é sobre escrever tipos. É sobre **mover o erro de lugar**."

"Todo bug tem um custo, e o custo depende de *onde* ele é descoberto:"

- No **editor**, agora → custa 10 segundos
- No **code review** → custa 20 minutos e um comentário passivo-agressivo
- Em **produção** → custa Sentry lotado, hotfix, e o seu sábado

"TypeScript desloca o erro pro lugar mais barato possível: o sublinhado vermelho, antes de você dar commit."

### Exemplo ao vivo — JavaScript aceita tudo:

```javascript
function calcularDesconto(pedido) {
  return pedido.total * pedido.desconto;
}

// Três meses depois, outro dev chama:
calcularDesconto({ total: 100, descontoPercentual: 0.1 });
// Resultado: NaN. Sem erro. Sem aviso. Só NaN no carrinho do cliente.
```

"Reparem: o JavaScript não reclamou. Ele **cooperou com o bug**. `100 * undefined` é `NaN`, e `NaN` viaja feliz pelo sistema até aparecer num boleto."

### O mesmo código em TypeScript:

```typescript
interface Pedido {
  total: number;
  desconto: number;
}

function calcularDesconto(pedido: Pedido) {
  return pedido.total * pedido.desconto;
}

calcularDesconto({ total: 100, descontoPercentual: 0.1 });
// ❌ Erro AGORA: 'descontoPercentual' does not exist in type 'Pedido'.
//    Did you mean 'desconto'?
```

> **[Frase de efeito — falar devagar]**

"O vermelho no editor é irritante. O vermelho no Sentry é caro."

---

## 3. Desmontando as objeções (≈2 min)

> **[Tom: volta o humor. Você sabe o que a plateia está pensando.]**

### "TS me deixa mais lento"

"Verdade. Você perde uns 10 segundos escrevendo o tipo. Em troca, deixa de perder 2 horas debugando por que `NaN` apareceu num boleto. É o pior trade da história... pra quem gosta de debugar."

### "TS é verboso"

"Isso era verdade em 2016. TypeScript moderno **infere** quase tudo:"

```typescript
const usuarios = ["Ana", "Bruno"]; // TS já sabe: string[]
const total = usuarios.length * 2; // TS já sabe: number

usuarios.map(u => u.toUpperCase()); // autocomplete completo, zero anotação
```

"Nesse código não tem UMA anotação de tipo. E ele é 100% tipado. Você só escreve tipo na fronteira — função pública, API, contrato. No meio, o compilador se vira."

### "Quando dá problema eu uso `any`"

"`any` é o TypeScript em modo avião. Tá instalado, tá bonito no package.json, mas não faz absolutamente nada."

*(pausa pro riso)*

"Cada `any` é uma promessa: 'confia, eu sei o que tô fazendo'. O problema é que daqui a 6 meses quem lê essa promessa é você mesmo — e você não vai lembrar de nada."

---

## 4. O ponto que separa júnior de sênior (≈1 min)

> **[Tom: sério de novo. Esse é o insight de autoridade.]**

"Tem um benefício que ninguém fala: **tipo é documentação que não mente.**"

"Comentário desatualiza em silêncio. README desatualiza em silêncio. JSDoc desatualiza em silêncio. Tipo errado **quebra o build**. É a única documentação do projeto com garantia de estar em dia."

```typescript
// Isso aqui é um comentário. Pode estar mentindo agora mesmo.
// @param desconto - valor entre 0 e 1

// Isso aqui é um contrato. Se mentir, não compila.
function aplicar(desconto: number): Preco { ... }
```

---

## 5. Fechamento (≈1 min)

"Pra quem gosta de número: um estudo da Microsoft com a University College London ('To Type or Not to Type') analisou milhares de bugs reais em projetos JavaScript públicos no GitHub e estimou que cerca de **15% deles teriam sido detectados por um verificador de tipos**. Um em cada sete bugs. De graça. Antes do commit."

*(pausa)*

"TypeScript não é sobre confiar menos em você."

"É sobre não precisar confiar na sua memória às 18h de uma sexta-feira."

*(pausa final)*

"Obrigado."

---

## Notas de apresentação

- **Tempo total estimado:** 6 min falando em ritmo natural. Se estourar, corte a objeção "verboso" (seção 3.2) — é a mais sacrificável.
- **Se der pra usar editor ao vivo:** digite o erro do `descontoPercentual` na hora. Ver o sublinhado vermelho aparecer em tempo real vale mais que qualquer slide.
- **Se for slide:** um exemplo de código por slide, fonte grande, no máximo 8 linhas visíveis.
- **Divisão com o outro dev:** este roteiro cobre o "porquê". Combina bem se a outra pessoa cobrir o "como" (setup, migração gradual, `strict mode`, generics). Vocês não se sobrepõem.
- **Pergunta provável da plateia:** "e o custo de migrar um projeto grande?" — resposta pronta: migração é incremental, `allowJs: true` deixa JS e TS convivendo, e dá pra tipar arquivo por arquivo. Ninguém precisa parar o mundo.
