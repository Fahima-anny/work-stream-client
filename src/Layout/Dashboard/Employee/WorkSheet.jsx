import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useUserWorkSheet from "../../../Hooks/useUserWorkSheet";
import { IoMdCloseCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const WorkSheet = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
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
    const [editWorkData, setEditWorkData] = useState(null) ;
    
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);


useEffect(() => {
    const sorted = [...userWorkSheet].sort((a,b) =>  new Date(b.date) - new Date(a.date))
    setSort(sorted) ;
    refetch() ;
}, [userWorkSheet, refetch])

    // console.log(sort);

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
        // console.log(workSheetData);
        axiosSecure.post("/work-sheet", workSheetData)
        .then(res => {
            // console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch() ;
                  form.reset() ;
                  setSelectedDate(new Date()); // Reset DatePicker to today's date
            }
        })
        .catch(er => console.log(er))

    }

    const handleEditWork = (work) =>{
        setIsModalOpen(true);
        setEditWorkData(work) ;
        setSelectedDate(work.date)
        // console.log(work);
    }

const handleEditWorkSheet = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const hoursWorked = form.hoursWorked.value;
    // console.log(task, hoursWorked);
    const updatedWorkSheetData = {
        task,
        hoursWorked,
        email: user.email,
        date: selectedDate
    }
    // console.log(updatedWorkSheetData);
      axiosSecure.patch(`/work-sheet/${editWorkData._id}`, updatedWorkSheetData )
       .then(res => {
        // console.log(res.data);
        //  if success close modal 
        if(res.data.modifiedCount >0){
      setIsModalOpen(false);
            refetch() ;
            Swal.fire({
                icon: "success",
                title: "Your work has been Updated",
                showConfirmButton: false,
                timer: 1500
              });
        }
       })
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

    // console.log(editWorkData);

    if(userWorkPending){
        return <div className="min-h-[80vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
       </div>
    }

    return (
        <div className="">

 <Helmet>
                            <title>Work Stream | Work Sheet</title>
                        </Helmet>

                <h1 data-aos="fade-left" className="my-5 text-center text-2xl md:text-4xl font-bold font-serif">Work Sheet</h1>

          <div 
          className="p-5 rounded-xl bg-base-200 mb-5">
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
                        <input type="submit" value="Submit" className="btn bg-accent  duration-300 text-base-content hover:bg-accent" />
                    </div>
                </form>
            </div>

<div 
data-aos="fade-left" 
className="p-1 border border-gray-500 rounded-lg mb-5">
<div className="overflow-x-auto">
  <table
   data-aos="fade-left"
    className="table text-center">
    {/* head */}
    <thead className="bg-accent text-base-content [&>tr>th]:text-base-content">
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
      {sort?.map((work, idx) =>    <tr  key={work._id}>
        <th>{idx+1}</th>
        <td>{work.task}</td>
        <td>{work.hoursWorked} hr.</td>
        <td>{new Date(work.date) // Convert the string to a Date object
      .toLocaleDateString("en-GB") // Format to DD/MM/YYYY
      .split("/") // Split the date string by "/"
      .join(".")} {/* Replace "/" with "." */}</td>
        <td>
            <button 
            onClick={() => handleEditWork(work)}
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

{/* modal  */}
{isModalOpen && (
        <div className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <button
              onClick={() => setIsModalOpen(false)} // Close modal
              className="absolute top-5 right-5 text-3xl text-red-500"
            >
              <IoMdCloseCircle />
            </button>
            <h3 className="font-bold text-2xl text-blue-600 text-center">
              Edit Your Work Data
            </h3>
            <p className="py-4 text-gray-500 text-center">
              Please complete the form to proceed
            </p>
            <div className="modal-action">
              <form
                onSubmit={handleEditWorkSheet}
                className="flex flex-col justify-center w-full gap-3"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task</span>
                  </label>
                  <select required defaultValue={editWorkData?.task} className="select select-bordered w-full " name="task">
                                <option disabled value="Select Your Task">Select Your Task</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content"> Content</option>
                                <option value="Marketing">Marketing </option>
                                <option value="Paper Work">Paper Work</option>
                            </select>
                </div>
                <div className="form-control ">
                            <input type="number" name="hoursWorked" defaultValue={editWorkData?.hoursWorked} className="input input-bordered" required />
                        </div>
                        {/* Date Picker */}
                        <div className="form-control ">

                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="input input-bordered w-full z-[100]"
                                dateFormat="yyyy/MM/dd"
                                required
                            />
                        </div>
          
                <button  type="submit" className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Edit <FiEdit className="text-xl" /></button>
              </form>
            </div>
          </div>
        </div>
      )}

        </div>
    );
};

export default WorkSheet;