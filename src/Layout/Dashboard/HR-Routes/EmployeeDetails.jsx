
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts';

const EmployeeDetails = () => {

  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // console.log(id);

  const { data: employeeData, isPending: employeeDataLoading } = useQuery({
    queryKey: ["singleEmployeeData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/id/${id}`);
      // console.log(res.data);
      return res.data;
    }
  })

  const { data: chartData, isLoading: chartDataLoading } = useQuery({
    queryKey: ["chartData", employeeData],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payroll/bar/${email}`);
      // console.log("bar chart res",res.data);
      return res.data;
    }
  })

  // console.log(chartData);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

  const processedChartData = chartData?.map(item => ({
    ...item,
    monthYear: `${item.month}/${item.year}`, // Combine month and year
  }));


  // console.log(employeeData);
  const { name, email, salary, bankAcc, isVerified, image, designation, role } = employeeData  || {} ;

  const colors = ["#FFD700", "#8884d8", "#82ca9d", "#FF6347", "#40E0D0", "#FF69B4", "#FF4500"];

  if (employeeDataLoading || chartDataLoading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }


  return (
    <div >
      <Helmet>
        <title>Work Stream | Employee Details</title>
      </Helmet>
      <h1
        data-aos="fade-left"
        className="my-3 pb-5 text-center text-2xl md:text-4xl font-bold font-serif"
      >Employee Details </h1>

      <div
        data-aos="fade-up"
        className="border border-gray-300 max-w-4xl mx-auto rounded-lg">

        <div
          data-aos="fade-up"
          className="  p-5 rounded-xl ">
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
          <h2 className="pt-8 font-medium md:grid grid-cols-2">Verification Status: <span className="">{isVerified ? <TiTick
            className="text-4xl cursor-pointer text-green-500" />
            : <ImCross
              className="text-xl cursor-pointer text-red-500 " />}</span></h2>

        </div>
      </div>

      <div data-aos="fade-up" className="h-[400px] mt-10 max-w-4xl mx-auto">
  <ResponsiveContainer>
    <BarChart data={processedChartData}>
      <XAxis 
        dataKey="monthYear" 
        label={{ value: "Month/Year", position: "insideBottom", offset: -5 }} 
      />
      <YAxis 
        label={{ value: "Salary ($)", angle: -90, position: "insideLeft" }} 
      />
      {/* <Bar dataKey="salary" fill="#8884d8"  barSize={70}/> */}
      <Bar
        dataKey="salary"
        barSize={50}
        fill="#8884d8" // This will act as a fallback color
      >
                {processedChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>



    </div>
  );
};

export default EmployeeDetails;