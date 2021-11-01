import React, {Fragment, useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import{changeTimerStatus} from '../../../../app/redux/actions/mainActions'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, } from '../../../../styles/colors'


import PopupTimerDisplay from './PopupTimerDisplay'
 
// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"

import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RefreshIcon from '@material-ui/icons/Refresh';

// ---------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

// ------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  backgroundColor: mediumGrey,
  padding: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ControlsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4px',
  backgroundColor: 'white',
  borderRadius: '3px',
  width: '100%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ------------------------

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1rem',
  margin: '0 .75rem .3rem 0',
 cursor: 'pointer',
   

 '&:hover': {
  color: mediumLightGrey
},



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledPopover= styled('div')({
  backgroundColor: mediumGrey,
  borderRadius: '5px',
  border: '1px solid lightgrey',
  
  fontSize: '.8rem',
  color: 'white',
 
  cursor: 'pointer',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledButton= styled(Button)({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  height: '1rem',
  fontSize: '.8rem',
  verticalAlign: 'middle',
  backgroundColor: 'orange',
  textTransform: 'none',
  cursor: 'pointer',
  padding: '8px 5px 6px 5px',
  margin: '3px',
  '&:hover' : {
    backgroundColor: chitOrange,
    color: 'white'
  },
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CompletedTask= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  color: chitOrange,
  padding: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// ===========================================
const TimerPopup = (props) => {

  let {spotlightId, taskId,  handleUpdateTimerStatus}  = props

  let timerData = props.display.private.data.spotlightData.spotlights[spotlightId].tasks[taskId].clock
  const {timerStatus, accumulatedTime, lastDate} = timerData
 
  // console.log('[TimerPopup] clock Data is is  is : ', timerData )







  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openTimerWindow = (event, taskId) => {
    setAnchorEl(event.currentTarget);
    // console.log('[TimerPopup] id is : ', event.currentTarget.id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // --- timer controls-------------------------



  const [clockStatus, setClockStatus] = useState(timerStatus)
  const [timeStart, setTimeStart] = useState(accumulatedTime)
  // const countRef = useRef(null)

  // console.log(' ||||||||||||||||||||||||||||||||||||||||||||||| '  )

  //  console.log('[TimerPopup] timerStatus for : ', clockStatus )

  //  console.log('[TimerPopup] accumulatedTime for : ', timeStart )

  
  //  console.log('[TimerPopup] lastDate for : ', lastDate )

  // console.log('[TimerPopup] timerData is : ', timerData )


  // console.log('[TimerPopup] SPOTLIGHT ID  is : ', spotlightId )
  // console.log('[TimerPopup] taskId is : ', taskId )
  // console.log('[TimerPopup] taskId is : ', taskData )

  // console.log('[TimerPopup] task detail is : ', taskData.spotlights[spotlightId].tasks[taskId].clock )

  // console.log(' ||||||||||||||||||||||||||||||||||||||||||||||| '  )

  useEffect(()=>{

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    setClockStatus(timerStatus)

    console.log(' useEffect Timer Status '  , timerStatus)

 


    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


  
  }, [ timerStatus]) 





// %%%%%%%%%%%%  TEMP  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // const clockStatus = timerStatus  // inactive, running, paused
// %%%%%%%%%%%%  TEMP  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 


// ---- main TimerPopup return JSX  -----------------------------
  return (
    <Fragment>
      <ClockIcon 
        id = {taskId}
        aria-describedby={id} 
        variant="contained" 
        color="primary" 
        onClick={(evt)=>openTimerWindow(evt)}/>
        
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <StyledPopover 
        // onClick = {()=> handleClose()}

        >

        
        <Wrapper>

        <PopupTimerDisplay
      
          spotlightId  = {spotlightId}
          taskId = {taskId} 
        />
        

          <ControlsWrapper>
            {clockStatus === 'inactive'  &&  
            <StyledButton
              variant="contained"
              id = 'start'
              onClick={(evt)=>handleUpdateTimerStatus(evt)}
               
              endIcon={<PlayArrowIcon />}
            >
                Start
            </StyledButton>
          }
            {clockStatus === 'running'  &&  
            <StyledButton
            variant="contained"
             id = 'paused'
             onClick={(evt)=>handleUpdateTimerStatus(evt)}
            endIcon={<PauseIcon />}
          >
              Pause
          </StyledButton>
            
            
            }
            {clockStatus === 'paused'  &&  
            <StyledButton
            variant="contained"
             id = 'resume'
             onClick={(evt)=>handleUpdateTimerStatus(evt)}
            endIcon={<PlayArrowIcon />}
          >
              Resume
          </StyledButton> 
            
            }

{clockStatus !== 'completed'  &&         
            <StyledButton
            variant="contained"
             id = 'reset'
             onClick={(evt)=>handleUpdateTimerStatus(evt)}
            //  fontSize = 'large'
            endIcon={<RefreshIcon />}
          >

            
              Reset
          </StyledButton> 
            
          }          
            
            {clockStatus === 'completed'  &&         
         
             <CompletedTask>Task Completed</CompletedTask>
            
          }        
            
          </ControlsWrapper>



        </Wrapper>
        </StyledPopover>
      </Popover>
    </Fragment>
  );

      }
 

const actions = {
  // changeDisplaySpotlight,
  // openCloseSidePanel
  changeTimerStatus
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(TimerPopup)
