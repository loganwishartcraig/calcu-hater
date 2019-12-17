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
            .then(() => mathSolutionStore.solve($mathExpressionStore.parsed, $mathVariableStore))
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

        <MathButton classList={'calc-btn__open-paren'} tex={'('}   on:click={applyTransform(CALC_OPERATION.OPEN_PAREN)}/>
        <MathButton classList={'calc-btn__close-paren'} tex={')'}   on:click={applyTransform(CALC_OPERATION.CLOSE_PAREN)}/>
        <MathButton classList={'calc-btn__wrap-paren'} tex={'(x)'}   on:click={applyTransform(CALC_OPERATION.WRAP_PAREN)}/>

        <MathButton classList={'calc-btn__x'} tex={'x'}  on:click={() => {
            mathInputStore.updateSelection(CALC_TRANSFORM[CALC_OPERATION.X]);
            mathVariableStore.add('x');
        }}/>
        <MathButton classList={'calc-btn__y'} tex={'y'}   on:click={ () => {
            mathInputStore.updateSelection(CALC_TRANSFORM[CALC_OPERATION.Y]);
            mathVariableStore.add('y');
        } }/>
        <MathButton classList={'calc-btn__z'} tex={'z'}   on:click={ () => {
            mathInputStore.updateSelection(CALC_TRANSFORM[CALC_OPERATION.Z]);
            mathVariableStore.add('z');
        } }/>

        <MathButton classList={'calc-btn__pi'} tex={'\\pi'}  on:click={applyTransform(CALC_OPERATION.PI)}/>
        <MathButton classList={'calc-btn__e'} tex={'e'}   on:click={applyTransform(CALC_OPERATION.E)}/>
        <MathButton classList={'calc-btn__i'} tex={'i'}   on:click={applyTransform(CALC_OPERATION.I)}/>

        <MathButton classList={'calc-btn__1'} tex={'1'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.ONE)} />
        <MathButton classList={'calc-btn__2'} tex={'2'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.TWO)}  />
        <MathButton classList={'calc-btn__3'} tex={'3'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.THREE)}  />
        <MathButton classList={'calc-btn__4'} tex={'4'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.FOUR)}  />
        <MathButton classList={'calc-btn__5'} tex={'5'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.FIVE)}  />
        <MathButton classList={'calc-btn__6'} tex={'6'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.SIX)}  />
        <MathButton classList={'calc-btn__7'} tex={'7'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.SEVEN)}  />
        <MathButton classList={'calc-btn__8'} tex={'8'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.EIGHT)}  />
        <MathButton classList={'calc-btn__9'} tex={'9'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.NINE)}  />
        <MathButton classList={'calc-btn__0'} tex={'0'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.ZERO)}  />
        <MathButton classList={'calc-btn__dec'} tex={'.'} color="bg-gray-200 hover:bg-gray-400" on:click={applyTransform(CALC_OPERATION.DECIMAL)}  />
        <MathButton classList={'calc-btn__eq'} tex={'='} color="bg-orange-200 hover:bg-orange-300" on:click={handleSolveClick} />

        <MathButton classList={'calc-btn__clr'} tex={'clear'} color="bg-red-200 hover:bg-red-300" on:click={handleClearClick} />
        <MathButton classList={'calc-btn__moda'} tex={'mod_a'}   on:click={() => {
            mathInputStore.updateSelection(CALC_TRANSFORM[CALC_OPERATION.MOD]);
            mathVariableStore.add('a');
        }}/>
        <MathButton classList={'calc-btn__raise10'} tex={'*10^y'}   on:click={applyTransform(CALC_OPERATION.RAISE_TEN)}/>
        <MathButton classList={'calc-btn__div'} tex={ '/'} color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.DIVIDE)}/>
        <MathButton classList={'calc-btn__mul'} tex={'*'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.MULTIPLY)}/>
        <MathButton classList={'calc-btn__sub'} tex={'-'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.SUBTRACT)}/>
        <MathButton classList={'calc-btn__add'} tex={'+'}  color="bg-blue-200 hover:bg-blue-300"  on:click={applyTransform(CALC_OPERATION.ADD)}/>

        <MathButton classList={'calc-btn__cos'} tex={'cos(x)'}   on:click={applyTransform(CALC_OPERATION.COS)}/>
        <MathButton classList={'calc-btn__sin'} tex={'sin(x)'}   on:click={applyTransform(CALC_OPERATION.SIN)}/>
        <MathButton classList={'calc-btn__tan'} tex={'tan(x)'}   on:click={applyTransform(CALC_OPERATION.TAN)}/>
        <MathButton classList={'calc-btn__sinh'} tex={'sinh(x)'}   on:click={applyTransform(CALC_OPERATION.SINH)}/>
        <MathButton classList={'calc-btn__cosh'} tex={'cosh(x)'}   on:click={applyTransform(CALC_OPERATION.COSH)}/>
        <MathButton classList={'calc-btn__tanh'} tex={'tanh(x)'}   on:click={applyTransform(CALC_OPERATION.TANH)}/>

        <MathButton classList={'calc-btn__pow-1'} tex={'x^{-1}'}   on:click={applyTransform(CALC_OPERATION.POWER_NEGATIVE_ONE)}/>
        <MathButton classList={'calc-btn__powy'} tex={'x^y'} on:click={applyTransform(CALC_OPERATION.POWER_Y)}/>
        <MathButton classList={'calc-btn__pow2'} tex={'x^2'}   on:click={applyTransform(CALC_OPERATION.POWER_TWO)}/>
        <MathButton classList={'calc-btn__ex'} tex={'e^x'}   on:click={applyTransform(CALC_OPERATION.TO_EXP)}/>
        <MathButton classList={'calc-btn__sqrt'} tex={'\\sqrt{x}'}   on:click={applyTransform(CALC_OPERATION.SQUARE_ROOT)}/>
        <MathButton classList={'calc-btn__fact'} tex={'x!'}   on:click={applyTransform(CALC_OPERATION.FACTORIAL)}/>
        <MathButton classList={'calc-btn__abs'} tex={'|x|'}   on:click={applyTransform(CALC_OPERATION.ABS)}/>
        <MathButton classList={'calc-btn__loge'} tex={'log_e(x)'}   on:click={applyTransform(CALC_OPERATION.LOG)}/>
        <MathButton classList={'calc-btn__log10'} tex={'log_{10}(x)'}   on:click={applyTransform(CALC_OPERATION.LOG_B_10)}/>
        <MathButton classList={'calc-btn__log2'} tex={'log_2(x)'}   on:click={applyTransform(CALC_OPERATION.LG)}/>
        <MathButton classList={'calc-btn__logb'} tex={'log_b(x)'}   on:click={() => {
            mathInputStore.updateSelection(CALC_TRANSFORM[CALC_OPERATION.LOG_BASE_B]);
            mathVariableStore.add('b');
        }}/>


</div>
