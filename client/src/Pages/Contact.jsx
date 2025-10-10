import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import desktopBannerContactUs from "../assets/images/banner/CONTACT_US.webp";

import Banner from "../components/banner/Banner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    jobtitle: "",
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
            jobtitle: "",
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

  const cssForm =
    "h-[79px] !mt-6 first:!mt-0 !py-2 !px-4 leading-[100%] !mb-8 !text-xl font-medium  font-Inter font-sans-serif border-4 border-[#06529B] bg-[#06529B] text-white placeholder-white focus:outline-none focus:ring w-full";
  return (
    <section className="flex flex-col items-center min-h-screen bg-white ">
      <Banner desktopImage={desktopBannerContactUs} className="pb-7" />
      <h2
        className="w-[1062px] h-[77px] font-inter font-bold not-italic text-6xl !m-10 !mt-20 leading-[100%] text-center text-[#06529B]"
        style={{
          width: "1062px",
          height: "77px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
        }}
      >
        How would you like to contact us?
      </h2>

      <div className="flex flex-col items-center min-h-screen bg-white py-10">
        {sent ? (
          <div>
            <p className="text-green-600">Your request has been sent!</p>
            <p>Page will reload after 10 seconds...</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-row w-[1660px] p-8 mt-20 mx-auto gap-8 bg-white"
          >
            <div className="flex flex-col w-[698px]">
              <input
                type="text"
                name="firstname"
                id="first-name"
                placeholder="First Name"
                className={cssForm}
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastname"
                id="last-name"
                className={cssForm}
                placeholder="Last Name"
                value={formData.middlename}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className={cssForm}
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="jobtitle"
                id="job-title"
                placeholder="Job Title"
                className={cssForm}
                value={formData.jobtitle}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                id="mobile-number"
                placeholder="Phone"
                className={cssForm}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-[822px] h-[684px] bg-[#06529B] !p-4 box-border flex flex-col justify-between">
              <span className="font-medium !font-inter !font-sans-serif !text-xl text-white !mb-2 leading-[100%]">
                Your message (Optional)
              </span>
              <textarea
                style={{
                  backgroundColor: "#fff",
                  width: "800px",
                  height: "580px",
                  alignSelf: "center",
                  resize: "none",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  padding: "10px",
                  border: "none",
                  outline: "none",
                  color: "#000",
                }}
                name="message"
                id="message"
                // placeholder="Your Message (Optional)"
                // className="border border-black px-4 py-2"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                style={{
                  width: "300px",
                  height: "51px",
                  backgroundColor: "white",
                  color: "#06529B",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "center",
                  marginTop: "10px",
                }}
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
        <div className="flex flex-row w-[1660px] p-8 !mt-16 !mb-16 mx-auto gap-8 bg-white">
          {/* Left Side: Chat With Us */}
          <div
            style={{
              width: "698px",
              height: "250px",
              backgroundColor: "#06529B",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top-left Label */}
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontStyle: "normal", // “Semi Bold” is just weight 600
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Chat With Us
            </h3>

            {/* Center Textarea */}
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              Get product info, login help, and live chat with agent.
            </h3>

            {/* Send Button */}
            <button
              style={{
                width: "300px",
                height: "51px",
                backgroundColor: "white",
                color: "#06529B",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                border: "none",
                cursor: "pointer",
                alignSelf: "center",
                marginTop: "10px",
              }}
            >
              Send
            </button>
          </div>

          {/* Bot Right Side: Leave us some feedback */}
          <div
            style={{
              width: "822px",
              height: "250px",
              backgroundColor: "#06529B",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top-left Label */}
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontStyle: "normal", // “Semi Bold” is just weight 600
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Leave us some feedback
            </h3>

            {/* Center Textarea */}
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              Let's Chat!
            </h3>

            {/* Send Button */}
            <button
              style={{
                width: "300px",
                height: "51px",
                backgroundColor: "white",
                color: "#06529B",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                border: "none",
                cursor: "pointer",
                alignSelf: "center",
                marginTop: "10px",
              }}
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
