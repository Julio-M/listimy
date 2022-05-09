import './App.css';
import { useState, useEffect } from "react";
import NavBar from './components/navbar/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Login from './components/login/Login';
import SignupUser from './components/signup/SignupUser';
import UserProfile from './components/profiles/UserProfile';
import { useNavigate } from "react-router-dom";
import Places from './components/places/Places';


import EditAccount from './components/editaccount/EditAccount';

function App() {
  let navigate = useNavigate();

  const [accountType,setAccountType]= useState('user')
  const [currentUser,setCurrentUser] = useState(null)
  const [freelancerData, setFreelancerData] = useState([])
  const [services, setServices] = useState([])

  
  

  //retain user start
  const retainUser = () => {
    fetch(`/me`).then(
      (r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
      } else{
        console.log(currentUser)
    }
  }
    )
  }
  ////retain user end


  //retain freelancer start
  const retainFreelancer = () => {
    fetch("/me-freelancer").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user)
        })
      } else{
        console.log(currentUser)
      }
    })
  }

  // console.log('Is this ture',retainUser()===undefined)
  ////retain freelancer end

  useEffect(() => {
    fetch('/me').then(r=> {
      if(r.ok){
        console.log('Do this')
        retainUser()
      } else {
       console.log('No user')
       retainFreelancer()
      }
    })
  }, []);

  useEffect(() => {
    fetch ('/freelancers')
    .then (res => res.json())
    .then (setFreelancerData)
  },[])


  const displayLoged = (
        <>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/places" element={<Places freelancerData={freelancerData} services={services} setServices={setServices}/>}/>
        <Route path="/myprofile" element={<UserProfile currentUser={currentUser}/>} />
        <Route path="/account" element={<EditAccount currentUser={currentUser}/>} />
        </>
    )

  const displayNotLoged = (
    <>
        <Route path="/login" element={<Login onLogin={setCurrentUser} accountType={accountType} setAccountType={setAccountType}/>} />
        <Route path="/signup-user" element={<SignupUser onLogin={setCurrentUser} accountType={accountType} setAccountType={setAccountType}/>} />
    </>
  )


  return (
    <div className='app' >
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} setAccountType={setAccountType}/>
      <Routes>
        {currentUser?displayLoged:displayNotLoged}
      </Routes>
    </div>
  );
}

export default App;
