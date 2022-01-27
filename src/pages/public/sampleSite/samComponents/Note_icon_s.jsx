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
import{mediumLightGrey, chitOrange,  chitMediumGreen} from '../../../../styles/colors'
import { openModal } from '../../../../app/redux/statusRedux/sam_statusSlice'



// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';
import NotesIcon from '@mui/icons-material/Notes';


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

 
 

const IconGreen= styled(NotesIcon)({
  backgroundColor: 'green',
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
  margin: '0 .5rem .3rem 0',
  cursor: 'pointer',
 
  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const IconOrange= styled(NotesIcon)({
  backgroundColor: 'orange',
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
  margin: '0 .5rem .3rem 0',
  cursor: 'pointer',
 

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





function NoteIcon(props) {

/* props passed from edit icon
   - dbCollection =  noteHolderCollection passed to form from clicked icon
  - id = noteHolderId passed to form
   - noteId = id passed to form

*/

  const dispatch = useDispatch()

  const {noteHolderCollection, noteHolderId, noteId} = props 

  let passedNoteId, titleMessage
  !noteId ? passedNoteId = '' : passedNoteId = noteId
  !noteId ? titleMessage = 'Create Note' : titleMessage = 'Edit Note'

  function handleClick(dbCollection, id) {
    
    console.log('[ EditIcon aa  ] props ', props);
    dispatch(openModal(
      {
        modalParams: {
          modalType: 'form',
          dbCollection: 'notes', // dbCollection passed to modal
          id: passedNoteId,
          noteHolderCollection: noteHolderCollection, // dbCollection FROM icon clicked
          noteHolderId: noteHolderId

        }
      }

    ))
  }



  return (
    <>

    {noteId && 
      <LightTooltip   title = {titleMessage}  arrow> 
      <IconGreen


        onClick={()=>handleClick(noteHolderCollection, noteHolderId)}
       
      />
      </LightTooltip  >
     }

{!noteId && 
      <LightTooltip   title = {titleMessage}  arrow> 
      <IconOrange


        onClick={()=>handleClick(noteHolderCollection, noteHolderId)}
       
      />
      </LightTooltip  >
     }






    </>
  )
}


export default NoteIcon
