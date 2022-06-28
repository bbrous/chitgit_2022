/* function Spotlights(props) -------------------
  Chooses Spotlight display options
  a) if no Spotlights --  message 1
  b) if Spotlights but no detailId  in route --  message 2
  c) if  Spotlights AND detailId  in route--  show Spotlight page

  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/

import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ 
  selectSpotlights,
 } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import{ 
  selectStatus,
 
} from '../../../../app/redux/statusRedux/sam_statusSlice'


import PopoverModal from '../samComponents/PopoverModal'
import Spotlight from './SpotlightMain_s'
import SpotlightTree from './SpotlightTree_s'
import CompletedTasks from './X_CompletedTasks'
// -------Material UI 

import Paper from '@mui/material/Paper'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




// ====================================

function Spotlights(props) {

  let match = useParams()
  let navigate = useNavigate()

  const SpotlightPage = match.pageView
  const SpotlightId = match.id

  // console.log('=======[Spotlights_s]  match is', match)
  let status = useSelector(selectStatus)
  let SpotlightsArray = useSelector(selectSpotlights)

  // ---- Set the initial spotlight view ----------------------

  const [spotlightView, setSpotlightView] = useState(status.view.spotlight.display)


  // console.log('[Spotlights_s]  spotlightView is', spotlightView)


  useEffect(() => {
    // console.log('[Spotlights_s]  SpotlightPage is', spotlightView)
    setSpotlightView(status.view.spotlight.display)
  }, [status.view.spotlight.display, spotlightView])


  // ---- Set the initial spotlight in the URL if there is one ------------------

  let lastStoredSpotlight = status.view.spotlight.spotId


  useEffect(() => {
    if (lastStoredSpotlight && !SpotlightId) {

      navigate(`${SpotlightPage}/${lastStoredSpotlight}`)

    }
  }, [navigate, match.url, SpotlightId, lastStoredSpotlight, SpotlightPage])

  // --- set up initial Message  for Popover
  // const displayPopoverModalMessage = false
  const displayPopoverModalMessage = status.initialMessage.spotlights







  return (
    <Wrapper>
  

      {displayPopoverModalMessage &&
        <PopoverModal pageType={SpotlightPage} />

      }

      {SpotlightsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed Spotlights</div>
          <div>Create a new Spotlight</div>
        </NoneMessage>

      }

      {SpotlightsArray.length > 0 && spotlightView === 'tree' &&
        <SpotlightTree />

      }

{SpotlightsArray.length > 0   && spotlightView === 'completedTasks' &&
        <CompletedTasks />

      }

      {SpotlightsArray.length > 0 && !SpotlightId && spotlightView === 'detail' &&
        <NoneMessage>
          <div>Choose a Spotlight to be displayed</div>
          <div>or</div>
          <div>Create a new spotlight</div>
        </NoneMessage>

      }
      {SpotlightId && SpotlightsArray.length > 0 && spotlightView === 'detail' &&

        <Spotlight />

      }


    </Wrapper>
  )
}


export default Spotlights


// -----------------------------------------------------------------

const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})



const NoneMessage= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '3rem',
  borderRadius: '10px',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})
//=======
