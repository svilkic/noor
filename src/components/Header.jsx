import React from "react";
import { Link } from "react-router-dom";

const Header = ({ page, mainMessage, shortMessage,btn }) => {
  return (
    <div className="header">
      <div className="container w-container">
        {page && <h3 className="heading-3 mb2">{page}</h3>}
        <h1 className="heading-1">{mainMessage}</h1>
        <p className="paragraph">{shortMessage}</p>
        {btn && <Link to="#" className="btn btn-lg btn-primary w-button">
          {btn}
  </Link> }
      </div>
      <div className="border-header" />
      <div>
        <div className="circle-el"></div>
        <div className="circle-el-1"></div>
        <div className="cube-el"></div>
        <div className="cube-el-2"></div>
        <div className="line-el-2"></div>
        <div className="line-el"></div>
        <div className="circle-el-2"></div>
      </div>
    </div>
  );
};

export default Header;
