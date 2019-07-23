<script>

    import katex from 'katex';

    export let parsed;

    $: rendered = katex.renderToString(parsed);

</script>

{#if rendered && parsed !== 'undefined'}
    <span>{@html rendered}</span>
{:else}
    <span>Waiting...</span>
{/if}