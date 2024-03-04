import React from "react";
import PageTitle from "../Common/PageTitle";
import OurUniversity from "../About/OurUniversity";
import Rank from "../About/Rank";
import OurCampus from "../About/OurCampus";
import Company from "../About/Company";
// import CEO from "../About/CEO";

const About = () => {
  return (
    <div>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`About Us`} />
      </div>
      <OurUniversity />
      <section id="rankSection">
        <Rank />
      </section>
      <OurCampus />
      {/* <CEO /> */}
      <Company />
    </div>
  );
};

export default About;
