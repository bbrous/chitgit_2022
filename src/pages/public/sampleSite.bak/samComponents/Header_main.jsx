/* Header_main.jsx
    Containes 3 sets nav links :
        top - Landing, etc, 
        bottom:   Spotlights, chits, etc - shown for web
        phone links: Spotlights, chits, etc - shown on small screens

    Contains children nav components: 
       Sample_nav - holds:
          logo and Join button...
          and public Nav - with links to Landing, Features, etc.
       Page_nav_s - links to apps (Chits, Spotlights, etc)
       Hamburger_view_nav - same as Page_nav but hidden on web, show on phone

      parent- Main_s - src/pages/public/sampleSite/Main_s
*/


import React  from 'react'

import{headerGrey, mutedBackgroundBlue} from '../../../../styles/colors'

 
import AppBar from '@mui/material/AppBar'
import InfoIcon from '@mui/icons-material/Info'


// import Logo from '../../../images/logo_header2.svg'
// import MainNav from '../navElements/Main_nav'
import SampleNav from '../../../navComponents/publicNav/sampleNav/Sample_nav'
import PageNav from '../../../navComponents/publicNav/sampleNav/Page_nav_s'
import HamburgerViewNav from '../../../navComponents/publicNav/sampleNav/Hamburger_view_nav'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const HeaderWrapper = styled('div')({
  display: 'block',
  // flexDirection: 'column',
  // justifyContent:  'flex-start',
  // alignItems: 'flex-start',
  // position :'fixed',
  backgroundColor: '#A8BEED',
 


})

const HeaderUpper= styled('div')({

  height: '2.5rem', 
  background: headerGrey,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100vw',

  [theme.breakpoints.down('sm')] : {
    // height: '2.5rem'
    
  }
 

})

//  ----- Upper Appbar  ------------------------

const LogoBox= styled('div')({

  height: '2.2rem', 
  display: 'block',
  width: '32%',
  marginLeft: '1%',

  [theme.breakpoints.down('sm')] : {
     
    width: '24%',
     
  }

})

 

const LogoStyle= styled('img')({

  height: '100%'


})


//  ----- Lower Appbar  ------------------------

const WhiteWrapper= styled('div')({

  height: '1.4rem', 
  // background: '#DFE3ED',
  background: 'white',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderBottom: '1px solid grey',
  width: '100vw',

  [theme.breakpoints.down('sm')] : {
    // position :'relative'
    display: 'none'
  }
 

})

// const MenuWrapper= styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '5%',
//   color: 'white',
//   // backgroundColor: 'red'

// })

const DarkBlueWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '1.4rem',
  width: '100%',
  padding: '0 3%',
  color: 'white',
  fontWeight: '400',
  backgroundColor: '#271F70',

  [theme.breakpoints.down('sm')] : {
    fontWeight: 'normal',
    fontSize: '.85rem',
    
    
  },
  [theme.breakpoints.down('xs')] : {
    fontWeight: 'normal',
    fontSize: '.75rem',
    padding: '1px',
    
  }

})

const Greeting = styled('div')({
  marginLeft: '5px',

  [theme.breakpoints.down('sm')] : {
    display: 'none'
    
  }

})

const HamburgerMenu= styled('div')({

  marginLeft: '5px',
  display: 'none',
  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
 

    // backgroundColor: 'yellow'
    
  }

})



const Question= styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '16%',
  marginRight: '4%',
  color: 'white',
  // backgroundColor: 'pink'

})




const Info= styled(InfoIcon)({

  height: '1rem',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// -------------------------

const Header_main = (props) => {

  let {handlePageChange} = props


  return (
    
    <HeaderWrapper>

      <HeaderUpper>

        <SampleNav />

      </HeaderUpper>

      <DarkBlueWrapper>
        <Greeting> Bob's Sample Site </Greeting>

        <HamburgerMenu> <HamburgerViewNav/></HamburgerMenu>

      </DarkBlueWrapper>

      <WhiteWrapper> <PageNav />  </WhiteWrapper>

    </HeaderWrapper>

  )
}


export default Header_main
