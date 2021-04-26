import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

const Pocetna = () => {
  return (
    <div>
      <Header />
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
        <div className="d-flex container">
          <img
            src="./index_files/6082d44767056261ee3553d7_laptop-analytics-2.png"
            loading="lazy"
            width="700"
            sizes="(max-width: 991px) 80vw, 700px"
            srcSet="
            https://uploads-ssl.webflow.com/6081837b13de35636e53a74b/6082d44767056261ee3553d7_laptop-analytics-2-p-500.png   500w,
            https://uploads-ssl.webflow.com/6081837b13de35636e53a74b/6082d44767056261ee3553d7_laptop-analytics-2-p-800.png   800w,
            https://uploads-ssl.webflow.com/6081837b13de35636e53a74b/6082d44767056261ee3553d7_laptop-analytics-2-p-1080.png 1080w,
            https://uploads-ssl.webflow.com/6081837b13de35636e53a74b/6082d44767056261ee3553d7_laptop-analytics-2.png        1500w
            "
            alt=""
            className="image-4"
          />
          <div className="div-block-2">
            <h1 className="heading-4">Započnite vašu marketing kampanju</h1>

            <p className="paragraph-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <Link to="#" className="btn btn-primary w-button">
              Zakažite konsultacije
            </Link>
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

      <Footer />
    </div>
  );
};

export default Pocetna;
