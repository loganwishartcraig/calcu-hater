<script>

    import GenericButton from '../GenericButton/GenericButton.svelte'
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte'

    export let tex;

</script>

<GenericButton on:click>
    <MathTexRenderer {tex} />
</GenericButton>
