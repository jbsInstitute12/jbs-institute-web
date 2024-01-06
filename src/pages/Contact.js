import React, { useState } from 'react';
import Header from './globle/Header';
import Footer from './globle/Footer';
import PageTitle from './components/PageTitle';
import LowerDesign from "../assets/images/lowerDesign.png"
import Call from "../assets/icons/call.png"
import Location from "../assets/icons/location.png"
import SubscribeNewsletter from './utils/SubscribeNewsletter';
import Scrollable from '../Scrollable';
import { BeatLoader } from 'react-spinners';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    Fullname: '',
    Email: '',
    Mobile: '',
    Subject: '',
    Message: '',
  });

  const [errors, setErrors] = useState({
    Fullname: '',
    Email: '',
    Mobile: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case 'Fullname':
        setErrors((prevErrors) => ({
          ...prevErrors,
          Fullname: value.trim() === '' ? 'Full Name is required' : '',
        }));
        break;
      case 'Email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          Email: emailRegex.test(value) ? '' : 'Invalid email address',
        }));
        break;
      case 'Mobile':
        const mobileRegex = /^[0-9]{10}$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          Mobile: mobileRegex.test(value) ? '' : 'Invalid mobile number',
        }));
        break;
      case 'Subject':
        setErrors((prevErrors) => ({
          ...prevErrors,
          Subject: value.trim() === '' ? 'Subject is required' : '',
        }));
        break;
      case 'Message':
        setErrors((prevErrors) => ({
          ...prevErrors,
          Message: value.trim() === '' ? 'Message is required' : '',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    for (const [name, value] of Object.entries(contact)) {
      validateInput(name, value);
    }

    if (Object.values(errors).some((error) => error !== '')) {
      alert('Please fix the errors in the form before submitting.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://jbs-it-institute-default-rtdb.firebaseio.com/ContactData.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          Fullname: '',
          Email: '',
          Mobile: '',
          Subject: '',
          Message: '',
        });
        setErrors({
          Fullname: '',
          Email: '',
          Mobile: '',
          Subject: '',
          Message: '',
        });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
    finally {
      setLoading(false);
    }
  };


  return (

    <>
      <Scrollable />
      <div id="header">
        <Header />
      </div>
      <div id="bannerSlider" className='position-relative'>
        <div className="lowerDesign">
          <img src={LowerDesign} width={"100%"} alt="lowerDesign" />
        </div>
        <PageTitle title={`Contact Us`} />
      </div>

      <div className="contactUsPage p100-bottom">
        <div className="container">
          <div className="mainSlider w-100  height-sm-400 height-200">
            <div className="row justify-content-between innerContact">
              <div className="col-lg-4 col-6">
                <div className="contactBox p20-lg p10 ">
                  <div className="contactDetails d-flex align-items-center m20-lg-y m0-y">
                    <div><img src={Call} className='hw-xl-25 hw-20 m10-right d-sm-none' alt="call" /></div>
                    <div className='text-light fs-lg-16 fs-md-14 fs-10'>
                      +91 79844 43901 <br /> +91 98752 63080
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="contactBox h-100 p20-lg p10">
                  <div className="contactDetails d-flex align-items-center m20-lg-y m0-y">
                    <div><img src={Location} className='hw-xl-25 hw-20 m10-right d-sm-none' alt="location" /></div>
                    <div className='text-light fs-lg-16 fs-md-14 fs-10'>
                      jbsit01@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainContactForm p50-y p70-md-x p20-x">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 col-12 inputData">
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="Fullname"
                    name="Fullname"
                    className="form-group"
                    value={contact.Fullname}
                    onChange={handleChange}
                    required
                  />
                  <div className="error-message">{errors.Fullname}</div>
                </div>
                <div className="col-md-6 col-12 inputData">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    id="Mobile"
                    name="Mobile"
                    value={contact.Mobile}
                    onChange={handleChange}
                    className="form-group"
                    required
                  />
                  <div className="error-message">{errors.Mobile}</div>
                </div>
                <div className="col-md-6 col-12 inputData">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="Email"
                    name="Email"
                    required
                    value={contact.Email}
                    onChange={handleChange}
                    className="form-group"
                  />
                  <div className="error-message">{errors.Email}</div>
                </div>
                <div className="col-md-6 col-12 inputData">
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    id="Subject"
                    name="Subject"
                    value={contact.Subject}
                    onChange={handleChange}
                    className="form-group"
                  />
                  <div className="error-message">{errors.Subject}</div>
                </div>
                <div className="col-12 inputData ">
                  <textarea className="form-group"
                    placeholder="Message"
                    required
                    name="Message"
                    value={contact.Message}
                    rows="4"
                    cols="50"
                    onChange={handleChange} />
                  <div className="error-message">{errors.Message}</div>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="contact_form_submit"
                    type="submit"
                    disabled={loading || Object.values(errors).some((error) => error !== '')}
                  >
                    {loading ? <BeatLoader color="#ffffff" size={8} margin={2} /> : 'Send'}
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
