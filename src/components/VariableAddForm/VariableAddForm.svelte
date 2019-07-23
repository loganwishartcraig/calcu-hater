
<script>

	import { createEventDispatcher } from 'svelte';

    export let value = '';

    const dispatch = createEventDispatcher();

    function handleSubmit(evt) {

        dispatch('submit', { name: value });
        value = '';

    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value type="text" maxlength="1" />
    <button type="submit" disabled={!value}>Add Variable</button>
</form>