import frontEnd from '../../assets/Webpage.png'
import backend from '../../assets/Database.png'
import tools from '../../assets/Tools.png'
import editor from "../../assets/Code.png"




export const SKILLS = [
    {
        title:"FrontEnd",
        icon:frontEnd,
        skills:[
            {skill:"HTML 5" , percentage:"80%"},
            {skill:"CSS/SCSS" , percentage:"90%"},
            {skill:"Javascript" , percentage:"75%"},
            {skill:"React JS" , percentage:"80%"},
        ]
    },
    {
        title:"BackEnd",
        icon:backend,
        skills:[
            {skill:"Node JS" , percentage:"60%"},
            {skill:"Express JS" , percentage:"50%"},
        ]
    },
    {
        title:"Tools",
        icon:tools,
        skills:[
            {skill:"Git & Github" , percentage:"80%"},
            {skill:"Visual Studio Code" , percentage:"70%"},
            {skill:"Figma" , percentage:"80%"},
            {skill:"Responsive" , percentage:"90%"},
        ]
    },
    {
        title:"Soft Skills",
        icon:editor,
        skills:[
            {skill:"Problem Solving" , percentage:"80%"},
            {skill:"Collaboration" , percentage:"85%"},
            {skill:"Attention Detail" , percentage:"80%"},
        ]
    },
]

export const WORK_EXPERIENCE = [
    {
        title:"React JS Developer & UI/UX Designer at Rise Corp",
        date:"April 2023 - April 2024",
        responses:[
            "Designed and developed screens for an online no-coding platform using Figma and React JS.", 
            "Key features include:",
            "Document Screen File Manager",
            "Participants file sharing",
            "Notes for saving and organizing notes",
            "Implemented these features using Context API, Axios, REST API, and Elastic Search for enhanced functionality."
        ]
    },
    {
        title:"React JS Developer & UI/UX Designer at PSMS Engineering Services",
        date:"September 2022 - March 2023",
        responses:[
            "Developed the Home Webpage:",
            "Designed and implemented the landing page for PSMS Engineering Services.",
            "Included sections showcasing the company's services, recent projects, and client testimonials.",
            "Integrated interactive elements for a dynamic user experience.",
            "Created the Contact Webpage:",
            "Developed a user-friendly contact form to enable visitors to reach out to the company easily.",
            "Added features such as real-time form validation and error handling.",
            "Built the About Webpage:",
            "Crafted a detailed About page to present the company's mission, vision, and values.",
            "Highlighted the company's history, team members, and key achievements.",
            "Utilized engaging visuals and content to effectively communicate the company's story."
        ]
    },
    {
        title:"React JS Developer at Codingmart Technologies",
        date:"May 2021 - August 2022",
        responses:[
            "AUTOINN: Developed a vehicle services and bookings system using React JS. Created an admin panel to manage bookings efficiently.",
            "ADDA RUMMY: Built an online Rummy gaming platform and developed the admin panel using React JS, React Hooks, and Redux Toolkit, enabling efficient management of the gaming operations",
            "WADIIA: Built an airline ticket booking system using React JS and React Hooks, providing a seamless booking experience for users.",
            "PERROMART: Developed an online e-commerce website for pets using React JS, React Hooks, and Redux Toolkit. This platform allows pet owners to shop for pet supplies conveniently.",
            "FOREVER 21: Developed an online e-commerce clothing website for men, women, and kids using React JS, React Hooks, and Redux Toolkit. The platform off ers a wide range of clothing options with a smooth user experience."
        ]
    },
]