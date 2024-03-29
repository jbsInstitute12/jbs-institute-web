import React from 'react';
import ItPic1 from "../../assets/images/itPic1.png"
import ItPic2 from "../../assets/images/itPic2.png"
import ItPic3 from "../../assets/images/itPic3.png"
import ItPic4 from "../../assets/images/itPic4.png"
import RoundEffect from "../../assets/images/roundEffect.png"
const   About = () => {

  document.addEventListener("scroll", function () {
    var element = document.querySelector(".mainAbout");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 650) {
      element?.classList.add("activeAnime");
    }
  });

  return (
    <>
      <div className="mainAbout">
        <div className="container">
          <div className="startAbout">
            <div className="row">
              <div className="col-sm-6 col-12 ">
                <div className="bannerContent fw-bold text-md-start text-center animate__animated">
                  <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center m10-bottom'>
                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                    <span>STUDENT’S BRIGHT FUTURE MAKER</span>
                  </div>
                  <div className='fs-lg-45 fs-md-40 fs-20 text-second mb-4'>At the crossroads of imagination and innovation, JBS IT INSTITUTE stands as a
                    guiding light.</div>
                  <p className='fs-lg-16 fs-md-16 fs-12 text-gray m10-top'>Welcome to JBS IT INSTITUTE’s world where every line of code is a stroke on the
                    canvas of progress, and every student is an artist shaping the future. Join us on a
                    journey where creativity meets technology, and innovation knows no bounds.</p>
                </div>
              </div>
              <div className="col-sm-6 col-12 m30-y">
                <img src={RoundEffect} className='aboutEffect hw-md-500 hw-400' alt="RoundEffect"/>
                <div className="photoSide p40-sm-left p20-left animate__animated">
                  <div className="itPhotos d-flex justify-content-center">
                    <div className="imgs img1 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img src={ItPic1} alt="itImage" />
                    </div>
                    <div className="imgs img2 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img src={ItPic2} alt="itImage" />
                    </div>
                  </div>
                  <div className="itPhotos d-flex m40-md-left">
                    <div className="imgs img3 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img src={ItPic3} alt="itImage" />
                    </div>
                    <div className="imgs img4 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img src={ItPic4} alt="itImage" />
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

export default About;
