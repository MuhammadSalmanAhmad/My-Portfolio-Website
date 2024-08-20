import React from "react";
import linkedin from '../assets/linkedin.png'
import LocationOn from '@mui/icons-material/LocationOn'
import Phone from '@mui/icons-material/WhatsApp'
import Email from '@mui/icons-material/Email'
import Linkedin from '@mui/icons-material/LinkedIn'
import Github from '@mui/icons-material/GitHub'
import { Instagram } from "@mui/icons-material";
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon, SvgIcon } from "@mui/material";
import IconButton from '@mui/material/IconButton';


function Socials() {
    return (
        <div class='border-spacing-10 border-t-4 border-orange-200'>


            <div class="inline-flex  bg-stone-600  mr-10 ml-10 mt-10 mb-10  py-2 px-2 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
                <LocationOn style={{ fontSize: 35, color: 'white' }} />
                <h5 style={{
                    color: 'white',
                    fontSize: '15px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>
                    Lahore,Pakistan
                </h5>

            </div>
            <div class="inline-flex  bg-stone-600  mr-10 ml-10 mt-10 mb-10  py-2 px-2 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
                <Phone style={{ fontSize: 35, color: 'white' }} />
                <h5 style={{
                    color: 'white',
                    fontSize: '15px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>
                    03324993525
                </h5>

            </div>

            <div class="inline-flex  bg-stone-600  mr-10 ml-10 mt-10 mb-10  py-2 px-2 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >
                <Email style={{ fontSize: 35, color: 'white' }} />
                <h5 style={{
                    color: 'white',
                    fontSize: '15px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>
                    isalman.ahmad01@gmail.com
                </h5>

            </div>

            <div class='flex flex-row justify-center'>

                <IconButton onClick={() => {
                    window.location.href = 'https://www.linkedin.com/in/muhammadsalmanahmad/'
                }}>
                    <Linkedin sx={{
                        fontSize: 35,
                        color: 'white'
                    }}></Linkedin>
                </IconButton>

                <IconButton onClick={() => {
                    window.location.href = 'https://github.com/MuhammadSalmanAhmad'
                }}>
                    <Github sx={{
                        fontSize: 35,
                        color: 'white'
                    }}>

                    </Github>
                </IconButton>

                <IconButton onClick={() => {
                    window.location.href = 'https://www.instagram.com/i.salman_ahmad/'
                }}>
                    <Instagram sx={{
                        fontSize: 35,
                        color: 'white'
                    }}>

                    </Instagram>
                </IconButton>




            </div>


        </div>
    )

}

export default Socials