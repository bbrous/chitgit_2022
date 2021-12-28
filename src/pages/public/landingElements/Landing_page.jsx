/* Landing_page - main pitch
   contains:
    Join
   parent: /src/public/Landing
*/

import React  from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'


import{ chitDullYellow, backgroundBlue, chitYellow, chitSkyBlue } from '../../../styles/colors'

import Logo from '../../../images/ChitPro_logo.svg'

import GoldCoin from '../../../images/chitCoins/gold_standard.svg'
import SilverCoin from '../../../images/chitCoins/silver_personal.svg'
import CopperCoin from '../../../images/chitCoins/copper_promise.svg'
import AwChit from '../../../images/chitCoins/awChit.svg'


 
import Button from '@mui/material/Button'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const LandingWrapper= styled('div')({

  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '100vw',
  
  paddingTop: '3rem',
  paddingBottom: '1rem',
  backgroundColor: backgroundBlue ,
  // overflow: 'hidden',
  

  borderBottom: '1px solid #606062',

  [theme.breakpoints.down('xs')] : {
    overflow: 'auto',
  }


})

const IconWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  width: '95%',
  
  marginTop: '3%',

 
  [theme.breakpoints.down('xs')] : {
       
  
    padding: '0 0 0 5%',
    
  }


})



const LandingContent= styled('div')({

  // backgroundColor: 'yellow',
position: 'relative',
  display: 'flex',
  
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '0 auto 0 auto',  
  maxWidth: '65rem',
  minWidth: '37rem',
  height: '30rem',
 
  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column'
    
  }

})
const WhiteBreak = styled('div')({

  // backgroundColor: 'yellow',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '1rem',
  backgroundColor: 'white',
  marginTop: '1rem',

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column'

  }

})



const LeftSide= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 ',  
  width: '48%',
  height: '100%',
   

  [theme.breakpoints.down('sm')] : {

    width: '48%',
    paddingLeft: '2%',

},

  [theme.breakpoints.down('xs')] : {
                                
     alignItems: 'center',                           
     width: '100%',
     padding: '0',
    
  
  }

})

const Center= styled('div')({
  position: 'relative',
  backgroundColor: 'black',
  display: 'block',
 
  borderRight: '1px solid #8293B8   ',
  borderLeft: '1px solid   #040952 ',

  height: '100%',
  
  [theme.breakpoints.down('xs')] : {
    width: '100%',
  }

})

const RightSide= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto 0 auto',  
  width: '48%',
  
  height: '100%',
  
  [theme.breakpoints.down('xs')] : {
    width: '100%',
  }

})

// -------- Left Side-------------------


const LogoStyle= styled('img')({

  height: '6rem',

})

const LogoTag= styled('div')({

  fontSize: '1rem',
 fontWeight: '300',
  color: 'white',
  fontStyle: 'italic',


})



const Value = styled('div')({
  display: 'block',
  color: chitYellow,
  marginTop: '1rem',

  textAlign: 'center',
  width: '83%',
  padding: '0 5%',
  fontSize: ' 1.8rem',
  fontFamily: 'Lato, sans-serif',
  fontWeight: '400',
  lineHeight: '1',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',



  },

  [theme.breakpoints.down('xs')]: {
    width: '80%',
    padding: '0 15% 0 5%',
    fontSize: '1.6rem',
    marginTop: '.2rem'
  }

})

const ListWrapper= styled('div')({
  display: 'block',
  padding: '0 auto 0 auto',

  fontSize: '.9rem',
  fontWeight: '300',
  [theme.breakpoints.down('sm')] : {
    fontSize: '.9rem',
  },

  [theme.breakpoints.down('xs')] : {
     
    fontSize: '1rem',
    padding: '0 15% 0 5%',
  }

})

const ListStyle = styled('ul' )({
 margin: '0',
  color: 'white',

 
 })

 const ButtonWrapper= styled('div')({

  display: 'flex',
  marginTop: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',

  [theme.breakpoints.down('sm')] : {
    marginTop: '1rem',
    
  },
  
  [theme.breakpoints.down('xs')] : {
    padding: '0 15% 0 5%',
    
  },

})




const Notice= styled('a')({

  display: 'block',
  width: '90%',
  textAlign: 'center',
  marginTop: '2rem',
  color: chitDullYellow,
  textDecoration: 'underline',
  fontSize: '1.1rem',
  fontWeight: '400',

    [theme.breakpoints.down('sm')] : {
       
      fontSize: '.75rem'
      
    },

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',
      
      
    }
   

})

// ------- Right Side------------------------------

const JoinButton = styled(Button)({

 

  display: 'block',
  textTransform: 'none',
  
  border: '1px solid white' ,
  color: 'white',
  fontWeight: 'normal',
  fontSize: '1.1rem',
  padding: '0 2.5rem',
  
  '&:hover' : {
    // backgroundColor: chitSkyBlue,
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#A8BEED'

  }


})

const ChitsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 1rem 0 1rem',
   
  marginTop: '1rem',
  
  height: '4.5rem',
  width: '80%',

  [theme.breakpoints.down('sm')] : {
       
    height: '3.5rem',
  },

  [theme.breakpoints.down('xs')] : {
       
    display: 'none'
    
  }

})

const ChitsWrapperSmall = styled('div')({
  display: 'none',
  [theme.breakpoints.down('xs')] : {
       
    display: 'flex',
    justifyContent: 'center',
    padding: '0 15% 0 5%',
     
    marginTop: '1rem',
    
    height: '3rem',
    width: '90%',
  
    
  }

})

const CoinStyle= styled('img')({

  height: '4rem',

  marginRight: '14px',
})




const Description = styled('div')({
  display: 'block',
  justifyContent: 'center',
  padding: '0 1rem 0 1rem',
  color: 'yellow',
  marginTop: '2rem',
  fontSize: '.9rem',
  paddingLeft: '3rem',
  paddingBottom: '.5rem',
  
  width: '80%',

  '& span': {
     
    fontWeight: 'bold'
    },
  [theme.breakpoints.down('sm')] : {
       
    marginTop: '1.5rem',
    fontSize: '.85rem',
    
  },
  [theme.breakpoints.down('xs')] : {
       
    width: '70%',
    padding: '0 15% 0 5%',
    
  }



})



const StyledLink= styled(Link)({

  textDecoration: 'none',
  marginBottom: '1rem'

})

const Free= styled('div')({

  display: 'block',
  width: '90%',
  textAlign: 'center',
  marginTop: '1.5rem',
  color: 'yellow',
 
  fontSize: '1rem',
  fontWeight: '400',

    [theme.breakpoints.down('sm')] : {
       
      fontSize: '.75rem'
      
    },

    [theme.breakpoints.down('xs')] : {
       
      fontSize: '.95rem',
      padding: '0 15% 0 5%',
      
      
    }
   

})

// ==============================

const Landing_page = (props) => {

  const handlePageChange = (evt) => {
    evt.persist()
    console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    props.setPage(evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  }

  return (



    <LandingWrapper>


      <LandingContent>

        <LeftSide>
          <LogoStyle src={Logo} alt="Chit Git Logo" />
          <LogoTag>A suite of  tools</LogoTag>

          <Value>
            Your deeds, dealings
            and doings in one place
          </Value>

          <ChitsWrapperSmall>

            <CoinStyle src={GoldCoin} alt="Chit Coin Gold" />
            <CoinStyle src={SilverCoin} alt="Chit Coin Silver" />
            <CoinStyle src={CopperCoin} alt="Chit Coin Copper" />
            <CoinStyle src={AwChit} alt="Chit Coin Red" />
          </ChitsWrapperSmall>


          <ListWrapper>
            <ListStyle>
              <li> get  better  performance reviews </li>
              <li> appreciate someone for their help </li>
              <li> resolve ongoing conflicts in your favor </li>
              <li> establish legal ownership of your ideas </li>
              <li> improve your personal work flow </li>
              <li> incrase your motivation </li>




            </ListStyle>

          </ListWrapper>




          <Notice href="/notification">  I received a chit notice </Notice>

        </LeftSide>


        {/* --------------------------------------------------------------------- */}

        <Center />

        <RightSide>

          <ButtonWrapper>

            <StyledLink to="/join" id='join' onClick={handlePageChange}>
              <JoinButton>Join</JoinButton>
            </StyledLink>

          </ButtonWrapper>

          <ChitsWrapper>

            <CoinStyle src={GoldCoin} alt="Chit Coin Gold" />
            <CoinStyle src={SilverCoin} alt="Chit Coin Silver" />
            <CoinStyle src={CopperCoin} alt="Chit Coin Copper" />
            <CoinStyle src={AwChit} alt="Chit Coin Red" />
          </ChitsWrapper>

          <Description>

            Keep a record of:
          </Description>

          <ListWrapper>
            <ListStyle>
              <li> people who you help</li>
              <li> help you receive from others </li>
              <li> your achievements in  work or in life </li>
              <li> communications with others </li>
              <li> your thoughts and ideas  </li>
              <li> where you spend your time and energy </li>



            </ListStyle>

          </ListWrapper>
          <Free>Chit Git is free</Free>

        </RightSide>


      </LandingContent>

      <IconWrapper>

      </IconWrapper>
      <WhiteBreak>      </WhiteBreak>
    </LandingWrapper>

  )
}




const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(Landing_page)
