<script>
  import { Link } from "svelte-navigator";

  export let id;
</script>

<div class="flex flex-col items-start">
  <nav
    class="py-4 flex flex-row items-center justify-evenly space-x-2">
    <Link class="text-xs hover:text-green-500" to="/">Services</Link>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd" />
    </svg>
    <Link class="text-xs hover:text-green-500" to={`/${id}`}>{id}</Link>
  </nav>
  <div class="">

  </div>
</div>
