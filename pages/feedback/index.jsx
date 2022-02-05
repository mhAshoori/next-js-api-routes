//import fs from 'fs'

import React, { useEffect, useState } from "react";
//import {  } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) =>  response.json() )
      .then((data) => {
       // console.log(data+'the id is '+id);
        setFeedbackData(data.feedback);
      });
    // console.log(feedbackData);
  }
  useEffect(() => {
    // console.log(feedbackData)
  }, [feedbackData]);

  return (
    <Fragment>
      <h1>Feedbacks</h1>
      {feedbackData && <h2>{feedbackData.email}</h2>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <br />
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
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
