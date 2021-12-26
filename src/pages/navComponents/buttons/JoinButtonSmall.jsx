/*---- File - LoginButton.jsx 
   login for public pages


   Contains children:  none
   parent: Header_nav - src\pages\navComponents\publicNav\Header_nav.jsx
   parent : Header_public - src\pages\public\landingElements\Header_public.jsx
*/

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { highlightGrey, darkGrey, } from '../../../styles/colors'

import Button from '@mui/material/Button'

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// --------------------------------------------
const StyledLink= styled(Link)({

  textDecoration: 'none',
  // marginBottom: '1rem'

})


const StyledJoinButton= styled(Button)({


  display: 'block',
  textTransform: 'none',
  
  border: '1px solid white' ,
  color: 'white',
  fontWeight: 'normal',
  fontSize: '.6rem',
  padding: '2px 6px',
  
  '&:hover' : {
    backgroundColor: highlightGrey,
    textDecoration: 'none',
  }



})
 
// ============================================

 
const JoinButtonSmall = (props) => { 

 
 return ( 
  <StyledLink to="/join" id='join' >
  <StyledJoinButton>Join Chit Git</StyledJoinButton>
  </StyledLink>
) 
} 
export default JoinButtonSmall 

