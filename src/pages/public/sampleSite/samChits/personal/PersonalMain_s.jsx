/* function PersonalMain (props) -------------------
 

  parent: ../Chits_s
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'

import PersonalChitHeader from './PersonalChitHeader_s';
import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import PersonalLedger from './PersonalLedger_s';
import PersonalCalendar from './PersonalCalendar_s';
 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  width: '95%',
//   alignItems: 'center',
//   backgroundColor: veryLightGrey,
//   width: '100%',
//   height: '100%',
// overflow: 'hidden',

//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})



export default function PersonalMain_s(props) {
  let chitView= useSelector(selectStatus).view.chit.display
  console.log('[ Personal Main ] chitPage ================================ ', chitView);
  
  return (
    <Wrapper>
      <PersonalChitHeader/>

      
     
     {chitView === 'ledger' &&  <PersonalLedger/>}
     {chitView === 'calendar' &&  <PersonalCalendar/>}
     
    </Wrapper>
  );
}

