import React from 'react'
import {chitOrangeVeryLight} from '../../../../styles/colors'

// -------Material UI 

import { styled, createTheme, withStyles  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: chitOrangeVeryLight,
  width: '100%',
  height: '100%',


  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})


// ====================================

function Inspires() {
  return (
    <Wrapper>
            <p> aaInspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p><p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> Inspires _s here </p>
      <p> zzInspires _s here </p>
    </Wrapper>
  )
}

export default Inspires
