<script>
  let imgUrl = () =>
    `https://avatars.dicebear.com/api/adventurer/${(~~(
      Math.random() * 1000000
    )).toString(36)}.svg?r=50&scale=100`;

  let imgHtml = (n) => {
    let str = "";
    while (n > 0) {
      str += `<img
          src=${imgUrl()}
          alt="avataar"
          class="inline-block w-8 h-8 rounded-full object-cover bg-gray-800 ring-2 ring-white"
        />`;
      n = n - 1;
    }
    return str;
  };

  (async function getMedia() {
    let stream = null;
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        /* use the stream */
        document
          .querySelectorAll("#selfVide")
          .forEach((e) => (e.srcObject = stream));
      },
      (err) => {
        /* handle the error */
        console.error(err);
        document.getElementById(
          "screen"
        ).innerHTML = `<div class="bg-gray-900 text-green-400 font-serif ">Permission for video not given.</div>`;
      }
    );
  })();
</script>

<div
  class="w-full px-36 my-16 h-96 grid grid-cols-2 grid-rows-1 gap-20 items-center justify-items-stretch"
>
  <div class="w-full h-min p-4 col-start-1 col-end-2 row-span-1">
    <div
      class="p-2 border-4 border-gray-200 grid grid-cols-1 grid-rows-6 items-center justify-items-center rounded-3xl"
    >
      <div class="row-start-1 row-end-6 h-auto rounded-2xl p-2 overflow-hidden">
        <video
          id="selfVide"
          class="w-full h-full object-cover bg-gray-900 rounded-xl"
          autoplay
          muted
        />
      </div>
      <div
        class="row-start-6 row-end-7 bg-gray-200 w-full mx-8 p-4 rounded-2xl flex flex-row justify-between items-center -space-x-4"
      >
        {@html imgHtml(9)}
        <span class="pl-3 font-mono text-2xl text-gray-400">200+</span>
      </div>
    </div>
  </div>
  <div class="p-4 col-start-2 col-end-3 row-span-1">
    <div
      class="font-serif font-bold text-7xl leading-tight capitalize text-center"
    >
      live stream
    </div>
    <div class="flex items-center justify-evenly px-8 mb-4">
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        one to many
      </div>
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        few to many
      </div>
    </div>
    <p class="px-8 font-sans text-base opacity-80">
      Host live shows to multiple platforms such as Facebook, Youtube, Twitch,
      Twitter, Reddit, etc using <span class="font-bold font-serif"
        >vide.live</span
      >.
    </p>
  </div>
</div>
