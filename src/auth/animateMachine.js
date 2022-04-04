import { createMachine } from 'xstate';

const config = {
    id: "peerConnect",
    initial: "userLive",
    states: {
        userLive: {
            on: { NEXT: "user1Server" },
        },
        user1Server: {
            on: { NEXT: "user2Server" },
        },
        user2Server: {
            on: { NEXT: "user1User2Connect" },
        },
        user1User2Connect: {
            on: { NEXT: "userLive" },
        },
    },
};

export const animateMachine = createMachine(config);
