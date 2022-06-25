/*---- File - Login.jsx 
   sign in

links from:  src\pages\public\landingElements\Landing_page.jsx
             src\pages\public\Login.jsx
      Router - direct from App.jsx

   Contains children: 
       JoinForm - src\forms\JoinForm.jsx

   parent:  Router - direct from App.jsx
*/

import React  from 'react'
import {backgroundBlue } from '../../styles/colors'
import {  useParams } from 'react-router-dom'
import LoginForm from '../../forms/LoginForm.jsx'


 
import HeaderPublic from '../../pages/public/landingElements/Header_public.jsx'
 import JoinButtonSmall from '../navComponents/buttons/JoinButtonSmall'



import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




// ================================================

const Login = (props) => {

    // --- if come to Join from shared chit --- 
    // make shared chit info available after login --------

    let match = useParams()

    console.log('[ Login ] params ', match.sharedChitId);
    
    //  ---------------------------------------
 
  return (


    <BodyWrapper>
      
      <HeaderPublic />
      <NavSpacer />
      <HeadWrapper>
        <div>Login</div>

        <SubHeader>
          <span>not a member  </span> <JoinButtonSmall /> </SubHeader>
      </HeadWrapper>
      <ContentWrapper>




        

  



        <LoginBox>
          <LoginForm />


        </LoginBox>

      </ContentWrapper>
    </BodyWrapper>
  )
}

export default Login

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
    marginTop: '2rem',
    height: '6rem',
    
  
 
  
 
    [theme.breakpoints.down('sm')]: {
      width: '96%',
      marginLeft: '2%'
  
    },
  
  })

  const SubHeader= styled('div')({

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '.5rem 0',
      width: '30%',

      color: 'white',
      fontSize: '.9rem',
      
      '& span' : {
        color: 'white',
        fontSize: '.8rem',
        marginRight: '.75rem'
      },
 
    
 
  
 
      [theme.breakpoints.down('sm')]: {
        width: '96%',
        marginLeft: '2%'
    
      },
    
    })
    const ContentWrapper= styled(Paper)({
 
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
  
  
 
      [theme.breakpoints.down('sm')]: {
        width: '96%',
        marginLeft: '2%'
    
      },

    
    })
    
const LoginBox= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
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
