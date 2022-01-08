<script>
  import { apikey, publickey, user } from "../store";
  import { onMount } from "svelte";
  import Menu from "../Components/Menu.svelte";
  console.log($user);

  onMount(() => console.log("Dashboard Mounted"));

  const writeToClipboard = (text) => {
    let type = "text/plain";
    let blob = new Blob([text], { type });
    let data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard
      .write(data)
      .then(
        () => {
          console.log("copied items");
        },
        (err) => {
          console.log(`Unable to copy due to : ${err}`);
        }
      )
      .catch(console.log);
  };

  console.log($apikey);
</script>

<div class="relative w-full flex flex-row min-h-full text-stone-700">
  <Menu />

  <main class="w-full h-full pt-[78px]">
    <header class=" bg-white shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold text-gray-700">API Details</h1>
      </div>
    </header>
    <div class="w-4/5 mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div
        class="mt-8 font-sans grid grid-cols-[repeat(2,_max-content)] items-start justify-items-start">
        <span class="m-2 col-span-1 justify-self-end self-center text-stone-600"
          >API key</span>
        <span
          class="w-fit col-span-1 px-4 py-2 m-2 border border-stone-200 bg-stone-50 rounded-md shadow-inner text-stone-500 font-mono font-bold inline-flex">
          {$apikey || "api key unavailable"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-6 w-6 text-stone-300 hover:text-stone-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            on:click={writeToClipboard($apikey)}>
            <path
              d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </span>
        <span class="m-2 col-span-1 justify-self-end self-center text-stone-600"
          >Public key</span>
        <span
          class="w-fit col-span-1 px-4 py-2 m-2 border border-stone-200 bg-stone-50 rounded-md shadow-inner text-stone-500 font-mono font-bold inline-flex">
          {$publickey || "api key unavailable"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-6 w-6 text-stone-300 hover:text-stone-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            on:click={writeToClipboard($publickey)}>
            <path
              d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </span>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>
