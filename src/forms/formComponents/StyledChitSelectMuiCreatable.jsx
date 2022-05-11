/*   Strip excess white spaces

--------------------------------------
const mySentence = '    My string with a    lot   of Whitespace.  '
const cleanSentence = mySentence.replace(/\s+/g, ' ').trim()
//  result --- 'My string with a lot of Whitespace.'

--------------------------------------


*/





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
export const StyledChitSelectMuiCreatable =({ name, control, label, type, defaultValue, options } ) => {
console.log('[ XXXXXXXXXXXXX   Select Createable = options ] options ', options);
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
 
        freeSolo
        id="mui_autocomplete_creatable"
        // disableClearable
        options={options.map((option) => option)}
        renderInput={(params) => (
          <StyledTextBox
            {...params}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            placeholder="select or type new category"
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



const StyledWrapper= styled(Autocomplete)({
  display: 'flex',
 
   // border: 'none',
   padding: 0,
   marginBottom: '1rem',
   // width: '80%', 
  textAlign: 'left',
   width: '100%',
 // backgroundColor: '#F6F7F8',
   
   // marginRight: '8px',
   boxShadow: 0,
 
 '& .MuiSelect-select' : {
   color:'#333333',
   fontSize: '.85rem',
   
 },
 '& .MuiOutlinedInput-notchedOutline': {
   border: 'none',
  
 
 },
 '& .MuiAutocomplete-endAdornment': {
   backgroundColor: '#F6F7F8',
   borderRadius: '50px'
  
 
 },
 
 '& 	.MuiAutocomplete-clearIndicator': {
   color: chitBlueDull
  
 
 },
 
 '& 	.MuiAutocomplete-hasClearIcon': {
   backgroundColor: 'yellow'
  
 
 },
 
 })
 
 const StyledTextBox= styled(TextField)({
   border: 'none',
   // width: '80%', 
  
   width: '100%',
   
   marginRight: '8px',
   boxShadow: 'none',
 
   '& input' : 
   {color: 'charcoal',
   height: '1rem',
   fontSize: '.85rem',
   padding: '.4rem',
   border: '1px solid orange',
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
     backgroundColor: '#F6F7F8',
     fontSize: '.85rem',
     border: '1px solid #CFD0D1',
   }
 });

