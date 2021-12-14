<script>
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  console.log($PollStore);
</script>

<h1>Current Polls</h1>
<div class="cards">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style>
</style>
