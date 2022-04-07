/* function TwoPartyLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {chitAquaBlue, veryLightGrey} from '../../../../../styles/colors'

import TwoPartyLedgerRow from './TwoPartyLedgerRow_s';


import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice';

import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';


 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

// backgroundColor: 'green' ,

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

const FilterWrapper= styled('div')({


  
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '.85rem',
    marginBottom: '6px',
    color: chitAquaBlue,
  //   height: '100%',
  
  
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },
  
  })

  const tempArray = [
    {id: 'xChit_1', description: 'description here - xChit_1 '},
    {id: 'xChit_2', description: 'description here - xChit_2 '},
    {id: 'xChit_3', description: ' description here -  xChit_3'},
    {id: 'xChit_4', description: ' description here -xChit_4'},
  ]

// ===================================================================

export default function TwoPartyLedger(props) {

let allChits = useSelector(selectAllTwoPartyChits)
console.log('[ TwoPartyLedger ] all 2 party chits ', allChits);

  const chitRows = (tempArray) => 


 
  tempArray.map((item, index) => {
   // code 
  return (
    <TwoPartyLedgerRow
      id = {item.id}
      key = {item.id}
      description = {item.description}

     
    />
  )
  }
  ) //end map



  return (
    <Wrapper>
       

      {chitRows(tempArray)}

      

      
    </Wrapper>
  );
}

