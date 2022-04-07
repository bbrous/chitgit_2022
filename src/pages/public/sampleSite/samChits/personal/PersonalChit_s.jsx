/* function PersonalChit_s (props) -------------------
 
   
  parent: ./PersonalCalendar
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {mediumGrey, mediumLightGrey} from '../../../../../styles/colors'


 import { UTCtoDateTradional } from '../../../../../app/helpers/dateHelper'

import MonthNav from './MonthNav_s';


import { choosePersonalCoin } from '../../../../../app/helpers/chitHelpers';
 
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

const ToDayWrapper= styled('div')({
  // display: 'block',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  border: '1px solid red',
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

const CategoryDescription = styled('div')({
  fontSize: '.55rem',
  position: 'absolute',
  bottom: '0',
  color: mediumGrey,
  width: '98%',
 
  overflow: 'hidden',
    
    minWidth: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
     
  },

})
  
//====================================

export default function PersonalChit(props) {
  
  // get the src address for the img display the chit to show              
  //  let coinAddress = choosePersonalCoin(chitType)    



  let { utcDate, month, displayChit } = props


  

  let chitCategory


  // get the src address for the img display the chit to show              
  // let coinAddress = choosePersonalCoin(chitType)    

  let coinAddress = choosePersonalCoin(displayChit[0].chitColor)
 

  const pathToCoinImages = '../../../'
  const coinDisplayed = pathToCoinImages + coinAddress

  // ==== Main Return =============================

  return (
    <>


      {month === 'current' &&
        <CurrentMonthWrapper>
          <DayWrapper>


            <Day>

              {props.day}
            </Day>


            {/* {displayChits.length > 0 &&  
              <img src={coinDisplayed} alt="coin"  id = {utcDate}
              onClick = {()=> showChitDetail({chitId})}
              />
            } */}



            <img src={coinDisplayed} alt="coin" />




            <CategoryDescription>{chitCategory}</CategoryDescription>
          </DayWrapper>
        </CurrentMonthWrapper>
      }

      {month !== 'current' &&
        <OtherMonthWrapper>
          <DayWrapper>
            <Day>
              {props.day}
            </Day>
            {displayChit.length > 0 &&
              <img src={coinDisplayed} alt="coin" id={utcDate} />
            }
            <CategoryDescription>{chitCategory}</CategoryDescription>
          </DayWrapper>
        </OtherMonthWrapper>
      }


    </>
  );
}

