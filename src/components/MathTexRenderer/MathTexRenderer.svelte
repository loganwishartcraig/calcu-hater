<script>

    import katex from 'katex';

    export let tex;

    $: rendered = katex.renderToString(tex);

</script>

{#if rendered && tex !== 'undefined'}
    <span>{@html rendered}</span>
{:else}
    <span>Waiting...</span>
{/if}