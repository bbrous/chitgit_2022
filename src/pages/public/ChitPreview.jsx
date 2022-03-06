import React from 'react';
import {backgroundBlue } from '../../styles/colors'
import HeaderPublic from '../../pages/public/landingElements/Header_public.jsx'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const BodyWrapper= styled('div')({
  display: 'block',
  
  height: '100vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
  fontFamily: 'Lato, sans-serif',
  backgroundColor: backgroundBlue ,


  [theme.breakpoints.down('xs')] : {
                              
    alignItems: 'center',                           
    width: '100%',
    padding: '0',
   
 
 }


})

const NavSpacer = styled('div')({
  display: 'block',
  height: '2.5rem',


  [theme.breakpoints.down('xs')] : {
 
   
 
 }


})
// ============================
const ChitPreview = (props) => {
  return (
    <BodyWrapper>
      <HeaderPublic />
      <NavSpacer />
      chit preview page
    </BodyWrapper>
  );
}

export default ChitPreview