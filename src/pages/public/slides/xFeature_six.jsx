import React , {Fragment} from 'react'
import{testColors,  veryLightGrey, chitRedDark} from '../../../styles/colors'

import Journal from '../../../images/slides/features/journal.svg'
 
 

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {styled, createMuiTheme}  from '@material-ui/core/styles'

const theme = createMuiTheme(); // allows use of mui theme in styled component

const NarWrapper= styled(Typography)({
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
const NarHeader= styled(Typography)({
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
  // width: '12rem',
  height: '15rem',

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
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

export const Picture6= () => {
  return (
    <PicturesWrapper>

        <PictureStyle src= {Journal}   alt="Chit Git jounal" />  
   

  </PicturesWrapper>
  )
}


export const Narration6= () => {
  return (
    <NarWrapper>

        <NarHeader> 
        Journal *
        </NarHeader>
             
        <NarDetail>
          <div>
          Add the journal feature to your chits..
Keep a daily log of activities
both personal and professional.
          </div>
          <div>
          Filter and sort sections of the journal 
by type, category or by key words.  Use 
them to quickly find ideas you documented.
          </div>

          <Note>
          * note:: an upgrade feature
          </Note>
          
        </NarDetail>

    </NarWrapper>
  )
}