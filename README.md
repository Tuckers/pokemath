# PokeMath Battle

A fun, interactive math learning game for kids built with Svelte 5! Battle Pokemon cards while practicing mental math with addition and subtraction.

## About

PokeMath helps young learners (ages 6+) practice mental arithmetic through Pokemon-themed battles. Each round presents a Pokemon defender with some existing damage, then shows an incoming attack. Players must quickly calculate if the attack will knock out the Pokemon!

**Game Mechanics:**
- Defender starts with HP and has previous damage (shown with dice)
- Attacker launches a new attack with specific damage
- Player decides: Will this knock out the defender?
- Instant feedback with explanations
- Score tracking to monitor progress

## Tech Stack

- **Svelte 5** with runes ($state, $derived, $props)
- **SvelteKit** for the framework
- **TypeScript** for type safety
- Pure CSS (no Tailwind)
- 33 Pokemon cards from the original trading card game

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run check

# Build for production
npm run build
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Battle.svelte      # Main battle component
│   │   ├── PokemonCard.svelte # Card display
│   │   ├── Dice.svelte        # Damage counter dice
│   │   ├── Arrow.svelte       # Attack indicator
│   │   └── Toast.svelte       # Feedback notifications
│   └── data/
│       └── pokemon.ts         # Pokemon data & logic
└── routes/
    └── +page.svelte           # Main page

static/
└── cards/                     # Pokemon card images
```

## Features

- Smooth animations when battles load
- Toast notifications for instant feedback
- Score tracking and percentage display
- Automatic progression to next battle
- Kid-friendly visual design

## Adding More Pokemon

Add new Pokemon to `src/lib/data/pokemon.ts`:

```typescript
{
  id: 34,
  name: "Mewtwo",
  hp: 60,
  imagePath: "/cards/mewtwo.png"
}
```

Place the card image in `static/cards/` and you're done!

---

Built with ❤️ for young Pokemon trainers learning math
