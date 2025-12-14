You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

# PokeMath Battle App - Project Context

## What We've Built

A complete Pokemon math battle web app for a 6-year-old using Svelte 5 with runes. The app is **fully functional** and uses generic CSS (no Tailwind).

## Project Structure

```
src/
├── lib/
│   ├── data/
│   │   └── pokemon.ts          # Pokemon data with all 33 cards + helper functions
│   └── components/
│       ├── Dice.svelte          # Dice component (shows damage counters)
│       ├── PokemonCard.svelte   # Card display with HP and damage
│       └── Battle.svelte        # Main battle component with answer logic
└── routes/
    └── +page.svelte             # Main page that orchestrates battles

static/
└── cards/                       # 33 Pokemon card images (me1_en_*, me2_en_*)
```

## How It Works

1. **Random Battles**: Each battle shows two random Pokemon (attacker vs defender)
2. **Previous Damage**: Defender has random previous damage shown with dice (10 damage = 1 die)
3. **Attack Damage**: A new attack is incoming with a specific damage amount
4. **The Question**: "Is it a Knockout?" - child decides if attack damage ≥ remaining HP
5. **Feedback**: Immediate correct/incorrect feedback with explanation
6. **Score Tracking**: Tracks correct answers and shows percentage
7. **Auto-progression**: New battle loads automatically after answering

## Current Status

✅ All components built and working
✅ TypeScript checks passing (0 errors)
✅ Dev server tested successfully
✅ Using generic CSS (no Tailwind as requested)
✅ Componentized architecture
✅ Svelte 5 runes ($state, $derived, $props, $effect)

## Design Reference

**Figma Mockup**: https://www.figma.com/design/dw16JnxVqrpp2OSGgnF9jY/Pokemath?node-id=1-135&m=dev

The Figma MCP server is configured in `.mcp.json` at `http://127.0.0.1:3845/mcp`

## Next Steps

1. Review Figma mockup and adjust styling/layout to match design
2. May need to tweak:
   - Battle layout and card positioning
   - Dice display style
   - Button styles and colors
   - Overall visual design to match mockup

## Useful Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run check    # TypeScript check
npm run build    # Production build
```

## Technical Notes

- Using Svelte 5 with runes (not legacy $: syntax)
- All Pokemon data is in `src/lib/data/pokemon.ts`
- Easy to add more Pokemon - just add to the `pokemonList` array with image path
- Dice show up to 6 dots per die, multiple dice for damage > 10
