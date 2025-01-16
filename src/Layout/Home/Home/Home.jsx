
import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Services from "./Services";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
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

          <div  data-aos="fade-right" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <AboutUs></AboutUs>
          </div>

          <div data-aos="fade-left" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <Services></Services>
          </div>

<div data-aos="fade-right">
          <Testimonials></Testimonials>
</div>

           <div data-aos="fade-left" className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <FAQ></FAQ>
          </div>


        </div>
    );
};

export default Home;