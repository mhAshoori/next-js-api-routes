//import fs from 'fs'

import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
function FeedbackPage(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Fragment>
      <h1>Feedbacks</h1>
      <ul>
        {props.feedbackItems.map((item) => (
          <div key={item.id}>
            <li>{item.email}</li>
            <li>{item.text}</li>
            <br />
          </div>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
