import React from "react";

const Contact = () => {
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
          <form action="" className="flex flex-col gap-y-10">
            <div className="flex gap-5 text-xl">
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First Name"
                className="border border-black px-4 py-2 grow"
              />
              <input
                type="text"
                name="lastName"
                id="last-name"
                className="border border-black px-4 py-2 grow"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="border border-black px-4 py-2"
            />
            <input
              type="text"
              name="jobTitle"
              id="job-title"
              placeholder="Job Title"
              className="border border-black px-4 py-2"
            />
            <input
              type="text"
              name="mobileNumber"
              id="mobile-number"
              placeholder="Phone"
              className="border border-black px-4 py-2"
            />
            <textarea
              name="comment"
              id="comment"
              placeholder="Comment"
              className="border border-black px-4 py-2"
            >
              {" "}
            </textarea>
            <button
              className="bg-[#07549C] text-white text-2xl py-3"
              type="submit"
            >
              SEND
            </button>
          </form>
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
