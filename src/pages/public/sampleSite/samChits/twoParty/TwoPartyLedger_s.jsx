/* function TwoPartyLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {chitAquaBlue, veryLightGrey} from '../../../../../styles/colors'

import TwoPartyLedgerRow from './TwoPartyLedgerRow_s';
 
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
    {id: 'xChit_1', title: 'xChit_1 title here'},
    {id: 'xChit_2', title: 'xChit_2 title here'},
    {id: 'xChit_3', title: 'xChit_3 title here'},
    {id: 'xChit_4', title: 'xChit_4 title here'},
  ]

// ===================================================================

export default function TwoPartyLedger(props) {

  const chitRows = (tempArray) => 


 
  tempArray.map((item, index) => {
   // code 
  return (
    <TwoPartyLedgerRow
      id = {item.id}
      key = {item.id}
      title = {item.title}

     
    />
  )
  }
  ) //end map



  return (
    <Wrapper>
      <FilterWrapper> David Anderson </FilterWrapper>

      {chitRows(tempArray)}

      

      
    </Wrapper>
  );
}

