import React, { useState,useEffect } from "react";
import TopLayout from "./TopLayout";
import Categories from "./Categories";
import './landingpage.css'

function LandingPage ({selectCategory, setSearchParams }) {
  
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
            <Categories setSearchParams={setSearchParams} categories={categories}/>
        </div>
      </div>
    );
}

export default LandingPage;