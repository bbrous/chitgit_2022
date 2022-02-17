/* function Chron(props) -------------------

    maps the Chron sections for a specified Chron


  Children: ./ChronSection
 
    parent: ./ChronMain
------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'

// import{ selectChrons
//   // selectSpotlightTaskArray
  
// } from '../../../../app/redux/chronRedux/X_sam_selectors_Chrons'

import ChronSection from './ChronSection_s'
 
//  ---- Material Ui ------------------
 
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
//--- STYLES begin --------------------------

const Wrapper= styled('div')({

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

export default function Chron() {
  return (
    <Wrapper>

        <ChronSection/>
        <ChronSection/>
        <ChronSection/>
        <ChronSection/>
        <ChronSection/>
    </Wrapper>
  )
}
