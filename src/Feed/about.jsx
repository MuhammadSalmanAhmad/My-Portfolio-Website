import React from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

export default function About() {
    let about = `As a passionate Computer Scientist, I am deeply invested in exploring the dynamic world of technology. With hands-on experience in mobile application development and full stack application development  using Flutter,Django and React, I thrive on experimenting with new frameworks and tools. My journey is driven by a love for continuous learning, particularly in the realms of Artificial Intelligence and Machine Learning, where I aim to push the boundaries of innovation. Every day offers an opportunity to deepen my understanding and create impactful technological solutions.`
    return (
        <div className="About">
            <h1 style={{

                color: "#ffa726",
                fontWeight:"bold",
                textAlign: "start",
                fontSize:"40px"


            }} >About</h1>
            <p style={{
                color: "white",
                fontSize: "30 px",
                textAlign: "start",
                overflow: 'hidden',
            
            }}>{about}</p>


           

        </div>
    )
}