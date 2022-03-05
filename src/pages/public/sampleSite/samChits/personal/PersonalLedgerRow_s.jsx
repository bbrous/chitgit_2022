/* function PersonalLedgerRow (props) -------------------
 
 
  parent: ./PersonalLedger
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'

 import { Paper } from '@mui/material';
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// ----------------------------------------------------------------


const Wrapper= styled(Paper)({
color: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',

  border: '1px solid lightgrey',
  height: '45px',
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



export default function PersonalLedgerRow(props) {
  return (
    <Wrapper>
      <div> Chit - personal ledger row</div>
      <div> Message</div>
      <div> Edit links, etc</div>

      
      
    </Wrapper>
  );
}

