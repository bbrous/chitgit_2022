import React , {Fragment} from 'react'
import{chitBlueDull, chitBlueLight, chitOrange, chitOrangeLight} from '../../../styles/colors'


import Button from '@material-ui/core/Button';
import {styled, createMuiTheme}  from '@material-ui/core/styles'

const theme = createMuiTheme(); // allows use of mui theme in styled component





const MoreInfo = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '15rem',
  height: '2.25rem',
  backgroundColor: chitBlueDull,
  color: 'white',
  marginTop: '1rem',
  marginBottom: '1rem',

  [theme.breakpoints.down('sm')] : {
    width: '15rem',
    height: '2rem',
    fontSize: '.75rem'
    
  }, 
  
  [theme.breakpoints.down('xs')] : {
    width: '15rem',
    height: '2rem',
  },

  '&:hover' : {
    backgroundColor: chitBlueLight,
    textDecoration: 'none',
  }

})

const  StartButton = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '15rem',
  height: '1.75rem',
  backgroundColor: chitOrange,
  color: 'white',
  marginTop: '1rem',
  [theme.breakpoints.down('sm')] : {
    width: '15rem',
    height: '2rem',
    fontSize: '.75rem'
    
  }, 
  
  [theme.breakpoints.down('xs')] : {
    width: '15rem',
    height: '2rem',
  },

  '&:hover' : {
    backgroundColor: chitOrangeLight,
    textDecoration: 'none',
  }

})



export const FeatureButton= () => {
  return (
    <Fragment>
      <StartButton> 
        Check out Chit Git features
      </StartButton>
    </Fragment>
  )
}


export const JoinButton= () => {
  return (
    <Fragment>

      <MoreInfo> 
        Start creating your chits now
      </MoreInfo>

    </Fragment>
  )
}