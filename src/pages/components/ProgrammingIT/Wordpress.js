import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function Wordpress() {
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
                <PageTitle title={`WordPress `} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> WordPress </span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        WordPress is the simplest, most popular tools to create your own website or blog for development.

                                        In this digital century, WordPress has over 35.2% of all the websites on the Internet.

                                        WordPress is an open-source content management system.

                                        Anyone can use or modify WordPress software to build web sites.
                                        A content management system is basically a tool that makes it easy to manage important aspects of your website – like content – without needing to know anything about programming.
                                        Here the preparation is begun from the scratch and guide you to assemble a lovely site utilizing WordPress. We will manage you every single thing like establishment, posting articles,
                                        refreshing the page substance, menus and gadgets.

                                        We have experienced trainers at Computer Training Institute in Surat who are as of late worked with clients so they understand that what clients need so we give guidance about how to manage clients.
                                    </p>


                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>4 Months</span></button>
                                    <button className='rounded text-center p-2 px-3'>Daily Time <span style={{ color: '##343f52' }}>2 Hours</span></button>
                                </div>
                                <div className="Course_details">
                                    <div className="title mt-4 mb-3 text-4">Included In This Course</div>
                                    <ul>
                                        <li>100% Job</li>
                                        <li>Rich Learning Content</li>
                                        <li>Taught by Experienced Prof.</li>
                                        <li>Industry Oriented Projects</li>
                                    </ul>
                                </div>
                                <div className="Module rounded p-2 fs-20 text-center alert-primary my-4">
                                    Course Modules
                                </div>
                                <div class="course-faq mt-5">
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Career Opportunities
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Web developer</li>


                                                <li class="pb-2">Database Administrators</li>


                                                <li class="pb-2">Software Developers</li>


                                                <li class="pb-2">Back end web developer</li>


                                                <li class="pb-2">Web application developer</li>


                                                <li class="pb-2">Senior web analyst</li>


                                                <li class="pb-2">wordpress developer
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Introduction to WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">What is a Content Management System (CMS)?</li>
                                                <li class="pb-2">What is a WordPress and how it different from other CMS?</li>
                                                <li class="pb-2">Advantage&rsquo;s of using a WordPress for awebsite</li>
                                                <li class="pb-2">Difference between wordpress.com and wordpress.org</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">WordPress Dashboard
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Appearance in dashboard</li>
                                                <li class="pb-2">Permalink settings</li>
                                                <li class="pb-2">General Settings</li>
                                                <li class="pb-2">Privacy settings</li>
                                                <li class="pb-2">Reading settings</li>
                                                <li class="pb-2">Writing Settings</li>
                                                <li class="pb-2">Discussion Settings</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">WordPress Theme
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Choosing the best theme.</li>
                                                <li class="pb-2">Installing a WordPress theme.</li>
                                                <li class="pb-2">Free vs. premium WordPress themes</li>
                                                <li class="pb-2">Modifying theme options.</li>
                                                <li class="pb-2">Searching a theme for different category.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Creating Users in WordPress with different role
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">How to add a user</li>
                                                <li class="pb-2">Types of role</li>
                                                <li class="pb-2">Modifying a user profile</li>
                                                <li class="pb-2">Resetting password</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Managing Media in WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Uploading Images</li>
                                                <li class="pb-2">Customizing images</li>
                                                <li class="pb-2">Managing the Media Library</li>
                                                <li class="pb-2">Uploading Audio, Video, PDF and Word documents.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">WordPress Plugins
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">What is a plugin?</li>
                                                <li class="pb-2">How to choose a plugin.</li>
                                                <li class="pb-2">Downloading and installing a plugin.</li>
                                                <li class="pb-2">Activating and deactivating the plugin.</li>
                                                <li class="pb-2">Some useful Plugin.</li>
                                                <li class="pb-2">Modifying Plugins.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">creating-content-pages-and-posts
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Adding a page in WordPress.</li>
                                                <li class="pb-2">Using formatting options.</li>
                                                <li class="pb-2">Adding images and videos to a page.</li>
                                                <li class="pb-2">Adding a subpage.</li>
                                                <li class="pb-2">Creating categories for posts.</li>
                                                <li class="pb-2">Adding a post.</li>
                                                <li class="pb-2">using tags in a post.</li>
                                                <li class="pb-2">Managing user comments.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Widgets
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">What is WordPress widget?</li>
                                                <li class="pb-2">The difference between widget and plugin.</li>
                                                <li class="pb-2">Customizing widget area.</li>
                                                <li class="pb-2">Adding and removing widgets.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Social Media in WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Adding social media to a website.</li>
                                                <li class="pb-2">Using widgets for social media</li>
                                                <li class="pb-2">Auto post to social media</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">SEO and WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Introduction to SEO</li>
                                                <li class="pb-2">What is On page SEO</li>
                                                <li class="pb-2">Tools for SEO in WordPress</li>
                                                <li class="pb-2">How to add keyword, meta description and title.</li>
                                                <li class="pb-2">Image optimization</li>
                                                <li class="pb-2">Integrating Google Analytics and Google Webmaster on WordPress website</li>
                                                <li class="pb-2">Different Plugins for SEO.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Customizing WordPress Theme
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Modifying footer area.Customizing header area.</li>
                                                <li class="pb-2">Customizing page layout.</li>
                                                <li class="pb-2">Altered plugin.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Security in WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Adding Captcha to log in, contact form and comment form.</li>
                                                <li class="pb-2">Add different plugin for security.</li>
                                                <li class="pb-2">Change Login URL.</li>
                                                <li class="pb-2">Adding limit login attempt and 404 error protection.</li>
                                                <li class="pb-2">Protect page content and Images.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Adding Common functionality
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Adding image sliders.</li>
                                                <li class="pb-2">How to add video sliders?</li>
                                                <li class="pb-2">Creating Menus</li>
                                                <li class="pb-2">Adding Contact form</li>
                                                <li class="pb-2">Adding Testimonial</li>
                                                <li class="pb-2">News Section</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Creating E-Commerce Website using WordPress
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">

                                                <li class="pb-2">Installing e-Commerce compatible WordPress theme.</li>
                                                <li class="pb-2">Adding Plugin for e-Commerce.</li>
                                                <li class="pb-2">Configuring your store.</li>
                                                <li class="pb-2">Adding products.</li>
                                                <li class="pb-2">Managing orders.</li>
                                                <li class="pb-2">Managing customers.</li>
                                                <li class="pb-2">Managing Invoices.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Migrating, Backup and Cloning
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">How to import and export content?</li>
                                                <li class="pb-2">How to take backup and restore it.</li>
                                                <li class="pb-2">Different Plugin for backup.</li>
                                                <li class="pb-2">Migrating from the local server to live server.</li>
                                                <li class="pb-2">Migrating from live server to local server.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3"> WordPress Performance Optimization
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Why is speed critical for your WordPress site?</li>
                                                <li class="pb-2">How to monitor your WordPress website speed?</li>
                                                <li class="pb-2">What decreases your WordPress website?</li>
                                                <li class="pb-2">Increase page speed managing plugins.</li>
                                                <li class="pb-2">Optimize images for Speed.</li>
                                                <li class="pb-2">Optimize WordPress database.</li>
                                                <li class="pb-2">How to utilize a Content Delivery Network (CDN)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <InqueryForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeNewsletter />
            <Footer />
        </>
    )
}

export default Wordpress;
