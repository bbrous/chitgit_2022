//Timer Helpers

import {DatetoUTC} from './dateHelper'


 

// export function DatetoUTC(aDate){


//   let inputDate = new Date(aDate)
//   let outputUTC = inputDate.getTime();

//   return outputUTC

// }

export function startingElapsedTime(timerStatus, accumulatedTime, lastDate){

  let startTime
  let closedWindowTime

  if(timerStatus === 'running'){


    if(lastDate !== null){
     closedWindowTime = new Date().getTime() - new Date(lastDate).getTime()
    }else{
       closedWindowTime = 0 
    }
    // let closedWindowTime = new Date().getTime() -1602997683000
    // let currentTime = new Date().getTime()
    startTime = accumulatedTime + closedWindowTime




    // startTime = accumulatedTime
  // console.log('calculateStartingElapsedTime ----got me too ')
  // console.log('[TimerPopup] timerStatus for : ', timerStatus )
  // console.log('[TimerPopup] accumulatedTime for : ', accumulatedTime )
  // console.log('[TimerPopup] lastDate for : ', lastDate )

  // console.log('[TimerPopup] closedWindowTime for : ', closedWindowTime )
  // console.log('[TimerPopup] currentTime for : ', currentTime )
  console.log('[TimerPopup] startTime for : ', startTime )

  }else{

    startTime = accumulatedTime
  }

    return startTime
}


