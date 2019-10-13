
<script>

    import { createEventDispatcher } from 'svelte';
    import { mathVariableStore } from '../../stores';

    export let value = '';

    function handleSubmit(evt) {

        mathVariableStore.add(value);
        value = '';

    }
    function handleClearClick(evt) {
        mathVariableStore.clearAll();
    }

</script>

<form on:submit|preventDefault={handleSubmit} class="flex max-w-full py-2 border-b border-gray-400">
    <input bind:value type="text" maxlength="1" class="flex-grow min-w-0 px-2 py-1 mr-1 border-gray-400 focus:border-blue-400"/>
    <button type="submit" disabled={!value} class="px-2 mr-1 bg-gray-100 hover:bg-gray-300">+</button>
    <button type="button" on:click={handleClearClick} class="px-2 bg-red-200 hover:bg-red-300">clr</button>
</form>
