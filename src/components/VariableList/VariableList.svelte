<script>

    import VariableListItem from './VariableListItem/VariableListItem.svelte'
    import {mathVariableStore} from '../../stores'

</script>

<ul>
{#each Object.entries($mathVariableStore) as [name, value] (name)}
        <VariableListItem {name} {value} />
{/each}
</ul>
