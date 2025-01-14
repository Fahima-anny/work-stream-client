import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>

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

          <Footer></Footer>

        </div>
    );
};

export default Home;