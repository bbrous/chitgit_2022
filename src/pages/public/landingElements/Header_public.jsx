/* Header_public.jsx
   contains child components: 
      HeaderNav - public nav to SampleSite, Landing, etc

    parent: src/pages/public/Features.jsx

*/

import React  from 'react'

import{backgroundBlue, highlightGrey} from '../../../styles/colors'

 
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Logo from '../../../images/ChitPro_2021_logo_sm.svg'

// import HeaderLogin from './Header_login'

 

import HeaderNav from '../../navComponents/publicNav/Header_nav'

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
  width: '33%',
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
  width: '80%',

  [theme.breakpoints.down('sm')] : {
    
    width: '45%',
    
  }

})

const LoginBox= styled('div')({

  height: '100%', 
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '26%',
  marginRight: '9%',

  [theme.breakpoints.down('sm')] : {
    justifyContent: 'flex-end',
    width: '12%',
    marginRight: '2%'
  }

})


const LoginButton= styled(Button)({

 

      display: 'block',
      textTransform: 'none',
      
      border: '1px solid white' ,
      color: 'white',
      fontWeight: 'normal',
      fontSize: '.6rem',
      padding: '1px',
      
      '&:hover' : {
        backgroundColor: highlightGrey,
        textDecoration: 'none',
      }


})

// -------------------------

const Header_public = (props) => {

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

        <LoginBox>
          
          <LoginButton>Login</LoginButton>
        </LoginBox>

          </Header>
          <AppBarSpacer/>

        </HeaderWrapper>

   
 
  )
}


export default Header_public
