import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Rank = () => {
  const [counterState, serCounterstate] = useState(false);
  return (
    <>
      <div className="rankSec mainAbout " style={{ background: "#5b5b7e" }}>
        <div className="container">
          <div className="startAbout">
            <div className="row align-items-center justify-conten-center">
              <div className="col-lg-12 col-12">
                <div className="bannerContent fw-bold text-md-start text-center">
                  <div className="fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-center m10-bottom text-center">
                    <span
                      className="m10-right text-center"
                      style={{ color: "#fff" }}
                    >
                      <i class="fa-solid fa-circle fs-md-12 fs-8"></i>
                    </span>
                    <span className="text-center" style={{ color: "#fff" }}>
                      STUDENT’S BRIGHT FUTURE MAKER
                    </span>
                  </div>
                  <div
                    className="fs-lg-40 fs-md-30 fs-20  text-center  m30-bottom"
                    style={{ color: "#fff" }}
                  >
                    Why we are
                  </div>
                </div>
                <div class="container">
                  <ScrollTrigger
                    onEnter={() => serCounterstate(true)}
                    onExit={() => serCounterstate(false)}
                  >
                    <div class="row justify-content-between">
                      <div class="col-12 col-lg-2  counter-item">
                        <div class="text-center  fs-lg-20 fs-md-16 fs-12">
                          <p class="counter-count" style={{ color: "#fff" }}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={100}
                                duration={2.75}
                              ></CountUp>
                            )}
                            +
                          </p>
                          <h5 style={{ color: "#fff" }}>Students trained</h5>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 counter-item">
                        <div class="text-center fs-lg-20 fs-md-16 fs-12">
                          <p class="counter-count" style={{ color: "#fff" }}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={80}
                                duration={2.75}
                              ></CountUp>
                            )}
                            +
                          </p>
                          <h5 style={{ color: "#fff" }}>Approved Courses</h5>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 counter-item">
                        <div class="text-center fs-lg-20 fs-md-16 fs-12">
                          <p class="counter-count" style={{ color: "#fff" }}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={30}
                                duration={2.75}
                              ></CountUp>
                            )}
                            +
                          </p>
                          <h5 style={{ color: "#fff" }}>Job Placements </h5>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 counter-item">
                        <div class="text-center fs-lg-20 fs-md-16 fs-12">
                          <p class="counter-count" style={{ color: "#fff" }}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={2}
                                duration={2.75}
                              ></CountUp>
                            )}
                            +
                          </p>
                          <h5 style={{ color: "#fff" }}>Centers</h5>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 counter-item">
                        <div class="text-center fs-lg-20 fs-md-16 fs-12">
                          <p class="counter-count" style={{ color: "#fff" }}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={400}
                                duration={2.75}
                              ></CountUp>
                            )}
                            +
                          </p>
                          <h5 style={{ color: "#fff" }}>Certification</h5>
                        </div>
                      </div>
                    </div>
                  </ScrollTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rank;
