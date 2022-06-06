/* function chitIcon_s -------------
     
 Opens chit form in Modal to convert spotlight to chit


    1. parent spotlight or task passes   ** to status.modal  ** :


    modalParams{
      id: id,
      dbCollection: 'tasks', -   or spotlights or log, etc
      modalType: 'personalChits', or twoPartyChits, etc.
      chitLink: {}, //{dbCollection: 'twoPartyChits', id: 'XYZ'}

    }

    2. Modal_s receives params - useSelector(modalParams) - 
       then passes modalParams = {modalParams} to form
       sets openModal to true





  
parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
        and TaskItem - pages/public/sampleSite/samSpots/TaskItem  
------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import{mediumLightGrey, chitMediumGreen, chitOrange, mediumMediumGrey, } from '../../../../styles/colors'
// import{changeLastSpotlightDisplayed,  openModal, closeModal} from '../../../../app/redux/statusRedux/sam_action_Status'

import LogoIconWhite from '../../../../images/logo_icon_white.svg'
 
// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';
 


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

 
 

const LogoWrapper= styled('div')({

  height: '.85rem', 
  width: '.85rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 4px 4px 4px',
cursor: 'pointer',
borderRadius: '20px',
  backgroundColor: chitMediumGreen,
  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


})

const LogoWrapperOrange= styled('div')({

  height: '.85rem', 
  width: '.85rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 4px 4px 4px',
  
cursor: 'pointer',
borderRadius: '20px',
  backgroundColor: mediumMediumGrey,
  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


})

const LogoStyle= styled('img')({

  height: '.55rem',
fill: 'red'
  // marginRight: '14px',
})





const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);
// ================================


function handleClick(passedId){
  // console.log('[Note_icon - I be clicked')
}


function ChitIcon(props) {

  const {type, id} = props

  // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@

  let passedId = 'spot_1_task_1'
  let chitId = ''
  // let chitId = 'chit_1'


  return (
    <>
        

      {!chitId && 
      <LightTooltip   title = 'Convert to Chit'  arrow> 
<LogoWrapperOrange onClick={handleClick(passedId)}>
        <LogoStyle src= {LogoIconWhite}   alt="Chit Git Logo" />
         </LogoWrapperOrange> 
      </LightTooltip  >
      }

{chitId && 
      <LightTooltip   title = 'View Chit'  arrow> 
<LogoWrapper onClick={handleClick(passedId)}>
        <LogoStyle src= {LogoIconWhite}   alt="Chit Git Logo" />
         </LogoWrapper> 
      </LightTooltip  >
      }

{/* {chitId && 
      <LightTooltip   title = 'Edit Note'  arrow> 
      <Icon


        onClick={handleClick(passedId)}
        className='green'
      />
      </LightTooltip  >
      }

      {!chitId && <Icon

    
        onClick={handleClick(passedId)}

      />

      } */}

    </>
  )
}


export default ChitIcon
