import React,{useRef} from "react";
import './ContactForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        const form = formRef.current
        const formData = new FormData(form)
        const data = {
            firstName: formData.get('firstname'),
            lastName: formData.get('lastname'),
            email: formData.get('email'),
            message: formData.get('message'),
        }
        if(data?.firstName  && 
           data?.lastName && 
           data?.email && 
           data?.message ){
             toast.success("Submitted Successfully",{
                position:"top-right"
             })
        }else{
            toast.error("Please fill all required fields" , {
                position:'top-right'
            })
        }
      };
    return(
        <div className="contact-form">
            <ToastContainer/>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="name-container">
                   <input type="text" name="firstname" placeholder="First Name"/>
                   <input type="text" name="lastname" placeholder="Last Name"/>
                </div>
                <input type="email" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Message" rows={3}/>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default ContactForm