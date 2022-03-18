/*---- File - calendarHelper.js 
   Takes current calendar month (UTC format)  and 
   creates an array of days for that month.

  child: personalCalendar in sample/personalChits or main/personalChits
*/






const MONTHARRAY_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHARRAY_long = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



export const TestDayArray = [
  {'25': 1029}, {'26': 1029},
  {'27': 1029}, {'28': 1029},
  {'29': 1029}, {'30': 1029},
  

  {'1': 2001},  {'2': 2002}, {'3': 2003}, {'4': 2004}, {'5': 2005},
  {'6': 2006},  {'7': 2007}, {'8': 2029}, {'9': 2029}, {'10': 2029},
  {'11': 2011},  {'12': 2012}, {'13': 2013}, {'14': 2014}, {'15': 2015},
  {'16': 2016},  {'17': 2017}, {'18': 2018}, {'19': 2019}, {'20': 2020},
  {'21': 2021},  {'22': 2022}, {'23': 2023}, {'24': 2024}, {'25': 2025},
  {'26': 2026},  {'27': 2027}, {'28': 2028}, {'29': 2029}, {'30': 2030},
  {'31': 2031},  
  
  {'1': 3001}, {'2': 3002},
  {'3': 3003}, {'4': 3004},
  {'5': 3005}

]


// ====Main Exported Function ===========================================



export const calendarDisplayArray = (utcTime)=>{

  /* func calendarMonthDisplayArray :: 
     Creates an array of 42 objects that
     contain the timestamp and day # for
     each day in a table for any given month
    

    @param  num utcTime  
    @return obj OBJ array:  
    [
      { day: d1, UTC: xxxxx1 , month: 'current'},
      {UTC: xxxxx2 , day: month: 'last'},
      {UTC: xxxxx2 , day: month: 'next'},
      etc
    ]
  }

  1. get human formatted month start
  2. Get the weekday of the first day of the current month
  3. Get total days that are in the current month
  4. Get total days that are in the previous month
  5. Create Display Array

*/

let monthArray =[] // returned array of objects


  // 1. get human formatted month start
    let monthUTCStart = getMonthStartDay(utcTime)
    
  // 2. Get the weekday of the first day of the current month
    let monthStart = new Date(monthUTCStart)
    let first_weekday_current_month = monthStart.getDay()




  // 3. Get total days that are in the current month
   
    let current_month_date_array = monthUTCStart.split(' ') 

    let[month,  day, year] = current_month_date_array

    let days_in_current_month = GetDaysInMonth( month, year)

  // 4. Get total days that are in the previous month

    let previous_monthYear = getPreviousMonth(month, year)

    let days_in_previous_month = GetDaysInMonth(previous_monthYear.previousMonth,   previous_monthYear.previousYear)

  // 5. create array

    // a. Define the month-day shown in cell (1, 1) of display

    let cellOneDay, cellOneMonth, cellOneYear,  cellDate, cellUTCDate, nextMonthEndCell
    let dayObj = {}

    //------------------------------
    // b.  scenario where starting month begins on Saturday (day 0 in array)

    if(first_weekday_current_month === 0){
      cellOneDay = 1
      cellOneMonth = month
      cellOneYear = year
      nextMonthEndCell = 42 - days_in_current_month

      // create display array  starting with current month (starting month begins on Sat)

        for(let i = 1; i <= days_in_current_month; i++ ){
          let displayDay = i.toString()
          cellDate = `${cellOneMonth} ${displayDay} ${cellOneYear}`
          cellUTCDate = DatetoUTC(cellDate)
          
          cellUTCDate = DatetoUTC(cellDate)

          dayObj = {
            day: i,
            utcDate: cellUTCDate,
            month: 'current'
          }

          monthArray.push(dayObj)
    
        }

      for(let j = 1; j <= nextMonthEndCell; j++ ){
            let next_monthYear = getNextMonth(month, year)
            let nextCellMonth = next_monthYear.nextMonth
            let nextCellYear = next_monthYear.nextYear

            cellDate = `${nextCellMonth} ${j} ${nextCellYear}`
            cellUTCDate = DatetoUTC(cellDate)
            
            dayObj = {
              day: j,
              utcDate: cellUTCDate,
              month: 'next'
            }
            monthArray.push(dayObj)

            }


//------------------------------------- IF  (first weekday ofmonth === 0)   
    }else{
//------------------------------------- ELSE   (first weekday ofmonth !== 0)  

    // c.  scenario where starting month begins on any day BUT Saturday

      let previoiusCellOneDay = days_in_previous_month - first_weekday_current_month + 1
      let previousCellMonth = previous_monthYear.previousMonth
      let previousCellYear = previous_monthYear.previousYear
      

      nextMonthEndCell = 42 - days_in_current_month - first_weekday_current_month 

      // create previous months cells for top row of display

      for(let i = previoiusCellOneDay; i <= days_in_previous_month; i++ ){

        cellDate = `${previousCellMonth} ${i} ${previousCellYear}`
        cellUTCDate = DatetoUTC(cellDate)

        dayObj = {
          day: i,
          utcDate: cellUTCDate,
          month: 'previous'
        }
        monthArray.push(dayObj)



      }

      // add the current months cells to monthArray  

      for(let j = 1; j <= days_in_current_month; j++ ){

        cellDate = `${month} ${j} ${year}`
        cellUTCDate = DatetoUTC(cellDate)

        dayObj = {
          day: j,
          utcDate: cellUTCDate,
          month: 'current'
        }
        monthArray.push(dayObj)
  
      
        }

        // complete the monthArray with  the next months cells

        for(let k = 1; k <= nextMonthEndCell; k++ ){
          let next_monthYear = getNextMonth(month, year)
          let nextCellMonth = next_monthYear.nextMonth
          let nextCellYear = next_monthYear.nextYear

          cellDate = `${nextCellMonth} ${k} ${nextCellYear}`
          cellUTCDate = DatetoUTC(cellDate)
          
          dayObj = {
            day: k,
            utcDate: cellUTCDate,
            month: 'next'
          }
          monthArray.push(dayObj)

          }

    }

    // console.log(' [ CalendarHelper ] -  monthArray :  '  , monthArray)

    
  return monthArray

}// end calendarDisplayArray


// =====Component Functions ================================================


 export const getMonthStartDay = (utcTime) =>{
     /* func getMonthStartDay
      gets the day of the week that the current displayed month
      begins on 

      @param  num (miliseconds)
      @return num day ... (0 = Sun, 1 = Mon... 6 = Sat)
  */

  let current_date = new Date(utcTime)
  let current_month_adjusted = current_date.getMonth() + 1 // current month array adjusted
  let current_year = current_date.getFullYear()  // current month array adjusted
  let current_month_start_date = `${current_month_adjusted} 1 ${current_year} `

  return current_month_start_date

}

//---------------------------------

 export const DatetoUTC = (aDate) => {
  /* func DatetoUTC
      converts a date to UTC timestamp 
      at midnight local time of the day 

      @param  str (mm dd yy)
      @return Num month
  */

  let inputDate = new Date(aDate)
  let outputUTC = inputDate.getTime().toString()

  return outputUTC

}

//---------------------------------

export const GetLastDay = (days, month, year) => {
  /* func DatetoUTC
      converts a date to UTC timestamp 
      at midnight local time of the day 

      @param  str (mm dd yy)
      @return Num month
  */

  let inputDate = `${month} ${days}  ${year}`
  

  let outputUTC = DatetoUTC(inputDate)
   
 
 

  return outputUTC

}


//---------------------------------

export const getNextMonth = (strMonth, strYear) => {
  /* func getNextMonth
      if December is the starting month, then January is next
      @param  Num month, year
      @return obj {nextMonth: mm, nextYear: yy}
  */
  let month = parseInt(strMonth, 10)
  let year = parseInt(strYear, 10)
  let next_month, next_year

  if (month === 12) {
    next_month = 1
    next_year = year + 1
 
  }else {
    next_month = month +1 
    next_year = year 
 
  } // end ifelse

  let strNextMonth = next_month.toString()
  let strNextYear = next_year.toString()
 

 
  let nextObj = {'nextMonth': strNextMonth, 'nextYear': strNextYear}
  return nextObj ;

}// end func getNextMonth

//--------------------------------

export const getPreviousMonth  = (strMonth, strYear)  => {
  /* func getPreviousMonth
      if January is the starting month, then December is previous
      @param  Num month, year
      @return obj {previousMonth: mm, previousYear: yy}
  */

  let month = parseInt(strMonth, 10)
  let year = parseInt(strYear, 10)
 
  let previous_month,  previous_year 
  
  if (month > 1) {
    previous_month = month - 1;
    previous_year = year
    
  }else {
    previous_month = 12;
    previous_year = year - 1
    ;

  } // end ifelse

  let strPreviousMonth = previous_month.toString()
  let strPreviousYear = previous_year.toString()

  let previousObj = {'previousMonth': strPreviousMonth, 'previousYear': strPreviousYear}

  return previousObj ;

}// end func getPreviousMonth

//--------------------------

const LeapYear = (strYear)  => {
  /* func LeapYear
      Leap year - every 4 years
      @param  str year
      @return boolean
  */
  let year = parseInt(strYear, 10)

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
} //  end Leap year

//--------------------------

export const GetDaysInMonth = (strMonth, strYear)  => {

  /* func GetDaysInMonht
      Leap year - every 4 years
      @param  str month, year
      @return num days
  */
  let month = parseInt(strMonth, 10)
  let year = parseInt(strYear, 10)




  const MONTHDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 

  let days_in_month;
  let leap_year = LeapYear(year);
 
  if (month === 2 && leap_year === true) {
    days_in_month = 29;
  } else {
    let arrayAdjustedMonth = month -1
    days_in_month = MONTHDAYS[arrayAdjustedMonth];
  } // end ifelse

  return days_in_month;

}//  end DaysInMonth

//---------------------------- 





