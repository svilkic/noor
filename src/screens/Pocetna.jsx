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
import { usluge } from "../services/MojgeUsluge";

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
              description="Kompletna usluga dizajna, redizajna i izrade web sajta."
            />

            <Card
              icon={<MdTrendingUp style={{ fontSize: "35px" }} />}
              main="Grafički dizajn & vizuelni brend identitet"
              description="Usluga kreiranja upečatljivog i jedinstvenog vizuelnog brend identiteta."
            />
            <Card
              icon={<MdSentimentSatisfied style={{ fontSize: "35px" }} />}
              main="SEO & Online oglašavanje"
              description="Usluge optimizacije sajta, povećanje organskog sadržaja i online oglašavanja."
            />
            <Card
              icon={<MdFormatShapes style={{ fontSize: "35px" }} />}
              main="Društvene mreže"
              description="Usluge kreiranja sadržaja i vođenja društvenih mreža."
            />
            <Card
              icon={<MdGroupAdd style={{ fontSize: "35px" }} />}
              main="Marketing strategija"
              description="Definisanje brenda, pozicioniranje, definisanje komunikacionih kanala, marketing planiranje, istraživanje tržišta…."
            />
            <Card
              icon={<MdTv style={{ fontSize: "35px" }} />}
              main="Copywriting"
              description="Kreiranje teksutalnog sadržaja koji upotpunjuje vizuelni sadržaj na društvenim mrežama, veb sajtu..."
            />
            
            <Card
              icon={<MdEmail style={{ fontSize: "35px" }} />}
              main="Online Konsultacije"
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
          <h2 className="heading-2 text-center mb-3">Portfolio</h2>
          <div className="d-grid grid-3 line-1-5 ">
            <h3>Uskoro ...</h3>
          </div>
        </div>
      </div>

      <Footer
         mainMessage="Kako mi stvaramo digitalnu magiju?"
         shortMessage="Saznaj kako nastaju najlepše digitalne priče i kako mi činimo da one budu upečatljive i jedinstvene."
         btn="Saznaj više"
         btnLink="/portfolio"
      />
    </div>
  );
};

export default Pocetna;
