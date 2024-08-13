import React from "react";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Typography } from "@mui/material";
import "./skills.css";

export default function Container({image,title}) {
    return(
        <div className="skillContainer">
            <div className="imageContainer">
                <img src={image} sx={{
                    width:'100px',
                    height:'100px'
                }}></img>
            </div>
            <h2>{title}</h2>
        </div>
    )
}
