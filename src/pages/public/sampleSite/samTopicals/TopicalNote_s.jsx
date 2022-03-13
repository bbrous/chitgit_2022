import React  from 'react'
import { useSelector} from 'react-redux'

import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'

import Edit_icon from '../samComponents/Edit_icon_s'
import Delete_icon from '../samComponents/Delete_icon_s'

//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'
 
 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',

  flexWrap: 'wrap',
backgroundColor: 'yellow',
   
  width: '100%',

  height: '12rem',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})


// ================================================================
 

export default function TopicalNote(props) {
  return (
    <Wrapper>
      
      Note


    </Wrapper>
  );
}

 