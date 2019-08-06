<script>

    import { createEventDispatcher } from 'svelte';

    export let label;
    export let type = 'button';

    const dispatch = createEventDispatcher();

    function handleClick(evt) {
        evt.preventDefault();
        dispatch('click');
    }

</script>

<button {type} on:click={handleClick}>
    <slot></slot>
</button>

