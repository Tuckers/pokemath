<script lang="ts">
	import type { Pokemon } from '$lib/data/pokemon';
	import Dice from './Dice.svelte';

	let {
		pokemon,
		damage = 0,
		role = 'attacker'
	}: {
		pokemon: Pokemon;
		damage?: number;
		role?: 'attacker' | 'defender';
	} = $props();

	const remainingHp = $derived(pokemon.hp - damage);

	// Convert damage to dice (each die pip = 10 damage)
	// E.g., 100 damage could be shown as two dice: 6 pips + 4 pips = 100
	const diceValues = $derived.by(() => {
		const tensOfDamage = damage / 10; // Total "pips" needed
		const dice: { value: number; rotation: number }[] = [];

		let remaining = tensOfDamage;
		while (remaining > 0) {
			const dieValue = Math.min(6, remaining);
			const rotation = Math.random() * 360; // Random rotation for each die
			dice.push({ value: dieValue, rotation });
			remaining -= dieValue;
		}

		return dice;
	});
</script>

<div class="card {role}">
	<div class="card-image">
		<img src={pokemon.image} alt={pokemon.name} />
	</div>

	{#if damage > 0}
		<div class="damage-section">
			<div class="dice-container">
				{#each diceValues as die (die)}
					<Dice value={die.value} rotation={die.rotation} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.card {
		width: 281px;
		height: 392px;
		position: relative;
		border-radius: 12px;
		overflow: hidden;
	}

	.card.attacker {
		border: none;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.card.defender {
		border: none;
		box-shadow: -4px -4px 10px 0px rgba(0, 0, 0, 0.25);
	}

	.card-image {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}

	.damage-section {
		position: absolute;
		top: 15px;
		right: 15px;
		z-index: 10;
	}

	.dice-container {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		padding: 36px;
	}
</style>
