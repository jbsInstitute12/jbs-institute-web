import Rank from "../About/Rank";
import OurAbout from "../Home/OurCourse";
import OurCourse from "../Home/OurCourse";
import Rating from "../Home/Rating";
import Service from "../Home/Service";
import Facility from "../Home/Facility";
import Company from "../About/Company";

import Slider from "./Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <section id="serviceSection">
        <Service />
      </section>
      <section id="aboutSection">
        <OurAbout />
      </section>
      <section id="rankSection">
        <Rank />
      </section>
      <section id="facilitySection">
        <Facility />
      </section>
      <section id="ourCourseSection">
        <OurCourse />
      </section>
      <Company />
      <Rating />
      
    </div>
  );
};

export default Home;
