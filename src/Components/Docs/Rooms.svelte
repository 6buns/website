<script>
</script>

<div class="relative z-20 pt-4 prose prose-stone dark:prose-dark">
  <p>A room is a collection of users interacting with each other.</p>
  <p>
    No Charge is levied on creation or updating rooms. Realtime data regarding
    rooms are charged and an additional $0.002 is added to the unit cost.
  </p>
  <p>Pricing Example :</p>
  <p>
    A room of 4 users, wherein all 4 of them have camera on, therefore, total
    number of consumers is 24,
  </p>
  <!-- <img
    src="/roomsCalculation.png"
    alt="24 * 20 * 0.005 = $2.4 (basic realtime stats)" /> -->

    <p
      class="bg-stone-50 w-full flex justify-center items-center py-4 px-2 rounded-md">{`$$24 * 20 * 0.005 = $2.4 \\textit{ (basic realtime stats)}$$`}</p>
  <p>Base Realtime Included which are free,</p>
  <ul>
    <li>Consumer Count</li>
    <li>Producer Count</li>
  </ul>
  <h3 id="realtime-data">Realtime Data</h3>
  <p><em>(for which charge is applied)</em></p>
  <ul>
    <li>
      <h4 id="participants-data">Participant's Data</h4>
      <ul>
        <li>
          <h5 id="pipe-transport-data">Pipe Transport Data</h5>
          <img src="/pipeTransport.png" alt="pipe transport stats" />
        </li>
        <li>
          <h5 id="webrtc-transport-data">WebRTC Transport Data</h5>
          <img src="/webRTCTransports.png" alt="webrtc transport stats" />
        </li>
      </ul>
    </li>
    <li>
      <h4 id="consumers-data">Consumer's Data</h4>
      <img src="/consumer.png" alt="Consumers Stats" />
    </li>
  </ul>
</div>
