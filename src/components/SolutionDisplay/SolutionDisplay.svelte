<script>

    import {mathSolutionStore} from '../../stores';

    export let classList = '';

</script>




{#if typeof $mathSolutionStore.solution === 'number'}
    <slot name="pre"></slot>
    <span class={classList}>{$mathSolutionStore.solution}</span>
    <slot name="post"></slot>
{:else if typeof mathSolutionStore.error === 'string'}
    <slot name="error" error={$mathSolutionStore.error}></slot>
{:else}
    <slot name="waiting"></slot>
{/if}
