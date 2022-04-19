import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';


import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { optionDescendSorter } from "../../app/helpers/commonHelpers";
import { styled, createTheme} from "@mui/material/styles"
import {makeStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


const StyledWrapper= styled(Autocomplete)({
  
 display: 'flex',

  // border: 'none',
  padding: 0,
 
  // width: '80%', 
 textAlign: 'left',
  width: '100%',
backgroundColor: '#F6F7F8',
  
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
  // border: '1px solid orange',
  color: '#333333',
  // borderBottom: "4px solid red",


'& input' : {
  height: '50%',
  fontSize: '.85rem',
  padding: 0,
  border: '1px solid white',
backgroundColor: 'white',

'&:hover' : {
  color:'#333333',
 padding: '0',margin: 0,
  border: '3px solid #FEEDE2',
},
},

'&:focus' : {
  color:'white',
  backgroundColor: '#606062',

  '&:hover' : {
    color:'white',
    backgroundColor: '#606062'
  },

},
})

const StyledChip= styled(Chip)({
  // border: '1px solid orange',
  color: '#333333',
  border: 'none',
  borderBottom: "2px solid #E6E7E8",
  borderRadius: '3px',
  backgroundColor: 'white',
  fontSize: '.75rem',
  
  '& .MuiChip-deleteIcon' : {
    color: 'red',
    fontSize: '.75rem'
  }
 
 
})

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
const useStyles = makeStyles({
  paper: {
    backgroundColor: '#F6F7F8',
    fontSize: '.85rem',
    // border: '1px solid #CFD0D1',
  }
});

// -----------------------------------------------------------------
export const StyledChronicleMultiselect = ({ name, control, label, type, defaultValue, options , placeholder} ) => {
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
          autoSelect
          filterSelectedOptions
          
          classes={{ paper: classes.paper }}
          fullWidth
          size="small"
          multiple
          id="tags-filled"
          options={optionDescendSorter(options)}
          value = {value}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <StyledChip variant="outlined" label={option} {...getTagProps({ index })} 
 
              
              />
            ))
          }
          renderInput={(params) => (
            <StyledTextBox
              {...params}
              variant="standard"
              // label="freeSolo"
              placeholder= {placeholder}
              error={!!error}
              helperText={error ? error.message : null}
              InputProps={{...params.InputProps, disableUnderline: true}}
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



