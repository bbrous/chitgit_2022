/* Sample.jsx

  Contains navigation buttons to parts of the Sample Site:
     Spotlights, Chits, Logs etc.
  
  Also contains the opening description about Bob and how
  he uses the sample site.

   contains child  components: 
      SampleNav
      Main Nav Buttons

    parent: src/app/App.js

*/


import React from 'react'

 
import SampleNav from '../navComponents/publicNav/sampleNav/Sample_nav'
import MainNavButtons from '../navComponents/publicNav/sampleNav/MainPage_NavButtons_s'




import {  backgroundBlue, chitYellow,   chitOrangeVeryLight, chitRedDark,   lightGrey,  mediumGrey} from '../../styles/colors'

 

// --- images  
import Couple  from '../../images/sampleImages/couple.jpg'
import Company  from '../../images/sampleImages/company_lg.jpg'
import Meeting  from '../../images/sampleImages/meeting_lg.jpg'
import Quinn  from '../../images/sampleImages/QuinnTerhore.jpg'

import BoardRoom  from '../../images/sampleImages/boardroom_lg.jpg'
import Deck  from '../../images/sampleImages/deck_lg.jpg'
import Wakeboard  from '../../images/sampleImages/wakeboard_lg.jpg'
import Vacation  from '../../images/sampleImages/vacation_lg.jpg'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const SampleWrapper= styled('div')({
    display: 'block',
    position: 'relative',
    backgroundColor: backgroundBlue ,
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    fontFamily: 'Lato, sans-serif',
 
    '&::-webkit-scrollbar': {
      width: '0.75em' 
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,175,239,.5)',
      border: '2px solid rgba(0,175,239,.4)',
      borderRadius: '5px'
    },

    [theme.breakpoints.down('xs')] : {
                                
      alignItems: 'center',                           
      width: '100%',
      padding: '0',
     
   
   }
 

  // backgroundColor: testColors.testGreen

})

const TopSpacer= styled('div')({
  display: 'block',
  backgroundColor: 'red' ,
  width: '100%',
  height: '2.5rem'
  // width: 90%

 
 


// backgroundColor: testColors.testGreen

})

const MainWrapper= styled('div')({

  // backgroundColor: 'black' ,

  display: 'flex',
  justfiyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',

  minHeight: '40rem',
  height: '90%',


})

const HeaderWrapper= styled('div')({

  // backgroundColor: 'black' ,

  display: 'flex',
  justfiyContent: 'center',
  alignItems: 'center',
 
  fontSize: '1.3rem', 
  color: chitYellow,

  marginTop: '1rem',
 
  height: '3rem',


})



const NavWrapper= styled('div')({

  
  // backgroundColor: 'yellow',
    display: 'flex',
  
    justifyContent: 'center',
    alignItems: 'center',
     
    width: '80%',
    
    margin: '1.5rem 2rem 1.5rem 2rem',
     
    // overflow: 'hidden',
    
  
 
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })
  

  const InspireWrapper= styled('div')({
  
   
  
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',

    width: '80%',
    minHeight: '25rem',
    maxHeight: '50rem',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '0 1.5rem 1rem 1.5rem',
    
  })


  const TabsWrapper= styled('div')({
  
   
  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
position: 'absolute',

height: '1.6rem',
width: '60%',

backgroundColor: lightGrey,
borderRadius: '0 0 7px 7px',
  
  })

  const Tab= styled('div')({
  
   
  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
 
height: '1.1rem',
width: '32.5%',
marginRight: '2px',
backgroundColor: 'white',
color: backgroundBlue,

'&:hover' : {

  backgroundColor: mediumGrey,
  color: 'white'
}


  
  
  })

  

  const StoryWrapper= styled('div')({

  
    // backgroundColor: 'yellow',
      display: 'flex',
 
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
     
      height: '95%',
      // backgroundColor: 'white',

      // borderRadius: '20px',
      marginTop: '2rem',
      

       
      overflowY: 'auto',
      overflowX: 'hidden',
      fontFamily: 'Lato, sans-serif',
   
      '&::-webkit-scrollbar': {
        width: '0.75em' 
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.6)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.6)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,175,238,.4)',
        border: '2px solid rgba(0,175,238,.4)',
        borderRadius: '5px',
        
      },
      
    
       
    
      [theme.breakpoints.down('xs')] : {
        overflow: 'auto',
      }
    
    
    
    // backgroundColor: testColors.testGreen
    
    })


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const SlidesBox = styled('div')({

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',

  backgroundColor: 'red',

  
  
  
  })



const SlideWrapper = styled('div')({

display: 'flex',
justifyContent: 'flex-start',
alignItems: 'center',

width: '100%',
minHeight: '7rem',
backgroundColor: 'white',
borderBottom: '1px solid grey',
marginBottom: '.5rem',
paddingBottom: '.5rem'




})

const SlideLeft = styled('div')({

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center' ,
  padding: '.5rem 1rem',
  fontSize: '.8rem',

  
  width: '49%',
  minHeight: '7rem',
  backgroundColor: chitOrangeVeryLight,
  


  
  })


  const SlideRight = styled('div')({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' ,
    // padding: '.5rem .5rem',

  
    width: '50%',
  
    })

 

    const PictureStyle= styled('div')({

      display: 'flex',
      jutifyContent: 'center',
      alignItems: 'center',
      
      // width: '60%',
    
    
 
    
      [theme.breakpoints.down('sm')] : {
        width: '80%',
        jutifyContent: 'center',
         
   
      }
    })
    
    
    
    
    
    
    
    
    const PhonePortraitStyle= styled('img')({
      display: 'block',
      margin: 'auto',
      height: '6.5rem',
       
    })

    

// ======================================

const Sample = () => {


 
    return (
      <SampleWrapper>

        <SampleNav />
        <TopSpacer />
        <MainWrapper>
          <HeaderWrapper>Sample Site</HeaderWrapper>

          <NavWrapper>
            <MainNavButtons />
          </NavWrapper>

          <InspireWrapper>

            <TabsWrapper>
              <Tab>Story</Tab>
              <Tab>Status</Tab>
              <Tab>Inspire</Tab>

            </TabsWrapper>
            <StoryWrapper>


              <SlideWrapper>
                <SlideLeft>
                  This example shows how Bob &#40;fictional&#41; uses Chit Git
                  to record his work and personal life.   <br />
                  The login day is -  March 14, 2020
                </SlideLeft>
                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Couple} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>
              </SlideWrapper>


              <SlideWrapper>

                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Company} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>
                <SlideLeft>
                  Bob works for a medical device company as a project manager.
                  He is  married to Mary.  Currently he is very busy with work, fixing up their first home, and spending time with friends.
                </SlideLeft>
              </SlideWrapper>

              <SlideWrapper>
                <SlideLeft>
                  At work Bob leads a team tasked with the company’s next big product.  None of the team report directly to him, but team is responsible for creating
                  everything from design to production systems to market launch.
                </SlideLeft>
                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Meeting} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>

              </SlideWrapper>


              <SlideWrapper>

                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={BoardRoom} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>
                <SlideLeft>
                  On Tuesday, he is to give a status update on the project
                  to the CEO and executive
                  management.  He is working on the presentation.
                </SlideLeft>
              </SlideWrapper>

              <SlideWrapper>
                <SlideLeft>
                  The team is doing well, but he is having problems with the teams&#39;s
                  marketing member &#40;Quinn Terhore&#41;
                </SlideLeft>
                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Quinn} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>

              </SlideWrapper>


              <SlideWrapper>

                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Deck} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>

                <SlideLeft>
                  At home, he is going to add a new deck onto his house.
                  He is going to design and build it himself with the help of a
                  couple of friends.
                </SlideLeft>
              </SlideWrapper>


              <SlideWrapper>
                <SlideLeft>
                  But it’s not all work and no play.  He loves all water activities … especially wake boarding. In fact he has come up with a new
                  wakeboard boot concept that he wants to develop.
                </SlideLeft>
                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Wakeboard} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>
              </SlideWrapper>

              <SlideWrapper>

                <SlideRight>
                  <PictureStyle>
                    <PhonePortraitStyle src={Vacation} alt="Phone Portrait" />
                  </PictureStyle>
                </SlideRight>
                <SlideLeft>
                  And he is planning a surprise vacation for Mary.
                </SlideLeft>
              </SlideWrapper>




            </StoryWrapper>
          </InspireWrapper>
        </MainWrapper>

      </SampleWrapper>
    )
  }
 

export default Sample
