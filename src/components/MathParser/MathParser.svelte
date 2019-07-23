<script>

    import {parse} from 'mathjs';

    export let value;

    let parsed;

    $:            try {
                parsed = parse(value || '').toTex({parenthesis: 'keep'});
            } catch(e) {
                console.error(e);
            }

</script>


<slot {parsed}></slot>