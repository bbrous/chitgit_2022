import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/landingActions'

import {JoinButtonNotification} from '../landingElements/Nav_buttons'

import{chitOrangeLight, chitOrange} from '../../../styles/colors'
import SilverCoin from '../../../images/chitCoins/silver_personal.svg'


import {styled, createMuiTheme}  from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button'; 


const theme = createMuiTheme(); // allows use of mui theme in styled component




// -------------------------------
const NotificationBox= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',
  minHeight: '35rem',
  // marginTop: '1rem',
  margin: '1rem auto',
  

  backgroundColor: 'white' ,
  borderRadius: '20px',



  [theme.breakpoints.down('xs')] : {
    width: '25rem',
    height: '25rem',
  }


})


const Message= styled('div')({

  display: 'block',
  width: '95%',
 

  margin: '1rem 0 2rem 1rem',

  color: 'black',
  fontSize: '.9rem',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const EMP= styled('span')({

  fontWeight: 'bold',
  fontSize: '1.1rem',


  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const TopSummary= styled('div')({

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '85%',
  marginBottom: '2rem',


  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const LeftTop= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',


  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const CoinStyle= styled('img')({

  height: '4rem',


})

const RightTop= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '70%',
  height: '4rem',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const TopTable= styled('table')({

  display: 'block',
  width: '70%',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  },


})

const LeftCell= styled('td')({
  
  paddingRight: '1.25rem',
  fontWeight: 'bold',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  },


})


const RightCell= styled('td')({
  
  paddingRight: '2rem',
   

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  },


})




// -------------------------

const DescriptionWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '60%',
  marginBottom: '2rem',

  // border: '1px solid #E6E7E8',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})


const Description= styled('div')({

  fontWeight: 'bold',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const DescriptionMessage= styled('div')({

  // fontWeight: 'bold',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})


// --------------------------------

const BreakLine= styled('div')({

  display: 'block',

  width: '90%',
  marginBottom: '1rem',

  borderBottom: '1px solid #E6E7E8',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})

const FormWrapper= styled('form')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '60%',
 

  '& textarea' : {
    backgroundColor: 'white',
    border: '1px solid #F58634',
    borderRadius: '5px',
    fontSize: '1rem',
    marginBottom: '1rem',
    padding: '.3rem',
    width: '15rem',

    [theme.breakpoints.down('sm')] : {
      fontSize: '.8rem',
      width: '15rem',
    },

    [theme.breakpoints.down('xs')] : {
      fontSize: '.9rem',
      width: '18rem',
      
    }

  },

  '& input:focus' : {

    outlineStyle: 'none',

  },

 



  [theme.breakpoints.down('sm')] : {
    // paddingBottom: 'rem'
  }


})

const InputButton= styled(Button)({



  fontSize: '.8rem',
  marginBottom: '.3rem',
  padding: '.3rem',
  outline: 'none',

  backgroundColor: chitOrange ,
  color: 'white',
 

  '&:hover' :{
    backgroundColor: chitOrangeLight,
     
     
  },


  [theme.breakpoints.down('sm')] : {
    fontSize: '.7rem',

  },
  [theme.breakpoints.down('xs')] : {
    fontSize: '.8rem',

  }


})

const ReplyMessage = styled('div')({
  marginBottom: '2rem',
  width: '60%',
  textAlign: 'center',
  // fontWeight: 'bold',

  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})


const ButtonWrapper= styled('div')({

  display: 'block',
  
  position: 'absolute',
  right: '.75rem',
  top: '.75rem',

  

  [theme.breakpoints.down('sm')] : {
    // marginTop: '1rem',
    
  },
  
  [theme.breakpoints.down('xs')] : {
    // padding: '0 15% 0 5%',
    
  },

})

const StyledLink= styled(Link)({

  textDecoration: 'none',

})




// ============================================

const NotificationDetail = (props) => {

  const handlePageChange = (evt)=>{
    evt.persist()
    // console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    props.setPage( evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     
  }

  return (

    <NotificationBox> 
      <ButtonWrapper>

        <StyledLink to="/join" id = 'join' onClick = {handlePageChange}>
          <JoinButtonNotification/>
        </StyledLink>

      </ButtonWrapper>
      
      <Message>
        <EMP>Brad Brous</EMP> has shared a chit with you
            
      </Message>

      <TopSummary>

        <LeftTop>
        <CoinStyle src= {SilverCoin}   alt="Chit Git Logo" />
        </LeftTop>

        <RightTop>
          <TopTable>
            

          <tr>
            <LeftCell>
              Date: 
            </LeftCell>
            <RightCell>
              04 June 2020
            </RightCell>
          </tr>

          <tr>
            <LeftCell>
              For deed performed by: 
            </LeftCell>
            <RightCell>
              You
            </RightCell>
            </tr>
          </TopTable>
     
        </RightTop>
        </TopSummary>
        <DescriptionWrapper>

          <Description>Chit Summary: </Description>

          <DescriptionMessage>
            Cris created a massive spreadsheet for me
            
          </DescriptionMessage>
        </DescriptionWrapper>

        <DescriptionWrapper>
          <Description>Message from Brad:</Description>
          <DescriptionMessage>Thank you for your help ... 
            it was extremely detailed 
        </DescriptionMessage>
        </DescriptionWrapper>


      <BreakLine/>

      
       
        


        <FormWrapper>

        <ReplyMessage>
        Brad requests you provide feedback or a 
testimonial if appropriate. 
        </ReplyMessage>
        <textarea>
          
        </textarea>


        <InputButton type="input">Submit </InputButton>

      </FormWrapper>

     
    </NotificationBox>
  )
}



const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(withRouter(NotificationDetail))