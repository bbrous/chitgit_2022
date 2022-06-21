import React from 'react'
import{chitRedDark} from '../../../../styles/colors'



import Tools from '../../../../images/slides/description/tools.jpg'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




export const Picture7= () => {
  return (
    <PictureStyle>
      <div>fix me - public/slides/homeSlides/Description_seven</div>
      <PhonePortraitStyle src= {Tools}   alt="Chit Git Tools" /> 
      
  </PictureStyle>
  )
}


export const Narration7= () => {
  return (
    <NarWrapper>
      <NarHeader> 
      Chit Git Tools
      </NarHeader>
      
        <NarDetail>

        <div> 
        Chit Git is comprised of a suite of useful tools
that lets you archive and display
what you do or accomplish ... who you do it with... and what you
think or plan to do.   
<em> At the core of these is the Chit.</em> 
        </div>


        </NarDetail>

    </NarWrapper>
  )
}


// -----------------------------------------------------------------

const NarWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '70%',
  
  [theme.breakpoints.down('sm')] : {
    width: '100%',
 
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