<script>

	import { createEventDispatcher } from 'svelte';
    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';

    export let name
    export let value = ''

    const dispatch = createEventDispatcher();

    function handleChange(evt) {
        dispatch('change', { name, value });
    }

    $: tex = `${name} := `;

    const dispatch = createEventDispatcher();

    function handleChange(evt) {
        dispatch('change', { index, value });
    }

</script>


<li>
    <label>
        <MathTexRenderer {tex} />
        <input type="text" bind:value on:change={handleChange} />
    </label>
</li>