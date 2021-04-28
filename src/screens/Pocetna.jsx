import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

const Pocetna = () => {
  return (
    <div>
      <Header
        page="Digitalni&nbsp; marketing"
        mainMessage="Potpune Usluge Digitalnog Marketinga"
        shortMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        btn="Nase usluge"
      />
      <div className="section bg-white-gray">
        <div className="container d-flex text-center flex-column">
          <h2 className="heading-2 mb2">
            Želite Da Vaš Brend Bude
            <br />
            Bolje Primećen?
          </h2>
          <div className="d-grid grid-4">
            <Card
              image=""
              alt=""
              main="Brend Dizajn &amp; Strategija"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Vođenje drustvenih mreža"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Brend Dizajn &amp; Strategija"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Vođenje drustvenih mreža"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Brend Dizajn &amp; Strategija"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Vođenje drustvenih mreža"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Brend Dizajn &amp; Strategija"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              image=""
              alt=""
              main="Vođenje drustvenih mreža"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>

      <div className="section bg-gray">
        <div className="container ">
          <div
            className="d-grid grid-2 "
            style={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <img src="/images/laptop.png" loading="lazy" alt="" />
            <div className="div-block-2">
              <h1 className="heading-4">Započnite vašu marketing kampanju</h1>

              <p className="text-start paragraph-2 muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
              <Link to="#" className="btn btn-primary w-button">
                Zakažite konsultacije
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/images/border1.svg"
          loading="lazy"
          alt=""
          className="image-3"
        />
      </div>

      <div className="section bg-white-gray">
        <div className="container">
          <h2 className="heading-2 text-center mb-3">Neki Od Komentara</h2>
          <div className="d-grid grid-3 line-1-5 ">
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="Debra Becker"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            />
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="Angel Witicker"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            />
            <Card
              className="line-height-2"
              image=""
              alt=""
              main="John Wise"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            />
          </div>
        </div>
      </div>

      <Footer callBtn="Zakažite konsultacije" />
    </div>
  );
};

export default Pocetna;
