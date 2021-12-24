import React, {Fragment} from "react"
import { styled, createMuiTheme } from "@material-ui/core/styles"

import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'


import{testColors, chitOrangeLight, highlightGrey} from '../../../styles/colors'

import Button from '@material-ui/core/Button'
 
const theme = createMuiTheme(); // allows use of mui theme in styled component



const NavButton= styled(Button)({



  // background: testColors.testRed,
  border: 'none',
  color: chitOrangeLight,
  textTransform: 'none',
  fontWeight: 'normal',

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


  // background: testColors.testRed,
  border: 'none',
  
  textTransform: 'none',
  borderRadius: '5px 5px 0 0',
  backgroundColor: highlightGrey,
  color: chitOrangeLight,
  fontWeight: 'bold',
  marginRight: '8px',

  '&:disabled ' : {
    color: chitOrangeLight
  },

  '& :hover': {
    backgroundColor: highlightGrey,
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
  
  const handlePageChange = (evt)=>{
    evt.persist()
    // console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    props.setPage( evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // console.log('Current Page is: ', props.chits.view.viewDisplayed)
  }


let page = props.page.public.page

// console.log('[Header Nav]... props', props.page.public.page)



  return (


    
    <Fragment>

      <StyledLink to="/" >

        {page !== 'home' && 
          <NavButton
            id = 'home' 
            onClick = {handlePageChange}
          
          >Home </NavButton>
        }

        {page === 'home' && 
          <NavButtonDisabled disabled
            id = 'home' 
            onClick = {handlePageChange}
          
          >Home </NavButtonDisabled>
        }

      </StyledLink>

      <StyledLink to="/features" >

        {page !== 'features' && 
          <NavButton
            id = 'features' 
            onClick = {handlePageChange}
          
          >Features </NavButton>
        }

        {page === 'features' && 
          <NavButtonDisabled disabled
            id = 'features' 
            onClick = {handlePageChange}
          
          >Features </NavButtonDisabled>
        }


        </StyledLink>


      
    <StyledLink to="/plans" >

      {page !== 'plans' && 
        <NavButton
          id = 'plans' 
          onClick = {handlePageChange}
           
        >Plans </NavButton>
      }

      {page === 'plans' && 
        <NavButtonDisabled disabled
          id = 'plans' 
          onClick = {handlePageChange}
        
        >Plans </NavButtonDisabled>
      }


    </StyledLink>

    <StyledLink to="/main" >

      {page !== 'main' && 
        <NavButton
          id = 'main' 
          onClick = {handlePageChange}
        
        >Main </NavButton>
      }

      {page === 'main' && 
        <NavButtonDisabled disabled
          id = 'main' 
          onClick = {handlePageChange}
        
        >Main </NavButtonDisabled>
      }


      </StyledLink>
   
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