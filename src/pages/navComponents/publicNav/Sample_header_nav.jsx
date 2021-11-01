/* Sample_nav.jsx

  Top level Nav for sample site.. for navigation to Features, Home, etc
    +
   contains child  components: 
      HeaderNav - for navigation bar - Chits, Spotlights, etc.
       

    parent: Sample_nav - src/pages/navComponents/publicNav/sampleNav/Sample_nav

*/


import React, {Fragment} from "react"
 

import {NavLink, withRouter, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/landingActions'

import {getPage} from '../../../app/helpers/locationHelper'
import{ veryLightGrey } from '../../../styles/colors'

import Button from '@mui/material/Button'
 
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------



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
    fontWeight: 'bold',
    fontSize: '.85rem',
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
    fontSize: '.85rem',
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



// ================================================

function HeaderNav(props) {
  

  let location = useLocation()
  let page = 'sample'
// console.log('[Header_Nav ] - page location : ', page)

  return (


    
    <Fragment>

      <StyledLink to="/" >

        {page !== 'home' && 
          <NavButton
            id = 'home' 
            // onClick = {handlePageChange}
          
          >aHome </NavButton>
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
          
          >Features  </NavButton>
        }

        {page === 'features' && 
          <NavButtonDisabled disabled
            id = 'features' 
            // onClick = {handlePageChange}
          
          >Features and Tools </NavButtonDisabled>
        }


        </StyledLink>


      
    <StyledLink to="/sample" >



      {page === 'sample' && 
        <NavButtonDisabled disabled
          id = 'sample' 
          // onClick = {handlePageChange}
        
        >Sample Site </NavButtonDisabled>
      }


    </StyledLink>

    {/* <StyledLink to="/main/twoParty" >



      </StyledLink> */}
   
  </Fragment>
  );
}

const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(withRouter(HeaderNav))