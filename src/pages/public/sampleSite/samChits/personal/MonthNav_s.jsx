import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {veryLightGrey, chitOrangeLight, chitBlueDull} from '../../../../../styles/colors'

import { getPreviousMonth, getNextMonth } from '../../../../../app/helpers/calendarHelper';

import { DatetoUTC,unformattedUTCtoDate,  monthArrayLong } from '../../../../../app/helpers/dateHelper';

 
import { changeMonthView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';
// --- MUI ---
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  height: '100%',

 

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const ButtonWrapper= styled('div')({
  display: 'flex',
  // fontSize: '1.2rem',
  cursor: 'pointer',
  width: '12rem',
  height: '2rem',
 
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const Previous= styled(ArrowLeftIcon)({
  display: 'flex',
  // fontSize: '1.2rem',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  marginRight: '3px',
  borderRadius: '30px',

  '&:hover' : {
    backgroundColor: veryLightGrey
    
  },

  '&:active' : {
  
    color: 'orange',
 
    
  },
  
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'orange'
  },

})

const Next= styled(ArrowRightIcon)({
  display: 'flex',
  // fontSize: '1.2rem',
  width: '2rem',
  height: '2rem',
  marginLeft: '3px',
  borderRadius: '30px',

  '&:hover' : {
    backgroundColor: veryLightGrey,
    
  },

  
  '&:active' : {
    color: 'orange',
     
  },

  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})
const Month = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.2rem',
  width: '11rem',
color: 'black',




  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
    
  },




})

const LinkWrapper= styled('div')({
  display: 'flex',
  
  // width: '12rem',
 
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const Link= styled('span')({
  display: 'flex',
  fontSize: '.75rem',
  cursor: 'pointer',
  margin: '0 6px',
   textDecoration: 'underline',
    color: chitBlueDull,
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


// =======================================================

export default function MonthNav(props) {
  let dispatch = useDispatch()
  // let currentUTCmonth = props.displayParams.utc
  let currentUTCmonth = useSelector(selectStatus).calendarMonthDisplay.utc
  let monthName = useSelector(selectStatus).calendarMonthDisplay.monthName
  let monthYear = useSelector(selectStatus).calendarMonthDisplay.monthYear

  const handleMonthChange = (evt)=>{
    let id = evt.currentTarget.id

    
  
    console.log('[Chit-pro ... Month Nav currentUTCmonth : ', currentUTCmonth)


    // let formattedUTCmonth = UTCtoDate(currentUTCmonth)
    let unformattedUTCmonth =  unformattedUTCtoDate(currentUTCmonth)
    let current_month_date_array = unformattedUTCmonth.split(' ') 

    let [currentMonth, day, currentYear] = current_month_date_array

  
   console.log('[Chit-pro ... Month Nav currentUTCmonth : ', current_month_date_array)

    if(id === 'next'){

      let nextMonth = getNextMonth(currentMonth, currentYear)
      let formattedNextMonth = `${nextMonth.nextMonth} 1 ${nextMonth.nextYear}`

      let UTCMonth = DatetoUTC( formattedNextMonth)
      let monthArrayPosition = nextMonth.nextMonth - 1
      let monthName = monthArrayLong[monthArrayPosition]
      let monthYear=  nextMonth.nextYear

      

      dispatch(changeMonthView({
        utc: UTCMonth,
        monthName: monthName,
        monthYear: monthYear
      }))


    } 

    if(id === 'previous'){

      let previousMonth = getPreviousMonth(currentMonth, currentYear)
      let formattedPreviousMonth = `${previousMonth.previousMonth} 1 ${previousMonth.previousYear}`

      let UTCMonth = DatetoUTC( formattedPreviousMonth)
      let monthArrayPosition = previousMonth.previousMonth - 1
      let monthName = monthArrayLong[monthArrayPosition]
      let monthYear=  previousMonth.previousYear


      dispatch(changeMonthView({
        utc: UTCMonth,
        monthName: monthName,
        monthYear: monthYear
      }))
    } 
  }// end handleMonthChange

  // ---Return -------------------

  return (
    <Wrapper>
      <ButtonWrapper> 
        
        <Previous id = "previous" onClick = {(evt) => handleMonthChange(evt) }/> 

        <Next id ="next" onClick = {(evt) => handleMonthChange(evt) }/>
        
        </ButtonWrapper>
        <Month>{monthName} - {monthYear} </Month>
      <LinkWrapper>
      <Link>show today </Link> 
      <Link>  show last chit</Link>
       </LinkWrapper>
      
    </Wrapper>
  );
}

 