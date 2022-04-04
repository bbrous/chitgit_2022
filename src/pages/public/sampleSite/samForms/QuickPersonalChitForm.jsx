/* function QuickPersonalChitForm_s (props) -------------------
 
  children: ./PersonalChit_s
  parent: ./PersonalCalendar
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {mediumGrey, lightGrey, veryLightGrey, mediumLightGrey, chitLightBlueDull} from '../../../../styles/colors'


 

import MonthNav from '../samChits/personal/MonthNav_s'
import AddCircleIcon from '@mui/icons-material/AddCircle'


 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


// --------------------------------

const CurrentMonthWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: 'white',
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'black',
  width: '100%',


})

const TodayWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: chitLightBlueDull,
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'black',
  width: '100%',


})

const DayWrapper= styled('div')({
  // display: 'block',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  
  width: '4.5rem',
  height: '4.5rem',
 
   overflow: 'hidden',
  verticalAlign: 'middle',
  textAlign: 'center',
 
  '& img' :{
    height: '3rem',
    marginBottom: '6px'
  },

})

const OtherMonthWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: mediumLightGrey,
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'white',
  width: '100%',


})




const Day = styled('div')({
  fontSize: '.65rem',
  position: 'absolute',
  top: '2px',
  right: '2px',

})



const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: lightGrey,
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: lightGrey,
    color: 'white',
    borderRadius: '50px',
    cursor: 'pointer'
  },

})

const DispabledAddCircleIconWrapper= styled(AddCircleIcon)({

  color: lightGrey,
  fontSize : '1.7rem',
  opacity: 0,
  '&:hover' : {
    backgroundColor: veryLightGrey,
    borderRadius: '50px',
   
  },

})
  
  //====================================

export default function QuickPersonalChitForm(props) {

  let { refIndex, utcDate, month, displayChits, isToday, futureDay } = props



  return (
    <>
      {month === 'current' && isToday &&
        <TodayWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>


            <AddCircleIconWrapper />

          </DayWrapper>
        </TodayWrapper>
      }
      {month === 'current' && !isToday &&
        <CurrentMonthWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>

      {!futureDay && 
            <AddCircleIconWrapper />
      }
        {futureDay && 
            <DispabledAddCircleIconWrapper />
      }




          </DayWrapper>
        </CurrentMonthWrapper>

        
      }



      {month !== 'current' &&
        <OtherMonthWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>


            
      {!futureDay && 
            <AddCircleIconWrapper />
      }
        {futureDay && 
            <DispabledAddCircleIconWrapper />
      }




          </DayWrapper>
        </OtherMonthWrapper>
      }
    </>
  );
}
 