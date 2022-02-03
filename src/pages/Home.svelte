<script>
  import Menu from "../Components/Menu.svelte";
</script>

<main
  class="bg-white text-skin-base h-screen w-full flex flex-col items-center justify-start">
  <Menu />
  <section id="main" class="my-8 flex items-center justify-center">
    <div
      class="w-full py-8 grid grid-rows-[auto] gap-12 items-center justify-items-center">
      <div class="w-4/5 text-center row-span-1">
        <h1 class="text-4xl md:text-5xl tracking-tight leading-tight font-serif font-extrabold text-gray-900">
          <span class="block xl:inline"> Live video conference </span>
          <span class="block xl:inline"> api for your </span>
          <span class="block text-lime-500 xl:inline"> online business </span>
        </h1>
        <p
          class="mt-3 text-base text-stone-500 sm:max-w-xl mx-auto md:mt-5 md:text-xl">
          Easy implementation. Affordable weekly pricing. No maximum
          participant limit. Fit in as many users as required by the
          application.
        </p>
        <div class="mt-8 flex justify-center">
          <div class="rounded-md shadow">
            <a
              href="/"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div class="mt-5 sm:mt-0 sm:ml-3">
            <a
              href="/"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-100 hover:bg-stone-200 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div
        class="relative row-span-1 grid grid-rows-[auto_minmax(376px,_1fr)] md:grid-rows-none md:grid-cols-[auto_minmax(308px,_1fr)] gap-8 md:gap-2 w-full md:h-full max-w-[36rem] items-center justify-items-center">
        <div
          class="w-full -rotate-3 row-span-1 flex flex-col md:flex-row items-stretch justify-center">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl leading-tight font-serif font-bold text-skin-muted text-center lg:hidden">
            Integrate live video chat with your team, or customers, to your app
            instead of relying on third-party services like zoom, google meet,
            etc.
          </h1>
          <div
            class="relative aspect-[4/3] md:aspect-video scale-75 md:scale-100 flex flex-col items-stretch p-4 border-4 border-stone-300/40 bg-stone-900 border-collapse rounded-[2rem] shadow-md">
            <div
              class="grid grid-cols-2 gap-4 items-center justify-items-center ">
              <div
                class="w-full h-full bg-stripes-stone text-stone-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                <div class="w-36 h-36 flex flex-col justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd" />
                  </svg>
                  <h1 class="text-center">You</h1>
                </div>
              </div>
              <div
                class="w-full h-full bg-stripes-red text-red-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                <div class="w-36 h-36 flex flex-col justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd" />
                  </svg>
                  <h1 class="text-center  font-bold">Kerry</h1>
                </div>
              </div>
              <div
                class="w-full h-full bg-stripes-yellow text-yellow-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                <div class="w-36 h-36 flex flex-col justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd" />
                  </svg>
                  <h1 class="text-center font-bold">West</h1>
                </div>
              </div>
              <div
                class="w-full h-full bg-stripes-blue text-blue-500 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                <div class="w-36 h-36 flex flex-col justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd" />
                  </svg>
                  <h1 class="text-center  font-bold">Karla Olson</h1>
                </div>
              </div>
            </div>
            <div
              class="w-min flex flex-row items-center justify-evenly space-x-12 m-auto mt-4 text-stone-400/50">
              <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-100/20 cursor-pointer py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd" />
                </svg>
                <h1 class="text-xs">Unmute</h1>
              </div>
              <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-100/20 cursor-pointer py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <h1 class="text-xs">Stop Video</h1>
              </div>
              <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-100/20 cursor-pointer py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  <path
                    d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
                </svg>
                <h1 class="text-xs">End Call</h1>
              </div>
              <div class="w-max flex flex-col items-center justify-center rounded-md px-4 hover:bg-stone-100/20 cursor-pointer py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                <h1 class="text-xs">Invite</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-1 flex flex-col items-center justify-start ">
          <h1
            class="text-2xl sm:text-3xl md:text-4xl leading-tight font-serif font-bold text-skin-muted text-center lg:hidden">
            Create your own functionality like Clubhouse, Twitter Spaces,
            Spotify Rooms.
          </h1>
          <svg
            class="w-full my-6 lg:my-0"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg">
            <foreignObject
              class="rotate-3"
              x="104"
              y="16"
              width="192"
              height="368">
              <div
                class=" w-48 h-[23rem] p-4 border-4 border-stone-300/50 bg-stone-900 shadow-md rounded-[2rem]">
                <div class="w-full h-[20%] -mb-2 flex flex-row items-top">
                  <div class="w-1/2 h-12 bg-stripes-stone rounded-xl" />
                  <div class="flex flex-col justify-start items center">
                    <h1 class="ml-2 text-[14px] font-bold text-stone-300">
                      Room Name.
                    </h1>
                    <h1 class="ml-2 text-[8px] text-stone-400/50">
                      Some information regarding room.
                    </h1>
                  </div>
                </div>
                <div class="w-full h-0.5 mb-3 bg-stone-500/20 rounded-2xl" />
                <div
                  class="w-full h-[65%] grid grid-cols-3 gap-4 items-center justify-items-center">
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring ring-stone-600 rounded-full" />
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Host
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Potter
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-stone-300 -mt-4 self-end"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd" />
                    </svg>
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Speaker
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Hatfield
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-stone-300 -mt-4 self-end"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd" />
                    </svg>
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Speaker
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Louis
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-stone-300 -mt-4 self-end"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                        clipRule="evenodd" />
                    </svg>
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Jones
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Diego
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Moody
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Mason
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Jarvis
                    </h1>
                  </div>
                  <div class="flex flex-col items-center justify-evenly">
                    <div
                      class="w-8 h-8 bg-stripes-stone ring-1 ring-stone-600 rounded-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-stone-300 -mt-4 self-end"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                        clipRule="evenodd" />
                    </svg>
                    <h1
                      class="text-[8px] font-bold font-mono pt-[0.25rem] text-center text-stone-50/50">
                      Listener
                    </h1>
                    <h1
                      class="w-max text-[10px] font-mono -mt-0.5 text-center text-stone-50/50">
                      Kobe
                    </h1>
                  </div>
                </div>
                <div
                  class="w-full h-[8%] mt-6 flex items-center justify-center rounded-2xl bg-stone-500/40 text-stone-100">
                  Leave
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  </section>
</main>
