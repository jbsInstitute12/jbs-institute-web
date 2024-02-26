import React from "react";

import { Link } from "react-router-dom";
// import ExtraBanner from "../../assets/images/extraBanner.png";

const PageTitle = ({ title }) => {
  return (
    <>
      <section id="Slider" className="p0">
        <div
          className="mainSlider "
          style={{
            background:
              "linear-gradient(180deg, rgba(243 246 250), rgba(241, 245, 249, 0))",
          }}
        >
          <div className="item">
            <div className="pageTitleBanner innerPages height-xl-850 height-sm-500 height-300">
              <div className="pageTitleBox text-center">
                <div className=" fw-bold   fs-md-60 fs-sm-50 fs-40 text-dark">
                  {title}
                </div>
                <div className="bar"></div>
                <br />
                <div
                  className="pathBtn  rounded-2 p25-x p10-y text-center  fs-md-20 fs-sm-16 fs-14 d-inline font-prime"
                  style={{ backgroundColor: "#CBD5E1", color: "#555577" }}
                >
                  <Link to="/" style={{ color: "#fff" }}>
                    Home
                  </Link>{" "}
                  - {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
