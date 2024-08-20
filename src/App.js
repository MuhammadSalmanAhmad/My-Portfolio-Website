import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import About from './Feed/about';
import { Element } from 'react-scroll';
import Contact from './Feed/contact';
import Typewriter from 'typewriter-effect';
import { ReactTyped } from "react-typed";
import me from './assets/me.jpg'
import { Avatar } from "@mui/material";
import MainBody from './body';
import Skills from './Feed/skills';
import { ChakraProvider } from '@chakra-ui/react'
import Socials from './Feed/social';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <div className='app_body'>
        
        <MainBody></MainBody>
        <About></About>
        <Skills></Skills>
        <Socials></Socials>
      </div>
    </div>
  );
}

export default App;
