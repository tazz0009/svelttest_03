<script>
  import PollStore from "../stores/PollStore";
  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="poll">
  <div class="">
    <h5 class="">{poll.question}</h5>
    <h6 class="">Total votes : {totalVotes}</h6>

    <div class="votes">
      <div class="side">
        <div>5 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-5" />
        </div>
      </div>
      <div class="side right">
        <div>150</div>
      </div>
      <div class="side">
        <div>4 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-4" />
        </div>
      </div>
      <div class="side right">
        <div>63</div>
      </div>
    </div>

    <button type="button" class="btn btn-warning">Delete Card</button>
  </div>
</div>

<style>
  .poll {
    border: 1px solid black;
    border-radius: 6px;
    width: 48%;
    margin: 1%;
    float: left;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  /* Three column layout */
  .side {
    float: left;
    width: 15%;
    margin-top: 10px;
  }

  .middle {
    float: left;
    width: 70%;
    margin-top: 10px;
  }

  /* Place text to the right */
  .right {
    text-align: right;
  }

  /* Clear floats after the columns */
  .votes {
    margin-bottom: 10px;
  }

  .votes:after {
    content: "";
    display: table;
    clear: both;
  }

  .bar-5 {
    width: 60%;
    height: 18px;
    background-color: #2196F3;
  }
  .bar-4 {
    width: 30%;
    height: 18px;
    background-color: #f44336;
  }

  .poll:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 780px) {
    .poll {
      border: 1px solid green;
      border-radius: 6px;
      width: 98%;
      margin: 1%;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .poll {
      border: 1px solid red;
      border-radius: 6px;
      width: 31.3%;
      margin: 1%;
      float: left;
    }
  }
</style>
