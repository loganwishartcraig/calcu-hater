<script>

    import { createEventDispatcher } from 'svelte';

    export let type = 'button';
    export let classList = '';

    const dispatch = createEventDispatcher();

    function handleClick(evt) {
        evt.preventDefault();
        dispatch('click');
    }

</script>

<button {type} on:click={handleClick} class={classList}>
    <slot></slot>
</button>

