/*---- File - SharedChitSample.jsx 
see Read me -SharedChit.md   for details how to implement

static file - shows a sample of a chit


parent: SharedChit


*/
import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import {backgroundBlue, chitBurgandy, mediumGrey, veryLightGrey,   lightGrey, chitBurgandyDull } from '../../../styles/colors'

import SilverChit from '../../../images/chitCoins/silver_standard.svg'
import LinkCode from '../../../images/linkCode.svg'

//--- MUI
 
import Button from '@mui/material/Button'
 
import Paper from '@mui/material/Paper';
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component


// ============================
const SharedChitSample = (props) => {
 
  let navigate = useNavigate()


  const goToHome = () => {

    navigate(`/`)
    // alert('[ Landing_page ] I submitted ');
  }


  const handelPageChange = (evt) => {
    console.log('[ Shared CHit ] myVar ', evt.currentTarget.id);
    const targetPage = evt.currentTarget.id
    if (targetPage === 'home') {
      navigate(`/`)
    } else {
      navigate(`/${targetPage}`)
    }


  }
  return (
    <>


      <HeadWrapper>


        <HeaderMsg> ChitGit - a repository for all your deeds, dealings and doings </HeaderMsg>
        <HeaderLink onClick={() => goToHome()}>Learn more </HeaderLink>

      </HeadWrapper>

      <TitleWrapper> A Shared Chit Sample</TitleWrapper>


      <ContentWrapper>


        <ContentBox>
          <SentDate> shared: Mar 14, 2021</SentDate>

          <SubHeader>
            This chit has been sent to Jerry G
            from Bob
          </SubHeader>

          <ChitBox>


            <DetailWrapper>

              <ActionWrapper>
                <ActionLeft>chit date :   </ActionLeft>
                <ActionRight>  Mar 8, 2022</ActionRight>

              </ActionWrapper>

              <StyledChitImage src={SilverChit} alt='silver coin' />

              <ActionWrapper>
                <ActionLeft>performed by: </ActionLeft>
                <ActionRight>Jerry G </ActionRight>

              </ActionWrapper>





            </DetailWrapper>

            <SummaryWrapper>
              <SummaryTop>Summary:   </SummaryTop>
              <SummaryBottom> Thanks for your help</SummaryBottom>

            </SummaryWrapper>




            <MessageWrapper>
              <MessageTop>Message from Bob B:    </MessageTop>
              <MessageBottom>
                <div>Jerry </div> I want to thank you for your help on the deck last week.   I couldn't have done it without you ... nor would I have wanted to.  <div> I owe you big guy.</div>
              </MessageBottom>

            </MessageWrapper>

            <EmailMessageWrapper>
              <div> This is an example of a Shared Chit taken from the Sample Site. <br /><br /> If you share a chit you create - you are only given a link which you can paste into a personal email or text message that you can then send to the other person. The code in the link is what allows the other person to see a shared chit like this one. </div>
              <div> Chit Git does not collect your contact information. </div>

            </EmailMessageWrapper>

          </ChitBox>

          <ButtonWrapper>

            <StyledButton
              id='join'
              variant="contained"
              color="primary"
              style={{
                textTransform: 'none',

              }}
              onClick={(evt) => handelPageChange(evt)}

            >
              Join Chit Git
            </StyledButton>

            <StyledButton
              id='sample'
              variant="contained"
              color="primary"
              style={{
                textTransform: 'none',

              }}
              onClick={(evt) => handelPageChange(evt)}

            >
              View Sample Site
            </StyledButton>

            <StyledButton
              id='home'
              variant="contained"
              color="primary"
              style={{
                textTransform: 'none',

              }}
              onClick={(evt) => handelPageChange(evt)}

            >
              Return to Home Page
            </StyledButton>


          </ButtonWrapper>




        </ContentBox>



      </ContentWrapper>
    </>
  );
}

export default SharedChitSample

// -----------------------------------------------------------------



const TitleWrapper = styled('div')({


  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '1.4rem',
  width: '100%',
  color: 'white',

  margin: '1rem 0 .25rem 0',
  padding: '0 0 1.5rem 0',



  [theme.breakpoints.down('sm')]: {
    margin: '0  0 .25rem 0',
  }



})


const HeadWrapper = styled('div')({


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



  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    margin: '.5rem 0 .25rem 0',
  }



})

const HeaderMsg = styled('div')({


  color: 'yellow',
  marginLeft: '6px',
  fontSize: '.9rem',

  [theme.breakpoints.down('sm')]: {

  }

})

const HeaderLink = styled('div')({



  color: 'white',
  fontSize: '.7rem',
  marginLeft: '16px',
  textDecoration: 'underline',
  cursor: 'pointer',
  height: '1rem',

  [theme.breakpoints.down('xs')]: {
    overflow: 'auto',
  }


})






const ContentWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  height: 'calc(100vh  - 2.5rem)',



  // height: '100%',

  // marginTop: '2.5rem',
  paddingBottom: '1rem 0',
  backgroundColor: backgroundBlue,
 

  maxHeight: '35rem',


  [theme.breakpoints.down('sm')]: {
    width: '100%',
  

  }



  // backgroundColor: testColors.testGreen

})



const ContentBox = styled(Paper)({


  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',




  borderRadius: '20px',


  [theme.breakpoints.down('sm')]: {
    width: '96%',
    height: '96%',
     
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
    width: '96%',
    height: '70%',

  }

})

const SubHeader = styled('div')({
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '96%',

  color: chitBurgandy,
  fontSize: '1rem',
  marginTop: '8px',
  paddingLeft: '4px',

  [theme.breakpoints.down('sm')]: {
    margin: '8px',
    fontSize: '.85rem',
  }


})


const SummaryTop = styled('div')({

  marginRight: '6px',
  fontStyle: 'italic',
  fontSize: '.9rem',

  [theme.breakpoints.down('sm')]: {
    
  }

})

const SummaryBottom = styled('div')({


  [theme.breakpoints.down('sm')]: {
    fontSize: '.85rem' ,
  }

})




// --- detail section -----

const DetailWrapper = styled('div')({
  // backgroundColor: 'red',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: ' .5rem 3rem',
  width: 'calc(75% - 6rem)',

  [theme.breakpoints.down('sm')]: {

    width: '96%'
  }

})

const StyledChitImage = styled('img')({

  margin: '0 1.5rem',
  height: '5rem',
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

  [theme.breakpoints.down('sm')]: {
    width: '96%',
 
  }

})

const MessageTop = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  margin: '6px 0 6px 0 ',
  width: 'calc(100% - 12px)',
  fontSize: '.9rem',
  fontStyle: 'italic',
 
  [theme.breakpoints.down('sm')]: {

  }

})


const MessageBottom = styled(Paper)({
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


  [theme.breakpoints.down('sm')]: {
    width: '98%',
    fontSize: '.8rem',
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

  // backgroundColor: 'red' ,
  borderRadius: '20px',


  [theme.breakpoints.down('xs')]: {
    width: '25rem',
    height: '25rem',
  }


})

// --- Add this chit ------------

const EmailMessageWrapper = styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '60%',
  fontSize: '.65rem',
  padding: '5px',

  margin: '1rem 0',
  color: mediumGrey,
  backgroundColor: veryLightGrey,

  [theme.breakpoints.down('sm')]: {
 
    width: '96%',
    padding: '0 15% 0 5%',


  }


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

const ButtonWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '70%',
  

  margin: '1rem 0',
  color: mediumGrey,

  [theme.breakpoints.down('sm')]: {

    width: '96%',
     


  }


})
const StyledButton = styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',

  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover': {
    backgroundColor: lightGrey,
  },

  [theme.breakpoints.down('sm')]: {

    width: '96%',
    fontSize: '.6rem'


  }

})







