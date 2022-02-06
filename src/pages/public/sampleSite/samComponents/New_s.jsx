/* New.jsx
    New Button for all app components 
    Has Icon that Opens Modal with app specific form (ie spotlight, note, etc)
    gets page type from URL ... 
    then  passes it to OpenModal action - in - redux/statusRedux/sam_statusSlice

    Contains children : 
       none

      parent- Main_s - src/pages/public/sampleSite/Main_s
*/


import React from 'react'
import { useDispatch} from 'react-redux'
import {  useParams } from 'react-router-dom'

import{openModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
 

import {capitalizeFirstLetter} from '../../../../app/helpers/commonHelpers'

// material UI imports ---------
import Tooltip from '@mui/material/Tooltip';
 
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'; 
 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const NewWrapper= styled(Paper)({

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '1rem 1rem 1rem 0',
  width: '100%',
  height: '2rem',
  backgroundColor: 'white',
  borderRadius: '0',
  marginBottom: '2px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', s
  }

})

const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: 'grey',
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: 'lightGrey',
    borderRadius: '50px',
  },

})

const NewTitle= styled('div')({

  display: 'block',
  marginRight: '6px',
  
  // color: mutedBackgroundBlue,
  // fontWeight: 'bold'
  

})

const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);

// =====================================

function New(props) {
  let match = useParams()
  let page, id, formattedPage
  const dispatch = useDispatch()

  page = match.pageView // get URL view location
  id = match.id // get URL view location
  let dbCollection, title
  switch (page) {
    case 'spotlights':
      dbCollection = 'spotlights'
      title = 'spotlight'
      break;
    
    case 'notes':
      dbCollection = 'notes'
      title = 'note'
      break;

      case 'logs':
        dbCollection = 'logs'
        title = 'log'
        break;

      case 'chronicles':
        dbCollection = 'chronicles'
        title = 'chronicle'
        break;

      case 'twoParty':
        dbCollection = 'chits'
        title = 'chit'
        break;

      case 'personal':
        dbCollection = 'chits'
        title = 'chit'
        break;
  


    // ######     Add Chit FORMS HERE     ############
    // ######     Add Chron FORMS HERE    ############
    // ######     Add Log FORMS HERE      ############
    // ######            etc              ############

    default:
      dbCollection = '';
  }
  // --- format which New button display -- new Chit, new Note, etc

  if(page === 'spotlights'){
  formattedPage = 'New top-tier ' + capitalizeFirstLetter(page).substring(0, page.length - 1) 
  }else{
    formattedPage = 'New' + capitalizeFirstLetter(page).substring(0, page.length - 1) 
  }

const openSpotlightForm = ()=>{

  //  define which Form to open in Modal by passing
  //  dbCollection to Modal depending on pageView in browser URL 


  
  // ------------------------------------------------------------
    
  // props.openModal(dbCollection, id)
  
  dispatch(openModal(
    { modalParams: {
          modalType: 'form',
          dbCollection: dbCollection,
          id: ''
      }
    }

  ))

}// end openSpotlightForm

  return (
    <NewWrapper elevation={1}>

    <NewTitle> new {title} </NewTitle>
      <LightTooltip title={formattedPage} arrow>
        <AddCircleIconWrapper
          onClick={() => openSpotlightForm(page, id)}
        />
      </LightTooltip>

    </NewWrapper>
  )
}



export default New
