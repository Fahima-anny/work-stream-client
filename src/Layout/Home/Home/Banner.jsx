const Banner = () => {
    return (
      <div id="banner" className="banner-rounded bg-base-100">
        <div
          className="hero aboutHero min-h-[85vh] bg-cover bg-center "
          style={{
            backgroundImage: "url(https://i.ibb.co.com/k5yyZvv/pexels-fauxels-3183127.jpg)",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-50"></div>
          <div className="hero-content lg:pt-20 text-white text-left ">
            <div className="max-w-4xl border-l-4 pl-4 border-l-blue-700 ">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold font-serif">Streamline Employee Management for a Smarter Workplace.</h1>
              <p className="mb-5 para">
              Optimize your workforce operations effortlessly, enhance productivity, and create a smarter, more efficient workplace with streamlined employee management solutions.
              </p>
              <button className="px-4 hover:bg-[#000f38] duration-300 py-1 bg-black border-2 border-blue-700 rounded-badge ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  