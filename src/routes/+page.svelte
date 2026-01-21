<script>
  import { goto } from "$app/navigation";
  import CardResep from "$lib/comps/CardResep.svelte";

  const { data } = $props();
</script>

<button
  class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
  onclick={() => {
    goto("/skep-eD3jwnf64nd3iown");
  }}>Skep</button
>

<div class="flex flex-col gap-6">
  {#each data.resepte as resep}
    <CardResep {resep} />
  {/each}
</div>
