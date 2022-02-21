<script>
  import Menu from "../Components/Menu.svelte";
  import Teaching from "../Components/home/displays/Teaching.svelte";
  import Games from "../Components/home/displays/Games.svelte";
  import Medical from "../Components/home/displays/Medical.svelte";
  import Service from "../Components/home/displays/Service.svelte";
  import Others from "../Components/home/displays/Others.svelte";
  let current = "games",
    currentArray = [
      { key: "games", component: Games },
      { key: "teaching", component: Teaching },
      { key: "medical", component: Medical },
      { key: "service", component: Service },
      { key: "others", component: Others },
    ];

  setInterval(() => {
    const i = currentArray.findIndex((c) => current.key === c.key);
    current =
      i >= currentArray.length - 1
        ? currentArray[0]
        : currentArray[i + 1];
  }, 3000);
</script>

<main
  class="bg-gradient-to-br from-stone-50 to-green-100 text-skin-base h-screen w-full flex flex-col items-center justify-start">
  <Menu />
  <section id="main" class="my-auto flex items-center justify-center">
    <div
      class="w-1/2 py-8 px-4 grid grid-rows-[auto] gap-4 items-stretch justify-around justify-items-stretch text-left">
      <h1
        class="row-span-1 text-4xl md:text-6xl leading-tight font-serif font-extrabold text-gray-900">
        <span class="block xl:inline"> Livestream api</span>
        <span class="block xl:inline">for your </span>
        <span class="block xl:inline"> online business.</span>
      </h1>
      <p
        class="row-span-1 text-base font-medium tracking-tight text-stone-500 sm:max-w-xl md:max-w-4xl mx-auto md:text-2xl">
        Easy implementation. Affordable weekly pricing. No maximum participant
        limit. Create as many programmatic rooms as you require.
      </p>
      <div class="row-span-1 my-8 flex justify-start">
        <div class="rounded-md shadow">
          <a
            href="/"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
        <div class=" sm:mt-0 sm:ml-3">
          <a
            href="/"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-50 hover:bg-stone-200 md:py-4 md:text-lg md:px-10">
            Live demo
          </a>
        </div>
      </div>
    </div>
    <div
      class="relative row-span-1 grid grid-rows-1 md:grid-rows-none md:grid-cols-1 gap-8 md:gap-2 w-full md:h-full max-w-[36rem] items-center justify-items-center">
      <div
        class="w-full flex flex-col md:flex-row items-stretch justify-center">
        <div
          class="relative w-[36rem] h-[24rem] scale-75 md:scale-100 flex flex-col items-stretch p-4 bg-stone-50 border-collapse rounded-[2rem] shadow-md">
          <svelte:component this={current.component}/>
        </div>
      </div>
      <ul
        class="absolute top-0 left-0 right-0 flex flex-row items-center justify-evenly">
        <li
          class:selected={current.key === "games"}
          on:click={() => (current = currentArray[0])}
          class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
          <div>Games</div>
        </li>
        <li
          class:selected={current.key === "teaching"}
          on:click={() => (current = currentArray[1])}
          class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
          <div>Teaching</div>
        </li>
        <li
          class:selected={current.key === "medical"}
          on:click={() => (current = currentArray[2])}
          class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
          <div>Medical</div>
        </li>
        <li
          class:selected={current.key === "service"}
          on:click={() => (current = currentArray[3])}
          class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
          <div>Customer Service</div>
        </li>
        <li
          class:selected={current.key === "others"}
          on:click={() => (current = currentArray[4])}
          class="px-2 py-1 rounded-md text-sm text-stone-700 cursor-pointer">
          <div>Others</div>
        </li>
      </ul>
    </div>
  </section>
</main>

<style>
  .selected {
    background-color: rgba(187, 247, 208, 1);
  }
</style>
