import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { IoMdCloseCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";


const AllEmployeeList = () => {

    const axiosSecure = useAxiosSecure();
    const [isTableView, setIsTableView] = useState(true);
    const [promotionModal, setPromotionalModal] = useState(false);
    const [promotionModalData, setPromotionModalData] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true,
            offset: 100,
        });
    }, []);
    const [sortOrder, setSortOrder] = useState("")

    const { data: allVerifiedEmployee, isLoading: allVerifiedEmployeeLoading, refetch } = useQuery({
        queryKey: ["allVerifiedEmployee", sortOrder],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/verified?sortOrder=${sortOrder}`)
            console.log(res.data);
            return res.data;
        }
    })

    const handleMakeHR = (user) => {
        console.log(user);
        axiosSecure.patch(`/users/make-admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${user.name} (HR)!`,
                        text: `${user.name} has now become a HR `,
                        icon: "success"
                    });
                    refetch();
                }
            })
            .catch(er => console.log(er))
    }

    const handleFire = (user) => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire him!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/fire/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: `${user.name} is Fired!`,
                                text: `${user.name} won't be able to login here anymore `,
                                icon: "error"
                            });
                            refetch();
                        }
                    })
                    .catch(er => console.log(er))
            }
        });


    }

    const handleIncreaseSalaryModal = (user) => {
        setPromotionalModal(true);
        console.log(user.name);
        setPromotionModalData(user);
    }

    const handleIncreaseSalary = (e) => {
        e.preventDefault();
        const newSalary = parseInt(e.target.newSalary.value);
        console.log(newSalary);

        if (newSalary > promotionModalData.salary) {
            axiosSecure.patch(`/users/promotion/${promotionModalData._id}`, { salary: newSalary })
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        e.target.reset();
                        setPromotionalModal(false);
                        Swal.fire({
                            icon: "success",
                            title: "Salary Increased",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
            return
        }
        else {
            Swal.fire({
                title: "Promotion",
                text: "You can only increase the salary",
                icon: "warning"
            });
        }
    }

      const handleSort = (event) => {
        const sortOrder = event.target.value;
        console.log(sortOrder); 
        if (sortOrder === 'desc') {
            setSortOrder("desc") ; 
        } else if (sortOrder === 'asc') {
            setSortOrder("asc") ;
        }
      };

    if (allVerifiedEmployeeLoading) {
        return <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Work Stream | All Employee</title>
            </Helmet>

            <div className="grid grid-cols-1 items-center md:grid-cols-2 justify-center md:justify-between">
            <h1 data-aos="fade-right" className="my-5 text-2xl md:text-4xl font-bold font-serif">All Employee List</h1>
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
            {
                isTableView
                    ? <div data-aos="fade-left" className="p-5 rounded-xl bg-base-200 mb-5">
                        <div className="overflow-x-auto">
                            <table data-aos="fade-left" className="table bg-white text-center">

                                <thead className="py-10">
                                    <tr className="">
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Salary</th>
                                        <th>Make HR</th>
                                        <th>Fire</th>
                                        <th>Increase Salary</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allVerifiedEmployee?.map((user, idx) => <tr key={user._id}>
                                            <th>{idx + 1}</th>
                                            <td>{user?.name}</td>
                                            <td>{user?.designation}</td>
                                            <td>${user?.salary}</td>
                                            <td>
                                                {
                                                    user?.role === "HR"
                                                        ? ""
                                                        : <button
                                                            onClick={() => handleMakeHR(user)}
                                                            disabled={user.isActive ? false: true}
                                                            className="btn w-32 bg-blue-100 text-blue-700 hover:bg-blue-200">Make HR</button>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user?.isActive
                                                        ? <button
                                                            onClick={() => handleFire(user)}
                                                            className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Fire</button>
                                                        : <p className="text-red-600 font-bold">Fired</p>
                                                }
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleIncreaseSalaryModal(user)}
                                                    disabled={user.isActive ? false: true}
                                                    className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Promotion</button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    : <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {
                            allVerifiedEmployee?.map(user =>
                                <div
                                    key={user._id}
                                    data-aos="fade-up"
                                    className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Name : {user.name}</h2>
                                        <p className="text-gray-500">Designation : {user.designation}</p>
                                        <p className="text-gray-500">Salary : ${user.salary}</p>
                                        <div className="card-actions gap-5">
                                        {
                                                    user?.role === "HR" 
                                                        ? ""
                                                        : <button
                                                            onClick={() => handleMakeHR(user)}
                                                            disabled={user.isActive ? false: true}
                                                            className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Make HR</button>
                                                }
                                                <button
                                                    onClick={() => handleIncreaseSalaryModal(user)}
                                                    disabled={user.isActive ? false: true}
                                                    className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Promotion</button>

                                        </div>
                                        {
                                                    user?.isActive
                                                        ? <button
                                                            onClick={() => handleFire(user)}
                                                            className="btn bg-white text-blue-700 hover:bg-white border-blue-700">Fire</button>
                                                        : <p className="text-red-600 font-bold text-center pt-4">Employee Fired</p>
                                                }
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }

            <div className="flex justify-center mt-8 ">
                <button
                    onClick={() => setIsTableView(!isTableView)}
                    className="btn bg-white text-blue-700 hover:bg-white border-blue-700"
                >Change View</button>
            </div>

            {/* modal  */}
            {promotionModal && (
                <div className="modal modal-open modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <button
                            onClick={() => setPromotionalModal(false)} // Close modal
                            className="absolute top-5 right-5 text-3xl text-red-500"
                        >
                            <IoMdCloseCircle />
                        </button>
                        <h3 className="font-bold text-2xl text-blue-600 text-center">
                            Increase Salary
                        </h3>
                        <p className="py-4 text-gray-500 text-center">
                            Please complete the form to proceed
                        </p>
                        <div className="modal-action">
                            <form
                                onSubmit={handleIncreaseSalary}
                                className="flex flex-col justify-center w-full gap-3"
                            >

                                <div className="form-control ">
                                    <label className="label font-semibold text-xl">
                                        Recent Salary : {promotionModalData?.salary}
                                    </label>
                                    <input type="number"
                                        name="newSalary"
                                        placeholder="New Increased Salary"
                                        className="input input-bordered" required />
                                </div>


                                <button type="submit" className="btn bg-blue-100 text-blue-700 hover:bg-blue-200">Edit <FiEdit className="text-xl" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default AllEmployeeList;