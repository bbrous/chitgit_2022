/* Features.jsx
   contains child slideshow components: 
      SpotlightSlides
      OverviewSlides
      etc. etc

    parent: src/app/App.js

*/


import React from 'react'
import {useParams} from 'react-router-dom'

import {backgroundBlue, chitLightPink, chitOrange, } from '../../styles/colors'

import OverviewSlides from './slides/featureSlides/FeatureSlides_overview'
import TwoPartySlides from './slides/featureSlides/FeatureSlides_twoParty'
import ChroniclesSlides from './slides/featureSlides/FeatureSlides_chronicles'
import PersonalSlides from './slides/featureSlides/FeatureSlides_personal'
import SpotlightSlides from './slides/featureSlides/FeatureSlides_spotlights'
import ExtrasSlides from './slides/featureSlides/FeatureSlides_extras'

import LockClockIcon from '@mui/icons-material/LockClock';

import HeaderPublic from './landingElements/Header_public'
import FeaturesNav from '../navComponents/publicNav/Feature_nav'
 


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component



// =======================================


function Features() {
  let match = useParams()
  console.log('[Features  page] matchis :  ', match.pageView)
  let view
 

if(!match){view = 'overview'}else{view = match.pageView}
console.log('[Features  page] route id is :  ', view)

  return (
    <BodyWrapper>
      <HeaderPublic/>
      <NavSpacer/>
      
      <ContentWrapper>
        <HeadWrapper>
          <Header> Features and Tools</Header>
          <JoinButton>Join</JoinButton>
          <NavWrapper>

            <FeaturesNav />
            

          </NavWrapper>

        </HeadWrapper>
        {/* <HeaderSpacer/> */}
 
        <Content>

        {!view &&
            <OverviewSlides />
          }


          {view === 'overview' &&
            <OverviewSlides />
          }

        
          {view === 'spotlights' &&
            <SpotlightSlides />
        
          }

          {view === 'personal' &&
            <PersonalSlides />
          }
        
        {view === 'twoParty' &&
            <TwoPartySlides />
        
          }

{view === 'chronicles' &&
            <ChroniclesSlides />
          }
        
        {view === 'extras' &&
            <ExtrasSlides />
        
          }



        </Content>
        
      </ContentWrapper>
    </BodyWrapper>
  )
}

export default Features

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


// backgroundColor: testColors.testGreen

})

const NavSpacer = styled('div')({
  display: 'block',
  height: '2.5rem',


  [theme.breakpoints.down('xs')] : {
 
   
 
 }


// backgroundColor: testColors.testGreen

})



const HeadWrapper= styled('div')({

  
  position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  
    fontSize: '1.4rem',
    width: '100%',
    
    

    backgroundColor: 'white' ,
 
    height: '6rem',
    padding: '1rem 0 1.5rem 0',
  
    borderBottom: '1px solid #CFD0D1',
  
    [theme.breakpoints.down('sm')] : {
      fontSize: '1.1rem',
      height: '5rem',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const Header= styled('div')({

      display: 'flex',
      
      justifyContent: 'center',
      alignItems: 'flex-start',

      width: '100%',

      
      // paddingTop: '1rem',
      // paddingBottom: '1.5rem',
      // backgroundColor: 'blue' ,
      // overflow: 'hidden',
      
     
    
      [theme.breakpoints.down('xs')] : {
        overflow: 'auto',
      }
    
    
    
    // backgroundColor: testColors.testGreen
    
    })



const NavWrapper= styled('div')({

  
  // position: 'absolute',
    display: 'block',
  
    justifyContent: 'center',
    position: 'relative',
    width: '80%',

    // backgroundColor: 'red' ,
    // paddingBottom: '.5rem',

  
    [theme.breakpoints.down('sm')] : {
      width: '100%',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })
  
  const HeaderSpacer = styled('div')({
    display: 'block',
    
    height: '6rem',
    backgroundColor: 'purple',
  
  
    [theme.breakpoints.down('xs')] : {
   
     
   
   }
  })

  const ContentWrapper= styled('div')({
 
    display: 'block',
 
   
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
  
const Content= styled('div')({
  margin:'auto',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  width: '96%',
  height: 'calc(100% - 2.5rem - 2.5rem - 2rem)',

 
  // paddingTop: '1rem',
  // paddingBottom: '1rem',

 
 


  borderBottom: '1px solid #606062',

  [theme.breakpoints.down('sm')] : {
    width: '100%',
  }



// backgroundColor: testColors.testGreen

})

const JoinButton= styled('div')({

 position: 'absolute',
right: '2.5%',
top: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textTransform: 'none',
  width: '6rem',

  
  border: '1px solid  #3B30CC' ,
  borderRadius: '5px',
  // backgroundColor:  chitDarkPink,
  color: backgroundBlue,
  fontWeight: 'normal',
  fontSize: '1rem',
  
  lineHeight: '1.2',

  
  '&:hover' : {
    backgroundColor: chitLightPink,
    textDecoration: 'none',
    color: 'white'
  }


})

const StyledLockClockIcon= styled(LockClockIcon)({
  
  borderRadius: '5px',
  fontSize: '5rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    
    // backgroundColor: mediumLightGrey
  },
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})