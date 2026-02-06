# Design System

## Colors

### Backgrounds
- primary: #1a1a1a
- secondary: #242424
- tertiary: #2a2a2a

### Text
- primary: #f5f5f5
- secondary: #b0b0b0
- subtle: #808080

### Accents
- warm: #ff8c42 (CTAs, primary actions)
- cold: #4a9eff (data, metrics)
- success: #52b5a8 (positive metrics)
- warning: #d4a574
- danger: #b85c5c

### Borders
- subtle: #333333
- visible: #4a4a4a

## Typography

### Fonts
- Headings: Space Grotesk 600
- Body: Inter 400, 600
- Data: JetBrains Mono 400

### Sizes (Mobile / Desktop)
- h1: 2rem / 3.5rem
- h2: 1.5rem / 2.25rem
- h3: 1.25rem / 1.5rem
- body: 1rem / 1.125rem

### Line Heights
- h1: 1.1
- h2: 1.2
- h3: 1.3
- body: 1.6

## Spacing

### Sections
- Desktop: py-32 (128px)
- Mobile: py-16 (64px)

### Container
- Desktop: px-20 (80px)
- Mobile: px-5 (20px)
- Max width: max-w-7xl (1280px)

### Gaps
- Large: gap-10 (40px)
- Medium: gap-6 (24px)
- Small: gap-4 (16px)

## Components

### Buttons

Primary:
bg-accent-warm text-bg-primary px-8 py-4 rounded-lg
hover:scale-105 transition-transform

Secondary:
border-2 border-accent-cold text-accent-cold bg-transparent px-8 py-4 rounded-lg
hover:bg-accent-cold/10 transition-colors

### Cards
border border-border-subtle rounded-xl p-8
hover:scale-105 hover:border-border-visible transition-all

### Links
text-accent-cold hover:text-accent-cold-dim underline

## Responsive Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
