/* function sagas(props) -------------------
  Chooses Plan display options
  a) if no sagas --  message 1
  b) if sagas but no detailId  in route --  message 2
  c) if  sagas AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
 
import { useParams, useNavigate } from 'react-router-dom'
import {veryLightGrey} from '../../../../styles/colors'

import{ selectSagas } from '../../../../app/redux/sagaRedux/sam_sagaSlice'

import SagaMain from './SagaMain_s'
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
function Sagas(props) {

  let match = useParams()
  let navigate = useNavigate()

  const sagaPage = match.pageView
  // const sagaId = match.id
  // const displayPopoverModalMessage = status.initialMessage.spotlights

// ###########  TEMP  ############## 
let sagasArray = [1,3]
let sagaId = 'wrw'
let sagaSectionId = 'spectrum'
let displayPopoverModalMessage = false
 

  return (
    <Wrapper>

{displayPopoverModalMessage &&
        <PopoverModal pageType={sagaPage} />

      }

      {sagasArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed sagas</div>
          <div>Create a new saga</div>
        </NoneMessage>

      }

      {sagasArray.length > 0 && !sagaId &&
        <NoneMessage>
          <div>Choose a saga to be displayed</div>
          <div>or</div>
          <div>Create a new saga</div>
        </NoneMessage>

      }


      {sagaId && sagasArray.length > 0 && 
      
      <SagaMain />
      
      }




    </Wrapper>
  )
}



export default  Sagas
