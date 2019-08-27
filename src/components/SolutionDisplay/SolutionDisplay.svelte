<script>

    import {mathSolutionStore} from '../../stores';

</script>




{#if typeof $mathSolutionStore.solution === 'number'}
    <span>{$mathSolutionStore.solution}</span>
{:else if typeof mathSolutionStore.error === 'string'}
    <slot name="error" error={$mathSolutionStore.error}></slot>
{:else}
    <slot name="waiting"><span>Waiting...</span></slot>
{/if}
