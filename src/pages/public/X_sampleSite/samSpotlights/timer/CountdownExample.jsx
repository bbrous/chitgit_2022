
//  From   react countdown timer with hooks
//  https://www.youtube.com/watch?v=ZVOGPvo08zM


import React, {useState, useEffect, useRef} from 'react'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, convertMS, convertElapsedTime} from '../../../../app/helpers/dateHelper'

// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"



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

const TimeRowDays= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 
  


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
  flexDirection: 'row',
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
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ==================================
function TimerDisplay() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')



  let interval = useRef()

  const startTimer = () => {

    const countdownDate = new Date('November 20, 2020 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const  distance = countdownDate - now

      const days = Math.floor(distance /  ( 1000 * 60 * 60 * 24) )
      const hours = Math.floor((distance % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) ) )
      const minutes = Math.floor((distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) )
      const seconds = Math.floor((distance % ( 1000 * 60 ) / ( 1000) ) )

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current)
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000)

  }

  useEffect(()=>{
    startTimer()
    return  clearInterval(interval.current)
  })

  // ------
  return (
    <TimeWrapper>








    <TimeRowDays>
    
      <TimeComponent>
        <Time>{timerDays}</Time>
        <TimeLabel>days</TimeLabel>
      </TimeComponent>
    </TimeRowDays>

    <TimeRow>

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
}

export default TimerDisplay
