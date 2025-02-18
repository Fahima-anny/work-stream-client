import { TiArrowForward } from "react-icons/ti";


const EmployeeExperience = () => {
    return (
        <div className="bg-blue-100">
        <div className="mx-auto max-w-screen-xl px-3 xl:px-0 py-10">
             <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg mt-5 py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> Employee Experience </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif  text-center max-w-2xl mx-auto">Strategies to Enhance Engagement and Well-being</h1>
                            {/* <p className="text-gray-500 text-center max-w-4xl mx-auto">Our services ensure seamless employee management with advanced tools, improving productivity, simplifying workflows, and fostering a collaborative work environment.</p> */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
    <div>
        1
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>


</div>

        </div>
    );
};

export default EmployeeExperience;