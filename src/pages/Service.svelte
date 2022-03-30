<script>
import { Link } from "svelte-navigator";

export let id = undefined;

let data = {
  hasSubscription: false,
  // usage
  usage: 650,
  // room
  rooms: 42,
  avgPeer: 2,
  avgDuration: 24,
  // api
  key: "d164d0068203d0759a2de329917e4d08b66564a85d8d43a6d5af52daececb25ea86089a4cd27baa7f58bddefc6f5851b20e0736f4ab497a392b61b0c8c01d20ab3d24b1037a4db8a87d766bc221245f1be56b9e922d5a527443e03f9c35322b3497977",
  // payment
  paymentDate: 1648550680365,
  dueDate: 1649155521611,
};

const updateClipboard = (newClip) => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      /* write to the clipboard now */
      navigator.clipboard.writeText(newClip).then(
        function () {
          console.log("/* clipboard successfully set */");
        },
        function () {
          console.log("/* clipboard write failed */");
        }
      );
    }
  });
};
</script>

<svelte:head>
  <script
    src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
  <script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<div class="w-full h-full -my-4 flex flex-col items-center justify-center">
  <nav
    class="w-full px-4 py-4 flex flex-row items-center justify-start space-x-2">
    <Link class="text-xs hover:text-green-500" to="/">Dashboard</Link>
    {#if id}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"></path>
      </svg>
      <Link class="text-xs hover:text-green-500" to="{`/${id}`}">{id}</Link>
    {/if}
  </nav>
  <div
    class="w-full h-full bg-white rounded-2xl shadow-md p-4 grid grid-cols-2 justify-center items-start">
    {#if data.hasSubscription}
      <!-- Usage Stats -->
      <div
        class="w-full p-4 col-span-1 grid grid-cols-2 gap-4 justify-items-center items-center text-lg text-stone-700">
        <h1 class="col-span-2 text-4xl uppercase font-bold text-stone-700/20">
          Usage Stats
        </h1>
        <!-- free usage -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          free usage quota
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {300 - data.usage < 0 ? 300 : 300 - data.usage} peer-minute
        </h3>

        <!-- extra usage -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          additional usage
        </h1>

        {#if data.usage - 300 > 0}
          <h3 class="font-serif font-bold justify-self-end">
            {data.usage - 300}
            <span class="text-sm italic text-stone-700/80">peer-minute</span>
          </h3>
        {:else}
          <h3>-</h3>
        {/if}

        <!-- total usage -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          total usage
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {data.usage} peer-minute
        </h3>

        <!-- charge accumulated -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          approximate charge
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          $ {data.usage - 300 > 0 ? 3 + (data.usage - 300) * 0.015 : 3}
        </h3>
      </div>

      <!-- Room Stats -->
      <div
        class="w-full p-4 col-span-1 grid grid-cols-2 gap-4 justify-items-center items-center text-xl text-stone-700">
        <h1 class="col-span-2 text-4xl uppercase font-bold text-stone-700/20">
          Room Stats
        </h1>
        <!-- total rooms created -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          total rooms created
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {data.rooms}
        </h3>

        <!-- average peers per room count -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          average peers per room
        </h1>
        <h3 class="font-serif font-bold justify-self-end">{data.avgPeer}</h3>

        <!-- average room duration -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          average room duration
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {data.avgDuration}
        </h3>
      </div>

      <!-- API Details -->
      <div
        class="w-full p-4 grid grid-cols-1 gap-4 justify-items-center items-center text-xl text-stone-700">
        <h1 class="col-span-1 text-4xl uppercase font-bold text-stone-700/20">
          API Key
        </h1>
        <span class="text-xs font-mono -my-2">Click below to copy.</span>
        <h3
          class="col-span-1 font-mono justify-self-stretch break-all bg-green-100 p-4 rounded-lg cursor-pointer"
          on:click="{() => updateClipboard(data.key)}">
          {data.key}
        </h3>
      </div>

      <!-- Payment Details -->
      <div
        class="w-full p-4 col-span-1 grid grid-cols-2 gap-4 justify-items-center items-center text-xl text-stone-700">
        <h1 class="col-span-2 text-4xl uppercase font-bold text-stone-700/20">
          Payment Details
        </h1>
        <!-- total rooms created -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          last payment
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {new Intl.DateTimeFormat(["ban", "id"]).format(
            new Date(data.paymentDate)
          )}
        </h3>

        <!-- average peers per room count -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          due date
        </h1>
        <h3 class="font-serif font-bold justify-self-end">
          {new Intl.DateTimeFormat(["ban", "id"]).format(
            new Date(data.dueDate)
          )}
        </h3>

        <!-- average room duration -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          pause subscription
        </h1>
        <button
          class="px-2 py-1 bg-stone-100 text-red-500 rounded-md border border-stone-300 capitalize font-serif font-bold justify-self-end"
          >pause subscription</button>

        <!-- average room duration -->
        <h1 class="col-span-1 capitalize font-mono justify-self-start">
          cancel subscription
        </h1>
        <button
          class="px-2 py-1 bg-stone-100 text-red-500 rounded-md border border-stone-300 capitalize font-serif font-bold justify-self-end"
          >cancel subscription</button>
      </div>
    {:else}
      <div
        class="col-span-2 text-center text-stone-700/40 text-6xl font-bold font-serif">
        You haven't susbscribed to any service.
      </div>
      <table class="col-span-2 border-collapse table-fixed w-full text-lg ">
        <tbody>
          <tr>
            <td class="border border-stone-200 p-4 pl-8 text-stone-700"
              >Single plan ( includes 150 peer-minute / week )</td>
            <td class="border border-stone-200 p-4 pr-8 text-stone-700"
              >$3.00 / week</td>
          </tr>
          <tr>
            <td class="border border-stone-200 p-4 pl-8 text-stone-700"
              >Overage Charges</td>
            <td class="border border-stone-200 p-4 pr-8 text-stone-700"
              >$0.02 / peer-minute</td>
          </tr>
        </tbody>
      </table>
      <form
        class="col-span-2 w-full flex items-center justify-center"
        action="https://us-central1-vide-336112.cloudfunctions.net/createCheckoutSession"
        method="post">
        <input
          type="hidden"
          name="priceId"
          value="price_1KgVQASCiwhjjSk023JI30bF" />
        <button
          class="bg-green-500 text-stone-50 px-4 py-2 rounded-lg shadow-md cursor-pointer"
          id="checkout-and-portal-button"
          type="submit">Create Subscription</button>
      </form>
    {/if}
  </div>
</div>
