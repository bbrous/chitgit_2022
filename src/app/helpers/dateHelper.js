//dateHelper.js   IN CHIT-A-BIT


// --- Sample Site Example Current DateNow - 14 Mar 2021 8:30 AM local

export const sample_CurrentTimeStamp = 1615725000000  // 14 Mar 2021 8:30 AM local
export const sample_CurrentDateTime =  "2021-03-14T08:30:00.000Z" 

export function futureSampleTime(sample_CurrentTimeStamp) {

   // 2 --- create a random number of milliseconds
   function randomSeconds(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

  }
  
  let newCurrentTime = sample_CurrentTimeStamp + randomSeconds(1, 1000)
  console.log(' RANDOM TIME  INITIAL in func futureSampleTime----------- ', newCurrentTime)
  return newCurrentTime
}


// ---------------------------------------------------------------

export function convertMS( milliseconds ) {

  // from Remino / msconvert.js
  
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
  };
}


export function msToStringDisplay( milliseconds ) {

  // same as convertMs
  const weeks = Math.floor(milliseconds /  ( 1000 * 60 * 60 * 24 * 7) )
  const days = Math.floor(milliseconds %  ( 1000 * 60 * 60 * 24 * 7) / ( 1000 * 60 * 60 * 24) )
  const hours = Math.floor((milliseconds % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) ) )
  const minutes = Math.floor((milliseconds % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) )
  const seconds = Math.floor((milliseconds % ( 1000 * 60 ) / ( 1000) ) )

  return {
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
}

export function convertElapsedTime(milliseconds){

  const dayMS = 86400000 // ms in a day
  const hourMS = 3600000
  const minuteMS = 60000

  let days, hours, minutes, seconds
  let remainingTime = milliseconds
      
  days = Math.floor(remainingTime/dayMS)
  remainingTime = remainingTime % dayMS

  // console.log('DATE HELPER Remainingtime  - 1: ', remainingTime)
  //     console.log('DATE HELPER convertElapsedTime - days: ', days)

 

  hours = Math.floor(remainingTime / hourMS)
  remainingTime = remainingTime % hourMS
  // console.log('DATE HELPER Remainingtime  - 2: ', remainingTime)
  // console.log('DATE HELPER convertElapsedTime - hours: ', hours)

  minutes = Math.floor(remainingTime / minuteMS)
  remainingTime = remainingTime % minuteMS

  // console.log('DATE HELPER Remainingtime  - 3: ', remainingTime)
  // console.log('DATE HELPER convertElapsedTime - minutes: ', minutes)

  seconds = Math.floor(remainingTime / 1000)

  // console.log('DATE HELPER convertElapsedTime - days: ', days)
  // console.log('DATE HELPER convertElapsedTime - hours: ', hours)
  // console.log('DATE HELPER convertElapsedTime - minutes: ', minutes)
  // console.log('DATE HELPER convertElapsedTime - seconds: ', seconds)
  // console.log(' -------------------------------- ')
  return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
}











// ####  JOURNAL SPECIFIC  HELPERS ADDED HERE  ###################
// ###############################################################
// #### Below are existent Chit Git Helpers ######################



export const monthArray = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
  ]

export const monthArrayLong = [
  'January','February','March','April','May','June','July','August','September','October','November','December',
  ]

export function UTCtoDate(milSeconds){


  let year = new Date(milSeconds).getFullYear()
  let monthNumeric = new Date(milSeconds).getMonth()
  let month = monthArray[monthNumeric]
  let day = new Date(milSeconds).getDate()


  let dateReconstituted = day + ' ' + month + ', ' + year

 

  return dateReconstituted
  }

  export function UTCtoDateTradional(milSeconds){


    let year = new Date(milSeconds).getFullYear()
    let monthNumeric = new Date(milSeconds).getMonth()
    let month = monthArray[monthNumeric]
    let day = new Date(milSeconds).getDate()
  
  
    let dateReconstituted =  month + ' ' +   day+ ', ' + year
  
   
  
    return dateReconstituted
    }


// convert a dateFormat to UTC Epoch milliseconds
// input format is:  '27 April 2019'

export function DatetoUTC(aDate){


  let inputDate = new Date(aDate)
  let outputUTC = inputDate.getTime();

  return outputUTC

}

// convert a milliseconds ISO string
// input format is:  1446305803000
// output "2015-10-31T16:35:38.000Z"

export function msToISO(milSeconds){


  let ISOouput = new Date(milSeconds).toISOString()

  return ISOouput

}


export function unformattedUTCtoDate(milSeconds){
  /* func unformattedUTCtoDate
      converts a  UTC timestamp 
      to human readable date

      @param  num (milliseconds)
      @return str (mm dd yy)
  */

  let year = new Date(milSeconds).getFullYear()
  let monthNumeric = new Date(milSeconds).getMonth() + 1
   
  let day = new Date(milSeconds).getDate()


  let dateReconstituted =  monthNumeric + '/' +   day + ' - ' + year

 

  return dateReconstituted
  }

  export function calculateEstimatedTime(wks, days, hrs, mins) {
          const weekMS = 86400000  * 7 
          const dayMS = 86400000 // ms in a day
          const hourMS = 3600000
          const minuteMS = 60000

          let calculatedMs = (wks * weekMS) + (days * dayMS) +(hrs * 3600000) + (mins * minuteMS)

          return calculatedMs
  }





