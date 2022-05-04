<script>
import Menu from "../Components/Menu.svelte";

let sl = 20; // session length
let mp = 4; // minimum producers req.
let msl = 4; // minimum session length
let uf = 10; // usage frequency
let uft = "Weekly"; // usage frequency type
let st; // session type
// let rch = 0.05; // room charge

let avp = false; // all are producers
let hc = 1; // hosts count
// $: vc = avp ? hc - 1 : hc + vc < 100 ? vc : 100 - hc; // viewers count
let vc = 11;
// $: pc = avp ? hc : hc + vc > 10000 ? 10000 : hc + vc; // producer count
$: pc = parseInt(hc) + parseInt(vc);

const nn = (n) => {
  return Number.isNaN(n) ? (Number.isSafeInteger(parseFloat(n)) ? parseInt(n) : parseFloat(parseFloat(n).toFixed(2))) : Number.isSafeInteger(n) ? parseInt(n) : parseFloat(parseFloat(n).toFixed(2));
}; // normalize number, remove decimal if not required, or concatenate it

$: tcpu = st === "Audio" ? 1 : 2; // track count per user

$: pr = !avp ? tcpu * hc : tcpu * (pc - 1); // producer tracks count
$: cc = pr * pc; // consumer tracks count

$: pcu = cc * (sl * tuf); // consumer track usage

// $: apcu = pcu - 10000; // consumer track usage exceeded beyond free limit

$: charge = 0.005;

$: pcCost = pcu * charge; // producer count cost

// $: pm = pc * sl * tuf; // participant-minute
// $: pmct = st === "Audio" ? 0.001 : 0.004; // participant-minute charge type
// $: epm = pm > 2000 ? pm - 2000 : 0; // over-quota participant minute
// $: pmc = pm > 2000 ? nn(epm * pmct) : 0; // participant-minute cost

$: tuf = uft === "Daily" ? uf * 7 : uf; // total usage frequency in a month
// $: etuf = tuf - 200; // extra total usage frequency in a month
// $: rc = tuf > 200 ? nn(etuf * rch) : 0; // room cost

let mc = 3; // monthly costs
$: tc = pcCost > 0 ? nn(mc + pcCost) : nn(mc); // total monthly costs
</script>

<main class="relative snap-y snap-mandatory bg-stone-300/20 text-skin-base flex-initial">
  <Menu />

  <section id="pricing" class="w-full snap-center h-max grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center items-center">
    <div class="w-full py-8 px-4 rounded-2xl grid justify-items-center items-center">
      <!-- <svg
        class="w-full md:w-4/5 xl:w-1/2 m-4"
        viewBox="0 0 760 455"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="760" height="455"> -->
      <div class="w-full md:w-4/5 p-4">
        <div class="w-full rounded-2xl bg-stone-50 overflow-hidden shadow">
          <div class="w-full px-4 py-2 bg-green-200 text-stone-700 text-4xl font-serif font-bold text-center">Base</div>
          <div class="w-full text-left">
            <div class="w-full flex flex-col lg:flex-row">
              <div class="w-full lg:w-1/2 px-6 md:px-12 py-4 text-stone-700">
                <div class="flex flex-col">
                  <span class="text-stone-700 text-2xl font-serif font-bold">Weekly Cost</span>
                  <span class="text-stone-500 text-xs font-mono">This cost will be charged each week, as a fee for using the service.</span>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <div class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 flex flex-col">
                <span class="text-stone-700 text-2xl font-mono font-bold"> $3/week</span>
                <span class="text-stone-500 text-xs font-mono"> + 20% of usage cost per month, after exceeding base quota</span>
              </div>
            </div>

            <div class="w-full flex flex-col lg:flex-row">
              <div class="w-full lg:w-1/2 px-6 md:px-12 py-4  text-stone-700 flex flex-col">
                <span class="text-stone-700 text-2xl font-serif font-bold"> Usage Cost</span>
                <span class="text-stone-500 text-xs font-mono underline"><a href="#consumer">What is consumer-min ?</a></span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <div class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 text-stone-700 flex flex-col">
                <span class="text-stone-700 text-2xl font-mono font-bold">0.005/consumer-min</span>
                <span class="text-stone-500 text-xs font-mono"> For audio, 1 consumer track, and for video, 2 consumer tracks (1st for video, 2nd for audio) are considered for billing. </span>
              </div>
            </div>

            <!-- <div class="w-full flex flex-col lg:flex-row">
              <div
                class="w-full lg:w-1/2 px-6 md:px-12 py-4  text-stone-700  text-2xl font-serif font-bold">
                Programmatic rooms
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
              <div
                class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 text-stone-700">
                <span class="text-stone-700 text-2xl font-mono font-bold">
                  Unlimited
                </span>
              </div>
            </div>

            <div class="w-full flex flex-col lg:flex-row">
              <div
                class="w-full lg:w-1/2 px-6 md:px-12 py-4 text-stone-700  text-2xl font-serif font-bold">
                Max users
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mx-6 md:mx-12 lg:mx-2 text-stone-700 rotate-90 lg:rotate-0 -my-2 lg:my-auto z-10"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
              <div
                class="w-full lg:w-1/2 m-auto lg:m-0 px-6 md:px-12 py-4 bg-green-100 text-stone-700 flex flex-col">
                <span class="text-stone-700 text-2xl font-mono font-bold">
                  Unlimited
                </span>
                <span class="text-stone-500 text-xs font-mono" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- </foreignObject>
      </svg> -->

      <div class="w-full md:w-4/5 flex flex-col md:flex-row items-center md:items-start justify-center">
        <div class="w-full bg-stone-50 rounded-2xl overflow-hidden shadow md:w-1/2 lg:w-2/3 m-4 px-0">
          <div class="grid grid-flow-row-dense">
            <div class="w-full lg:border-b lg:border-stone-300 flex flex-col lg:flex-row items-stretch justify-center lg:py-4 lg:px-4 lg:space-x-2">
              <div class="lg:w-1/2 border-b border-stone-300 px-4 lg:px-0 lg:border-b-0 grid grid-rows-2 items-center justify-items-center space-y-2 lg:pr-2 lg:py-2 py-4">
                <div class="w-full flex flex-row items-center justify-between">
                  <span class="font-serif text-lg font-bold">Session Type</span>
                </div>
                <select bind:value="{st}" class="block w-full rounded-md bg-stone-100 border-transparent focus:border-stone-500 focus:bg-white focus:ring-0">
                  <option>Video</option>
                  <option>Audio</option>
                </select>
              </div>
              <div class="lg:w-1/2 border-b border-stone-300 px-4 lg:px-0 lg:border-b-0 grid grid-rows-2 items-center justify-items-center space-y-2 lg:pl-2 lg:py-2 py-4">
                <div class="w-full flex flex-row items-center justify-between">
                  <span class="font-serif text-lg font-bold">Session Length</span>
                  <span> <span class="p-1 bg-white font-mono font-bold rounded focus:ring-1 focus:ring-stone-500" bind:innerHTML="{sl}" contenteditable>{sl}</span> mins</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="240"
                  class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0"
                  bind:value="{sl}"
                  on:input="{(e) => e.target.value < msl && (sl = msl)}" />
              </div>
            </div>
            <div class="grid grid-rows-2 border-b border-stone-300 items-center justify-items-start space-y-2 py-4 px-4">
              <div class="w-full flex flex-row items-center justify-between">
                <span class="font-serif text-lg font-bold">
                  Total Users <span class="text-xs">(in a Session)</span>
                </span>
                <span class="p-1 bg-white font-mono font-bold rounded focus:ring-1 focus:ring-stone-500" bind:innerHTML="{pc}" contenteditable>{pc}</span>
              </div>
              {#if avp}
                <input
                  type="range"
                  min="0"
                  max="125"
                  class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0"
                  bind:value="{pc}"
                  on:input="{(e) => e.target.value < mp && (pc = mp)}" />
              {/if}
              <span class="text-xs"> <input type="checkbox" bind:checked="{avp}" class="mr-2 rounded focus:ring-0 text-green-500" />All users are producing <span class="lowercase">{st}</span> simultaneously (at the same time).</span>
              {#if !avp}
                <div class="w-full flex flex-col lg:flex-row">
                  <div class="w-full lg:border lg:border-stone-300 lg:rounded-md lg:mr-1 lg:w-1/2 flex flex-col lg:p-2 space-y-2">
                    <div class="w-full flex flex-row items-center justify-between">
                      <span class="font-serif text-base text-stone-700">Hosts/Speakers</span>
                      <span class="p-1 bg-white font-mono font-semibold rounded focus:ring-1 focus:ring-stone-500" bind:innerHTML="{hc}" contenteditable>{hc}</span>
                    </div>
                    <input type="range" min="0" max="125" class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0" bind:value="{hc}" />
                  </div>
                  <div class="w-full lg:border lg:border-stone-300 lg:rounded-md lg:ml-1 lg:w-1/2 flex flex-col lg:p-2 space-y-2">
                    <div class="w-full flex flex-row items-center justify-between">
                      <span class="font-serif text-base text-stone-700">Viewers/Listeners</span>
                      <span class="p-1 bg-white font-mono font-semibold rounded focus:ring-1 focus:ring-stone-500" bind:innerHTML="{vc}" contenteditable>{vc}</span>
                    </div>
                    <input type="range" min="0" max="125" class="block w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0" bind:value="{vc}" />
                  </div>
                </div>
              {/if}
            </div>
            <div class="grid grid-rows-3 items-center justify-items-center space-y-2 py-4 px-4">
              <div class="w-full flex flex-row items-center justify-between">
                <div class="w-3/4 flex flex-col items-start justify-center">
                  <span class="font-serif text-lg font-bold">Weekly Room Count</span>
                  <span class="text-stone-500 text-sm"> Total number of rooms created programmatically, using our api in a month. </span>
                </div>
                <span class="w-fit p-1 bg-white rounded font-mono font-bold focus:ring-1 focus:ring-stone-500" bind:innerHTML="{tuf}" contenteditable>{tuf}</span>
              </div>
              <select bind:value="{uft}" class="block w-full rounded-md bg-stone-100 border-transparent focus:border-stone-500 focus:bg-white focus:ring-0">
                <option>Weekly</option>
                <option>Daily</option>
              </select>
              <input type="range" min="1" max="100" class="block my-4 w-full h-1 appearance-none rounded-md bg-stone-300 border-transparent accent-green-500 focus:border-stone-500 focus:bg-stone-500 focus:ring-0" bind:value="{uf}" />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 m-4 bg-green-100 overflow-hidden rounded-2xl flex flex-col items-center justify-center">
          <div class="p-2 font-serif font-bold text-2xl">Charges</div>
          <div class="w-full h-px bg-stone-300"></div>
          <div class="p-2 grid grid-rows-[auto] items-center justify-items-center">
            <div class="w-full my-2 flex flex-row items-start justify-evenly">
              <div class="w-3/5 pl-2 flex flex-col items-start">
                <span class="font-serif font-bold text-lg">Weekly Cost</span>
                <span class="text-sm text-stone-500">Base Cost for using our services.</span>
              </div>
              <h1 class="w-2/5 font-mono font-bold text-lg text-right pr-2">
                ${nn(mc)}
              </h1>
            </div>
            <div class="w-full my-2 flex flex-row items-start justify-center">
              <div class="w-3/5 pl-2 flex flex-col items-start">
                <span class="font-serif font-bold text-lg">Usage Costs</span>
                <span class="text-xs font-mono text-stone-500">
                  For handling {nn(cc)} tracks, over {nn(tuf)} sessions, where each session was {sl} minutes long, and had approximately over {pc}
                  users interacting.</span>
                <span class="text-base font-serif text-stone-700">
                  {nn(cc)} consumer tracks
                </span>
                <span class="text-base font-serif text-stone-700">{nn(tuf * sl)} mins</span>
                <span class="text-base font-serif text-stone-700">
                  {nn(cc * tuf * sl)} consumer-min
                </span>
                <span class="text-sm font-serif text-stone-500">
                  ${charge} per consumer-min
                </span>
              </div>

              <h1 class="w-2/5 font-mono font-bold text-lg text-right pr-2">
                {pcCost > 0 ? `$${nn(pcCost)}` : "-"}
              </h1>
            </div>
          </div>
          <div class="p-4 w-full -mx-2 flex flex-row items-start justify-evenly bg-green-300">
            <div class="w-3/5 flex flex-col items-start">
              <span class="font-serif font-bold text-xl">Total</span>
            </div>
            <h1 class="w-2/5 font-mono font-bold text-xl text-right">
              ${nn(tc)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<!--

  n : number of speakers : 4
  m : number of listeners : 512

  m = n === m ? n - 1 : m

  each listner recieves from n speakers, so ( n x 2* ) = 2n consumer tracks in total,
  there are m listeners, so ( m * 2n ) consumer tracks are created & handled by mediasoup router ( 2mn ).

  2* : for video, 1 : for audio

  so 4096 tracks are handled, now the session length is 10 minutes,
  $0.15/min for each track is charged,
  so the total session cost is ( 4096 x 0.000001984 x 10 ) = $0.08

  Price Comparison :
  Vide - $0.8
  Daily.co - $12.64

  Droplet Cost : $0.001984167/min
  can handle : ( 4 x 500 ) = 2000 consumers tracks,

  Droplet Cost : $0.000000992/consumer-min

 -->
