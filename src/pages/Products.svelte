<script>
import Many2many from "../Components/home/products/Many2many.svelte";
import Many2manyAudio from "../Components/home/products/Many2manyAudio.svelte";
import OnetooneWebrtc from "../Components/home/products/OnetooneWebrtc.svelte";
import Menu from "../Components/Menu.svelte";
</script>

<main class="relative pt-16 snap-y snap-mandatory bg-white text-skin-base flex-initial">
  <Menu />

  <section id="products" class="w-full snap-center grid grid-cols-1 grid-rows-3 items-center justify-items-center">
    <Many2many />
    <Many2manyAudio />
    <OnetooneWebrtc />
  </section>
</main>
