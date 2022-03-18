import React from 'react';
 
import {veryLightGrey, chitOrangeLight, chitBlueDull} from '../../../../../styles/colors'


// --- MUI ---
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  height: '100%',

 

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const ButtonWrapper= styled('div')({
  display: 'flex',
  // fontSize: '1.2rem',
  cursor: 'pointer',
  width: '12rem',
  height: '2rem',
 
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const Previous= styled(ArrowLeftIcon)({
  display: 'flex',
  // fontSize: '1.2rem',
  cursor: 'pointer',
  width: '2rem',
  height: '2rem',
  marginRight: '3px',
  borderRadius: '30px',

  '&:hover' : {
    backgroundColor: veryLightGrey
    
  },

  '&:active' : {
  
    color: 'orange',
 
    
  },
  
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'orange'
  },

})

const Next= styled(ArrowRightIcon)({
  display: 'flex',
  // fontSize: '1.2rem',
  width: '2rem',
  height: '2rem',
  marginLeft: '3px',
  borderRadius: '30px',

  '&:hover' : {
    backgroundColor: veryLightGrey,
    
  },

  
  '&:active' : {
    color: 'orange',
     
  },

  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})
const Month = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.2rem',
  width: '11rem',
color: 'black',




  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
    
  },




})

const LinkWrapper= styled('div')({
  display: 'flex',
  
  // width: '12rem',
 
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const Link= styled('span')({
  display: 'flex',
  fontSize: '.75rem',
  cursor: 'pointer',
  margin: '0 6px',
   textDecoration: 'underline',
    color: chitBlueDull,
 
  [theme.breakpoints.down('xs')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})


// =======================================================

export default function MonthNav(props) {
  return (
    <Wrapper>
      <ButtonWrapper> <Previous/> <Next/></ButtonWrapper>
      <Month> March 2022</Month>
      <LinkWrapper>
      <Link>show today </Link> 
      <Link>  show last chit</Link>
       </LinkWrapper>
      
    </Wrapper>
  );
}

 