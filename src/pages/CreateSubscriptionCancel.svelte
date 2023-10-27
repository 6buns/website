<script>
import { addDoc, collection } from "firebase/firestore";

import { useNavigate } from "svelte-navigator";
import { db } from "../../firebase";

let cancelReason = "";

const navigate = useNavigate();

const submitCancellationReason = async () => {
  console.log(cancelReason);
  await addDoc(collection(db, "cancelReasons"), {
    reason: cancelReason,
  });
  navigate("/");
};
</script>

<div class="w-full h-full -my-4 flex flex-col items-center justify-center">
  <div class="w-full bg-white rounded-2xl shadow-md p-4 grid grid-cols-2 justify-center items-start">
    <h3 class="col-span-2 mb-4 text-center text-3xl text-red-500 font-serif font-bold">
      <span class="block">Any particular reason to cancel the subscription ?</span>
    </h3>
    <textarea bind:value="{cancelReason}" class="col-span-2 text-lg p-4 mb-4 rounded-lg" name="cancellationReason" id="cancellationReason" cols="30" rows="3" placeholder="Write your reason here."></textarea>
    <div class="col-span-2 w-full flex items-center justify-center gap-4">
      <button on:click="{submitCancellationReason}" class="bg-stone-500 text-stone-50 px-4 py-2 rounded-lg shadow-md cursor-pointer" id="checkout-and-portal-button" type="submit">Submit</button>
      <button on:click="{() => navigate('/')}" class="bg-green-500 text-stone-50 px-4 py-2 rounded-lg shadow-md cursor-pointer" id="checkout-and-portal-button" type="submit">Back to home</button>
    </div>
  </div>
</div>
