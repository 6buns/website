<script>
  import { user } from "../store";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  let isOpen = false,
    suscribeProcess = false,
    planType = "sm",
    planKeys = {
      name: {
        name: "Plan",
        description: "Plan Name",
      },
      max_consumers: {
        name: "Max Consumers",
        description:
          'Consumers are users consuming the livestream of video/audio. For eg. In a room of 24 users, only one user producing video/audio, therefore consumers count for this scenario are 23 other users who are "CONSUMING" the live-stream of the single user.',
      },
      max_producers: {
        name: "Max Active Users",
        description:
          "Users who's audio & video is being shown to other users in the room. These users can interact with other active users, in the room through audio or video.",
      },
      usage_cost: {
        name: "Usage cost",
        description:
          "Calculated based on peak number of consumers handled by the room session and length of the room session.",
      },
      monthly_charge: {
        name: "Recurring Monthly Charge",
        description: "Fixed charge, billed each month.",
      },
    };

  const plans = {
    sm: {
      name: "Small",
      max_consumers: 24,
      max_producers: 4,
      usage_cost: "$0.0002/consumer/min",
      monthly_charge: "$1",
    },
    md: {
      name: "Medium",
      max_consumers: 112,
      max_producers: 8,
      usage_cost: "$0.0002/consumer/min",
      monthly_charge: "$1 + ( 0.5% * extra usage cost )",
    },
    lg: {
      name: "Large",
      max_consumers: 760,
      max_producers: 20,
      usage_cost: "$0.0001/consumer/min",
      monthly_charge: "$9 + ( 0.5% * extra usage cost )",
    },
    xl: {
      name: "X-Large",
      max_consumers: 3120,
      max_producers: 40,
      usage_cost: "$0.0001/consumer/min",
      monthly_charge: "$99 + ( 0.5% * extra usage cost )",
    },
  };

  console.log($user);

  let services = [];

  const suscribePromise = () => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:8080/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: plans[planType].name,
          uid: $user.uid,
        }),
      })
        .then((res) => {
          res.json().then((value) => {
            console.log(value);
            resolve(value);
          });
        })
        .catch((res) => {
          reject(res.json());
        });
    });
  };

  const getServicesPromise = () => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:8080/service/${$user.uid}`, {
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          res.json().then((value) => {
            console.log(value);
            resolve(value);
          });
        })
        .catch((res) => {
          console.error(res);
          reject(res);
        });
    });
  };
</script>

<div
  class="w-full h-full grid grid-flow-row-dense grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4 content-between items-start justify-items-start">
  {#await getServicesPromise()}
    <div
      class="w-48 h-48 flex flex-col items-center justify-center space-y-4 cursor-pointer p-4 rounded-2xl border-2 border-dotted border-stone-300 text-stone-500 bg-white shadow-sm group hover:shadow-md">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-stone-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  {:then items}
    {#if items !== null}
      {#each Object.entries(items) as [id, service]}
        <div
          class="grid grid-cols-2 gap-4 cursor-pointer p-4 rounded-2xl border border-stone-100 text-stone-500 bg-white shadow-sm group hover:shadow-md">
          <div
            class="flex flex-col items-start bg-stone-300/10 hover:bg-stone-300/20 py-2 px-4 rounded-lg">
            <h4 class="text-xs tracking-widest font-light -mb-1 uppercase">
              Plan
            </h4>
            <h1 class="text-4xl font-bold">{service.plan}</h1>
          </div>
          <div
            class="flex flex-col items-start bg-stone-300/10 hover:bg-stone-300/20 py-2 px-4 rounded-lg">
            <h4 class="text-xs tracking-widest font-light -mb-1 uppercase">
              consumers
            </h4>
            <h1 class="text-4xl font-bold">80,900</h1>
          </div>
          <div
            class="flex flex-col items-start bg-stone-300/10 hover:bg-stone-300/20 py-2 px-4 rounded-lg">
            <h4 class="text-xs tracking-widest font-light -mb-1 uppercase">
              rooms
            </h4>
            <h1 class="text-4xl font-bold">452</h1>
          </div>
          <div
            class="flex flex-col items-start bg-stone-300/10 hover:bg-stone-300/20 py-2 px-4 rounded-lg">
            <h4 class="text-xs tracking-widest font-light -mb-1 uppercase">
              users
            </h4>
            <h1 class="text-4xl font-bold">4500</h1>
          </div>
          <button
            type="button"
            class="col-span-2 w-full inline-flex items-center justify-between px-4 py-2 font-semibold leading-6 text-sm rounded-md text-stone-500 group bg-stone-300/10 hover:bg-stone-300/20 transition ease-in-out duration-150"
            on:click={() => navigate(`/${id}`)}>
            <span>Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:animate-[directRight_1s_ease-in-out_infinite] -mr-1 ml-3 h-5 w-5 text-stone-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      {/each}
    {/if}
  {:catch}
    <div />
  {/await}
  <div
    class=" flex flex-col justify-evenly space-y-4 cursor-pointer p-4 rounded-2xl border-2 border-dotted border-stone-300 text-stone-500 bg-white shadow-sm group hover:shadow-md">
    <div
      on:click={() => {
        isOpen = !isOpen;
        suscribeProcess = false;
      }}
      class="w-full flex flex-row items-center justify-between space-x-2">
      <div class="font-sans">Add Service</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 group-hover:bg-stone-300/40 rounded-lg group-hover:rotate-45 transform-gpu"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd" />
      </svg>
    </div>
    {#if isOpen}
      <div class="max-w-md space-y-4">
        <label class="block py-4">
          <span class="font-medium text-stone-400">Choose Plan Type</span>
          <select
            bind:value={planType}
            class="block w-full mt-2 rounded-md bg-stone-100 border-transparent focus:border-stone-500 focus:bg-white focus:ring-0">
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Xtra-Large</option>
          </select>
        </label>
        <div class="max-h-64 overflow-y-scroll my-8">
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th
                  class="border-b dark:border-stone-600 p-4 pl-8 pt-0 pb-3 text-stone-400 dark:text-stone-200 text-left"
                  >Particulars</th>
                <th
                  class="border-b dark:border-stone-600 p-4 pt-0 pb-3 text-stone-400 dark:text-stone-200 text-left"
                  >Value</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-stone-800">
              {#each Object.entries(plans[planType]) as item}
                <tr>
                  <td
                    class="border-b border-stone-100 dark:border-stone-700 p-4 pl-8 text-stone-500 dark:text-stone-400">
                    <div class="flex flex-col items-start">
                      <div
                        class="font-bold"
                        title={planKeys[item[0]].description}>
                        {planKeys[item[0]].name}
                      </div>
                    </div>
                  </td>
                  <td
                    class="w-max border-b border-stone-100 dark:border-stone-700 p-4 text-stone-500 dark:text-stone-400 font-bold"
                    title={planKeys[item[0]].description}>{item[1]}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <div class="flex flex-col items-center justify-center space-y-2">
          {#if suscribeProcess}
            {#await suscribePromise()}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150 cursor-not-allowed"
                disabled="">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Suscribing...
              </button>
            {:then value}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150 cursor-not-allowed"
                disabled="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="-ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
                Suscribed
              </button>
              <span>{value.message}</span>
            {:catch error}
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-red-500 hover:bg-red-400 transition ease-in-out duration-150">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Retry : {error}
              </button>
            {/await}
          {:else}
            <button
              type="button"
              on:click={() => (suscribeProcess = !suscribeProcess)}
              class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150">
              Suscribe
            </button>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<!--
  - try fetch services attached to user, and show.
  - show add service.
    - plan type,
    - plan price,
    - commited use discount,

 -->
