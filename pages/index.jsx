import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <br />
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="message">Your Feedback</label>
          <br />
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button>Send Feed back</button>
      </form>
    </div>
  );
}

export default HomePage;
