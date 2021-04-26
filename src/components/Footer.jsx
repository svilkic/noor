import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ callBtn }) => {
  return (
    <div className="footer bg-gradiant-primary">
      <img src="/images/border3.svg" className="border-footer" />
      <footer className="mb4">
        <div className="container w-container">
          <h3 className="heading-3">Počnimo zajedno</h3>
          <h1 className="heading-1">
            Spremni ste da napravite nešto novo? Hajde da počnemo!
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          {callBtn && (
            <Link to="#" className="btn btn-lg btn-primary w-button">
              Zakažite konsultacije
            </Link>
          )}
        </div>

        <div>
          <div className="circle-el"></div>
          <div className="circle-el-1"></div>
          <div className="cube-el"></div>
          <div className="cube-el-2"></div>
          <div className="line-el-2"></div>
          <div className="line-el"></div>
          <div className="circle-el-2"></div>
        </div>
      </footer>
      <div>
        Copyright © {new Date().getFullYear()} Noor. All rights reserved.
      </div>
    </div>
  );
};
