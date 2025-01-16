import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useUserWorkSheet from "../../../Hooks/useUserWorkSheet";


const WorkSheet = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [userWorkSheet, userWorkPending, refetch] = useUserWorkSheet() ;
    // const {data: userWorkSheet, isPending: userWorkPending , refetch} = useQuery({
    //     queryKey: [user.email, 'userWorkSheet'],
    //     queryFn: async () => {
    //         const result = await axiosSecure.get(`/work-sheet/${user?.email}`) ;
    //         console.log(result?.data);
    //         return result?.data
    //     },
    //     enabled: !!user?.email
    // })
    const [sort, setSort] = useState([]) ;
    
useEffect(() => {
    const sorted = [...userWorkSheet].sort((a,b) =>  new Date(b.date) - new Date(a.date))
    setSort(sorted) ;
    refetch() ;
}, [userWorkSheet, refetch])

    console.log(sort);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const task = form.task.value;
        const hoursWorked = form.hoursWorked.value;
        // console.log(task, hoursWorked);
        const workSheetData = {
            task,
            hoursWorked,
            email: user.email,
            date: selectedDate.toISOString()
        }
        console.log(workSheetData);
        axiosSecure.post("/work-sheet", workSheetData)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch() ;
            }
        })
        .catch(er => console.log(er))

    }

    const handleEditWork = (id) =>{
       axiosSecure.patch("/work-sheet", )
    }
    const handleDeleteWork = (id) =>{
// console.log(id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
        axiosSecure.delete(`/work-sheet/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                refetch()
     Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
            }
        })
    }
  });


    }

    if(userWorkPending){
        return <div className="min-h-[80vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
       </div>
    }

    return (
        <div className="">
                <h1 className="my-5 text-center text-2xl md:text-4xl font-bold font-serif">Work Sheet</h1>

          <div className="p-5 rounded-xl bg-base-200 mb-5">
                <form onSubmit={handleSubmit} >
                    <label className="label">
                        <span className="label-text font-medium">Add a New Work Query</span>
                    </label>
                    <div className="grid md:grid-cols-4 gap-3">
                        <div className="form-control ">
                            <select required defaultValue='Select Your Task' className="select select-bordered w-full " name="task">
                                <option disabled value="Select Your Task">Select Your Task</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content"> Content</option>
                                <option value="Marketing">Marketing </option>
                                <option value="Paper Work">Paper Work</option>
                            </select>
                        </div>
                        <div className="form-control ">
                            <input type="number" name="hoursWorked" placeholder="Hours Worked" className="input input-bordered" required />
                        </div>
                        {/* Date Picker */}
                        <div className="form-control ">

                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="input input-bordered w-full"
                                dateFormat="yyyy/MM/dd"
                                required
                            />
                        </div>
                        <input type="submit" value="Submit" className="btn bg-blue-100 hover:bg-blue-200 duration-300 text-blue-700" />
                    </div>
                </form>
            </div>

<div className="p-5 rounded-xl bg-base-200 mb-5">
<div className="overflow-x-auto">
  <table className="table bg-white">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Task</th>
        <th>Working Hours</th>
        <th>Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {sort?.map((work, idx) =>    <tr key={work._id}>
        <th>{idx+1}</th>
        <td>{work.task}</td>
        <td>{work.hoursWorked} hr.</td>
        <td>{new Date(work.date) // Convert the string to a Date object
      .toLocaleDateString("en-GB") // Format to DD/MM/YYYY
      .split("/") // Split the date string by "/"
      .join(".")} {/* Replace "/" with "." */}</td>
        <td>
            <button 
            onClick={() => handleEditWork(work._id)}
            ><FaEdit className="text-xl text-blue-600 ml-3" /></button>
        </td>
        <td>
        <button
        onClick={() => handleDeleteWork(work._id)}
        ><RiDeleteBin6Line className="text-xl text-red-600 ml-3" /></button>
        </td>
      </tr>)}
   
    </tbody>
  </table>
</div>
</div>


        </div>
    );
};

export default WorkSheet;