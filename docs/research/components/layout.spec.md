# Layout Specification

## Overview
- Target files: `index.html`, `styles.css`, `script.js`
- Screenshot: `docs/design-references/brittany-viewport-top.png`
- Interaction model: scroll-driven and pointer-driven

## Computed Styles
- Background: `rgb(15, 23, 42)`
- Body text: Inter/system sans, `16px`, `26px`, `rgb(148, 163, 184)`
- Primary text: `rgb(226, 232, 240)`
- Accent: `rgb(94, 234, 212)`
- Muted labels: `rgb(100, 116, 139)`, uppercase, `12px`, semibold
- Cards: transparent by default, hover background close to `rgba(15, 23, 42, 0.75)` with subtle border highlight

## DOM Structure
- `.shell`
- `.intro` sticky desktop header
- `main#content`
- `section#about`
- `section#experience`
- `section#projects`
- `section#writing`
- `footer`

## Responsive Behavior
- Desktop: two columns, sticky intro, nav visible.
- Tablet: one column, intro in normal flow, nav hidden.
- Mobile: stacked cards, sticky section headings, tighter page padding.
