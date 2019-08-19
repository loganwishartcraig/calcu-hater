import { derived } from 'svelte/store'
import { parse } from 'mathjs';
import { mathInputStore } from './mathInput';

const initialState = {
    parsed: undefined,
    tex: ''
};

export const mathExpressionStore = derived(mathInputStore, $mathInputStore => {

    try {

        const parsed = parse($mathInputStore.value || '');
        const tex = parsed.toTex({ parenthesis: 'keep' });

        return { parsed, tex };

    } catch (e) {
        console.error('Failed to parse expression', { e });
        return { ...initialState };
    }

}, { ...initialState });

