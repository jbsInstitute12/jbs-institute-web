import React from 'react';
import OurCourseImage from "../../assets/images/ourCourse.png"

const OurUniversity = () => {
    return (
        <div className='mainOurCourse p60-y bg-transparent'>
            <div className="container">
                <div className="startOurCourse">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-10 m20-bottom ">
                            <div className="ourCourseImage rounded-5 overflow-hidden  height-md-600 height-400">
                                <img src={OurCourseImage} alt="image" height={`100%`} width={`100%`} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 m20-bottom">
                            <div className="bannerContent text-md-start text-center text-md-start text-center fw-bold p15-x">
                                <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center text-md-start text-center m10-bottom'>
                                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                                    <span>About Our Institute</span>
                                </div>
                                <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Our education system inspires the next generation.</div>
                                <p className='fs-lg-16 fw-semibold fs-md-16 fs-12 text-gray m10-top'>
                                    We recognize that the future is digital. Technology is shaping every facet
                                    of our lives, and we want to ensure that you're not just a passive observer,
                                    but an active participant in this digital revolution. We see potential where
                                    others see challenges. We are dedicated to nurturing innovators, to spark
                                    creativity, and to provide a platform for dreamers to become inventors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurUniversity;


