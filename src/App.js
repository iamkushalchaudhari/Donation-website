import './App.css';
import GooglePayButton from '@google-pay/button-react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Gpay from "./pages/Gpay.js";
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import Footer from "./pages/Footer";
import DonateButton from "./pages/DonateSection";
import Details from "./pages/Details";
export default function App(){
  return(
    <Router>
    <Routes>
      <Route path='/details' element={<><Navbar/><Details/></>}/>
      <Route exact path ='/payment' element={<><Navbar/><Gpay/></> }/>
      <Route exact path='/' element={<><Navbar/> <Landing/><DonateButton/><Footer/></> }/>
      </Routes>     
    </Router>
     

  );
};
