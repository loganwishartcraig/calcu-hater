<script>

    import VariableListItem from './VariableListItem/VariableListItem.svelte';

    export let variables = [];

</script>

<ul>
{#each variables as variable, index (variable.name)}
        <VariableListItem {...variable} {index} on:change />
{/each}
</ul>