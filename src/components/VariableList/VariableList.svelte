<script>

    import VariableListItem from './VariableListItem/VariableListItem.svelte';

    export let variables = [];

</script>

<ul>
{#each variables as variable (variable.name)}
        <VariableListItem {...variable} />
{/each}
</ul>