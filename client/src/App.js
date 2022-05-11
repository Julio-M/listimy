import './App.css';
import { useState, useEffect } from "react";
import NavBar from './components/navbar/NavBar';
import { Routes, Route, useSearchParams } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Login from './components/login/Login';
import SignupUser from './components/signup/SignupUser';
import UserProfile from './components/profiles/UserProfile';
import Places from './components/places/Places';
import FreelancerViewOnly from './components/freelancerviewonly/FreelancerViewOnly';


import EditAccount from './components/editaccount/EditAccount';

function App() {

  const [accountType,setAccountType]= useState('user')
  const [currentUser,setCurrentUser] = useState(null)
  const [freelancerData, setFreelancerData] = useState([])
  const [services, setServices] = useState([])
  
  const [searchParams, setSearchParams] = useSearchParams()

  const [viewFreelancer, setViewFreelancer] = useState(null)

  
  

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


  // retain freelancer start
  const retainFreelancer = () => {
    fetch(`/me-freelancer`).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setViewFreelancer(user)
        })
      } else{
        console.log('Not good')
      }
    })
  }

  // console.log('Is this ture',retainUser()===undefined)
  ////retain freelancer end

  useEffect(() => {
    // fetch('/me').then(r=> {
    //   if(r.ok){
    //     console.log('Do this')
    //     retainUser()
    //   } else {
    //    console.log('No user')
    //    retainFreelancer()
    //   }
    // })
    retainUser()
    retainFreelancer()
  }, []);

  useEffect(() => {
    fetch ('/freelancers')
    .then (res => {
      if (res.ok) {
      res.json().then((data) => setFreelancerData(data))
    } else {
      console.log(res.json())
    }
  })
  },[])
  
  
  const displayLoged = (
        <>
        <Route path="/" element={<LandingPage searchParams={searchParams} setSearchParams={setSearchParams}/>} />
        {currentUser&&currentUser.account_type==='user'?<Route path="/places" element={<Places searchParams={searchParams} freelancerData={freelancerData} services={services} setServices={setServices} setViewFreelancer={setViewFreelancer} viewFreelancer={viewFreelancer}/>}/>:null}
        {currentUser&&!freelancerData.errors&&viewFreelancer&&currentUser.account_type==='user'?<Route path="/freelancer" element={<FreelancerViewOnly currentUser={viewFreelancer} />}/>:null}
        <Route path="/myprofile" element={<UserProfile currentUser={currentUser}/>} />
        <Route path="/account" element={<EditAccount currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
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
