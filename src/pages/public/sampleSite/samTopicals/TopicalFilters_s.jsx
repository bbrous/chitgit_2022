import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import {
  updateTopicalView, 
  selectStatus,
 
} from '../../../../app/redux/statusRedux/sam_statusSlice'

// import TopicalsTaskForm from '../samForms/TopicalsTaskForm_s'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled, createTheme  } from "@mui/material/styles"
import { withStyles  } from "@mui/styles"
import { chitBlueDull } from '../../../../styles/colors';
const theme = createTheme(); // allows use of mui theme in styled component




export default function TopicalFilters_s(props) {
  const dispatch = useDispatch()

  let status = useSelector(selectStatus)
  let radioValue = status.view.topical.displayType
   

  // useEffect(()=>{

  //   setValue
  // }, [])


  const handleChange = (evt)=>{
    console.log('TopicalFilter - handleChange evt', evt.target.value)
    dispatch(updateTopicalView({
      pageType: 'topical', 
      displayType: evt.target.value
    
    }))
  }

  return (
    <Wrapper>
    <FormControl component="fieldset" onChange = {(evt) => handleChange(evt)}>

      <RadioGroup 
        row aria-label="gender" 
        name="row-radio-buttons-group"
        value = {radioValue}
        >
        <StyledLabel value="sections" control={<StyledRadio />} label="Sections Only" />
        <StyledLabel value="notes" control={<StyledRadio />} label="Notes Only" />
        <StyledLabel value="all" control={<StyledRadio />} label="Sections + Notes" />
         
      </RadioGroup>
    </FormControl>
    </Wrapper>
  );
}



// -----------------------------------------------------------------

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'flex-start',
  // alignItems: 'center',


   backgroundColor: 'lightgrey',
   
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const StyledLabel= styled(FormControlLabel)({
  color: 'grey',
  fontSize: '.5rem',
  '& .MuiFormControlLabel-label ': {
    fontSize: '.8rem'
  }
  

})
// -----------------------------------

const StyledRadio = withStyles({
  root: {
    
    color: chitBlueDull,
   
    icon: {
      color: chitBlueDull,
      
    },
    '&$checked': {
      color: chitBlueDull,
    },
    '&:hover': {
      backgroundColor: 'white',
    },

    '& svg ' : {
      width : '1rem',
      height: '1rem',
      // backgroundColor: 'green'
    
    }

    
    
  },

  
  
  checked: {},
})((props) => <Radio color="default" {...props} />);