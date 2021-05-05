import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import QuestionCard from "../components/QuestionCard";

const Onama = () => {
  return (
    <div>
      <Header
        page="O Nama"
        mainMessage="Saznajte više o NOOR Creators"
        shortMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />

      <div
        className="section bg-white-gray pb1"
        style={{ overflow: "initial" }}
      >
        <div className="container">
          {/* <img
            src="/images/laptop-clouds.png"
            style={{ position: "relative", marginTop: "-17em" }}
          /> */}
          <h2 className="text-start">
            Ko smo mi?
          </h2>
          <p className="text-start paragraph muted">
          NOOR creators je  mali tim ljudi koji svojim kreativnim razmišljanjem i umećem žele da pomognu malim biznisima da ostvare svoje snove na digitalnom polju. Nas pokreće ljubav prema poslu kojim se bavimo, kao i želja da sve svoje ideje pretočimo u realnost. Slušamo vaše ideje, želje i ciljeve i kreiramo digitalne priče, koje čine da svaki brend bude jedinstven i upečatljiv. 
          </p>
          
        </div>
      </div>

      <div className="section  bg-gray">
        <div
          className="container d-grid grid-2"
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          <img className="w-100" src="/images/twophones.png" />
          <div>
            <h2 className="heading-2 text-start ">Naše vrednosti</h2>
            <p className="text-start paragraph muted">
             Vrednosti koje Noor tim nudi su od ključnog značaja za stvaranje brenda.
            </p>
            <QuestionCard
              color="darkblue"
              question="Kvalitet"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra. Praesent condimentum magna sit amet dui interdum sodales. Ut tincidunt ipsum leo, nec hendrerit odio"
            />
            <QuestionCard
              color="orange"
              question="Uspeh"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra. Praesent condimentum magna sit amet dui interdum sodales. Ut tincidunt ipsum leo, nec hendrerit odio"
            />
            <QuestionCard
              color="green"
              question="100% Zadovoljstvo"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra. Praesent condimentum magna sit amet dui interdum sodales. Ut tincidunt ipsum leo, nec hendrerit odio"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Onama;
