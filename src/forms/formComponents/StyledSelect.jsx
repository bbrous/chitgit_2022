
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

import { descendSorter } from "../../app/helpers/commonHelpers";
import Chip from '@mui/material/Chip';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


import { styled, createTheme} from "@mui/material/styles"
import {makeStyles} from '@mui/styles'
import { chitBlueDull } from "../../styles/colors";
const theme = createTheme(); // allows use of mui theme in styled component



const filter = createFilterOptions();

// Category Array 

const categoryArray = ['to do', 'work', 'family', 'product team' , 'personal project']


// -----------------------------------------------------------------
export const StyledSelect =({ name, control, label, type, defaultValue, options, placeholder } ) => {
// console.log('[ XXXXXXXXXXXXX   Select Createable = options ] options ', options);
  const [value, setValue] = React.useState(null);
  const classes = useStyles();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Controller
          render={({ field }) => (
            
            
             


<StyledWrapper
 selectOnFocus
 value = {value}
 autoSelect
 
        // freeSolo
        id="mui_autocomplete_creatable"
        // disableClearable
        options={options.map((option) => option)}
        renderInput={(params) => (
          <StyledTextBox
            {...params}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            placeholder= {placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
      )}
          onChange={(_, data) => field.onChange(data)}
        />
          





          )}
          name={name}
          control={control}
          
        />
      )}
    />
  );

};

// --------------------------------------
const StyledWrapper= styled(Autocomplete)({
  
  display: 'flex',
 
   // border: 'none',
   padding: 0,
  
   // width: '80%', 
  textAlign: 'left',
   width: '100%',
 
   
   // marginRight: '8px',
   boxShadow: 0,
 
 '& .MuiSelect-select' : {
   color:'#333333',
   fontSize: '.85rem',
   
 },
 '& .MuiOutlinedInput-notchedOutline': {
   border: 'none',
  
 
 },
 
 
 
 '& .MuiSelect-icon' : {
   color:'#727376',
   fontSize: '1.5rem'
 }
 
 })

const StyledTextBox= styled(TextField)({
  border: 'none',
  // width: '80%', 
 
  width: '100%',
  
  marginRight: '8px',
  boxShadow: 'none',

  '& input' : 
  {color: 'orange',
  height: '.8rem',
  fontSize: '.85rem',
  padding: '0 .4rem',
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

// ---styles the popup background
const useStyles = makeStyles({
  paper: {
 
    fontSize: '.85rem',
    border: '1px solid #CFD0D1',
  }
});



