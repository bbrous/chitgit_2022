/* New.jsx
    New Button for all app components EXCEPT "journal"
    There is only 1 journal

    After that the new icon has two different onClickhandlers

    (1) If twoPartyChit, personalChit or Spotlight Has Icon that Opens Modal with app specific form (ie spotlight, note, etc)
    gets page type from URL ...  if  
    then  passes it to OpenModal action - in - redux/statusRedux/sam_statusSlice

     (2) if log or person or topical - adds newType to URL using navigate()

    Contains children : 
       none

      parent- Main_s - src/pages/public/sampleSite/Main_s
*/


import React from 'react'
import { useDispatch} from 'react-redux'
import {  useParams } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
import{openModal, updateChronicleView} from '../../../../app/redux/statusRedux/sam_statusSlice'
 

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
    cursor: 'pointer'
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

  let navigate = useNavigate()

  page = match.pageView // get URL view location
  id = match.id // get URL view location
  let dbCollection, title

  // console.log('[ NEW ] page ', page);


  switch (page) {
    case 'spotlights':
      dbCollection = 'spotlights'
      title = 'spotlight'
      break;
    
    case 'people':
      dbCollection = 'people'
      title = 'person'
      break;

      case 'logs':
        dbCollection = 'logs'
        title = 'log'
        break;

        case 'topicals':
          dbCollection = 'topicals'
          title = 'topical'
          break;


      case 'journal':
        dbCollection = 'journal'
        title = ''
        break;

      case 'twoPartyChits':
        dbCollection = 'twoPartyChits'
        title = 'two party chit'
        break;

      case 'personalChits':
        dbCollection = 'personalChits'
        title = 'personal chit'
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

const openForm = ()=>{

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

}// end openForm

const handleNewChronicle = (collection)=>{

  //  define which Form to open in Modal by passing
  //  dbCollection to Modal depending on pageView in browser URL 
  // ------------------------------------------------------------
    
  // props.openModal(dbCollection, id)
  let newType, pageType, sectionId
  if(collection === 'logs'){
    newType = 'newLog'
    pageType = 'log'
    sectionId = ''
  
  }
  if(collection === 'topicals'){
    newType = 'newTopical'
    pageType = 'topical'
    sectionId = ''
  
  }
  if(collection === 'journal'){
    newType = 'newJournal'
    pageType = 'journal'
    sectionId = 'new'
  
  }

  dispatch(updateChronicleView(
    {
          sectionId: sectionId,
          pageType: pageType,
          id: newType
      
    }



  ))
 navigate(`/sample/${collection}/newLog`)
  
}// end handleNewChronicle

  return (
    <> 
   
    <NewWrapper elevation={1}>

    
    {page !== 'reports'  && page !== 'journal' && 
    <NewTitle> add {title} </NewTitle>
    }


    {dbCollection === 'logs'  &&
    
    <LightTooltip title={formattedPage} arrow>
    <AddCircleIconWrapper
      onClick={() => handleNewChronicle(page)}
    />
  </LightTooltip>
    
    }
 

    {dbCollection === 'topicals'  &&
    <LightTooltip title={formattedPage} arrow>
    <AddCircleIconWrapper
      onClick={() => handleNewChronicle(page)}
    />
  </LightTooltip>
    
    
    }

{dbCollection === 'spotlights' &&
      <LightTooltip title={formattedPage} arrow>
        <AddCircleIconWrapper
          onClick={() => openForm(page, id)}
        />
      </LightTooltip>
 }

{dbCollection === 'twoPartyChits' &&
      <LightTooltip title={formattedPage} arrow>
        <AddCircleIconWrapper
          onClick={() => openForm(page, id)}
        />
      </LightTooltip>
 }


{dbCollection === 'personalChits' &&
      <LightTooltip title={formattedPage} arrow>
        <AddCircleIconWrapper
          onClick={() => openForm(page, id)}
        />
      </LightTooltip>
 }

    </NewWrapper>
  
 
 

</>
  )
}



export default New
