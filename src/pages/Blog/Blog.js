import React from 'react';
import PageTitle from '../Common/PageTitle';
import BlogBox from './BlogBox';


const Blog = () => {
    const initialData = [
        {
            image: "https://www.rasmussen.edu/images/rasmussenlibraries/blogs/WhichProgrammingLanguage_banner4688ff80-7c94-447a-9478-c65074c22aea.jpgs",
            title: "A Guide to Choosing the Right Programming Language for Beginners",
            content: "In the ever-evolving world of technology, the first step toward a rewarding career as a programmer can be both exciting and daunting. With a multitude of  programming languages available, choosing the right one for your journey as a beginner is a crucial decision. ",
            additionalContent: "This blog will serve as your compass, helping you  navigate the vast landscape of programming languages and making an informed choice",


        },
        {
            image: "https://www.businessworldit.com/wp-content/uploads/2019/04/The-Changing-Role-of-Artificial-Intelligence-in-Business-Management-1.png",
            title: "The Role of Artificial Intelligence in Modern Business",
            content: "In the ever-evolving landscape of modern business, the role of artificial intelligence (AI) has become increasingly prominent. AI is not just a buzzword; it's a transformative force that is reshaping industries and the way companies operate. ",
            additionalContent: "In this blog, we'll delve into the profound impact of AI on modern business and explore its key roles and applications",
        },
        {
            image: "https://emeritus.org/wp-content/uploads/2023/07/5-1.png",
            title: "5G Technology: Revolutionizing Connectivity and IoT",
            content: "In an era driven by the demand for faster, more reliable internet connectivity and the proliferation of smart devices, 5G technology has emerged as a revolutionary force, poised to transform the way we connect, communicate, and interact with the world.",
            additionalContent: "This blog explores the game-changing impact of 5G on connectivity and the Internet of Things (IoT).",
        },
        {
            image: "https://etimg.etb2bimg.com/photo/95217315.cms",
            title: "Sustainable IT: Green Technologies and Eco-Friendly Practices",
            content: "In today's rapidly evolving technological landscape, the pursuit of sustainability  is no longer a choice but a necessity. With the IT sector's ever-expanding  footprint, there is a growing need to adopt green technologies and eco-friendly practices.",
            additionalContent: "This blog explores how Sustainable IT is becoming a key player in reducing environmental impact and promoting a more eco-conscious approach to technology.",
        },
        {
            image: "https://daxg39y63pxwu.cloudfront.net/images/blog/data-analyst-career-path/Industry-specific_data_analytics_careers.png",
            title: "Mastering Data Analytics: A Pathway to In-Demand IT Jobs",
            content: "In today's data-driven world, information is king, and those who can harness and  interpret data are in high demand. Data analytics has emerged as a pivotal field within the IT industry, offering a pathway to lucrative and sought-after job opportunities.",
            additionalContent: "In this blog, we'll explore how mastering data analytics can lead to in-demand IT careers.",
        },
        {
            image: "https://www.columbiasouthern.edu/media/malpvvi0/emergency-trends-in-information-technology.jpg",
            title: "The Future of IT: Emerging Trends and Technologies",
            content: "In the ever-evolving world of Information Technology (IT), staying ahead of the curve is vital. The landscape of IT is continually shaped by emerging trends and technologies that promise to revolutionize how we work, communicate, and live.",
            additionalContent: "In this blog, we'll take a glimpse into the future of IT and explore some of the most exciting emerging trends and technologies.",
        },
    ]
    return (
        <div>
            <div id="bannerSlider" className='position-relative'>
                <PageTitle title={`Blog`} />
            </div>
            <div className="blogCard p40-y">
                <div className="container">
                    <div className="row">

                        {
                            initialData.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12 box-item">
                                            <div className="item-inner">
                                                <BlogBox key={index} item={item} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default Blog;






