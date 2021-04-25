import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container w-container">
        <h3 className="heading">Digitalni&nbsp; marketing</h3>
        <h1 className="heading-1">Potpune Usluge Digitalnog Marketinga</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <a href="#" className="btn btn-primary w-button">
          Usluge
        </a>
      </div>
      <div className="div-block"></div>
      <div className="div-block-3">
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