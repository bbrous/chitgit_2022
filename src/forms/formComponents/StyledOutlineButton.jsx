import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


//  ============================
const LinkButton = styled(Button)({

 

  display: 'flex',
  textTransform: 'none',
  
  border: '1px solid #2D259C' ,
  color: '#2D259C',
  fontWeight: 'normal',
  fontSize: '.85rem',
  padding: '0 1.5rem',
  margin: '0, 4px',

  // width: '10rem',
  // '&:hover' : {
  //   // backgroundColor: chitBlueDull,
  //   textDecoration: 'none',
  //   border: '1px solid #A8BEED' ,
  //   color: '#3B30CC'

  // }


})

export default function StyledOutlineButton(props) {

  let title = props.name
  return (
    <LinkButton startIcon = {<AddIcon/>}

    
    > {title.toUpperCase()}
    </LinkButton>
  );
}
 