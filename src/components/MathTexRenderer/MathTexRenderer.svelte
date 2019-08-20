<script>

    import katex from 'katex';

    export let tex;
    export let className = '';

    $: rendered = katex.renderToString(tex);

</script>

{#if rendered && tex !== 'undefined'}
    <span class={className}>{@html rendered}</span>
{/if}
