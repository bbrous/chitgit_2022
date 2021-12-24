/* Styled Radio
   ex. Name  is 'TaskType'

   In Form -- enter name ('TaskType') in 4 places
     - interface
     - defaultValues (with default value :  'task' in this example)
     - formSchema
     - name - in Component's passed props
  
   In this Component:
     change options {label, and values}

    


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

const options = [
  {
    label: "As Task",
    value: "task",
  },
  {
    label: "As Spotlight",
    value: "spotlight",
  },
  {
    label: "As Chit",
    value: "chit",
  },
];

const theme = createTheme(); // allows use of mui theme in styled component

const OptionsWrapper= styled('div')({
  display: 'flex'
  

})

const StyledLabel= styled(FormControlLabel)({
  color: 'grey',
  fontSize: '.5rem',
  '& .MuiFormControlLabel-label ': {
    fontSize: '.8rem'
  }
  

})
// -----------------------------------

const OrangeRadio = withStyles({
  root: {
    color: 'orange',
    icon: {
      color: 'blue'
    },
    '&$checked': {
      color: 'orange',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  },

  
  
  checked: {},
})((props) => <Radio color="default" {...props} />);





// ============================================

export const StyledRadio = ({
  name,
  control,
  label,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <StyledLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<OrangeRadio />}
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