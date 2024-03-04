import React from 'react';
import OurCourseImage from "../../assets/images/Home/ourcourse/Ourcouse_bg.png"
import c1 from "../../assets/images/Home/ourcourse/c1.png"
import c2 from "../../assets/images/Home/ourcourse/c2.png"
import c3 from "../../assets/images/Home/ourcourse/c3.png"
import c4 from "../../assets/images/Home/ourcourse/c4.png"
import c5 from "../../assets/images/Home/ourcourse/c5.png"
import c6 from "../../assets/images/Home/ourcourse/c6.png"
import { ListGroup } from 'react-bootstrap';

const OurCourse = () => {
  
    return (
        <div className='mainOurCourse'>
            <div className="container">
                <div className="startOurCourse">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="ourCourseImage rounded-5 overflow-hidden h-lg-100 height-md-400 height-500 ">
                                <img src={OurCourseImage} alt="course_image" height={'100%'} width={'100%'} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                            <div className="bannerContent  fw-bold p15-x text-md-start text-center">
                                <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start 
                                justify-content-center m10-bottom title'>
                                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                                    <span>STUDENT’S BRIGHT FUTURE MAKER</span>
                                </div>
                                <div className='fs-lg-50 fs-md-40 fs-20 sub-title'>Pick The Right Course To
                                    Build Your Career</div>

                                <div className="startOurCourse animate__animated">
                                    <OurCourseType icon={c1} title={`Android Development`} number={`01`} count={1} />
                                    <OurCourseType icon={c2} title={`Web Development`} number={`02`} count={2} />
                                    <OurCourseType icon={c3} title={`Graphic Design`} number={`03`} count={3} />
                                    <OurCourseType icon={c4} title={`Web Design`} number={`04`} count={4} />
                                    <OurCourseType icon={c5} title={`Python`} number={`05`} count={5} />
                                    <OurCourseType icon={c6} title={`Digital Marketing`} number={`06`} count={6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCourse;

export const OurCourseType = ({ count, number, title, icon }) => {
    const isSmallScreen = window.innerWidth <= 768;
    const courseWidth = {
        width: !isSmallScreen ? `calc(40px * ${count} - 15px` : `calc(14px * ${count})`
    }

    return (
        <div className="course">
            <span className="bordered" style={courseWidth}></span>
            <span className="courseType">
                <span className='courseCount fs-md-40 fs-sm-25 fs-20'>{number}</span>
                <span className='courseName'>
                    <span><img  src={icon} class={`${icon} m15-right course-icon`} alt="Course_image"/></span>
                    <span className='fs-lg-20 fs-md-12 fs-smm-14 fs-xsm-16'>{title}</span>
                </span>
            </span>
        </div>
        
    )
}

