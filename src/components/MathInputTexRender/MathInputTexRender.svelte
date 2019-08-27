<script>

	import { mathExpressionStore } from '../../stores';
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte';

    export let className = '';


</script>

<!-- {#if !$mathExpressionStore.error} -->

    {#if $mathExpressionStore.tex &&  $mathExpressionStore.tex !== 'undefined'}
        <MathTexRenderer tex={$mathExpressionStore.tex} className={className} />
    {:else}
        <slot name="waiting"></slot>
    {/if}

<!-- {:else} -->
{#if $mathExpressionStore.error}
    <slot name="error" error={$mathExpressionStore.error }></slot>
{/if}

