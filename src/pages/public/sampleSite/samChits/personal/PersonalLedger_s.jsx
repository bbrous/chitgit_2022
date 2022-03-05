/* function PersonalLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'
import PersonalLedgerRow from './PersonalLedgerRow_s';
 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({
color: 'green'
//   display: 'flex',
//   position: 'relative',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
//   backgroundColor: veryLightGrey,
//   width: '100%',
//   height: '100%',
// overflow: 'hidden',

//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})



export default function PersonalLedger(props) {
  return (
    <Wrapper>
      <div> PersonalLedger_s</div>

      <PersonalLedgerRow/>
      <PersonalLedgerRow/>
      <PersonalLedgerRow/>
      
    </Wrapper>
  );
}

