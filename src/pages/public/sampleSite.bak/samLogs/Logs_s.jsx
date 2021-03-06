/* function Logs(props) -------------------
  Chooses Plan display options
  a) if no logs --  message 1
  b) if logs but no detailId  in route --  message 2
  c) if  logs AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ selectLogs } from '../../../../app/redux/logRedux/X_sam_selectors_Logs'

import LogMain from './LogMain_s'

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
function Logs(props) {

  let match = useParams()
  
 
  // const logId = match.params.detailId 
  // const logsArray = props.logsArray

  // console.log('[logs_s] route logId is', logId)
  // console.log('[logs_s] retrieved logs are', logsArray)



  return (
    <Wrapper>
<LogMain />
      {/* {logsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed logs</div>
          <div>Create a new log</div>
        </NoneMessage>

      } */}

      {/* {logsArray.length > 0 && !logId &&
        <NoneMessage>
          <div>Choose a log to be displayed</div>
          <div>or</div>
          <div>Create a new log</div>
        </NoneMessage>

      } */}


      {/* {logId && logsArray.length > 0 && <LogsMain />} */}




    </Wrapper>
  )
}

const actions = {
  // changeLastLogDisplayed,  
  // openModal, 
  // closeModal
}

const mapState = state => ({
  // display: state,
  logsArray: selectLogs(state),
  
})

export default connect(mapState, actions)(Logs)
