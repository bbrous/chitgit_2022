/* Header_nav.jsx
   contains child slideshow components: 
      SpotlightSlides
      ChitSlides
      etc. etc

    parent: src/app/App.js

*/


import React, {Fragment} from "react"

import {NavLink,  useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'

import {getPage} from '../../../app/helpers/locationHelper'
import{ veryLightGrey} from '../../../styles/colors'

import Button from '@mui/material/Button'
 

import { styled, createTheme } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

//--------------------------------------------------- 




// ================================================

function HeaderNav(props) {
  

  let location = useLocation()
  let page = getPage(location)
console.log('[Header_Nav ] - page location : ', page)

  return (

<Container>
    
    <Wrapper>

      <StyledLink to="/" >

        {page !== 'home' && 
          <NavButton
            id = 'home' 
            // onClick = {handlePageChange}
          
          >Home  </NavButton>
        }

        {page === 'home' && 
          <NavButtonDisabled disabled
            id = 'home' 
            // onClick = {handlePageChange}
          
          >Home </NavButtonDisabled>
        }

      </StyledLink>

      <StyledLink to="/features" >

        {page !== 'features' && 
          <NavButton
            id = 'features' 
            // onClick = {handlePageChange}
          
          >Features and Tools </NavButton>
        }

        {page === 'features' && 
          <NavButtonDisabled disabled
            id = 'features' 
            // onClick = {handlePageChange}
          
          >Features and Tools </NavButtonDisabled>
        }


        </StyledLink>


      
    <StyledLink to="/sample" >

      {page !== 'sample' && 
        <NavButton
          id = 'sample' 
          // onClick = {handlePageChange}
           
        >Sample Site </NavButton>
      }

      {page === 'sample' && 
        <NavButtonDisabled disabled
          id = 'sample' 
          // onClick = {handlePageChange}
        
        >Sample Site </NavButtonDisabled>
      }


    </StyledLink>
 
    <HiddenStyledLink to="/login" >

{page !== 'login' && 
  <NavButton
    id = 'login' 
    // onClick = {handlePageChange}
     
  >Login </NavButton>
}

{page === 'login' && 
  <NavButtonDisabled disabled
    id = 'login' 
    // onClick = {handlePageChange}
  
  >Login </NavButtonDisabled>
}


</HiddenStyledLink>
   
  </Wrapper>


  <SmallWrapper>

<StyledLink to="/" >

  {page !== 'home' && 
    <NavButton
      id = 'home' 
      // onClick = {handlePageChange}
    
    >Home  </NavButton>
  }

  {page === 'home' && 
    <NavButtonDisabled disabled
      id = 'home' 
      // onClick = {handlePageChange}
    
    >Home </NavButtonDisabled>
  }

</StyledLink>

<StyledLink to="/features" >

  {page !== 'features' && 
    <NavButton
      id = 'features' 
      // onClick = {handlePageChange}
    
    >Features </NavButton>
  }

  {page === 'features' && 
    <NavButtonDisabled disabled
      id = 'features' 
      // onClick = {handlePageChange}
    
    >Features </NavButtonDisabled>
  }


  </StyledLink>



<StyledLink to="/sample" >

{page !== 'sample' && 
  <NavButton
    id = 'sample' 
    // onClick = {handlePageChange}
     
  >Sample  </NavButton>
}

{page === 'sample' && 
  <NavButtonDisabled disabled
    id = 'sample' 
    // onClick = {handlePageChange}
  
  >Sample </NavButtonDisabled>
}


</StyledLink>

<HiddenStyledLink to="/login" >

{page !== 'login' && 
<NavButton
id = 'login' 
// onClick = {handlePageChange}

>Login </NavButton>
}

{page === 'login' && 
<NavButtonDisabled disabled
id = 'login' 
// onClick = {handlePageChange}

>Login </NavButtonDisabled>
}


</HiddenStyledLink>

</SmallWrapper>






  </Container>
  );
}

const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(HeaderNav)

// ----------------------------

const Container= styled('div')({

 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

 

})



const Wrapper= styled('div')({

 
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
//  backgroundColor: 'yellow',

  [theme.breakpoints.down('sm')] : {
     display: 'none'
 
     
  }

})

const SmallWrapper= styled('div')({
  display: 'none',
 


  [theme.breakpoints.down('sm')] : {
     
     display: 'flex',
     justifyContent: 'flex-start',
     alignItems: 'center',
    // backgroundColor: 'yellow',
     
  }

})
const NavButton= styled(Button)({

  // border: 'none',
  color: 'white',
  textTransform: 'none',
  fontWeight: '300',
  paddingRight: '10px',
  paddingLeft: '10px',
  
  '& :hover': {
    backgroundColor: '#2D259C',
    boxShadow: 'none'
 
  },
  [theme.breakpoints.down('sm')] : {
    // fontWeight: 'bold',
    fontSize: '.75rem',
    padding: '1px',
    
  },



  [theme.breakpoints.down('xs')] : {
    fontWeight: 'bold',
    fontSize: '.75rem',
    padding: '1px',
    
  },

})

const NavButtonDisabled= styled(Button)({


  
  textTransform: 'none',
 
  // backgroundColor: shadowBlue,
  borderBottom: '1px solid #8293B8',
  borderRadius: '0',
  color: 'white',
  fontWeight: '300',
  marginRight: '8px',
  padding: '0 10px',

  '&:disabled ' : {
    color: '#8293B8'
  },

  '& :hover': {
    backgroundColor: veryLightGrey,
  },
   
  [theme.breakpoints.down('sm')] : {
    fontWeight: 'bold',
    fontSize: '.75rem',
    padding: '1px',
    
  },
  [theme.breakpoints.down('xs')] : {
    fontWeight: 'Bold',
    fontSize: '.75rem',
    padding: '1px',
    
  }

})



const StyledLink= styled(NavLink)({

    textDecoration: 'none',

})

const HiddenStyledLink= styled(NavLink)({
  display: 'none',
  textDecoration: 'none',

  [theme.breakpoints.down('sm')] : {
    display: 'block'
    
  }

})