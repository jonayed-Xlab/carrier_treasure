import React, { useState, useEffect } from "react";
import axios from "axios";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedbackList();
  });

  const getFeedbackList = () => {
    axios.get("http://localhost:8080/api/feedback").then((res) => {
      setFeedbackList(res.data);
    });
  };

  return (
    <div>
      <main className="mt-5 pt-2">
        <div className="container mt-2">
          {feedbackList.map((feedback, index) => (
            <ul className="list-group">
              <li className="list-group-item">
                <span className="font-weight-bold">Email ID : </span>
                <span className="">{feedback.email}</span>
              </li>

              <li className="list-group-item">
                <span className="font-weight-bold">Message : </span> <br />
                <span className="mt-2">{feedback.message}</span>
              </li>
              <hr />
            </ul>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Feedback;
