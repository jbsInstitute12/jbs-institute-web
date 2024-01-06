import React, { useEffect, useState } from 'react';
import Service1 from "../../assets/icons/service1.png"
import $ from "jquery"
const Rank = () => {


  const rankArry = [
    { image: Service1, title: `1000+`, dec: `Happy student` },
    { image: Service1, title: `2`, dec: `Centers` },
    { image: Service1, title: `10`, dec: `Job placement’s done` },
    { image: Service1, title: `1000+`, dec: `Student trained` },
  ]

  document.addEventListener("scroll", function () {
    var element = document.querySelector(".rankSec");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 2100) {
      element?.classList.add("activeAnime");
    }
    var screenWidth = window.innerWidth;
    if (screenWidth < 768 && element) {
      if (scrollPosition > 1500) {
        element?.classList.add("activeAnime");
        element?.classList.add("opacity-1");
      }
    }
  });


  $(document).ready(function () {
    var animationTriggered = false; // Flag to track if animation has been triggered

    $(window).scroll(function () {
      if (!animationTriggered && $(window).scrollTop() > 2000 || !animationTriggered && $(window).scrollTop() > 2300) {
        animationTriggered = true;

        $(".rankBox").each(function (index) {
          var rankBox = $(this);
          var targetValue = parseInt(rankBox.find(".count").attr("data-target"));
          var duration = 2000;
          var startValue = 0;
          var startTime = null;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var increment = ((targetValue - startValue) / duration) * progress;
            rankBox.find(".count").text(Math.floor(startValue + increment));

            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              rankBox.find(".count").text(targetValue);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  });
  return (
    <>
      <div className="rankSec mainAbout p100-top p100-sm-bottom bg-fourth" >
        <div className="container">
          <div className="startAbout">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 m30-bottom">
                <div className="bannerContent fw-bold text-md-start text-center animate__animated">
                  <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center m10-bottom'>
                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                    <span>STUDENT’S BRIGHT FUTURE MAKER</span>
                  </div>
                  <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Why we are</div>
                  <p className='fs-lg-16 fs-md-16 fs-12 text-gray m10-top fw-500'>
                    Our mission at JBS IT INSTITUTE is firmly anchored in our dedication to the
                    transformative power of technology and education. We are convinced of
                    the boundless opportunities presented by the IT industry, in addition to its
                    substantial impact on people and society worldwide.
                  </p>
                  <p className='fs-lg-16 fs-md-16 fs-12 text-gray m10-top fw-500'>
                    The demand for skilled IT professionals is ever-increasing. We exist to
                    bridge the skills gap, empowering you with the practical knowledge
                    needed to succeed in the dynamic world of technology. We understand
                    that the pursuit of knowledge is often intertwined with career aspirations.
                    We empower individuals to unlock new career opportunities, from entry-
                    level positions to senior leadership roles. Learning doesn't end with a
                    degree; it's a lifelong journey. We are here to inspire a love for learning
                    and a dedication to continuous improvement. We envision a world where
                    knowledge knows no boundaries. Our institute strives to create a global
                    community of learners, connected by their passion for IT. We are
                    committed to providing quality education that goes beyond textbooks. Our
                    students graduate with a profound understanding of technology and the
                    confidence to apply it in real-world situations.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-12 m30-bottom">
                <div className="rankShower p20-top animate__animated">
                  <div className="row">
                    {
                      rankArry && (
                        rankArry?.map((res) => {
                          return (
                            <div className="col-sm-4 col-6">
                              <RankBox image={res.image} title={res.title} dec={res.dec} />
                            </div>
                          )
                        })
                      )
                    }

                    <div className="col-sm-4 col-6">
                      <RankBox image={Service1} title={`8+`} dec={`Certification`} />
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="downloadBox text-center p20-top">
                        <div className="downloadIcon hw-50 bg-light midBox rounded-5 border-prime-2  m-auto m10-bottom">
                          <i class="ri-download-2-line fs-lg-22 fs-md-20 fs-18 text-prime"></i>
                        </div>
                        <div className="downloadButton d-inline bg-prime text-light p8-y p15-x rounded-3 fs-xl-14 fs-md-14 fs-10">
                          Download Brochure
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rank;


export const RankBox = ({ image, title, dec }) => {
  return (
    <div className="rankBox m-auto m40-bottom">
      <div className="iconPart hw-xl-60 hw-lg-40 hw-sm-60 hw-40">
        <img src={image} alt="" className='hw-xl-30 hw-lg-25 hw-sm-30 hw-25' />
      </div>
      <div className="detailsPart text-center">
        <div className="fs-xl-24 fs-md-18  fs-xs-16 fs-22 fw-bold text-prime text-overflow-1 count" data-target={title}>{title}</div>
        <p className="fw-600 w-90 fs-xl-16 fs-12">{dec}</p>
      </div>
    </div>
  )
}

export const AnimationCount = () => {

  useEffect(() => {
    $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();
      var threshold = 2300; // Scroll position at which the animation should start
      var rankBoxes = $(".rankBox");

      if (scrollPosition > threshold) {
        rankBoxes.each(function (index) {
          var rankBox = $(this);
          var targetValue = parseInt(rankBox.find(".count").attr("data-target"));
          var duration = 2000;
          var startValue = 0;
          var startTime = null;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var increment = ((targetValue - startValue) / duration) * progress;
            rankBox.find(".count").text(Math.floor(startValue + increment));

            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              rankBox.find(".count").text(targetValue);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, []);

  return null
}