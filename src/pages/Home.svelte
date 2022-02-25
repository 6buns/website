<script>
  import Menu from "../Components/Menu.svelte";
  import Teaching from "../Components/home/displays/Teaching.svelte";
  import Games from "../Components/home/displays/Games.svelte";
  import Medical from "../Components/home/displays/Medical.svelte";
  import Service from "../Components/home/displays/Service.svelte";
  import { onDestroy } from "svelte";
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
      "Max 2 users in a rooms",
      "No limit on programatic room creation",
      "Get Realtime Statistics",
    ],
    enlarged = false;

  // const closeInterval = setInterval(() => {
  //   const i = currentArray.findIndex((c) => current.key === c.key);
  //   current =
  //     i >= currentArray.length - 1 ? currentArray[0] : currentArray[i + 1];
  //   console.log(current);
  // }, 5000);

  // onDestroy(() => {
  //   clearInterval(closeInterval);
  // });
</script>

<main
  class="text-skin-base focus:outline-none h-full w-full flex flex-col items-center justify-start mb-8 px-8 md:px-16">
  <Menu />

  <section
    id="main"
    class="my-8 flex flex-col lg:flex-row items-stretch justify-center">
    <div
      class="w-full lg:flex-grow-0 flex-grow grid auto-rows-max gap-8 lg:gap-4 lg:mr-4 lg:pr-16 items-stretch justify-around justify-items-stretch text-left">
      <h1
        class="row-span-1 text-4xl sm:text-6xl leading-tight font-serif font-extrabold text-gray-900">
        <span class="block"> Livestream api</span>
        <span class="block">for your </span>
        <span class="block"> online business.</span>
      </h1>
      <p
        class="row-span-1 lg:pr-4 text-lg font-normal tracking-tight text-stone-500 mx-auto">
        Easy implementation, affordable weekly pricing, no maximum participant
        limit, and create as many programmatic rooms as you require.
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
            href="/"
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
        <foreignObject class="rounded-2xl shadow-lg" x="32" y="32" width="576" height="384">
          <div
            class="relative w-[36rem] h-[24rem] overflow-hidden flex flex-col items-stretch p-2 bg-stone-50 border-collapse">
            <svelte:component this={current.component} />
          </div>
        </foreignObject>
      </svg>
      <ul
        class="w-full flex flex-row items-center justify-evenly">
        {#each currentArray as c, i}
          <li
            class:selected={c.key === current.key}
            on:click={() => {
              current = c;
              // clearInterval(closeInterval);
            }}
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
    <h1 class="mb-6 text-4xl font-serif font-bold">Products</h1>
    <div
      class="w-full grid grid-rows-2 space-y-12 items-stretch justify-center justify-items-center content-center">
      <div
        class="w-full grid grid-cols-1 grid-rows-[repeat(2,_minmax(6rem,_1fr))] md:grid-rows-1 md:grid-cols-2 gap-1 md:gap-8 items-center justify-items-center ">
        <div class="px-0 md:px-12 w-full md:w-[484px]">
          <h1 class="text-2xl font-serif font-bold">M2M : Many to Many</h1>
          <p class="w-full px-0 md:pr-4 py-2">
            We use single forwarding unit architecture to provide the live live
            video conference or audio conference service. Get started with our
            api, choose <span class="font-bold">M2M</span> as architecture type,
            and add live video chat or audio chat feature to your application.
          </p>
          <ul class="grid grid-rows-5 space-y-1">
            {#each SfuMerits as merit}
              <li class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-green-900"
                  viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <p>{merit}</p>
              </li>
            {/each}
          </ul>
        </div>

        <div
          class="w-full cursor-pointer flex items-center justify-center"
          class:enlarged={enlarged === 1}
          on:click={() => {
            enlarged = enlarged === 1 ? "" : 1;
          }}>
          <img class="object-center object-cover" src="./sfu.png" alt="" />
        </div>
      </div>
      <div
        class="w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 items-center justify-items-center ">
        <div
          class="w-full cursor-pointer flex items-center justify-center order-2 md:order-1"
          class:enlarged={enlarged === 2}
          on:click={() => {
            enlarged = enlarged === 2 ? "" : 2;
          }}>
          <img class="object-center object-cover" src="./webrtc.png" alt="" />
        </div>
        <div class="px-0 md:px-12 w-full md:w-[484px] order-1 md:order-2">
          <h1 class="text-2xl font-serif font-bold">121 : One to One</h1>
          <p class="w-full pr-4 py-2">
            We do the webrtc to provide the live video conference or audio
            conference service. Get started with our api, choose <span
              class="font-bold">121</span> as your architecture type, and add live
            video chat or audio chat feature to your application.
          </p>
          <ul class="grid grid-rows-5 space-y-1">
            {#each WebrtcMerits as merit}
              <li class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-green-900"
                  viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
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
    <h1 class="mb-6 text-4xl font-serif font-bold">Pricing</h1>
    <div class="w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center md:items-start justify-items-center gap-8 md:gap-24">
      <div class="w-full flex flex-col items-center justify-center">
        <h3 class="text-lg sm:text-xl md:text-2xl font-serif font-bold">M2M</h3>
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-center">
          $0.002 <span class="text-lg sm:text-xl md:text-2xl block">per consumer-min</span>
        </h1>
        <div
          class="w-full md:w-96 my-4 flex flex-col items-start justify-evenly space-y-4">
          <h1 class="text-xl font-bold">Pricing Example</h1>
          <p class="text-base">
            Room, with 4 users, all of whom have their camera and mic on, is
            active for 10 mins.
          </p>
        </div>
        <div
          class="w-full md:w-96 mb-4 flex flex-col items-start justify-evenly space-y-2 break-words">
          <h1 class="text-lg font-bold">Calulation</h1>
          <p class="w-full text-base break-words">
            Each user has 2 consumers (1 video stream, 1 audio stream) per user
            * 3 users,
          </p>
          <h1 class="font-mono text-xl px-4 text-center bg-green-200">
            6 consumers
          </h1>
          <p class="w-full text-base break-words">
            total consumers handled by the media server, for a room of 4 users,
          </p>
          <h1 class="font-mono text-xl px-4 text-center bg-green-200">
            4 * 6 = 24 consumers
          </h1>
          <p class="w-full text-base break-words">if room is active for 10 mins,</p>
          <h1 class="font-mono text-xl px-4 text-center bg-green-200">
            24 * 10 = 240 consumer-min
          </h1>
          <p class="w-full text-base break-words">usage charge is,</p>
          <h1 class="font-mono text-xl px-4 text-center bg-green-200">
            240 * $0.002 = $0.48
          </h1>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <h3 class="text-lg sm:text-xl md:text-2xl font-serif font-bold">121</h3>
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-center">
          $0.05 <span class="text-lg sm:text-xl md:text-2xl block">per room</span>
        </h1>
        <div
          class="w-full md:w-96 my-4 flex flex-col items-start justify-evenly space-y-4">
          <h1 class="text-xl font-bold">Pricing Example</h1>
          <p class="text-base">24 rooms were created, by a website,</p>
        </div>
        <div
          class="w-full md:w-96 mb-4 flex flex-col items-start justify-evenly space-y-2 break-words">
          <h1 class="text-lg font-bold">Calulation</h1>
          <p class="text-base">Total charge,</p>
          <h1 class="font-mono text-xl px-4 text-center bg-green-200">
            24 * $0.05 = $1.2
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section
    id="faq"
    class="my-8 w-full h-[100vh] flex flex-col items-center justify-center">
    <h1 class="bg-green-200 rounded-xl px-6 py-2 mb-6 text-4xl font-serif font-bold">
      Start using our service and get creative in the ways how you can use it.
    </h1>
    <div class="row-span-1 my-8 flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
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

</main>

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
