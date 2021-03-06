/* function PersonalLedger (props) -------------------

  1. get all personal chits (personalChit array)
  2a. get calendar month to display
  2b. get the array of days for that calendar month

  3. map calendar month by day
     4. see if there is a chit for that day (filter personalChit array)
     5a. if yes chit exists - display PersonalChit
     5b. if no chit exists - display QuickChit form

  special note: 
      - all dates in calendarHelper require and use miliseconds (UTc) 
      - Redux store status.calendarMonthDisplay.UTC is in miliseconds
      - all chits Redux store and database are in  ISO dates
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
 

import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import {veryLightGrey, mediumGrey} from '../../../../../styles/colors'
import { calendarDisplayArray } from '../../../../../app/helpers/calendarHelper';
import { ISOtoUTC, UTCtoISO, UTCtoDateTradional } from '../../../../../app/helpers/dateHelper';


import MonthNav from './MonthNav_s';
import PersonalChit from './PersonalChit_s';
import QuickPersonalChitForm from '../../samForms/QuickPersonalChitForm';



import { choosePersonalCoin, personalChitFilter } from '../../../../../app/helpers/chitHelpers';
import { selectAllPersonalChits } from '../../../../../app/redux/personalChitRedux/sam_personalChitSlice';
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component



// =============================================

export default function PersonalCalendar(props) {
  let match = useParams()
  let id = match.id // get URL view location
  const dispatch = useDispatch()

  // --- 1. get all  chits for a category -----

  let allChitsArray = useSelector(selectAllPersonalChits)
 
   
  // console.log('[PersonalCalendar] personalChitArray ', allChitsArray);
  
  let personalChitArray  = personalChitFilter(allChitsArray, id)
console.log('[ PersonalCalendar ] personalChitArray ', personalChitArray);

  // --- 2a. get calendar month to display
  let currentUTCMonth = useSelector(selectStatus).calendarMonthDisplay.utc

  let todayUTC = 1615711313000  // Mar 14, 2021
  // let todayISO = '2021-03-14T08:41:53.000Z'

  let today = UTCtoDateTradional(todayUTC)

  
  // let currentUTCMonth = props.monthView.monthFilter.utc

  // --- 2b. get the array of days for that calendar month
  let monthArray =  calendarDisplayArray(currentUTCMonth) 

//###########################################

// --- 3. create the calendar - map through the month -----

  const displayDays = monthArray.map((displayDay, index) => {

    // determine if there is a chit for that day

    const displayChits =personalChitArray.filter((chit) => {

    // get begin and start time for each day in map
      let chitBeginTime = parseInt(displayDay.utcDate)
      let chitEndTime = parseInt(displayDay.utcDate) + 86400000 - 1

    // convert chitDate from ISO to UTC

      let chitDateUTC = ISOtoUTC(chit.chitDate)
    
        return (

          chitDateUTC >= chitBeginTime  &&
          chitDateUTC <= chitEndTime
        )
    
    })// end displayChits

 
    // --- define current day and future day
    // --- used to highlight today ... and not show quick form icons
    // ---                     for any day in the future
  
    let displayDayMMDDYY = UTCtoDateTradional(parseInt(displayDay.utcDate))
    let todayMMDDYY = UTCtoDateTradional(today)

    let isToday
    displayDayMMDDYY === todayMMDDYY ? isToday = true : isToday = false
    let futureDay
    parseInt(displayDay.utcDate) > todayUTC ? futureDay = true : futureDay = false


    return (

      <DayWrapper key={index}>
        {displayChits.length > 0 &&

          <PersonalChit
            
            refIndex= {index}
            id={displayDay.utcDate}
            day={displayDay.day}
            month={displayDay.month}
            utcDate={displayDay.utcDate}
            displayChit={displayChits}
            isToday = {isToday}

          />

        }
        {!displayChits.length &&

          <QuickPersonalChitForm
            
            refIndex= {index}
            id={displayDay.utcDate}
            day={displayDay.day}
            month={displayDay.month}
            utcDate={displayDay.utcDate}
            isToday = {isToday}
            futureDay = {futureDay}
            categoryId = {id}
          />

        }
      </DayWrapper>
    )

  })// end displayDays


// === MAIN RETURN ==============================
  return (
    <Wrapper>
 
    <MonthNav/>

    <>
    
    
    <HeaderRowWrapper>
          <HeaderDayWrapper >Sun</HeaderDayWrapper>
          <HeaderDayWrapper >Mon</HeaderDayWrapper>
          <HeaderDayWrapper >Tue</HeaderDayWrapper>
          <HeaderDayWrapper >Wed</HeaderDayWrapper>
          <HeaderDayWrapper >Thu</HeaderDayWrapper>
          <HeaderDayWrapper >Fri</HeaderDayWrapper>
          <HeaderDayWrapper >Sat</HeaderDayWrapper>
      </HeaderRowWrapper>

      <MonthWrap>

      {displayDays}
      </MonthWrap>
    
    
    </>
     
   
      
    </Wrapper>
  );
}

// -----------------------------------------------------------------


const Wrapper= styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '90%',
  height: '100%',
overflow: 'auto',
marginBottom: '25px',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const HeaderRowWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '1.2rem',
  fontSize: '.8rem',
  backgroundColor: veryLightGrey,
  
  marginBottom: '5px',

})



  const HeaderDayWrapper= styled('div')({
 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.8rem',
    backgroundColor: mediumGrey,
    color: 'white',
    width: '14%',
    borderTop: '1px solid #E6E7E8',
    borderBottom: '1px solid #E6E7E8',
    borderLeft: '1px solid #E6E7E8',
    borderRight: '1px solid #E6E7E8',
 
  })


  
  
  const MonthWrap= styled('div')({
    flexWrap: 'wrap' ,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  
    fontSize: '.8rem',
    backgroundColor: '#E6E7E8',

  })

  const DayWrapper= styled('div')({
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
 
    width: '14%',
  
  
  })