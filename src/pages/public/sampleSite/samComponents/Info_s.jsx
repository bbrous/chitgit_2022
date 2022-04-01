/* Info.jsx
    Info Button for all app components 
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
 
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper'; 
 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import { chitLightBlueDull } from '../../../../styles/colors'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const InfoWrapper= styled(Paper)({

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

const InfoIconWrapper= styled(InfoIcon)({

  color: 'white',
  fontSize : '1.6rem',
  
  '&:hover' : {
    backgroundColor: chitLightBlueDull,
    borderRadius: '50px',
    cursor: 'pointer'
  },

})

const InfoTitle= styled('div')({

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

function Info(props) {
  let match = useParams()
  let page, id, formattedPage
  const dispatch = useDispatch()

  page = match.pageView // get URL view location
  id = match.id // get URL view location


  // console.log('[ INFO ] match ', match);
  // console.log('[ INFO ] match params', match.params);


  // --- format which Info button display -- Info Chit, Info Note, etc

  if(page === 'spotlights'){
  formattedPage = 'Info top-tier ' + capitalizeFirstLetter(page).substring(0, page.length - 1) 
  }else{
    formattedPage = 'Info' + capitalizeFirstLetter(page).substring(0, page.length - 1) 
  }

const openInfoModal = ()=>{

  //  define which Form to open in Modal by passing
  //  modalPage to Modal depending on pageView in browser URL 

  let modalPage
  switch (page) {
    case 'spotlights':
      modalPage = 'spotlights'
      break;

    case 'notes':
      modalPage = 'notes'
      break;

    case 'personalChits':
      modalPage = 'personalChits'
      break;

    case 'twoPartyChits':
      modalPage = 'twoPartyChits'
      break;

      case 'journal':
        modalPage = 'chronicles'
        break;
  
      case 'logs':
        modalPage = 'chronicles'
        break;
  


    default:
      modalPage = '';
  }
  
  // ------------------------------------------------------------
    
  // props.openModal(modalPage, id)


  dispatch(openModal(
    { modalParams: {
      modalType: 'info',
      modalPage: modalPage,
      id: ''
      }
    }

  ))


}


  return (
     

  
<LightTooltip title= {formattedPage} arrow>
    <InfoIconWrapper 
    onClick = {()=> openInfoModal(page, id)}
     />
</LightTooltip>

  
  )
}



export default Info
