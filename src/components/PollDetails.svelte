<script>
  import PollStore from "../stores/PollStore";
  export let poll;
  let percentA;
  let percentB;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: {
    if (totalVotes == 0) {
      percentA = 0;
      percentB = 0;
    } else {
      percentA = Math.floor((100 / totalVotes) * poll.votesA);
      percentB = Math.floor((100 / totalVotes) * poll.votesB);
    }
  }

  const handleVote = (target, id) => {
    console.log("target", target);
    console.log("id", id);
    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];
      let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
      if (target == "a") {
        upvotedPoll.votesA++;
      }
      if (target == "b") {
        upvotedPoll.votesB++;
      }
      return copiedPolls;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
  };
</script>

<div class="poll">
  <div class="pollIn">
    <div class="">
      <h5 class="">{poll.question}</h5>
      <h6 class="">Total votes : {totalVotes}</h6>
      <div class="votes">
        <div class="sideLeft answer" on:click={handleVote("a", poll.id)}>
          <div>{poll.answerA}</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-5" style="width: {percentA}%;" />
          </div>
        </div>
        <div class="sideRight right">
          <div>{poll.votesA}</div>
        </div>
        <div class="sideLeft answer" on:click={handleVote("b", poll.id)}>
          <div>{poll.answerB}</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-4" style="width: {percentB}%;" />
          </div>
        </div>
        <div class="sideRight right">
          <div>{poll.votesB}</div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-warning"
      on:click={handleDelete(poll.id)}>Delete Vote</button
    >
  </div>
</div>

<style>
  .pollIn {
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .poll {
    box-sizing: border-box;
    width: 50%;
    float: left;
  }

  /* Three column layout */
  .sideRight {
    float: left;
    width: 10%;
    margin-top: 10px;
  }

  .sideLeft {
    float: left;
    width: 20%;
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

  .answer {
    cursor: pointer;
  }

  .votes:after {
    content: "";
    display: table;
    clear: both;
  }

  .bar-5 {
    height: 18px;
    background-color: #2196f3;
  }
  .bar-4 {
    height: 18px;
    background-color: #f44336;
  }

  .poll:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 780px) {
    .poll {
      box-sizing: border-box;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .poll {
      box-sizing: border-box;
      width: 33.3%;
      float: left;
    }
  }
</style>
