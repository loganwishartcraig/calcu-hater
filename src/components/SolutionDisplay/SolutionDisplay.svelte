<script>

    import {mathSolutionStore} from '../../stores';

    export let classList = '';

       const formatter = solution => {
        if (typeof solution === 'object') {

            const {re, im} = solution;
            // Formats      {re: 0, im: x} to 'xi',
            //              {re: x, im: 0} to 'x',
            //              {re: x, im: y} to 'x + yi'
            return `${re ? re : ''}${re && im ? ' + ' : ''}${im ? `${im}i` : ''}`;

        } else {
            return solution;
        }
    }

</script>




{#if typeof $mathSolutionStore.solution === 'number' || typeof $mathSolutionStore.solution === 'object'}
    <slot name="pre"></slot>
    <span class={classList}>{formatter($mathSolutionStore.solution)}</span>
    <slot name="post"></slot>
{:else if typeof mathSolutionStore.error === 'string'}
    <slot name="error" error={$mathSolutionStore.error}></slot>
{:else}
    <slot name="waiting"></slot>
{/if}
