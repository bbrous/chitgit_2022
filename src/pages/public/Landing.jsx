/* Landing.jsx
   contains 2 child components: 
      Header_landing - top navigation and login
      Landing_page - main body - advertisement
      Landing_slides - pitch slides

    parent: src/app/App.js

*/

import React from 'react'
import {backgroundBlue} from '../../styles/colors'
import { useHistory } from 'react-router-dom'

import HeaderLanding from './landingElements/Header_landing'
import LandingPage from './landingElements/Landing_page'
import LandingSlides from './landingElements/Landing_slides'
 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// --------------------------------------------------------

const BodyWrapper= styled('div')({
    display: 'block',
    
    backgroundColor: backgroundBlue ,
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    fontFamily: 'Lato, sans-serif',
 
    // '&::-webkit-scrollbar': {
    //   width: '0.75em' 
    // },
    // '&::-webkit-scrollbar-track': {
    //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
    //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: 'rgba(0,175,239,.5)',
    //   border: '2px solid rgba(0,175,239,.4)',
    //   borderRadius: '5px'
    // },

    [theme.breakpoints.down('xs')] : {
                                
      alignItems: 'center',                           
      width: '100%',
      padding: '0',
     
   
   }
 

  // backgroundColor: testColors.testGreen

})

const Wrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',


  [theme.breakpoints.down('sm')] : {
     

  }

})

const HeaderWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
marginBottom: '2.5rem',

  [theme.breakpoints.down('sm')] : {
     

  }

})

const SlidesWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'white',

  [theme.breakpoints.down('sm')] : {
     
    width: '23%',
    height: '2rem',
    marginLeft: '1%', 
  }

})




// =============================================



const Landing = () => {

  let history = useHistory()
  const handleClick = (evt) => {
  
    // console.log('[MAIN} - handleClick', evt.target.id)
    history.push(`/join`)
  }


  return (
    <BodyWrapper>
      <Wrapper>

     
<HeaderWrapper>
      <HeaderLanding  />

      </HeaderWrapper>

      <LandingPage/>
      <SlidesWrapper>

         <LandingSlides/>
      </SlidesWrapper>

      </Wrapper>
     


      {/* <ContentWrapper>
        <TryIt to="/Try">  </TryIt>
        <BoxLink id = 'join' onClick = {(evt)=> handleClick(evt)} > Join</BoxLink>
        <LogoWrapper>
        <LogoStyle src= {Logo}   alt="Chit Git Logo" />
          
          
        </LogoWrapper>

        <LoginWrapper>
          <Login/>
        </LoginWrapper>
      </ContentWrapper> */}



      
    </BodyWrapper>
  )
}

export default Landing
