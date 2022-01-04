/*---- File - PasswordReset.jsx 
  reset password wrapper

links from:  ./LoginForm .jsx

   parent:   none 
*/

import React  from 'react'
import {backgroundBlue } from '../../styles/colors'

import PasswordResetForm from '../../forms/PasswordResetForm.jsx'
import HeaderPublic from '../../pages/public/landingElements/Header_public.jsx'

//  --- mui ---
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const BodyWrapper= styled('div')({
  display: 'block',
  
  // backgroundColor: 'white' ,
  height: '100vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
  fontFamily: 'Lato, sans-serif',
  backgroundColor: backgroundBlue ,


  [theme.breakpoints.down('xs')] : {
                              
    alignItems: 'center',                           
    width: '100%',
    padding: '0',
   

 }


})

const NavSpacer = styled('div')({
  display: 'block',
  height: '2.5rem',


  [theme.breakpoints.down('xs')] : {

 
 }


})


const HeadWrapper= styled('div')({

  
  position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  
    fontSize: '1.4rem',
    width: '100%',
    color: 'yellow',
 
    height: '6rem',
    padding: '1rem 0 1.5rem 0',
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }
  

  
  })


    const ContentWrapper= styled('div')({
 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
     
      height: 'calc(100vh  - 2.5rem)',
  
      paddingBottom: '1rem 0',
      backgroundColor: backgroundBlue,
      overflow: 'hidden',
      fontFamily: 'Lato, sans-serif',
    
      [theme.breakpoints.down('xs')] : {
        overflow: 'hidden',
      }
    

    
    })
    
const ResetBox = styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',
  height: '25rem',
  backgroundColor: 'white',
  borderRadius: '20px',

  [theme.breakpoints.down('xs')]: {
    width: '25rem',
    height: '25rem',
  }

})


// ================================================

const PasswordReset = (props) => {


  return (

    <BodyWrapper>

      <HeaderPublic />
      <NavSpacer />
      <HeadWrapper></HeadWrapper>

      <ContentWrapper>
        <ResetBox>
          <PasswordResetForm />
        </ResetBox>
      </ContentWrapper>

    </BodyWrapper>
  )
}

export default PasswordReset