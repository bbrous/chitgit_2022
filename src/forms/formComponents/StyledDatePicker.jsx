import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import "react-datepicker/dist/react-datepicker.css";
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const StyledTextField= styled(DatePicker)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 

  width: '97%',
  backgroundColor: 'white',
  marginRight: '8px',
  padding: '.5rem 0 .5rem .5rem',
  

  '&:hover': {
    // border: '1px solid darkOrange'
    boxShadow: 'inset 1px 1px #FADAC1'
  },

  '&:focus': {
    outline: 'none !important',
  },

  

  '&:active': {
    border: '1px solid orange'
  },
})



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const StyledDatePicker = (name) => {
  const [startDate, setStartDate] = useState();
  return (
    <StyledTextField 
    name = {name}
    selected={startDate} 
    onChange={(date) => setStartDate(date)} 
    placeholderText="Click to create target end date"
    dateFormat="d MMMM , yyyy"
    />
  );
};