import './App.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Gpay from "./pages/Gpay.js";

export default function App(){
  return(
    <Router>
    <Routes>
      <Route exact path ='/' element={<Gpay/> }/>
      </Routes>     
    </Router>
     

  );
};
