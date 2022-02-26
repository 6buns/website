<script>
  import { Link, Route, Router } from "svelte-navigator";
  import ActiveSpeaker from "../Components/Docs/ActiveSpeaker.svelte";
  import Consumer from "../Components/Docs/Consumer.svelte";
  import Rooms from "../Components/Docs/Rooms.svelte";
  import { onMount } from "svelte";
  import Menu from "../Components/Menu.svelte";
  import ZoomClone from "../Components/Docs/zoomClone.svelte";
  import ClubhouseClone from "../Components/Docs/clubhouseClone.svelte";

  MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
    svg: { fontCache: "global" },
  };
</script>

<Router>
  <Menu />
  <div class="w-full h-auto mx-auto px-8 md:px-16">
    <div
      class="lg:block lg:fixed lg:z-20 lg:inset-0 lg:top-16 lg:left-[max(0px,calc(50%-45rem))] lg:right-auto lg:w-[19.5rem] pb-8 px-8 md:px-16 overflow-y-auto">
      <nav class="lg:text-sm lg:leading-6 relative">
        <ul>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-stone-900">Terms</h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-stone-100">
              <li>
                <Link
                  to="consumer"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Consumer</Link>
              </li>
              <li>
                <Link
                  to="rooms"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Room</Link>
              </li>
              <li>
                <Link
                  to="activeSpeaker"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Active Speaker</Link>
              </li>
            </ul>
          </li>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-stone-900">Guides</h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-stone-100">
              <li>
                <Link
                  to="zoomClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Zoom clone with Vanilla JS</Link>
              </li>
              <li>
                <Link
                  to="clubhouseClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
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

