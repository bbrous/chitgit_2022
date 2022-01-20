/* StyledSelector

parent -  form

menu items come from options prop in parent form
NOTE * :  To set default value requires 2 steps:
   1. in parent form - set RHF default value = optionsArray[index] 
       - this is an object {value: x, label y}
   2. in parent form set initial value in selector to same optionsArray[index]


*/


import React, {useState, useEffect}  from "react";
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
export const StyledSelector = ({ name, control, label , options, initialValue}) => {

  const [initalValue, setInitialValue] = useState(initialValue)

  useEffect(()=>{
    setInitialValue(initialValue)
  },[initialValue])

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
       
        {...field}
        options={options}
      
         
        styles={customStyles} 
      />
    )}
  />
  );
};