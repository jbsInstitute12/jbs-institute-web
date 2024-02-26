import React, { useEffect } from 'react'
import subscribe1 from '../../assets/images/subscribe1.png'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery.ripples';

function SubscribeNewsletter() {
    useEffect(() => {
        $('.news-block').ripples({
          dropRadius: 15,
          perturbance: 0.02
        });
    
        return () => {
          $('.news-block').ripples('destroy');
        };
      }, []);
    return (
        <>
           {/* <div className="subscribe-outer">
                    <div className="container">
                        <div className="subscribe-inner Subscribe_bg">
                            <div className="news-block">
                                <div className="main-item row d-flex justify-content-between align-items-center">
                                    <div className="col-lg-8 col-md-6 col-sm-12 item d-flex align-items-center">
                                        <div className="img"><img src={subscribe1} alt="subscribe1_image" /></div>
                                        <div className="text mb-3">
                                            <h5 className='fs-lg-33 fs-sm-20 fs-md-18 fs-xsm-20'>Subscribe for Newsletter</h5>
                                            <p  className='fs-lg-20 fs-sm-14 fs-md-12 fs-xsm-14 '>Grow Your Career With JBS IT INSTITUTE</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 item">
                                        <div className="sub_btn fs-lg-18 fs-md-16">
                                          Our Contact
                                            <span className='fs-lg-16 fs-xsm-14'>Start Now<Link to="/contact"><i class="fas fa-arrow-right"></i></Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> */}
        </>
    )
}

export default SubscribeNewsletter;
