import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Job } from "../components/Job";

const Portfolio = () => {
  return (
    <div>
      <Header page="Portfolio" mainMessage="Nedavni Radovi" />
      <div
        className="section bg-white-gray pb1"
        style={{ overflow: "initial" }}
      >
        <div className="container">
          <div className="d-grid grid-2 grid-gap-4">
            <Job
              img="/images/job1.png"
              jobName="Nullam Aliquam"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
            <Job
              img="/images/job2.png"
              jobName="Divi Leads"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
            <Job
              img="/images/job3.png"
              jobName="Divi Analytics"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
            <Job
              img="/images/job4.png"
              jobName="Mobile Optimization"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
            <Job
              img="/images/job5.png"
              jobName="Social Marketing Campaign"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
            <Job
              img="/images/job6.png"
              jobName="5 Design Conference Branding"
              description="Lorem ipsum dolor sit amet
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
