/* function PersonalLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {veryLightGrey} from '../../../../../styles/colors'

import PersonalLedgerRow from './PersonalLedgerRow_s';


import { ISOtoUTC, UTCtoISO, UTCtoDateTradional } from '../../../../../app/helpers/dateHelper';
import { choosePersonalCoin, categoryChitFilter } from '../../../../../app/helpers/chitHelpers';

import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';
 
import { selectAllPersonalChits } from '../../../../../app/redux/personalChitRedux/sam_personalChitSlice';

import { sortChitsByDate, personalChitFilter } from '../../../../../app/helpers/chitHelpers';

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

// ===================================================

export default function PersonalLedger(props) {
  let match = useParams()
  let id = match.id // get URL view location

  let allPersonalChitsArray = useSelector(selectAllPersonalChits)//immutable
  var chitsArray = [...allPersonalChitsArray]; // mutable copy of allPersonalChitsArray


 //sort and filter all chits


 let filteredChits = personalChitFilter(chitsArray, id)
 let sortedChitsByDate = sortChitsByDate(filteredChits)


 console.log('[ PersonalLedgre  ] categoryName ', id);


// console.log('[ PersonalLedger ] allPersonalChitsArray ', allPersonalChitsArray);
// console.log('[ PersonalLedger ] filteredChits ', filteredChits);
// console.log('[ PersonalLedger ] sortedChitsByDate ', sortedChitsByDate);

const ledgerRows = () =>

sortedChitsByDate.map((row, index) => {

  return (
    <PersonalLedgerRow
      id={row.id}
      key={row.id}
      data={row}

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

