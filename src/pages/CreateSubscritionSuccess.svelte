<script>
export let session_id;
</script>

<div class="w-full h-full -my-4 flex flex-col items-center justify-center">
  <div class="w-full bg-white rounded-2xl shadow-md p-4 grid grid-cols-2 justify-center items-start">
    <h3 class="col-span-2 mb-4 text-center text-6xl text-green-500 font-serif font-bold">Subscription to Single plan successful!</h3>
    <form action="https://us-central1-vide-336112.cloudfunctions.net/createPortalSession" class="col-span-2 w-full flex items-center justify-center" method="POST">
      <input type="hidden" id="session-id" name="sessionId" value="{session_id}" />
      <button class="bg-green-500 text-stone-50 px-4 py-2 rounded-lg shadow-md cursor-pointer" id="checkout-and-portal-button" type="submit">Manage your billing information</button>
    </form>
  </div>
</div>
