<script>
import { getDownloadURL, ref } from "firebase/storage";
import { onMount } from "svelte";
import { storage } from "../../../../firebase";

const VideosRef = ref(storage, "site_assets/videos/");
let video_1, video_2;

onMount(() => {
  getDownloadURL(ref(VideosRef, "/doctor.mp4"))
    .then((url) => {
      video_1 = url;
    })
    .catch((err) => console.log(err));

  getDownloadURL(ref(VideosRef, "/jim_parson.mp4"))
    .then((url) => {
      video_2 = url;
    })
    .catch((err) => console.log(err));
});
</script>

<div class="w-full h-full flex flex-col items-center justify-between">
  <div class="grid grid-cols-2 gap-4 items-center justify-items-center ">
    <div class="relative w-full h-[19rem] bg-stripes-stone text-stone-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
      <!-- <div class="w-64 h-[19rem] flex flex-col justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
        <h1 class="text-center">You</h1>
      </div> -->
      <h1 class="text-center font-bold absolute bottom-0 right-0 left-0 text-white z-30" style="text-shadow: 1px 2px 2px #00000040;">Doctor</h1>
      <video class="object-cover h-full" src="{video_1}" autoplay loop muted data-sveltekit-preload-data></video>
    </div>
    <div class="relative w-full h-[19rem] bg-stripes-red text-red-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
      <!-- <div class="w-64 h-[19rem] flex flex-col justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
        <h1 class="text-center  font-bold">Doctor</h1>
      </div> -->
      <h1 class="text-center font-bold absolute bottom-0 right-0 left-0 text-white z-30" style="text-shadow: 1px 2px 2px #00000040;">You</h1>
      <video class="object-cover h-full" src="{video_2}" autoplay loop muted data-sveltekit-preload-data></video>
    </div>
  </div>
  <div class="w-min flex flex-row items-center justify-evenly space-x-12 text-stone-400">
    <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-200 cursor-pointer py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
      </svg>
      <h1 class="text-xs">Unmute</h1>
    </div>
    <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-200 cursor-pointer py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
      </svg>
      <h1 class="text-xs">Stop Video</h1>
    </div>
    <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-200 cursor-pointer py-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"></path>
      </svg>
      <h1 class="text-xs">End Call</h1>
    </div>
  </div>
</div>
