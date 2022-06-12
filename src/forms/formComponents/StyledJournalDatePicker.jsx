import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
 
import '../../styles/datePickerStyleOverrides.css'
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import { headerGrey, mediumGrey } from "../../styles/colors";
const theme = createTheme(); // allows use of mui theme in styled component



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const StyledJournalDatePicker = ({
  name,
  control,
  label,
  excludedDates,
  maxDate
}) => {


  return (


    <Controller
                name={name}
                control={control}
                
                  render={({ field }) => {

                  
                    return(
                    <ReactDatePicker
                      className="input"
                      placeholderText="Select date"
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                      dateFormat="d MMMM , yyyy"
                      popperPlacement="bottom"
                      maxDate={maxDate}
                      excludeDates={excludedDates}
                      onKeyDown={(e) => {
                        e.preventDefault();
                     }}
                    />
                )}}
            />

  );
};

// -----------------------------------------------------------------
const ReactDatePicker= styled(DatePicker)({
  border: '1px solid #CFD0D1',
  borderRadius: '5px',
  // width: '80%', 
color: headerGrey,
  width: '100%',
  backgroundColor: 'white',
  marginRight: '8px',
  padding: '.25rem 0 .25rem .85rem',
  fontSize: '.85rem',

  '&:hover': {
    // border: '1px solid darkOrange'
 
    color: mediumGrey,
  },

  '&:focus': {
    outline: 'none !important',
  },

  '& .react-datepicker__header' :{
    backgroundColor: 'yellow'
  },

  '&:active': {
    border: '1px solid orange'
  },
})
