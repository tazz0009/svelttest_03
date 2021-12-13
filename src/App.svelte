<script>
  import Navbar from "./shared/Navbar.svelte";

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
    <h1>Current Polls</h1>
    <div class="cards">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class="card-link">Card link</span>
          <span class="card-link">Another link</span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class="card-link">Card link</span>
          <span class="card-link">Another link</span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class="card-link">Card link</span>
          <span class="card-link">Another link</span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class="card-link">Card link</span>
          <span class="card-link">Another link</span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <span class="card-link">Card link</span>
          <span class="card-link">Another link</span>
        </div>
      </div>
    </div>
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
  .cards {
    display: table;
    clear: both;
  }
  .card {
    float: left;
    width: 31.3%;
    margin: 1%;
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 900px) {
    .card {
      width: 48%;
      margin: 1%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .card {
      width: 98%;
      margin: 1%;
      display: block;
    }
  }

  .form {
    margin: 10px 20%;
    padding-top: 20px;
  }
  .row {
    margin-bottom: 20px;
  }
</style>
