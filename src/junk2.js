// Junk2 in chitgit_2022

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './datePickerStyleOverrides.css'
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const ReactDatePicker= styled(DatePicker)({
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

export const StyledDatePicker = ({
  name,
  control,
  label,
}) => {


  
  const [startDate, setStartDate] = useState();
  return (


    <Controller
                name={name}
                control={control}
                
                  render={({ field }) => (
                    <ReactDatePicker
                      className="input"
                      placeholderText="Select date"
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                    />
                )}
            />
    // <StyledTextField 
    // name = {name}
    // selected={startDate} 
    // onChange={(date) => setStartDate(date)} 
    // placeholderText="Click to create target end date"
    // dateFormat="d MMMM , yyyy"
    // disabledKeyboardNavigation
    // popperPlacement="bottom"
    // />
  );
};