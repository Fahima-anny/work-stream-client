import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Progress = () => {

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true,
            offset: 100,
        });
    }, []);

    const axiosSecure = useAxiosSecure();
    const [sortedData, setSortedData] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [selectedMonth, setSelectedMonth] = useState('Select Month');


    const { data: allEmployee, isLoading: allEmployeeloading } = useQuery({
        queryKey: ["allEmployeeProgress"],
        queryFn: async () => {
            const res = await axiosSecure.get("/work-sheet")
            console.log(res.data);
            return res.data;
        },
        onSuccess: (data) => setSortedData(data),
    })

    useEffect(() => {
        if (allEmployee) {
            setSortedData(allEmployee); // Update sortedData with allEmployee when data is available
        }
    }, [allEmployee]);

    // setSortedData(allEmployee)
    console.log(sortedData);

    const handleSearchByName = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchName(searchValue);
    
        // Filter data by name first
        const nameFilteredData = allEmployee.filter((employee) =>
            employee.userName.toLowerCase().includes(searchValue)
        );
            setSortedData(nameFilteredData);
            setSelectedMonth('Select Month')

    };


          // Filter data by month
          const handleSortByMonth = (e) => {
            const month = e.target.value;
            setSelectedMonth(month);
        
            // Filter data by month first
            const monthFilteredData = allEmployee.filter((employee) => {
                const employeeMonth = new Date(employee.date).getMonth() + 1;
                return !isNaN(employeeMonth) && employeeMonth === parseInt(month, 10);
            });
        
            // Apply the name filter if searchName is not empty
            if (searchName) {
                const filteredData = monthFilteredData.filter((employee) =>
                    employee.userName.toLowerCase().includes(searchName)
                );
                setSortedData(filteredData); // Update with filtered data
            } else {
                setSortedData(monthFilteredData); // Update with only month-filtered data
            }
        };


    if (allEmployeeloading) {
        return (
            <div className="min-h-[80vh] flex justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }


    return (
        <div>

            <Helmet>
                <title>Work Stream | Progress</title>
            </Helmet>

            <h1
                data-aos="fade-right"
                className="my-3 pb-5 text-center text-2xl md:text-4xl font-bold font-serif"
            >
                All Employee Progress
            </h1>


            <div
                data-aos="fade-left"
                className="flex flex-col md:flex-row justify-center gap-3 md:justify-between my-8">
                <div
                    className="text-blue-400 text-2xl font-semibold">Sort Table Data</div>
                <div
                >
                    <form className="flex gap-3 flex-col md:flex-row">
                        <div className="form-control">
                            <input type="text"
                                className="input input-bordered"
                                placeholder="Sort by Name"
                                value={searchName} // Bind to searchName state
                                onChange={handleSearchByName}
                                name="" id="" />
                        </div>
                        <div className="form-control">
                            <select required 
                            // defaultValue={'Select Month'} 
                              value={selectedMonth}
                              onChange={handleSortByMonth}
                            className="select select-bordered w-full " name="month">
                                <option disabled value="Select Month">Sort by Month</option>
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
                    </form>
                </div>
            </div>


            <div data-aos="fade-right" className="p-1 border border-gray-500 rounded-lg mb-5">
                <div className="overflow-x-auto">
                    <table data-aos="fade-right" className="table text-center">

                        <thead className="bg-accent text-base-content [&>tr>th]:text-base-content">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Task</th>
                                <th>Working Hour</th>
                                <th>Date</th>

                            </tr>
                        </thead>
                        <tbody>
                            {  
                        sortedData?.map((data, idx) => <tr key={data._id}>
                                <th>{idx + 1}</th>
                                <td>{data?.userName}</td>
                                <td>{data?.email}</td>
                                <td>{data?.task}</td>
                                <td>{data?.hoursWorked}</td>
                                <td>{new Date(data?.date) // Convert the string to a Date object
                                    .toLocaleDateString("en-GB") // Format to DD/MM/YYYY
                                    .split("/") 
                                    .join(".")}</td>
                            </tr>)
                        }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Progress;