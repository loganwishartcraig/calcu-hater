<script>

	import { createEventDispatcher } from 'svelte';
    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';

    export let index;
    export let name
    export let value

    const dispatch = createEventDispatcher();

    function handleChange(evt) {
        dispatch('change', { index, value });
    }

    $: parsed = `${name} := `;

</script>


<li>
    <label>
        <MathTexRenderer {parsed} />
        <input type="text" bind:value on:change={handleChange} />
    </label>
</li>