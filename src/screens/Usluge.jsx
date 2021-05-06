import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { usluge } from "../services/MojgeUsluge";
import QuestionCard from '../components/QuestionCard'

const Usluge = ({match,history}) => {

  useEffect(()=>{
  },[usluge]);

  return (
    <div>
      <Header
        page="Usluge"
        mainMessage="Usluge Koje Nudimo"
      />

      <div
        className="section bg-white-gray pb1"
        style={{ overflow: "initial" }}
      >
        <div className="container">
          {usluge.map(u => (
            <QuestionCard className="shadow-soft" key={u.id} question={u.name} color={u.color} answer={u.longDescription} />
          ))}
         
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
