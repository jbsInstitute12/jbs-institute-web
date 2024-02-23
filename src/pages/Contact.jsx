import React, { useState } from "react";
import Header from "./globle/Header";
import Footer from "./globle/Footer";
import PageTitle from "./components/PageTitle";
// import Scrollable from "../Scrollable";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactImg from "../../src/assets/images/Contact-Us_image.png";
import axios from "axios";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact: Yup.string().required("Contact is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          "https://jbs-institut-backend.onrender.com/api/user-form",
          values
        );
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formik.isValid) {
      formik.handleSubmit(e);
    } else {
      formik.submitForm();
    }
  };

  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Contact Us`} />
      </div>
      <div className="contact-outer">
        <div className="container my-5">
          <div className="row ">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="contact-image">
                      <img src={ContactImg} al="contact-image" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                          <label htmlFor="your-name" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.firstName &&
                              formik.errors.firstName
                                ? "is-invalid"
                                : ""
                            }`}
                            id="your-name"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                          />
                          {formik.touched.firstName &&
                            formik.errors.firstName && (
                              <div className="invalid-feedback">
                                {formik.errors.firstName}
                              </div>
                            )}
                        </div>
                        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <label htmlFor="your-surname" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formik.touched.lastName && formik.errors.lastName
                                ? "is-invalid"
                                : ""
                            }`}
                            id="lastNmae"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                          />
                          {formik.touched.lastName &&
                            formik.errors.lastName && (
                              <div className="invalid-feedback">
                                {formik.errors.lastName}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-subject" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.contact && formik.errors.contact
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-subject"
                        name="contact"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contact}
                      />
                      {formik.touched.contact && formik.errors.contact && (
                        <div className="invalid-feedback">
                          {formik.errors.contact}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.subject && formik.errors.subject
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-subject"
                        name="subject"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                      />
                      {formik.touched.subject && formik.errors.subject && (
                        <div className="invalid-feedback">
                          {formik.errors.subject}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="your-message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className={`form-control ${
                          formik.touched.message && formik.errors.message
                            ? "is-invalid"
                            : ""
                        }`}
                        id="your-message"
                        name="message"
                        rows="5"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="invalid-feedback">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-md-6 mt-5">
                          <button
                            type="submit"
                            className="btn btn-dark w-50 fw-bold"
                            style={{ background: "#D46615", border: "none" }}
                            // disabled={Object.keys(formik.values).some(
                            //   (key) =>
                            //     formik.values[key] === "" ||
                            //     formik.values[key] === null
                            // )}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
