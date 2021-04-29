import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import QuestionCard from "../components/QuestionCard";

const Usluge = () => {
  return (
    <div>
      <Header
        page="Usluge"
        mainMessage="Usluge koje nudimo"
        shortMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />

      <div
        className="section bg-white-gray pb1"
        style={{ overflow: "initial" }}
      >
        <div className="container">
          <h2 className="text-start">
            Our Approach to Digital Marketing is Centered Around Learning &
            Growing With Your Users
          </h2>
          <p className="text-start paragraph muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nunc,
            facilisis sed erat sed, interdum suscipit nisl. Donec ut ligula sed
            dolor accumsan placerat. Ut sed felis vitae augue condimentum
            viverra. Praesent condimentum magna sit amet dui interdum sodales.
            Ut tincidunt ipsum leo, nec hendrerit odio fermentum at. Cras sit
            amet nibh lacus. Ut a risus id libero pellentesque consectetur.
            Vestibulum ornare pulvinar laoreet. Cras non scelerisque tortor, et
            rutrum sapien.
          </p>
          <p className="text-start paragraph muted">
            Sed at lacus vitae augue egestas pulvinar ultricies nec nisi. In
            aliquet velit sed eros facilisis, in tempus eros imperdiet. Aenean
            mollis urna aliquet orci placerat porttitor. Aenean tincidunt urna
            sed faucibus sodales. Donec sit amet eros eros. Duis volutpat arcu
            at efficitur molestie. Pellentesque gravida dolor risus, a
            sollicitudin arcu euismod sit amet.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
