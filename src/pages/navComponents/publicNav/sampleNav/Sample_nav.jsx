/* Sample_nav.jsx

  Top level Nav for sample site.. for navigation to Features, Home, etc
    +
   contains child  components: 
      Sample_header_nav - for navigation bar - Chits, Spotlights, etc.
       

    parent: src/pages/public/Sample.jsx

*/


import React  from 'react'

import{backgroundBlue,  highlightGrey} from '../../../../styles/colors'

import HeaderNav from '../Sample_header_nav'


import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Logo from '../../../../images/ChitPro_2021_logo_sm.svg'
import JoinButtonSmall from '../../buttons/JoinButtonSmall'
import LoginButton from '../../buttons/LoginButton'

// import HeaderLogin from './Header_login'



import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const HeaderWrapper = styled(AppBar)({
  height: '2.5rem', 
  backgroundColor: backgroundBlue,
  border: 'none'

})

const Header= styled('div')({

  height: '2.5rem', 
  marginBottom: '1rem',
 width: '100vw',
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')] : {
    height: '3rem'
    
  }
 

})

const AppBarSpacer= styled('div')({

  height: '2.5rem', 
  display: 'block',



  [theme.breakpoints.down('sm')] : {
     
 
  }

})

const LogoWrapper= styled('div')({

  height: '2.5rem', 
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '23%',
  marginLeft: '2%',

  [theme.breakpoints.down('sm')] : {
     
    width: '23%',
    height: '2rem',
    marginLeft: '1%', 
  }

})

const LogoStyle= styled('img')({

  height: '1.5rem',

  // marginRight: '14px',
})


const NavBox= styled('div')({
 
  height: '100%', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  // backgroundColor: 'black',

  [theme.breakpoints.down('sm')] : {
    
    width: '45%',
    
  }

})

const ButtonBox= styled('div')({

  height: '100%', 
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '20%',
  marginRight: '4%',
  

  [theme.breakpoints.down('sm')] : {
    justifyContent: 'flex-end',
    width: '12%',
    marginRight: '2%'
  }

})

const ButtonWrapper = styled('div')({
  display: 'flex',
   
  justifyContent: 'center',
  alignItems: 'center',
 
  marginLeft: '1rem',

  [theme.breakpoints.down('xs')]: {
    
  }
})




// -------------------------

const SampleNav = (props) => {

  let {handlePageChange} = props


  return (
    
        <HeaderWrapper position="fixed" elevation={0}>
          <Header>
        <LogoWrapper>
        <LogoStyle src= {Logo}   alt="Chit Git Logo" />
         </LogoWrapper> 
    

        <NavBox> 
          <HeaderNav 
          handlePageChange = {handlePageChange}
        
       
          />
        </NavBox>

        <ButtonBox>
          <ButtonWrapper>
          <JoinButtonSmall/>

          </ButtonWrapper>

          <ButtonWrapper>

          <LoginButton/>
          </ButtonWrapper>
          
          
           
        </ButtonBox>
        

          </Header>
          <AppBarSpacer/>

        </HeaderWrapper>

   
 
  )
}


export default SampleNav
