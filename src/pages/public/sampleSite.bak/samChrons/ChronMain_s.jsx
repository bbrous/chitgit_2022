/* function ChronMain(props) -------------------
       parent: sampleSite/Plans_s

  Holds Chrons, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey} from '../../../../styles/colors'

import{ selectChrons
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/chronRedux/sam_selectors_Chrons'

import Chron from './Chron_s'

//  ---- Material Ui ------------------

import InfoIcon from '@mui/icons-material/Info';
import NotesIcon from '@mui/icons-material/Notes';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
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

const Container= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: chitOrange,
  width: '90%',

  // minHeight: '10rem',
  // height: '90%',
  margin: '3px 0 5% 0',
  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: veryLightGrey,


})

 

// ===========================================

function ChronMain(props) {


  return (
    <MainWrapper>
 
      <Container>
        ChronsMain Here
        <Chron/>
 
        
      </Container>
      
    </MainWrapper>
  )
}

export default  ChronMain
