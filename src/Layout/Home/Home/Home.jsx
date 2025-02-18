
import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Features from "./Features";
import BlogSection from "./BlogSection";
import EmployeeExperience from "./EmployeeExperience";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
  }, []);

    return (
        <div className="">

 <Helmet>
                            <title>Work Stream | Home</title>
                        </Helmet>

          <div data-aos="fade-in" className="pb-20">
          <Banner></Banner>
          </div>

          <div data-aos="fade-in" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <Features></Features>
          </div>

          <div data-aos="fade-in" className="pb-20 ">
          <EmployeeExperience></EmployeeExperience>
          </div>

          <div  data-aos="fade-in" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <AboutUs></AboutUs>
          </div>


<div data-aos="fade-in">
          <Testimonials></Testimonials>
</div>

<div>
  <BlogSection></BlogSection>
</div>

           <div data-aos="fade-in" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <FAQ></FAQ>
          </div>


        </div>
    );
};

export default Home;