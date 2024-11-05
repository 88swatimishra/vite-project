import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import AllProperty from './pages/AllProperty';
import Businessad from './pages/Homeinteriors';
import VacancyJob from './pages/VacancyJob';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Flat1 from './pages/Flat1';
import Flat2 from './pages/Flat2';
import Flat3 from './pages/Flat3';
import Flat4 from './pages/Flat4';
import Login from './pages/Login';
import Loan from './pages/Loan';
function App() {
  return (
    <>
      <Router> 
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/allproperty" element={< AllProperty/>}/>
          <Route path="/business" element={<Businessad/>}/>
          <Route path="/vacancy" element={<VacancyJob/>}/>
          <Route path="/contactus" element={<Contact Us/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/flat1" element={<Flat1/>} />
          <Route path="/flat2" element={<Flat2/>} />
          <Route path="/flat3" element={<Flat3/>} />
          <Route path="/flat4" element={<Flat4/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/loan" element={<Loan/>} />
          </Routes> 
      </Router>
    </>
  )
}
export default App;


