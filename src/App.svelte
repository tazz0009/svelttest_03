<script>
  import Navbar from "./shared/Navbar.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  export let navItems;
  let activeNav = navItems[0];

  const changedNavItem = (e) => {
    // console.log(e.detail);
    activeNav = e.detail;
  };

  const handleAdd = () => {
    activeNav = "Current Polls";
  }
</script>

<header>
  <Navbar {navItems} {activeNav} on:changedNavItem={changedNavItem} />
</header>
<main>
  {#if activeNav == "Current Polls"}
    <PollList />
  {:else if activeNav == "Add New Poll"}
    <CreatePollForm on:add={handleAdd}/>
  {/if}
</main>

<style>
  main {
    margin: 10px;
  }
</style>
