import React  from 'react'
import{ chitRedDark} from '../../../styles/colors'

import Email from '../../../images/slides/features/email.jpg'
import FrontPage from '../../../images/slides/features/frontPage.svg'
 

 
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



  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
     
    marginBottom: '1rem',
    
  }
})



const LeftPicture= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  
  
  width: '5rem',
  
  [theme.breakpoints.down('sm')] : {
     
    // height: '7rem',
    // width: '7rem',
    // fontSize: '.75rem',
  }

})

const RightPicture= styled('div')({
  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '30rem',
   

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
  }

})

const LeftPictureStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '4rem',
  height: '4rem',

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
  }

})

const RightPictureStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '11rem',
  // height: '5rem',

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
  }

})


export const Picture1= () => {
  return (
    <PicturesWrapper>
      <LeftPicture>   
        <LeftPictureStyle src= {Email}   alt="Email icon" />  
   
      </LeftPicture>
      <RightPicture>  
        <RightPictureStyle src= {FrontPage}   alt="Front Page" /> 
        
      </RightPicture>
  
  </PicturesWrapper>
  )
}


export const Narration1= () => {
  return (
    <NarWrapper>
      <NarHeader> 
        Chits can be kept private or shared 
      </NarHeader>
      
      <NarDetail>
        <div>
          You can create a chit and save it in your
          own account regardless whether you did something for someone
          else or they for you.  
        </div>
        <div>You can then allow Chit Git to notify the other party about
          the chit ... or not – it’s up to you.
        </div>
        
      </NarDetail>

   </NarWrapper>
   
  )
}