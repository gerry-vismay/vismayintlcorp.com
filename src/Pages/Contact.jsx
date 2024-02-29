import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">Contact Us</h1>
      </div>
      <div className="container mx-auto max-w-screen-2xl mt-16">
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-1/2">
            <p className=" text-3xl font-bold">
              Vismay International Corporation
            </p>
            <div className="h-1 w-20 bg-blue-900 rounded-md my-16"></div>
            <p className="text-sm">
              Vismay International Corporation is engaged in distribution of the
              latest technology and trends from different parts of the globe to
              the Philippines. We cater to the needs of every individual right
              to their doorstep and ensuring product quality and authenticity.
            </p>
          </div>
          <div className="size-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.588248716302!2d121.03889437510432!3d14.508310885967164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf7ce9c44f21%3A0x907a63ce7939f0f!2sVismay%20International%20Corporation!5e0!3m2!1sen!2sph!4v1709173805427!5m2!1sen!2sph"
              style={{
                border: "0",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mt-16">
          <div className="max-w-screen-xl">
            <p className="text-3xl font-bold">Platinum Karaoke</p>
            <div className="h-1 w-20 bg-blue-900 rounded-md my-16"></div>
            <p className="text-sm">
              The Platinum Karaoke systems are easy to use right out of the box.
              Plug, play, and then rock the stage! Loaded with convenient
              features, such as dual microphone jacks to support duets, your
              special karaoke moment can be much better singing along with a
              friend. With an awesome song library consisting of thousands of
              songs for all ages and all talent levels, anyone can have a blast!
            </p>
            <a href="https://www.platinumkaraoke.com/pages/our-stores">
              <button className="py-4 px-12 rounded-xl bg-gray-400 text-white my-12 hover:bg-black transition-bg duration-300 ">
                Our Stores
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
