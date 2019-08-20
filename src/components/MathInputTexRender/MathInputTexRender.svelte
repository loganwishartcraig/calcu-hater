<script>

	import { mathExpressionStore } from '../../stores';
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte';

    export let className = '';

    // const {error,}

</script>

{#if $mathExpressionStore.tex && $mathExpressionStore.tex !== 'undefined'}
    <MathTexRenderer tex={$mathExpressionStore.tex} className={className} />
{:else}
    <slot error={$mathExpressionStore.error }></slot>
    <!-- <span>Waiting...</span> -->
{/if}
