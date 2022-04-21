<style>
.selected {
  background-color: rgba(187, 247, 208, 1);
}
.enlarged {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: whitesmoke;
  width: auto;
  transform: inherit;
  z-index: 10;
}
</style>

<script>
import Menu from "../Components/Menu.svelte";
import Teaching from "../Components/home/displays/Teaching.svelte";
import Games from "../Components/home/displays/Games.svelte";
import Medical from "../Components/home/displays/Medical.svelte";
import Service from "../Components/home/displays/Service.svelte";
import { onDestroy } from "svelte";
import PeerConnectionAnimation from "../Components/PeerConnectionAnimation.svelte";
let current = { key: "games", component: Games },
  currentArray = [
    { key: "games", component: Games },
    { key: "teaching", component: Teaching },
    { key: "medical", component: Medical },
    { key: "customer service", component: Service },
  ],
  SfuMerits = [
    "Simple Weekly Pricing",
    "Three line Integration",
    "Unlimited users in a rooms",
    "No limit on programatic room creation",
    "Get Realtime Statistics",
  ],
  WebrtcMerits = [
    "Simple Weekly Pricing",
    "Three line Integration",
    "4 users in video, and 8 users in audio room",
    "No limit on programatic room creation",
    "Get Realtime Statistics",
  ],
  enlarged = false;
const wordArray = ["video", "audio", "data"];
let index = 0;

// console.log("USER", $user);
let rc = 1;
let uc = 2;
let rd = 20;
$: peerMin = rc * rd * uc;
$: charge = Math.ceil(peerMin / 50) * 1;
const nn = (n) => {
  return Number.isNaN(n)
    ? Number.isSafeInteger(parseFloat(n))
      ? parseInt(n)
      : parseFloat(parseFloat(n).toFixed(2))
    : Number.isSafeInteger(n)
    ? parseInt(n)
    : parseFloat(parseFloat(n).toFixed(2));
};

const closeInterval = setInterval(() => {
  const i = currentArray.findIndex((c) => current.key === c.key);
  current =
    i >= currentArray.length - 1 ? currentArray[0] : currentArray[i + 1];
  index = ~~(Math.random() * 3);
}, 5000);

onDestroy(() => {
  clearInterval(closeInterval);
});
</script>

<main>
  <Menu />
  <div
    class="text-skin-base focus:outline-none h-full w-full flex flex-col space-y-32 items-center justify-start mb-8 px-4 md:px-16">
    <section
      id="main"
      class="my-8 flex flex-col lg:flex-row items-stretch justify-center">
      <div
        class="w-full lg:flex-grow-0 flex-grow grid auto-rows-max gap-8 lg:gap-4 lg:mr-4 lg:pr-16 items-stretch justify-around justify-items-stretch text-left">
        <h1
          class="row-span-1 text-4xl sm:text-6xl leading-tight font-serif font-extrabold text-gray-900">
          <span class="block">
            Scalable peer to peer
            {#each wordArray as word, i}
              {#if i === index}
                {word}
              {/if}
            {/each}
            api</span>
        </h1>
        <p
          class="row-span-1 lg:pr-4 text-lg font-normal tracking-tight text-stone-500 mx-auto">
          A product that makes creating and managing WebRTC connections simpler.
          With just few lines of code, your webrtc connection is up and running.
        </p>
        <div
          class="row-span-1 mt-8 flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-start">
          <div class="rounded-md shadow">
            <a
              href="/"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div class="sm:mt-0 sm:ml-3">
            <a
              href="/demo"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-100 hover:bg-stone-200 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div
        class="relative w-full flex-grow h-full items-center justify-items-end flex flex-col my-4 sm:my-0 sm:mb-4">
        <svg
          class="w-full"
          viewBox="0 0 640 448"
          xmlns="http://www.w3.org/2000/svg">
          <foreignObject
            class="rounded-2xl shadow-lg"
            x="32"
            y="32"
            width="576"
            height="384">
            <div
              class="relative w-[36rem] h-[24rem] overflow-hidden flex flex-col items-stretch p-2 bg-stone-50 border-collapse">
              <svelte:component this="{current.component}" />
            </div>
          </foreignObject>
        </svg>
        <ul class="w-full flex flex-row items-center justify-evenly">
          {#each currentArray as c, i}
            <li
              class:selected="{c.key === current.key}"
              on:click="{() => {
                current = c;
                // clearInterval(closeInterval);
              }}"
              class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
              <div class="capitalize w-max">{c.key}</div>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <section
      id="products"
      class="my-auto flex flex-col items-center justify-center">
      <h1 class="mb-6 text-8xl text-stone-700/30 font-serif font-bold">
        Product
      </h1>
      <div
        class="w-full grid grid-rows-1 space-y-12 items-stretch justify-center justify-items-center content-center">
        <div
          class="w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 items-center justify-items-center ">
          <div
            class="w-full cursor-pointer flex items-center justify-center order-2 md:order-1"
            class:enlarged="{enlarged === 2}"
            on:click="{() => {
              enlarged = enlarged === 2 ? '' : 2;
            }}">
            <!-- <img class="object-center object-cover" src="./webrtc.png" alt="" /> -->
            <PeerConnectionAnimation />
          </div>
          <div class="px-0 md:px-12 w-full md:w-[484px] order-1 md:order-2">
            <h1 class="text-2xl font-serif font-bold">Scalable Peer</h1>
            <p class="w-full pr-4 py-2">
              Simple integration to achieve a webrtc peer connection. Get
              started with our api, and add live video chat or audio chat
              feature to your application.
            </p>
            <ul class="flex flex-col space-y-2">
              {#each WebrtcMerits as merit}
                <li
                  class="w-fit flex flex-row items-center space-x-2 bg-stone-50 shadow-sm rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 fill-green-900"
                    viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <p>{merit}</p>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      id="pricing"
      class="my-auto w-full flex flex-col items-center justify-center">
      <h1 class="mb-6 text-8xl text-stone-700/30 font-serif font-bold">
        Pricing
      </h1>
      <div
        class="w-full grid grid-rows-1 items-center md:items-start justify-items-center gap-8 md:gap-24">
        <div class="flex flex-col items-center justify-center">
          <h3 class="text-lg sm:text-xl md:text-2xl font-serif font-bold">
            Scalable Peer
          </h3>
          <h1
            class="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-center">
            $1 <span class="text-lg sm:text-xl md:text-2xl text-stone-700">
              / week</span>
          </h1>
          <h3 class="text-4xl font-serif font-bold text-center block">
            50 peer-min included
          </h3>
          <h6 class="text-base font-normal font-mono">
            overage charges $1 per 50 peer-min
          </h6>
          <div class="w-full flex flex-col content-start">
            <div class="w-full flex-grow md:w-11/12 p-4 m-auto">
              <div
                class="w-full rounded-2xl bg-stone-50 overflow-hidden shadow">
                <div
                  class="w-full px-4 py-2 bg-green-200 text-stone-700 text-4xl font-serif font-bold text-center">
                </div>
                <div class="w-full text-left">
                  <div class="w-full flex flex-col lg:flex-row">
                    <div
                      class="w-full lg:w-1/2 px-6 md:px-12 py-4 text-stone-700">
                      <div class="flex flex-col">
                        <span
                          class="text-stone-700 text-2xl font-serif font-bold">
                          Weekly Cost
                        </span>
                        <span class="text-stone-500 text-sm font-mono">
                          This cost will be charged each week, as a fee for
                          using the service.
                        </span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <div
                      class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 flex flex-col">
                      <span class="text-stone-700 text-2xl font-mono font-bold">
                        $1/week</span>
                    </div>
                  </div>

                  <div class="w-full flex flex-col lg:flex-row">
                    <div
                      class="w-full lg:w-1/2 px-6 md:px-12 py-4  text-stone-700 flex flex-col">
                      <span
                        class="text-stone-700 text-2xl font-serif font-bold">
                        Usage Cost</span>
                      <span class="text-stone-500 text-sm font-mono">
                        <a href="#consumer"
                          >Based on peer-min, a room created for 20 minutes with
                          2 peers is 40 peer-min. Similarly, 20 rooms each
                          having 2 peers, and a duration of 20 minutes sums upto
                          800 peer-min</a>
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <div
                      class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 text-stone-700 flex flex-col">
                      <span class="text-stone-700 text-2xl font-mono font-bold"
                        >$1 per 50 peer-min</span>
                      <span class="text-stone-500 text-sm font-mono">
                        For a 25 minute room, $1 (25 x 2 x 0.02) will be
                        charged.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-11/12 flex md:flex-row flex-col p-4 m-auto space-y-4 md:space-y-0 md:space-x-4">
              <div
                class="md:w-1/2 space-y-1 py-4 bg-stone-50 text-stone-800 rounded-2xl shadow">
                <div class="w-full px-4 md:px-8 py-1 flex flex-col space-y-2">
                  <div
                    class="flex flex-row items-stretch justify-between content-between">
                    <label
                      for="roomCount"
                      class="text-stone-700 text-base font-serif font-bold"
                      >number of rooms created</label>
                    <span class="text-stone-700 text-lg font-serif font-bold"
                      >{rc}</span>
                  </div>
                  <input
                    name="roomCount"
                    type="range"
                    min="1"
                    max="20"
                    class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0"
                    bind:value="{rc}" />
                </div>
                <div class="w-full px-4 md:px-8 py-1 flex flex-col space-y-2">
                  <div
                    class="flex flex-row items-stretch justify-between content-between">
                    <label
                      for="userCount"
                      class="text-stone-700 text-base font-serif font-bold"
                      >peers in a single room</label>
                    <span class="text-stone-700 text-lg font-serif font-bold"
                      >{uc}</span>
                  </div>
                  <input
                    name="userCount"
                    type="range"
                    min="1"
                    max="8"
                    class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0"
                    bind:value="{uc}" />
                </div>
                <div class="w-full px-4 md:px-8 py-1 flex flex-col space-y-2">
                  <div
                    class="flex flex-row items-stretch justify-between content-between">
                    <label
                      for="roomDuration"
                      class="text-stone-700 text-base font-serif font-bold"
                      >room duration</label>
                    <span class="text-stone-700 text-lg font-serif font-bold"
                      >{rd} minutes</span>
                  </div>
                  <input
                    name="roomDuration"
                    type="range"
                    min="1"
                    max="1440"
                    class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0"
                    bind:value="{rd}" />
                </div>
              </div>
              <div
                class="md:w-1/2 py-4 flex flex-col space-y-1 bg-stone-50 text-stone-800 rounded-2xl shadow">
                <div
                  class="w-full px-4 md:px-8 py-1 flex flex-row items-stretch justify-between content-between">
                  <span class="text-stone-500 text-base font-mono uppercase"
                    >total peer-min</span>
                  <span class="text-stone-500 text-lg font-mono"
                    >{nn(peerMin)}</span>
                </div>
                <div
                  class="w-full px-4 md:px-8 py-1 flex flex-row items-stretch justify-between content-between">
                  <span class="text-stone-700 text-base font-serif font-bold"
                    >Weekly Subscription Charge</span>
                  <span class="text-stone-700 text-lg font-serif font-bold"
                    >$1</span>
                </div>
                <div
                  class="w-full px-4 md:px-8 py-1 flex flex-row items-stretch justify-between content-between">
                  <span class="text-stone-700 text-base font-serif font-bold"
                    >Overage Charge</span>
                  <span class="text-stone-700 text-lg font-serif font-bold"
                    >{charge > 1 ? `$ ${nn(charge - 1)}` : `-`}</span>
                </div>
                <div
                  class="w-full px-4 md:px-8 py-1 flex flex-row items-stretch justify-between content-between">
                  <span class="text-stone-700 text-base font-serif font-bold"
                    >Total Charge</span>
                  <span class="text-stone-700 text-lg font-serif font-bold"
                    >$ {nn(charge > 1 ? charge : 1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row-span-1 my-8 flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div class="rounded-md shadow">
          <a
            href="/"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
        <div class="rounded-md shadow">
          <a
            href="/docs"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-100 hover:bg-stone-200 md:py-4 md:text-lg md:px-10">
            Check our Docs
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
