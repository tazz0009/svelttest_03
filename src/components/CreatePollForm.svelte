<script>
  import PollStore from "../stores/PollStore";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = () => {
    console.log(fields);
    valid = true;
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long.";
    } else {
      errors.question = "";
    }

    if (fields.answerA.trim().length < 2) {
      valid = false;
      errors.answerA = "Answer A cannot be empty.";
    } else {
      errors.answerA = "";
    }

    if (fields.answerB.trim().length < 2) {
      valid = false;
      errors.answerB = "Answer A cannot be empty.";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    } else {
      console.log(errors);
    }
  }
</script>

<h1>Add New Poll</h1>
<div class="form">
  <form on:submit|preventDefault={submitHandler}>
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an poll.</p>
      <hr />

      <div class="label">
        <label for="question"><b>Question</b></label>
        <div class="error">{errors.question}</div>
      </div>
        <input
        type="text"
        placeholder="Enter Question"
        name="question"
        id="question"
        bind:value={fields.question}
      />
      <div class="label">
        <label for="answer-a"><b>Answer A</b></label>
        <div class="error">{errors.answerA}</div>
      </div>
      <input
        type="text"
        placeholder="Enter Answer A"
        name="answer-a"
        id="answer-a"
        bind:value={fields.answerA}
      />
      <div class="label">
        <label for="answer-b"><b>Answer B</b></label>
        <div class="error">{errors.answerB}</div>
      </div>
      <input
        type="text"
        placeholder="Enter Answer B"
        name="answer-b"
        id="answer-b"
        bind:value={fields.answerB}
      />
      <hr />
      <button type="submit" class="registerbtn">Add Poll</button>
    </div>
  </form>
</div>

<!-- markup (zero or more items) goes here -->

<style>
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .error {
    color: crimson;
  }

  .form {
    padding: 16px;
  }
  /* Full-width input fields */
  input[type="text"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus {
    background-color: #ddd;
    outline: none;
  }

  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for the submit/register button */
  .registerbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .registerbtn:hover {
    opacity: 1;
  }
</style>
