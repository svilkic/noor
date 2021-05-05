import React from "react";

export const Card = (props) => {
  return (
    <div className={`bg-primary-light service-card ${props.className && props.className}`}>
      {props.icon && props.icon}
      {props.image && (
        <img
          className="image"
          src={props.image}
          alt={props.alt}
          width="35"
          height="35"
        />
      )}
      <div className="">
        <h4>{props.main}</h4>
        <p className="muted">{props.description}</p>
      </div>
    </div>
  );
};
