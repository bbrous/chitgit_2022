import React  from 'react'
import{chitRedDark} from '../../../styles/colors'

import GoldCoin from '../../../images/chitCoins/gold_standard.svg'
import SilverCoin from '../../../images/chitCoins/silver_personal.svg'
import CopperCoin from '../../../images/chitCoins/copper_promise.svg'
import AwChit from '../../../images/chitCoins/awChit.svg'
 
 
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
  flexDirection: 'column',
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

const ChitRow= styled('div')({

  display: 'flex',
  jutifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '5rem',
  marginBottom: '1rem',




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
  width: '5rem',
  // height: '4rem',

  [theme.breakpoints.down('sm')] : {
     
  //    width: '4rem',
  // height: '4rem',
  }

})




export const Picture3= () => {
  return (
    <PicturesWrapper>

      <ChitRow>

      
        <PictureStyle src= {GoldCoin}   alt="Gold Coin" />  

        <PictureStyle src= {SilverCoin}   alt="Silver Coin" />  
      </ChitRow>
      <ChitRow>
        <PictureStyle src= {CopperCoin}   alt="Copper Coin" />  

        <PictureStyle src= {AwChit}   alt="Red Coin" />  

      </ChitRow>
   

  </PicturesWrapper>
  )
}


export const Narration3= () => {
  return (
    <NarWrapper>

        <NarHeader> 
          Chits come in various types and colors
        </NarHeader>
             
        <NarDetail>
          <div>
            Different colors give weight or importance to the
            action or task that created the chit.
          </div>
          <div>
            Different chit types are used to denote personal 
            or 2 party or promises.
          </div>
          <div>
            Use AwChits to record failures, setbacks or transgressions.

          </div>
          
        </NarDetail>

    </NarWrapper>
  )
}