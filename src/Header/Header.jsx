import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './header.css'
import { Avatar } from "@mui/material";

import me from '../assets/me.jpg'

export default function Header() {
    return (
        <div className='flex flex-row mx-auto px-10 py-8 gap-x-10 items-start  bg-zinc-800 h-max w-full justify-center rounded-b-2xl border-b-2 '>
            <div >
                <Link to='/portfolio'  className="link">Portfolio</Link>
            </div>
            <div >
                <Link to='/contact' className="link">Contact</Link>
            </div>
           
        </div>
    )
}