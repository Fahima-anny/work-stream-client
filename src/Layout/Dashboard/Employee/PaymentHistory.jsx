import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaymentHistory = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const rowPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1) ;
  const [sortOrder, setSortOrder] = useState("desc") ;

  const { data, isPending: paymentHistoryLoading } = useQuery({
    queryKey: ['paymentHistory', currentPage, rowPerPage, sortOrder],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payroll/${user?.email}?page=${currentPage}&size=${rowPerPage}&sortOrder=${sortOrder}`)
      // console.log("response paisi",res.data)
      return res.data
    }
  })

  const paymentHistory = data?.data || []; // Access paginated payment history
  const totalCount = data?.totalCount || 0; // Total number of filtered items

  // const sortedPaymentHistory = paymentHistory
  //   ? [...paymentHistory].sort((a, b) => {
  //     const dateA = new Date(a.year, a.month - 1);
  //     const dateB = new Date(b.year, b.month - 1);
  //     return dateB - dateA;
  //   })
  //   : [];

  const numberOfPages = Math.ceil(totalCount / rowPerPage)
  const pages = [...Array(numberOfPages).keys()]
  console.log(pages);

  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1) ;
    }
  }

  const handleNext = () => {
    if(currentPage < pages?.length){
      setCurrentPage(currentPage + 1) ;
    }
  }

  if (paymentHistoryLoading) {
    return <div className="min-h-[80vh] flex justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  }
  if (paymentHistory?.length === 0) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <p className="text-gray-500 text-xl">No payment history found.</p>
      </div>
    );
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

  return (
    <div className="">
      <Helmet>
        <title>Work Stream | Payment History</title>
      </Helmet>
     <div className="grid grid-cols-1 items-center md:grid-cols-2 justify-center md:justify-between">
     <h1 data-aos="fade-left" className="my-5 text-2xl md:text-4xl font-bold font-serif"> payment History</h1>
 <div 
         data-aos="fade-left"
 className="flex justify-end">
 <select onChange={handleSort} className="select select-bordered max-w-xs">
  <option disabled selected>Sort by Date</option>
  <option value="desc">Descending Order</option>
  <option value="asc">Ascending Order</option>
</select>
 </div>
     </div>
      <div data-aos="fade-right"  className="p-1 border border-gray-500 rounded-lg mb-5">
        <div className="overflow-x-auto">
          <table data-aos="fade-right" className="table text-center">
            {/* head */}
            <thead className="bg-accent text-base-content [&>tr>th]:text-base-content">
              <tr>
                <th>#</th>
                <th>Month-Year</th>
                <th>Amount</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {
                paymentHistory?.map((payment, idx) => <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.month}-{payment.year}</td>
                  <td>${payment.salary} </td>
                  <td>{payment.transactionId} </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>

 <div className="flex justify-center gap-5 items-center">
  <IoIosArrowBack 
  onClick={handlePrev}
   className="text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"/>
          {
            pages?.map((page) => <button
            onClick={() => setCurrentPage(page+1)}
            className={`btn ${currentPage === page+1?  "bg-base-300 hover:border hover:border-base-content"  :""}`}
            key={page}>{page+1}
            </button>)
          }
        <IoIosArrowForward 
        onClick={handleNext}
        className="text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"/>
        </div>


    </div>
  );
};

export default PaymentHistory;