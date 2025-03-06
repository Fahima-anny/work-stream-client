import { TiArrowForward } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonials = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
     fetch('Testimonials.json')
     .then(res => res.json())
     .then(data => setTestimonial(data))
    }, [])

    return (
        <div className=" py-16 mb-20 bg-base-200">
            <div className=" mx-auto max-w-screen-xl px-3 xl:px-0 ">

            <div className="text-center mx-auto max-w-4xl">
                <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> Testimonial </h3>
                <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif">Success Stories</h1>
                <p className="text-gray-500">Our services ensure seamless employee management with advanced tools, improving productivity, simplifying workflows, and fostering a collaborative work environment.</p>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                  {
                    testimonial.map(test =>
                      <SwiperSlide key={test.id} className="rounded-3xl
                        py-10">  
                       <div className=" flex justify-center items-center">
<img src={test.img}
className="w-40 h-40 rounded-full "
alt="" />
                        </div>
                        <div className="text-center space-y-2 pt-3">
                            <h1 className="font-bold text-3xl text-blue-500">{test.name}</h1>
                            <h1 className="font-bold text-xl flex gap-3 items-center justify-center">Ratings: 
                            <Rating
   className="text-yellow-500 text-3xl "
   initialRating={test.rating}
   emptySymbol={<FaRegStar className="icon" />}
   fullSymbol={<FaStar className="icon" />}
   readonly
   />   
    <span className="text-gray-400">({test.rating})</span></h1>
                            <p className="text-gray-500 max-w-52 md:max-w-4xl mx-auto py-3">{test.description}</p>
                           <div>
                           <h1 className="font-bold text-lg ">{test.workingCompany}</h1>
                           <h1 className="text-gray-500 italic">--{test.designation}--</h1>
                           </div>
                        </div>
                    </SwiperSlide>
                )
                  }

                </Swiper>
            </div>


            </div>
        </div>
    );
};

export default Testimonials;