<script>
const printVideos = (n) => {
  let arr = "",
    first = n,
    diff;
  while (n > 0) {
    diff = first - n;
    if (diff === 0) {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center rounded-tl-2xl">
          <img
            class="w-full h-full object-cover"
            src="./0${diff + 1}.gif"
            alt="giphy"
          />
        </div>`;
    } else if (diff === 2) {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center rounded-tr-2xl">
          <img
            class="w-full h-full object-cover"
            src="./0${diff + 1}.gif"
            alt="giphy"
          />
        </div>`;
    } else if (diff === 4) {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center">
          <video
            id="selfVide"
            class="w-full h-full object-cover"
            autoplay
            muted
          />
        </div>`;
    } else if (diff === 6) {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center rounded-bl-2xl">
          <img
            class="w-full h-full object-cover"
            src="./0${diff + 1}.gif"
            alt="giphy"
          />
        </div>`;
    } else if (diff === 8) {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center rounded-br-2xl">
          <img
            class="w-full h-full object-cover"
            src="./0${diff + 1}.gif"
            alt="giphy"
          />
        </div>`;
    } else {
      arr += `
        <div class="w-full h-full overflow-hidden bg-gray-200/10 flex items-center justify-center">
          <img
            class="w-full h-full object-cover"
            src="./0${diff + 1}.gif"
            alt="giphy"
          />
        </div>
        `;
    }
    n -= 1;
  }
  return arr;
};
</script>

<div class="w-4/5 grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] grid-rows-[repeat(auto-fit,_minmax(9rem,_1fr))] lg:grid-rows-1 gap-0 lg:gap-12 items-center justify-items-stretch">
  <div class="p-4 col-span-1 lg:row-span-1">
    <svg class="w-full h-full -my-12 lg:my-0" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="64" y="128" width="512" height="384">
        <div class="w-full h-full aspect-[4/3] p-4 border-8 border-stone-300/50 bg-stone-700 border-collapse rounded-[2rem] shadow-md grid grid-cols-3 grid-rows-3 gap-2 items-center justify-items-center">
          {@html printVideos(9)}
        </div>
      </foreignObject>
    </svg>
  </div>
  <div class="p-4 col-span-1 lg:row-span-1">
    <div class="mb-3 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight font-serif font-extrabold capitalize text-center">live video</div>
    <div class="flex items-center justify-evenly px-2 md:px-8 mb-8 overflow-x-scroll md:overflow-visible">
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">many to many</div>
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">few to many</div>
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">one to many</div>
    </div>
    <p class="mt-3 text-base text-stone-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Nine people interacting with each others. Each user is producing video (with audio), and is concurrently consuming other peers videos (with audio). Current maximum allowed is 200 users in a room producing video.
    </p>
  </div>
</div>
