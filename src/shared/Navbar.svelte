<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let navItems;
  export let activeNav;
  
  let responsive = false;

  const handleNavClick = (navName) => {
    console.log("navName", navName);
    activeNav = navName;
    dispatch("changedNavItem", navName);
    responsive = !responsive;
  };

  const clickHamberMenu = () => {
    responsive = !responsive;
  };
</script>

<nav class="">
  <div class="topnav" class:responsive id="myTopnav">
    <span class="material-icons logo"> view_in_ar </span>
    {#each navItems as item}
      <span class:active={item == activeNav} on:click={handleNavClick(item)}
        >{item}</span
      >
    {/each}
    <span class="material-icons menu-icon" on:click={clickHamberMenu}> menu </span>
  </div>
</nav>

<style>
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #333;
    overflow: hidden;
  }
  /* Style the links inside the navigation bar */
  .topnav span {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  /* Add an active class to highlight the current page */
  .topnav span.active {
    background-color: #04aa6d;
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .menu-icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .topnav span:not(:first-child) {
      display: none;
    }
    .topnav span.menu-icon {
      float: right;
      display: block;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive span.menu-icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive span {
      float: none;
      display: block;
      text-align: left;
    }
  }

.topnav span.logo {
  font-size: large;
  color: burlywood;
}
</style>
