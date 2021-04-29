import React from "react";

export const Card = (props) => {
  return (
    <div className={`service-card ${props.className && props.className}`}>
      {props.icon && props.icon}
      {props.img && (
        <img
          src={props.image}
          className="image"
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
