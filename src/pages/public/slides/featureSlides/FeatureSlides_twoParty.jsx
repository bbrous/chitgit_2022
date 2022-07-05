import React from 'react'

import { useNavigate } from 'react-router-dom'
 
import { backgroundBlue, chitBurgandy, chitOrange, mediumLightGrey, veryLightGrey } from '../../../../styles/colors';
import { Scrollbars } from 'react-custom-scrollbars';

//  Pictures ------------
import Tools from '../../../../images/slides/description/AppSlide.svg'
 
import Sections from '../../../../images/slides/features/sections_sample.jpg'
 
import SilverPromise from '../../../../images/chitCoins/silver_promise.svg'

import GoldCoin from '../../../../images/chitCoins/gold_standard.svg'
import SilverPersonal from '../../../../images/chitCoins/silver_personal.svg'
import CopperCoin from '../../../../images/chitCoins/copper_promise.svg'
import AwChit from '../../../../images/chitCoins/awChit.svg'
import ToolBar from '../../../../images/slides/features/toolBar_sample.jpg'
import LockClockIcon from '@mui/icons-material/LockClock';


import LogoIconWhite from '../../../../images/logo_icon_white.svg'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component
 
 

export default function FeatureSlides_twoParty(props) {
  return (
    <SlideContainer>
      <Header> Two Party Chits</Header>
<Scrollbars>
      <SlideContent>

          <SlideWrapper>

            <NarrationWrapper>
              <Title> What are chits</Title>
              <Narration>
                Two party chits are tokens you can give or receive for something you did for someone else or something they did for you.  Two party chits differ from personal chits in that they always involve another party.
              </Narration>
            </NarrationWrapper>

            <PictureWrapper>
              <PictureStyle>
                <CoinEnds>
                  <CoinStyle src={SilverPersonal} alt="Silver Personal" />
                  <div>Personal <br /> Chit</div>
                </CoinEnds>
                <CoinMiddle>

                  <CoinStyle src={GoldCoin} alt="gold Standard" />
                  <div>2 Party <br /> Chit</div>
                </CoinMiddle>
                <CoinEnds>
                  <CoinStyle src={SilverPromise} alt="Silver Promise" />
                  <div>Promise <br /> Chit</div>
                </CoinEnds>
              </PictureStyle>
            </PictureWrapper>

          </SlideWrapper>




          <SlideWrapper>

<NarrationWrapper>
  <Title> Ledger</Title>
  <Narration>
  You can create a chit for your ledger irrespective of whether you performed the action or the other party performed the action.
  </Narration>
</NarrationWrapper>

<PictureWrapper>




{/* ###################Change to 2 party ledger ##################### */}



<Picture src= {Sections}   alt="Chronicle Sections" /> 



{/* ######################################################### */}






</PictureWrapper>

</SlideWrapper>

 



          <SlideWrapper>

          <NarrationWrapper>
 
            <Narration>
            End - Use tabs above will more features and tool details.
            </Narration>
          </NarrationWrapper>

       

        </SlideWrapper>


         


















        </SlideContent>
      
  </Scrollbars>
    </SlideContainer>


  )// --- end main return 
} //--- end FeatureSlides_twoParty

// =========================================================

const SlideContainer= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',
  height: '100%',
  // marginBottom: '5rem',
  backgroundColor: veryLightGrey,
  borderBottom: '1px solid #E6E7E8',
  


  [theme.breakpoints.down('sm')] : {
  
  },

  [theme.breakpoints.down('sm')] : {
     
  },

  [theme.breakpoints.down('xs')] : {
     
    
  }


})

const Header= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 fontSize: '1.3rem',
 fontWeight: 'bold',
 color: chitBurgandy,
  width: '100%',
  minHeight: '4rem',
  // marginBottom: '5rem',
  background: 'white',
  marginBottom: '3px',
  


  [theme.breakpoints.down('sm')] : {
  
  },

  [theme.breakpoints.down('sm')] : {
     
  },

  [theme.breakpoints.down('xs')] : {
     
    
  }


})

const SlideContent= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '99%',
  minHeight: '15rem',
  // marginBottom: '5rem',
  background: 'white',
  borderBottom: '1px solid #E6E7E8',
  


  [theme.breakpoints.down('sm')] : {
  
  },

  [theme.breakpoints.down('sm')] : {
     
  },

  [theme.breakpoints.down('xs')] : {
     
    
  }


})

const SlideWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
flexDirection: 'column',
  width: '100vw',
  minHeight: '15rem',
  // marginBottom: '5rem',
 padding: '.5rem 0 1.5rem 0',
 
  maxWidth: '65rem',
  
  // overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column',
    padding: '.5rem 0',
    width: '96vw',
      
  }
// backgroundColor: 'green'

})



const NarrationWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '2%',
  height: '100%',
  fontSize: '.95rem',
  backgroundColor: veryLightGrey,
  borderRadius: '10px',
  marginBottom: '1.5rem',
   boxShadow : '2px 2px #A7A7A8',
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    
  }
})

const Title = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width:  '100%',
  color: chitBurgandy,
  fontSize: '1.1rem',
  marginBottom: '3px',
  textDecoration: 'underline',
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    
  }
})

const Narration = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width:  '60%',
   
   
  [theme.breakpoints.down('sm')] : {
    width: '100%',
    
  }
})

const PictureWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  jutifyContent: 'center',
  alignItems: 'center',
  width: '70%',


  // height: '100%',
  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'flex-start',
  }

})



const Picture= styled('img')({
  display: 'block',
  margin: 'auto',
  width: '24rem',
   
})







const ToolsPicture= styled('img')({
  display: 'block',
  // marginRight: '18px',
  width: '20rem',
   
})


 


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