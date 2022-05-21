/*---- File - SharedChit.jsx 

see Read me -SharedChit.md   for details how to implement

This file holds a choice of 4 actions: 
   1. enter a code
   2. view a sample of a shared chit
   3. go to Sample site
   4. return to home page

children:  ./sharedFolder/SharedChitSample
          ./sharedFolder/SharedChitDemo

*/

import React, {useState} from 'react';
import {backgroundBlue, chitBurgandy, chitSkyBlue, chitBlueDull, mediumGrey, veryLightGrey,  mediumLightGrey, chitBurgandyDull, lightGrey } from '../../styles/colors'

import SilverChit from '../../images/chitCoins/silver_standard.svg'
import LinkCode from '../../images/linkCode.svg'


import { useParams, useNavigate } from 'react-router-dom'
import HeaderPublic from './landingElements/Header_public.jsx'
import { stripWhiteSpace } from '../../app/helpers/commonHelpers'

import CopySharedChitLink from '../../common_components/CopySharedChitLink';
import SharedChitSample from './sharedFolder/SharedChitSample'
import SharedChitDemo from './sharedFolder/SharedChitDemo'

//--- MUI
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button'
import Info from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component





// ============================
const SharedChit = (props) => {
  let match = useParams()
  let navigate = useNavigate()
  let codeId = match.sharedChitId


  const [chitInput, setChitInput] = useState('')
  const handleInput = (evt) => {
    console.log('[SharedChit ] I submitted ');
    setChitInput(evt.target.value)
 
  }

  const handleSubmit = (code) => {
    let cleanCode = stripWhiteSpace(code) 
    navigate(`/sharedChit/${cleanCode}`)
    // alert('[ Landing_page ] I submitted ');
  }

  const handelPageChange = (evt)=>{
    console.log('[ Shared CHit ] myVar ', evt.currentTarget.id);
    const targetPage = evt.currentTarget.id
    if(targetPage === 'sample'){ 
    navigate(`/sharedChit/${targetPage}`)
    }
    if(targetPage === 'sampleSite'){ 
      navigate(`/sample`)
      }

      if(targetPage === 'home'){ 
        navigate(`/`)
        }

  }

  return (
    <BodyWrapper>
      <HeaderPublic />
      <NavSpacer />
 

      <ContentContainer>
        {!codeId &&
          <BlankWrapper>

            <CodeInputWrapper>
              <Question>
                <div>
                If you received a chit in an email or text message,
                </div>
                <div>  enter the code here</div>
               

              </Question>
              <Action>
                <NoticeForm>
                  <StyledInput placeholder='enter code '
                    onChange={(evt) => handleInput(evt)}
                  />
                  <GoButton onClick={() => handleSubmit(chitInput)} >Go</GoButton>
                </NoticeForm>
              </Action>

            </CodeInputWrapper>

            <OrWrapper> or </OrWrapper>


            <SegmentWrapper>
 
              <Action>
                 
                 <StyledButton
id = 'sample'
variant="contained"
color="primary"
style={{
  textTransform: 'none',

}}
onClick={(evt) => handelPageChange(evt)}

>
View shared chit sample
</StyledButton>
                 
                 </Action>
            </SegmentWrapper>

<OrWrapper> or </OrWrapper>

            <SegmentWrapper>

              <Action>

                <StyledButton
                  id = 'sampleSite'
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: 'none',

                  }}
                 onClick={(evt) => handelPageChange(evt)}

                >
                  View the sample Chit Git site
                </StyledButton>

              </Action>
            </SegmentWrapper>

            <OrWrapper> or </OrWrapper>

            <SegmentWrapper>
              
              <Action>

                <StyledButton
                  id ='home'
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: 'none',

                  }}
                  onClick={(evt) => handelPageChange(evt)}

                >
                  Return to Home Page
                </StyledButton>

              </Action>
            </SegmentWrapper>



          </BlankWrapper>
        }

        {codeId === 'sample' &&
          
            <SharedChitSample />
         
        }

        {codeId && codeId !== 'sample' &&
         <SharedChitDemo/>
            
       
        }
      </ContentContainer>
    </BodyWrapper>
  );
}

export default SharedChit

// -----------------------------------------------------------------


const BodyWrapper= styled('div')({
  display: 'block',
  
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  fontFamily: 'Lato, sans-serif',
  backgroundColor: backgroundBlue ,

  [theme.breakpoints.down('xs')] : {
                              
    alignItems: 'center',                           
    width: '100%',
    padding: '0',
 
 }
})

const NavSpacer = styled('div')({
  display: 'block',
  height: '2.5rem',


  [theme.breakpoints.down('xs')] : {
 
  
 }

})
 


  
  const ContentContainer= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
    height: 'calc(100vh  - 2.5rem)',



    // height: '100%',
    
    // marginTop: '2.5rem',
    padding: '1rem 0',
    backgroundColor: backgroundBlue,
    overflow: 'hidden',
 

  
  
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const BlankWrapper= styled(Paper)({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
   width: '50%',
   minHeight: '12rem',
   padding: '1rem 0',
    // marginTop: '2.5rem',
    paddingBottom: '1rem 0',
    backgroundColor: 'white',
    overflow: 'hidden',
 
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const CodeInputWrapper= styled(Paper)({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    padding: '1rem',
    marginBottom: '8px',

    backgroundColor: veryLightGrey,


    // marginTop: '2.5rem',
 
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const SegmentWrapper= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    padding: '6px',
    marginBottom: '8px',

    backgroundColor: 'white',


    // marginTop: '2.5rem',
 
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })


  const Question= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    textAlign: 'center',
    lineHeight: '1rem',
    marginBottom: '8px',
 
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const Action = styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
 
    // marginTop: '2.5rem',
 
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })


//  --- Buttons -----------


const OrWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   width: '100%',
   height: '1.25rem',
   marginBottom: '6px',
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
   
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey,
  }

})


const NoticeForm = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  // backgroundColor: 'red',

  color: backgroundBlue,
  
  fontSize: '1rem',
  fontWeight: '400',
  marginTop: '6px',
  marginLeft: '22px',
    [theme.breakpoints.down('sm')] : {
       
      fontSize: '.75rem'
      
    },

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',
      
      
    }
   

})

const GoButton = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
 
 border: `1px solid ${chitSkyBlue}`,
 borderRadius: '50px',
backgroundColor: chitSkyBlue,
 color: 'white',
  
  fontSize: '.6rem',
  width: '1.2rem',
  height: '1.2rem',
  padding: '3px',
  fontWeight: '400',
marginLeft: '6px',
cursor: 'pointer',
'&:hover': {backgroundColor: chitBlueDull},
    [theme.breakpoints.down('sm')] : {
       
      fontSize: '.75rem'
      
    },

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',

      
    }
   
})

const StyledInput= styled('input')({

  fontSize: '.75rem',
  fontWeight: '400',
width: '10rem',

    [theme.breakpoints.down('sm')] : {
       
      fontSize: '.75rem'
      
    },

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',
      
      
    }
   

})

const InfoIconWrapper= styled(Info)({

  color: mediumLightGrey,
  fontSize : '1rem',
  marginLeft: '8px',


})

const HomeLink = styled('div')({
  position: 'absolute',
  bottom: '1rem',
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.9rem',

  marginTop: '3rem',
  textDecoration: 'underline',
color: 'blue',
 
cursor: 'pointer',

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',
      
      
    }
   

})

