import React, { useEffect, useState } from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { baseURL } from '../utils/config'

import Mail from "../../assets/icons/email.png"
import Linkdin from "../../assets/icons/linkdin.png"
import Facebook from "../../assets/icons/facebook.png"
import Whatsapp from "../../assets/icons/whatsapp.png"
import Twitter from "../../assets/icons/twitter.png"
import Instagram from "../../assets/icons/instagram.png"
import Google from "../../assets/icons/google.png"

const Header = () => {

  //Proceebar
  const [scrollTop, setScrollTop] = useState(0);


  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled)
  }




  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  })
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   const data = warning();
  //   data
  //     .then((logouts) => {
  //       const yes = logouts.isConfirmed
  //       console.log("yes", yes);
  //       if (yes) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
  const [stopNav, setStopNav] = useState("");

  useEffect(() => {
    function handleScroll() {

      if (window.scrollY > 70) {
        setStopNav("stopNavigation");
      } else {
        setStopNav("");
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <MenuScript />
      <div className="mainHeader">
        <div className="upperHeader bg-md-transparent bg-prime">
          <div className="container">
            <div className="row align-content-center text-light">
              <div className="col-lg-5 col-md-6 col-12 m0 align-self-center">
                <div className="headNumber fw-600 text-lg-start text-center">
                  <span><Link to="tel:+91 79844 43901" style={{ color: '#fff' }}>+91 79844 43901</Link></span>
                  <span><Link to="tel:+91 98752 63080" style={{ color: '#fff' }}>+91 98752 63080</Link></span>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-12 m0">
                <div className="sideHeader d-flex justify-content-lg-end justify-content-center">
                  <div className="headInfo d-flex align-items-center border-right-light-2">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <img src={Mail} alt="Mail" />
                    </div>
                    <div className="infoText m10-left fs-lg-16 fs-sm-14 fs-12 d-lg-block d-none">
                      <Link to="mailto:jbsit01@gmail.com" style={{ color: '#fff' }}>jbsit01@gmail.com</Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="">
                        <img src={Linkdin} alt="Linkdin" />
                      </Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="https://www.facebook.com/profile.php?id=100094207180164&mibextid=JRoKGi" target="_blank">
                        <img src={Facebook} alt="Facebook" />
                      </Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="https://wa.me/+919875263080" target="_blank">
                        <img src={Whatsapp} alt="Whatsapp" />
                      </Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FInstituteJ88555">
                        <img src={Twitter} alt="Twitter" />
                      </Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="https://www.instagram.com/jbs_it_institute?utm_source=qr" target="_blank">
                        <img src={Instagram} alt="Instagram" />
                      </Link>
                    </div>
                  </div>
                  <div className="headInfo">
                    <div className="infoIcon hw-xl-25 hw-20">
                      <Link to="https://www.google.com/search?q=jbs+institute+surat&sca_esv=593723253&rlz=1C1JJTC_enIN1052IN1053&sxsrf=AM9HkKlCRENC7y0KD-xAouU1kbZF01XvLg%3A1703582297499&ei=WZqKZc2NHpvb4-EPkOiXsAU&gs_ssp=eJzj4tVP1zc0zDaxyCuOT6oyYLRSNagwTko1MEkzNDVNNkhMsTSytDKosDRPsjQ2tjBKTE0xN0g2TvQSzkoqVsjMKy7JLCktSVUoLi1KLAEALnwW_g&oq=jbs+institute&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWpicyBpbnN0aXR1dGUqAggAMg0QLhjHARivARiwAxgnMgcQIxiwAxgnMgcQIxiwAxgnMgcQIxiwAxgnMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSN4IUABYAHABeAGQAQCYAQCgAQCqAQC4AQHIAQDiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp">
                        <img src={Google} alt="Google" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`middleHeader ${stopNav} font-prime`}>
          <div className="container position-relative">
            <div className="logoHeader row  justify-content-between align-items-center">

              <div className="col-xl-2 col-3 d-flex justify-content-xl-start justify-content-lg-center  align-items-center">
                <div className="logo">
                  <Link to="/"><img src={Logo} alt="JBS LOGO" /></Link>
                </div>
              </div>
              {/* web Menu */}
              <div className="col-8 d-lg-flex d-none  justify-content-end">
                <nav>
                  <div className="mainNavigation d-flex">
                    {/* Web Menu */}
                    <ul className="mainMenu justify-content-center m-0 d-lg-flex d-none">
                      <li>
                        <span>
                          <Link to="/">
                            <div className="headText">Home</div>
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/about">
                            <div className="headText">About Us</div>
                          </Link>
                        </span>
                      </li>
                      <li className='megaBlock'>
                        <span>
                          <Link to={`/course`}>
                            <div className="headText">
                              <span>Courses</span>
                              <span><i class="ri-arrow-drop-down-line"></i></span>
                            </div>
                          </Link>
                        </span>
                        <div className="megaMenu">
                          <div className="row">
                            <div className="col-3 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-18'>DEVELOPMENT COURSES</h5>
                              <ul>
                                <li><Link to={`/flutterDevelopment`}>Master In Flutter Development</Link></li>
                                <li><Link to={`/androidDevelopment`}>Master In Android Development</Link></li>
                                <li><Link to={`/gameDevelopment`}>Master In Game Development</Link></li>
                                <li><Link to={`/fullstackdevelopment`}>Master In Full Stack Development</Link></li>
                                <li><Link to={`/webdevelopment`}>Master In Web Development</Link></li>
                                <li><Link to={`/reactnative`}>Master In React Native</Link></li>
                                <li><Link to={`/aspdotnetdevelopment`}>Master In ASP.net development</Link></li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-18'>DESIGN COURSES</h5>
                              <ul>
                                <li><Link to={`/webdesign`}>Master In Web Design</Link></li>
                                <li><Link to={`/ui-uxdesign`}>Master in UI/UX Design</Link></li>
                                <li><Link to={`/graphic`}>Advance Graphics Design</Link></li>
                              </ul>
                              <h5 className='megaTitle fw-600 fs-18 m20-top'>SHORT TERM COURSES</h5>
                              <ul>
                                <li><Link to={`/adobellustrator`}>Adobe Illustrator</Link></li>
                                <li><Link to={`/adobeXD`}>Adobe XD</Link></li>
                                <li><Link to={`/basic-computer-course`}>CCC- Basic Computer Course</Link></li>
                                <li><Link to={`/photoshop`}>Photoshop</Link></li>
                                <li><Link to={`/CorelDraw`}>CorelDraw</Link></li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-18'>PROGRAMMING IT</h5>
                              <ul>
                                <li><Link to={`/Cprogramming`}>C Programming</Link></li>
                                <li><Link to={`/C++programming`}>C++ Programming</Link></li>
                                <li><Link to={`/javaprogramming`}>Java Programming</Link></li>
                                <li><Link to={`/ios`}>IOS</Link></li>
                                <li><Link to={`/php`}>Advance PHP</Link></li>
                                <li><Link to={`/laravel`}>Laravel</Link></li>
                                <li><Link to={`/wordpress`}>Wordpress</Link></li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-18'>TRENDY COURSES</h5>
                              <ul>
                                <li><Link to={`/nodejs`}>Node JS</Link></li>
                                <li><Link to={`/angular`}>Angular JS</Link></li>
                                <li><Link to={`/reactjs`}>React JS</Link></li>
                                <li><Link to={`/python`}>Python</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>



                      <li>
                        <span>
                          <Link to="/blog">
                            <div className="headText">Blog</div>
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/contact">
                            <div className="headText">Contact Us</div>
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </nav>

              </div>
              {/* Mobile Menu With Toggle */}
              <div className="col-4 d-lg-none text-end d-flex align-items-center justify-content-end">
                <div className="menuToggle me-2 text-md-light  text-dark" id='menuTaggle'>
                  <i class="fa-solid fa-bars p-1" style={{ borderRadius: "5px" }}></i>
                </div>
                {/* Mobile Menu */}
                <div className="mobileNavigation">
                  <ul className="mobile-mainMenu m-0 p-0  p-2 text-start font-prime">
                    <li><span><Link to="/">Home</Link></span></li>
                    <li><span><Link to="/about">About Us</Link></span></li>
                    <li className='noClick'>
                      <span>
                        <Link to="/course">
                          <div className="headText">
                            <span>Courses</span>
                            <span><i class="ri-arrow-drop-down-line"></i></span>
                          </div>
                        </Link>
                      </span>
                      <ul className="subMenu">
                        <div className="megaMenu">
                          <div className="row">
                            <div className="col-12 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-md-18 fs-sm-16 fs-14'>DEVELOPMENT COURSES</h5>
                              <ul>
                                <li><Link to={`/flutterDevelopment`}>Master In Flutter Development</Link></li>
                                <li><Link to={`/androidDevelopment`}>Master In Android Development</Link></li>
                                <li><Link to={`/gameDevelopment`}>Master In Game Development</Link></li>
                                <li><Link to={`/fullstackdevelopment`}>Master In Full Stack Development</Link></li>
                                <li><Link to={`/webdevelopment`}>Master In Web Development</Link></li>
                                <li><Link to={`/reactnative`}>Master In React Native</Link></li>
                                <li><Link to={`/aspdotnetdevelopment`}>Master In ASP.net development</Link></li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-md-18 fs-sm-16 fs-14'>DESIGN COURSES</h5>
                              <ul>
                                <li><Link to={`/webdesign`}>Master In Web Design</Link></li>
                                <li><Link to={`/ui-uxdesign`}>Master in UI/UX Design</Link></li>
                                <li><Link to={`/graphic`}>Advance Graphics Design</Link></li>
                              </ul>
                              <h5 className='megaTitle fw-600 fs-md-18 fs-sm-16 fs-14 m20-top'>SHORT TERM COURSES</h5>
                              <ul>
                                <li><Link to={`/adobellustrator`}>Adobe Illustrator</Link></li>
                                <li><Link to={`/adobeXD`}>Adobe XD</Link></li>
                                <li><Link to={`/basic-computer-course`}>CCC- Basic Computer Course</Link></li>
                                <li><Link to={`/photoshop`}>Photoshop</Link></li>
                                <li><Link to={`/coreldraw`}>CorelDraw</Link></li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-md-18 fs-sm-16 fs-14'>PROGRAMMING IT</h5>
                              <ul>
                                <li><Link to={`/Cprogramming`}>C Programming</Link></li>
                                <li><Link to={`/C++programming`}>C++ Programming</Link></li>
                                <li><Link to={`/javaprogramming`}>Java Programming</Link></li>
                                <li><Link to={`/ios`}>IOS</Link></li>
                                <li><Link to={`/php`}>Advance PHP</Link></li>
                                <li><Link to={`/laravel`}>Laravel</Link></li>
                                <li><Link to={`/wordpress`}>Wordpress</Link></li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className='megaTitle fw-600 fs-md-20 fs-sm-18 fs-16'>TRENDY COURSES</h5>
                              <ul>
                                <li><Link to={`/nodejs`}>Node JS</Link></li>
                                <li><Link to={`/angular`}>Angular JS</Link></li>
                                <li><Link to={`/reactjs`}>React JS</Link></li>
                                <li><Link to={`/python`}>Python</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li><span><Link to="/blog">Blog</Link></span></li>
                    <li><span><Link to="/contact">Contact Us</Link></span></li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;

export const Profile = (props) => {
  const { isAuth, loginUser, handleLogout } = props

  return (
    <li className='align-self-center extraSub pExtra d-none m15-right'>
      {
        isAuth ? (
          <div className="mainprofile d-flex align-items-center text-start justify-content-end">
            <div className="profileImage m7-right">
              <img src={baseURL + loginUser.profileImage} alt="profileImage" />
            </div>
            <span className='text-capitalize'>{loginUser.name}</span>
            <ul className="profileSub">
              <li>
                <Link to={"/"}>
                  <span><i class="ri-user-3-line m10-right"></i></span>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to={"/wishlist"}>
                  <span><i class="ri-heart-3-line m10-right"></i></span>
                  <span>Wishlist</span>
                </Link>
              </li>
              <li>
                <Link to={"/order"}>
                  <span><i class="ri-order-play-fill m10-right"></i></span>
                  <span>Order</span>
                </Link>
              </li>
              <li>
                <Link to={"/cart"}>
                  <span>
                    <span className='position-relative m10-right'>
                      <i class="bi bi-bag"></i>
                      <span className="cartIcon fs-10" style={{ top: "-3px", right: "-7px" }}>
                        {/* {totalProduct || 0} */}0
                      </span>
                    </span>
                  </span>
                  <span>Cart</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <span><i class="ri-question-line m10-right"></i></span>
                  <span>Help</span>
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout}>
                  <span><i class="ri-logout-circle-r-line m10-right"></i></span>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="login"><i className='ri-user-3-line'></i></Link>
        )
      }

    </li>
  )
}

export const MenuScript = () => {
  useEffect(() => {
    // ================ Mobile menu toggale ==================
    // Main Menu
    const handleSidebar = () => {
      // $(".mobileNavigation").toggleClass("menuIn");
      $(".mobileNavigation").slideToggle();
    }
    $(".mobileNavigation").hide();
    $("#menuTaggle").on("click", handleSidebar);

    // Sub Menu
    const handleSubSidebar = (event) => {
      $(".mobile-mainMenu .subMenu").not($(event.currentTarget).next()).slideUp();
      $(event.currentTarget).next().slideToggle();
    }
    $(".mobile-mainMenu .subMenu").hide();
    $(".mobile-mainMenu > li > span").on("click", handleSubSidebar);

    // Peta Menu
    const handlePetaSidebar = (event) => {
      $(".mobile-mainMenu .petaMenu").not($(event.currentTarget).next()).slideUp();
      $(event.currentTarget).next().slideToggle();
    }

    $(".mobile-mainMenu .petaMenu").hide();
    $(".mobile-mainMenu .subMenu > li > span").on("click", handlePetaSidebar);

    const handleSlider = () => {
      $(".mobileNavigation").hide();
      $(".mobile-mainMenu .subMenu").hide();
      $(".mobile-mainMenu .petaMenu").hide();
    }
    $(".mobile-mainMenu li:not(.noClick)").on("click", handleSlider);


    return () => {
      // ================ Mobile menu toggale ==================
      $("#menuTaggle").off("click", handleSidebar);
      // $(".mobile-mainMenu > li").off("click", handleSlider);
      $(".mobile-mainMenu > li > span").off("click", handleSubSidebar);
      $(".mobile-mainMenu .subMenu > li > span").off("click", handlePetaSidebar);
    }

  }, []);

  return null;
};

