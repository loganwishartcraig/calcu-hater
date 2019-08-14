<script>

    import MathButton from '../MathButton/MathButton.svelte';
    import CALC_OPERATION from '../../constants/CalcOperations.js';
    import CALC_TRANSFORM from '../../transforms/CalcOperations.js';

</script>

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
<MathButton tex={'\\pi'}  transformer={CALC_TRANSFORM[CALC_OPERATION.PI]}/>
<MathButton tex={'e'}   transformer={CALC_TRANSFORM[CALC_OPERATION.E]}/>
<MathButton tex={'('}   transformer={CALC_TRANSFORM[CALC_OPERATION.OPEN_PAREN]}/>
<MathButton tex={')'}   transformer={CALC_TRANSFORM[CALC_OPERATION.CLOSE_PAREN]}/>
<MathButton tex={'*10^y'}   transformer={CALC_TRANSFORM[CALC_OPERATION.RAISE_TEN]}/>
<MathButton tex={'mod'}   transformer={CALC_TRANSFORM[CALC_OPERATION.MOD]}/>
<MathButton tex={ '/'}  transformer={CALC_TRANSFORM[CALC_OPERATION.DIVIDE]}/>
<MathButton tex={'*'}   transformer={CALC_TRANSFORM[CALC_OPERATION.MULTIPLY]}/>
<MathButton tex={'-'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SUBTRACT]}/>
<MathButton tex={'+'}   transformer={CALC_TRANSFORM[CALC_OPERATION.ADD]}/>
<MathButton tex={'x^{-1}'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_NEGATIVE_ONE]}/>
<MathButton tex={'x^y'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_Y]}/>
<MathButton tex={'x^2'}   transformer={CALC_TRANSFORM[CALC_OPERATION.POWER_TWO]}/>
<MathButton tex={'\\sqrt{x}'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SQUARE_ROOT]}/>
<MathButton tex={'x!'}   transformer={CALC_TRANSFORM[CALC_OPERATION.FACTORIAL]}/>
<MathButton tex={'(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.WRAP_PAREN]}/>
<MathButton tex={'cos(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.COS]}/>
<MathButton tex={'sin(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SIN]}/>
<MathButton tex={'tan(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.TAN]}/>
<MathButton tex={'sinh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.SINH]}/>
<MathButton tex={'cosh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.COSH]}/>
<MathButton tex={'tanh(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.TANH]}/>
<MathButton tex={'|x|'}   transformer={CALC_TRANSFORM[CALC_OPERATION.ABS]}/>
<MathButton tex={'log(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LOG]}/>
<MathButton tex={'ln(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LN]}/>
<MathButton tex={'lg(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LG]}/>
<MathButton tex={'log_a(x)'}   transformer={CALC_TRANSFORM[CALC_OPERATION.LOG_BASE_A]}/>
<MathButton tex={'i'}   transformer={CALC_TRANSFORM[CALC_OPERATION.I]}/>
<!-- <MathButton tex={'ans'}} /> -->
