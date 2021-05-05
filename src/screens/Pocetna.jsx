import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import {
  MdTv,
  MdFormatColorFill,
  MdPeople,
  MdSentimentSatisfied,
  MdGroupAdd,
  MdTrendingUp,
  MdEmail,
  MdFormatShapes,
} from "react-icons/md";

const Pocetna = () => {
  return (
    <div>
      <Header
        page="Digitalni&nbsp; marketing"
        mainMessage="NOOR CREATORS"
        shortMessage="Mi kreiramo vašu digitalnu priču"
        btn="Saznaj više"
        btnLink="/onama"
      />
      <div className="section bg-white-gray">
        <div className="container d-flex text-center flex-column">
          <h2 className="heading-2 mb2">
            Usluge koje nudimo
          </h2>
          <div className="d-grid grid-4">
            <Card
              icon={<MdFormatColorFill style={{ fontSize: "35px" }} />}
              main="Fotografija & Videografija"
              description="Profesionalne usluge foto i video sadržaja."
            />
            <Card
              icon={<MdPeople style={{ fontSize: "35px" }} />}
              main="Web Dizajn & Web Programiranje"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <Card
              icon={<MdTrendingUp style={{ fontSize: "35px" }} />}
              main="Kreiranje Vizuelnog Brend Identiteta"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdSentimentSatisfied style={{ fontSize: "35px" }} />}
              main="SEO"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdFormatShapes style={{ fontSize: "35px" }} />}
              main="Grafički Dizajn"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdGroupAdd style={{ fontSize: "35px" }} />}
              main="Kreiranje Sadržaja Za Društvene Mreže"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdTv style={{ fontSize: "35px" }} />}
              main="Vođenje Društvenih Mreža"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdEmail style={{ fontSize: "35px" }} />}
              main="Online Oglašavanje"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdEmail style={{ fontSize: "35px" }} />}
              main="Copywriting"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdEmail style={{ fontSize: "35px" }} />}
              main="Krairanje Marketing Strategije"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<MdEmail style={{ fontSize: "35px" }} />}
              main="Online Konsultacije"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          
          </div>
        </div>
      </div>

      <div className="section bg-gray">
        <div className="container ">
          <div
            className="d-grid grid-2 "
            style={{ gridTemplateColumns: "2fr 1fr" }}
          >
            <img src="/images/laptop.png" loading="lazy" alt="" />
            <div className="div-block-2">
              <h1 className="heading-4">Započnimo Kreiranje vaše digitalne priče</h1>

              <p className="text-start paragraph-2 muted">
                Zakažite online konsultacije i saznajte koje su usluge potrebne Vašem brendu.
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
