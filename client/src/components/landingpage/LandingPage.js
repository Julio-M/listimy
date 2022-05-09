import React, { useState,useEffect } from "react";
import TopLayout from "./TopLayout";
import Categories from "./Categories";
import './landingpage.css'

function LandingPage (props) {

  const [categories,setCategories] = useState([])

  const getData = () => {
    fetch(`http://127.0.0.1:3000/categories`)
    .then( res => res.json())
    .then( data => setCategories(data))
    .catch( error => console.log(error.message));
  }

  useEffect( () => {
   getData()
  },[])


    return (
      <div className='main'>
        <div class="hero-image">
            <TopLayout/>
        </div>
        <div className="categories">
            <Categories categories={categories}/>
        </div>
      </div>
    );
}

export default LandingPage;