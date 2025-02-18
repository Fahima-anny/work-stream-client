import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { IoMdCloseCircle } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import { useNavigate } from "react-router-dom";

const Payrol = () => {

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true,
            offset: 100,
        });
    }, []);

    const axiosSecure = useAxiosSecure();
    //   const navigate = useNavigate() ;
    const [showPayModal, setShowPayModal] = useState(false);
    const [modalData, setModalData] = useState(null) ;
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk) ;

    const { data: paymentRequests, isLoading: paymentRequestsLoading, refetch } = useQuery({
        queryKey: ['paymentRequests'],
        queryFn: async () => {
            const result = await axiosSecure.get("/payroll")
            console.log(result.data);
            return result.data;
        }
    })

    console.log(paymentRequests);

    const handlePayment = (request) => {
        console.log("pay", request);
        // navigate("/dashboard/payment")
setShowPayModal(true)
setModalData(request) ;
    }



    if (paymentRequestsLoading) {
        return <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return (
        <div>

            <Helmet>
                <title>Work Stream | Payroll</title>
            </Helmet>

            <h1 data-aos="fade-left" className="my-5 text-center text-2xl md:text-4xl font-bold font-serif">Admin Payroll</h1>

            <div data-aos="fade-right" className="p-5 rounded-xl bg-base-200 mb-5">
                <div className="overflow-x-auto">
                    <table data-aos="fade-right" className="table bg-white text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Month-Year</th>
                                <th>Payment Date</th>
                                <th>Pay</th>
                                {/* <th>Edit</th>
        <th>Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentRequests?.map((request, idx) => <tr key={request._id}>
                                    <th>{idx + 1}</th>
                                    <td>{request?.name}</td>
                                    <td>{request?.salary}</td>
                                    <td>{request?.month}-{request.year}</td>
                                    <td>
                                        {request?.paymentDate 
                                        ? request?.paymentDate 
                                        : ""}
                                    </td>
                                    <td><button
                                    disabled={
                                        request?.paymentDate 
                                        ? true 
                                        : false
                                    }
                                    onClick={() => handlePayment(request)} className="btn bg-white text-blue-700 border-blue-700 hover:bg-blue-100 hover:border-blue-700">Pay</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


            {/* modal  */}
            {showPayModal && (
                <div className="modal modal-open modal-bottom sm:modal-middle">
                    <div className="modal-box relative min-h-[60vh]">
                        <button
                            onClick={() => setShowPayModal(false)} // Close modal
                            className="absolute top-5 right-5 text-3xl text-red-500"
                        >
                            <IoMdCloseCircle />
                        </button>
                        <h3 className="font-bold text-2xl text-blue-600 text-center">
                            Payment
                        </h3>
                        <p className="py-4 text-gray-500 text-center">
                            Please complete the form to proceed
                        </p>
                        <div className="modal-action">
                            <div
                                className="flex flex-col justify-center w-full gap-3"
                            >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-2xl flex gap-10">Salary :
                                            ${modalData.salary}
                                            </span>
                                    </label>
                                </div>

<Elements stripe={stripePromise}>
<CheckoutForm
modalData={modalData}
refetch={refetch}
setShowPayModal={setShowPayModal}
></CheckoutForm>
</Elements>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Payrol;