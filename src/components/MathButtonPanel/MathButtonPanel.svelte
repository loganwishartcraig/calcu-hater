<script>

    import {mathInputStore, mathExpressionStore, mathVariableStore, mathSolutionStore} from '../../stores';
    import {insultStore} from '../../stores';
    import {globalChaosService, ChaosType} from '../../services';
    import MathButton from '../MathButton/MathButton.svelte';
    import CALC_OPERATION from '../../constants/CalcOperations.js';
    import CALC_TRANSFORM from '../../transforms/CalcOperations.js';

    export let className = '';

    function handleSolveClick()  {
        globalChaosService.get()
            .then(({type, payload}) => {
                switch (type) {
                    case ChaosType.INSULT:
                        return insultStore.set(payload);
                    case ChaosType.OPEN_LINK:
                        return window.open(payload, '_blank');
                    default:
                        console.error('Unknown chaos type')
                }
            })
            .then(() => {
                console.warn('expression', $mathExpressionStore.parsed, $mathVariableStore);
                mathSolutionStore.solve($mathExpressionStore.parsed, $mathVariableStore);
            })
            .catch(e => console.error('Error creating chaos...', {e}))
    }


    function handleClearClick() {
        mathInputStore.clear();
    }

    function applyTransform(transformId) {
        return () => {
            mathInputStore.updateSelection(CALC_TRANSFORM[transformId]);
        }
    }

</script>



<div class="calculator-panel {className}">

    <section class="grouper-panel">
        <MathButton tex={'('}   on:click={applyTransform(CALC_OPERATION.OPEN_PAREN)}/>
        <MathButton tex={')'}   on:click={applyTransform(CALC_OPERATION.CLOSE_PAREN)}/>
        <MathButton tex={'(x)'}   on:click={applyTransform(CALC_OPERATION.WRAP_PAREN)}/>
    </section>

    <section class="variable-panel">
        <MathButton tex={'x'}  on:click={applyTransform(CALC_OPERATION.X)}/>
        <MathButton tex={'y'}   on:click={applyTransform(CALC_OPERATION.Y)}/>
        <MathButton tex={'z'}   on:click={applyTransform(CALC_OPERATION.Z)}/>
    </section>

    <section class="constant-panel">
        <MathButton tex={'\\pi'}  on:click={applyTransform(CALC_OPERATION.PI)}/>
        <MathButton tex={'e'}   on:click={applyTransform(CALC_OPERATION.E)}/>
        <MathButton tex={'i'}   on:click={applyTransform(CALC_OPERATION.I)}/>
    </section>

    <section class="numeric-panel">
        <MathButton tex={'1'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.ONE)} />
        <MathButton tex={'2'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.TWO)}  />
        <MathButton tex={'3'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.THREE)}  />
        <MathButton tex={'4'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.FOUR)}  />
        <MathButton tex={'5'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.FIVE)}  />
        <MathButton tex={'6'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.SIX)}  />
        <MathButton tex={'7'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.SEVEN)}  />
        <MathButton tex={'8'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.EIGHT)}  />
        <MathButton tex={'9'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.NINE)}  />
        <MathButton tex={'0'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.ZERO)}  />
        <MathButton tex={'.'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.DECIMAL)}  />
        <MathButton tex={'='} color="bg-orange-200 hover:bg-orange-300" on:click={handleSolveClick} />
    </section>

    <section class="basic-ops-panel">
        <MathButton tex={'clear'} color="bg-red-200 hover:bg-red-300" on:click={handleClearClick} />
        <MathButton tex={'mod'}   on:click={applyTransform(CALC_OPERATION.MOD)}/>
        <MathButton tex={'*10^y'}   on:click={applyTransform(CALC_OPERATION.RAISE_TEN)}/>
        <MathButton tex={ '/'} color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.DIVIDE)}/>
        <MathButton tex={'*'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.MULTIPLY)}/>
        <MathButton tex={'-'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.SUBTRACT)}/>
        <MathButton tex={'+'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.ADD)}/>
    </section>

    <section class="trig-panel">
        <MathButton tex={'cos(x)'}   on:click={applyTransform(CALC_OPERATION.COS)}/>
        <MathButton tex={'sin(x)'}   on:click={applyTransform(CALC_OPERATION.SIN)}/>
        <MathButton tex={'tan(x)'}   on:click={applyTransform(CALC_OPERATION.TAN)}/>
        <MathButton tex={'sinh(x)'}   on:click={applyTransform(CALC_OPERATION.SINH)}/>
        <MathButton tex={'cosh(x)'}   on:click={applyTransform(CALC_OPERATION.COSH)}/>
        <MathButton tex={'tanh(x)'}   on:click={applyTransform(CALC_OPERATION.TANH)}/>
    </section>

    <section class="advanced-ops-panel">
        <MathButton tex={'x^{-1}'}   on:click={applyTransform(CALC_OPERATION.POWER_NEGATIVE_ONE)}/>
        <MathButton tex={'x^y'}   on:click={applyTransform(CALC_OPERATION.POWER_Y)}/>
        <MathButton tex={'x^2'}   on:click={applyTransform(CALC_OPERATION.POWER_TWO)}/>
        <MathButton tex={'\\sqrt{x}'}   on:click={applyTransform(CALC_OPERATION.SQUARE_ROOT)}/>
        <MathButton tex={'x!'}   on:click={applyTransform(CALC_OPERATION.FACTORIAL)}/>
        <MathButton tex={'|x|'}   on:click={applyTransform(CALC_OPERATION.ABS)}/>
        <MathButton tex={'log(x)'}   on:click={applyTransform(CALC_OPERATION.LOG)}/>
        <MathButton tex={'ln(x)'}   on:click={applyTransform(CALC_OPERATION.LN)}/>
        <MathButton tex={'lg(x)'}   on:click={applyTransform(CALC_OPERATION.LG)}/>
        <MathButton tex={'log_a(x)'}   on:click={applyTransform(CALC_OPERATION.LOG_BASE_A)}/>
    </section>


</div>
