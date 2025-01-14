
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="">

          <div className="pb-20">
          <Banner></Banner>
          </div>

          <div className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <AboutUs></AboutUs>
          </div>

          <div className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <Services></Services>
          </div>

          <Testimonials></Testimonials>

           <div className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0">
          <FAQ></FAQ>
          </div>


        </div>
    );
};

export default Home;