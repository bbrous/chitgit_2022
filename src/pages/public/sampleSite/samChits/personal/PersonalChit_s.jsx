/* function PersonalChit_s (props) -------------------
 
  children: ./PersonalChit_s
  parent: ./PersonalCalendar
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {mediumGrey, lightGrey} from '../../../../../styles/colors'


 

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
  width: '14%',


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
  backgroundColor: lightGrey,
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'white',
  width: '14%',


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
 


let {refIndex,  utcDate, month,  displayChits }= props
 

 

let chitType
let chitId
let chitCategory
/* Determine if there are multiple chits for a specific day
   then set the chitType to multiple so that a multi-colored
   chit is displayed instead of a single silver or gold, etc.
*/ 

if(displayChits.length === 1){

  chitCategory = displayChits[0].category

 if(displayChits[0].milestone){chitType = 'milestone'}else{chitType = displayChits[0].chitColor}

 let chitsIdArray = []
chitsIdArray.push(displayChits[0].chitId)
 chitId = chitsIdArray

  

} 
else if (displayChits.length > 1){
  chitType = 'multiple'
  chitCategory = ''
  // create an array of chitIds for a day with multiple chits
  chitId = displayChits.map((displayChit, index)=>{
    

    return displayChit.chitId
    
  })// end map displaychits


}else{
  chitType = ''
  chitCategory = ''
}// end else if's 

// get the src address for the img display the chit to show              
// let coinAddress = choosePersonalCoin(chitType)    
let coinAddress = choosePersonalCoin('red')    
console.log('[ PersonalChit ] coinAddress ', coinAddress);

const pathToCoinImages = '../../'
// const coinDisplayed = pathToCoinImages + coinAddress
const coinDisplayed =  '../../../images/chitCoins/copper_personal.svg'


const showChitDetail = (chitId)=>{

props.openModal('personalDetail', chitId)

}

 


  return (
    <>
   
   
  
 {month === 'current'  &&
        <CurrentMonthWrapper key ={refIndex}> 
          <DayWrapper> 
            <Day>
              
            {props.day}
            </Day>


            {/* {displayChits.length > 0 &&  
              <img src={coinDisplayed} alt="coin"  id = {utcDate}
              onClick = {()=> showChitDetail({chitId})}
              />
            } */}


<img  src= {choosePersonalCoin('silver')  }  /> 



            <CategoryDescription>{chitCategory}</CategoryDescription>
          </DayWrapper>
        </CurrentMonthWrapper>
        }
      {month !== 'current'  &&
        <OtherMonthWrapper key ={refIndex}> 
          <DayWrapper> 
            <Day>
            {props.day}
            </Day>
            {displayChits.length > 0 &&  
              <img src={coinDisplayed} alt="coin"  id = {utcDate}
              onClick = {()=> showChitDetail({chitId})}
              />
            }
            <CategoryDescription>{chitCategory}</CategoryDescription>
          </DayWrapper>
        </OtherMonthWrapper>
        }
    
      
    </>
  );
}

