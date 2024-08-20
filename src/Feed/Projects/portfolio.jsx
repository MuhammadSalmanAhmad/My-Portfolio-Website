import React from "react";
import './portfolio.css';
import Project from "./done_projects";
import { createContext } from 'react';
import linkedin from '../../assets/project-1.png';
import coding from '../../assets/coding.png'
import chashmart from '../../assets/chashmart.png'

const ArrayContext = createContext([]);

export default function Portfolio() {
    // const technologies=['Firebase','Django','Django REST framework','React JS','REDUX toolkit','FLutter','Tailwind CSS','Material UI']
    return (

        <div className="min-h-screen flex flex-col items-center py-8" style={{
            backgroundColor: '#34353A'
        }}>
            <h1 className="text-4xl text-white mb-6">Portfolio</h1>

            {/* Tech Container */}
            <Project
                title={"LinkedIn Clone"}
                technologies={['Firebase', 'React JS', 'Redux Toolkit', 'Tailwind CSS']}
                project_discription={"  LinkedIn clone project is a social networking application built with React.js for the front end and Firebase as the backend. The app leverages Firebase Auth for user authentication, ensuring secure sign-ins and registrations. User posts are saved in Firebase's database, allowing for a persistent feed of content. Redux Toolkit is utilized for managing the global state, particularly user state, ensuring a seamless flow of data across the app. The clone mimics key features of LinkedIn, such as user posts and authentication."}
                image={linkedin}
            />
            <Project
                title={"Portfolio Website"}
                technologies={['React JS', 'Tailwind CSS', 'Material UI']}
                project_discription={"  Portfolio website project is a personal website built with React.js. The website showcases my skills, projects, and contact information. Tailwind CSS and Material UI are used for styling and design, ensuring a clean and modern look. The website is responsive and optimized for various screen sizes, providing an optimal user experience. The project highlights the developer's work and serves as a platform to showcase my portfolio."}
                image={coding}
            />
            <Project
            title={"CHASHMART"} 
            technologies={['Flutter','Firebase','Flask API', 'AI','Machine Learning']}
            project_discription={'Chashmart is a Flutter-based mobile app developed as part of my Final Year Project at Air University Islamabad, designed to revolutionize the eyewear shopping experience. The app features virtual try-ons using Google ML Vision, personalized recommendations based on face shape utilizing CNN, integrated eye tests, and secure payments through Stripe. This project enhanced my skills in mobile app development and machine learning, focusing on combining technology with user-centric design.'}
            image={chashmart}
            ></Project>



        </div>

    );
}
