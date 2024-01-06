import React from 'react';
import Header from './globle/Header';
import LowerDesign from "../assets/images/lowerDesign.png"
import PageTitle from './components/PageTitle';
import OurUniversity from './components/OurUniversity';
import Rank from './components/Rank';
import OurCampus from './components/OurCampus';
import Company from './components/Company';
import Footer from './globle/Footer';
import CEO from './components/CEO';
import SubscribeNewsletter from './utils/SubscribeNewsletter';
import Scrollable from '../Scrollable';

const AboutUs = () => {
    return (
        <>
            <Scrollable />
            <div id="header">
                <Header />
            </div>
            <div id="bannerSlider" className='position-relative'>
                <div className="lowerDesign">
                    <img src={LowerDesign} alt="Lower_design" width={"100%"} />
                </div>
                <PageTitle title={`About Us`} />
            </div>
            <OurUniversity />
            <section id='rankSection'>
                <Rank />
            </section>
            <OurCampus />
            <CEO />
            <Company />
            <SubscribeNewsletter />
            <Footer />

        </>
    );
}

export default AboutUs;
