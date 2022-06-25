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


import React, {useState, useEffect} from 'react'

import { Scrollbars } from 'react-custom-scrollbars';
 
import SampleNav from '../navComponents/publicNav/sampleNav/Sample_nav'
import MainNavButtons from '../navComponents/publicNav/sampleNav/MainPage_NavButtons_s'




import {  backgroundBlue, chitYellow,   chitOrangeVeryLight, chitRedDark,   lightGrey,  mediumGrey, veryLightGrey} from '../../styles/colors'

 // --- MUI imports ---------

 
import Button from '@mui/material/Button'

// --- images  
import Couple  from '../../images/sampleImages/couple.jpg'
import Company  from '../../images/sampleImages/company_lg.jpg'
import Meeting  from '../../images/sampleImages/meeting_lg.jpg'
import Cynthia from '../../images/sampleImages/QuinnTerhore.jpg'

import BoardRoom  from '../../images/sampleImages/boardroom_lg.jpg'
import Deck  from '../../images/sampleImages/deck_lg.jpg'
import Wakeboard  from '../../images/sampleImages/wakeboard_lg.jpg'
import Vacation  from '../../images/sampleImages/vacation_lg.jpg'
import Aspire  from '../../images/sampleImages/aspire.jpg'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




// ====================================================
const Sample = () => {

  const [tabState, setTabState] = useState('story')


const handleClick = (evt)=>{
  let currentState = evt.currentTarget.id
  if(currentState === 'story'){setTabState('story')  }
  if(currentState === 'inspire'){setTabState('inspire')  }
  console.log('[ Sample.jsx ] tabState ', currentState);
  
  
}

    return (
      <SampleWrapper>

       
      
        <SampleNav />
        <MainWrapper>
      
          <HeaderWrapper>Sample Site</HeaderWrapper>
    
          <NavWrapper>
            <MainNavButtons />
          </NavWrapper>

          <InspireWrapper
          style={ tabState === 'inspire' ? { backgroundColor: 'black'} : { backgroundColor: 'white'}}
          >
       

            <TabsWrapper>
          
           
            {tabState !== 'story' && 
              <Tab   id = 'story'
              style={{ textTransform: 'none' }}
              onClick = {(evt) => (evt)= handleClick(evt)}
              >
                Sample Story
              </Tab>


            }

{tabState === 'story' && 
              <TabSelected   id = 'story'
              style={{ textTransform: 'none' }}
               
              >
                Sample Story
              </TabSelected>


            }

{tabState !== 'inspire' && 
          
              <Tab id ='inspire'  
              style={{ textTransform: 'none' }}
              onClick = {(evt) => (evt)= handleClick(evt)}
              >
                Inspiration Example
              </Tab>
}

{tabState === 'inspire' && 
              <TabSelected   id = 'inspire'
              style={{ textTransform: 'none' }}
              onClick = {(evt) => (evt)= handleClick(evt)}
              >
                 Inspiration Example
              </TabSelected>


            }

            </TabsWrapper>

            {tabState === 'story' && 


            <Scrollbars>
            <StoryWrapper>

         
              <SlideWrapper>

                
              <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Couple} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  This example shows how Bob &#40;fictional&#41; uses Chit Git
                  to record his work and personal life.   <br />
                  He joined Chit Git January 2021.  <br />The login date here is March 14, 2021
                </Narration>


              </SlideWrapper>


              <SlideWrapper>

                <Picture>

                  <PictureStyle>
                    <PhonePortraitStyle src={Company} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  Bob works for a medical device company as a project manager.
                  He is  married to Mary... an engineer.  Currently he is very busy with work, fixing up their first home, and spending time with friends.
                </Narration>
              </SlideWrapper>

              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Meeting} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  At work Bob leads a team tasked with the company’s next big product.  None of the team report directly to him, but the team is responsible for creating
                  everything from design to production systems to market launch.
                </Narration>

              </SlideWrapper>


              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={BoardRoom} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  On Tuesday, he is to give a status update on the project
                  to the CEO and executive
                  management.  He is working on the presentation.
                </Narration>

              </SlideWrapper>

              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Cynthia} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  The team is doing well, but he is having problems with the teams&#39;s
                  marketing member &#40;Cynthia Terhore&#41;
                </Narration>

              </SlideWrapper>


              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Deck} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  At home, he's decided to add a new deck onto his house.
                  He is going to design and build it himself with the help of a
                  couple of friends.
                </Narration>
              </SlideWrapper>


              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Wakeboard} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                
                <Narration>
                  He likes work, but loves water sports … especially wake boarding. In fact he has come up with a new wakeboard boot concept that he is developing with Mary. They hope to turn the idea into a lifestyle business.
                </Narration>

              </SlideWrapper>

              <SlideWrapper>

                <Picture>
                  <PictureStyle>
                    <PhonePortraitStyle src={Vacation} alt="Phone Portrait" />
                  </PictureStyle>
                </Picture>

                <Narration>
                  And he is planning a surprise vacation for Mary.
                </Narration>
              </SlideWrapper>

        


            </StoryWrapper>
            </Scrollbars>
              }
{tabState === 'inspire' && 
            <InspirationPictureWrapper>

<InspirationPicture src={Aspire} alt="Aspire" />
            </InspirationPictureWrapper>
          }
          </InspireWrapper>
        </MainWrapper>

      </SampleWrapper>
    )
  }
 

export default Sample



// -----------------------------------------------------------------

const SampleWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
  backgroundColor: backgroundBlue ,
  height: '100vh',
 
  fontFamily: 'Lato, sans-serif',
 overflowY: 'hidden',
 overflowX: 'hidden',
  [theme.breakpoints.down('xs')] : {
                              
    alignItems: 'center',                           
    width: '100%',
    padding: '0',
   
 
 }


// backgroundColor: testColors.testGreen

})

const TopSpacer= styled('div')({
display: 'block',
 
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

// backgroundColor: 'green' ,

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

 position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '80%',
  minHeight: '35rem',
  maxHeight: '50rem',
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '0 0 1rem 0',

  
  [theme.breakpoints.down('sm')] : {
       
    width: '98%',
    minHeight: '0',
    height: '40rem'
    
  }
  
})


const TabsWrapper= styled('div')({

 

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',


height: '1.6rem',
width: '80%',
[theme.breakpoints.down('sm')] : {
       
  width: '98%',
 
  
}

})

const Tab= styled(Button)({

 

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

height: '1.1rem',
width: '32.5%',
marginRight: '2px',
backgroundColor: 'white',
color: backgroundBlue,
border: '1px solid #3B30CC',
fontSize: '.8rem',

[theme.breakpoints.down('md')] : {
       
  fontSize: '.85rem',
 width: '10rem',
  
  
},

'&:hover' : {

backgroundColor: veryLightGrey,
border: '1px solid #4B6599',



}

})

const TabSelected= styled(Button)({

 

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

height: '1.1rem',
width: '32.5%',
marginRight: '2px',
backgroundColor: backgroundBlue,
color: 'white',
border: '1px solid #3B30CC',
cursor: 'default',

[theme.breakpoints.down('md')] : {
       
  fontSize: '.85rem',
 width: '10rem',
  
  
},
'&:hover' : {

  backgroundColor: backgroundBlue,
color: 'white'
}

})



const StoryWrapper= styled('div')({


  // backgroundColor: 'yellow',
    display: 'flex',

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
 
    height: '94%',
    width: '100%',
    // backgroundColor: 'red',

    // borderRadius: '20px',
    marginTop: '.25rem',
    padding: '1rem',
    borderTop: '1px solid grey',
 
    
  
     
  
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
  flexDirection: 'row-reverse',
width: '100%',

backgroundColor: 'white',
borderBottom: '1px solid grey',
marginBottom: '.5rem',
paddingBottom: '.5rem',

[theme.breakpoints.down('sm')] : {
 
  padding: '.5rem 0',
  width: '96vw',
  flexDirection: 'column-reverse',
  
}


})

const Narration = styled('div')({

display: 'flex',
justifyContent: 'flex-start',
alignItems: 'center' ,
padding: '.5rem 1rem',
fontSize: '.8rem',


width: '49%',
minHeight: '7rem',
backgroundColor: chitOrangeVeryLight,

[theme.breakpoints.down('sm')] : {
  width: '96%',
  marginBottom: '5px', 
   

}


})


const Picture = styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center' ,
  // padding: '.5rem .5rem',


  width: '50%',

  [theme.breakpoints.down('sm')] : {
    width: '80%',
    jutifyContent: 'center',
     

  }

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
    height: '9.5rem',
     
    [theme.breakpoints.down('sm')] : {
      height: '9.5rem',
      jutifyContent: 'center',
       
 
    }
  })

  
  const InspirationPictureWrapper= styled('div')({

    display: 'flex',
    jutifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
   
    
    // width: '60%',
  
  

  
    [theme.breakpoints.down('sm')] : {
      width: '100%',
      jutifyContent: 'center',
       
 
    }
  })

    
  const InspirationPicture= styled('img')({
    display: 'block',
    
     width: '100%'
     
  })

// ======================================
