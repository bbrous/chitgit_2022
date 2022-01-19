/* function editIcon_s -------------
     
 Opens edit form in Modal
    - Receives from parent props: dbCollection + id
    - adds prop type ('form')
    - dispatches open Modal
  
parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
------------------------------------*/


import React from 'react'
import { useDispatch} from 'react-redux'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import{mediumLightGrey, chitOrange, } from '../../../../styles/colors'
import { openModal } from '../../../../app/redux/statusRedux/sam_statusSlice'



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





function Edit(props) {


  const {dbCollection, id} = props
  const dispatch = useDispatch()

  function handleClick(dbCollection, id){
    console.log('[ EditIcon aa  ] props ', dbCollection, id);
    dispatch(openModal({
      modalType: 'form',
      dbCollection: dbCollection,
      id: id
  
    }))
  }

  let titleMessage
  
  switch (dbCollection) {

    case 'spotlights' : {
      titleMessage = 'Edit Spotlight'
      break
    }

    case 'chits' : {
      titleMessage = 'Edit Chit'
      break
    }

    case 'logs' : {
      titleMessage = 'Edit Log'
      break
    }

    case 'chronicles' : {
      titleMessage = 'Edit Chronicle'
      break
    }

    default: titleMessage = 'Edit'

  }// end switch

  return (
    <>

   
      <LightTooltip   title = {titleMessage}  arrow> 
      <Icon


        onClick={()=>handleClick(dbCollection, id)}
       
      />
      </LightTooltip  >
     






    </>
  )
}


export default Edit
