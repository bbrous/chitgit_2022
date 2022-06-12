import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";




import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import { chitBurgandy } from "../../styles/colors";
const theme = createTheme(); // allows use of mui theme in styled component


const StyledTextField= styled(TextField)({
border: 'none',
  // width: '80%', 
 
  maxWidth: '40rem',
  // backgroundColor: 'white',
  marginRight: '8px',
  boxShadow: 'none',

  '& input' : 
  {
  color: chitBurgandy,
  height: '1.8rem',

  fontSize: '.95rem',
  padding: '0 .4rem',
  border: '1px solid #CFD0D1',
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
export const ChronicleInput = ({ name, control, label, type, placeholder } ) => {
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