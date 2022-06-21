/* Features_nav.jsx
   - navigation to Features slideshows   

   contains child slideshow components: 
      SpotlightSlides
      ChitSlides
      etc. etc

    parent: Features - src/pages/public/Features

*/


import React, {Fragment} from "react"
 

import {NavLink, withRouter  } from 'react-router-dom'
import {useNavigate, useParams } from 'react-router-dom'

import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'

import{backgroundBlue, veryLightGrey} from '../../../styles/colors'


import Button from '@mui/material/Button'
 
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component





// ================================================

function FeatureNav(props) {
  let match = useParams()
  // let {page} = props

  // let location = useLocation()
  // let page = getPage(location)
// console.log('[Features Nav ] - page location : ', page)
let view
let featureId = match.id

if(!featureId){view = 'chits'}else{view = match.id}
console.log('[Features Nav page] I  is:  ', view)

  return (


    
    <Container>

      <StyledLink to="/features/overview" >

      {view !== 'overview' &&
        <NavButton
          id='overview'
        // onClick = {handlePageChange}

        >Overview </NavButton>
      }

      {view === 'overview' &&
        <NavButtonDisabled disabled
          id='overview'
        // onClick = {handlePageChange}

        >Overview </NavButtonDisabled>
      }


      </StyledLink>

      <StyledLink to="/features/twoParty" >

        {view !== 'twoParty' &&
          <NavButton
            id='twoParty'
          // onClick = {handlePageChange}

          >2 Party Chits </NavButton>
        }

        {view === 'twoParty' &&
          <NavButtonDisabled disabled
            id='twoParty'
          // onClick = {handlePageChange}

          >2 Party Chits </NavButtonDisabled>
        }


      </StyledLink>

      <StyledLink to="/features/personal" >

        {view !== 'personal' &&
          <NavButton
            id='personal'
          // onClick = {handlePageChange}

          >Personal Chits </NavButton>
        }

        {view === 'personal' &&
          <NavButtonDisabled disabled
            id='personal'
          // onClick = {handlePageChange}

          >Personal Chits </NavButtonDisabled>
        }


      </StyledLink>




      <StyledLink to="/features/spotlights" >

        {view !== 'spotlights' && 
          <NavButton
            id = 'spotlights' 
            // onClick = {handlePageChange}
          
          >Spotlights </NavButton>
        }

        {view === 'spotlights' && 
          <NavButtonDisabled disabled
            id = 'spotlights' 
            // onClick = {handlePageChange}
          
          >Spotlights </NavButtonDisabled>
        }


        </StyledLink>


 
      <StyledLink to="/features/chronicles" >

        {view !== 'chronicles' &&
          <NavButton
            id='chronicles'
          // onClick = {handlePageChange}

          >Chronicles </NavButton>
        }

        {view === 'chronicles' &&
          <NavButtonDisabled disabled
            id='chronicles'
          // onClick = {handlePageChange}

          >Chronicles </NavButtonDisabled>
        }


      </StyledLink>




      <StyledLink to="/features/extras" >

        {view !== 'extras' && 
          <NavButton
            id = 'extras' 
            // onClick = {handlePageChange}
          
          >Extra features </NavButton>
        }

        {view === 'extras' && 
          <NavButtonDisabled disabled
            id = 'extras' 
            // onClick = {handlePageChange}
          
          >extra Features </NavButtonDisabled>
        }


        </StyledLink>




  </Container>
  );
}

const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(FeatureNav)

// -----------------------------------------------------------------
const Container= styled('div')({
 
 // position: 'absolute',
 display: 'flex',
  
 justifyContent: 'space-around',
 
 width: '100%',
 height: '100%',




  [theme.breakpoints.down('sm')] : {
     
  }



// backgroundColor: testColors.testGreen

})

const NavButton= styled(Button)({

  // border: 'none',
  color: backgroundBlue,
  textTransform: 'none',
  fontWeight: '400',

  padding: '0 10px 0 10px',
  
  '& :hover': {
    backgroundColor: veryLightGrey,
    backgroundShadow: 'none'
 
  },
  [theme.breakpoints.down('sm')] : {
    fontWeight: 'bold',
    fontSize: '.65rem',
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
  fontWeight: '400',
  marginRight: '8px',
  padding: '0 10px',

  '&:disabled ' : {
    color: '#8293B8'
  },

  '& :hover': {
    backgroundColor: 'veryLightGrey',
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