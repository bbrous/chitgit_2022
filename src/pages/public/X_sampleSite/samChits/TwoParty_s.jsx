//    Sample Site Chits Primary Page
import React from 'react'

import {chitVeryLightGreen, chitOrange,veryLightGrey, chitRedDark, chitLightGreen,chitBlueDull,backgroundBlue} from '../../../../styles/colors'


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
  backgroundColor: chitVeryLightGreen,

  [theme.breakpoints.down('sm')] : {
    
  },

})



function TwoParty_s() {
  return (
    <MainWrapper>
      Two Party Primary Page
    </MainWrapper>
  )
}

export default TwoParty_s
