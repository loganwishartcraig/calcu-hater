<script>

    import MathButton from '../MathButton/MathButton.svelte';

    function handleClick() {
        console.log("clicked")
    }

</script>

<MathButton tex={'1'} transform={({text, isSelection}) => isSelection ? '1' : `${text}1`} on:click={handleClick} />
<MathButton tex={'2'} transform={({text, isSelection}) => isSelection ? '2' : `${text}2`} on:click={handleClick} />
<MathButton tex={'3'} transform={({text, isSelection}) => isSelection ? '3' : `${text}3`} on:click={handleClick} />
<MathButton tex={'4'} transform={({text, isSelection}) => isSelection ? '4' : `${text}4`} on:click={handleClick} />
<MathButton tex={'5'} transform={({text, isSelection}) => isSelection ? '5' : `${text}5`} on:click={handleClick} />
<MathButton tex={'6'} transform={({text, isSelection}) => isSelection ? '6' : `${text}6`} on:click={handleClick} />
<MathButton tex={'7'} transform={({text, isSelection}) => isSelection ? '7' : `${text}7`} on:click={handleClick} />
<MathButton tex={'8'} transform={({text, isSelection}) => isSelection ? '8' : `${text}8`} on:click={handleClick} />
<MathButton tex={'9'} transform={({text, isSelection}) => isSelection ? '9' : `${text}9`} on:click={handleClick} />
<MathButton tex={'0'} transform={({text, isSelection}) => isSelection ? '0' : `${text}0`} on:click={handleClick} />
<MathButton tex={'.'} transform={({text, isSelection}) => isSelection ? '.' : `${text}.`} on:click={handleClick} />

<MathButton tex={'\\pi'} on:click={handleClick} />
<MathButton tex={'e'} on:click={handleClick} />

<MathButton tex={'*10^y'} on:click={handleClick} />
<MathButton tex={'mod'} on:click={handleClick} />
<MathButton tex={'/'} on:click={handleClick} />
<MathButton tex={'*'} on:click={handleClick} />
<MathButton tex={'-'} on:click={handleClick} />
<MathButton tex={'+'} on:click={handleClick} />
<MathButton tex={'x^{-1}'} on:click={handleClick} />
<MathButton tex={'x^y'} on:click={handleClick} />
<MathButton tex={'x^2'} on:click={handleClick} />
<MathButton tex={'\\sqrt{x}'} on:click={handleClick} />
<MathButton tex={'x!'} on:click={handleClick} />
<MathButton tex={'(x)'} on:click={handleClick} />


<MathButton tex={'cos(x)'} on:click={handleClick} />
<MathButton tex={'sin(x)'} on:click={handleClick} />
<MathButton tex={'tan(x)'} on:click={handleClick} />
<MathButton tex={'sinh(x)'} on:click={handleClick} />
<MathButton tex={'cosh(x)'} on:click={handleClick} />
<MathButton tex={'tanh(x)'} on:click={handleClick} />
<MathButton tex={'|x|'} on:click={handleClick} />
<MathButton tex={'log(x)'} on:click={handleClick} />
<MathButton tex={'ln(x)'} on:click={handleClick} />
<MathButton tex={'lg(x)'} on:click={handleClick} />
<MathButton tex={'log_a(x)'} on:click={handleClick} />
<MathButton tex={'i'} on:click={handleClick} />
<MathButton tex={'ans'} on:click={handleClick} />
