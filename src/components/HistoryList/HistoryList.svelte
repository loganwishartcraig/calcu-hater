<script>

    import {mathSolutionStore, mathInputStore} from '../../stores';
    import HistoryListItem from './HistoryListItem/HistoryListItem.svelte';

    export let showCount = 5;

    function handleItemClick(item) {
        mathInputStore.setValue(item.solution.toString());
    }

    let visibleHistory = [];

    mathSolutionStore.subscribe(({history}) => {
        const start = Math.max(history.length - showCount, 0);
        const end = start + showCount;
        visibleHistory = history.slice(start, end);
    });

</script>


<ul class="history-list">
    {#each visibleHistory as item}
        <HistoryListItem value={item.solution} on:click={() => handleItemClick(item)}/>
    {/each}
</ul>
