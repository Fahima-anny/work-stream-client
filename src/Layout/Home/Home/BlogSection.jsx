import { IoIosArrowForward } from "react-icons/io";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "react-router-dom";


const BlogSection = () => {
    return (
        <div className="pb-10 lg:pb-28 pt-5 mx-auto max-w-screen-xl px-3 xl:px-0">
   
                            {/* <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif text-center">Success Stories</h1> */}
                            {/* <p className="text-gray-500 max-w-4xl mx-auto pb-5 text-center">Our services ensure seamless employee management with advanced tools, improving productivity, simplifying workflows, and fostering a collaborative work environment.</p> */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className=" space-y-2">
    <h3 className="w-fit bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center"><TiArrowForward className="text-2xl" /> Latest Blog </h3>
        <h1 className="font-bold text-blue-700 text-3xl">The importance of continuous learning  </h1>
        <h3 className="font-semibold">In the workplace for personal and society growth</h3>
        <p className="text-gray-500 justify pb-5">
        Continuous learning in the workplace fosters personal growth, enhances skills, and boosts career development. It drives innovation, adaptability, and productivity, benefiting individuals and organizations alike. A strong learning culture strengthens society by creating a knowledgeable workforce, promoting economic growth, encouraging lifelong development, and ensuring businesses stay competitive in an evolving world.
        </p>
        <Link to='/blogs' className="mt-5 hover:border hover:border-base-content btn bg-accent text-base-content  hover:bg-accent flex gap-2 justify-start w-fit">View More Blogs <IoIosArrowForward /></Link>
           
    </div>

    <div>
    <div className="relative flex justify-end">
    <img
    className="xl:w-3/4 rounded-tr-2xl rounded-bl-2xl "
     src="https://i.ibb.co.com/LX1XCRdH/happy-blonde-female-manager-has-conversation-with-male-colleague.jpg" alt="" />
    <div
    className="w-[25vw] absolute -left-0 top-40 hidden xl:block"
    >
      <img
      className="rounded-tr-2xl rounded-bl-2xl border-t-8 border-r-8 border-t-base-100 border-r-base-100  "
      src="https://i.ibb.co.com/Cp7n2YLC/portrait-young-office-worker-woman-sitting-office-desk-using-laptop-computer-looking-busy-with-serio.jpg" alt="" />
    </div>
  </div>

    </div>
    

</div>
 

        </div>
    );
};

export default BlogSection;