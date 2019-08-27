import { writable } from 'svelte/store';

const initialState = {};

const { set, subscribe, update } = writable(initialState);

export const mathVariableStore = {

    subscribe,

    add(name) {

        console.warn('adding', { name });

        update(state => ({
            [name]: '',
            ...state,
        }));
    },

    set(name, value) {

        // if (typeof value !== 'number' || isNaN(value)) {
        // throw new TypeError(`Cannot use non numeric value ${value} for variable ${name}`);
        // }

        update(state => ({
            ...state,
            [name]: value
        }));

    },

    remove(name) {

        update(state => {

            const nextState = { ...state };

            delete nextState[name];

            return nextState;

        });

    }

}
