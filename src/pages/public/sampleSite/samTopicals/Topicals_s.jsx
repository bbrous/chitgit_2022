/* function Topicals(props) -------------------
  Chooses Plan display options
  a) if no topicals --  message 1
  b) if topicals but no detailId  in route --  message 2
  c) if  topicals AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
 
import { useParams, useNavigate } from 'react-router-dom'
import {veryLightGrey} from '../../../../styles/colors'

import{ selectTopicals } from '../../../../app/redux/topicalRedux/sam_topicalsSlice'

import TopicalsMain from './TopicalsMain_s'
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
function topicals(props) {

  // let match = useParams()
  // let navigate = useNavigate()

  // const topicalPage = match.pageView
  // const topicalId = match.id
  // const displayPopoverModalMessage = status.initialMessage.spotlights

// ###########  TEMP  ############## 
let topicalsArray = [1,3]
let topicalId = 'wrw'
 
let displayPopoverModalMessage = false
 

  return (
    <Wrapper>

{displayPopoverModalMessage &&
        // <PopoverModal pageType={topicalPage} />
        <div> Popover Page here</div>

      }

      {topicalsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed topicals</div>
          <div>Create a new topical</div>
        </NoneMessage>

      }

      {topicalsArray.length > 0 && !topicalId &&
        <NoneMessage>
          <div>Choose a topical to be displayed</div>
          <div>or</div>
          <div>Create a new topical</div>
        </NoneMessage>

      }


      {topicalId && topicalsArray.length > 0 && 

      // <div> Put Topical Main Here</div>
            
      <TopicalsMain />
      
      }




    </Wrapper>
  )
}



export default  topicals
