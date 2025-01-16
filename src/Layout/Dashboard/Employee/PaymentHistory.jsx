import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PaymentHistory = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

    return (
        <div className="">
              <h1 data-aos="fade-left" className="my-5 text-center text-2xl md:text-4xl font-bold font-serif"> payment History</h1>
           

<div data-aos="fade-right" className="p-5 rounded-xl bg-base-200 mb-5">
<div className="overflow-x-auto">
  <table data-aos="fade-right" className="table bg-white">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Month-Year</th>
        <th>Amount</th>
        <th>Transaction ID</th>
        {/* <th>Edit</th>
        <th>Delete</th> */}
      </tr>
    </thead>
    <tbody>
      {
    //   sort?.map((work, idx) =>    <tr key={work._id}>
    //     <th>{idx+1}</th>
    //     <td>{work.task}</td>
    //     <td>{work.hoursWorked} hr.</td>
    //     <td>{new Date(work.date) // Convert the string to a Date object
    //   .toLocaleDateString("en-GB") // Format to DD/MM/YYYY
    //   .split("/") // Split the date string by "/"
    //   .join(".")} {/* Replace "/" with "." */}</td>
    //     <td>
    //         <button 
    //         onClick={() => handleEditWork(work)}
    //         ><FaEdit className="text-xl text-blue-600 ml-3" /></button>
    //     </td>
    //     <td>
    //     <button
    //     onClick={() => handleDeleteWork(work._id)}
    //     ><RiDeleteBin6Line className="text-xl text-red-600 ml-3" /></button>
    //     </td>
    //   </tr>)
      }
   
    </tbody>
  </table>
</div>
</div>

        </div>
    );
};

export default PaymentHistory;