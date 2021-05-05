import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ breif, mainMessage,shortMessage,btn,btnLink }) => {
  return (
    <div className="footer bg-gradiant-primary">
      <img src="/images/border3.svg" className="border-footer" />
      <footer className="mb4">
        <div className="container w-container">
          {breif&&<h3 className="heading-3">{breif}</h3>}
          <h1 className="heading-1">
           {mainMessage}
          </h1>
          <p className="paragraph">
            {shortMessage}
          </p>
          {btn && (
            <Link to={btnLink} className="btn btn-lg btn-primary w-button">
              {btn}
            </Link>
          )}
        </div>

        {/* <div>
          <div className="circle-el"></div>
          <div className="circle-el-1"></div>
          <div className="cube-el"></div>
          <div className="cube-el-2"></div>
          <div className="line-el-2"></div>
          <div className="line-el"></div>
          <div className="circle-el-2"></div>
        </div> */}
      </footer>
      <div>
        Copyright © {new Date().getFullYear()} Noor. All rights reserved.
      </div>
    </div>
  );
};
