import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import { Link } from "react-router-dom"
import ExtraBanner from "../../assets/images/extraBanner.png"


const PageTitle = ({ title }) => {

  useEffect(() => {
    $('.innerPages').ripples({
      dropRadius: 15,
      perturbance: 0.02
    });

    // Clean up the plugin when the component unmounts
    return () => {
      $('.innerPages').ripples('destroy');
    };
  }, []);

  return (

    <>
      <section id='Slider' className='p0'>
        <div className="mainSlider bg-light">
          <div className='item'>
            <div className="pageTitleBanner innerPages height-xl-850 height-sm-500 height-300" style={{ backgroundImage: `url(${ExtraBanner})` }}>
              <div className="pageTitleBox text-center">
                <div className="fw-bold text-light m10-bottom  fs-md-60 fs-sm-50 fs-40">{title}</div>
                <div className="pathBtn bg-prime rounded-2 p25-x p10-y text-center text-light fs-md-20 fs-sm-16 fs-14 d-inline font-prime">
                  <Link to="/" style={{ color: '#fff' }}>Home</Link>  - {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageTitle
