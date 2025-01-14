import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>

          <div className="pb-20">
          <Banner></Banner>
          </div>

          <div className="pb-20 mx-auto max-w-screen-xl px-3 xl:px-0 space-y-5 md:space-y-24">
          <Services></Services>
          </div>
          <Testimonials></Testimonials>


        </div>
    );
};

export default Home;