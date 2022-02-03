<script>
  import { Link, Route, Router } from "svelte-navigator";
  import ActiveSpeaker from "../Components/Docs/ActiveSpeaker.svelte";
  import Consumer from "../Components/Docs/Consumer.svelte";
  import Rooms from "../Components/Docs/Rooms.svelte";
  import { onMount } from "svelte";
  import Menu from "../Components/Menu.svelte";
  import ZoomClone from "../Components/Docs/zoomClone.svelte";
  import ClubhouseClone from "../Components/Docs/clubhouseClone.svelte";

  onMount(() => {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);

    script.onload = () => {
      MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
        svg: { fontCache: "global" },
      };
    };
  });
</script>

<Router>
  <Menu />
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <div
      class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-8 px-8 overflow-y-auto">
      <nav class="lg:text-sm lg:leading-6 relative">
        <ul>
          <li class="mt-12 lg:mt-8">
            <h5
              class="mb-8 lg:mb-3 font-semibold text-stone-900 dark:text-stone-200">
              Terms
            </h5>
            <ul
              class="space-y-6 lg:space-y-2 border-l border-stone-100 dark:border-stone-800">
              <li>
                <Link
                  to="consumer"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 dark:hover:border-stone-500 text-stone-700 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
                  >Consumer</Link>
              </li>
              <li>
                <Link
                  to="rooms"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 dark:hover:border-stone-500 text-stone-700 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
                  >Room</Link>
              </li>
              <li>
                <Link
                  to="activeSpeaker"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 dark:hover:border-stone-500 text-stone-700 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
                  >Active Speaker</Link>
              </li>
            </ul>
          </li>
          <li class="mt-12 lg:mt-8">
            <h5
              class="mb-8 lg:mb-3 font-semibold text-stone-900 dark:text-stone-200">
              Guides
            </h5>
            <ul
              class="space-y-6 lg:space-y-2 border-l border-stone-100 dark:border-stone-800">
              <li>
                <Link
                  to="zoomClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 dark:hover:border-stone-500 text-stone-700 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
                  >Zoom clone with Vanilla JS</Link>
              </li>
              <li>
                <Link
                  to="clubhouseClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 dark:hover:border-stone-500 text-stone-700 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
                  >Clubhouse clone with React</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <main class="lg:pl-[19.5rem]">
      <Route path="/consumer" component={Consumer} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/activeSpeaker" component={ActiveSpeaker} />
      <Route path="/zoomClone" component={ZoomClone} />
      <Route path="/clubhouseClone" component={ClubhouseClone} />
    </main>
  </div>
</Router>
