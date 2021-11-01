import React, {Fragment} from 'react'


import Button from '@material-ui/core/Button';
import {styled, createMuiTheme} from '@material-ui/core/styles';
import{chitOrangeLight,  chitOrange} from '../../../styles/colors'

const theme = createMuiTheme(); // allows use of mui theme in styled component

const StyledForm= styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
  [theme.breakpoints.down('sm')] : {

 
    display: 'none'
    }

  // background: testColors.testRed,
})

const StyledText= styled('input')({

  width: '27%',
  height: '.8rem',
  fontSize: '.65rem' ,
  marginRight: '3px', 
  // background: testColors.testRed,

  fontWeight: 'normal',

  border: '1px solid white',
  borderRadius: '4px'
  

})



const SubmitButton= styled(Button)({
 
  width: '8px',
  height: '.8rem',
  fontSize: '.5rem' ,
    
  backgroundColor: chitOrange,
  boxShadow: 'none',
  color: 'white',
  padding: '0 0 1px 0',

  '&:hover' : {
    backgroundColor: chitOrangeLight,
    textDecoration: 'none',
    color: 'black'
  }

})

// =================================================
const Header_login = () => {
  return (
    <Fragment>
      <StyledForm>
        
      <StyledText
         
        placeholder="Email"
        variant="outlined"
        
      />

      <StyledText
         
         placeholder="Password"
         variant="outlined"
         
       />

       <SubmitButton>Login </SubmitButton>
      </StyledForm>
      
    </Fragment>
  )
}

export default Header_login
