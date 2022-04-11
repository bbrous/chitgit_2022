/* function PersonalMain (props) -------------------
 

  parent: ../Chits_s
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {chitRedDark, veryLightGrey} from '../../../../../styles/colors'

import TwoPartyLedger from './TwoPartyLedger_s';
 import TwoPartyChitHeader from './TwoPartyChitHeader_s';
import KarmicView from './KarmicView_s';
 import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  // backgroundColor: 'pink',

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

const MainTitle= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: chitRedDark,
  fontSize: '1.1rem',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

export default function TwoPartyMain_s(props) {

  let chitView= useSelector(selectStatus).view.personalChit.display

  return (
    <Wrapper>
      <TwoPartyChitHeader/>
{chitView === 'ledger' &&  <TwoPartyLedger/>}
        {chitView === 'karmic' && <KarmicView />}
     
     
       
    </Wrapper>
  );
}

