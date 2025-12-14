<script lang="ts">
	let {
		show = $bindable(false),
		correct = false,
		message = ''
	}: {
		show?: boolean;
		correct?: boolean;
		message?: string;
	} = $props();
</script>

{#if show}
	<div class="toast" class:correct class:incorrect={!correct}>
		{message}
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		top: 40px;
		left: 50%;
		transform: translateX(-50%);
		padding: 24px 48px;
		border-radius: 16px;
		font-family: 'degular', sans-serif;
		font-weight: 700;
		font-size: 28px;
		color: white;
		z-index: 1000;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		animation: slideDown 0.4s ease-out;
		max-width: 90vw;
		text-align: center;
	}

	.toast.correct {
		background: #28a745;
		border: 3px solid #1e7e34;
	}

	.toast.incorrect {
		background: #dc3545;
		border: 3px solid #b02a37;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(-100px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}
</style>
