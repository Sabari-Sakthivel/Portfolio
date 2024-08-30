import React from "react";

const AboutMe = () => {
  return (
    <>
      <section id="aboutme">
        <div className="bg-dark-1 flex flex-col min-h-screen   ">
          <p className="text-white font-poppins ml-[675px] justify-center  pt-14  font-semibold text-4xl  ">
            Know <span className="underline  customUnderline">Me</span> More
          </p>
          <h1 className=" text-Gray-1   opacity-5 text-9xl ml-72  pt-10 font-poppins font-semibold flex items-center justify-center z-10">
            ABOUT ME
          </h1>
          <div className="">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl ml-72 text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400 ml-72 font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                 Delivering work within time and budget
                which meets client’s requirements is our <br /> moto.  Lorem Ipsum has
                been the industry's standard dummy text ever when an <br /> unknown
                printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400 ml-72 underline underline-offset-8 h-9 relative inline-block font-serif">
              <ul>
                <li><span className="text-gray-100 font-sans h-5">Name</span>:Sabari Sakthivel </li>
                <li><span className="text-gray-100 font-sans h-5">Phone Number</span>:6383284269</li>
                <li><span className="text-gray-100 font-sans h-5">Email</span>:sabari8536@gmail.com</li>
                <li><span className="text-gray-100 font-sans h-5">Age</span>:23</li>
                <li><span className="text-gray-100 font-sans h-5">From</span>:Chennai,India</li>
              </ul>
              <button className="text-gray-100 font-sans h-5">Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
