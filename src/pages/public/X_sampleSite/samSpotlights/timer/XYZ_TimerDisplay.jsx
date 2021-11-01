import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {startingElapsedTime} from '../../../../app/helpers/timerHelpers'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, msToStringDisplay, convertElapsedTime} from '../../../../app/helpers/dateHelper'


// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"

/* ###################################################
############# WARNING SOLUTION _____ ##########################


https://medium.com/@shanplourde/avoid-react-state-update-warnings-on-unmounted-components-bcecf054e953

Move up the component tree

#####################################################   */

const theme = createMuiTheme(); // allows use of mui theme in styled component



// ------------------
const TimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '4px',
  color: darkGrey,
backgroundColor: 'white',
  borderRadius: '3px',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TimeRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TimeComponent= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '30%',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const Time= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  fontSize: '.85rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeLabel= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.65rem',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

//---------TASK Display STYLING ---------------------------------

const TaskTimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 
  
backgroundColor: 'white',
  borderRadius: '3px',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskTimeRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TaskTimeStatus= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginRight: '.5rem',
  color: 'green ',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
 
const TaskTimeComponent= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
 


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TaskTime= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskTimeLabel= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 5px 0 1px',
  fontStyle: ' italic',
  
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==================================
 function TimerDisplay(props) {
  let {spotlightId, taskId, timerData }  = props
  let {timerStatus, accumulatedTime, lastDate }  = timerData

  console.log('[Timer DISPLAY] timerStatus for : ', timerData )



  const [timerDays, setTimerDays] = useState('00')
 const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [status, setStatus] = useState(timerStatus)


  let interval = useRef()
  let startTimerRunning = useRef()
  let startTimerStopped = useRef()

  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }


  startTimerStopped.current = () => {
    let displayTime = msToStringDisplay(accumulatedTime)
    let {days, hours, minutes, seconds} = displayTime


      setTimerDays(days)
      setTimerHours(addZeroBefore(hours))
      setTimerMinutes(addZeroBefore(minutes))
      setTimerSeconds(addZeroBefore(seconds))
    
  }

  startTimerRunning.current = () => {

    const countdownDate = new Date( "2020-12-14T04:46:20.619Z").getTime()
    // const startTime = new Date().getTime() - 5566000
    
    // const startTime = 1602946470000
    const elapsedTime  = startingElapsedTime(timerStatus, accumulatedTime, lastDate)
    const startTime = new Date().getTime() - elapsedTime
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  
    console.log('[000 000 TimerDisplay] SPOTLIGHT ID  is : ', startTime )
    // console.log('[TimerDisplay] taskId is : ', taskId )
    // console.log('[TimerDisplay] timerData is : ', timerData )
  
  
    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

    
    interval = setInterval(() => {
      const now = new Date().getTime()
      const  distance = now - startTime 
      
      let displayTime = msToStringDisplay(distance)
      let {days, hours, minutes, seconds} = displayTime


        setTimerDays(days)
        setTimerHours(addZeroBefore(hours))
        setTimerMinutes(addZeroBefore(minutes))
        setTimerSeconds(addZeroBefore(seconds))
 

    }, 1000)

  }

  useEffect(()=>{

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    setStatus(timerStatus)


    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    
    if(status === 'running'){
    startTimerRunning.current()
    return  ()=> {clearInterval(interval)}
    }else{
      startTimerStopped.current()
    }
  }, [startTimerRunning, status,timerStatus]) 


 


  // ------
  return (
    <TimeWrapper>


     
    <TimeRow> 
      <TimeComponent>
        <Time>{timerDays}</Time>
        <TimeLabel>days</TimeLabel>
      </TimeComponent>
 

    
      <TimeComponent>
        <Time>{timerHours}</Time>
        <TimeLabel>hrs</TimeLabel>

      </TimeComponent>

      <TimeComponent>
        <Time>{timerMinutes}</Time>
        <TimeLabel>min</TimeLabel>

      </TimeComponent>

      <TimeComponent>
        <Time>{timerSeconds}</Time>
        <TimeLabel>secs</TimeLabel>
    
      </TimeComponent>
    </TimeRow>
    
    
    
    
              </TimeWrapper>
  )
}// end PopupTimerDisplay



const mapState = state => ({
  display: state
})

export default connect(mapState)(TimerDisplay)


