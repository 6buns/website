<script>
</script>

<div class="relative z-20 pt-4 pb-10 prose prose-stone dark:prose-dark">
  <p>
    Active Speaker is the most dominant speaker among users. In a room of 10
    users, where each user has his camera on, it may get confusing, when each of
    them, is speaking. Therefore, in order to keep a room communication proper,
    one has to figure out users who are passive speakers, and mute them. Or, you
    could highlight the active speaker, with a border, so that users know a user
    is speaking.
  </p>
  <p>
    It is advised to keep producers (users with camera/mic on) count below 6,
    cause if it increases, then each user would have download 6 video streams
    which would require huge bandwidth, and end users could have performance
    lag.
  </p>
  <p>You could pause producers, when,</p>
  <ul>
    <li>their chance of speaking is over,</li>
    <li>they go silent,</li>
    <li>Consumers handled by each user is greater than 12,</li>
  </ul>
  <!-- <img src="/activeSpeaker_1.png" alt="" /> -->
  <p
    class="bg-stone-50 w-fit flex justify-center items-center py-2 rounded-md">
    {`$$ \\text{Consumers handled by each user} = \\text{all consumers handled by room} \\div \\text{users in a room} $$`}
  </p>
</div>
