import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";




import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


const StyledTextField= styled(TextField)({
border: 'none',
  // width: '80%', 
 
  width: '100%',
  // backgroundColor: 'white',
  marginRight: '8px',
  boxShadow: 'none',

  '& input' : 
  {color: 'charcoal',
  height: '1rem',
  fontSize: '.8rem',
  padding: '.4rem',
  border: '1px solid grey',
  borderRadius: '5px',
  backgroundColor: 'white',
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    // borderColor: "yellow"
    border: 'none'
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    // borderColor: "yellow",
    border: 'none'
  }


})


// -----------------------------------------------------------------
export const StyledInput = ({ name, control, label, type, placeholder } ) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <StyledTextField
          hiddenLabel
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          type = {type}
          variant="outlined"
          placeholder = {placeholder}
       
        />
      )}
    />
  );
};