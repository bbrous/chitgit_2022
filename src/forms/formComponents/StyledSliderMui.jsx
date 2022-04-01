/*---- File - StyledSliderMui.jsx 
   MUI selector

   MUI selector gets the following from form using it : 
      - name 
      - dropdown options 
      - default value which is set in RHF defaultValues



   Contains children: none
   parent: none
*/

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import { headerGrey } from "../../styles/colors";
const theme = createTheme(); // allows use of mui theme in styled component


// const StyledSelect= styled(Select)({
//   border: '1px solid orange',
//   // border: 'none',
//   padding: 0,
//   margin: 0,
//   // width: '80%', 
//  textAlign: 'left',
//   width: '100%',
//   height: '2.2rem',
  
//   // marginRight: '8px',
//   boxShadow: 0,

// '& .MuiSelect-select' : {
//   color: headerGrey,
//   fontSize: '.85rem',
   
  
// },
// '& .MuiOutlinedInput-notchedOutline': {
//   border: 'none',
 

// },


// '& SelectInput' : {
//   color: 'red'
// },

// '& .MuiSelect-icon' : {
//   color:'#727376',
//   fontSize: '1.5rem'
// }

// })

// const StyledMenu= styled(MenuItem)({
//   // border: '1px solid orange',
//   color: '#333333',

// '&:hover' : {
//   color:'#333333',
//   backgroundColor: '#E6E7E8'
// },

// '&:focus' : {
//   color:'white',
//   backgroundColor: '#606062',

//   '&:hover' : {
//     color:'white',
//     backgroundColor: '#606062'
//   },
//   '&.Mui-selected': {
//     color:'white',
//     backgroundColor: '#606062'
//   },
// },
// })

// const optionCreator = (optionsArray) => {

//    const optionsDisplay = optionsArray.map((option, index) => {
//      let optionValue  = option.value
//      let optionLabel = option.label
 
//   return (
//     // <StyledMenu value={value} >{label}</StyledMenu>
//     <StyledMenu key = {optionValue} value= {optionValue} >{optionLabel} </StyledMenu>
//   )
//   }
//   ) //end optionCreator
//   return optionsDisplay

// }


// -----------------------------------------------------------------
export const StyledSliderMui = ({ name, control, label, type, defaultValue, options } ) => {
  console.log('[ WWWWWWWWWWWWWWWWWW  ] defaultValue ', defaultValue);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue = {[0,100]}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Controller
          render={({ field }) => (
            <Box width={300}>
            <Slider
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  valueLabelDisplay="auto"
                  max={100}
                  step={1}
            />
            
          </Box>
          )}
          name={name}
          control={control}
          // defaultValue = {defaultValue.label}
        />
      )}
    />
  );
};