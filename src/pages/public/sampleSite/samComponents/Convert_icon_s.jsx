/* function Convert_item_s -------------
     
  Converts a task to a Spotlight - opens form in Modal
  
parent: TaskItem - pages/public/sampleSite/samSpots/TaskItem  
------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import{mediumLightGrey, chitOrange, } from '../../../../styles/colors'
// import{changeLastSpotlightDisplayed,  openModal, closeModal} from '../../../../app/redux/statusRedux/sam_action_Status'



// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';

import CachedIcon from '@mui/icons-material/Cached';


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

 
 

const Icon= styled(CachedIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.95rem',
  // color: chitOrange,
  color: mediumLightGrey,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
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


function Convert(props) {

 
  // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@
  let type = 'task'
  let passedId = 'spot_1_task_1'
  // let noteId = ''
 


  return (
    <>

   
      <LightTooltip   title = 'Convert to Spotight'  arrow> 
      <Icon


        onClick={handleClick(passedId)}
       
      />
      </LightTooltip  >
 






    </>
  )
}


export default Convert
