import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import {styled, createTheme}  from '@mui/material/styles'
 

const theme = createTheme(); // allows use of mui theme in styled component

// ----------------------
const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
 opacity: '.6', 
  height: '100vh',
  width: '100vw',


})

export default function Loading() {
  return (

    <Wrapper> 
    
      <CircularProgress color ='primary' />
   
    </Wrapper>
  );
}
