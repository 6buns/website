<script>
let secondName = ["Gross", "Francis", "Robinson", "Coleman", "Watkins", "Burrows", "Stokes", "Rhodes", "Salvage", "Garner", "Long", "Rehbein", "Fox", "Castro", "Sowle"];

let type = ["host", "speaker", "listener"];

let firstName = ["Winona", "Georgia", "Callie", "Harmony", "Floyd", "Danny", "Cassandra", "Harley", "Kevin", "Leigh", "Hadley", "Pansy", "Harley", "Kemp", "Phyllis"];

let imgUrl = () => `https://avatars.dicebear.com/api/adventurer/${(~~(Math.random() * 1000000)).toString(36)}.svg?r=50&scale=100`;

let imgHtml = (n) => {
  let str = "",
    first = n;
  while (n > 0) {
    str += `<div class="flex flex-col items-center justify-center">
        <img
          src=${imgUrl()}
          alt="avataar"
          class="inline-block w-8 h-8 rounded-full object-cover bg-stone-800 ring-1 ring-white"
        />
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-xs font-sans font-bold mt-1 capitalize">${secondName[(Math.random() * secondName.length) | 0]}</h1>
      <h4 class="-mt-1 text-xxs font-mono opacity-60 inline-flex items-center capitalize">${n === first ? type[0] : n > first - 3 ? `📢 ${type[1]}` : type[2]}</h4>
            </div>
        </div>`;
    n = n - 1;
  }
  return str;
};
</script>

<div class="w-4/5 grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] grid-rows-[repeat(auto-fit,_minmax(9rem,_1fr))] lg:grid-rows-1 gap-0 lg:gap-12 items-center justify-items-stretch">
  <div class="p-4 col-span-1 lg:row-span-1">
    <div class="mb-3 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight font-serif font-extrabold capitalize text-center">only audio</div>
    <div class="flex items-center justify-evenly px-2 md:px-8 mb-8 overflow-x-scroll md:overflow-visible">
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">many to many</div>
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">few to many</div>
      <div class="truncate bg-gray-200 rounded-2xl px-4 py-2 font-sans text-xs leading-tight capitalize">one to many</div>
    </div>
    <p class="mt-3 text-base text-stone-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Create something similar to Twitter Spaces, Spotify Greenrooms, clubhouse. Add the power audio conversation to your infrastructure. Using audio also minimizes the redundant use of video calls, and its costs.
    </p>
  </div>
  <div class="p-4 col-span-1 lg:row-span-1 -order-1 lg:order-1">
    <svg class="w-full h-full -my-12 lg:my-0" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="64" y="128" width="512" height="384">
        <div class="w-full h-full aspect-[4/3] p-4 border-8 border-stone-300/50 bg-stone-700 text-skin-inverted border-collapse rounded-[2rem] shadow-md flex flex-col items-center">
          <h1 class="font-serif font-bold text-xl py-2 mb-4 uppercase">sample discussion.</h1>
          <div class="w-full h-full mx-2 py-4 bg-stone-800 grid grid-cols-4 gap-2 justify-items-center items-center rounded-2xl">
            {@html imgHtml(12)}
          </div>
        </div>
      </foreignObject>
    </svg>
  </div>
</div>
