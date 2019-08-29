<script>

    import {mathSolutionStore, mathInputStore} from '../../stores';
    import HistoryListItem from './HistoryListItem/HistoryListItem.svelte';

    export let showCount = 5;

    function handleItemClick(item) {
        mathInputStore.setValue(item.solution.toString());
    }

</script>


<ul class="history-list">
    {#each $mathSolutionStore.history.slice($mathSolutionStore.history.length - showCount, showCount) as item (item.id)}
        <HistoryListItem value={item.solution} on:click={() => handleItemClick(item)}/>
    {/each}
</ul>
