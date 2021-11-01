import React, {useState, useEffect, useRef, Fragment} from 'react'
import {connect} from 'react-redux'
import {startingElapsedTime} from '../../../../app/helpers/timerHelpers'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, msToStringDisplay, convertElapsedTime} from '../../../../app/helpers/dateHelper'


// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"



const theme = createMuiTheme(); // allows use of mui theme in styled component



//---------TASK Display STYLING ---------------------------------

const TaskTimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
 
  
// backgroundColor: 'white',
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


// -----formating display

const DetailRowRemaining= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitOrange,
 

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowElapsed= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: mediumGrey,
 

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowCompleted= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitOrange,
 

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '6rem',

  // backgroundColor: 'aqua',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // backgroundColor: 'green',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==========================
function TimeComparator(props) {

  let spotlightId = 'spot_1'
  let spotlightStatus = props.display.private.data.spotlightData.spotlights[spotlightId].spotlightStatus
// let {spotlightId, taskId}  = props

  let timeStart = props.display.private.data.spotlightData.spotlights[spotlightId].timeStamp
  let timeEndEst = props.display.private.data.spotlightData.spotlights[spotlightId].endEst
  
  let completedTimeStamp = props.display.private.data.spotlightData.spotlights[spotlightId].completedTimeStamp
  
  // console.log('[COUNTDOWN DISPLAY] props. spotlightId - ' , props.spotlightId)
  // console.log('[COUNTDOWN DISPLAY] props. spotlightId - ' , props.spotlightId)


  // let timerData = props.display.private.data.spotlightData.spotlights[spotlightId].tasks[taskId].clock
  // let {spotlightStatus, accumulatedTime, lastDate }  = timerData


  // set intial state
  const [timerRemainingWeeks, setTimerRemainingWeeks] = useState('0')
  const [timerRemainingDays, setTimerRemainingDays] = useState('00')
  const [timerRemainingHours, setTimerRemainingHours] = useState('00')
  const [timerRemainingMinutes, setTimerRemainingMinutes] = useState('00')
  const [timerRemainingSeconds, setTimerRemainingSeconds] = useState('00')

  const [timerElapsedWeeks, setTimerElapsedWeeks] = useState('0')
  const [timerElapsedDays, setTimerElapsedDays] = useState('00')
  const [timerElapsedHours, setTimerElapsedHours] = useState('00')
  const [timerElapsedMinutes, setTimerElapsedMinutes] = useState('00')
  const [timerElapsedSeconds, setTimerElapsedSeconds] = useState('00')

  const [status, setStatus] = useState(spotlightStatus)


  let interval = useRef()
  let startTimerRunningBegun = useRef()
  let startTimerRunningInactive = useRef()
  let timerCompleted = useRef()

  let startTimerStopped = useRef()





    

  // startTimerStopped.current = () => {

  //   /*  
  //    shows frozen accumulated time
  //    derived from Redux task.clock.accumulatedTime
  //   */ 

  //   let displayRemainingTime = msToStringDisplay(accumulatedTime)
  //   let {days, hours, minutes, seconds} = displayRemainingTime

  //     setTimerRemainingDays(days)
  //     setTimerRemainingHours(hours)
  //     setTimerRemainingMinutes(minutes)
  //     setTimerRemainingSeconds(seconds)
    
  // }

  startTimerRunningBegun.current = () => {
  /*  
     shows running time 
     calculated:  current (date-time) - (lastDate)
  */ 
 
    
 

    
    interval = setInterval(() => {
      // const now = new Date().getTime()
      // const  distance =  timeStart - now 
      
      // let displayRemainingTime = msToStringDisplay(distance)
      // let {weeks, days, hours, minutes, seconds} = displayRemainingTime

      const now = new Date().getTime()


      const  remainingDistance =  new Date(timeEndEst).getTime() - now 
      
      let displayRemainingTime = msToStringDisplay(remainingDistance)
      

        setTimerRemainingWeeks(displayRemainingTime.weeks)
        setTimerRemainingDays(displayRemainingTime.days)
        setTimerRemainingHours(displayRemainingTime.hours)
        setTimerRemainingMinutes(displayRemainingTime.minutes)
        setTimerRemainingSeconds(displayRemainingTime.seconds)
 
      const  elapsedDistance =  now - new Date(timeStart).getTime() 
      let displayElapsedTime = msToStringDisplay(elapsedDistance)
      

        setTimerElapsedDays(displayElapsedTime.weeks)
        setTimerElapsedDays(displayElapsedTime.days)
        setTimerElapsedHours(displayElapsedTime.hours)
        setTimerElapsedMinutes(displayElapsedTime.minutes)
        setTimerElapsedSeconds(displayElapsedTime.seconds)
    }, 1000)

  }

  startTimerRunningInactive.current = () => {
    /*  
       shows running time 
       calculated:  current (date-time) - (lastDate)
    */ 
   
      
   
  
      
      interval = setInterval(() => {
        // const now = new Date().getTime()
        // const  distance =  timeStart - now 
        
        // let displayRemainingTime = msToStringDisplay(distance)
        // let {weeks, days, hours, minutes, seconds} = displayRemainingTime
  
        const now = new Date().getTime()
  
  
        const  remainingDistance =  new Date(timeEndEst).getTime() - now 
        
        let displayRemainingTime = msToStringDisplay(remainingDistance)
        
  
          setTimerRemainingWeeks(displayRemainingTime.weeks)
          setTimerRemainingDays(displayRemainingTime.days)
          setTimerRemainingHours(displayRemainingTime.hours)
          setTimerRemainingMinutes(displayRemainingTime.minutes)
          setTimerRemainingSeconds(displayRemainingTime.seconds)
   
        
      }, 1000)
  
    }

    
    timerCompleted.current = () => {
    /*  
       shows running time 
       calculated:  current (date-time) - (lastDate)
    */ 
   
      
   
  
      
     
  
        const timeCompleted = new Date().getTime(completedTimeStamp)
        const timeStarted = new Date().getTime(timeStart)
  
        const  remainingDistance =  timeCompleted - timeStarted 
        
        let displayRemainingTime = msToStringDisplay(remainingDistance)
        
  
          setTimerRemainingWeeks(displayRemainingTime.weeks)
          setTimerRemainingDays(displayRemainingTime.days)
          setTimerRemainingHours(displayRemainingTime.hours)
          setTimerRemainingMinutes(displayRemainingTime.minutes)
          setTimerRemainingSeconds(displayRemainingTime.seconds)
   

  
    }

  useEffect(()=>{

    setStatus(spotlightStatus)
    console.log('[COUNTDOWN DISPLAY status - ', status )

      if(status === 'begun' ){
        startTimerRunningBegun.current()
      return  ()=> {clearInterval(interval)}
      }

      if(status === 'inactive' ){
        startTimerRunningInactive.current()
      return  ()=> {clearInterval(interval)}
      }

      if(status === 'completed' ){
        timerCompleted.current()
       
      }
      



    
  //   if(status === 'running'){
  //     startTimerRunningBegun.current()
  //     return  ()=> {clearInterval(interval)}
  //   }else{
  //     startTimerStopped.current()
  //   }
  }, [startTimerRunningBegun, status,spotlightStatus]) 



  // []-----------------------------------------------
  return (
    <Fragment> 


{/* +++++++++++++ SPTOLIGHT STATUS = INACTIVE +++++++++++++++++++++++ */}

    {spotlightStatus === 'begun' && 
    
      <TaskTimeWrapper>



      {/* --------REMAINING TIME ------------------------------- */}

        <DetailRowRemaining>
          <DetailRowLeft>Remaining</DetailRowLeft>
 
          <DetailRowRight> 
          
          <TaskTimeRow> 
 
          {timerRemainingWeeks > 0 &&  
            <TaskTimeComponent>
              {/* <TaskTime>3</TaskTime> */}
              <TaskTime>{timerRemainingWeeks}</TaskTime>
          

              <TaskTimeLabel>wks :</TaskTimeLabel>
            </TaskTimeComponent>
          }
            <TaskTimeComponent>
              {/* <TaskTime>5</TaskTime> */}
              <TaskTime>{timerRemainingDays}</TaskTime>

              <TaskTimeLabel>days :</TaskTimeLabel>
            </TaskTimeComponent>



            <TaskTimeComponent>
              {/* <TaskTime>14</TaskTime> */}
              <TaskTime>{timerRemainingHours}</TaskTime>

              <TaskTimeLabel>hrs :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>37</TaskTime> */}
              <TaskTime>{timerRemainingMinutes}</TaskTime>

              <TaskTimeLabel>mins :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>41</TaskTime> */}
              <TaskTime>{timerRemainingSeconds}</TaskTime>

              <TaskTimeLabel>secs</TaskTimeLabel>

            </TaskTimeComponent>
            </TaskTimeRow>
          
          </DetailRowRight>
          
          
        </DetailRowRemaining>  
    
    
              </TaskTimeWrapper>
      }
      {/* END spotlight status = begun */}


{/* +++++++++++++ SPTOLIGHT STATUS = INACTIVE +++++++++++++++++++++++ */}

  {spotlightStatus === 'inactive' && 
    <TaskTimeWrapper>

  {/* --------REMAINING TIME ------------------------------- */}

        <DetailRowRemaining>
          <DetailRowLeft>Remaining</DetailRowLeft>
 
          <DetailRowRight> 
          
          <TaskTimeRow> 
 
          {timerRemainingWeeks > 0 &&  
            <TaskTimeComponent>
              {/* <TaskTime>3</TaskTime> */}
              <TaskTime>{timerRemainingWeeks}</TaskTime>
          

              <TaskTimeLabel>wks :</TaskTimeLabel>
            </TaskTimeComponent>
          }
            <TaskTimeComponent>
              {/* <TaskTime>5</TaskTime> */}
              <TaskTime>{timerRemainingDays}</TaskTime>

              <TaskTimeLabel>days :</TaskTimeLabel>
            </TaskTimeComponent>



            <TaskTimeComponent>
              {/* <TaskTime>14</TaskTime> */}
              <TaskTime>{timerRemainingHours}</TaskTime>

              <TaskTimeLabel>hrs :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>37</TaskTime> */}
              <TaskTime>{timerRemainingMinutes}</TaskTime>

              <TaskTimeLabel>mins :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>41</TaskTime> */}
              <TaskTime>{timerRemainingSeconds}</TaskTime>

              <TaskTimeLabel>secs</TaskTimeLabel>

            </TaskTimeComponent>
            </TaskTimeRow>
          
          </DetailRowRight>
          
          
        </DetailRowRemaining>

    
    
    
    
              </TaskTimeWrapper>
      }


{spotlightStatus === 'completed' && 
    <TaskTimeWrapper>

  {/* --------Completed TIME ------------------------------- */}

        <DetailRowCompleted>
          <DetailRowLeft>Remaining Time</DetailRowLeft>
 
          <DetailRowRight> 
          
          <TaskTimeRow> 
 
          {timerRemainingWeeks > 0 &&  
            <TaskTimeComponent>
              {/* <TaskTime>3</TaskTime> */}
              <TaskTime>{timerRemainingWeeks}</TaskTime>
          

              <TaskTimeLabel>wks :</TaskTimeLabel>
            </TaskTimeComponent>
          }
            <TaskTimeComponent>
              {/* <TaskTime>5</TaskTime> */}
              <TaskTime>{timerRemainingDays}</TaskTime>

              <TaskTimeLabel>days :</TaskTimeLabel>
            </TaskTimeComponent>



            <TaskTimeComponent>
              {/* <TaskTime>14</TaskTime> */}
              <TaskTime>{timerRemainingHours}</TaskTime>

              <TaskTimeLabel>hrs :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>37</TaskTime> */}
              <TaskTime>{timerRemainingMinutes}</TaskTime>

              <TaskTimeLabel>mins :</TaskTimeLabel>

            </TaskTimeComponent>

            <TaskTimeComponent>
              {/* <TaskTime>41</TaskTime> */}
              <TaskTime>{timerRemainingSeconds}</TaskTime>

              <TaskTimeLabel>secs</TaskTimeLabel>

            </TaskTimeComponent>
            </TaskTimeRow>
          
          </DetailRowRight>
          
          
        </DetailRowCompleted>

    
    
    
    
              </TaskTimeWrapper>
      }

              </Fragment>
  )
}// end TaskTimerDisplay

 

const mapState = state => ({
  display: state
})

export default connect(mapState)(TimeComparator)

