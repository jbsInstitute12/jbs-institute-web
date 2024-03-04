import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RatingImage1 from "../../assets/images/Home/testimonial/ratingImage1.png";
import RatingImage2 from "../../assets/images/Home/testimonial/ratingImage2.png";
import RatingImage3 from "../../assets/images/Home/testimonial/ratingImage3.png";
import Community from "../../assets/images/Home/testimonial/community.png";
import vector1 from "../../assets/images/Home/testimonial/Vector2.png";
import vector2 from "../../assets/images/Home/testimonial/vector (5).png";

const Rating = () => {
  const option = {
    nav: false,
    loop: true,
    dots: true,
  };

  const ratingArry = [
    {
      id: "ratingArry",
      image: RatingImage1,
      title: "Davit Gevorg",
      dec: "Attending this IT institute has been a transformative experience. The knowledgeable and dedicated instructors, along with the up-to-date curriculum, have equipped me with the skills and knowledge needed to excel in the rapidly evolving field of IT. The hands-on practical exercises and real-world projects provided a valuable learning experience. I highly recommend this institute to anyone looking to kickstart their IT career with confidence.",
    },
    {
      id: "ratingArry",
      image: RatingImage2,
      title: "Davit Gevorg",
      dec: "The IT institute's commitment to providing a supportive and dynamic learning environment has been exceptional. The passionate instructors and their availability for questions and guidance have made my journey here immensely rewarding. The institute's focus on practical, job-relevant skills has given me the confidence to pursue a successful career in IT.",
    },
    {
      id: "ratingArry",
      image: RatingImage3,
      title: "Davit Gevorg",
      dec: "Choosing this IT institute was one of the best decisions I've made. The well-structured courses and the expertise of the instructors have given me a strong foundation in IT. The institute's commitment to staying up-to-date with industry trends and technologies ensures that students are always learning relevant skills. The supportive community and networking opportunities have been an added bonus, making my time here incredibly enriching.",
    },
    // {
    //   img: "image",
    //   dec: "My time at this IT institute has been transformative. The comprehensive curriculum, hands-on learning, and industry-relevant projects have equipped me with the skills and knowledge needed to excel in the world of IT. The support and guidance from the faculty and career advisors have been invaluable in preparing me for a successful IT career. I couldn't have asked for a better institute to kickstart my journey in the tech industry.",
    // },
    // {
    //   img: "image",
    //   dec: "I am grateful for the rich learning experience I've had at this IT institute. The passionate instructors and their dedication to student success make all the difference. The institute's practical approach to learning, including real-world projects and labs, has prepared me to tackle the challenges of the IT field with confidence. I am excited about the opportunities that lie ahead in my IT career, thanks to this exceptional institute.",
    // },
  ];

  return (
    <>
      <section id="ratingSection" className="p100-bottom-y">
        <div className="container">
          <div className="mainSlider p150-md-y ">
            <OwlCarousel
              className="owl-theme"
              {...option}
              items={1}
              navClass={[
                "fa-solid fa-angles-left prev",
                "fa-solid fa-angles-right next",
              ]}
              autoplay={true}
            >
              {ratingArry.map((item) => (
                <div key={item.id} className="about-team-img">
                  <div className="item ">
                    <div className="row ms-3 me-3">
                      <div className="col-lg-12  col-12 card pt-3 pb-3  m-0">
                        <div className="row align-items-center ">
                          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="ratingImage ">
                              <div className="ratingImg2 hw-90  m-auto m10-bottom">
                                <img src={item.image} alt="rating_image" />
                              </div>
                            </div>
                            <div className="h4 rateTitle fs-lg-20 fs-md-18 fs-16 text-center">
                              {item.title}
                            </div>
                            <div className="h4 rating text-warning fs-lg-18 fs-16 text-center">
                              <span>
                                <i class="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i class="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i class="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i class="ri-star-s-line"></i>
                              </span>
                              <span>
                                <i class="ri-star-s-line"></i>
                              </span>
                            </div>
                          </div>
                          <div class="col-12 col-md-8">
                            <div className="ratingText text-gray fs-lg-18 fs-16">
                              <img className="vector-1" src={vector1} alt="" />
                              {item.dec}
                              <img className="vector-2 " src={vector2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <img src={Community} alt="" className="communityImg" />
      </section>
    </>
  );
};

export default Rating;
