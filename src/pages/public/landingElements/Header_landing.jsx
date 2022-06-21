/* Header_landing.jsx
   contains child  component: 
   
       Header_nav -  navComponents/publicNav/Header_nav

    parent: Landing- src/pages/public/Landing.jsx

*/

import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'

import{backgroundBlue} from '../../../styles/colors'
 
import LoginButton from '../../navComponents/buttons/LoginButton';
import AppBar from '@mui/material/AppBar';
import { getPage } from '../../../app/helpers/locationHelper';


// import HeaderLogin from './Header_login'

import HeaderNav from '../../navComponents/publicNav/Header_nav'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component



// -------------------------

const Header_landing = (props) => {
  let location = useLocation()
  let page = getPage(location)
console.log('[Header_Landing ] - page location : ', page)

  //  let handlePageChange = props.handlePageChange

 
 
  return (

    <HeaderWrapper position="fixed" elevation={0}>
      <Header>
        <Spacer />


        <NavBox>
          <HeaderNav
            // handlePageChange={handlePageChange}


          />
        </NavBox>

        {location !== 'login' &&
          <LoginBox>
            <LoginButton />
          </LoginBox>
        }



      </Header>
      <AppBarSpacer />

    </HeaderWrapper>



  )
}


export default Header_landing

// -----------------------------------------------------------------

const HeaderWrapper = styled(AppBar)({
  height: '2.5rem', 
  backgroundColor: backgroundBlue,
  border: 'none',
 

})

const Header= styled('div')({
  // backgroundColor: 'black',
  height: '2.5rem', 
  marginBottom: '1rem',
 width: '100vw',
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')] : {
    height: '3rem',
    justifyContent: 'space-around',
 
  }
 

})

const AppBarSpacer= styled('div')({

  height: '2.5rem', 
  display: 'block',


  [theme.breakpoints.down('sm')] : {
     
 
  }

})

const Spacer= styled('div')({

  height: '2.5rem', 
  display: 'block',
  width: '33%',
  marginLeft: '2%',

  [theme.breakpoints.down('sm')] : {
     
    width: '0',
    height: '2rem',
    marginLeft: '1%', 
  }

})

const NavBox= styled('div')({
 
  height: '100%', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',

  [theme.breakpoints.down('sm')] : {
    justifyContent: 'space-around',
    width: '100%',
  

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
    display: 'none',


  }

})


