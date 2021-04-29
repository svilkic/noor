import React from "react";

export const Job = ({ img, jobName, description }) => {
  return (
    <div className="jobCard ">
      <img src={img} />
      <h4 className="text-start">{jobName}</h4>
      <p className="text-start paragraph muted">{description}</p>
    </div>
  );
};
