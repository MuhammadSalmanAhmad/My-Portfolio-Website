import React from "react";
import { ReactTyped } from "react-typed";

export default function MainBody(){
    return(

        <div className='about_me'>
          <h2>Muhammad Salman Ahmad</h2>
          <div className='intro'>
          
          <p 
          style={{
            color:'#ffa726',
            fontSize:'30px'

          }}
          >
          Hi I am salman {''}
          <ReactTyped strings={["I am a full stack software engineer @codesuite",'I develop software that take your business to next level']} typeSpeed={100} loop  />
          </p>

          </div>
         
         
          
        </div>
    )
}