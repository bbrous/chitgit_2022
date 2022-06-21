import React from 'react'
import{chitRedDark} from '../../../../styles/colors'



import PhoneLandscape from '../../../../images/slides/description/phoneLandscape.svg'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const NarWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '70%',
  

  [theme.breakpoints.down('sm')] : {
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
  width: '18rem',
   
})



export const Picture5= () => {
  return (
    <PictureStyle>
      <PhonePortraitStyle src= {PhoneLandscape}   alt="Phone Landscape" /> 
  </PictureStyle>
  )
}


export const Narration5= () => {
  return (
    <NarWrapper>
      <NarHeader> 
      Chit Type - Personal 
      </NarHeader>
      
        <NarDetail>

        <div> 
          <em>Record achievements - </em>Showcase  skills you
          applied to specifc tasks you performed.
        </div>

         <div>
            <em>Keep Motivated  -  </em>
            Create categories, both 
            professional and personal.  Track progress
            as you work towards any goal such as learning 
            a new skill, or creating a new positive habit. 
          </div>
          
          <div>
            <em>Establish Primacy  - </em> Create a timestamp
            of ideas you had or intellectual property you 
            created for yourself or the company.  Use 
            them to resolve  coworker or  legal disputes.
          </div>
        </NarDetail>

    </NarWrapper>
  )
}