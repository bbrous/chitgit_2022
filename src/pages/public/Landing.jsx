/* Landing.jsx
   contains 2 child components: 
      Header_landing - top navigation and login
      Landing_page - main body - advertisement
      Landing_slides - pitch slides

    parent: src/app/App.js

*/

import React from 'react'
import {backgroundBlue} from '../../styles/colors'
import { useNavigate } from 'react-router-dom'
 
import { Scrollbars } from 'react-custom-scrollbars';

import HeaderLanding from './landingElements/Header_landing'
import LandingPage from './landingElements/Landing_page'
import LandingSlides from './landingElements/Landing_slides'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component






// =============================================



const Landing = () => {

  const navigate = useNavigate()
  const handleClick = (evt) => {
  
    // console.log('[MAIN} - handleClick', evt.target.id)
   navigate(`/join`)
  }


  return (
    <BodyWrapper>
      <Scrollbars>
      <Wrapper>

     
<HeaderWrapper>
      <HeaderLanding  />

      </HeaderWrapper>

      <LandingPage/>
      <SlidesWrapper>

         <LandingSlides/>
      </SlidesWrapper>

      </Wrapper>
     


      </Scrollbars>



      
    </BodyWrapper>
  )
}

export default Landing


// --------------------------------------------------------

const BodyWrapper= styled('div')({
  display: 'block',
  
  backgroundColor: backgroundBlue ,
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  fontFamily: 'Lato, sans-serif',

  

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
   

}

})