import { FaLandmarkFlag } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { TiArrowForward } from "react-icons/ti";


const AboutUs = () => {
    return (
        <div>

               <div className="text-center mx-auto max-w-4xl">
                            <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> About Us </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif">Who We Are</h1>
                            <p className="text-gray-600">Our mission is to simplify employee management, enhancing productivity, fostering collaboration, and delivering innovative solutions for workplace success .</p>
                        </div>
            
<div className="flex flex-col md:flex-row gap-10 pt-10 items-center">

{/* card 1 */}
<div className="card md:w-1/3 shadow-lg px-3 py-5 shadow-gray-400 lg:h-[300px]">
  <figure className="bg-yellow-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <GiStairsGoal className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-500 text-2xl">Our Vision    </h2>
    <p className="text-gray-600">Our vision is to create a seamless employee management platform, empowering businesses to thrive through innovation, efficiency, and collaboration.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 2 */}
<div className="card md:w-1/3 shadow-lg px-3 py-7 shadow-gray-400 lg:h-[370px]">
  <figure className="bg-indigo-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <FaLandmarkFlag className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title  font-bold text-blue-500 text-2xl">Our Core Value    </h2>
    <p className="text-gray-600">Our core values are innovation, integrity, collaboration, and excellence. We prioritize customer satisfaction, foster trust, embrace diversity, and empower businesses to achieve their goals with streamlined and effective workforce management solutions.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 3 */}
<div className="card md:w-1/3 shadow-lg px-3 py-5 shadow-gray-400 lg:h-[300px]">
  <figure className="bg-lime-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <GoGoal className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title  font-bold text-blue-500 text-2xl">Our Mission    </h2>
    <p className="text-gray-600">Our mission is to deliver innovative solutions, streamline workforce management, enhance productivity, and foster collaboration for organizational success.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

</div>

        </div>
    );
};

export default AboutUs;