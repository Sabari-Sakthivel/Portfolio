import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     <aside>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/what-i-do">What I Do</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
     </aside>
    </>
  )
}

export default Sidebar;
