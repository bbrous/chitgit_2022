/* function PersonalMain (props) -------------------
 

  parent: ../Chits_s
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'
import PersonalChitViewNav from '../../../../navComponents/publicNav/sampleNav/PersonalChit_View_nav_s';
 
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
  color: 'pink',
  width: '100%',
//   alignItems: 'center',
//   backgroundColor: veryLightGrey,
//   width: '100%',
//   height: '100%',
// overflow: 'hidden',

//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})

const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  position: 'relative',
  top: 0,
  left: '5%',
width: '100%',

  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

export default function PersonalMain_s(props) {
  let chitView= useSelector(selectStatus).view.chit.display
  console.log('[ Personal Main ] chitPage ================================ ', chitView);
  
  return (
    <Wrapper>
      <ViewNavWrapper>
      <PersonalChitViewNav/>
      </ViewNavWrapper>
     
     {chitView === 'ledger' &&  <PersonalLedger/>}
     {chitView === 'calendar' &&  <PersonalCalendar/>}
     
    </Wrapper>
  );
}

