import { TiArrowForward } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
  }, []);

    return (
        <>
         <div className="text-center mx-auto max-w-4xl  md:pb-10">
         <h3 className="w-fit mx-auto bg-blue-100 border border-blue-700 rounded-lg py-1 px-2 text-blue-600 font-semibold flex items-center mb-3"><TiArrowForward className="text-2xl" />Quick Answers </h3>
                            <h1 className="my-5 text-2xl md:text-4xl font-bold font-serif">Frequently Asked Questions</h1>
                            <p className="text-gray-600">Browse through our frequently asked questions to discover more about our platform’s features, security measures, how it works, and get all the information you need to make the most out of it.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 justify-between items-center">
        {/* Image Section */}
        <div className=" ">
          <img
            src="https://us.123rf.com/450wm/vectorup/vectorup2205/vectorup220500088/185622325-frequently-asked-questions-faq-label-isolated-on-white-background-vector-illustration.jpg?ver=6"
            alt="FAQ Illustration"
            className="shadow-xl shadow-gray-300 rounded-2xl w-full md:h-[50vh] object-cover object-center"
          />
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col">
  
  <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
    <input type="radio" name="faq" id="faq1" defaultChecked />
    <div className="collapse-title text-lg font-medium">What is the purpose of this platform?</div>
    <div className="collapse-content">
      <p>
        Our platform streamlines employee management by offering tools for attendance tracking, payroll processing, performance monitoring, and collaboration.
      </p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
    <input type="radio" name="faq" id="faq2" />
    <div className="collapse-title text-lg font-medium">Is your platform suitable for small businesses?</div>
    <div className="collapse-content">
      <p>
        Absolutely! Our platform is designed to cater to businesses of all sizes, offering scalable solutions for small and large teams alike.
      </p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-100 rounded-box shadow mb-4">
    <input type="radio" name="faq" id="faq3" />
    <div className="collapse-title text-lg font-medium">Can employees access their own information?</div>
    <div className="collapse-content">
      <p>
        Yes, employees can access their profiles, view attendance, update personal details, and download payslips using our self-service portal.
      </p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-base-100 rounded-box shadow">
    <input type="radio" name="faq" id="faq4" />
    <div className="collapse-title text-lg font-medium">Is the platform secure?</div>
    <div className="collapse-content">
      <p>
        Security is our priority. We use advanced encryption and follow industry best practices to protect your data and ensure confidentiality.
      </p>
    </div>
  </div>
</div>

      </div>
        </>
     
    );
};

export default FAQ;