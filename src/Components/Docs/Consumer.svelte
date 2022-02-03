<script>
  import { Link } from "svelte-navigator";
</script>

<div
  class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
  <div class="relative z-20 pb-10 prose prose-stone dark:prose-dark">
    <p>
      Consumer is the media stream of other users in the room, being received by
      the user. Total consumer count is the sum of all the consumers handled
      during the room session.
    </p>
    <p
      class="bg-stone-50 w-full flex justify-center items-center py-2 rounded-md">
      {`$$ \\text{Consumer Calculation Formula} = (N * M * 2)$$`}
    </p>
    where,
    <ul>
      <li><b>N</b> is number of users in the room,</li>
      <li>
        <b>M</b> is number of users producing media (
        <em>with their camera on, and not muted</em> ),
      </li>
      <li>
        <b>2</b> is the streams count that is being sent to media server (
        <i>one for video, and another for audio</i> )
      </li>
    </ul>

    <img
      src="/sequenceDiagram.png"
      class="scale-125"
      alt="Sequence Diagram of communication between room and media server" />
    <p>
      In the above room scenario, media stream from A's camera is being sent to
      our media server, from where it being sent to three other users who can
      view the stream. Pricing for this example,
    </p>
    <h3 id="pricing-example-1">Pricing Example 1</h3>
    <p>
      Cost Calculation Formula = <strong
        >(Consumers * Minutes) * Unit Cost</strong
      >, where unit cost is <strong>$0.005</strong> per consumer-min.
    </p>
    <!-- <img src="/pricingExample1_01.png" alt="" /> -->
    <p
      class="bg-stone-50 w-full flex justify-center items-center py-2 rounded-md">
      {`$$ (6 * 60) * $0.005 = $1.8 $$`}
    </p>
    <p>
      In a room of 3 users, and a duration of 60 minutes, where each user is
      able to see other 2 users video, and vice-versa. In total of 6 consumers,
      are handled by the media server.
    </p>
    <h3 id="pricing-example-2">Pricing Example 2</h3>
    <p>If you join a room of 100 users, and 6 of them have their camera on :</p>
    <!-- <img
      src="/pricingExample2_01.png"
      alt="(users in a room) * (users with camera/min on) * (1 for audio, 2 for video)" /> -->
    <p
      class="bg-stone-50 w-full flex justify-center items-center py-2 rounded-md">
      {`$$ (6 * 60) * $0.005 = $1.8 $$`}
    </p>
    <p>then the number of consumers handled by the room is</p>
    <!-- <img src="/pricingExample2_02.png" alt="100 * 6 * 2 = 1200" /> -->
    <p
      class="bg-stone-50 w-full flex justify-center items-center py-2 rounded-md">
      {`$$ \\text{(users in a room) * (users with camera/min on) * (1 for audio, 2 for video)} $$`}
    </p>
    <p>
      If the room is alive for 10 minutes, then the usage charge incurred is,
    </p>
    <!-- <img
      src="/pricingExample2_03.png"
      alt="1200 * 10 * 0.005 = $60 (basic realtime stats), 1200 * 10 * 0.0052 = $62.4 (advanced realtime stats)" /> -->
    <p
      class="bg-stone-50 w-full flex justify-center items-center py-2 rounded-md">
      {`$$ 1200 * 10 * 0.005 = $60 $$`}
    </p>
    <p>Total Cost incurred for this meeting is $60.</p>
  </div>
  <div
    class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
    <h5
      class="text-stone-900 font-semibold mb-4 text-sm leading-6 dark:text-stone-100">
      On this page
    </h5>
    <ul class="text-stone-700 text-sm leading-6">
      <li>
        <a
          href="#pricing-example-1"
          class="group flex items-start py-1 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
          >Pricing Example 1</a>
      </li>
      <li>
        <a
          href="#pricing-example-2"
          class="group flex items-start py-1 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-300"
          >Pricing Example 2</a>
      </li>
    </ul>
  </div>
</div>
