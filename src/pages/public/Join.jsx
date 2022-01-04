/*---- File - Join.jsx 
   sign up + auth + redirect

links from:  src\pages\public\landingElements\Landing_page.jsx
             src\pages\public\Login.jsx
     

   Contains children: 
       JoinForm - src\forms\JoinForm.jsx

   parent: Router - direct from App.jsx
*/

import React  from 'react'
import {backgroundBlue } from '../../styles/colors'
 
import JoinForm from '../../forms/JoinForm.jsx'

import HeaderPublic from '../../pages/public/landingElements/Header_public.jsx'
 

 
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const BodyWrapper= styled('div')({
  display: 'block',
  
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

  const SubHeader= styled('div')({

      display: 'flex',
      
      justifyContent: 'center',
      alignItems: 'flex-start',

      width: '100%',

      color: 'white',
      fontSize: '.9rem',
      
     
    
      [theme.breakpoints.down('xs')] : {
        overflow: 'auto',
      }
    
    
    
    // backgroundColor: testColors.testGreen
    
    })
    const ContentWrapper= styled('div')({
 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
     
      height: 'calc(100vh  - 2.5rem)',
  
  
  
      // height: '100%',
      
      // marginTop: '2.5rem',
      paddingBottom: '1rem 0',
      backgroundColor: backgroundBlue,
      overflow: 'hidden',
      fontFamily: 'Lato, sans-serif',
  
    
    
    
      [theme.breakpoints.down('xs')] : {
        overflow: 'hidden',
      }
    
    
    
    // backgroundColor: testColors.testGreen
    
    })
    
const JoinBox= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',
  height: '25rem',
  

  backgroundColor: 'white' ,
  borderRadius: '20px',


  [theme.breakpoints.down('xs')] : {
    width: '25rem',
    height: '25rem',
  }


})








// ================================================

const Join = () => {
  return (
    <BodyWrapper>
      <HeaderPublic />
      <NavSpacer />

      <HeadWrapper>
        Join

        <SubHeader>ChitGit is free</SubHeader>

      </HeadWrapper>

      <ContentWrapper>

        <JoinBox>
          <JoinForm  mark = 'mike' />
        </JoinBox>

      </ContentWrapper>
    </BodyWrapper>
  )
}

export default Join