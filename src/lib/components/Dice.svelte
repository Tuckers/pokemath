<script lang="ts">
	let { value = 0, rotation = 0 }: { value?: number; rotation?: number } = $props();

	const clampedValue = $derived(Math.min(Math.max(0, Math.round(value)), 6));
</script>

{#if clampedValue > 0}
	<div class="dice-wrapper" style="transform: rotate({rotation}deg);">
		<img src="/dice-{clampedValue}.png" alt="Dice showing {clampedValue}" class="dice" />
	</div>
{/if}

<style>
	.dice-wrapper {
		display: inline-block;
		width: 64px;
		height: 64px;
	}

	.dice {
		width: 100%;
		height: 100%;
		display: block;
		filter: drop-shadow(0px 13px 6.3px rgba(0, 0, 0, 0.25));
	}
</style>
