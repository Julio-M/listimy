import React, { useState,useEffect } from "react";
import TopLayout from "./TopLayout";
import Categories from "./Categories";
import './landingpage.css'

function LandingPage ({selectCategory, setSearchParams, searchParams}) {
  
  const [categories,setCategories] = useState([])

  const getData = () => {
    fetch(`https://listimy.herokuapp.com/categories`)
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
            <TopLayout setSearchParams={setSearchParams}/>
        </div>
        <div className="categories">
            <Categories setSearchParams={setSearchParams} categories={categories}/>
        </div>
      </div>
    );
}

export default LandingPage;