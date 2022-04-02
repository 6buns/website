<script>
import { Link, Route, Router } from "svelte-navigator";
import Menu from "../Components/Menu.svelte";
import GettingStarted from "../../Docs/Scalable_Peer/GettingStarted.svx";
import Setup from "../../Docs/Scalable_Peer/Setup.svx";
import Events from "../../Docs/Scalable_Peer/Events.svx";
import Methods from "../../Docs/Scalable_Peer/Methods.svx";
</script>

<Router>
  <Menu />
  <div class="w-full h-auto mx-auto px-8 md:px-16">
    <div
      class="hidden lg:block lg:fixed lg:z-20 lg:inset-0 lg:top-16 lg:left-[max(0px,calc(50%-45rem))] lg:right-auto lg:w-[19.5rem] pb-8 px-8 md:px-16 overflow-y-auto">
      <nav class="lg:text-sm lg:leading-6 relative">
        <ul>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-stone-900">
              Getting Started
            </h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-stone-100">
              <Link to="/docs#installation">
                <li>
                  <a
                    href="#installation"
                    class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                    >Installation</a>
                </li>
              </Link>
              <Link to="setup">
                <li>
                  <a
                    href="#setup"
                    class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                    >Setup</a>
                </li>
              </Link>
              <Link to="events">
                <li>
                  <div
                    class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900">
                    Events
                  </div>
                </li>
              </Link>
              <Link to="methods">
                <li>
                  <a
                    href="#setup"
                    class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                    >Methods</a>
                </li>
              </Link>
            </ul>
          </li>
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-stone-900">Guides</h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-stone-100">
              <li>
                <Link
                  to="omegleClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Omegle Clone</Link>
              </li>
              <li>
                <Link
                  to="clubhouseClone"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Clubhouse clone</Link>
              </li>
              <li>
                <Link
                  to="chessGame"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Chess Game with video</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <main class="lg:pl-[19.5rem]">
      <div
        class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <div class="relative z-20 pb-10 prose prose-stone dark:prose-dark">
          <Route path="/" component="{GettingStarted}" />
          <Route path="/setup" component="{Setup}" />
          <Route path="/events" component="{Events}" />
          <Route path="/methods" component="{Methods}" />
        </div>
      </div>
    </main>
  </div>
</Router>
