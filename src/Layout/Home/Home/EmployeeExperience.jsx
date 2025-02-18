import { BiSolidShoppingBags } from "react-icons/bi";
import { FaPeopleArrows, FaPeopleGroup } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { TiArrowForward } from "react-icons/ti";


const EmployeeExperience = () => {
    return (
        <div className="bg-accent">
        <div className="mx-auto max-w-screen-xl px-3 xl:px-0 py-10">
             <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg mt-5 py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl " /> Employee Experience </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif  text-center max-w-2xl mx-auto">Strategies to Enhance Engagement and Well-being</h1>
                            {/* <p className="text-gray-500 text-center max-w-4xl mx-auto">Our services ensure seamless employee management with advanced tools, improving productivity, simplifying workflows, and fostering a collaborative work environment.</p> */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
    <div>
       <h2 className="border-b border-b-gray-400 flex justify-between pb-3 text-xl font-bold"> Employee Relations 
        <div className="p-2 rounded-full bg-black border">
        <FaPeopleArrows className=" text-white " />
        </div>
        </h2>
        <h1 className="text-3xl md:text-8xl font-bold text-right text-base-content py-5">%58</h1>
        <p className="text-right">58% of employees prioritize strong relationships, enhancing collaboration, trust, and overall workplace productivity and engagement.</p>
    </div>

    <div>
       <h2 className="border-b border-b-gray-400 flex justify-between pb-3 text-xl font-bold"> Recruitment & Staffing
        <div className="p-2 rounded-full bg-black border">
        <PiCertificateFill className=" text-white " />
        </div>
        </h2>
        <h1 className="text-3xl md:text-8xl font-bold text-right text-base-content py-5">%72</h1>
        <p className="text-right">58% of employees prioritize strong relationships, enhancing collaboration, trust, and overall workplace productivity and engagement.</p>
    </div>

    <div>
       <h2 className="border-b border-b-gray-400 flex justify-between pb-3 text-xl font-bold"> Training & Development
        <div className="p-2 rounded-full bg-black border">
        <FaPeopleGroup className=" text-white " />
        </div>
        </h2>
        <h1 className="text-3xl md:text-8xl font-bold text-right text-base-content py-5">%90</h1>
        <p className="text-right">58% of employees prioritize strong relationships, enhancing collaboration, trust, and overall workplace productivity and engagement.</p>
    </div>
    <div>
       <h2 className="border-b border-b-gray-400 flex justify-between pb-3 text-xl font-bold"> Compensation & Benefits
        <div className="p-2 rounded-full bg-black border">
        <BiSolidShoppingBags className=" text-white " />
        </div>
        </h2>
        <h1 className="text-3xl md:text-8xl font-bold text-right text-base-content py-5">%65</h1>
        <p className="text-right">58% of employees prioritize strong relationships, enhancing collaboration, trust, and overall workplace productivity and engagement.</p>
    </div>

</div>


</div>

        </div>
    );
};

export default EmployeeExperience;