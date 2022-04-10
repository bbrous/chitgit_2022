/* function TwoPartyLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {chitAquaBlue, veryLightGrey} from '../../../../../styles/colors'

import TwoPartyLedgerRow from './TwoPartyLedgerRow_s';
import { ISOtoUTC } from '../../../../../app/helpers/dateHelper';

import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice';

import { sortChitsByDate, twoPartyChitFilter } from '../../../../../app/helpers/chitHelpers';


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
    {id: 'xChit_1', description: 'description here - xChit_1 ', chitDate: 5},
    {id: 'xChit_2', description: 'description here - xChit_2 ', chitDate: 3},
    {id: 'xChit_3', description: ' description here -  xChit_3', chitDate: 2},
    {id: 'xChit_4', description: ' description here -xChit_4', chitDate: 1},
  ]

// ===================================================================

export default function TwoPartyLedger(props) {
  let match = useParams()
  let id = match.id // get URL view location
  let allChitsArray = useSelector(selectAllTwoPartyChits) //immutable
  var chitsArray = [...allChitsArray]; // mutable copy of allChitsArray

  
  
 //sort all chits


let filteredChits = twoPartyChitFilter(chitsArray, id)
let sortedChitsByDate = sortChitsByDate(filteredChits)
 
  const ledgerRows = () => 


 
  sortedChitsByDate.map((row, index) => {

    

  return (
    <TwoPartyLedgerRow
      id = {row.id}
      key = {row.id}
      data = {row}

     
    />
  )
  }
  ) //end map



  return (
    <Wrapper>
       

      {ledgerRows()}

      

      
    </Wrapper>
  );
}

