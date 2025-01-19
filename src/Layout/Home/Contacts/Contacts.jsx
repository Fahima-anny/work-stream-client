/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

const Contacts = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(email, message);

    emailjs
        .send(
            "service_cpq7311", // Replace with your EmailJS service ID
            "template_tjal17m", // Replace with your EmailJS template ID
            {
                name: name, // Matches {{name}} in your template
                email: email, // Matches {{email}} in your template
                message: message, // Matches {{message}} in your template
            },
            "So5gNmJiB96adK6Wa" // Replace with your EmailJS public key
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                // alert("Message sent successfully!");
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    // text: "I have got your message & will reply you soon",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset(); // Clear the form after submission
            },
            (error) => {
                console.error("FAILED...", error);
                // alert("Message failed to send. Please try again.");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Try again",
                });
            }
        );

}
    
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,
        offset: 100
      });
    }, []);

    return (
        <div className="">
           
 <Helmet>
                            <title>Work Stream | Contacts</title>
                        </Helmet>

           <div
       data-aos="fade-right"
        className="hero md:h-[80vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/dpCJcTC/pexels-olly-789822.jpg)",
        }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className=" w-full pt-24 md:pl-32 text-white">
          <div className="max-w-xl border-l-[5px] border-l-blue-700 pl-4 py-2">
            <h1 className="mb-5 text-5xl md:text-5xl font-bold">Let's Get Connected</h1>
            <p className="para">Have questions or need assistance? Connect with us through our contact section. We’re dedicated to providing timely support and addressing your concerns to ensure a seamless experience with our platform.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-3 md:px-0" 
       data-aos="fade-left"
       >
        <div className="flex flex-col lg:flex-row py-16">
          {/* Contact Details Section */}
          <div className="bg-white py-6 lg:w-1/3 w-full mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Contact Info</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-500">Surkhet, NP12</p>
                  <p className="text-gray-500">Bireendranagar 06</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-500">+0098 9873 5647</p>
                  <p className="text-gray-500">+0096 3434 5678</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500">codinglab@gmail.com</p>
                  <p className="text-gray-500">info.codinglab@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="bg-white py-6 lg:w-2/3 w-full">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Send us a message</h2>
            <p className="text-gray-500 mb-6">
              If you have any work from me or any types of queries related to my tutorial, you can send me a message from here.
              It's my pleasure to help you.
            </p>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-control mb-4">
                <input
                name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control mb-4">
                <input
                name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Message */}
              <div className="form-control mb-4">
                <textarea
                name="message"
                  placeholder="Enter your message"
                  className="textarea textarea-bordered w-full"
                  rows="2"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
                <button type="submit" className="btn bg-blue-100 hover:bg-blue-200 duration-300 text-blue-700">Send Message </button>
            </form>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Contacts;