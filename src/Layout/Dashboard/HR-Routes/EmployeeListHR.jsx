import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaEye, FaSackDollar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { TiArrowForward, TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import { IoMdCloseCircle } from "react-icons/io";

const EmployeeListHR = () => {

    const axiosSecure = useAxiosSecure();
    const [showModal, setShowModal] = useState(false) ;
    const [makePayment, setMakePayment] = useState(null) ;
  
    useEffect(() => {
      AOS.init({
        duration: 2500,
        once: true,
        offset: 100,
      });
    }, []);
    const [sortOrder, setSortOrder] = useState("")

    const { data: usersData = [], isLoading: usersDataLoading, refetch } = useQuery({
        queryKey: ["usersData", sortOrder],
        queryFn: async () => {
          const response = await axiosSecure.get(`/users?sortOrder=${sortOrder}`);
          return response.data;
        },
      });

      // console.log(usersData);

const handleVerification = (id, verifiedStatus) => {
// console.log(verifiedStatus);

axiosSecure.patch(`/users/${id}`, {status: !verifiedStatus} )
.then(res => {
    // console.log(res.data);
    if(res.data.modifiedCount > 0){
        Swal.fire({
            icon: "success",
            title: "Verification Status Updated",
            showConfirmButton: false,
            timer: 1500
          });
          refetch() ;
    }
})
}

const handleSort = (event) => {
  const sortOrder = event.target.value;
  // console.log(sortOrder); 
  if (sortOrder === 'desc') {
      setSortOrder("desc") ; 
      // refetch()
  } else if (sortOrder === 'asc') {
      setSortOrder("asc") ;
      // refetch()
  }
};

const handlePay = (data) => {
setMakePayment(data) ;
setShowModal(true) ;
}

const handlePayApprove = (e) => {
e.preventDefault() ;
const form = e.target ;
const month = form.month.value ;
const year = form.year.value ;

// console.log(month, year);

const payrollData = {
    month,
    year,
    salary: makePayment.salary ,
    email: makePayment.email,
    name: makePayment.name,
}
// console.log(payrollData);
// 
axiosSecure.post("/payroll", payrollData)
.then(res => {
    // console.log(res.data)
    if(res.data.insertedId){
        Swal.fire({
            icon: "success",
            title: "Payment Approval request sent",
            showConfirmButton: false,
            timer: 1500
          });
          setShowModal(false)
    }
    else if(res.data.message){
        Swal.fire({
            icon: "error",
            title: "Payment Approval Already sent",
            showConfirmButton: false,
            timer: 2000
          });
          setShowModal(false)
    }
})
.catch(Er =>{
    console.log("catch theke",Er.message);
})
}

      if (usersDataLoading) {
        return (
          <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        );
      }

    return (
        <div>
      <Helmet>
        <title>Work Stream | Employee List</title>
      </Helmet>

      <div className="grid grid-cols-1 items-center md:grid-cols-2 justify-center md:justify-between">
      <h1
        data-aos="fade-right"
        className="my-5 text-2xl md:text-4xl font-bold font-serif"
      >
        Employee List
      </h1>
 <div
         data-aos="fade-left"
 className="flex justify-end">
 <select onChange={handleSort} className="select select-bordered max-w-xs">
  <option disabled selected>Sort by Salary</option>
  <option value="desc">Descending Order</option>
  <option value="asc">Ascending Order</option>
</select>
 </div>
     </div>


<div data-aos="fade-left" className="p-1 border border-gray-500 rounded-lg mb-5">
<div className="overflow-x-auto">
  <table data-aos="fade-left" className="table text-center">
    {/* head */}
    <thead className="bg-accent text-base-content [&>tr>th]:text-base-content">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Verified</th>
        <th>Bank Account</th>
        <th>Salary</th>
        <th>Pay</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {usersData?.map((data, idx) =>    <tr  key={data._id}>
        <th>{idx+1}</th>
        <td>{data?.name}</td>
        <td>{data?.email}</td>
        <td>{data?.isVerified 
        ? <TiTick
        onClick={() => handleVerification(data._id, data.isVerified)}
        className="text-4xl cursor-pointer mx-auto text-green-500 hover:text-green-600 duration-300"/>
          : <ImCross 
          onClick={() => handleVerification(data._id, data.isVerified)} 
          className="text-xl cursor-pointer hover:text-red-600 duration-300 text-red-500 mx-auto" />
          }</td>
        <td>{data?.bankAcc}</td>
        <td>${data?.salary}<span className="text-gray-400"></span></td>
        <td><button 
        disabled={ data.isVerified ? false : true } 
        onClick={() => handlePay(data)}
        className="btn rounded-lg text-2xl duration-300 text-white hover:bg-blue-600 bg-blue-500"><FaSackDollar /></button></td>
        <td>
            <Link to={`/dashboard/details/${data._id}`} >
            <button className="btn rounded-lg text-xl duration-300 text-white hover:bg-blue-600 bg-blue-500"><FaEye /></button>
            </Link>
            </td>
    
      </tr>)}
   
    </tbody>
  </table>
</div>
</div>


{/* modal  */}
{showModal && (
        <div className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box relative min-h-[60vh]">
            <button
              onClick={() => setShowModal(false)} // Close modal
              className="absolute top-5 right-5 text-3xl text-red-500"
            >
              <IoMdCloseCircle />
            </button>
            <h3 className="font-bold text-2xl text-blue-600 text-center">
              Payment Request
            </h3>
            <p className="py-4 text-gray-500 text-center">
              Please complete the form to proceed
            </p>
            <div className="modal-action">
              <form
                onSubmit={handlePayApprove}
                className="flex flex-col justify-center w-full gap-3"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-2xl flex gap-10">Salary : 
                        ${makePayment.salary}</span>
                  </label>
            
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Month</span>
                  </label>
                  <select required defaultValue={'Select Month'} className="select select-bordered w-full " name="month">
                                <option disabled value="Select Month">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text "> Year</span>
                  </label>
            <input type="number" required className="input input-bordered" name="year" placeholder="Year" id="" />
                </div>
          
                <button  type="submit" className="btn bg-blue-100 text-blue-700 hover:bg-blue-200"><TiArrowForward className="text-2xl" />Pay </button>
              </form>
            </div>
          </div>
        </div>
      )}
            
        </div>
    );
};

export default EmployeeListHR;