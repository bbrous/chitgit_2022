import React , {Fragment} from 'react'
import{chitAquaBlue, chitBlueLight, headerGrey, chitOrangeLight} from '../../../styles/colors'

import Button from '@mui/material/Button';

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const StartButton= styled(Button)({
  display: 'block',
  padding: '1px',
  width: '10rem',
  height: '1.75rem',
  backgroundColor: chitAquaBlue,
  color: 'white',

  [theme.breakpoints.down('sm')] : {
    width: '9rem',
    height: '1.25rem',
    fontSize: '.75rem'
    
  }, 
  
  [theme.breakpoints.down('xs')] : {
    width: '10rem',
  height: '1.75rem',
  },

  '&:hover' : {
    backgroundColor: chitBlueLight,
    textDecoration: 'none',
  }

})

const Free= styled(Button)({
  display: 'block',
  padding: '1px',
  width: '10rem',
  height: '1.75rem',
  backgroundColor: 'white',
  color: 'black',
  marginLeft: '10px',
 
  '&:hover' : {
    backgroundColor: chitBlueLight,
    textDecoration: 'none',
    color: 'white'
  },
  [theme.breakpoints.down('sm')] : {
    width: '9rem',
    height: '1.25rem',
    fontSize: '.7rem'
  }, 
  
  [theme.breakpoints.down('xs')] : {
    width: '10rem',
  height: '1.75rem',
  },

})

const  StartButtonSlides = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '15rem',
  height: '2.25rem',
  // backgroundColor: chitAquaBlue,
   
  border : '1px solid #4B6599',
  color: 'black',

  marginTop: '1rem',
  // marginBottom: '1rem',
  fontSize: '.75rem',
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

const  StartButtonNotification = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '4rem',
  height: '2rem',
  backgroundColor: chitAquaBlue,
   
  border : '1px solid #4B6599',
  color: 'white',

  
  // marginBottom: '1rem',
  fontSize: '.75rem',

  [theme.breakpoints.down('sm')] : {
    // width: '15rem',
    // height: '2rem',
    // fontSize: '.75rem'
    
  }, 
  
  [theme.breakpoints.down('xs')] : {
    // width: '15rem',
    // height: '2rem',
  },

  '&:hover' : {
    backgroundColor: chitBlueLight,
    textDecoration: 'none',
  }

})

const Join = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '6rem',
  height: '2rem',
   // backgroundColor: chitAquaBlue,
   
  border : '1px solid #F58634',
  color: headerGrey,
  margin: '1rem',


  [theme.breakpoints.down('sm')] : {
    width: '6rem',
    height: '1.75rem',
    fontSize: '.75rem'
    
  }, 
  
  [theme.breakpoints.down('xs')] : {
    width: '6rem',
    height: '2rem',
    margin: '.5rem .5rem 1rem 0',
  },

  '&:hover' : {
    backgroundColor: chitOrangeLight,
    textDecoration: 'none',
  }

})

const  MoreInfo = styled(Button)({
  display: 'block',
  padding: '1px',
  width: '15rem',
  height: '1.75rem',
    // backgroundColor: chitOrange,
    border : '1px solid #F58634',
    color: 'black',
  marginTop: '1rem',
  fontSize: '.75rem',

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


//==================================

export const JoinButtonLanding = () => {
  return (
    <Fragment>
      <StartButton variant = 'contained'>Join</StartButton>
    </Fragment>
  )
}

export const FreeButton = () => {
  return (
    
      <Free>Chit Basic is a free</Free>
   
  )
}

export const JoinButtonNotification = () => {
  return (
    <Fragment>
      <StartButtonNotification  variant = 'contained'>Join</StartButtonNotification >
    </Fragment>
  )
}

export const FeatureButtonSlides= () => {
  return (
    <Fragment>
      <StartButtonSlides> 
        Check out Chit Git features
      </StartButtonSlides>
    </Fragment>
  )
}


export const JoinButtonSlides= () => {
  return (
    <Fragment>

      <MoreInfo> 
        Start creating your chits now
      </MoreInfo>

    </Fragment>
  )
}

export const JoinButtonFeatures= (name) => {
  return (
    <Fragment>

      <Join> 
        Join
      </Join>

    </Fragment>
  )
}

export const JoinButtonFeaturesBuy= (name) => {
  return (
    <Fragment>

      <Join> 
        Buy
      </Join>

    </Fragment>
  )
}


