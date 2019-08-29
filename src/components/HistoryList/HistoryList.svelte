<script>

    import {mathSolutionStore} from '../../stores';
    import HistoryListItem from './HistoryListItem/HistoryListItem.svelte';

    export let showCount = 5;

</script>


<ul class="history-list">
    {#each $mathSolutionStore.history.slice($mathSolutionStore.history.length - showCount, showCount) as item (item.id)}
        <HistoryListItem value={item.solution} />
    {/each}
</ul>
