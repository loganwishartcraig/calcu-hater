<script>

    import {mathSolutionStore} from '../../stores';

    export let classList = '';

    const formatter = solution => {
        console.log('formatting', solution, typeof solution)
        if (typeof solution === 'object') {
            return `${solution.re} + ${solution.im}i`;
        } else {
            return solution;
        }
    }

</script>




{#if typeof $mathSolutionStore.solution === 'number'}
    <slot name="pre"></slot>
    <span class={classList}>{formatter($mathSolutionStore.solution)}</span>
    <slot name="post"></slot>
{:else if typeof mathSolutionStore.error === 'string'}
    <slot name="error" error={$mathSolutionStore.error}></slot>
{:else}
    <slot name="waiting"></slot>
{/if}
