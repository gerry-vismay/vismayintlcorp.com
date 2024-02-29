import React from "react";

const ThePlatinum = () => {
  return (
    <section className="h-[50vh]">
      <div className="bg-[url('/hero-alpha.png')] bg-cover bg-fixed h-2/3 w-full bg-center bg-no-repeat">
        <div className="text-white bg-black opacity-60 h-full flex flex-col justify-center items-center gap-12">
          <h1 className="lg:text-3xl">The Platinum Karaoke</h1>
          <p>
            Since its launch in 2010, The Platinum karaoke has been the leading
            karaoke brand in the Philippines for commercial as well as home
            users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThePlatinum;
