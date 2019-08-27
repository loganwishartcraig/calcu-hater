<script>

    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';
    import { mathVariableStore } from '../../../stores'

    export let name
    export let value = ''

    function handleChange(evt) {
        mathVariableStore.set(name, evt.target.value);
    }

    function handleClearClick(evt) {
        mathVariableStore.remove(name);
    }

    $: tex = `${name} := `;
    $: inputId = `var_${name}`;

</script>


<li class="flex max-w-full items-center">
    <label for={inputId} class="whitespace-no-wrap mr-1" >
        <MathTexRenderer {tex} />
    </label>
    <input id={inputId} type="text" bind:value on:change={handleChange} class="flex-grow min-w-0 px-2 py-1 mr-1" />
    <button type="button" on:click={handleClearClick} class="px-2 py-1">x</button>
</li>
