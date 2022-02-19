/* function Jsections(props) -------------------

    maps the journal sections  


  Children: ./JSection
 
    parent: ./JMain
------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'


import JSection from './JSection_s'
 
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

export default function JSections() {
  return (
    <Wrapper>

        <JSection/>
        <JSection/>
        <JSection/>
        <JSection/>
        <JSection/>
    </Wrapper>
  )
}
