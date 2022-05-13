import React, { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import './reviews.css'
import ReactStars from "react-rating-stars-component";
import { Button } from "@mui/material";
import ReviewsTable from "./ReviewsTable";

function Reviews ({viewFreelancer,currentUser}) {
  const [errors, setErrors] = useState([]);
  const [reviews,setReviews] = useState([])

  const [reviewData, setReviewData] = useState({
    "freelancer_id": viewFreelancer.id,
    "user_id": currentUser.id,
    "stars": 0,
    "comment": ""
  })

  useEffect( () => {
    fetch(`/reviews/freelancers/${viewFreelancer.id}`)
    .then( res => res.json())
    .then( data => setReviews(data))
    .catch( error => console.log(error.message));
  },[])

  const {comment} = reviewData
  
  const ratingChanged = (newRating) => {
    setReviewData({...reviewData, stars:newRating});
  };

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value

    setReviewData({...reviewData, [name]:value})
  }

  const postReview= () => {
    fetch(`/reviews`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(reviewData)
  })
  .then( res => {
    if (res.ok) {
    res.json().then(data=>setReviews([...reviews,data]))
    } else{
      res.json().then((err)=> setErrors(err.errors))
  }
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postReview()
  }

  
    return (
      <>
        <div className='myform'>
        <form onSubmit={handleSubmit} className='myform'>
         <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        <TextField
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Comment"
          name='comment'
          value={comment}
          multiline
          rows={4}
        />
         <div>{errors.map((err) => (
                <p>{err}</p>
            ))}</div>
        <Button type='submit'>Post your review</Button>
        </form>
      </div>
      <div className='reviews-table'><ReviewsTable reviews={reviews} setReviews={setReviews} currentUser={currentUser}/></div>
      </>
    );
}

export default Reviews;