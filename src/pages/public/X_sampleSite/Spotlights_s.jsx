//    Sample Site Spotlights Primary Page

import React, {useState, useEffect}  from 'react'
import {withRouter, useHistory, useRouteMatch, match} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
 

import{chitOrangeLight, veryLightGrey} from '../../../styles/colors'

import SpotLightMain from './samSpotlights/SpotlightMain_s'
// import SpotLightInfo from './samSpotlights/SpotlightInfo'



import {styled, createMuiTheme}  from '@material-ui/core/styles'
const theme = createMuiTheme(); // allows use of mui theme in styled component



// ----------------------------------
const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: '960px',
  minHeight: '600px',
  height: '100%',
  backgroundColor: chitOrangeLight,

  [theme.breakpoints.down('sm')] : {
    
  },

})

const Initial= styled('div')({
  display: 'block',
  width: '80%',
  backgroundColor: 'white',
  marginTop: '2rem',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  backgroundColor: 'white',
  marginTop: '2rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})
//=======================================================

const Spotlights_s = ({match}) => {

  const spotlightDisplayed = match.params.detailId


  console.log('SPOTLIGHTS - &&&&& spotlightDisplayed: ', spotlightDisplayed)
  return (
    <MainWrapper>


{/* Conditional Not Used in Sample Spotlights --------------------- */}

    {/* {!spotlightDisplayed &&
      <NoneMessage>
        <div>Choose a spotlight to be displayed</div>
        <div>or</div>
        <div>Create a new spotlight</div>



      </NoneMessage>

    } */}



    {/* {spotlightDisplayed === 'initial' &&
      <SpotLightInfo />

    } */}

{/* {spotlightDisplayed && spotlightDisplayed !== 'initial' && <SpotLightMain />} */}


{/* NOT RELAVENT in Sample Spotlights --------------------- */}

      <SpotLightMain />
    

  </MainWrapper>
  )
}

export default withRouter(Spotlights_s)
