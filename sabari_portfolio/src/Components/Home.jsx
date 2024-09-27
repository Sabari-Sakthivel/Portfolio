import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FaDesktop,
  FaPaintbrush,
  FaFloppyDisk,
  FaLink,
  FaPhoneVolume,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import GoDriveImg from "../../src/assets/GoDrive.png";
import { Link } from "react-router-dom";
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
  const [isVisible, setIsVisible] = useState(false);

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
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="lg:flex sticky top-0 left-0 w-screen z-40">
        <Sidebar />
      </div>
      <main className="lg:w-full">
        <section
          id="home"
          className="min-h-screen flex-1 relative bg-dark-2 md:ml-64 text-white flex flex-col justify-center items-center p-4 sm:p-6"
        >
          <div className="text-center">
            <h3 className="text-white font-medium text-xl sm:text-2xl mb-6 sm:mb-10">
              Welcome
            </h3>
            <div className="text-white font-serif text-xl sm:text-2xl mt-4 sm:mt-6">
              <TypeAnimation
                sequence={sequence}
                style={{ fontSize: "1.5em", sm: "2em" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-white text-lg sm:text-2xl font-semibold mt-5 sm:mt-7">
              From Chennai, India
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block font-poppins text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500 px-6 sm:px-10 py-3 sm:py-4 mt-6 sm:mt-10 rounded-full transition-colors duration-300 smooth-scroll"
            >
              Hire Me
            </button>
          </div>
          <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center">
            <IoIosArrowDown className="fall-animation text-2xl sm:text-3xl text-white cursor-pointer" />
          </div>
        </section>

        <section id="about-me">
          <div className="bg-dark-1 flex flex-col lg:min-h-screen h-full  md:ml-64 p-4 md:p-0">
            <div className="relative  h-full">
              <p className="text-white font-poppins text-center lg:left-16 ml-24 md:text-left  absolute md:translate-x-1/2 mt-2 md:ml-64 top-2 lg:pt-14 pt-8 font-semibold text-xl md:text-3xl">
                Know{" "}
                <span className="underline decoration-emerald-400">Me</span>{" "}
                More
              </p>
              <h1 className="text-gray-100 opacity-5 text-5xl lg:text-8xl lg:pt-10 pt-7  font-poppins font-semibold flex items-center justify-center z-10">
                ABOUT ME
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 mt-8 space-y-8 md:space-y-0">
              <div className="md:flex-1">
                <h1 className="font-semibold font-serif text-lg md:text-xl text-white">
                  I'm <span className="text-emerald-500">Sabari Sakthivel</span>
                  , a MERN Stack Developer
                </h1>
                <p className="text-gray-400 font-sans mt-4 font-medium text-sm md:text-base">
                  I help you build brand for your business at an affordable
                  price. Thousands of
                  <span className="block md:hidden"> </span>
                  clients have procured exceptional results while working with
                  our dedicated team.
                  <span className="block md:hidden"> </span>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type
                  <span className="block md:hidden"> </span>
                  specimen book.
                </p>
                <p className="text-gray-400 font-sans mt-4 font-medium text-sm md:text-base">
                  Delivering work within time and budget which meets client’s
                  requirements is our
                  <span className="block md:hidden"> </span>
                  motto. Lorem Ipsum has been the industry's standard dummy text
                  ever since an
                  <span className="block md:hidden"> </span>
                  unknown printer took a galley.
                </p>
              </div>
              <div className="text-gray-400 mb-10 lg:h-9 relative h-full inline-block font-serif">
                <ul className="space-y-3">
                  <li className="border-b-2 border-zinc-400 py-3 font-medium">
                    <span className="text-gray-100 font-sans">Name: </span>
                    <span className="font-serif">Sabari Sakthivel</span>
                  </li>
                  <li className="border-b-2 border-zinc-400 py-3">
                    <span className="text-gray-100 font-sans">
                      Phone Number:{" "}
                    </span>
                    <span className="font-sans"> 6383284269</span>
                  </li>
                  <li className="border-b-2 border-zinc-400 py-3">
                    <span className="text-gray-100 font-sans">Email: </span>
                    <span className="font-sans text-emerald-500">
                      <Link to="mailto:sabari8536@gmail.com">
                        sabari8536@gmail.com
                      </Link>
                    </span>
                  </li>
                  <li className="border-b-2 border-zinc-400 py-3">
                    <span className="text-gray-100 font-sans">Age: </span>
                    <span className="font-sans">23</span>
                  </li>
                  <li className="border-b-2 border-zinc-400 py-3">
                    <span className="text-gray-100 font-sans">From: </span>
                    <span className="font-serif">Chennai, India</span>
                  </li>
                </ul>

                <button
                  className="font-sans lg:ml-16 md:ml-24 text-white p-2 mt-6 ml-24  rounded-full bg-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300 ease-in-out"
                  onClick={() =>
                    window.open(
                      "https://storage.googleapis.com/sabarivel/Sabari%20Sakthivel%20(2).pdf",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Download CV
                </button>
              </div>
            </div>
            <button
              className={`fixed bottom-4 right-4 p-2 text-white hover:bg-emerald-500 rounded-full shadow-lg bg-slate-700 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <IoIosArrowUp size={24} />
            </button>
          </div>
        </section>

        <section id="what-i-do">
          <div className="bg-dark-2 flex flex-col min-h-screen md:ml-64 p-4">
            <div className="relative w-full text-center">
              <p className="text-white font-poppins mt-5 absolute inset-x-0 lg:top-3 right-0 mx-auto sm:bottom-3 pt-14 font-semibold text-3xl md:text-4xl">
                What I Do?
              </p>
              <h1 className="text-gray-100 opacity-5 text-6xl md:text-9xl pt-10 font-poppins font-semibold flex items-center justify-center z-10">
                SERVICE
              </h1>
            </div>
            <div className="flex flex-wrap justify-center mx-6 md:mx-0 mb-10">
              {[
                {
                  icon: <FaDesktop size={30} className="text-emerald-500" />,
                  title: "Web Design",
                  description:
                    "Crafting visually engaging websites that are user-friendly and optimized for all devices. I focus on creating layouts that capture your brand’s essence while ensuring usability and performance.",
                },
                {
                  icon: <FaLink size={30} className="text-emerald-500" />,
                  title: "Backend Development",
                  description:
                    "Building secure and scalable server-side solutions to power your applications. I develop robust APIs and handle data processing to ensure your app runs smoothly and efficiently.",
                },
                {
                  icon: <FaPaintbrush size={30} className="text-emerald-500" />,
                  title: "App Design & Development",
                  description:
                    "Creating intuitive and responsive Web apps for a seamless user experience on any platform. My approach combines creative design with technical expertise to build Web apps that are both functional and visually appealing.",
                },
                {
                  icon: <FaFloppyDisk size={30} className="text-emerald-500" />,
                  title: "Database Management",
                  description:
                    "Efficiently managing and optimizing your data for reliability and performance. I design and implement robust database systems that ensure data integrity and security.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-5 md:gap-7 mt-7 w-full md:w-1/2 p-4"
                >
                  <div className="relative bg-black h-fit rounded p-4">
                    {service.icon}
                  </div>
                  <div className="max-w-sm">
                    <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mt-1 font-sans font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume">
          <div className="bg-dark-1 flex flex-col min-h-[135vh]  md:ml-64">
            <div className="relative w-full text-center">
              <p className="text-white font-poppins mt-0  lg:mt-5 absolute inset-x-0 right-0 mx-auto  top-2 pt-14 font-semibold text-4xl">
                Resume
              </p>
              <h1 className="text-gray-100 opacity-5 lg:text-9xl pt-10 font-poppins font-semibold text-5xl flex items-center justify-center z-10">
                SUMMARY
              </h1>
            </div>

            {/* Section Titles */}
            <div className="flex flex-col mx-10 md:flex-row md:justify-between md:ml-10 ml-4 gap-4 mt-7  lg:mb-0 mb-7">
              <div className="flex flex-col">
                <h1 className="text-white font-bold font-poppins text-2xl mb-4">
                  My Education
                </h1>
                <div className="grid grid-cols-1 gap-10">
                  <div className="bg-dark-2 relative w-full lg:h-[245px] h-full rounded shadow p-5">
                    <button className="rounded w-fit text-white bg-emerald-400">
                      2018-2022
                    </button>
                    <h2 className="text-white font-serif font-bold mt-4">
                      B.E Mechanical Engineering
                    </h2>
                    <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                      Al Ameen Engineering College - Erode
                    </h3>
                    <h3 className="text-emerald-500 font-semibold mt-1">
                      CGPA - 7.76
                    </h3>
                    <p className="text-Gray-1 mt-2 font-sans font-medium">
                      <span className="text-emerald-300">"</span>My B.E. in
                      Mechanical Engineering equipped me with practical skills
                      in CAD modeling and project management, preparing me for a
                      dynamic career in engineering.
                      <span className="text-emerald-300">"</span>
                    </p>
                  </div>

                  <div className="bg-dark-2 relative w-full lg:h-[245px] h-full rounded shadow p-5">
                    <button className="rounded w-fit text-white bg-emerald-400">
                      2024 - Present
                    </button>
                    <h2 className="text-white font-serif font-bold mt-4">
                      MCA - Master of Computer Applications
                    </h2>
                    <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                      SRM University - Chennai
                    </h3>
                    <p className="text-Gray-1 mt-2 font-sans font-medium">
                      <span className="text-emerald-300">"</span>I am currently
                      pursuing a Master of Computer Applications (MCA) at SRM
                      University, Chennai, where I am honing my skills in
                      software development, database management, and advanced
                      programming techniques.
                      <span className="text-emerald-300">"</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-4 mt-10 md:mt-0">
                <h1 className="text-white font-bold font-poppins text-2xl mb-4">
                  My Experience & Skills
                </h1>
                <div className="grid grid-cols-1 gap-10">
                  <div className="bg-dark-2 relative w-full lg:h-[245px] h-full rounded shadow p-5">
                    <button className="rounded w-fit text-white bg-emerald-400">
                      2024 - Present
                    </button>
                    <h2 className="text-white font-serif font-bold mt-4">
                      MERN Stack Developer - Intern
                    </h2>
                    <h3 className="text-emerald-500 font-sans font-semibold mt-1">
                      Why Global Services - Chennai
                    </h3>
                    <p className="text-Gray-1 mt-2 font-sans font-medium">
                      <span className="text-emerald-300">"</span>As a MERN Stack
                      Developer Intern at Why Global Services in Chennai, I
                      contributed to building and maintaining dynamic web
                      applications, gaining hands-on experience in MongoDB,
                      Express.js, React, and Node.js.
                      <span className="text-emerald-300">"</span>
                    </p>
                  </div>

                  <div className="bg-dark-2 relative w-full lg:h-[245px] h-full rounded shadow p-5">
                    <button className="rounded w-fit text-white bg-emerald-400 font-semibold">
                      My-Skills
                    </button>
                    <h2 className="text-white font-serif font-bold mt-4">
                      Technical Skills
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;HTML5/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;CSS3/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Bootstrap/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Tailwind Css/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Javascript/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;React.js/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Node.js/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Express.js/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;MongoDB/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;UI/UX/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;Figma/&gt;
                      </button>
                      <button className="text-emerald-300 rounded bg-Gray-1">
                        &lt;MongoDB/&gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="bg-dark-2 flex flex-col  h-full lg:ml-64 p-4 lg:p-0">
            <div className="relative w-full text-center">
              <p className="text-white font-poppins lg:mt-6 lg:ml-80 lg:left-32 left-24 justify-center absolute  top-2 pt-14 font-semibold text-3xl md:text-4xl">
                My Work
              </p>
              <h1 className="text-gray-100 opacity-5 text-5xl lg:text-9xl pt-10 font-poppins font-semibold flex items-center justify-center z-10">
                PORTFOLIO
              </h1>
            </div>

            <div className="mt-10 flex flex-col gap-12 lg:px-10 lg:gap-14">
              {/* First Project */}
              <h3 className="text-emerald-300 lg:hidden text-center text-2xl font-bold ">
                    GoDrive - Cab Booking Service
                  </h3>
              <div className="flex flex-col lg:flex-row items-center lg:mb-0 mb:5 gap-6">
                <div>
                
                  <img
                    src={GoDriveImg}
                    alt="GoDrive Project"
                    className="w-80 h-40"
                  />
                </div>
                <div className="text-center lg:text-left ">
                  <h3 className="text-emerald-300 sm:block hidden text-2xl font-bold ">
                    GoDrive - Cab Booking Service
                  </h3>
                  <div />
                  <div className="lg:mb-5">
                    <p className="text-gray-300 mt-2">
                      GoDrive is a cab booking service that provides users with
                      a seamless and reliable platform to book rides
                      conveniently.
                    </p>
                    <p className="text-gray-300 mt-2">
                      It ensures efficient and secure transportation with
                      real-time tracking and various payment options.
                    </p>
                    <p className="text-gray-300 mt-2">
                      GoDrive allows users to schedule rides in advance,
                      offering flexibility and convenience for planned trips and
                      busy schedules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Project */}
              <div className="flex flex-col lg:flex-row  items-center gap-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-emerald-300 text-2xl font-bold mt-4">
                    GoDrive - Cab Booking Service
                  </h3>
                  <p className="text-gray-300 mt-2">
                    GoDrive is a cab booking service that provides users with a
                    seamless and reliable platform to book rides conveniently.
                  </p>
                  <p className="text-gray-300 mt-2">
                    It ensures efficient and secure transportation with
                    real-time tracking and various payment options.
                  </p>
                </div>
                <div className="sm:order-1">
                  <img
                    src={GoDriveImg}
                    alt="GoDrive Project"
                    className="w-80 h-40 mb-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="bg-dark-1 flex flex-col lg:h-screen h-full lg:ml-64 p-4 lg:p-0">
            <div className="relative w-full mb-5 text-center">
              <p className="text-white font-poppins lg:mt-6 mt-1 ml-16 lg:ml-80 absolute lg:translate-x-1/2 top-2 pt-14 font-semibold text-3xl md:text-4xl">
                Get in Touch
              </p>
              <h1 className="text-gray-100 opacity-5 text-5xl lg:text-9xl pt-10 font-poppins font-semibold z-10">
                CONTACT
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:px-32  w-full lg:gap-32 mt-10">
              <div className="lg:w-1/2">
                <h4 className="text-white text-2xl lg:text-left text-center font-bold">
                  ADDRESS
                </h4>
                <p className="text-gray-300 mt-5 leading-relaxed lg:text-left text-center">
                  2/49, Vani Nagar,
                  <br />
                  Pappam Palayam,
                  <br />
                  Namakkal, 638007.
                </p>
                <p className="mt-6 flex items-center gap-3 lg:justify-normal justify-center  text-emerald-400">
                  <FaPhoneVolume size={24} />
                  <span className="text-gray-300">6383284269</span>
                </p>
                <Link
                  to="mailto:sabari8536@gmail.com"
                  className="flex gap-2 mt-3 lg:justify-normal justify-center text-gray-300 hover:text-emerald-400"
                >
                  <HiOutlineMail size={28} />
                  <span className="font-poppins">sabari8536@gmail.com</span>
                </Link>

                <h1 className="text-white text-2xl lg:text-left text-center font-bold mt-8 ">
                  FOLLOW ME
                </h1>
                <nav className="flex gap-6 mt-5 lg:justify-normal justify-center">
                  <Link to="https://linkedin.com/in/Sabari-Sakthivel">
                    <FaLinkedin
                      className="text-gray-300 hover:text-blue-500"
                      size={24}
                    />
                  </Link>
                  <Link to="https://github.com/Sabari-Sakthivel">
                    <FaGithub
                      className="text-gray-300 hover:text-gray-600"
                      size={24}
                    />
                  </Link>
                  <Link to="https://twitter.com/Sabari-Sakthivel">
                    <FaTwitter
                      className="text-gray-300 hover:text-blue-400"
                      size={24}
                    />
                  </Link>
                </nav>
              </div>

              <div className="lg:w-1/2 mb-5 px-3 ">
                <h2 className="text-white text-2xl font-bold text-center">
                  SEND US A NOTE
                </h2>
                <input
                  type="text"
                  className="bg-dark-2 mt-3 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="bg-dark-2 mt-3 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  placeholder="Email"
                />
                <textarea
                  className="bg-dark-2 mt-3 text-white rounded-lg p-2 w-full h-36 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  placeholder="Tell us more about your needs..."
                ></textarea>
                <button className="bg-emerald-500 text-white rounded-full w-full py-2 mt-5 hover:bg-gradient-to-r from-emerald-500 to-teal-400 focus:ring-2 focus:ring-emerald-500 transition duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="bg-dark-2 h-auto py-4 flex lg:h-32 flex-col lg:flex-row items-center justify-between lg:ml-64 lg:px-14 px-4">
          <h2 className="text-gray-400 text-center lg:text-left font-sans font-semibold mb-2 lg:mb-0">
            Copyright © 2024{" "}
            <span className="text-emerald-500">Sabari Sakthivel</span>. All
            Rights Reserved.
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-left">
            <h2 className="text-gray-400 font-sans font-semibold">
              Terms & Policy
            </h2>
            <h2 className="text-gray-400 font-sans font-semibold">
              Disclaimer
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
