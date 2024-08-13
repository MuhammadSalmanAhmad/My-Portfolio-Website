import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './header.css'
import { Avatar } from "@mui/material";

import me from '../assets/me.jpg'

export default function Header() {
    return (
        <div className='flex flex-row mx-auto px-10 py-8 gap-x-10 items-start justify-start'>
            <div >
                <Link to='/portfolio' style={{
                    color: 'white',
                    fontSize: '20px',
                    textAlign: 'start',
                    marginBottom: '20px',
                    alignSelf: "start"

                }}>Portfolio</Link>
            </div>
            <div >
                <Link to='/contact' style={{
                     color: 'white',
                     fontSize: '20px',
                     textAlign: 'start',
                     marginBottom: '20px',
                     alignSelf: "start"
 
                }}>Contact</Link>
            </div>
           
        </div>
    )
}