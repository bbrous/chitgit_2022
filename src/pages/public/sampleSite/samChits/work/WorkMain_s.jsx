/* function PersonalMain (props) -------------------
 

  parent: ../Chits_s
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'

import WorkLedger from '../work/WorkLedger_s';
 
 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  backgroundColor: 'pink',

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
//   backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflowY: 'auto',

//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})




export default function WorkMain(props) {
  return (
    <Wrapper>
      <div> Ledger View - Calendar View</div>

     kkk
      <WorkLedger/>
       
    </Wrapper>
  );
}

