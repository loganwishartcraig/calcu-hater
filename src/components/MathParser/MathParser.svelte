<script>

    import {parse} from 'mathjs';
    import { mathInputStore } from '../../stores';

    let parsed;
    let tex;

    function solve() {
        // const result = parsed.compile().evaluate({...scope});
        console.log('solved', {result});
    }

    $: try {
        parsed = parse($mathInputStore.value || '')
        tex = parsed.toTex({parenthesis: 'keep'});
    } catch(e) {
        console.error(e);
    }

</script>


<slot {tex} {solve} ></slot>
