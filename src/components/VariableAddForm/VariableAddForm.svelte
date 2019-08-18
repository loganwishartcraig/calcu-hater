
<script>

    import { createEventDispatcher } from 'svelte';
    import { mathVariableStore } from '../../stores';

    export let value = '';

    function handleSubmit(evt) {

        mathVariableStore.addVariable(value);
        value = '';

    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value type="text" maxlength="1" />
    <button type="submit" disabled={!value}>Add Variable</button>
</form>
