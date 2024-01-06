import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import company1 from "../../assets/images/company1.svg"
import company2 from "../../assets/images/company6.png"
import company3 from "../../assets/images/company3.svg"
import company4 from "../../assets/images/company4.png"
import company5 from "../../assets/images/company5.png"

const Company = () => {


  const option = {
    nav: false,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      1000: {
        items: 5
      }
    }
  }

  return (
    <>
      <section id='companySection' className='p100-md-y p40-y'>
        <div className="container">
          <div className="bannerContent fw-bold text-center m40-sm-bottom m20-bottom">
            <div className='fs-lg-20 fs-md-16 fs-12 d-flex mb-2  justify-content-center'>
              <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
              <span>Elevate Your Skills, Elevate Your Success – It's Time to Code Your Future</span>
              <span className='m10-left'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
            </div>
            <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Our Placement Partners</div>
          </div>
          <div className="mainSlider">
            <OwlCarousel className='owl-theme' {...option} navClass={['fa-solid fa-angles-left prev', 'fa-solid fa-angles-right next']}
              autoplay={true}
            >

              <div className='item'>
                <div className="imgsCompany">
                  <img src={company1} alt="company" />
                </div>
              </div>
              <div className='item'>
                <div className="imgsCompany">
                  <img src={company2} alt="company" />
                </div>
              </div>
              <div className='item'>
                <div className="imgsCompany">
                  <img src={company3} alt="company" />
                </div>
              </div>
              <div className='item'>
                <div className="imgsCompany">
                  <img src={company4} alt="company" />
                </div>
              </div>
              <div className='item'>
                <div className="imgsCompany">
                  <img src={company5} alt="company" />
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Company
