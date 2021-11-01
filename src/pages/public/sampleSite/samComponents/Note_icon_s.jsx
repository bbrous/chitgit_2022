/* function noteIcon_s -------------
     
 Opens note form in Modal
  
parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
        and TaskItem - pages/public/sampleSite/samSpots/TaskItem  
------------------------------------*/

import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import{mediumLightGrey, chitBlueDull,chitMediumGreen } from '../../../../styles/colors'

import{  openModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
// import{ selectPlans } from '../../../../app/redux/planRedux/sam_selectors_Plans'


// Material UI --------------------
import Tooltip from '@mui/material/Tooltip';
import NotesIcon from '@mui/icons-material/Notes';



import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Icon= styled(NotesIcon)({
  backgroundColor: 'orange',
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
  margin: '0 .5rem .3rem 0',
  cursor: 'pointer',
  
  '&.green': {
    backgroundColor: chitMediumGreen,
  },

  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
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



function NoteIcon(props) {
  let dispatch = useDispatch
  const {type, id} = props

  const openSpotlightForm = ()=>{
  
    
    dispatch(openModal({type}, {id}))
  
      // console.log('[Plan NAV ] -  PlanId is  - ', planId)
  
  }
  // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@

  let passedId = 'spot_1_task_1'
  // let noteId = ''
  let noteId = 'note_1'


  return (
    <>

      {!noteId && 
      <LightTooltip   title = 'New Note'  arrow> 
      <Icon


        onClick={handleClick(passedId)}
       
      />
      </LightTooltip  >
      }

      {!noteId && <Icon

    
        onClick={handleClick(passedId)}

      />

      }

{noteId && 
      <LightTooltip   title = 'Edit Note'  arrow> 
      <Icon


        onClick={handleClick(passedId)}
        className='green'
      />
      </LightTooltip  >
      }

      {!noteId && <Icon

    
        onClick={handleClick(passedId)}

      />

      }

    </>
  )
}


// export default NoteIcon
export default  NoteIcon
