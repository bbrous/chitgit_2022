import React, {useState} from 'react';
import {backgroundBlue, chitBurgandy, chitSkyBlue, chitBlueDull, mediumGrey } from '../../styles/colors'
import SilverChit from '../../images/chitCoins/silver_standard.svg'
import { useParams, useNavigate } from 'react-router-dom'
import HeaderPublic from '../../pages/public/landingElements/Header_public.jsx'
import { stripWhiteSpace } from '../../app/helpers/commonHelpers'

import CopySharedChitLink from '../../common_components/CopySharedChitLink';

//--- MUI

import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const BodyWrapper= styled('div')({
  display: 'block',
  
  height: '100vh',
  overflowY: 'hidden',
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

const HeadWrapper= styled('div')({

  
  position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
    fontSize: '1.4rem',
    width: '100%',
    color: 'yellow',
 
    height: '6rem',
    padding: '1rem 0 1.5rem 0',
  
 
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }
  

  
  })

  const HeaderMsg= styled('div')({

   
    color: 'yellow',
 
    marginLeft: '6px',

    fontSize: '.9rem',
 
    
   
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }

  })

  const HeaderLink= styled('div')({

   
 
    color: 'white',
    fontSize: '.7rem',
    marginLeft: '6px',
    textDecoration: 'underline',
   
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }


}) 





  
  const ContentWrapper= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
    height: 'calc(100vh  - 2.5rem)',



    // height: '100%',
    
    // marginTop: '2.5rem',
    paddingBottom: '1rem 0',
    backgroundColor: backgroundBlue,
    overflow: 'hidden',
    fontFamily: 'Lato, sans-serif',

  
  
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const SubHeader= styled('div')({

    display: 'flex',
    
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: 'calc(100%-16px)',

    color: chitBurgandy,
    fontSize: '1rem',
    marginTop: '8px',
    
   
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'auto',
    }
  
  
  
  // backgroundColor: testColors.testGreen
  
  })

  const ContentBox= styled(Paper)({


    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  
    width: '45rem',
    height: '25rem',
    
  
 
    borderRadius: '20px',
  
  
    [theme.breakpoints.down('xs')] : {
      width: '25rem',
      height: '25rem',
    }

  
  })
// -----------------------------------------
  const ChitBox= styled('div')({


    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  
    width: 'calc(100% - 15px)',
    height: '80%',
    marginTop: '8px',
  
    backgroundColor: 'white' ,
    borderRadius: '20px',
  
  
    [theme.breakpoints.down('xs')] : {
      width: '25rem',
      height: '25rem',
    }

  
  })


  const AddWrapper = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
  border: '1px solid red',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })
  const AddHeader = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
  border: '1px solid red',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddLinks = styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
  border: '1px solid red',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddLeft = styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    backgroundColor: 'red',
  

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddRight = styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    backgroundColor: 'pink',
  

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const SentDate = styled('div')({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '.7rem',
    color: mediumGrey,
    bottom: '10px',
    left: '16px',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const ResendWrapper = styled('div')({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '.7rem',
    color: mediumGrey,
    bottom: '10px',
    right: '16px',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })
  const StyledChitImage= styled('img')({

    height: '5rem',
  
  })
  // ---------------------------

  const ErrorBox= styled(Paper)({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  
    width: '45rem',
    height: '25rem',
    color: chitBurgandy,
  
    backgroundColor: 'white' ,
    borderRadius: '20px',
  
    
    
  
    [theme.breakpoints.down('xs')] : {
      width: '25rem',
      height: '25rem',
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

  
// ============================
const ChitPreview = (props) => {
  let match = useParams()
  let navigate = useNavigate()
  let codeId = match.code

  
  const [chitInput, setChitInput] = useState('')

  const handleInput = (evt) =>{
    console.log('[Landing_page ] Input form value ', evt.target.value);
    setChitInput(evt.target.value)
  }

  const handleSubmit = (code)=>{
    let cleanCode = stripWhiteSpace(code).toLowerCase()
    navigate(`/chitPreview/${cleanCode}`)
    // alert('[ Landing_page ] I submitted ');
  }

  let ChitPreviewDisplay = (codeId)=>{
    if(codeId === 'shelby'){
      return(
        <>
        <ContentBox>
        <SentDate> date sent: Mar 14, 2022</SentDate>
        <ResendWrapper>
        <div>if you would like to show this chit to someone else</div>
          <div>Brad is cool</div>
          <CopySharedChitLink chitLink = 'Brad is cool'/>

        </ResendWrapper>
        <SubHeader>A chit has been sent to you by Brad Brous</SubHeader>
        <ChitBox>
        <StyledChitImage src= {SilverChit} alt = 'silver coin' />
        
        <div> Chit Summary:  Cris created a massive spreadsheet for me</div>

        <div>
       
            <div> action performed by:  you </div>
            <div> date performed: Mar 14, 2022</div>
        </div>

        <div>Message from Brad: </div>
        <div> Thank you for your help</div>

        <AddWrapper>
          <AddHeader>
            Add chit to your rep
          </AddHeader>

          <AddLinks>

          <AddLeft>
            <div> already a member - sign in </div>
            <div> form </div>
          </AddLeft>

          <AddRight>
            <div> not a member </div>
            <div> Join </div>
          </AddRight>
          </AddLinks>
        </AddWrapper>
     
     








        </ChitBox>
       

        </ContentBox>
        </>
      )
    }else{
      return(
        <>
         <ErrorBox>
          <div>You've enterd an invalid chit code - try again</div>
          <NoticeForm> 
              <StyledInput placeholder = 'enter code ' 
               onChange = {(evt)=> handleInput(evt)}
              /> 
              <GoButton onClick = {()=> handleSubmit(chitInput)} >Go</GoButton> 
              </NoticeForm>
           
        </ErrorBox>
        </>
      )
    }

  }

  return (
    <BodyWrapper>
      <HeaderPublic />
      <NavSpacer />
      
      <HeadWrapper> 
        <div>  Chit Git - </div>
       
        <HeaderMsg> all your deeds, dealings and doings in one place </HeaderMsg>
        <HeaderLink>Learn more </HeaderLink>

        </HeadWrapper>

      <ContentWrapper>
        {ChitPreviewDisplay(codeId)}
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default ChitPreview