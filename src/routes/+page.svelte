<script lang="ts">
	import Battle from '$lib/components/Battle.svelte';
	import { getRandomPokemon, getRandomDamage, getRandomAttack } from '$lib/data/pokemon';
	import type { Pokemon, Attack } from '$lib/data/pokemon';
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';

	let attacker = $state<Pokemon>(getRandomPokemon());
	let defender = $state<Pokemon>(getRandomPokemon());
	let selectedAttack = $derived<Attack>(getRandomAttack(attacker));
	let previousDamage = $state(0);
	let score = $state(0);
	let totalBattles = $state(0);

	// Initialize first battle
	function newBattle() {
		// Get two different Pokemon
		attacker = getRandomPokemon();
		defender = getRandomPokemon();

		// Make sure they're different
		while (defender.id === attacker.id) {
			defender = getRandomPokemon();
		}

		// Get a random attack from the attacker's card
		selectedAttack = getRandomAttack(attacker);

		// Set random previous damage on defender
		previousDamage = getRandomDamage(defender.hp);
	}

	function handleAnswer(isCorrect: boolean) {
		totalBattles++;
		if (isCorrect) {
			score++;
		}

		// Start new battle after a short delay
		setTimeout(() => {
			newBattle();
		}, 500);
	}

	// Initialize on mount
	onMount(() => {
		newBattle();
	});
</script>

<svelte:head>
	<title>PokeMath - Battle Edition</title>
</svelte:head>

<main>
	<header>
		<Background />
		<div class="score-board">
			<div class="score">
				<span class="value">{score} / {totalBattles}</span>
			</div>
			{#if totalBattles > 0}
				<div class="percentage">
					{Math.round((score / totalBattles) * 100)}%
				</div>
			{/if}
		</div>
	</header>

	{#if attacker && defender}
		{#key `${attacker.id}-${defender.id}-${previousDamage}-${selectedAttack.name}`}
			<Battle
				{attacker}
				{defender}
				attackName={selectedAttack.name}
				attackDamage={selectedAttack.damage}
				{previousDamage}
				onAnswer={handleAnswer}
			/>
		{/key}
	{/if}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: linear-gradient(180deg, #00779e 0%, #01405d 100%);
		min-height: 100vh;
		overflow: hidden;
		position: relative;
	}

	:global(body::after) {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(127.743deg, rgba(0, 0, 0, 0.4) 38.323%, rgba(0, 0, 0, 0) 103.36%);
		z-index: -1;
	}

	main {
		padding: 0;
		min-height: 100vh;
	}

	header {
		text-align: center;
		padding: 20px;
		color: white;
	}

	.score-board {
		display: flex;
		align-items: center;
		gap: 20px;
		background: rgba(255, 255, 255, 0.9);
		padding: 16px 32px;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 16px;
		right: 16px;
		z-index: 100;
	}

	.score {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.score .value {
		font-family: 'kit-sans', sans-serif;
		font-variant-numeric: lining-nums;
		font-size: 28px;
		font-weight: bold;
		color: #2c3e50;
	}

	.percentage {
		font-family: 'kit-sans', sans-serif;
		font-variant-numeric: lining-nums;
		font-size: 24px;
		font-weight: bold;
		color: #27ae60;
		padding: 4px 12px;
		background: #d5f4e6;
		border-radius: 6px;
	}
</style>
