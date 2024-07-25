import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "../MobileNav/MobileNav";
import Resume from '../../assets/Resume.pdf'

const Navbar = () => {
    const [openMenu , setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)
    const handleDownload = () => {
        const fileUrl = Resume
        const link = document.createElement('a')
        link.href = fileUrl;
        link.download = 'Nishanth Resume.pdf';
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }
    return(
     <>
       { openMenu && <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>}
        <nav className="nav-wrapper">
            <div className="nav-content">
                <h4>Nishanth Portfolio</h4>
            <ul>
                <li>
                    <a className="menu-item" href="#home">Home</a>
                </li>
                <li>
                    <a className="menu-item" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="menu-item" href="#experience">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item" href="#contact">Contact</a>
                </li>
                <button className="contact-btn" onClick={handleDownload}>Hire Me</button>
            </ul>
            <button className="menu-btn" onClick={toggleMenu} >
                <span 
                className={"material-symbols-outlined"}
                style={{fontSize:'1.8rem'}}
                >
                    {openMenu ? "close" : "menu"}
                </span>
            </button>
            </div>
        </nav>
      </>
    )
}

export default Navbar