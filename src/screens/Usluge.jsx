import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { usluge } from "./MojgeUsluge";

const Usluge = ({match,history}) => {
  const [service,setService] = useState([]);

  useEffect(()=>{
    const serviceID = match.params.id;
     if(!usluge[serviceID]) history.push("/");
    setService(usluge[serviceID-1]);
  },[usluge]);

  return (
    <div>
      <Header
        page="Usluge"
        mainMessage={service.name}
        shortMessage={service.shortDescription}
      />

      <div
        className="section bg-white-gray pb1"
        style={{ overflow: "initial" }}
      >
        <div className="container">
          <h2 className="text-start">
            {service.title}
          </h2>
          <p className="text-start paragraph muted">
            {service.longDescription}
          </p>
         
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
