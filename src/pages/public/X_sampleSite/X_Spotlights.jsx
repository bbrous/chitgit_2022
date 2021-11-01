import React, {useState, useEffect}  from 'react'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import{openCloseSidePanel} from '../../app/redux/actions/mainActions'

import{chitOrange, veryLightGrey} from '../../styles/colors'

import SpotLightMain from './spotlightComponents/SpotlightMain'
import SpotLightInfo from './spotlightComponents/SpotlightInfo'
// import HeaderMain from './mainComponents/Header_main'


// --- Material UI -----------
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { styled, createMuiTheme } from "@material-ui/core/styles"
const theme = createMuiTheme(); // allows use of mui theme in styled component

// --------------------------

// import Modal from '../../components/modal/Modal.jsx' 
// import LoadingIndicator from '../../app/utils/LoadingIndicator'
// import { asyncActionStart, asyncActionFinish, asyncActionError} from '../../app/redux/reducers/asyncReducer'

/* -- Spotlights.jsx

  - Main landing page for Spotlights
  - Determines 1 of 3 possible scenarios to display
    based on Redux store field 'acctInfo.status.lastSpotlight'
      - state = 'iniitial' ... SpotlightInfo (description)
      - state = '' .       .. displays message - choose a spotlight
      - state = 'xId'      ... Spotlight(displays spotlight with xId)

*/



 

//--------------------------------------

const BodyWrapper= styled('div')({
  display: 'block',
  
  // backgroundColor: 'white',
  backgroundColor: 'white',
  height: '100vh',

overflow: 'hidden',

// background: 'yellow',


})

 

const ToolbarSpacer= styled('div')({

  display: 'block',

  height: '1.75rem',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    height: '1.25rem',
    backgroundColor: 'red'
  }

})

const MainWrapper= styled('div')({

  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: '960px',
  // minHeight: '600px',
  height: '100%',

  [theme.breakpoints.down('sm')] : {
     
  },

})

const MainContentWrapper= styled('div')({

  display: 'block',
  height: '99%',
  paddingTop: '3rem',
  paddingLeft: '3rem',



  [theme.breakpoints.down('sm')] : {
    paddingTop: '1.5rem',
    paddingLeft: '0',
    // height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    // paddingLeft: '3rem',

  }

})

//  ---- phone Navigation panels -------


const SidePanelWrapper= styled('div')({
  display: 'block',
  position: 'absolute',

  backgroundColor: veryLightGrey,
  width: '15rem',
height: '100%',
  zIndex: '31',


  [theme.breakpoints.down('sm')] : {
    
    left: '3rem',
    '&.hide' : {
      left: '-15rem'
    },
  
    '&.show' : {
      left: '3rem'
    },
    
  },

  
  
  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',
    // display: 'none'

    '&.hide' : {
      left: '-15rem'
    },
  
    '&.show' : {
      left: '0rem'
    },
  },

})

const Handle= styled('div')({

  display: 'none',
  position:'absolute',
  width: '1.5rem',
  height: '3rem',
  borderRadius: '0 5px 5px 0',
 

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    right: '-1.5rem',
    top: '3rem',

    

    background: chitOrange
  },
  

})

const ContentWrapper = styled('div')({

  display: 'block',
  marginLeft: '15rem',
  height: '100%',

  
 

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '3rem',
  },

  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',

  }

})

const BottomNavSpacer = styled('div')({

  display: 'none',
  height: '3rem',


  [theme.breakpoints.down('sm')] : {
    display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    display:  'none',

  }

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

const Spotlights = ({match}) => {
  console.log('SPOTLIGHTS - &&&&& spotlightDisplayed: ', match)

  const spotlightDisplayed = match.params.id 


  const lastSpotlight = useSelector(state => state.private.status.spotLightDisplay.displayedSpotlightId)
  
 
  let history = useHistory()
  // let matchURL = useRouteMatch()

  /* ---------------------
  Use Effect conditional to define initial load of a spotlight
    -  last spotlight - see's if there was a previous 
       spoltlight in Firebase
    -  not spotlightDisplayed is used for refreshing a page with 
       an existent spotlight Id in the url

   --------------------  */

  useEffect(() => {

    if (lastSpotlight && !spotlightDisplayed) {
      // console.log('SPOTLIGHTS - use Effect url match : ', match.url)
      history.push(`${match.url}/${lastSpotlight}`)

    }

  }, [history, match.url, spotlightDisplayed, lastSpotlight])



// ===  return  =========================

  return (
    <>

      {!spotlightDisplayed &&
        <NoneMessage>
          <div>Choose a spotlight to be displayed</div>
          <div>or</div>
          <div>Create a new spotlight</div>



        </NoneMessage>

      }

      {spotlightDisplayed === 'initial' &&
        <SpotLightInfo />

      }

      {spotlightDisplayed && spotlightDisplayed !== 'initial' && <SpotLightMain />}

    </>
  )
}

// const actions = {
//   openCloseSidePanel,

// }

// const mapState = state => ({
//   view: state
// });

// export default connect(mapState, actions)(Main)
export default Spotlights

 
