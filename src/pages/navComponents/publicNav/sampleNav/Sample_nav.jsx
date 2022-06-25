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


        

          </Header>
          <AppBarSpacer/>

        </HeaderWrapper>

   
 
  )
}


export default SampleNav

// -----------------------------------------------------------------

const HeaderWrapper = styled('div')({
  height: '2.5rem', 
 
  border: 'none',
  width: '100%',
})

const Header= styled('div')({

  height: '2.5rem', 
  marginBottom: '1rem',
 width: '100vw',
  display: 'flex',

  justifyContent: 'flex-start',
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
 
  width: '23%',
  marginLeft: '2%',
 
  [theme.breakpoints.down('sm')] : {
     
    width: '23%',
    height: '2.5rem',
    marginLeft: '3%', 
  }

})

const LogoStyle= styled('img')({

  height: '1.5rem',

  [theme.breakpoints.down('sm')] : {
 
     height: '1.25rem',
  }
})


const NavBox= styled('div')({
 
  height: '100%', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  

  [theme.breakpoints.down('sm')] : {
    
    width: '70%',
    
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

const LoginButtonWrapper = styled('div')({
  display: 'flex',
   
  justifyContent: 'center',
  alignItems: 'center',
 
  marginLeft: '1rem',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})





