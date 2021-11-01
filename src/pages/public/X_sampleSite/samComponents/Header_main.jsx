import React, {Fragment} from 'react'

import{headerGrey} from '../../../../styles/colors'

import {styled, createMuiTheme}  from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'



// import Logo from '../../../images/logo_header2.svg'
// import MainNav from '../navElements/Main_nav'
import SampleNav from '../../../navComponents/publicNav/sampleNav/Sample_nav'
import PageNav from '../../../navComponents/publicNav/sampleNav/Page_nav_s'


const theme = createMuiTheme(); // allows use of mui theme in styled component

const HeaderWrapper = styled(AppBar)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:  'flex-start',
  alignItems: 'flex-start',
  position :'fixed',
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

const HeaderLower= styled('div')({

  height: '1.7rem', 
  // background: '#DFE3ED',
  background: 'white',
  
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

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

const Greeting = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '15.5%',
  paddingLeft: '1.5%',
  color: 'black',
  fontWeight: '400',
  // backgroundColor: 'aqua',

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

const NavWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: '100%',
  // backgroundColor: 'yellow'

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






// -------------------------

const Header_main = (props) => {

  let {handlePageChange} = props


  return (
    
        <HeaderWrapper>
          <HeaderUpper>
        
            <SampleNav/>

 

        

          </HeaderUpper>

          <HeaderLower>

            
            <Greeting>Bob's Sample Site</Greeting>
            <NavWrapper> 
                {/* <MainNav 
                handlePageChange = {handlePageChange}
               /> */}
              <PageNav/>
            </NavWrapper>
            {/* <Question> ? </Question> */}
          </HeaderLower>


        </HeaderWrapper>

   

  )
}


export default Header_main
