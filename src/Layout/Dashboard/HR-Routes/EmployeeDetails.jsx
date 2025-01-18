
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EmployeeDetails = () => {

    const axiosSecure = useAxiosSecure() ;
    const {id} = useParams() ;
    console.log(id);

    const {data: employeeData , isLoading: employeeDataLoading} = useQuery({
        queryKey: ["singleEmployeeData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/id/${id}`) ;
            console.log(res.data);
            return res.data ;
        }
    })

     
        useEffect(() => {
          AOS.init({
            duration: 2500,
            once: true,
            offset: 100,
          });
        }, []);

if(employeeDataLoading){
    return (
        <div className="min-h-[80vh] flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      );
}

console.log(employeeData);
const {name, email, salary, bankAcc, isVerified, image, designation, role  } = employeeData ;


    return (
        <div >

            <Helmet>
                <title>Work Stream | Employee Details</title>
            </Helmet>

            <h1
        data-aos="fade-left"
        className="my-3 pb-5 text-center text-2xl md:text-4xl font-bold font-serif"
      >
        Employee Details
      </h1>

      <div 
          data-aos="fade-up"
      className="bg-gray-100 p-10 max-w-4xl mx-auto rounded-lg">

            <div 
                data-aos="fade-up"
            className=" bg-white p-5 rounded-xl ">
<div className="flex gap-5">
<img src={image}
className="h-16 w-16 rounded-full object-cover object-center"
alt="" />
<div>
<h2 className="text-2xl text-blue-600 font-bold font-serif">{name}</h2>
<h2 className="text-lg font-medium">{designation}</h2>
</div>
</div>

<h2 className="pt-8 border-b pb-2 font-medium md:grid grid-cols-2">Email: <span className="">{email}</span></h2>
<h2 className="pt-8 border-b pb-2 font-medium md:grid grid-cols-2">Role: <span className="">{role}</span></h2>
<h2 className="pt-8 border-b pb-2 font-medium md:grid grid-cols-2">Bank Account No.: <span className="">{bankAcc}</span></h2>
<h2 className="pt-8 border-b pb-2 font-medium md:grid grid-cols-2">Salary: <span className="">${salary}</span></h2>
<h2 className="pt-8 font-medium md:grid grid-cols-2">Verification Status: <span className="">{isVerified  ? <TiTick
        className="text-4xl cursor-pointer text-green-500"/>
          : <ImCross
          className="text-xl cursor-pointer text-red-500 " />}</span></h2>

            </div>
            </div>
        


        </div>
    );
};

export default EmployeeDetails;