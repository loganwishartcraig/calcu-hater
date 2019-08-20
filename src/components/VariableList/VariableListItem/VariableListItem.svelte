<script>

    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';
    import { mathVariableStore } from '../../../stores'

    export let name
    export let value = ''

    function handleChange(evt) {

        const parsed = parseFloat(value);

        if (!isNaN(parsed)) {
            mathVariableStore.set(name, parsed);
        }

    }

    function handleClearClick(evt) {
        mathVariableStore.remove(name);
    }

    $: tex = `${name} := `;

</script>


<li>
    <label>
        <MathTexRenderer {tex} />
        <input type="text" bind:value on:change={handleChange} />
    </label>
    <button type="button" on:click={handleClearClick}>X</button>
</li>
