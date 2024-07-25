import React from 'react'
import './MobileNav.css'
import Resume from '../../assets/Resume.pdf'

const MobileNav = ({isOpen , toggleMenu}) => {
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
        <div>
            <div 
              className={`mobile-menu ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
             <div className='mobile-menu-container'>
                <h6 className='mobile-title'>Nishanth Portfolio</h6>
                <ul>
                    <li>
                        <a className='menu-item' href="#home">Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#experience">Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#contact'>Contact</a>
                    </li>
                    <button className="contact-btn" onClick={handleDownload}>Hire Me</button>
                </ul>
             </div>
            </div>
        </div>
    )
}

export default MobileNav