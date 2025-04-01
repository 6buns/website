<script>
import { getDownloadURL, ref } from "firebase/storage";
import { onMount } from "svelte";
import { storage } from "../../../../firebase";

const ImagesRef = ref(storage, "site_assets/images/");
const VideosRef = ref(storage, "site_assets/videos/");
let chessboard, video_1, video_2;

onMount(() => {
  getDownloadURL(ref(ImagesRef, "/chessboard.png"))
    .then((url) => {
      chessboard = url;
    })
    .catch((err) => console.log(err));

  getDownloadURL(ref(VideosRef, "/01.mp4"))
    .then((url) => {
      video_1 = url;
    })
    .catch((err) => console.log(err));

  getDownloadURL(ref(VideosRef, "02.mp4"))
    .then((url) => {
      video_2 = url;
    })
    .catch((err) => console.log(err));
});
</script>

<div class="h-full pb-2 flex flex-row items-center justify-items-start ">
  {#if !chessboard}
    <div class="w-[352px] h-[352px] rounded-2xl bg-stone-200 animate-pulse"></div>
  {:else}
    <img class="w-[22rem] object-scale-down object-center" id="chessboard" src="{chessboard}" alt="Chessboard" data-sveltekit-preload-data />
  {/if}

  <div class="ml-4 max-w-[224px] w-full h-full flex flex-col items-center justify-items-center space-y-4">
    <div class="relative w-full h-full bg-stripes-red text-red-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
      <!-- <div class="w-36 h-36 flex flex-col justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 sm:h-24 w-16 sm:w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
        <h1 class="text-center font-bold">Doctor</h1>
      </div> -->
      <h1 class="text-center font-bold absolute inset-0 mx-auto w-fit self-end text-white z-30" style="text-shadow: 1px 2px 2px #00000040;">You</h1>
      <video class="object-cover h-full w-full m-[0_-50px_0_0]" src="{video_1}" style="transform: rotateY(180deg) scale(1.3);" autoplay loop muted data-sveltekit-preload-data></video>
    </div>
    <div class="relative w-full h-full bg-stripes-blue text-blue-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
      <!-- <div class="w-36 h-36 flex flex-col justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 sm:h-24 w-16 sm:w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
        <h1 class="text-center font-bold">Karla Olson</h1>
      </div> -->
      <h1 class="text-center font-bold absolute inset-0 mx-auto w-fit self-end text-white z-30 " style="text-shadow: 1px 2px 2px #00000040;">Other Player</h1>
      <video class="object-cover h-full w-full scale-[1.2] m-[0_0_0_-30px]" src="{video_2}" autoplay loop muted></video>
    </div>
    <div class="w-full h-12 min-h-[40px] bg-stone-200 flex flex-col items-center justify-evenly space-x-4 rounded-2xl overflow-hidden">
      <div class="w-max flex flex-row items-center justify-center rounded-md px-4 hover:bg-stone-200 cursor-pointer">
        <h1 class="text-base font-semibold">Leave</h1>
      </div>
    </div>
  </div>
</div>
