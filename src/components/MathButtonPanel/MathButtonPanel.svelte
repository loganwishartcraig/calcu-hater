<script>

    import MathButton from '../MathButton/MathButton.svelte';

    function handleClick() {
        console.log("clicked")
    }

</script>

<MathButton tex={'1'} on:click={handleClick} />
<MathButton tex={'2'} on:click={handleClick} />
<MathButton tex={'3'} on:click={handleClick} />
<MathButton tex={'4'} on:click={handleClick} />
<MathButton tex={'5'} on:click={handleClick} />
<MathButton tex={'6'} on:click={handleClick} />
<MathButton tex={'7'} on:click={handleClick} />
<MathButton tex={'8'} on:click={handleClick} />
<MathButton tex={'9'} on:click={handleClick} />
<MathButton tex={'0'} on:click={handleClick} />
