import { derived } from 'svelte/store'
import { parse } from 'mathjs';
import { mathInputStore } from './mathInput';

const initialState = {
    parsed: undefined,
    tex: '',
    error: '',
};

/**
 * Stores the last state as produced by the derived store
 */
let lastState = { ...initialState };

export const mathExpressionStore = derived(mathInputStore, $mathInputStore => {

    try {

        const parsed = parse($mathInputStore.value || '');
        const tex = parsed.toTex({ parenthesis: 'keep' });

        return lastState = { parsed, tex, error: '' };

    } catch (e) {
        console.error('Failed to parse expression', { e, lastState });
        return { ...lastState, error: e.message };
    }

}, { ...initialState });

