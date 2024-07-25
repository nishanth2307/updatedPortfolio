import React from "react";
import './Contact.css'
import ContactCard from "./ContactCard/ContactCard";
import Email from '../../assets/Email.png'
import Github from '../../assets/Github.png'
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return(
        <section className="contact-container" id="contact">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactCard
                      url={Email}
                      text="nishanthnataraj2307@gmail.com"
                    />
                     <ContactCard
                      url={Github}
                      text="github-url"
                    />
                </div>
                <div style={{flex:1}}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact