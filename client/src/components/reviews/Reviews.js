import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import './reviews.css'

function Reviews () {
    return (
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
        />
      </div>

    );
}

export default Reviews;