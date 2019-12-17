
<script>

    import { createEventDispatcher } from 'svelte';
    import { mathVariableStore } from '../../stores';

    export let value = '';

    function handleSubmit(evt) {

        if (/[a-z]/i.test(value)) {
            mathVariableStore.add(value);
            value = '';
        } else {
            window.alert(`${value} is not a valid varaible name. Should be a single character (a-z).`);
        }

    }

    function handleClearClick(evt) {
        mathVariableStore.clearAll();
    }

</script>

<form on:submit|preventDefault={handleSubmit} class="flex max-w-full py-2 border-b border-gray-400">
    <input bind:value type="text" maxlength="1" pattern="[a-z]" class="flex-grow min-w-0 px-2 py-1 mr-1 border-gray-400 focus:border-blue-400 invalid:border-red-200" placeholder=
    "Enter a single character (e.g. x)"/>
    <button type="submit" disabled={!value} class="px-2 mr-1 bg-gray-100 hover:bg-gray-300">Add</button>
    <button type="button" on:click={handleClearClick} class="px-2 bg-red-200 hover:bg-red-300">Clear All</button>
</form>
