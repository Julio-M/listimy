import './App.css';
import { useState, useEffect } from "react";
import NavBar from './components/navbar/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Container from '@mui/material/Container';
import Login from './components/login/Login';
import SignupUser from './components/signup/SignupUser';
import UserProfile from './components/profiles/UserProfile';
import { useNavigate } from "react-router-dom";
import Places from './components/places/Places';



function App() {
  let navigate = useNavigate();

  const [currentUser,setCurrentUser] = useState('s')

  
  useEffect( () => {
    if (currentUser) {
      navigate('/')
    }else{
      navigate('/login')
    }
  },[])
  

  const displayLoged = (
        <>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/myprofile" element={<UserProfile/>} />
        <Route path="/places" element={<Places />} />
        </>
    )

  const displayNotLoged = (
    <>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup-user" element={<SignupUser/>} />
    </>
  )

  return (
    <div className='app' >
      <NavBar currentUser={currentUser}/>
      <Routes>
        {currentUser?displayLoged:displayNotLoged}
      </Routes>
    </div>
  );
}

export default App;
