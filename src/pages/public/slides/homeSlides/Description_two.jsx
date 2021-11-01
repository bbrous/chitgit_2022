import React from 'react'
import{chitRedDark} from '../../../../styles/colors'



import PhonePortrait from '../../../../images/slides/description/phonePortrait.svg'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const NarWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '70%',
  

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1rem',
  },

  [theme.breakpoints.down('xs')] : {
    width: '100%',
    // fontSize: '1.2rem',
  }

})
const NarHeader= styled('div')({
  // display: 'block',
  // padding: '0 auto 0 auto',
  color: 'black',
  // marginTop: '2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  // // letterSpacing: '.1rem',
  textAlign: 'center'  ,
  width: '80%',
  

  [theme.breakpoints.down('sm')] : {
    fontSize: '.9rem',
    width: '100%',
  },

  [theme.breakpoints.down('xs')] : {
    // width: '65%',
    // fontSize: '1.2rem',
  }

})

 

const NarDetail= styled('div')({


    display: 'flex',
    flexDirection: 'column',
    // padding: '0 auto 0 auto',
    color: 'black',
     marginTop: '1rem',
    fontSize: '.8rem',
    textAlign: 'left'  ,
    width: '80%',

    '& div': {
      padding: '0',
      margin: '3px'
    },

    '& span': {
      fontWeight:'bold'
    },

    '& em': {
      color: chitRedDark,
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
  [theme.breakpoints.down('sm')] : {
    
    textAlign: 'left'  ,
    width: '80%',
  },
  [theme.breakpoints.down('xs')] : {
    width: '80%',
    
  }

})



// ----Slide 1 ------------------



const PictureStyle= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  
  width: '60%',


  marginBottom: '1rem',

  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
     
    marginBottom: '1rem'
  }
})








const PhonePortraitStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '8.5rem',
   
})



export const Picture2= () => {
  return (
    <PictureStyle>
      <PhonePortraitStyle src= {PhonePortrait}   alt="Phone Portrait" /> 
  </PictureStyle>
  )
}


export const Narration2= () => {
  return (
    <NarWrapper>
      <NarHeader> 
          Why Create and store Chits
      </NarHeader>
      
        <NarDetail>
          <div><em>At performance review time  - </em>
              recall both big and small things you did
          </div>
          <div><em>For job search or gig marketing - </em>
            Recall tasks from past jobs.  Reestablish contact with people 
            from your past that you helped.
          </div>
          <div>
          <em>Thank you / appreciation  - </em> Thank someone 
          for something they did for you.  Give and receive valuable 
          testimonials.
          </div>
          <div>
          <em>Personal Motivation  - </em> Use personal chits 
          to track progress and motivate you to your goals
          </div>
        </NarDetail>

    </NarWrapper>
  )
}