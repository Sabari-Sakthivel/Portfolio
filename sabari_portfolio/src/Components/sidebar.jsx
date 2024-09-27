import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import profile from "../../src/assets/profile.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const isActiveLink = (path) => location.pathname === path;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    if (window.innerWidth < 1024) setIsSidebarOpen(false); // Close sidebar after clicking in small screens
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about-me",
        "what-i-do",
        "resume",
        "portfolio",
        "contact",
      ];
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header for Small and Medium Devices */}
      <header className="lg:hidden fixed top-0 left-0 w-screen bg-black text-white flex justify-between items-center py-4 px-4 shadow-lg z-50">
        <h1 className="font-serif text-lg">Sabari Sakthivel</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FaBars size={24} className="text-white" />
        </button>
      </header>

      {/* Sidebar for Large Devices and Toggleable Sidebar for Small/Medium Devices */}
      <div
      className={classNames(
        "fixed top-0 left-0 bg-black text-white lg:w-64 lg:h-screen w-full  py-4 lg:overflow-y-scroll transform transition-transform duration-300 ease-in-out z-40",
        {
          "lg:translate-x-0 -translate-y-full": isSidebarOpen,
          "lg:-translate-x-full  translate-y-0 ": !isSidebarOpen,
        }
      )}
    >
        <div className="flex flex-col items-center pt-8">
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-8 border-gray-800 lg:block hidden"
          />
          <h1 className="font-serif text-2xl pt-4 lg:block hidden">Sabari Sakthivel</h1>
        </div>
        <nav className="mt-4 flex flex-col items-center">
          <ul className="lg:space-y-2 w-full lg:text-center   ">
            <li>
              <p
                onClick={() => scrollToSection("home")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2  lg:text-center lg:border-hidden  border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "home" || isActiveLink("/"),
                    "text-white":
                      activeSection !== "home" && !isActiveLink("/"),
                  },
                  "text-center"
                )}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => scrollToSection("about-me")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2 lg:border-hidden border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "about-me" || isActiveLink("/about-me"),
                    "text-white":
                      activeSection !== "about-me" &&
                      !isActiveLink("/about-me"),
                  },
                  "text-center"
                )}
              >
                About Me
              </p>
            </li>
            <li>
              <p
                onClick={() => scrollToSection("what-i-do")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2 lg:border-hidden border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "what-i-do" ||
                      isActiveLink("/what-i-do"),
                    "text-white":
                      activeSection !== "what-i-do" &&
                      !isActiveLink("/what-i-do"),
                  },
                  "text-center"
                )}
              >
                What I Do
              </p>
            </li>
            <li>
              <p
                onClick={() => scrollToSection("resume")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2 lg:border-hidden border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "resume" || isActiveLink("/resume"),
                    "text-white":
                      activeSection !== "resume" && !isActiveLink("/resume"),
                  },
                  "text-center"
                )}
              >
                Resume
              </p>
            </li>
            <li>
              <p
                onClick={() => scrollToSection("portfolio")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2 lg:border-hidden border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "portfolio" ||
                      isActiveLink("/portfolio"),
                    "text-white":
                      activeSection !== "portfolio" &&
                      !isActiveLink("/portfolio"),
                  },
                  "text-center"
                )}
              >
                Portfolio
              </p>
            </li>
            <li>
              <p
                onClick={() => scrollToSection("contact")}
                className={classNames(
                  "block lg:py-2.5 px-4 rounded py-2 lg:border-hidden  border border-b-1 hover:text-emerald-500",
                  {
                    "text-emerald-500":
                      activeSection === "contact" || isActiveLink("/contact"),
                    "text-white":
                      activeSection !== "contact" && !isActiveLink("/contact"),
                  },
                  "text-center"
                )}
              >
                Contact
              </p>
            </li>
          </ul>
        </nav>
        <nav className="flex  gap-6 mb-3  justify-center mt-5 ">
          <Link
            to="https://linkedin.com/in/Sabari-Sakthivel"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={17} />
          </Link>
          <Link
            to="https://github.com/Sabari-Sakthivel"
            className="hover:text-gray-600"
          >
            <FaGithub size={17} />
          </Link>
          <Link
            to="https://twitter.com/Sabari-Sakthivel"
            className="hover:text-blue-400"
          >
            <FaTwitter size={17} />
          </Link>
          <Link
            to="mailto:sabari8536@gmail.com"
            className="hover:text-gray-600"
          >
            <FaRegEnvelope size={17} />
          </Link>
        </nav>
      </div>

      {/* Backdrop for Sidebar in Small Devices */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
