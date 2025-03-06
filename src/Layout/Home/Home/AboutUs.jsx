
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="py-5">

            
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
  <div className="relative">
    <img
    className="xl:w-3/4 rounded-tr-2xl rounded-bl-2xl "
     src="https://i.ibb.co.com/Qd97QZp/happy-young-business-colleagues-using-laptop-computer-talking-with-each-other.jpg" alt="" />
    <div
    className="w-[25vw] absolute right-5 -bottom-0 hidden xl:block"
    >
      <img
      className="rounded-tr-2xl rounded-bl-2xl border-t-8 border-l-8 border-t-base-100 border-l-base-100  "
      src="https://i.ibb.co.com/80mQkLW/medium-shot-woman-working-laptop.jpg" alt="" />
    </div>
  </div>
  <div>
  <h3 className="w-fit bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> About Us </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif">Who We Are</h1>
                            <p className="text-gray-500 justify">At WorkStream, our mission is to transform employee management through innovative and efficient solutions that drive productivity and collaboration. We focus on simplifying complex HR processes, enabling businesses to optimize workforce operations effortlessly. By offering intuitive tools for payroll, time tracking, performance monitoring, and compliance, we empower organizations to focus on their core goals while ensuring smooth, effective management of their employees. Our platform is designed to foster a positive work culture, enhance employee engagement, and provide valuable insights for data-driven decisions, ultimately supporting businesses in achieving sustainable success and creating a productive, motivated workforce.</p>
                            <Link to='/about' className=" mt-5 hover:border hover:border-base-content btn bg-accent text-base-content  hover:bg-accent flex gap-2 justify-start w-fit">View Details <IoIosArrowForward /></Link>
  </div>
</div>


        </div>
    );
};

export default AboutUs;