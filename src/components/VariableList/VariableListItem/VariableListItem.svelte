<script>

    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';

    export let name
    export let value

    $: parsed = `${name} := `;

</script>


<li>
    <label>
        <MathTexRenderer {parsed} />
        <input type="text" bind:value />
    </label>
</li>