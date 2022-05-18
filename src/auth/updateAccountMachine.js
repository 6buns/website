
import { assign, createMachine } from 'xstate';
import { auth, db } from '../../firebase';
import { updateProfile } from "firebase/auth";

const config = {
    id: "updateAccountMachine",
    initial: "noChange",
    context: {
        status: null,
        error: null,
    },
    states: {
        noChange: {
            on: {
                NEXT: 'savingChange'
            }
        },
        savingChange: {
            invoke: {
                id: 'saveChange',
                src: (_, event) => {
                    return new Promise((resolve, reject) => {
                        // setTimeout(() => {
                        //     console.log(data)
                        //     resolve()
                        // }, 2000);
                        const data = event.data;
                        updateProfile(auth.currentUser, {
                            ...data
                        }).then(() => resolve()).catch(() => reject())
                    });
                },
                onDone: {
                    target: 'noChange', actions: assign({ status: 'Data has been updated' })
                },
                onError: {
                    target: 'noChange', actions: assign({ status: 'Error in updating data', error: (_, event) => event.data })
                }
            }
        },
    },
};


export const updateAccountMachine = createMachine(config);
