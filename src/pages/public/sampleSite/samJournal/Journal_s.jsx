/* function Journal(props) -------------------
  Chooses Plan display options
  a) if no Jsection --  message 1
  b) if Jsection but no detailId  in route --  message 2
  c) if  Jsection AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
 
import { useParams, useNavigate } from 'react-router-dom'
import {veryLightGrey} from '../../../../styles/colors'

// import{ selectJurnal } from '../../../../app/redux/journalRedux/X_sam_selectors_Journal'

import JournalMain from './JournalMain_s'
import PopoverModal from '../samComponents/PopoverModal'




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
function Journal(props) {

  let match = useParams()
  let navigate = useNavigate()

  const JournalPage = match.pageView
  const JournalId = match.id
  // const displayPopoverModalMessage = status.initialMessage.spotlights

// ###########  TEMP  ############## 
let jSectionsArray = [1]
let chronId = 'spectrum'
let jSectionId = ''
let displayPopoverModalMessage = false
 

  return (
    <Wrapper>

{displayPopoverModalMessage &&
        <PopoverModal pageType={JournalPage} />

      }

      {jSectionsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed journal sections</div>
          <div>Create a new journal section</div>
        </NoneMessage>

      }


      {jSectionsArray.length > 0 && <JournalMain />}




    </Wrapper>
  )
}



export default  Journal
