<script>

    import GenericButton from '../GenericButton/GenericButton.svelte'
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte'
    import mathInputStore from '../../stores';

    export let tex;
    export let transformer;

    function handleClick() {

        if (typeof transformer !== 'function') {
            throw new Error(`Unable to handle ${tex} button click, no valid transformer provided.`);
        }

        mathInputStore.updateSelection(transformer);

    }


</script>

<GenericButton on:click={handleClick}>
    <MathTexRenderer {tex} />
</GenericButton>
