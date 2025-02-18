import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100
    });
  }, []);

    return (
        <div className="">

  <Helmet>
        <title>Work Stream | Services</title>
      </Helmet>

      <div
        data-aos="fade-right"
        className="hero md:h-[90vh] object-top"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/yXLW4vh/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-m.jpg)",
        }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className=" w-full pt-24 md:pl-32 text-white">
          <div className="max-w-xl border-l-[5px] border-l-blue-700 pl-4 py-2">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Best Service Plans</h1>
            <p className="para">Explore expert insights, industry trends, and valuable tips on employee management, productivity, and workplace innovation in our blog section.</p>
          </div>
        </div>
      </div>

<div className="max-w-screen-xl mx-auto px-3 md:px-0 py-16">

<div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">

<div>
    1
</div>
<div>2</div>
<div>3</div>

</div>

</div>


        </div>
    );
};

export default Services;