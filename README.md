# Presentations

Site de apresentações em formato de slides interativos — tema vermelho e branco, scroll horizontal pinado e animações GSAP. Publicado em **https://isaacviannadev.github.io/Presentations/**.

A raiz é um **seletor de apresentações**; cada talk vive em sua própria pasta e reusa o motor compartilhado.

## Apresentações

| Rota | Talk | Formato |
|---|---|---|
| `/typescript/` | O bug que o TypeScript pegaria às 3h da manhã | workshop · 5–7 min · PT/EN |
| `/tailwind/` | Tailwind CSS no lugar de Styled Components | arquitetura frontend · jul/2026 · PT/EN |

## Como rodar

Site 100% estático e **offline-ready** (GSAP e fontes vendorizados em `vendor/`). Basta servir a raiz:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Estrutura

| Arquivo | O quê |
|---|---|
| `index.html` + `hub.css` | Seletor de apresentações (hub), com switch de idioma global |
| `styles.css` | Tema compartilhado: hero, painéis, code cards, marquee, stat, outro |
| `main.js` | Motor compartilhado: pin + scroll horizontal, navegação em slides (wheel/teclado), reveals, parallax, contador |
| `i18n.js` | Lógica de idioma compartilhada — a escolha (chave `lp-lang`) vale para o hub e todos os decks |
| `typescript/` | LP do workshop TS (`index.html`, `lang.js` com dicionário EN, `roteiro.md` slide a slide) |
| `tailwind/` | Deck Tailwind vs styled-components (`index.html`, `lang.js`, `page.css` com timeline, versus, pontos) |
| `vendor/` | GSAP 3.12 + fontes (Space Grotesk, Inter, JetBrains Mono) |
| `.github/workflows/deploy-pages.yml` | Deploy automático no GitHub Pages a cada push |

## Comportamento

- **Desktop (>900px):** navegação em slides — roda do mouse e teclado (←/→/↑/↓, PageUp/PageDown, espaço, Home/End) avançam exatamente uma seção com transição suave.
- **Mobile (≤900px):** painéis empilham em scroll vertical normal.
- **`prefers-reduced-motion`:** animações desativadas, conteúdo visível.
- **Logo na nav** de cada apresentação volta ao seletor.
