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
| `i18n.js` | Switch de idioma PT ⇄ EN (botão na nav; escolha persiste em `localStorage`) |
| `roteiro.md` | Roteiro original da fala (5–7 min) |
| `vendor/` | GSAP 3.12 e fontes (Space Grotesk, Inter, JetBrains Mono) |

## Notas

- **Desktop (>900px):** a seção central vira um scroll horizontal pinado; cada painel anima ao entrar em cena.
- **Navegação em slides (desktop):** a roda do mouse e o teclado (←/→/↑/↓, PageUp/PageDown, espaço, Home/End) avançam/voltam exatamente uma seção com transição suave — hero, cada um dos 7 painéis e o fechamento são os "slides".
- **Mobile (≤900px):** os painéis empilham em scroll vertical normal.
- **`prefers-reduced-motion`:** todas as animações são desativadas e o conteúdo fica visível.
- **Idioma:** o PT vive no HTML (fonte da verdade) e o EN no dicionário de `i18n.js`; a troca reescreve os elementos `[data-i18n]` e recalcula o ScrollTrigger.
- Os painéis seguem a ordem do roteiro: abertura → tese (custo do erro) → JS aceita tudo → o mesmo código em TS → objeções → documentação que não mente → o número (15%) → fechamento.
