/* StyledSelector

parent -  ./muiForm

menu items come from options prop from Mui_form


*/


import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";



import ReactSelect from "react-select";
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component



/* DOCS for styling  AT ============================= 

https://react-select.com/styles#provided-styles-and-state


*/

// -----------------------------------------------------------------
export const StyledSelector = ({ name, control, label , options}) => {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid orange',
      width: '100%',
      fontSize: '.85rem',
      textAlign:'left',
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : '#F58634'
      }
    }),

    container: (base, state) =>({
      ...base,
      flex: 1
    }),

    menu: (base, state) =>({
      ...base,
      // backgroundColor: 'yellow',
      textAlign: 'left'
    }),
    singleValue: (base, state)=>({
      ...base,
      color: 'charcoal'
 
     }),

     option: (base, state)=>({
      ...base,
      backgroundColor: state.isFocused ? '#E6E7E8' : null,
      color: "#333333",
      textAlign: 'left',
      fontSize: '.9rem',
     }),
    
  };



  return (
    <Controller
    name= {name}
    control={control}
    render={({ field }) => (
      <ReactSelect
      placeholder={'custom placeholder component'}
        isClearable
        {...field}
        options={options}
       
        styles={customStyles} 
      />
    )}
  />
  );
};