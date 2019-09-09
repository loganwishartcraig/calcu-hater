import { writable } from 'svelte/store'

const initialState = {
    history: [],
    solution: undefined,
    error: ''
};

const { set, subscribe, update } = writable(initialState);

export const mathSolutionStore = {

    subscribe,

    solve(parsed, scope = {}) {
        return new Promise((res, rej) => {
            try {


                const solution = parsed.compile().evaluate({ ...scope });
                console.log('solved', { solution });
                update(state => {
                    console.warn(state);
                    return ({
                        history: [...state.history, { id: Date.now().toString(), solution }],
                        solution,
                        error: '',
                    })
                });

                res();

            } catch (e) {
                console.error('Failed to solve the expression', { e });
                update(state => ({
                    ...state,
                    error: e,
                }));

                rej(e)
            }
        })


    },



}
