/* function ChitMain(props) -------------------
       parent: sampleSite/Spotlights_s

  Holds Chits, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections

   children: ./personal/personalMain_s
            ./twoParty/twoPartyMain_s
            ./work/workMain_s

------------------------------------*/


import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey} from '../../../../styles/colors'

import{ selectChits
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/chitRedux/X_sam_selectors_Chits'
import{ selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'

import PersonalMain from './personal/PersonalMain_s'
import TwoPartyMain from './twoParty/TwoPartyMain_s'

//  ---- Material Ui ------------------

import InfoIcon from '@mui/icons-material/Info';
import NotesIcon from '@mui/icons-material/Notes';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'

import { styled, createTheme   } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})



 

// ===========================================

function ChitMain(props) {
  let match = useParams()
  // let chitPage = useSelector(selectStatus).view.chit.type
  let chitPage = match.pageView
// console.log('[ ChitMain ] chitPage ', chitPage);
// console.log('[ ChitMain ] match ', match);
  return (
    <MainWrapper>
 
  
        {chitPage === 'personalChits' && <PersonalMain/> }
        {chitPage === 'twoPartyChits' && <TwoPartyMain/>}
   

      
    </MainWrapper>
  )
}

export default  ChitMain
