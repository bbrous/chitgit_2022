/* Features.jsx
   contains child slideshow components: 
      SpotlightSlides
      ChitSlides
      etc. etc

    parent: src/app/App.js

*/


import React from 'react'

import {backgroundBlue, chitLightPink, } from '../../styles/colors'

import ChitSlides from './landingElements/FeatureSlides_chits'
import NoteSlides from './landingElements/FeatureSlides_notes'
import LogSlides from './landingElements/FeatureSlides_logs'
import TimestampSlides from './landingElements/FeatureSlides_timestamp'
import SpotlightSlides from './landingElements/FeatureSlides_spotlights'

import {useParams} from 'react-router-dom'

import HeaderPublic from './landingElements/Header_public'
import FeaturesNav from '../navComponents/publicNav/Feature_nav'
 


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
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
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
    display: 'flex',
  
    justifyContent: 'center',
    position: 'relative',
    width: '100%',

    // backgroundColor: 'red' ,
    // paddingBottom: '.5rem',

  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
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
  backgroundColor: 'white' ,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  width: '96%',
  height: 'calc(100% - 2.5rem - 2.5rem - 2rem)',

borderTop: '1px solid #CFD0D1',
  // paddingTop: '1rem',
  // paddingBottom: '1rem',

  overflow: 'auto',
    
    '&::-webkit-scrollbar': {
      width: '0.75em' 
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,175,239,.5)',
      border: '2px solid rgba(0,175,239,.4)',
      borderRadius: '5px'
    },


  borderBottom: '1px solid #606062',

  [theme.breakpoints.down('xs')] : {
    overflow: 'auto',
  }



// backgroundColor: testColors.testGreen

})

const JoinButton= styled('div')({

 position: 'absolute',
right: '5%',
top: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textTransform: 'none',
  width: '6rem',

  
  border: '2px solid  #F285B5' ,
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

// =======================================


function Features() {
  let match = useParams()

  let view
let brad = match.id

if(!brad){view = 'chits'}else{view = match.id}
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

{/* 


        <p>Begin -- A page break</p>

        <p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break</p><p>A page break END</p>
         */}

        
          {view === 'spotlights' &&
            <SpotlightSlides />
        
          }

          {view === 'chits' &&
            <ChitSlides />
          }


          {view === 'notes' &&
            <NoteSlides />
          }

          {view === 'timestamps' &&
            <TimestampSlides />
          }


          {view === 'logs' &&
            <LogSlides />
          }
   

        </Content>
        
      </ContentWrapper>
    </BodyWrapper>
  )
}

export default Features
