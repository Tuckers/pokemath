<script lang="ts">
	import type { Pokemon } from '$lib/data/pokemon';
	import PokemonCard from './PokemonCard.svelte';
	import Dice from './Dice.svelte';
	import Arrow from './Arrow.svelte';
	import Toast from './Toast.svelte';

	let {
		attacker,
		defender,
		attackName,
		attackDamage,
		previousDamage,
		onAnswer
	}: {
		attacker: Pokemon;
		defender: Pokemon;
		attackName: string;
		attackDamage: number;
		previousDamage: number;
		onAnswer: (isCorrect: boolean) => void;
	} = $props();

	let answered = $state(false);
	let userAnswer = $state<boolean | null>(null);
	let showToast = $state(false);

	// Calculate if it's a knockout
	const remainingHp = $derived(defender.hp - previousDamage);
	const isKnockout = $derived(attackDamage >= remainingHp);

	function handleAnswer(answer: boolean) {
		console.log('Handling answer:', answer);
		if (answered) return;

		userAnswer = answer;
		answered = true;
		showToast = true;

		const isCorrect = answer === isKnockout;

		// Wait a moment to show feedback before calling onAnswer
		setTimeout(() => {
			showToast = false;
			onAnswer(isCorrect);
		}, 2000);
	}

	const feedbackMessage = $derived.by(() => {
		if (!answered) return '';

		const correct = userAnswer === isKnockout;
		if (correct) {
			return '✓ Correct! Great job!';
		} else {
			return `✗ Not quite. ${attackDamage} damage ${isKnockout ? 'is' : "isn't"} enough for a knockout!`;
		}
	});

	// Generate dice for attack damage (same logic as defender dice)
	const attackDice = $derived.by(() => {
		const tensOfDamage = attackDamage / 10; // Total "pips" needed
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

<div class="battle">
	<div class="content-wrapper">
		<div class="left-section">
			<h1 class="attack-message">
				{attacker.name} attacks for...
			</h1>
			<h1 class="attack-message highlight">{attackDamage} damage!</h1>

			<p class="problem-description">
				{defender.name} started with
				<strong class="highlight">{defender.hp}<sub>HP</sub></strong><br />
				and has <strong class="highlight">{previousDamage}</strong> damage<br />is it a knock out?
			</p>

			<div class="answer-buttons">
				<button
					class="answer-btn knockout"
					class:correct={answered && userAnswer === true && isKnockout}
					class:incorrect={answered && userAnswer === true && !isKnockout}
					onclick={() => handleAnswer(true)}
					disabled={answered}
				>
					KNOCK OUT!
				</button>

				<button
					class="answer-btn nope"
					class:correct={answered && userAnswer === false && !isKnockout}
					class:incorrect={answered && userAnswer === false && isKnockout}
					onclick={() => handleAnswer(false)}
					disabled={answered}
				>
					NOPE
				</button>
			</div>
		</div>

		<div class="cards-section">
			<div class="card-wrapper defender animate-slide-in-defender">
				<PokemonCard pokemon={defender} damage={previousDamage} role="defender" />
			</div>
			<div class="card-wrapper attacker animate-slide-in-attacker">
				<PokemonCard pokemon={attacker} role="attacker" />
			</div>

			<!-- Attack dice and arrow -->
			<div class="attack-damage-display">
				<div class="attack-arrow animate-slide-up">
					<Arrow />
				</div>
				<div class="attack-dice">
					{#each attackDice as die, i (die)}
						<div
							class="attack-die animate-dice-drop"
							style="
								transform: rotate({die.rotation}deg) translate({(i % 2) * 15 - 7.5}px, {Math.floor(i / 2) * 20}px);
								animation-delay: {0.6 + i * 0.1}s;
							"
						>
							<Dice value={die.value} rotation={0} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<Toast show={showToast} correct={userAnswer === isKnockout} message={feedbackMessage} />

<style>
	.battle {
		min-height: 100vh;
		padding: 0;
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.content-wrapper {
		display: flex;
		gap: 100px;
		max-width: 1200px;
		padding: 90px 120px;
		transform-origin: top center;
	}

	/* Scale down everything smoothly for viewports smaller than 1280px */
	@media (max-width: 1280px) {
		.content-wrapper {
			transform: scale(calc(100vw / 1280px));
			max-width: none;
			width: 1280px;
		}
	}

	.left-section {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
		gap: 40px;
		max-width: 500px;
	}

	.attack-message {
		font-family: 'kit-sans', sans-serif;
		font-weight: 800;
		font-style: normal;
		font-size: 52px;
		font-weight: 800;
		color: #fff;
		margin: 0;
		line-height: 1.15;
		letter-spacing: 2px;
	}

	.attack-message.highlight {
		color: #ffd400;
	}

	.problem-description {
		font-family: 'kit-rounded', sans-serif;
		font-weight: 500;
		font-style: normal;
		font-size: 24.891px;
		color: white;
		margin: 0;
		line-height: 1.57;
		letter-spacing: 0.2489px;
	}

	.problem-description .highlight {
		font-weight: 700;
		color: #ffd400;
	}

	.problem-description sub {
		font-size: 12.446px;
		letter-spacing: 0.1245px;
		vertical-align: baseline;
		font-weight: 700;
	}

	.answer-buttons {
		display: flex;
		flex-direction: column;
		gap: 22px;
		margin-top: 100px;
	}

	.answer-btn {
		font-family: 'degular', sans-serif;
		font-weight: 800;
		font-style: normal;
		height: 72px;
		width: 270px;
		font-size: 27px;
		border-radius: 16px;
		cursor: pointer;
		transition: all 0.15s;
		text-transform: uppercase;
		letter-spacing: 1.62px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(1);
	}

	.answer-btn:hover {
		transform: scale(1.05);
		box-shadow: 0px 0px 27.9px 0px rgba(255, 251, 0, 0.25);
	}

	.answer-btn:disabled {
		cursor: not-allowed;
		opacity: 0.9;
	}

	.answer-btn.knockout {
		position: relative;
		background: linear-gradient(45deg, #042b29, #064a47, #042b29);
		background-size: 200% 200%;
		color: #ffd400;
		border: 5.625px solid #ffd400;
		overflow: hidden;
		animation: knockoutGradient 2s ease-in-out infinite;
		box-shadow:
			0 0 20px rgba(255, 212, 0, 0.3),
			0 0 40px rgba(255, 212, 0, 0.1),
			inset 0 0 20px rgba(255, 212, 0, 0.05);
	}

	.answer-btn.knockout::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(45deg, transparent, rgba(255, 212, 0, 0.1), transparent);
		pointer-events: none;
	}

	.answer-btn.knockout:hover {
		transform: scale(1.05);
		box-shadow:
			0 0 30px rgba(255, 212, 0, 0.5),
			0 0 60px rgba(255, 212, 0, 0.2),
			0 0 90px rgba(255, 212, 0, 0.1),
			inset 0 0 30px rgba(255, 212, 0, 0.1);
		animation:
			knockoutGradient 1 2s ease-in-out infinite,
			knockoutPulse 2s ease-in-out infinite;
	}

	@keyframes knockoutGradient {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	@keyframes knockoutShine {
		0% {
			transform: rotate(0deg) translate(-50%, -50%);
		}
		100% {
			transform: rotate(360deg) translate(-50%, -50%);
		}
	}

	@keyframes knockoutPulse {
		0%,
		100% {
			box-shadow:
				0 0 30px rgba(255, 212, 0, 0.5),
				0 0 60px rgba(255, 212, 0, 0.2),
				0 0 90px rgba(255, 212, 0, 0.1),
				inset 0 0 30px rgba(255, 212, 0, 0.1);
		}
		50% {
			box-shadow:
				0 0 40px rgba(255, 212, 0, 0.7),
				0 0 80px rgba(255, 212, 0, 0.3),
				0 0 120px rgba(255, 212, 0, 0.15),
				inset 0 0 40px rgba(255, 212, 0, 0.15);
		}
	}

	.answer-btn.nope {
		background: #f7e89f;
		color: #042b29;
		border: none;
	}

	.answer-btn.correct {
		background: #28a745;
		color: white;
		border-color: #28a745;
	}

	.answer-btn.incorrect {
		background: #dc3545;
		color: white;
		border-color: #dc3545;
	}

	.cards-section {
		flex: 1;
		display: flex;
		position: relative;
		min-height: 600px;
		min-width: 800px;
	}

	.card-wrapper {
		position: absolute;
	}

	.card-wrapper.defender {
		transform: rotate(210.769deg);
		left: 220px;
		top: -64px;
	}

	.card-wrapper.attacker {
		transform: rotate(30.769deg);
		left: 0;
		top: 305px;
	}

	.attack-damage-display {
		position: absolute;
		left: 384px;
		top: 367px;
		transform: rotate(30.769deg);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		max-width: 300px;
	}

	.attack-arrow {
		opacity: 0.9;
	}

	.attack-dice {
		display: flex;
		flex-wrap: wrap;
		gap: 36px;
		position: relative;
	}

	.attack-die {
		transition: all 0.3s ease;
	}

	/* Entry Animations */
	.animate-slide-in-defender {
		animation: slideInDefender 0.6s cubic-bezier(0, 0.52, 0.53, 1);
	}

	.animate-slide-in-attacker {
		animation: slideInAttacker 0.6s cubic-bezier(0, 0.52, 0.53, 1);
	}

	.animate-slide-up {
		animation: slideUp 0.5s cubic-bezier(0, 0.52, 0.53, 1) 0.8s both;
	}

	.animate-dice-drop {
		animation: diceDrop 0.4s cubic-bezier(0, 0.52, 0.53, 1) both;
	}

	@keyframes slideInDefender {
		from {
			opacity: 0;
			transform: rotate(210.769deg) translate(0, 300px);
		}
		to {
			opacity: 1;
			transform: rotate(210.769deg) translate(0, 0);
		}
	}

	@keyframes slideInAttacker {
		from {
			opacity: 0;
			transform: rotate(30.769deg) translate(0, 300px);
		}
		to {
			opacity: 1;
			transform: rotate(30.769deg) translate(0, 0);
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(60px);
		}
		to {
			opacity: 0.9;
			transform: translateY(0);
		}
	}

	@keyframes diceDrop {
		from {
			opacity: 0;
			transform: translateY(-40px) scale(0.5);
		}
		60% {
			transform: translateY(5px) scale(1.1);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
