import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import '../../styles/datePickerStyleOverrides.css'
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import { headerGrey } from "../../styles/colors";
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const ReactDatePicker= styled(DatePicker)({
  border: 'none',
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
    boxShadow: 'inset 1px 1px #FADAC1'
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



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const StyledDateTimePicker = ({
  name,
  control,
  label,
  defaultValue
}) => {

  console.log('[ StyledDateTimePicker ] defaultValue ', defaultValue);

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
                      dateFormat="d MMMM , yyyy - h:mm aa"
                      popperPlacement="bottom"
                      // defaultValue= {defaultValue}
                      showTimeInput
                      maxDate={new Date(field.value)}
                    />
                )}
            />

  );
};