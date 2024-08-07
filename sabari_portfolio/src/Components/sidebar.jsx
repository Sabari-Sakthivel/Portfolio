import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';
import profile from '../assets/profile.jpeg'; // Ensure this path is correct

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={classNames(
          'fixed z-30 inset-y-0 left-0 bg-gray-950 text-white w-64 transform transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
          }
        )}
      >
        <div className="flex flex-col items-center pt-8">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-8 border-gray-800"
          />
          <h1 className="font-serif text-2xl pt-4">Sabari Sakthivel</h1>
        </div>
        <nav className="mt-4 flex flex-col items-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text-green-500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text-green-500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/what-i-do"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text-green-500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            What I Do
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text-green-500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text-green-500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              classNames(
                'block py-2.5 px-4 rounded hover:text-green-500',
                {
                  'text--500': isActive, // Apply active style
                  'text-white': !isActive, // Default style
                }
              )
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
          <FaBars className="cursor-pointer" onClick={toggleSidebar} />
        </header>
        <main className="flex-1 p-4">{/* Your main content goes here */}</main>
      </div>
    </div>
  );
};

export default Sidebar;
