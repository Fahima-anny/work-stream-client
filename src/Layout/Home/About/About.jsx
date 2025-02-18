import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaLandmarkFlag } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { HiLightBulb } from "react-icons/hi";
import { TiArrowForward } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100
    });
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div>
      <Helmet>
        <title>Work Stream | About Us</title>
      </Helmet>

      {/* Hero Section */}
      <div
        data-aos="fade-in"
        className="hero aboutHero md:h-[80vh] object-top"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/RGP68cYC/young-cheerful-entrepreneurs-having-fun-while-working-together-office.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="w-full pt-24 md:pl-32 text-white">
          <div className="max-w-xl border-l-[5px] border-l-blue-700 pl-4 py-2">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">About Us</h1>
            <p className="para">
              Transforming employee management with automation, insightful analytics, and seamless collaboration to empower businesses for sustainable growth and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 pb-16">
        <div className="py-16">
          <div className="text-center mx-auto max-w-4xl">
            <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center">
              <TiArrowForward className="text-2xl" /> About Us
            </h3>
            <h2 className="my-5 text-2xl md:text-4xl font-bold font-serif text-base-content">Who We Are</h2>
            <p className="text-gray-500">
              At WorkStream, we redefine workforce management with cutting-edge tools that streamline processes, enhance productivity, and foster workplace efficiency.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-16">
            {/* Card 1 */}
            <div className="card shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
              <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
                <GiStairsGoal className="text-3xl" />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title font-bold text-blue-700 text-2xl">Our Vision</h2>
                <p className="text-gray-500">Creating a seamless employee management platform to empower businesses with innovation, efficiency, and collaboration.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card shadow-md px-3 py-7 shadow-gray-500 lg:h-[350px]">
              <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
                <FaLandmarkFlag className="text-3xl" />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title font-bold text-blue-700 text-2xl">Our Core Value</h2>
                <p className="text-gray-500">Prioritizing customer satisfaction, trust, and innovation to optimize workforce solutions.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
              <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
                <GoGoal className="text-3xl" />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title font-bold text-blue-700 text-2xl">Our Mission</h2>
                <p className="text-gray-500">Delivering innovative solutions that enhance productivity and foster seamless collaboration.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
              <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
                <HiLightBulb className="text-4xl" />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title font-bold text-blue-700 text-2xl">Why Choose Us</h2>
                <p className="text-gray-500">We provide user-friendly, cutting-edge tools with unmatched support for efficient employee management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with CountUp */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="w-fit bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center">
              <TiArrowForward className="text-2xl" /> How It Started
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold my-4">Empowering Workforce Efficiency</h2>
            <p className="text-gray-500">
              Our platform simplifies employee management, enhances collaboration, and drives workplace efficiency through innovative solutions.
            </p>

            {/* Number Counter Animation */}
            <div ref={ref} className="grid grid-cols-2 gap-5 mt-8">
              <div className="bg-base-300 p-5 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700">{inView && <CountUp start={0} end={5} duration={2} />}+</h3>
                <p className="text-gray-500">Years of Experience</p>
              </div>
              <div className="bg-base-300 p-5 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700">{inView && <CountUp start={0} end={30} duration={2} />}+</h3>
                <p className="text-gray-500">Companies Using</p>
              </div>
              <div className="bg-base-300 p-5 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700">{inView && <CountUp start={0} end={1000} duration={3} />}+</h3>
                <p className="text-gray-500">Satisfied Clients</p>
              </div>
              <div className="bg-base-300 p-5 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700">{inView && <CountUp start={0} end={10000} duration={3} />}+</h3>
                <p className="text-gray-500">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
