/* function PersonalLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'


import MonthNav from './MonthNav_s';


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
 
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})



export default function PersonalCalendar(props) {
  
 // get the src address for the img display the chit to show              
//  let coinAddress = choosePersonalCoin(chitType)    
 
//  const pathToCoinImages = '../../'
//   const coinDisplayed = pathToCoinImages + coinAddress

 

  return (
    <Wrapper>
 
    <MonthNav/>
      Personal Calendar here
    
      
    </Wrapper>
  );
}

