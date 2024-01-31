import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
  return (
    <div className="infocard-container">
      <h1>{props.title}</h1>
      <ul>
        {props.content}
      </ul>
    </div>
  );
}

export default InfoCard;
