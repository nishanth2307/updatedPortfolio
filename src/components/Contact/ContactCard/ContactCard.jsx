import React from 'react'
import './ContactCard.css'

const ContactCard = ({url , text}) => {
    return(
        <div className='contact-card'>
            <div className='icon'>
                <img src={url} alt={text}></img>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ContactCard  