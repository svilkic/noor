import React from "react";

export const Card = (props) => {
  return (
    <div className={`service-card ${props.className}`}>
      <img
        src={props.image}
        className="image"
        alt={props.alt}
        width="35"
        height="35"
      />
      <div className="service-card-info">
        <h5>{props.main}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
