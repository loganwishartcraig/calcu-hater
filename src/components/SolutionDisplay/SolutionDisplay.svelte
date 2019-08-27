<script>

    import {mathSolutionStore} from '../../stores';

</script>




{#if typeof $mathSolutionStore.solution === 'number'}
    <span>{$mathSolutionStore.solution || 'Waiting...'}</span>
{:else if typeof mathSolutionStore.error === 'string'}
    <slot error={$mathSolutionStore.error }></slot>
{/if}
