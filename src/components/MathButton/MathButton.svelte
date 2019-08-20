<script>

    import GenericButton from '../GenericButton/GenericButton.svelte'
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte'

    export let tex;

</script>

<GenericButton on:click classList="bg-gray-100 hover:bg-gray-300 p-4">
    <MathTexRenderer {tex} />
</GenericButton>
