import { FaCalendarDays, FaSackDollar } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { IoBarChartSharp } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";


const Services = () => {
    return (
        <div>
           <div className="text-center mx-auto max-w-4xl">
           <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl"/> Smart Solutions </h3>
            <h1 className="my-5 text-2xl md:text-5xl font-bold font-serif">Our Services</h1>
            <p className="text-gray-600">Our services ensure seamless employee management with advanced tools, improving productivity, simplifying workflows, and fostering a collaborative work environment.</p>
           </div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">

{/* card 1 */}
<div className="card bg-base-200 px-3 py-7  ">
  <figure className="bg-green-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <IoBarChartSharp className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-500">HR Analytics & Reporting</h2>
    <p className="text-gray-600">We Provide detailed reports and insights on key HR metrics like performance, turnover rates, and workforce trends.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 2 */}
<div className="card bg-base-200 px-3 py-7  ">
  <figure className="bg-red-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <FaSackDollar className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-500">Payroll Management</h2>
    <p className="text-gray-600">Automate salary calculations, tax deductions, and payroll processing to ensure timely payments and compliance.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 3 */}
<div className="card bg-base-200 px-3 py-7  ">
  <figure className="bg-blue-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <FaCalendarDays className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-500">Attendance & Time Tracking</h2>
    <p className="text-gray-600">Track employee attendance, work hours, and overtime to improve workforce productivity and reduce errors.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 4 */}
<div className="card bg-base-200 px-3 py-7 ">
  <figure className="bg-pink-400 w-20 h-20 text-white rounded-full p-3 mx-auto mb-4">
  <GoLaw className="text-5xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-500">Compliance & Legal Support</h2>
    <p className="text-gray-600">Ensure all employee management practices comply with labor laws and regulations, with document storage and audit trails.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

</div>

        </div>
    );
};

export default Services;