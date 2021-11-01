import React  from 'react'
import{ chitRedDark} from '../../../styles/colors'

import Email from '../../../images/slides/features/email2.jpg'
 

 
import {styled, createMuiTheme}  from '@material-ui/core/styles'

const theme = createMuiTheme(); // allows use of mui theme in styled component

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
  color: chitRedDark,
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
      margin: '1rem'
    },

    '& em': {
      color: chitRedDark,
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
  [theme.breakpoints.down('sm')] : {
    
    textAlign: 'left'  ,
    width: '80%%',
  },
  [theme.breakpoints.down('xs')] : {
    width: '80%%',
    
  }

})


// ----Slide 1 ------------------



const PicturesWrapper= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  
  width: '60%',
  height: '15rem',





  [theme.breakpoints.down('xs')] : {
    width: '80%',
    jutifyContent: 'flex-start',
 
    marginBottom: '1rem',
    paddingRight: '5%'
    
  }

})





const PictureStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '12rem',
  // height: '4rem',

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
  }

})




export const Picture2= () => {
  return (
    <PicturesWrapper>

        <PictureStyle src= {Email}   alt="Email icon" />  
   

  </PicturesWrapper>
  )
}


export const Narration2= () => {
  return (
    <NarWrapper>

        <NarHeader> 
          Testimonials and Feedback 
        </NarHeader>
             
        <NarDetail>
          <div>
            It’s  easy and non-confrontational to get feedback. 
            Just  create a chit for some task you performed
            and send the chit with a request to the other 
            person for feedback.  
          </div>
          <div>
            Collect and save testimonials to use for
            reviews or for marketing yourself to new
            companies or clients. 
          </div>
          
        </NarDetail>

    </NarWrapper>
  )
}