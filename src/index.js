import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route,Navigate,Link} from 'react-router-dom'
import About from './Feed/about';
import Contact from './Feed/contact';
import Portfolio from './Feed/Projects/portfolio';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App />}>
       

      </Route>
      <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
    

    </Routes>
   
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
