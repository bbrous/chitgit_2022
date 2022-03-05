/* function WorkLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'

 import WorkLedgerRow from './WorkLedgerRow_s';
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  backgroundColor: 'green' ,
  
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'calc(100% - 16px)' ,
  //   height: '100%',
  
  
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },
  
  })



export default function WorkLedger(props) {
  return (
    <Wrapper>
      <div> WorkLedger_s</div>

     <WorkLedgerRow/>
     <WorkLedgerRow/>
     <WorkLedgerRow/>
     
      
    </Wrapper>
  );
}

