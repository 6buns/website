<script>
import { Link } from "svelte-navigator";
export let id = undefined;
let data = {
  hasValue: false,
};

/**
 *
    Data  {
        id,
        secret,
        session_id,
        users [
            {
                name,
                socket_id,
                join,
                left,
                stats {
                    formatted {
                        bandwidth_speed,
                        resolution {
                            send,
                            recv,
                        },
                        video {
                            data {
                                send,
                                recv
                            },
                            latency {
                                send,
                                recv
                            },
                            packetsLost {
                                send,
                                recv
                            }
                        },
                        audio {
                            data {
                                send,
                                recv
                            },
                            latency {
                                send,
                                recv
                            },
                            packetsLost {
                                send,
                                recv
                            }
                        },
                        data_channels {
                            opened,
                            closed
                        },
                    },
                    raw,
                },
            }
        ],
        charge,
    }
 *
*/
</script>

<div class="w-full h-full -my-4 flex flex-col items-center justify-center">
  <nav class="w-full px-4 py-4 flex flex-row items-center justify-start space-x-2">
    <Link class="text-xs hover:text-green-500" to="/">Rooms</Link>
    {#if id}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
      <Link class="text-xs hover:text-green-500" to="{`/${id}`}">{id}</Link>
    {/if}
  </nav>
  <div class="w-full h-full bg-white rounded-2xl shadow-md p-4 grid grid-flow-col justify-center items-center">
    {#if data.hasValue}
      <div></div>
    {:else}
      <div class="text-stone-700/40 text-4xl font-bold font-serif">Get Statistics about live rooms here.</div>
    {/if}
  </div>
</div>
