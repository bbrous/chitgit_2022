import React  from 'react'
import{chitRedDark} from '../../../styles/colors'

import Attachment from '../../../images/slides/features/attachment.svg'
 

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
  // width: '12rem',
  height: '15rem',

  [theme.breakpoints.down('sm')] : {
    height: '12rem',

  },

  [theme.breakpoints.down('xs')] : {
    height: '15rem',

  }

})

const Note= styled('div')({

  display: 'block',
  color: chitRedDark,
  fontSize: '.6rem',





  [theme.breakpoints.down('xs')] : {
    // width: '80%',
    // jutifyContent: 'flex-start',
 
    // marginBottom: '1rem',
    // paddingRight: '5%'
    
  }

})

// ===================================

export const Picture7= () => {
  return (
    <PicturesWrapper>

        <PictureStyle src= {Attachment}   alt="Chit Git jounal" />  
   

  </PicturesWrapper>
  )
}


export const Narration7= () => {
  return (
    <NarWrapper>

        <NarHeader> 
          File Attachments
        </NarHeader>
             
        <NarDetail>
          <div>
            With file attachments*, add work samples, pictures,
            or short videos 
            to your chits for use with resume
            attachments or gig job marketing
          </div>


          <Note>
            * note:: Upgrade feature
          </Note>
          
        </NarDetail>

    </NarWrapper>
  )
}