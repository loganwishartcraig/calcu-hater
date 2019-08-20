import { writable } from 'svelte/store';

const initialState = {};

const { set, subscribe, update } = writable(initialState);

export const mathVariableStore = {

    subscribe,

    addVariable(name) {
        update(state => ({
            ...state,
            [name]: undefined
        }));
    },

    setVariable(name, value) {

        if (typeof value !== 'number' || isNaN(value)) {
            throw new TypeError(`Cannot use non numeric value ${value} for variable ${name}`);
        }

        update(state => ({
            ...state,
            [name]: value
        }));

    },

    removeVariable(name) {

        update(state => {

            const nextState = { ...state };

            delete nextState[name];

            return nextState;

        });

    }

}
