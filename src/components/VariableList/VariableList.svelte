<script>

    import VariableListItem from './VariableListItem/VariableListItem.svelte';

    export let variables = {};

</script>

<ul>
{#each Object.entries(variables) as [name, value] (name)}
        <VariableListItem {name} {value} on:change />
{/each}
</ul>