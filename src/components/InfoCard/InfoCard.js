import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
  const { items } = props.artists;
  return (
    <div className="infocard-container">
      <h1>{props.title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index + 1}.
            <img src={item.images[0].url} alt="artist"/>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoCard;
