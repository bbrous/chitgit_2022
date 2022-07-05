import React from 'react'

import { useNavigate } from 'react-router-dom'
 
import { backgroundBlue, chitBurgandy, chitOrange, mediumLightGrey, veryLightGrey } from '../../../../styles/colors';
import { Scrollbars } from 'react-custom-scrollbars';

//  Pictures ------------
import Tools from '../../../../images/slides/description/AppSlide.svg'
import Journal from '../../../../images/slides/features/journal_sample.jpg'
import Sections from '../../../../images/slides/features/sections_sample.jpg'
import GoldCoin from '../../../../images/chitCoins/gold_standard.svg'
import SilverCoin from '../../../../images/chitCoins/silver_personal.svg'
import CopperCoin from '../../../../images/chitCoins/copper_promise.svg'
import AwChit from '../../../../images/chitCoins/awChit.svg'
import ToolBar from '../../../../images/slides/features/toolBar_sample.jpg'
import LockClockIcon from '@mui/icons-material/LockClock';


import LogoIconWhite from '../../../../images/logo_icon_white.svg'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component
 
 

export default function FeatureSlides_overview(props) {
  return (
    <SlideContainer>
      <Header> Overview</Header>
<Scrollbars>
      <SlideContent>

        <SlideWrapper>

          <NarrationWrapper>
            <Title> All applications</Title>
            <Narration>
              Chit Git consists of 6 primary applications… 3 support applications and 4 key features that enhance some or all of the applications.
            </Narration>
          </NarrationWrapper>

          <PictureWrapper>
          <ToolsPicture src= {Tools}   alt="Chit Git Tools" /> 
          </PictureWrapper>

        </SlideWrapper>

        <SlideWrapper>

          <NarrationWrapper>
            <Title> Chronicle Apps</Title>
            <Narration>
            Logs, Topicals and the Journal can be thought of as different variations on your life’s chronicle.  Although they look similar, each app does something  different for you.
            </Narration>
          </NarrationWrapper>

          <PictureWrapper>
          <Picture src= {Journal}   alt="Chit Git Journl" /> 
          </PictureWrapper>

        </SlideWrapper>


        <SlideWrapper>

          <NarrationWrapper>
            <Title> Sections</Title>
            <Narration>
            What is similar about all the chronicles is that they are all divided into sections.  You can attach keywords or “people” to each section so that you can easily find them later using reports.
            </Narration>
          </NarrationWrapper>

          <PictureWrapper>
          <Picture src= {Sections}   alt="Chronicle Sections" /> 
          </PictureWrapper>

        </SlideWrapper>


        <SlideWrapper>

          <NarrationWrapper>
            <Title> Chits</Title>
            <Narration>
            What binds all the applications together are chits.  Chits can be created independently, or a given section of an application can be converted into a chit.
            </Narration>
          </NarrationWrapper>

            <PictureWrapper>
              <ChitsWrapperSmall>

                <CoinStyle src={GoldCoin} alt="Chit Coin Gold" />
                <CoinStyle src={SilverCoin} alt="Chit Coin Silver" />
                <CoinStyle src={CopperCoin} alt="Chit Coin Copper" />
                <CoinStyle src={AwChit} alt="Chit Coin Red" />
              </ChitsWrapperSmall>


              <ChitsWrapperBottom>

                <StyledToolBar src={ToolBar} alt="Chit Git Logo" />
                <div> Convert to chit - </div>
                <LogoWrapperOrange>
                  <LogoStyle src={LogoIconWhite} alt="Chit Git Logo" />
                </LogoWrapperOrange>

              </ChitsWrapperBottom>



          </PictureWrapper>

        </SlideWrapper>


        <SlideWrapper>

          <NarrationWrapper>
            <Title> Time Lock</Title>
            <Narration>
            All the apps can be edited unless they are time locked.  A time locked section or chit can NOT be edited.  This creates a unchangeable, permanent record of when it was written which can be useful in legal disputes.
            </Narration>
          </NarrationWrapper>

          <PictureWrapper>
          <ChitsWrapperBottom>

<StyledToolBar src={ToolBar} alt="Chit Git Logo" />
<div> Time Lock - </div>
<LockWrapper>
  <TimeLockIcon   alt="Chit Git Logo" />
</LockWrapper>

</ChitsWrapperBottom>
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
} //--- end FeatureSlides_overview

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








const ChitsWrapperSmall = styled('div')({
 
       
    display: 'flex',
    justifyContent: 'center',
    
     
    marginTop: '1rem',
    
    height: '3rem',
    width: '98%',
  
    
 

})

const ChitsWrapperBottom = styled('div')({
 
       
  display: 'flex',
  justifyContent: 'center',

  alignItems: 'center',

   height: '5rem',
  marginTop: '1rem',
  width: '98%',
 


})


const StyledToolBar= styled('img')({
  display: 'block',
  marginRight: '12px',
  

   
})

const LogoWrapperOrange= styled('div')({

  height: '2rem', 
  width: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8px',
  
 
borderRadius: '50px',
  backgroundColor: chitOrange,
  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


})

const LockWrapper= styled('div')({

  height: '2.25rem', 
  width: '2.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8px',
  
 
 
 
  '&:hover': {
    backgroundColor: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


})


const TimeLockIcon= styled(LockClockIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '2rem',
  color: chitOrange,
 
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CoinStyle= styled('img')({

  height: '2.5rem',

  marginRight: '14px',
})


const LogoStyle= styled('img')({

  height: '1.4rem',
  width: '1.4rem',
  // marginRight: '14px',
})

const ToolsPicture= styled('img')({
  display: 'block',
  // marginRight: '18px',
  width: '20rem',
   
})
