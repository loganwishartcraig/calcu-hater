<script>

    import {parse} from 'mathjs';
    import {mathInput} from '../../stores';

    let parsed;
    let tex;
    let scope = {};

    function setVariable(payload) {
        console.log('setting variable', payload);
        _setScopeValue(payload)
    }

    function solve() {
        console.log('solving', {scope, tex});
        const result = parsed.compile().evaluate({...scope});
        console.log('solved', {result});
    }

    function _setScopeValue({name, value}) {

        const parsedValue = value ? parseFloat(value) : NaN;

        scope = {
            ...scope,
            [name]: !isNaN(parsedValue) ? parsedValue : undefined
        };

    }

    $: try {
        parsed = parse($mathInput || '')
        tex = parsed.toTex({parenthesis: 'keep'});
    } catch(e) {
        console.error(e);
    }

</script>


<slot {tex} {scope} {setVariable} {solve} ></slot>
