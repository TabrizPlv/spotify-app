import React from "react";

function TrackContent(props) {
  const data = props.data;
  const { items } = data;
  return items.map((item, index) => (
    <li key={index}>
      {index + 1}.
      <img src={item.album.images[0].url} alt="artist" />
      {item.name}
    </li>
  ));
}

export default TrackContent;
