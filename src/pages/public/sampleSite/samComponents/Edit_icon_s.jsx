/* function editIcon_s -------------
     
 Opens edit form in Modal
  
parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
------------------------------------*/


import React from 'react'
import {connect} from 'react-redux'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import{mediumLightGrey, chitOrange, } from '../../../../styles/colors'
// import{changeLastSpotlightDisplayed,  openModal, closeModal} from '../../../../app/redux/statusRedux/sam_action_Status'
// import{ selectPlans } from '../../../../app/redux/planRedux/sam_selectors_Plans'


// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

 
 

const Icon= styled(EditIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.9rem',
  color: chitOrange,
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


function handleClick(type, id){
  console.log('[ EditIcon aa  ] props ', type, id);
}


function Edit(props) {

  const {type, id} = props

  // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@

  // let passedId = id
      let passedId = 'spot_1_task_1'

  // let  passedType = type
      let  passedType = 'spotlight'
      
  // let noteId = ''

    // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@

  let titleMessage
  
  switch (passedType) {

    case 'spotlight' : {
      titleMessage = 'Edit Spotlight'
      break
    }

    case 'chit' : {
      titleMessage = 'Edit Chit'
      break
    }

    default: titleMessage = 'Edit'

  }// end switch

  return (
    <>

   
      <LightTooltip   title = {titleMessage}  arrow> 
      <Icon


        onClick={handleClick(type, id)}
       
      />
      </LightTooltip  >
     






    </>
  )
}


export default Edit
