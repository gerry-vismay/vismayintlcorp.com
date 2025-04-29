import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
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
            lastname: "",
            email: "",
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
  return (
    <section className="max-w-screen-2xl mx-auto py-24">
      <h1 className="text-center font-bold text-5xl mb-10">
        How would you like to contact us?
      </h1>
      <div className="flex justify-between gap-16 ">
        <div className="bg-gray-200 px-8 py-4 rounded-lg">
          <h2 className="text-3xl font-semibold">Request a call</h2>
          <p className="mb-10 text-xl">
            Give us some info so the right person can get back to you
          </p>

          {sent ? (
            <div>
              <p className="text-green-600">Your request has been sent!</p>
              <p>Page will reload after 10 seconds...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col gap-y-10 text-xl"
            >
              <div className="flex gap-5 ">
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  placeholder="First Name"
                  className="border border-black px-4 py-2 grow"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  className="border border-black px-4 py-2 grow"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="border border-black px-4 py-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="jobtitle"
                id="job-title"
                placeholder="Job Title"
                className="border border-black px-4 py-2"
                value={formData.jobtitle}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                id="mobile-number"
                placeholder="Phone"
                className="border border-black px-4 py-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message (Optional)"
                className="border border-black px-4 py-2"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="w-full bg-[#07549C] text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          )}
        </div>
        <div className="flex flex-col gap-14">
          <div className="bg-gray-200 px-8 py-10 rounded-lg">
            <h2 className="text-3xl">Chat With Us</h2>
            <p className="text-xl mb-14 mt-4">
              Get product info, login help, and live chat with agent.
            </p>
            <button
              className="bg-[#07549C] text-white text-2xl py-2 px-16"
              type="submit"
            >
              Let's Chat
            </button>
          </div>

          <div className="bg-gray-200 px-8 py-10 rounded-lg">
            <h2 className="text-3xl">Leave us some feedback</h2>
            <p className="text-xl mb-14 mt-4">
              Good or bad, we love to hear it all.
            </p>
            <button
              className="bg-[#07549C] text-white text-2xl py-2 px-16"
              type="submit"
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
