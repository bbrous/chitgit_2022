/* function WorkLedgerRow (props) -------------------
 
 
  parent: ./WorkLedger
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

// -----------------------------------------------------------------


const Wrapper= styled(Paper)({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
//   alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  padding: '0 6px',
  margin: '2px 0',


//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})



export default function WorkLedgerRow(props) {
  return (
    <Wrapper>
      <div> Work Ledger Row Here</div>
      

      
      
    </Wrapper>
  );
}

