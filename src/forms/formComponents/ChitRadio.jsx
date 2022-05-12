/* Styled Radio
   ex. Name  is 'TaskType'

   In Form -- enter name ('TaskType') in 4 places
     - interface
     - defaultValues (with default value :  'task' in this example)
     - formSchema
     - name - in Component's passed props
  
   In this Component:
     change options [{label, value}, {label, value}...]
     in the main form ... 2, 3, 4 etc... options 
     will be mapped creating as many inputs as needed

    


*/

import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";
 
import { styled, createTheme  } from "@mui/material/styles"
import { withStyles  } from "@mui/styles"
import { chitBlueDull, darkGrey } from "../../styles/colors";



const theme = createTheme(); // allows use of mui theme in styled component

const OptionsWrapper= styled('div')({
  display: 'flex'
  

})

const StyledLabel= styled(FormControlLabel)({
  color: darkGrey,
  fontSize: '.5rem',
  '& .MuiFormControlLabel-label ': {
    fontSize: '.8rem'
  }
  

})
// -----------------------------------

const StyledRadio = withStyles({
  root: {
    
    color: 'orange',
   
    icon: {
      color: 'orange',
      
    },
    '&$checked': {
      color: 'orange',
    },
    '&:hover': {
      backgroundColor: 'none',
    },

    '& svg ' : {
      width : '1rem',
      height: '1rem',
      // backgroundColor: 'green'
    
    },

    '& label ' : {
     
  
    
    } 
    
  },

  
  
  checked: {},
})((props) => <Radio color="default" {...props} />);




// ============================================

export const ChitRadio = ({
  name,
  control,
  label,
  options
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <StyledLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<StyledRadio />}
        key={singleOption.value}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">{label}</FormLabel> */}
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange} defaultValue = '1'>
            <OptionsWrapper>
            {generateRadioOptions()}
            </OptionsWrapper>
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};