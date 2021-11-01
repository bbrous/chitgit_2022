import React  from 'react'
import{ chitRedDark} from '../../../../styles/colors'

import SilverPersonal from '../../../../images/chitCoins/silver_personal.svg'
import SilverStandard from '../../../../images/chitCoins/silver_standard.svg'
import SilverPromise from '../../../../images/chitCoins/silver_promise.svg'


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
    width: '60%',

    '& div': {
      padding: '0',
      margin: '3px'
    },

    '& em': {
      color: chitRedDark,
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
  [theme.breakpoints.down('sm')] : {
    
    textAlign: 'left'  ,
    width: '70%',
  },
  [theme.breakpoints.down('xs')] : {
    width: '70%',
    
  }

})


// ----Slide 1 ------------------



const PictureStyle= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  
  width: '60%',
  height: '15rem',



  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
    height: '7rem',
    marginBottom: '1rem'
  }
})

const CoinEnds= styled('div')({

  display: 'flex',
  jutifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  flexDirection: 'column',
  width: '9rem',
  height: '9rem',
  fontSize: '.9rem',
  textAlign: 'center',
  color: 'black',

  [theme.breakpoints.down('sm')] : {
     
    height: '7rem',
    width: '7rem',
    fontSize: '.75rem',
  }

})

const CoinMiddle= styled('div')({

  display: 'flex',
  jutifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  
  width: '9rem',
  height: '9rem',
  fontSize: '.9rem',
  textAlign: 'center',
  color: 'black',

  [theme.breakpoints.down('sm')] : {
     
    height: '7rem',
    width: '7rem',
    fontSize: '.75rem',
  }

})

const CoinStyle= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '5rem',
  height: '5rem',

  [theme.breakpoints.down('sm')] : {
     
     width: '4rem',
  height: '4rem',
  }

})



export const Picture1= () => {
  return (
    <PictureStyle>
      <CoinEnds>   
        <CoinStyle src= {SilverStandard}   alt="Silver Standard" />  
          <div>2 Party <br/> Chit</div>
      </CoinEnds>
      <CoinMiddle>  
        <CoinStyle src= {SilverPersonal}   alt="Silver Personal" /> 
        <div>Personal <br/> Chit</div>
      </CoinMiddle>
      <CoinEnds>  
        <CoinStyle src= {SilverPromise}   alt="Silver Promise" />  
        <div>Promise <br/> Chit</div>
      </CoinEnds>
  </PictureStyle>
  )
}


export const Narration1= () => {
  return (
    <NarWrapper>
<NarHeader> 
              Chits are digital tokens that you <br/>
              can give or receive 
              </NarHeader>
             
                <NarDetail>
                  <div><em>For things  - </em> done by you for someone else, or
                    done by someone for you
                  </div>
                  <div><em>For promises  - </em>
                  made by you to someone else, or 
                    made by someone to you
                  </div>
                  <div>
                  <em>For personal accomplishments  - </em> given to you by you
                  </div>
                </NarDetail>

            </NarWrapper>
  )
}