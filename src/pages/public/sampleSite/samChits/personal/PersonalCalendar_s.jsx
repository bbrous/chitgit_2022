/* function PersonalLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey, mediumGrey} from '../../../../../styles/colors'
import { calendarDisplayArray } from '../../../../../app/helpers/calendarHelper';

import MonthNav from './MonthNav_s';
import PersonalCalendarDay from './PersonalCalendarDay_s';

import { choosePersonalCoin } from '../../../../../app/helpers/chitHelpers';
 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

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

// =============================================

export default function PersonalCalendar(props) {

  const dispatch = useDispatch()
  
 // get the src address for the img display the chit to show              
//  let coinAddress = choosePersonalCoin(chitType)    
 
//  const pathToCoinImages = '../../'
//   const coinDisplayed = pathToCoinImages + coinAddress

// ############### TEMP #############################


  // get current month of view from Redux store
  // create the array of days for that calendar month

  let currentUTCMonth = 1615711313000  // Mar 14, 2021
  let currentISOMonth = '2021-03-14T08:41:53.000Z'
  // let currentUTCMonth = props.monthView.monthFilter.utc


  let monthArray =  calendarDisplayArray(currentUTCMonth) 

//###########################################

// create the calendar - map through the month

const displayDays =monthArray.map((displayDay, index) => {

 return(
   <PersonalCalendarDay
   key = {index}
   refIndex = {index}
      id = {displayDay.utcDate}
      day = {displayDay.day}
      month = {displayDay.month}
      utcDate = {displayDay.utcDate}
      // displayChits = {displayChits}
            displayChits = {[]}

   
   
   />
 )
  
  })// end displayChits



  return (
    <Wrapper>
 
    <MonthNav/>

    <>
    
    
    <HeaderRowWrapper>
          <HeaderDayWrapper>Sun</HeaderDayWrapper>
          <HeaderDayWrapper>Mon</HeaderDayWrapper>
          <HeaderDayWrapper>Tue</HeaderDayWrapper>
          <HeaderDayWrapper>Wed</HeaderDayWrapper>
          <HeaderDayWrapper>Thu</HeaderDayWrapper>
          <HeaderDayWrapper>Fri</HeaderDayWrapper>
          <HeaderDayWrapper>Sat</HeaderDayWrapper>
      </HeaderRowWrapper>

      <MonthWrap>

      {displayDays}
      </MonthWrap>
    
    
    </>
     
   
      
    </Wrapper>
  );
}

