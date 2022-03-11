/*---- File - SharedChit.jsx 
    
status = layout only
see Read me -SharedChit.md   for details how to implement

*/

import React, {useState} from 'react';
import {backgroundBlue, chitBurgandy, chitSkyBlue, chitBlueDull, mediumGrey, veryLightGrey,  mediumLightGrey } from '../../styles/colors'

import SilverChit from '../../images/chitCoins/silver_standard.svg'
import LinkCode from '../../images/linkCode.svg'


import { useParams, useNavigate } from 'react-router-dom'
import HeaderPublic from './landingElements/Header_public.jsx'
import { stripWhiteSpace } from '../../app/helpers/commonHelpers'

import CopySharedChitLink from '../../common_components/CopySharedChitLink';

//--- MUI
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button'
import Info from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

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

const HeadWrapper= styled('div')({

  
  position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
    fontSize: '1.4rem',
    width: '100%',
    color: 'yellow',
 
    margin: '1rem 0 .25rem 0',
    padding: '0 0 1.5rem 0',
  
 
  
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
    marginLeft: '16px',
    textDecoration: 'underline',
    cursor:'pointer',
    height: '1rem',
  
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
 

  
  
  
    [theme.breakpoints.down('xs')] : {
      overflow: 'hidden',
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

    
  
 
    borderRadius: '20px',
  
  
    [theme.breakpoints.down('xs')] : {
      width: '25rem',
      height: '25rem',
    }

  
  })
// --- Summary --------
  const SummaryWrapper= styled('div')({
 

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
 width: '75%',
 padding: '6px',

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const SummaryTop= styled('div')({

    marginRight: '6px',
    fontStyle: 'italic',
    fontSize: '.9rem',

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const SummaryBottom= styled('div')({


    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const SubHeader= styled('div')({
    // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    
        width: '100$',
    
        color: chitBurgandy,
        fontSize: '1rem',
        marginTop: '8px',
        
       
      
        [theme.breakpoints.down('xs')] : {
          overflow: 'auto',
        }
      
      
      })


  // --- detail section -----

  const DetailWrapper= styled('div')({
// backgroundColor: 'red',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: ' .5rem 3rem',
 width: 'calc(75% - 6rem)',

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const StyledChitImage= styled('img')({

    margin: '0 1.5rem',
    height: '5rem',
      })

 
      const StyledLinkImage= styled('img')({
    
        height: '1rem',
      
      })

    const ActionWrapper= styled('div')({
 
// width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    fontSize: '.85rem',
   
    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const ActionLeft= styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: '6px',
    fontStyle: 'italic',
 

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  
  const ActionRight= styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '.85rem',
    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  
// --- Message ---------

  const MessageWrapper= styled('div')({
 

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '75%',

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  const MessageTop= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
    margin: '6px 0 6px 0 ',
    width: 'calc(100% - 12px)',
    fontSize: '.9rem',
    fontStyle: 'italic',
 

    [theme.breakpoints.down('xs')] : {
     
    }
  
  })

  
  const MessageBottom= styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: '1px solid #E6E7E8',
    borderRadius: '5px',
    padding: '6px',
    width: 'calc(100% - 12px)',
    fontSize: '.9rem',
    minHeight: '5rem',
    [theme.breakpoints.down('xs')] : {
     
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
  
    // backgroundColor: 'red' ,
    borderRadius: '20px',
  
  
    [theme.breakpoints.down('xs')] : {
      width: '25rem',
      height: '25rem',
    }

  
  })

  // --- Add this chit ------------

  const AddWrapper = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    fontSize: '.8rem',
borderTop: '1px solid #CFD0D1',
borderBottom: '1px solid #CFD0D1',
  marginTop: '1rem',

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
    color: chitBurgandy,
    background: veryLightGrey,
 paddingBottom: '5px',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddLinks = styled('div')({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    margin: '.3rem 0 .6rem 0',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddLeft = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
     
  

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const AddRight = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
   
  

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const LinkButton = styled(Button)({

 

    display: 'block',
    textTransform: 'none',
    
    border: '1px solid #2D259C' ,
    color: '#2D259C',
    fontWeight: 'normal',
    fontSize: '.85rem',
    padding: '0 1.5rem',
    marginTop: '.5rem',
    // '&:hover' : {
    //   // backgroundColor: chitBlueDull,
    //   textDecoration: 'none',
    //   border: '1px solid #A8BEED' ,
    //   color: '#3B30CC'
  
    // }
  
  
  })

  // --- end Add this chit -----

  const SentDate = styled('div')({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '.7rem',
    color: mediumGrey,
    top: '10px',
    right: '16px',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const ResendWrapper = styled('div')({
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '.7rem',
    color: mediumGrey,
    bottom: '10px',
    right: '16px',
    margin: '8px 0 6px 0',

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
  })

  const Resend = styled('div')({
 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     border: '1px solid grey',
     borderRadius: '5px',
     padding: '2px 5px',
     width: '100%',
 
     

      [theme.breakpoints.down('xs')] : {
         
        fontSize: '.95rem',
        padding: '0 15% 0 5%',
        
        
      }
     
  
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



// ============================
const SharedChit = (props) => {
  let match = useParams()
  let navigate = useNavigate()
  let codeId = match.code


// --- popover functions ----
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
// ---end popover functions ---

const handleClick = (evt, code) =>{
  console.log('[Landing_page ] Input form value ', evt.target.id);
  let page = evt.target.id
  navigate(`/${page}/${code}`)
}
  
  const [chitInput, setChitInput] = useState('')

  const handleInput = (evt) =>{
    console.log('[Landing_page ] Input form value ', evt.target.value);
    setChitInput(evt.target.value)
  }

  const handleSubmit = (code)=>{
    let cleanCode = stripWhiteSpace(code).toLowerCase()
    navigate(`/sharedChit/${cleanCode}`)
    // alert('[ Landing_page ] I submitted ');
  }

  const goToHome = ()=>{
     
    navigate(`/`)
    // alert('[ Landing_page ] I submitted ');
  }

  let SharedChitDisplay = (codeId)=>{

   let chitLinkMessage =  `www.ChitGit.com/sharedChit/${codeId}`

  



    if(codeId === 'shelby'){
      return(
        <>
        <ContentBox>
        <SentDate> shared: Mar 14, 2022</SentDate>

        <SubHeader>
            This chit has been sent to Mike Forry 
           from Brad Brous    
          </SubHeader>
        <ChitBox>

         
        <DetailWrapper>

        <ActionWrapper>
    <ActionLeft>chit date :   </ActionLeft>
    <ActionRight>  Mar 8, 2022</ActionRight>
 
</ActionWrapper>

<StyledChitImage src= {SilverChit} alt = 'silver coin' />

<ActionWrapper>
    <ActionLeft>performed by: </ActionLeft>
    <ActionRight>Mike Forry </ActionRight>
 
</ActionWrapper>





</DetailWrapper>
        
        <SummaryWrapper>
                <SummaryTop>Summary:   </SummaryTop>
                <SummaryBottom> Cris created a massive spreadsheet for me</SummaryBottom>
             
          </SummaryWrapper>


 

        <MessageWrapper>
                <MessageTop>Message from Brad:    </MessageTop>
                <MessageBottom> 
                  Thank you for your help
                  Thank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your helpThank you for your help
                </MessageBottom>
             
          </MessageWrapper>

        <AddWrapper>
          <AddHeader>
            Add this chit to your repo
          </AddHeader>

          <AddLinks>

          <AddLeft>
            <div> already a member  </div>
            <LinkButton 
            id = 'login'
            onClick = {(evt)=> handleClick(evt, 'shelby')}
            >Login
            </LinkButton>
          </AddLeft>

          <AddRight>
            <div> not a member </div>
            <LinkButton 
            id = 'join'
            onClick = {(evt)=> handleClick(evt, 'shelby')}
            >Join</LinkButton>
          </AddRight>
          </AddLinks>
        </AddWrapper>
     
     





        <ResendWrapper>

        <div>If you would like to show this chit to someone else</div>
          <div>Click icon to copy link and paste in IM or email</div>
          <Resend> 
          <div> {chitLinkMessage}  </div>
          <CopySharedChitLink chitLink = {chitLinkMessage}/> 
          </Resend>
        </ResendWrapper>

        
        </ChitBox>
       

        </ContentBox>
        </>
      )
    }else{
      return(
        <>
         <ErrorBox>
          <div>Invalid chit code - enter code*  
          
 


            <InfoIconWrapper
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            />
<Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'lcentereft',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
       <StyledLinkImage src= {LinkCode} alt = 'chit Link' />
            </Popover>
             
          </div>
        
          <NoticeForm> 
              <StyledInput placeholder = 'enter code ' 
               onChange = {(evt)=> handleInput(evt)}
              /> 
              <GoButton onClick = {()=> handleSubmit(chitInput)} >Go</GoButton> 
              </NoticeForm>
             
              <HomeLink onClick = {()=> goToHome()}> return to home page </HomeLink>
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
         
       
        <HeaderMsg> ChitGit - a repository for all your deeds, dealings and doings </HeaderMsg>
        <HeaderLink onClick = {()=> goToHome()}>Learn more </HeaderLink>

        </HeadWrapper>

      <ContentWrapper>
        {SharedChitDisplay(codeId)}
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default SharedChit