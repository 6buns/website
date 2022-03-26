<script>
  import { Link, Route, Router } from "svelte-navigator";
  import { onMount } from "svelte";
  import Menu from "../Components/Menu.svelte";
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
              <li>
                <a
                  href="#installation"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Installation</a>
              </li>
              <li>
                <a
                  href="#setup"
                  class="block border-l pl-4 -ml-px border-transparent hover:border-stone-400 text-stone-700 hover:text-stone-900"
                  >Setup</a>
              </li>
            </ul>
          </li>
          <!-- <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-stone-900">Code Examples</h5>
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
                  >Chess Game with live video</Link>
              </li>
            </ul>
          </li> -->
        </ul>
      </nav>
    </div>
    <main class="lg:pl-[19.5rem]">
      <div
        class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <div class="relative z-20 pb-10 prose prose-stone dark:prose-dark">
          <h1 id="getting-started">Getting Started</h1>
          <p>
            6buns <strong>scalable peer</strong> enables you to integrate webrtc
            peer connection, in simple lines of code. All you have to do is create
            event handlers, to handle events and some methods in order to initiate,
            or close connections. It can handle a video room of 4 peers, and an audio
            room of 8 peers. It uses our own backend to (STUN/TURN &amp; Signalling
            servers) to create RTCPeerconnections.
          </p>
          <h2 id="installation">Installation</h2>
          <p>
            The simplest and fastest way to get up and running with 6buns
            scalable peer from scratch is with using a CDN.
          </p>
          <h3 id="cdn">CDN</h3>
          <pre class="whitespace-normal break-words">
            <code class="language-html" lang="html"
              >&lt;script src="https://unpkg.com/6buns-client@1.0.9/dist/bundle.js" crossorigin /&gt;
            </code>
          </pre>
          <p>
            Put the script tag in your main index.html file, and you are good to
            go. All the events and methods are available once the script is
            loaded.
          </p>
          <h3 id="package-manager">Package Manager</h3>
          <p>
            There is another way of integrating scalable peer into your project,
            and that is by installing it using NPM.
          </p>
          <h4 id="using-npm">Using NPM</h4>
          <pre class="whitespace-normal break-words">
            <code class="language-shell" lang="shell"
              >npm install 6buns-client
              </code>
          </pre>
          <h4 id="using-yarn">Using Yarn</h4>
          <pre class="whitespace-normal break-words">
            <code class="language-shell" lang="shell"
              >yarn add 6buns-client
            </code>
          </pre>
          <p>
            Once the package is installed, you can start integrating it into
            your application. Node package can only be used if your app is
            client side rendering, if its server side rendering then you should
            opt in for using CDN.
          </p>
          <h2 id="setup">Setup</h2>
          <p>
            In order to create or manage all the webrtc connections, all you
            need is three lines of code.
          </p>

          <pre class="whitespace-normal break-words">
            <code>
              const bun &equals; new Bun&lpar;&lbrace; <span
                >apiKey&colon; "b2eb6c26-8695-45f2-8626-c08bebc83c56", room&colon; "abcdef"</span> &rbrace;&rpar;
            </code>
          </pre>
          <p>
            On the first line, we create a <strong>bun</strong> object which is used
            to handle events, which occur. Once an an object is created by providing
            desired options, which include:
          </p>
          <pre>
            <code class="language-javascript" lang="javascript"
              >const bun = new Bun&lpar;&lbrace;
    apiKey&colon; 'YOUR_API_KEY_GOES_HERE',
    room&colon; 'ROOM_NAME',
    hasVideo&colon; true, // true if camera on.
    hasAudio&colon; true, // true if mics on.
&rbrace;&rpar;
</code>
</pre>
          <p>
            Once the object is created, the bun object contacts the signalling
            server and joins the room. If the peers have already joined the
            room, it creates fresh peer connections and local media. Once
            successful peer connection is established then it fires,
          </p>
          <!-- <pre><code class="language-javascript" lang="javascript">bun.on('new-peer', (event) =&gt; { /** Your Function code goes here. */ })
</code></pre> -->
          <p>
            Here, event contains the peer connection object. You can add DOM
            element, or a video element, when a new peer is added.
          </p>
          <p>Similarly, whenever a peer leaves,</p>
          <!-- <pre><code class="language-javascript" lang="javascript">bun.on("peer-left", (peer_id) =&gt; { /** Your Function code goes here. */ })
</code></pre> -->
        </div>
      </div>
    </main>
  </div>
</Router>
