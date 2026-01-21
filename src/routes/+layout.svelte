<script>
  import "./layout.css";

  let { children } = $props();
</script>

<div class="p-4 max-w-250 mx-auto">
  {@render children()}
</div>
