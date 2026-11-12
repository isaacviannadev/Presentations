# Presentations

Site de apresentações em formato de slides interativos — tema vermelho e branco, scroll horizontal pinado e animações GSAP. Publicado em **https://isaacviannadev.github.io/Presentations/**.

A raiz é um **seletor de apresentações**; cada talk vive em sua própria pasta e reusa o motor compartilhado.

## Apresentações

| Rota | Talk | Formato |
|---|---|---|
| `/typescript/` | O bug que o TypeScript pegaria às 3h da manhã | workshop · 5–7 min · PT/EN |
| `/tailwind/` | Tailwind CSS no lugar de Styled Components | arquitetura frontend · jul/2026 · PT/EN |
| `/scheduling/` | TARS · Suite Scheduling | design de produto · 42 seções · 35 telas · PT/EN |

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
| `scheduling/` | Deck TARS com 35 capturas ampliáveis do Figma, índice por seção, fluxos de criação/edição e cobertura das 43 decisões de funcionalidade em `coverage.html` |
| `vendor/` | GSAP 3.12 + fontes (Space Grotesk, Inter, JetBrains Mono) |
| `.github/workflows/deploy-pages.yml` | Deploy automático no GitHub Pages a cada push |

## Comportamento

- **Desktop (>900px):** navegação em slides — roda do mouse e teclado (←/→/↑/↓, PageUp/PageDown, espaço, Home/End) avançam exatamente uma seção com transição suave.
- **Mobile (≤900px):** painéis empilham em scroll vertical normal.
- **`prefers-reduced-motion`:** animações desativadas, conteúdo visível.
- **Logo na nav** de cada apresentação volta ao seletor.

## TARS · Suite Scheduling

A nova apresentação conserva o tema, as fontes locais, o motor GSAP e a escolha PT/EN compartilhada. As 42 seções incluem dois fluxos completos, 35 telas/estados e quatro seções de decisões, componentes, estados e contratos em aberto.

- O índice permite ir diretamente a qualquer seção. As etapas dos fluxos também são atalhos.
- Cada captura abre uma visualização ampliada e mantém um link para a tela editável no Figma.
- Links com fragmento, como `/scheduling/#HF-12`, abrem diretamente a seção.
- `coverage.html` documenta as 43 decisões do artefato para o produto, em PT/EN, com referências às telas.
- O conteúdo descreve uma proposta de design com dados ilustrativos; não afirma que os contratos do scheduler estão implementados.

As capturas mantêm a interface do produto em inglês. Títulos, explicações, índice e cobertura funcional alternam entre português e inglês. As ligações externas são referências opcionais; as capturas e os recursos da apresentação são locais.
