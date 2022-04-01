// useMachine.js

import { readable } from 'svelte/store';
import { interpret } from 'xstate';

export const useMachine = (config, options) => {
    // interpret the machine config
    const service = interpret(config, options);

    // wrap machine in a svelte readable store with
    // initial state (defined in config) as its starting state
    const store = readable(service.initialState, set => {
        // every time we change state onTransition
        // hook is triggered
        service.onTransition(state => {
            console.log(state)
            set(state);
        });

        service.onSend(e => console.log(e))

        // start the machine
        service.start();

        return () => {
            service.stop();
        };
    });

    // return a custom Svelte store
    return {
        state: store,
        send: service.send
    };
};
