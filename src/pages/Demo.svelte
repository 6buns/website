<style>
kbd {
  background-color: #eee;
  font-size: 1em;
  padding: 0.1em 0.3em;
  border-top: 4px solid rgba(255, 255, 255, 0.5);
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  border-right: 4px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);
  color: #5a5c5f;
}
</style>

<script>
import { onDestroy, onMount } from "svelte";
import { writable } from "svelte/store";
import Menu from "../Components/Menu.svelte";

let bun = writable({}),
  setRoom = writable(false);
let showRoomInput = writable(false);
let Room = writable("");
let peers = writable(0);
let key;
let keyCode;

let self = writable({
    video: true,
    audio: true,
    screen: false,
    expanded: false,
  }),
  remote = writable({
    video: true,
    audio: true,
    screen: false,
  });

onMount(() => {
  document.getElementById("roomChoice").open = true;
});

const connect = () => {
  bun.set(
    new Bun({
      secret: "DEMO",
      room: $Room,
    })
  );

  $bun.on("error", (e) => console.error(e));

  $bun.on("screen-share-error", (e) => {
    self.set({ ...$self, screen: false });
    console.error(e);
  });

  $bun.on("room-joined", ({ res, room }) => {
    Room.set(room);
    peers.set(res.length);
    console.log(bun);
    document.querySelector(".self-parent").onfullscreenchange = (e) => {
      if (document.fullscreenElement) {
        self.set({ ...$self, expanded: true });
      } else {
        self.set({ ...$self, expanded: false });
      }
    };
  });

  $bun.on("new-peer", (e) => {
    console.log("NEW PEER");
  });

  $bun.on("screen-share-ended", (e) => {
    self.set({ ...$self, screen: false });
  });

  $bun.on("new-remote-track", (event) => {
    let vid = document.querySelector(`.peer`);
    try {
      vid.srcObject = event.streams[0];
    } catch (error) {
      vid.src = URL.createObjectURL(event.streams[0]);
    }
  });

  $bun.on("peer-data-recieved", (data) => {
    const hTag = document.createElement("h1");
    hTag.setAttribute(
      "class",
      "w-max px-4 py-2 mx-4 bg-green-200 rounded-2xl shadow self-start"
    );
    hTag.innerText = data;
    document.querySelector(".messages").append(hTag);
  });
};

const onClose = () => {
  // console.log(document.getElementById("roomChoice"), $Room);
  document.getElementById("roomChoice").open = false;
  setRoom.set(true);
  connect();
};

const sendMessage = () => {
  let data = document.querySelector("#chatMessage").value.replace(/\n/g, "");
  data = data.trim();
  if (data === "" || !data) return;
  $bun.sendData(data);
  const hTag = document.createElement("h1");
  hTag.setAttribute(
    "class",
    "w-max px-4 py-2 mx-4 bg-white rounded-2xl shadow self-end"
  );
  hTag.innerText = data;
  document.querySelector(".messages").append(hTag);
  document.querySelector("#chatMessage").value = "";
  document.querySelector("#chatMessage").value = "";
};

const handleClick = (e) => {
  switch (e.target.id) {
    case "video": {
      let val1 = !$self.video;
      self.set({ ...$self, video: val1 });
      $bun.toggleMedia("video");
      break;
    }
    case "audio": {
      let val2 = !$self.audio;
      self.set({ ...$self, audio: val2 });
      $bun.toggleMedia("audio");
      break;
    }
    case "screen": {
      if (!$self.screen) {
        let val3 = !$self.screen;
        self.set({ ...$self, screen: val3 });
        $bun.screenShare();
      }
      break;
    }
    case "expand": {
      console.log("here");
      if ($self.expanded) {
        document
          .exitFullscreen()
          .then(() => {
            self.set({ ...$self, expanded: false });
          })
          .catch((e) => console.error(e));
      } else {
        document
          .querySelector(".self-parent")
          .requestFullscreen()
          .then(() => {
            self.set({ ...$self, expanded: true });
          })
          .catch((e) => console.error(e));
      }
      break;
    }
    default: {
      console.log("Invalid Click");
      break;
    }
  }
  console.log($self);
};

onDestroy(async () => {
  await $bun.close();
});

const handleKeydown = (e) => {
  key = e.key;
  keyCode = e.keyCode;
  switch (keyCode) {
    case 13:
      // pressed enter
      sendMessage();
      break;
    case 27:
      // pressed escape
      document.location.reload();
      break;
    default:
      break;
  }
};
</script>

<main class="w-full h-full">
  <Menu />
  {#if $setRoom}
    <div class="w-full h-full flex flex-row space-x-2 py-2 px-8 md:px-16">
      <div class="flex-grow-0 flex flex-col space-y-2">
        <div
          class="self-parent w-72 h-64 relative overflow-hidden rounded-md border border-stone-300">
          <video
            class="self absolute h-full w-full object-cover"
            autoplay
            muted>
          </video>
          <div
            on:click="{handleClick}"
            id="expand"
            class="absolute top-4 right-4 cursor-pointer w-12 h-12 rounded-full bg-white/40 opacity-40 hover:opacity-100 hover:bg-white flex items-center justify-center">
            {#if $self.expanded}
              <svg
                id="expand"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  id="expand"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
            {:else}
              <svg
                id="expand"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  id="expand"
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
                  clip-rule="evenodd"></path>
              </svg>
            {/if}
          </div>
          <div
            class="absolute bottom-4 left-0 right-0 flex flex-row items-center justify-evenly mx-2 space-x-2">
            <div
              id="video"
              on:click="{handleClick}"
              class="cursor-pointer w-12 h-12 rounded-full bg-white/40 opacity-40 hover:opacity-100 hover:bg-white flex items-center justify-center">
              {#if $self.video}
                <svg
                  id="video"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    id="video"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              {:else}
                <svg
                  id="video"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    id="video"
                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                  ></path>
                </svg>
              {/if}
            </div>
            <div
              id="screen"
              on:click="{handleClick}"
              class="cursor-pointer w-12 h-12 rounded-full bg-white/40 opacity-40 hover:opacity-100 hover:bg-white flex items-center justify-center">
              {#if $self.screen}
                <svg
                  id="screen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    id="screen"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              {:else}
                <svg
                  id="screen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    id="screen"
                    fill-rule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clip-rule="evenodd"></path>
                </svg>
              {/if}
            </div>
            <div
              id="audio"
              on:click="{handleClick}"
              class="cursor-pointer w-12 h-12 rounded-full bg-white/40 opacity-40 hover:opacity-100 hover:bg-white flex items-center justify-center">
              {#if $self.audio}
                <svg
                  id="audio"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    id="audio"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              {:else}
                <svg
                  id="audio"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    id="audio"
                    fill-rule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clip-rule="evenodd"></path>
                </svg>
              {/if}
            </div>
          </div>
        </div>
        <div
          class="w-72 h-64 relative overflow-hidden rounded-md border border-stone-300">
          <video
            class="peer absolute h-full w-full object-cover"
            autoplay
            muted>
          </video>
        </div>
      </div>
      <div class="w-[36rem] flex-grow flex flex-col justify-evenly space-y-2">
        <div class="bg-stone-200 p-2 rounded-md">
          <h1 class="text-center font-[100] text-stone-500">
            Press <kbd>Enter</kbd> to send a message, and <kbd>Escape</kbd> to reset
            and join a random room.
          </h1>
        </div>
        <div
          class=" flex-grow flex flex-col-reverse py-2 overflow-y-scroll rounded-md bg-stone-200">
          <span class="flex-[1_1_0%]"></span>
          <div class="messages flex flex-col space-y-2"></div>
        </div>
        <div class="flex-grow-0 flex flex-row rounded-md">
          <div class="flex-grow flex items-stretch">
            <textarea
              name="chatMessage"
              id="chatMessage"
              wrap="hard"
              spellcheck="true"
              placeholder="type here to send messages..."
              rows="1"
              row
              class="mr-2 block w-full rounded-md bg-stone-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            ></textarea>
          </div>
          <div class="flex-grow-0 btn btn-green" on:click="{sendMessage}">
            Send
          </div>
        </div>
      </div>
    </div>
  {:else}
    <dialog id="roomChoice" class=" flex-grow" on:close="{onClose}">
      <div
        class="w-full h-full p-4 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg">
        <form
          method="dialog"
          class="flex flex-col justify-center space-y-4"
          open="true">
          <p class="text-lg">
            <select
              on:change="{(e) => {
                $showRoomInput = e.target.value === 'random' ? false : true;
                console.log(showRoomInput, e.target.value, $Room);
              }}"
              class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
              <option value="random" default>Take me to random room.</option>
              <option value="room">No, this one !</option>
            </select>
          </p>
          {#if $showRoomInput}
            <label class="block">
              <input
                type="text"
                aria-multiline="false"
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="type room name here..."
                bind:value="{$Room}" />
            </label>
          {/if}
          <div class="my-4 flex flex-row content-center justify-evenly">
            <button
              class="px-6 py-2 bg-stone-500 text-white shadow-md rounded-md font-bold"
              value="cancel">Cancel</button>
            <button
              class="px-6 py-2 bg-green-500 text-white shadow-md rounded-md font-bold"
              id="confirmBtn"
              value="default">Confirm</button>
          </div>
        </form>
      </div>
    </dialog>
  {/if}
</main>

<svelte:window on:keydown="{handleKeydown}" />
