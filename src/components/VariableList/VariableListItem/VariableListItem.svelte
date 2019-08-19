<script>

	import { createEventDispatcher } from 'svelte';
    import MathTexRenderer from '../../MathTexRenderer/MathTexRenderer.svelte';
    import {mathVariableStore} from '../../../stores'

    export let name
    export let value = ''

    const dispatch = createEventDispatcher();

    function handleChange(evt) {

        const parsed = parseFloat(value);

        if (!isNaN(parsed)) {
            mathVariableStore.setVariable(name, parsed);
        }

    }

    $: tex = `${name} := `;

</script>


<li>
    <label>
        <MathTexRenderer {tex} />
        <input type="text" bind:value on:change={handleChange} />
    </label>
</li>
