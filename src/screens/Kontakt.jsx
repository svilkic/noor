import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

const Kontakt = () => {
  return (
    <div>
      <Header
        page="Kontaktirajte nas"
        mainMessage="Potpune Usluge Digitalnog Marketinga"
        shortMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />

      <div className="section bg-white-gray pb1">
        <div className="container">
          <div className="d-grid grid-3 line-1-5 ">
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="Kontakt broj"
              description="+(381)653450133"
            />
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="Email adresa"
              description="contact.noorcreators@gmail.com"
            />
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="Radno vreme"
              description="Ponedeljak - Petak : 10:00 – 17:00pm"
            />
          </div>
        </div>
      </div>

      <div className="section bg-gray">
        <div className="container">
          <h2 className="heading-2 text-center ">Stupite u kontakt</h2>
          <p className="mb3">
            Interested in driving growth? Have a general question? We’re just an
            email away.
          </p>
          <div>
            <form className="m-auto max-width-70 text-end">
              <div className="d-grid grid-2">
                <input
                  className="mb1 shadow-low"
                  type="text"
                  placeholder="Puno ime"
                />
                <input
                  className="mb1 shadow-low mb1"
                  type="email"
                  placeholder="Email adresa"
                />
                <textarea
                  className="shadow-low mb1 grid-1-3"
                  placeholder="Poruka"
                  rows="4"
                  cols="50"
                />
              </div>
              <input
                className="btn btn-lg btn-secondary shadow-low  "
                type="submit"
                value="Posalji"
              />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kontakt;
