import './App.css';
import NavBar from './components/navbar/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Container from '@mui/material/Container';
import Login from './components/login/Login';
import SignupUser from './components/signup/SignupUser';
import UserProfile from './components/profiles/UserProfile';

function App() {
  return (
    <div className='app' >
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/myprofile" element={<UserProfile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup-user" element={<SignupUser/>} />
      </Routes>
    </div>
  );
}

export default App;
