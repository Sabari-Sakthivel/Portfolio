import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "./sidebar";

const Home = () => {
  const [sequence, setSequence] = useState([
    "I'm Sabari Sakthivel",
    2000,
    "MERN Stack Developer",
    2000,
    "React.js Developer",
    2000,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence((prevSequence) => {
        return prevSequence[0] === "I'm Sabari Sakthivel"
          ? [
              "MERN Stack Developer",
              1000,
              "I'm Sabari Sakthivel",
              1000,
              "React.js Developer",
              1000,
            ]
          : [
              "I'm Sabari Sakthivel",
              1000,
              "MERN Stack Developer",
              1000,
              "React.js Developer",
              1000,
            ];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      <section
        id="home"
        className="min-h-screen flex-1 relative bg-zinc-900 ml-64 text-white flex flex-col justify-center items-center p-4"
      >
        <div className="text-center">
          <h3 className="text-white font-medium text-2xl mb-10">Welcome</h3>
          <div className="text-white font-serif text-2xl mt-6">
            <TypeAnimation
              sequence={sequence}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-white text-2xl font-semibold mt-7">
            From Chennai, India
          </p>
          <button className="inline-block  font-poppins  text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500 px-10 py-4 mt-10 rounded-full transition-colors duration-300  smooth-scroll">
            Hire Me
          </button>
        </div>
        <div className="absolute bottom-12 w-full flex justify-center">
          <IoIosArrowDown className="fall-animation text-3xl text-white cursor-pointer" />
        </div>
      </section>
      <section id="about-me">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400     h-9 relative inline-block font-serif">
              <ul className="decoration-0" >
                <li className="border-b-2 py-3">
                  <span className="text-gray-100 font-sans underline">
                    Name
                  </span>
                  : Sabari Sakthivel
                </li>
                <li className="border-b-2 py-3">
                  <span className="text-gray-100 font-sans underline">
                    Phone Number
                  </span>
                  : 6383284269
                </li>
                <li className="border-b-2 py-3">
                  <span className="text-gray-100 font-sans underline">
                    Email
                  </span>
                  : sabari8536@gmail.com
                </li>
                <li className="border-b-2 py-3">
                  <span className="text-gray-100 font-sans underline">Age</span>
                  : 23
                </li>
                <li className="border-b-2 py-3">
                  <span className="text-gray-100 font-sans underline">
                    From
                  </span>
                  : Chennai, India
                </li>
              </ul>

              <button className=" font-sans text-white  rounded-full bg-emerald-500 ">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="what-i-do">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400  underline underline-offset-8 h-9 relative inline-block font-serif">
              <ul>
                <li>
                  <span className="text-gray-100 font-sans h-5">Name</span>
                  :Sabari Sakthivel{" "}
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">
                    Phone Number
                  </span>
                  :6383284269
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Email</span>
                  :sabari8536@gmail.com
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Age</span>:23
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">From</span>
                  :Chennai,India
                </li>
              </ul>
              <button className=" font-sans text-white rounded-full bg-emerald-500 h-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400  underline underline-offset-8 h-9 relative inline-block font-serif">
              <ul>
                <li>
                  <span className="text-gray-100 font-sans h-5">Name</span>
                  :Sabari Sakthivel{" "}
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">
                    Phone Number
                  </span>
                  :6383284269
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Email</span>
                  :sabari8536@gmail.com
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Age</span>:23
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">From</span>
                  :Chennai,India
                </li>
              </ul>
              <button className=" font-sans text-white rounded-full bg-emerald-500 h-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400  underline underline-offset-8 h-9 relative inline-block font-serif">
              <ul>
                <li>
                  <span className="text-gray-100 font-sans h-5">Name</span>
                  :Sabari Sakthivel{" "}
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">
                    Phone Number
                  </span>
                  :6383284269
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Email</span>
                  :sabari8536@gmail.com
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Age</span>:23
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">From</span>
                  :Chennai,India
                </li>
              </ul>
              <button className=" font-sans text-white rounded-full bg-emerald-500 h-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="bg-dark-1 flex flex-col min-h-screen ml-64">
          <div className="relative w-full">
            <p className="text-white font-poppins justify-center absolute translate-x-1/2 top-2 pt-14 font-semibold text-4xl">
              Know <span className="underline  customUnderline">Me</span> More
            </p>
            <h1 className=" text-Gray-1  opacity-5 text-9xl   pt-10 font-poppins font-semibold flex items-center justify-center z-10">
              ABOUT ME
            </h1>
          </div>
          <div className=" flex justify-between px-20">
            <div className=" ">
              <h1
                className="font-semibold font-serif text-2xl  text-white "
                style={{ wordSpacing: "0.25rem" }}
              >
                I'm <span className="text-emerald-500">Sabari Sakthivel</span>,a
                MERN Stack Developer
              </h1>
              <p
                className="text-gray-400  font-sans mt-4 font-medium"
                style={{ wordSpacing: "0.25rem" }}
              >
                I help you build brand for your business at an affordable price.
                Thousands of <br /> clients have procured exceptional results
                while working with our dedicated team. <br /> when an unknown
                printer took a galley of type and scrambled it to make a type{" "}
                <br /> specimen book.
                <p className="mt-6">
                  Delivering work within time and budget which meets client’s
                  requirements is our <br /> moto. Lorem Ipsum has been the
                  industry's standard dummy text ever when an <br /> unknown
                  printer took a galley.
                </p>
              </p>
            </div>
            <div className="text-gray-400  underline underline-offset-8 h-9 relative inline-block font-serif">
              <ul>
                <li>
                  <span className="text-gray-100 font-sans h-5">Name</span>
                  :Sabari Sakthivel{" "}
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">
                    Phone Number
                  </span>
                  :6383284269
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Email</span>
                  :sabari8536@gmail.com
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">Age</span>:23
                </li>
                <li>
                  <span className="text-gray-100 font-sans h-5">From</span>
                  :Chennai,India
                </li>
              </ul>
              <button className=" font-sans text-white rounded-full bg-emerald-500 h-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
