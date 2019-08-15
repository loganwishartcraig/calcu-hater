<script>

    import MathButton from '../MathButton/MathButton.svelte';
    import CALC_OPERATION from '../../constants/CalcOperations.js';
    import CALC_TRANSFORM from '../../transforms/CalcOperations.js';

</script>

<style>

    .calculator-panel {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "trig trig grouper grouper grouper basic"
            "advanced advanced constant constant constant basic"
            "advanced advanced numeric numeric numeric basic"
            "advanced advanced numeric numeric numeric basic"
            "advanced advanced numeric numeric numeric basic"
            "advanced advanced numeric numeric numeric basic";
    }

    .constant-panel {
        display: grid;
        grid-area: constant;
        grid-template-columns: repeat(3, 1fr);
    }

    .numeric-panel {
        display: grid;
        grid-area: numeric;
        grid-template-columns: repeat(3, 1fr);
    }

    .grouper-panel {
        display: grid;
        grid-area: grouper;
        grid-template-columns: repeat(3, 1fr);
    }

    .trig-panel {
        display: grid;
        grid-area: trig;
        grid-template-columns: repeat(3, 1fr);
    }

    .basic-ops-panel {
        display: grid;
        grid-area: basic;
    }

    .advanced-ops-panel {
        display: grid;
        grid-area: advanced;
        grid-template-columns: repeat(2, 1fr);
    }

</style>

<div class="calculator-panel">

    <div class="grouper-panel">
        <MathButton tex={'('}   transformer={CALC_TRANSFORM[CALC_OPERATION.OPEN_PAREN]}/>
        <MathButton tex={')'}   transformer={CALC_TRANSFORM[CALC_OPERATION.CLOSE_PAREN]}/>
        <MathButton tex={'(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.WRAP_PAREN]}/>
    </div>

    <div class="constant-panel">
        <MathButton tex={'\\pi'}  transformer={CALC_TRANSFORM[CALC_OPERATION.PI]}/>
        <MathButton tex={'e'}   transformer={CALC_TRANSFORM[CALC_OPERATION.E]}/>
        <MathButton tex={'i'}   transformer={CALC_TRANSFORM[CALC_OPERATION.I]}/>
    </div>

    <div class="numeric-panel">
        <MathButton tex={'1'} transformer={CALC_TRANSFORM[CALC_OPERATION.ONE]} />
        <MathButton tex={'2'} transformer={CALC_TRANSFORM[CALC_OPERATION.TWO]}  />
        <MathButton tex={'3'} transformer={CALC_TRANSFORM[CALC_OPERATION.THREE]}  />
        <MathButton tex={'4'} transformer={CALC_TRANSFORM[CALC_OPERATION.FOUR]}  />
        <MathButton tex={'5'} transformer={CALC_TRANSFORM[CALC_OPERATION.FIVE]}  />
        <MathButton tex={'6'} transformer={CALC_TRANSFORM[CALC_OPERATION.SIX]}  />
        <MathButton tex={'7'} transformer={CALC_TRANSFORM[CALC_OPERATION.SEVEN]}  />
        <MathButton tex={'8'} transformer={CALC_TRANSFORM[CALC_OPERATION.EIGHT]}  />
        <MathButton tex={'9'} transformer={CALC_TRANSFORM[CALC_OPERATION.NINE]}  />
        <MathButton tex={'0'} transformer={CALC_TRANSFORM[CALC_OPERATION.ZERO]}  />
        <MathButton tex={'.'} transformer={CALC_TRANSFORM[CALC_OPERATION.DECIMAL]}  />
        <MathButton tex={'='} />
    </div>

    <div class="basic-ops-panel">
        <MathButton tex={'clear'}   transformer={CALC_TRANSFORM[CALC_OPERATION.MOD]}/>
        <MathButton tex={'mod'}   transformer={CALC_TRANSFORM[CALC_OPERATION.MOD]}/>
        <MathButton tex={'*10^y'}   transformer={CALC_TRANSFORM[CALC_OPERATION.RAISE_TEN]}/>
        <MathButton tex={ '/'}  transformer={CALC_TRANSFORM[CALC_OPERATION.DIVIDE]}/>
        <MathButton tex={'*'}   transformer={CALC_TRANSFORM[CALC_OPERATION.MULTIPLY]}/>
        <MathButton tex={'-'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SUBTRACT]}/>
        <MathButton tex={'+'}   transformer={CALC_TRANSFORM[CALC_OPERATION.ADD]}/>
    </div>

    <div class="advanced-ops-panel">
        <MathButton tex={'x^{-1}'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_NEGATIVE_ONE]}/>
        <MathButton tex={'x^y'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_Y]}/>
        <MathButton tex={'x^2'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_TWO]}/>
        <MathButton tex={'\\sqrt{x}'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SQUARE_ROOT]}/>
        <MathButton tex={'x!'}   transformer={CALC_TRANSFORM[CALC_OPERATION.FACTORIAL]}/>
        <MathButton tex={'|x|'}   transformer={CALC_TRANSFORM[CALC_OPERATION.ABS]}/>
        <MathButton tex={'log(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LOG]}/>
        <MathButton tex={'ln(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LN]}/>
        <MathButton tex={'lg(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LG]}/>
        <MathButton tex={'log_a(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LOG_BASE_A]}/>
    </div>

    <div class="trig-panel">
        <MathButton tex={'cos(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.COS]}/>
        <MathButton tex={'sin(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SIN]}/>
        <MathButton tex={'tan(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.TAN]}/>
        <MathButton tex={'sinh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SINH]}/>
        <MathButton tex={'cosh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.COSH]}/>
        <MathButton tex={'tanh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.TANH]}/>
    </div>

</div>
