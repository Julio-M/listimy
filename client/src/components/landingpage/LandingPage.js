import React, { useState } from "react";
import TopLayout from "./TopLayout";
import Categories from "./Categories";
import './landingpage.css'

function LandingPage (props) {
    return (
      <div className='main'>
        <div class="hero-image">
            <TopLayout/>
        </div>
        <div className="categories">
            <Categories/>
        </div>
      </div>
    );
}

export default LandingPage;