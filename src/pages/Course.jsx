import React from "react";
import SubscribeNewsletter from "./utils/SubscribeNewsletter";
import Footer from "./globle/Footer";
import Header from "./globle/Header";
import PageTitle from "./components/PageTitle";
import LowerDesign from "../../src/assets/images/lowerDesign.png";
import img1 from "../../src/assets/images/programming/java.jpg";
import img2 from "../../src/assets/images/programming/android.jpg";
import img3 from "../../src/assets/images/programming/ios.jpg";
import img4 from "../../src/assets/images/programming/react.jpg";
import img5 from "../../src/assets/images/programming/node.jpg";
import img6 from "../../src/assets/images/programming/angular.jpg";
import img7 from "../../src/assets/images/programming/php.jpg";
import img8 from "../../src/assets/images/programming/unity.jpg";
import img9 from "../../src/assets/images/programming/wordpress.jpg";
import img10 from "../../src/assets/images/programming/react.jpg";
import img11 from "../../src/assets/images/programming/c.jpg";
import img12 from "../../src/assets/images/programming/c++.jpg";
import img13 from "../../src/assets/images/programming/ccc.jpg";
import img14 from "../../src/assets/images/programming/python.jpg";
import img15 from "../../src/assets/images/programming/flutter.jpg";
import img16 from "../../src/assets/images/programming/bootstrap.jpg";
import img17 from "../../src/assets/images/programming/html5css3.jpg";
import img19 from "../../src/assets/images/programming/photoshop.jpg";
import img20 from "../../src/assets/images/programming//illustrator.jpg";
import img21 from "../../src/assets/images/programming/corel.jpg";
import { Link } from "react-router-dom";
import Scrollable from "../Scrollable";

function Course() {
  return (
    <>
      <Scrollable />
      <div id="header">
        <Header />
      </div>
      <div id="bannerSlider" className="position-relative">
        <div className="lowerDesign">
          <img src={LowerDesign} width={"100%"} />
        </div>
        <PageTitle title={`Course`} />
      </div>

      <div className="course-outer">
        <div className="container">
          <div className="course-inner">
            <div className="p40-y bg-fourth">
              <div className="container">
                <div className="row course-item">
                  <div
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    id="Programming"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Programming`}
                    />
                  </div>

                  <div
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    id="Project training"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Project training`}
                    />
                  </div>
                  <div
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    id="Frontend Coding"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Frontend Coding`}
                    />
                  </div>
                  <div
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    id="Graphics Design    "
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Graphics Design`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="course-content">
              <div className="course-item my-4">
                <div className="title">Programming</div>
                <div className="course row ">
                  <div className="image  ">
                    <Link to="/javaprogramming">
                      <div className="item-inner">
                        <img src={img1} alt="img1" />
                        <div className="titles">Java</div>
                      </div>
                    </Link>
                  </div>

                  <div className="image">
                    <Link to="/androidDevelopment">
                      <div className="item-inner">
                        <img src={img2} alt="img1" />
                        <div className="titles">Andriod</div>
                      </div>
                    </Link>
                  </div>

                  <div className="image">
                    <Link to="/ios">
                      <div className="item-inner">
                        <img src={img3} alt="img1" />
                        <div className="titles">IOS</div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course row">
                  <div className="image">
                    <Link to="/reactjs">
                      <div className="item-inner">
                        <img src={img4} alt="img1" />
                        <div className="titles">Reactr Js</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/nodejs">
                      <div className="item-inner">
                        <img src={img5} alt="img1" />
                        <div className="titles">Node js</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/angular">
                      <div className="item-inner">
                        <img src={img6} alt="img1" />
                        <div className="titles">Angular.js</div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course row">
                  <div className="image">
                    <Link to="/php">
                      <div className="item-inner">
                        <img src={img7} alt="img1" />
                        <div className="titles">PHP</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/wordpress">
                      <div className="item-inner">
                        <img src={img9} alt="img1" />
                        <div className="titles">Wordpress</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/reactnative">
                      <div className="item-inner">
                        <img src={img10} alt="img1" />
                        <div className="titles">React Native</div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="course row">
                  <div className="image">
                    <Link to="/Cprogramming">
                      <div className="item-inner">
                        <img src={img11} alt="img1" />
                        <div className="titles">C Language</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/C++programming">
                      <div className="item-inner">
                        <img src={img12} alt="img1" />
                        <div className="titles">C++</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/basic-computer-course">
                      <div className="item-inner">
                        <img src={img13} alt="img1" />
                        <div className="titles">CCC</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="course-item ">
                <div className="title ">Project training</div>
                <div className="course">
                  <div className="image">
                    <Link to="/javaprogramming">
                      <div className="item-inner">
                        <img src={img1} alt="img1" />
                        <div className="titles">Java</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/androidDevelopment">
                      <div className="item-inner">
                        <img src={img2} alt="img1" />
                        <div className="titles">Andriod</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/ios">
                      <div className="item-inner">
                        <img src={img3} alt="img1" />
                        <div className="titles">IOS</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/php">
                      <div className="item-inner">
                        <img src={img7} alt="img1" />
                        <div className="titles">PHP</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/python">
                      <div className="item-inner">
                        <img src={img14} alt="img1" />
                        <div className="titles">Python</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/flutterDevelopment">
                      <div className="item-inner">
                        <img src={img15} alt="img1" />
                        <div className="titles">Flutter</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="course-item my-4">
                <div className="title ">Frontend Coding</div>
                <div className="course">
                  <div className="image">
                    <Link to="/webdesign">
                      <div className="item-inner">
                        <img src={img16} alt="img1" />
                        <div className="titles">Bootstrap</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/webdesign">
                      <div className="item-inner">
                        <img src={img17} alt="img1" />
                        <div className="titles">HTML5 & CSS3</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="course-item my-4">
                <div className="title">Graphics Design</div>
                <div className="course">
                  <div className="image">
                    <Link to="/photoshop">
                      <div className="item-inner">
                        <img src={img19} alt="img1" />
                        <div className="titles">Photoshop</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/adobellustrator">
                      <div className="item-inner">
                        <img src={img20} alt="img1" />
                        <div className="titles">illustrator</div>
                      </div>
                    </Link>
                  </div>
                  <div className="image">
                    <Link to="/coreldraw">
                      <div className="item-inner">
                        <img src={img21} alt="img1" />
                        <div className="titles">Corel Draw</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeNewsletter />
      <Footer />
    </>
  );
}

export default Course;

export const DurationBox = ({ text }) => {
  return (
    <div className="mainDurationBox">
      <div className="durationText fs-lg-18 fs-md-16 fs-12 text-overflow-1 ">
        {text}
      </div>
    </div>
  );
};
