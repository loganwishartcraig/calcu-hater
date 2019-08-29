import { writable } from 'svelte/store';

const initialState = {
    value: '',
    selectionRangeStart: 0,
    selectionRangeEnd: 0,
};

const { set, subscribe, update } = writable(initialState);

export const mathInputStore = {

    subscribe,
    set,
    update,

    setSelection(selectionRangeStart, selectionRangeEnd) {
        update(state => ({
            ...state,
            selectionRangeStart,
            selectionRangeEnd,
        }));
    },

    resetSelection() {
        update(state => ({
            ...state,
            selectionRangeStart: state.value.length,
            selectionRangeEnd: state.value.length,
        }));
    },

    setValue(value, selectionRangeStart, selectionRangeEnd) {

        selectionRangeEnd = (typeof selectionRangeEnd === 'number') ? selectionRangeEnd : value.length;
        selectionRangeStart = (typeof selectionRangeStart === 'number') ? selectionRangeStart : selectionRangeEnd;

        update(state => ({
            ...state,
            value,
            selectionRangeStart,
            selectionRangeEnd,
        }));
    },

    clear() {
        set({ ...initialState });
    },

    applyTransform(transform) {

        if (typeof transform !== 'function') {
            return log.error('Cannot apply non-function transform', { transform });
        }

        update(state => {

            const newValue = transform(state);

            if (typeof newValue !== 'string') {
                log.error('Cannot update value to non-string', { transform, newValue });
                return state;
            }

            console.log(set);

            return {
                ...state,
                value: newValue,
                selectionRangeStart: newValue.length,
                selectionRangeEnd: newValue.length,
            };

        })
    },

    updateSelection(transform) {

        if (typeof transform !== 'function') {
            throw new Error('Cannot apply non-function transform');
        }

        update(state => {

            const prefix = state.value.slice(0, state.selectionRangeStart);
            const selection = state.value.slice(state.selectionRangeStart, state.selectionRangeEnd);
            const suffix = state.value.slice(state.selectionRangeEnd);

            console.log('Got partials', { prefix, selection, suffix });

            const toReplace = transform({ prefix, selection, suffix });

            console.log('got replace', toReplace);

            if (typeof toReplace !== 'string') {
                console.error('Cannot apply non-function transform')
                return state;
            }

            const newValue = `${prefix}${toReplace}${suffix}`;
            const newCursorPos = prefix.length + toReplace.length;

            return {
                ...state,
                value: newValue,
                selectionRangeStart: newCursorPos,
                selectionRangeEnd: newCursorPos,
            };

        })

    }
};
