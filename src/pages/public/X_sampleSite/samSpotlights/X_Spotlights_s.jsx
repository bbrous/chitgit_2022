//    Sample Site Spotlights Primary Page

import React from 'react'

import {veryDarkBlue, chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,backgroundBlue} from '../../../../styles/colors'


import {styled, createMuiTheme}  from '@material-ui/core/styles'
const theme = createMuiTheme(); // allows use of mui theme in styled component



// ----------------------------------
const MainWrapper= styled('div')({

  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: '960px',
  minHeight: '600px',
  height: '100%',
  backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    
  },

})



function Spotlights_s() {
  return (
    <MainWrapper>
      Spotlights Primary Page
    </MainWrapper>
  )
}

export default Spotlights_s
