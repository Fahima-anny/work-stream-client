

const About = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-7 pt-10 items-center">

{/* card 1 */}
<div className="card md:w-1/3 shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
  <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
  <GiStairsGoal className="text-3xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-700 text-2xl">Our Vision    </h2>
    <p className="text-gray-500">Our vision is to create a seamless employee management platform, empowering businesses to thrive through innovation, efficiency, and collaboration.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 2 */}
<div className="card md:w-1/3 shadow-md px-3 py-7 shadow-gray-500 lg:h-[350px]">
  <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
  <FaLandmarkFlag className="text-3xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title  font-bold text-blue-700 text-2xl">Our Core Value    </h2>
    <p className="text-gray-500">We prioritize customer satisfaction, foster trust, and empower businesses to achieve their goals with streamlined and effective workforce management solutions.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 3 */}
<div className="card md:w-1/3 shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
  <figure className="bg-blue-700 text-white rounded-full p-5 mx-auto mb-4">
  <GoGoal className="text-3xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title  font-bold text-blue-700 text-2xl">Our Mission    </h2>
    <p className="text-gray-500">Our mission is to deliver innovative solutions, streamline workforce management, enhance productivity, and foster collaboration for organizational success.</p>
    <div className="card-actions">
   <button></button>
    </div>
  </div>
</div>

{/* card 4 */}
<div className="card md:w-1/3 shadow-md px-3 py-5 shadow-gray-500 lg:h-[350px]">
  <figure className="bg-blue-700 text-white rounded-full p-4 mx-auto mb-4">
    <HiLightBulb className="text-4xl" />
  </figure>
  <div className="card-body p-0 items-center text-center">
    <h2 className="card-title font-bold text-blue-700 text-2xl">Why Choose Us</h2>
    <p className="text-gray-500">We provide cutting-edge technology, user-friendly solutions, and unmatched customer support to help businesses optimize employee management efficiently.</p>
    <div className="card-actions">
      <button></button>
    </div>
  </div>
</div>

</div>
        </div>
    );
};

export default About;