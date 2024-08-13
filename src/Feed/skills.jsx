import React from "react";
import "./skills.css";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Typography } from "@mui/material";
import Container from "./skill_component";
import flutter from '../assets/flutter.png';
import django from '../assets/django.png';
import react from '../assets/react.png';
import js from '../assets/javascript.png';
import python from '../assets/python.png';
import flask from '../assets/flask.png';
import firebase from '../assets/firebase.png'
import docker from '../assets/docker.png'
 
export default function Skills() {
    return(
        <div className="skills">
            <h1 style={{
                color:'#ffa726',
                textAlign:"center",
                fontSize:"50px",
                marginBottom:"30px"

            }}>Skills</h1>
            <div class='grid gap-4 grid-cols-4 ml-20 mb-20'>
                <Container title={'Flutter'} image={flutter}></Container>
                <Container title={'Django' } image={django}></Container>
                <Container title={'Flask'} image={flask}></Container>
                <Container title={'Python'} image={python}></Container>
                <Container title={'React'} image={react}></Container>
                <Container title={'Javascript'} image={js}></Container>
                <Container title={'Firebase'} image={firebase}></Container>
                <Container title={'Docker'} image={docker}> </Container>
            </div>


        </div>
    )

}