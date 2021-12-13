<script>
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";
</script>

<h1>Current Polls</h1>
<div class="cards">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style>
  .cards {
  }

  @media screen and (max-width: 425px) {
  }

  @media screen and (max-width: 1000px) {
  }
</style>
