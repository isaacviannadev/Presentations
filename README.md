# O bug que o TypeScript pegaria às 3h da manhã

Landing page da apresentação do workshop de TypeScript — tema vermelho e branco, com scroll horizontal e animações sincronizadas ao scroll (GSAP + ScrollTrigger).

## Como rodar

É um site 100% estático e **funciona offline** (GSAP e fontes estão vendorizados em `vendor/`). Basta servir a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

E abrir `http://localhost:8000`.

## Estrutura

| Arquivo | O quê |
|---|---|
| `index.html` | Conteúdo — hero, 7 painéis horizontais (um por seção do roteiro) e fechamento |
| `styles.css` | Tema vermelho/branco, cards de código com syntax highlight manual |
| `main.js` | Animações: pin + scroll horizontal, reveals por painel, parallax, contador do 15% |
| `roteiro.md` | Roteiro original da fala (5–7 min) |
| `vendor/` | GSAP 3.12 e fontes (Space Grotesk, Inter, JetBrains Mono) |

## Notas

- **Desktop (>900px):** a seção central vira um scroll horizontal pinado; cada painel anima ao entrar em cena.
- **Mobile (≤900px):** os painéis empilham em scroll vertical normal.
- **`prefers-reduced-motion`:** todas as animações são desativadas e o conteúdo fica visível.
- Os painéis seguem a ordem do roteiro: abertura → tese (custo do erro) → JS aceita tudo → o mesmo código em TS → objeções → documentação que não mente → o número (15%) → fechamento.
