import { useRef, useState } from "react";
//import Link from 'next/link'
function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const [feedbacks, setFeedbacks] = useState([]);

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

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data.feedback));
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
      <br />
      <button onClick={loadFeedbackHandler}>Load Feedbacks</button>
      <ul>
        {feedbacks.map((item ) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
