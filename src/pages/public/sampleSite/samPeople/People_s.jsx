/* function Notes(props) -------------------
  Chooses Plan display options
  a) if no Notes --  message 1
  b) if Notes but no detailId  in route --  message 2
  c) if  Notes AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ selectNotes } from '../../../../app/redux/noteRedux/X_sam_selectors_Notes'

import PeopleMain from './PeopleMain_s'

// -------Material UI 


import { styled, createTheme, withStyles  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

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
overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '2rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})
//=======




// ====================================
export default function People(props) {

  let match = useParams()
  
 



  return (
    <Wrapper>
<PeopleMain />
      {/* {NotesArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed Notes</div>
          <div>Create a new Note</div>
        </NoneMessage>

      } */}

      {/* {NotesArray.length > 0 && !NoteId &&
        <NoneMessage>
          <div>Choose a Note to be displayed</div>
          <div>or</div>
          <div>Create a new Note</div>
        </NoneMessage>

      } */}


      {/* {NoteId && NotesArray.length > 0 && <NotesMain />} */}




    </Wrapper>
  )
}


