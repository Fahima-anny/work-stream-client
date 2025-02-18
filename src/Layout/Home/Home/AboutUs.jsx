import { FaLandmarkFlag } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { HiLightBulb } from "react-icons/hi";
import { TiArrowForward } from "react-icons/ti";


const AboutUs = () => {
    return (
        <div className="py-5">

               <div className="text-center mx-auto max-w-4xl">
                         
                        </div>
            
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
  <div>
    <img src="" alt="" />
  </div>
  <div>
  <h3 className="w-fit bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> About Us </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif">Who We Are</h1>
                            <p className="text-gray-500 justify">At WorkStream, our mission is to transform employee management through innovative and efficient solutions that drive productivity and collaboration. We focus on simplifying complex HR processes, enabling businesses to optimize workforce operations effortlessly. By offering intuitive tools for payroll, time tracking, performance monitoring, and compliance, we empower organizations to focus on their core goals while ensuring smooth, effective management of their employees. Our platform is designed to foster a positive work culture, enhance employee engagement, and provide valuable insights for data-driven decisions, ultimately supporting businesses in achieving sustainable success and creating a productive, motivated workforce.</p>
  </div>
</div>


        </div>
    );
};

export default AboutUs;