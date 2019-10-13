<script>

    import GenericButton from '../GenericButton/GenericButton.svelte'
    import MathTexRenderer from '../MathTexRenderer/MathTexRenderer.svelte'

    export let tex;
    export let color = 'bg-gray-100 hover:bg-gray-300';
    export let classList = '';

</script>

<GenericButton on:click classList={`${color} p-4 rounded-none ${classList}`}>
    <MathTexRenderer {tex} />
</GenericButton>
