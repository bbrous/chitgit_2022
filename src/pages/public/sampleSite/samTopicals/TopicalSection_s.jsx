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
  display: 'block',
  flexDirection: 'column',

  margin: '1rem',
  padding: '.5rem',
// backgroundColor: 'grey',
   
  width: '100%',

  height: '7rem',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})


// ================================================================
 

export default function TopicalSection(props) {
  return (
    <Wrapper>
      
      Section


    </Wrapper>
  );
}

 