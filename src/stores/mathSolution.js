import { writable } from 'svelte/store'

const initialState = {
    history: [],
    solution: undefined,
};

const { set, subscribe, update } = writable(initialState);

export const mathSolutionStore = {

    subscribe,

    solve(parsed, scope = {}) {

        try {

            const solution = parsed.compile().evaluate({ ...scope });
            console.log('solved', { solution });
            update(state => ({
                history: [...state.history, solution],
                solution
            }));

        } catch (e) {
            console.error('Failed to solve the expression', { e });
        }

    },



}
