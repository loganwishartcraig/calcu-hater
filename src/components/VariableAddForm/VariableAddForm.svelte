
<script>

    import { createEventDispatcher } from 'svelte';
    import { mathVariableStore } from '../../stores';

    export let value = '';

    function handleSubmit(evt) {

        mathVariableStore.add(value);
        value = '';

    }

</script>

<form on:submit|preventDefault={handleSubmit} class="flex max-w-full">
    <input bind:value type="text" maxlength="1" class="flex-grow min-w-0 p-2"/>
    <button type="submit" disabled={!value} class="px-2">+</button>
</form>
