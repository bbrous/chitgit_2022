/*---- File - SharedChitDemo.jsx 
see Read me -SharedChit.md   for details how to implement

This file takes demo data from the Redux store 
          - rootReducer ... sharedChits


parent: SharedChit


*/

import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Scrollbars } from 'react-custom-scrollbars';



import {backgroundBlue, chitBurgandy, chitSkyBlue, chitBlueDull, mediumGrey, veryLightGrey,  mediumLightGrey, chitBurgandyDull, lightGrey } from '../../../styles/colors'
 
import LinkCode from '../../../images/linkCode.svg'
import { ISOtoTraditional } from '../../../app/helpers/dateHelper';

import { useParams, useNavigate } from 'react-router-dom'
import HeaderPublic from '../landingElements/Header_public.jsx'
import { stripWhiteSpace } from '../../../app/helpers/commonHelpers'

import { selectSharedChits } from '../../../app/redux/sharedChitRedux/sharedChitSlice';

import CopySharedChitLink from '../../../common_components/CopySharedChitLink';

import { choosePersonalCoin, chooseTwoPartyChitCoin } from '../../../app/helpers/chitHelpers';

//--- MUI
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button'
import Info from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component





// ============================
const SharedChitDemo = (props) => {
  let match = useParams()
  let navigate = useNavigate()
  let codeId = match.sharedChitId

  // --- get all sharedChits from Redux store

  let allSharedChits = useSelector(selectSharedChits)



let sharedChit = allSharedChits.find(chit => chit.sharedId === codeId)

//--- account for bad id passed

let sharedId, sharedLinkAddress, senderId, receiverId, receiverName, senderName, chitCategory, chitType, chitColor, chitDate, sharedDate, sharedTitle, message, deedPerformedBy 

sharedChit ? sharedId = sharedChit.sharedId: sharedId = ''
sharedChit ? sharedLinkAddress = sharedChit.sharedLinkAddress: sharedLinkAddress = ''
sharedChit ? senderId = sharedChit.senderId: senderId = ''
sharedChit ? receiverId = sharedChit.receiverId: receiverId = ''
sharedChit ? receiverName = sharedChit.receiverName: receiverName = ''
sharedChit ? senderName = sharedChit.senderName: senderName = ''
sharedChit ? chitCategory = sharedChit.chitCategory: chitCategory = ''
sharedChit ? chitType = sharedChit.chitType: chitType = ''
sharedChit ? chitColor = sharedChit.chitColor: chitColor = ''
sharedChit ? chitDate = sharedChit.chitDate: chitDate = ''
sharedChit ? sharedDate = sharedChit.sharedDate: sharedDate = ''
sharedChit ? sharedTitle = sharedChit.sharedTitle: sharedTitle = ''
sharedChit ? message = sharedChit.message: message = ''
sharedChit ? deedPerformedBy = sharedChit.deedPerformedBy: deedPerformedBy = ''

let styledSharedDate, styledChitDate
sharedChit ? styledSharedDate = ISOtoTraditional(sharedDate): styledSharedDate = ''
sharedChit ? styledChitDate = ISOtoTraditional(chitDate): styledChitDate =''

// -- deedPerformedBy is an id ... convert the id to a name
let performedByName
deedPerformedBy === senderId ? performedByName = senderName: performedByName = receiverName


  //  --- define which coin is displayed

  let coinAddress = chooseTwoPartyChitCoin(chitType, chitColor)
 
  const pathToCoinImages = '../../../'
  const twoPartyCoinDisplayed = pathToCoinImages + chooseTwoPartyChitCoin(chitType, chitColor)
  const personalCoinDisplayed = pathToCoinImages +choosePersonalCoin(chitColor)

// let sharedChit = allSharedChits.find(chit => chit.id === codeId)
 

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

 
  const [chitInput, setChitInput] = useState('')

  const handleInput = (evt) =>{
    console.log('[Landing_page ] Input form value ', evt.target.value);
    setChitInput(evt.target.value)
  }

  const handleSubmit = (code)=>{
    let cleanCode = stripWhiteSpace(code) 
    navigate(`/sharedChit/${cleanCode}`)
     console.log('[ Landing_page ] I submitted ', code);
  }

  const goToHome = ()=>{
     
    navigate(`/`)
    // alert('[ Landing_page ] I submitted ');
  }

  /* ----- function to display chit details------
    or Popup sayng bad shared chit code
 */
  let SharedChitDisplay = (codeId) => {

    let chitLinkMessage = sharedLinkAddress

    if (codeId === sharedId) {
      return (
        <>
          <ContentBox>
            <SentDate> shared: {styledSharedDate} </SentDate>

            {chitCategory === 'twoPartyChit' &&
              <SubHeader>
                This chit has been sent <br /><em>  to </em> {receiverName} <em> from  </em>{senderName}
              </SubHeader>
            }
            {chitCategory === 'personalChit' &&
              <SubHeader>
                This personal chit has been sent to you <br /> from {senderName}
              </SubHeader>
            }
            <ChitBox>


              <DetailWrapper>

                <ActionWrapper>
                  <ActionLeft>chit date :   </ActionLeft>
                  <ActionRight> {styledChitDate} </ActionRight>

                </ActionWrapper>


                {chitCategory === 'twoPartyChit' &&
                  <StyledChitImage src={twoPartyCoinDisplayed} alt='silver coin' />
                }

                {chitCategory === 'personalChit' &&
                  <StyledChitImage src={personalCoinDisplayed} alt='silver coin' />
                }

                {chitCategory === 'twoPartyChit' &&
                  <ActionWrapper>
                    <ActionLeft>performed by: </ActionLeft>
                    <ActionRight>{performedByName} </ActionRight>

                  </ActionWrapper>

                }

                {chitCategory === 'personalChit' &&
                  <ActionWrapper>
                    Personal chit

                  </ActionWrapper>

                }



              </DetailWrapper>

              <SummaryWrapper>
                <SummaryTop>Summary:   </SummaryTop>
                <SummaryBottom> {sharedTitle} </SummaryBottom>

              </SummaryWrapper>



 
              <MessageWrapper>
                <MessageTop>Message from {senderName}:    </MessageTop>
                
                <MessageBottom dangerouslySetInnerHTML={{ __html: message }} >

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
                      id='login'
                    >Login
                    </LinkButton>
                  </AddLeft>

                  <AddRight>
                    <div> not a member </div>
                    <LinkButton
                      id='join'
                    >Join</LinkButton>
                  </AddRight>
                </AddLinks>
              </AddWrapper>







              <ResendWrapper>

                <div>If you would like to show this chit to someone else</div>
                <div>Click icon to copy link and paste in IM or email</div>
                <Resend>
                  <div> {chitLinkMessage}  </div>
                  <CopySharedChitLink chitLink={chitLinkMessage} />
                </Resend>
              </ResendWrapper>


            </ChitBox>


          </ContentBox>
        </>
      )
    } else {
      return (
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
                  horizontal: 'centerleft',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <StyledLinkImage src={LinkCode} alt='chit Link' />
              </Popover>

            </div>

            <NoticeForm>
              <StyledInput placeholder='enter code '
                onChange={(evt) => handleInput(evt)}
              />
              <GoButton onClick={() => handleSubmit(chitInput)} >Go</GoButton>
            </NoticeForm>

            <HomeLink onClick={() => goToHome()}> return to home page </HomeLink>
          </ErrorBox>
        </>
      )
    }

  }

  return (
    <StyledScrollbars

  
    renderTrackVertical={props => <div {...props} className="track-vertical"/>}
 
    renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
    hideTracksWhenNotNeeded 
    >
    <Container>
 
      <HeaderPublic />
      <NavSpacer />
      
      <HeadWrapper> 
         
       
        <HeaderMsg> ChitGit - a repository for all your deeds, dealings and doings </HeaderMsg>
        <HeaderLink onClick = {()=> goToHome()}>Learn more </HeaderLink>

        </HeadWrapper>
  
      <ContentWrapper>
        {SharedChitDisplay(codeId)}
      </ContentWrapper>
   
 </Container>
 </StyledScrollbars>
  );
}

export default SharedChitDemo

// -----------------------------------------------------------------
 

const NavSpacer = styled('div')({
  display: 'block',
  height: '2.5rem',

 
  [theme.breakpoints.down('sm')] : {
 
    height: '1rem',
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
  height: '1.5rem',
    margin: '1rem 0 2rem 0',
   
 
 
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: '.5rem 0 .25rem 0',
      
    }
  
  
  })

  const HeaderMsg= styled('div')({

   
    color: 'yellow',
    marginLeft: '6px',
    fontSize: '1rem',

    [theme.breakpoints.down('xs')] : {
   
    }

  })

  const HeaderLink= styled('div')({

   
 
    color: 'white',
    fontSize: '1.2rem',
    marginLeft: '16px',
    textDecoration: 'underline',
    cursor:'pointer',
    
    [theme.breakpoints.down('sm')] : {
   
    }


}) 


  
  const ContentWrapper= styled('div')({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
    // height: 'calc(100vh  - 2.5rem)',

    // maxHeight: '45rem',


    // height: '100%',
    
    // marginTop: '2.5rem',
    paddingBottom: '1rem 0',
    backgroundColor: backgroundBlue,
  
  
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    
  
    }
  
  })



  const ContentBox= styled(Paper)({


    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  
    width: '45rem',
   
    borderRadius: '20px',
   
    [theme.breakpoints.down('sm')]: {
      width: '96%',
      // height: '96%',
       
    }

  
  })
// --- Summary --------
const SummaryWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '75%',
  padding: '6px',
  color: chitBurgandy,
 

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin : '.5rem 0 ',
   
  }

})

const SummaryTop = styled('div')({

  marginRight: '6px',
  fontStyle: 'italic',
  fontSize: '.9rem',
  color: mediumGrey,
  [theme.breakpoints.down('xs')]: {

  }

})

const SummaryBottom = styled('div')({


  [theme.breakpoints.down('xs')]: {

  }

})

const SubHeader = styled('div')({

  display: 'block',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'center',

  width: '100$',

  color: chitBurgandy,
  fontSize: '1rem',
  marginTop: '8px',



  [theme.breakpoints.down('xs')]: {
    overflow: 'auto',
  }


})


// --- detail section -----

const DetailWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: ' .5rem 3rem',
  width: 'calc(75% - 6rem)',
  [theme.breakpoints.down('sm')]: {

    width: '96%',
    margin: 0
  }

})

const StyledChitImage = styled('img')({

  margin: '0 1.5rem',
  height: '5rem',
})


const StyledLinkImage = styled('img')({

  height: '1rem',

})

const ActionWrapper = styled('div')({

  // width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-between',
  fontSize: '.85rem',

  [theme.breakpoints.down('xs')]: {

  }

})

const ActionLeft = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginRight: '6px',
  fontStyle: 'italic',


  [theme.breakpoints.down('xs')]: {

  }

})


const ActionRight = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.9rem',
  color: backgroundBlue,
  
  [theme.breakpoints.down('xs')]: {

  }

})


// --- Message ---------

const MessageWrapper = styled('div')({



  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '75%',

borderRadius: '5px',
  [theme.breakpoints.down('sm')]: {
    width: '96%',
 
  }

})

const MessageTop = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  margin: '0 0 6px 0 ',
  width: 'calc(100% - 12px)',
  fontSize: '.9rem',
  fontStyle: 'italic',


  [theme.breakpoints.down('sm')]: {
    borderBottom: '1px solid #E6E7E8'
  }

})


const MessageBottom = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
 
  borderRadius: '5px',
  padding: '6px',
  width: 'calc(100% - 12px)',
  fontSize: '.9rem',
  minHeight: '5rem',

 
  [theme.breakpoints.down('xs')]: {

  }

})




// -----------------------------------------
const ChitBox = styled('div')({


  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',

  width: 'calc(100% - 15px)',
  height: '80%',
  marginTop: '8px',


  borderRadius: '20px',


  [theme.breakpoints.down('sm')]: {
 
  height: '86%'
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

  [theme.breakpoints.down('xs')]: {

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

  [theme.breakpoints.down('xs')]: {

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

  [theme.breakpoints.down('xs')]: {

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



  [theme.breakpoints.down('xs')]: {

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



  [theme.breakpoints.down('xs')]: {

    fontSize: '.95rem',
    padding: '0 15% 0 5%',


  }


})

const LinkButton = styled(Button)({

  display: 'block',
  textTransform: 'none',

  border: '1px solid #2D259C',
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

  [theme.breakpoints.down('xs')]: {

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

  [theme.breakpoints.down('xs')]: {

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



  [theme.breakpoints.down('xs')]: {

    fontSize: '.95rem',
    padding: '0 15% 0 5%',


  }


})
// ---------------------------

const ErrorBox = styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',
  height: '25rem',
  color: chitBurgandy,

  backgroundColor: 'white',
  borderRadius: '20px',




  [theme.breakpoints.down('xs')]: {
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
  [theme.breakpoints.down('sm')]: {

    fontSize: '.75rem'

  },

  [theme.breakpoints.down('xs')]: {

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
  '&:hover': { backgroundColor: chitBlueDull },
  [theme.breakpoints.down('sm')]: {

    fontSize: '.75rem'

  },

  [theme.breakpoints.down('xs')]: {

    fontSize: '.95rem',
    padding: '0 15% 0 5%',


  }

})

const StyledInput = styled('input')({

  fontSize: '.75rem',
  fontWeight: '400',
  width: '10rem',

  [theme.breakpoints.down('sm')]: {

    fontSize: '.75rem'

  },

  [theme.breakpoints.down('xs')]: {

    fontSize: '.95rem',
    padding: '0 15% 0 5%',


  }


})

const InfoIconWrapper = styled(Info)({

  color: mediumLightGrey,
  fontSize: '1rem',
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

  [theme.breakpoints.down('sm')]: {

   margin: 0


  }


})

const Container = styled('div')({
 
 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 height: '100%',
 width: '100%',

  [theme.breakpoints.down('sm')]: {

 


  }


})

const StyledScrollbars = styled(Scrollbars)({
 margin : '6px',
 '& .track-vertical ' : {
    top: '2px' ,
    bottom: '2px' ,
    right: '2px' ,
    borderRadius: '3px' ,
    background: '#040952' ,

    '& .thumb-vertical' : {
        position: 'relative',
        display: 'block',
        width: '100%',
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: '#A8BEED', // changed the color
    }

}


// .view {
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     bottom: 0px;
//     overflow: scroll;
//     margin-right: -15px;
//     margin-bottom: -17px !important; // changed from -15px  (default) to -17px (native scrollbar had a portion visible) 
// }


})

