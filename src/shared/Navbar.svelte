<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  
  export let navItems;
  let activeNav = navItems[0];
  
  const handleNavClick = (navName) => {
    // console.log("navName", navName);
    activeNav = navName;
    dispatch('changedNavItem', navName);
  };
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="logo">
      <span class="material-icons"> important_devices </span>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#each navItems as item}
          <li class="nav-item">
            <span
              class="nav-link"
              class:active={activeNav == item}
              on:click={() => handleNavClick(item)}>{item}</span
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .logo {
    margin: 10px;
  }
  .nav-link {
    padding: 5px 5px;
  }
  .nav-link.active {
    color: whitesmoke !important;
    background: rgb(148, 147, 147);
    border-radius: 6px;
  }
</style>
