<style>
#status {
  transform: translateY(calc(var(--currentIndex) * -25%));
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
#rightCurve,
#leftCurve {
  stroke-dasharray: 10;
}
#textBox {
  box-shadow: inset 0px 0px 2px 6px white;
}
</style>

<script>
import { onDestroy, onMount } from "svelte";
import { fade } from "svelte/transition";
import { tweened } from "svelte/motion";
import { writable } from "svelte/store";
import { interpret } from "xstate";
import { animateMachine } from "../auth/animateMachine";
import { cubicOut } from "svelte/easing";

let current = writable("userLive");
let currentIndex = writable(0);
let leftArrow, rightArrow;

const opa = tweened(0, {
  duration: 400,
  easing: cubicOut,
});

const texts = {
  userLive: "You, and otherUser are live to create a Peer Connection",
  user1Server: "You send credentials to otherUser through signal server",
  user2Server: "otherUser sends credentials to You through signal server",
  user1User2Connect: "You are connected to otherUser using WebRTC",
};

const statesArray = ["userLive", "user1Server", "user2Server", "user1User2Connect"];

const el = (node) => document.getElementById(node).style;

const gap = 4000;

const animateService = interpret(animateMachine);
const { state, send } = animateService;

animateService.onTransition((state) => {
  current.set(state.value);
  currentIndex.set(statesArray.findIndex((x) => x === state.value));
  switch (state.value) {
    case "userLive":
      setTimeout(() => {
        send("NEXT");
      }, gap);
      break;
    case "user1Server":
      el("rightCurve").strokeDashoffset = 0;
      el("leftCurve").strokeDashoffset = 0;
      leftArrow = setInterval(() => {
        el("leftCurve").strokeDashoffset++;
        el("rightCurve").strokeDashoffset--;
      }, 10);
      setTimeout(() => {
        send("NEXT");
        clearInterval(leftArrow);
      }, gap);
      break;
    case "user2Server":
      el("rightCurve").strokeDashoffset = 0;
      el("leftCurve").strokeDashoffset = 0;
      document.getElementById("rightCurve").children[0].style.stroke = "#22c55e";
      document.getElementById("leftCurve").children[0].style.stroke = "#22c55e";
      rightArrow = setInterval(() => {
        el("rightCurve").strokeDashoffset++;
        el("leftCurve").strokeDashoffset--;
      }, 10);
      setTimeout(() => {
        send("NEXT");
        clearInterval(rightArrow);
        document.getElementById("rightCurve").children[0].style.stroke = "#292524";
        document.getElementById("leftCurve").children[0].style.stroke = "#292524";
      }, gap);
      break;
    case "user1User2Connect":
      setTimeout(() => {
        send("NEXT");
      }, gap + 6000);
      break;
    default:
      break;
  }
});

onMount(() => {
  animateService.start();
});

onDestroy(() => {
  animateService.stop();
});
</script>

<main style="{`--currentIndex:${statesArray.findIndex((x) => x === $current)};`}">
  <svg class="w-[360px] md:w-[480px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
    <foreignObject id="screen1" x="5" y="190" width="110" height="71">
      <div class="w-[110px] h-[71px] p-[5px] border-2 border-dotted border-stone-900 rounded-xl flex flex-wrap flex-row items-center justify-evenly">
        <svg x="10" y="5.5" width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="user1">
          <rect width="40" height="50" rx="6" fill="#E7E5E4"></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3636 22.1857C22.2236 22.1857 24.0074 21.4911 25.3226 20.2547C26.6378 19.0183 27.3766 17.3414 27.3766 15.5929C27.3766 13.8443 26.6378 12.1674 25.3226 10.931C24.0074 9.6946 22.2236 9 20.3636 9C18.5037 9 16.7199 9.6946 15.4047 10.931C14.0895 12.1674 13.3506 13.8443 13.3506 15.5929C13.3506 17.3414 14.0895 19.0183 15.4047 20.2547C16.7199 21.4911 18.5037 22.1857 20.3636 22.1857V22.1857ZM4 41.9643C4 39.9441 4.42326 37.9437 5.24561 36.0773C6.06796 34.2109 7.27329 32.5151 8.7928 31.0866C10.3123 29.6582 12.1162 28.525 14.1015 27.7519C16.0869 26.9789 18.2147 26.581 20.3636 26.581C22.5125 26.581 24.6404 26.9789 26.6257 27.7519C28.6111 28.525 30.415 29.6582 31.9345 31.0866C33.454 32.5151 34.6593 34.2109 35.4817 36.0773C36.304 37.9437 36.7273 39.9441 36.7273 41.9643H4Z"
            fill="#292524"></path>
        </svg>

        {#if $currentIndex === 3}
          <svg x="55" y="5.5" width="40" height="50" viewBox="0 0 40 50" fill="none" id="_user2" transition:fade xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="50" rx="6" fill="#BBF7D0"></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3636 20.1857C22.2236 20.1857 24.0074 19.4911 25.3226 18.2547C26.6378 17.0183 27.3766 15.3414 27.3766 13.5929C27.3766 11.8443 26.6378 10.1674 25.3226 8.931C24.0074 7.6946 22.2236 7 20.3636 7C18.5037 7 16.7199 7.6946 15.4047 8.931C14.0895 10.1674 13.3506 11.8443 13.3506 13.5929C13.3506 15.3414 14.0895 17.0183 15.4047 18.2547C16.7199 19.4911 18.5037 20.1857 20.3636 20.1857V20.1857ZM4 39.9643C4 37.9441 4.42326 35.9437 5.24561 34.0773C6.06796 32.2109 7.27329 30.5151 8.7928 29.0866C10.3123 27.6582 12.1162 26.525 14.1015 25.7519C16.0869 24.9789 18.2147 24.581 20.3636 24.581C22.5125 24.581 24.6404 24.9789 26.6257 25.7519C28.6111 26.525 30.415 27.6582 31.9345 29.0866C33.454 30.5151 34.6593 32.2109 35.4817 34.0773C36.304 35.9437 36.7273 37.9441 36.7273 39.9643H4Z"
              fill="#166534"></path>
          </svg>
        {/if}
      </div>
    </foreignObject>

    <foreignObject id="screen2" x="285" y="190" width="110" height="71">
      <div class="w-[110px] h-[71px] p-[5px] border-2 border-dotted border-stone-900 rounded-xl flex flex-wrap flex-row items-center justify-evenly">
        <svg x="5" y="5.5" width="40" height="50" viewBox="0 0 40 50" fill="none" id="user2" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="50" rx="6" fill="#BBF7D0"></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3636 20.1857C22.2236 20.1857 24.0074 19.4911 25.3226 18.2547C26.6378 17.0183 27.3766 15.3414 27.3766 13.5929C27.3766 11.8443 26.6378 10.1674 25.3226 8.931C24.0074 7.6946 22.2236 7 20.3636 7C18.5037 7 16.7199 7.6946 15.4047 8.931C14.0895 10.1674 13.3506 11.8443 13.3506 13.5929C13.3506 15.3414 14.0895 17.0183 15.4047 18.2547C16.7199 19.4911 18.5037 20.1857 20.3636 20.1857V20.1857ZM4 39.9643C4 37.9441 4.42326 35.9437 5.24561 34.0773C6.06796 32.2109 7.27329 30.5151 8.7928 29.0866C10.3123 27.6582 12.1162 26.525 14.1015 25.7519C16.0869 24.9789 18.2147 24.581 20.3636 24.581C22.5125 24.581 24.6404 24.9789 26.6257 25.7519C28.6111 26.525 30.415 27.6582 31.9345 29.0866C33.454 30.5151 34.6593 32.2109 35.4817 34.0773C36.304 35.9437 36.7273 37.9441 36.7273 39.9643H4Z"
            fill="#166534">
          </path>
        </svg>

        {#if $currentIndex === 3}
          <svg x="50" y="5.5" width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" transition:fade id="_user1">
            <rect width="40" height="50" rx="6" fill="#E7E5E4"></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3636 22.1857C22.2236 22.1857 24.0074 21.4911 25.3226 20.2547C26.6378 19.0183 27.3766 17.3414 27.3766 15.5929C27.3766 13.8443 26.6378 12.1674 25.3226 10.931C24.0074 9.6946 22.2236 9 20.3636 9C18.5037 9 16.7199 9.6946 15.4047 10.931C14.0895 12.1674 13.3506 13.8443 13.3506 15.5929C13.3506 17.3414 14.0895 19.0183 15.4047 20.2547C16.7199 21.4911 18.5037 22.1857 20.3636 22.1857V22.1857ZM4 41.9643C4 39.9441 4.42326 37.9437 5.24561 36.0773C6.06796 34.2109 7.27329 32.5151 8.7928 31.0866C10.3123 29.6582 12.1162 28.525 14.1015 27.7519C16.0869 26.9789 18.2147 26.581 20.3636 26.581C22.5125 26.581 24.6404 26.9789 26.6257 27.7519C28.6111 28.525 30.415 29.6582 31.9345 31.0866C33.454 32.5151 34.6593 34.2109 35.4817 36.0773C36.304 37.9437 36.7273 39.9441 36.7273 41.9643H4Z"
              fill="#292524"></path>
          </svg>
        {/if}
      </div>
    </foreignObject>

    {#if $currentIndex === 3}
      <svg x="109" y="224" width="182" height="12" viewBox="0 0 182 12" id="peerConnection" fill="none" transition:fade xmlns="http://www.w3.org/2000/svg">
        <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM181.774 5.99999L176 0.226483L170.226 5.99999L176 11.7735L181.774 5.99999ZM6 7L176 6.99999L176 4.99999L6 5L6 7Z" fill="#292524"></path>
      </svg>
    {/if}

    {#if $currentIndex < 3}
      <svg x="163" y="13" width="74" height="79" viewBox="0 0 74 79" id="signalServer" transition:fade fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3334 23.0417C12.3334 30.3163 23.3779 36.2083 37 36.2083C50.6222 36.2083 61.6667 30.3163 61.6667 23.0417C61.6667 15.7671 50.6222 9.875 37 9.875C23.3779 9.875 12.3334 15.7671 12.3334 23.0417Z" fill="#A8A29E"></path>
        <path
          d="M12.3334 23.0417V39.5C12.3334 46.7746 23.3779 52.6667 37 52.6667C50.6222 52.6667 61.6667 46.7746 61.6667 39.5V23.0417C61.6667 30.3163 50.6222 36.2083 37 36.2083C23.3779 36.2083 12.3334 30.3163 12.3334 23.0417Z"
          fill="#C4C4C4"></path>
        <path d="M12.3334 39.5V55.9583C12.3334 63.2329 23.3779 69.125 37 69.125C50.6222 69.125 61.6667 63.2329 61.6667 55.9583V39.5C61.6667 46.7746 50.6222 52.6667 37 52.6667C23.3779 52.6667 12.3334 46.7746 12.3334 39.5Z" fill="#C4C4C4"
        ></path>
        <path
          d="M10.3334 23.0417V55.9583H14.3334V23.0417H10.3334ZM10.3334 55.9583C10.3334 60.6929 13.8949 64.5141 18.6167 67.0341C23.4239 69.5996 29.927 71.125 37 71.125V67.125C30.4509 67.125 24.6207 65.7043 20.5001 63.5052C16.2941 61.2605 14.3334 58.4984 14.3334 55.9583H10.3334ZM37 71.125C44.0731 71.125 50.5762 69.5996 55.3834 67.0341C60.1052 64.5141 63.6667 60.6929 63.6667 55.9583H59.6667C59.6667 58.4984 57.706 61.2605 53.5 63.5052C49.3794 65.7043 43.5492 67.125 37 67.125V71.125ZM63.6667 55.9583V23.0417H59.6667V55.9583H63.6667ZM10.3334 23.0417C10.3334 27.7762 13.8949 31.5974 18.6167 34.1174C23.4239 36.683 29.927 38.2083 37 38.2083V34.2083C30.4509 34.2083 24.6207 32.7877 20.5001 30.5885C16.2941 28.3438 14.3334 25.5817 14.3334 23.0417H10.3334ZM37 38.2083C44.0731 38.2083 50.5762 36.683 55.3834 34.1174C60.1052 31.5974 63.6667 27.7762 63.6667 23.0417H59.6667C59.6667 25.5817 57.706 28.3438 53.5 30.5885C49.3794 32.7877 43.5492 34.2083 37 34.2083V38.2083ZM14.3334 23.0417C14.3334 20.5016 16.2941 17.7395 20.5001 15.4948C24.6207 13.2957 30.4509 11.875 37 11.875V7.875C29.927 7.875 23.4239 9.40036 18.6167 11.9659C13.8949 14.4859 10.3334 18.3071 10.3334 23.0417H14.3334ZM37 11.875C43.5492 11.875 49.3794 13.2957 53.5 15.4948C57.706 17.7395 59.6667 20.5016 59.6667 23.0417H63.6667C63.6667 18.3071 60.1052 14.4859 55.3834 11.9659C50.5762 9.40036 44.0731 7.875 37 7.875V11.875ZM59.6667 39.5C59.6667 42.04 57.706 44.8022 53.5 47.0469C49.3794 49.246 43.5492 50.6667 37 50.6667V54.6667C44.0731 54.6667 50.5762 53.1413 55.3834 50.5757C60.1052 48.0557 63.6667 44.2346 63.6667 39.5H59.6667ZM37 50.6667C30.4509 50.6667 24.6207 49.246 20.5001 47.0469C16.2941 44.8022 14.3334 42.04 14.3334 39.5H10.3334C10.3334 44.2346 13.8949 48.0557 18.6167 50.5757C23.4239 53.1413 29.927 54.6667 37 54.6667V50.6667ZM10.3334 23.0417V39.5H14.3334V23.0417H10.3334ZM63.6667 39.5V23.0417H59.6667V39.5H63.6667ZM10.3334 39.5V55.9583H14.3334V39.5H10.3334ZM63.6667 55.9583V39.5H59.6667V55.9583H63.6667Z"
          fill="black"></path>
      </svg>
    {/if}

    {#if [0, 1, 2].includes($currentIndex)}
      <svg x="40" y="40" xmlns="http://www.w3.org/2000/svg" width="130" height="150" viewBox="0 0 130 150" id="leftCurve" transition:fade fill="none">
        <path
          d="M120 10L53.1126 10C48.7642 10 44.4583 10.7893 40.4409 12.3229C36.4235 13.8565 32.7732 16.1043 29.6984 18.9381C26.6237 21.7718 24.1846 25.1359 22.5205 28.8383C20.8565 32.5407 20 36.509 20 40.5164L20 140"
          stroke="#292524"
          stroke-width="2"
          stroke-linecap="round"></path>
      </svg>

      <svg x="230" y="40" xmlns="http://www.w3.org/2000/svg" width="130" height="150" viewBox="0 0 130 150" id="rightCurve" transition:fade fill="none">
        <path
          d="M11 10L83.8095 10C87.2489 10 90.6546 10.7506 93.8322 12.2089C97.0098 13.6671 99.897 15.8046 102.329 18.4991C104.761 21.1937 106.69 24.3926 108.006 27.9132C109.323 31.4338 110 35.2072 110 39.0179V140"
          stroke="#292524"
          stroke-width="2"
          stroke-linecap="round"></path>
      </svg>
    {/if}

    <foreignObject x="120" y="120" width="150" height="50" id="textBox" class="pt-[4px]">
      <div id="status" class="flex flex-col items-center justify-center">
        {#each ["userLive", "user1Server", "user2Server", "user1User2Connect"] as item (item)}
          {#if $current.match(item)}
            <p class="text-[10px] w-[150px] h-[50px] font-sans font-bold capitalize break-words text-center">
              {texts[$current]}
            </p>
          {:else}
            <p class="text-[10px] w-[150px] h-[50px] font-sans font-bold capitalize break-words text-center">
              {texts[$current]}
            </p>
          {/if}
        {/each}
      </div>
    </foreignObject>
  </svg>
</main>
