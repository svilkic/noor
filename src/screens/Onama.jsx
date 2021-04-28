import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

const Onama = () => {
  return (
    <div>
      <Header
        page="O Nama"
        mainMessage="Saznajte više o NOOR Creators"
        shortMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />

      <div className="section bg-white-gray pb1" style={{overflow:"initial"}}>
        <div className="container">
            <img src="/images/laptop-clouds.png" style={{position:"relative", marginTop:"-17em"}} />
          <h2>Our Approach to Digital Marketing is Centered Around Learning & Growing With Your Users</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc, facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed dolor accumsan placerat. Ut sed felis vitae augue condimentum viverra. Praesent condimentum magna sit amet dui interdum sodales. Ut tincidunt ipsum leo, nec hendrerit odio fermentum at. Cras sit amet nibh lacus. Ut a risus id libero pellentesque consectetur. Vestibulum ornare pulvinar laoreet. Cras non scelerisque tortor, et rutrum sapien.</p>
            <p>Sed at lacus vitae augue egestas pulvinar ultricies nec nisi. In aliquet velit sed eros facilisis, in tempus eros imperdiet. Aenean mollis urna aliquet orci placerat porttitor. Aenean tincidunt urna sed faucibus sodales. Donec sit amet eros eros. Duis volutpat arcu at efficitur molestie. Pellentesque gravida dolor risus, a sollicitudin arcu euismod sit amet.</p>
        </div>
      </div>

      <div className="section bg-gray">
        <div className="container d-flex">
        <img src="/images/twophones.png"  />
        <div>

          <h2 className="heading-2 text-center ">Naše vrednosti</h2>
          <p className="mb3">
            Interested in driving growth? Have a general question? We’re just an
            email away.
          </p>
          
        </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Onama;
