import React from "react";
import OurCourseImage from "../../assets/images/About/About_bg.png";

const OurCampus = () => {
  return (
    <div className="mainOurCourse p60-y bg-transparent">
      <div className="container">
        <div className="startOurCourse">
          <div className="row justify-content-center align-items-center text-md-start text-center">
            <div className="col-lg-6 col-12 m20-bottom">
              <div className="bannerContent fw-bold p15-x">
                <div className="fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center m10-bottom">
                  <span className="m10-right " style={{ color: "#4A4A68" }}>
                    <i class="fa-solid fa-circle fs-md-12 fs-8"></i>
                  </span>
                  <span style={{ color: "#4A4A68" }}>
                    Our Institute information
                  </span>
                </div>
                <div
                  className="fs-lg-50 fs-md-40 fs-20 "
                  style={{ color: "#0F172A" }}
                >
                  Welcome to JBS IT INSTITUTE, where we turn your aspirations
                  into achievements
                </div>
                <p className="fs-lg-16 fw-semibold fs-md-16 fs-12 text-gray m10-top">
                  At JBS IT INSTITUTE we are not just educators; we are enablers
                  of dreams, architects of futures, and catalysts for change. We
                  invite you to join us in this exciting journey of education
                  and innovation. Together, we will shape a brighter, more
                  connected, and digitally empowered future.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-10 m20-bottom ">
              <div className="ourCourseImage rounded-5 overflow-hidden  height-md-600 height-400">
                <img
                  src={OurCourseImage}
                  alt="Illustration of our course offerings"
                  height={`100%`}
                  width={`100%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCampus;
