import React from 'react'







import LogsMain from './samLogs/LogsMain_s'

import {styled, createMuiTheme, makeStyles}  from '@material-ui/core/styles'

const theme = createMuiTheme(); // allows use of mui theme in styled component



const Wrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

 const Logs = () => {
  return (
    <Wrapper>
  
      <LogsMain/>
    </Wrapper>
  )
}


export default Logs
