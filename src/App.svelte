<script>
  import Navbar from "./shared/Navbar.svelte";
  import PollList from "./components/PollList.svelte";

  export let navItems;
  let activeNav = navItems[0];

  const changedNavItem = (e) => {
    // console.log(e.detail);
    activeNav = e.detail;
  };
</script>

<header>
  <Navbar {navItems} on:changedNavItem={changedNavItem} />
</header>
<main>
  {#if activeNav == "Current Polls"}
    <PollList />
  {:else if activeNav == "Add New Poll"}
    <h1>Add New Poll</h1>
    <div class="form">
      <div class="row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg">Email</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </div>
      </div>
      <div class="row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg">Email</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </div>
      </div>
      <div class="row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg">Email</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </div>
      </div>
      <div class="row">
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    margin: 10px;
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .form {
      margin: 10px 20%;
      padding-top: 20px;
    }
    .row {
      margin-bottom: 20px;
    }
  }
</style>
