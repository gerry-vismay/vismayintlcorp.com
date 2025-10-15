import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import ContactUsBanner from "../assets/images/banner/CONTACT_US.webp";

import Banner from "../components/banner/Banner";
import GoogleMap from "../components/google-map/GoogleMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bkumtmv",
        "template_t9adb01",
        formData,
        "xXsOPEA8qL1jao7Rr"
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          setSent(true);
          setFormData({
            firstname: "",
            middlename: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setError("Something went wrong. Please try again.");
        }
      );

    setTimeout(() => {
      window.location.reload(); // reload the page
    }, 10000); // 10 seconds
  };

  const cssInput =
    "bg-[#06529B] text-xs md:text-base text-white p-4 mb-5 rounded-md outline-none border-none focus:outline-[#06529B] placeholder-gray-300";
  return (
    <>
      <Banner img={ContactUsBanner} />
      <main className="max-w-screen-xl mx-auto py-16">
        <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-[#06529B] text-center font-bold pb-12">
          How would you like to contact us?
        </h2>

        <div className="flex flex-col gap-8 ">
          {sent ? (
            <div>
              <p className="text-green-600">Your request has been sent!</p>
              <p>Page will reload after 10 seconds...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row md:gap-8 gap-2 px-8"
            >
              {/* inputs */}
              <div className="flex-1 flex flex-col ">
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  placeholder="First Name"
                  className={cssInput}
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="middlename"
                  id="middle-name"
                  className={cssInput}
                  placeholder="Middle Name"
                  value={formData.middlename}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  placeholder="Last Name"
                  className={cssInput}
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={cssInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  id="mobile-number"
                  placeholder="Phone"
                  className={cssInput}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* message */}
              <div className="flex-1 flex flex-col bg-[#06529B]  gap-y-2 rounded-lg ">
                <span className="pl-4 pt-4 text-xs md:text-base  text-white">
                  Your message (Optional)
                </span>
                <textarea
                  className="resize-none mx-3 rounded-t-md outline-none focus:outline-white px-2 py-2 text-[#06529B]"
                  rows="10"
                  name="message"
                  id="message"
                  // placeholder="Your Message (Optional)"
                  // className="border border-black px-4 py-2"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  className="block mx-3 text-[#06529B] bg-white py-2 mb-2 rounded-b-md font-normal"
                  type="submit"
                  // className="w-full bg-[#07549C] text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Send
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </form>
          )}

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-8 px-8">
            {/* Left Side: Chat With Us */}
            <div className="flex-1 bg-[#06529B] text-white rounded-md pb-4 px-8">
              {/* Top-left Label */}
              <h2 className="text-base md:text-2xl py-4 ">Chat With Us</h2>

              {/* Center Textarea */}
              <p className="text-xs md:text-base font-normal mb-20">
                Get product info, login help, and live chat with agent.
              </p>

              {/* Send Button */}
              <button className="bg-white text-xs md:text-base text-[#06529B] px-8 py-2 rounded-md">
                Send
              </button>
            </div>

            {/* Bot Right Side: Leave us some feedback */}
            <div className="flex-1 bg-[#06529B] text-white rounded-md pb-4 px-8">
              {/* Top-left Label */}
              <h2 className="text-base md:text-2xl  py-4">
                Leave us some feedback
              </h2>

              {/* Center Textarea */}
              <p className="text-xs md:text-base font-normal mb-20">
                Let's Chat!
              </p>

              {/* Send Button */}
              <button className="bg-white text-xs md:text-base text-[#06529B] px-8 py-2 rounded-md">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
        <GoogleMap />
      </main>
    </>
  );
};

export default Contact;
