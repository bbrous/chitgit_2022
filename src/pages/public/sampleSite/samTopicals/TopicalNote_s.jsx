import React  from 'react'
import { useSelector} from 'react-redux'

import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey, chitYellowMedium} from '../../../../styles/colors'

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
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '6px 6px',

  flexWrap: 'wrap',
backgroundColor: chitYellowMedium,
   
  width: '13rem',
  fontSize: '.85rem',
  height: '14rem',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})


// ================================================================
 

export default function TopicalNote(props) {

  const {noteContent, noteDate, noteKeywordArray, peopleArray} = props.data

  return (
    <Wrapper>
      
      <div  dangerouslySetInnerHTML={{__html: noteContent}}/>


    </Wrapper>
  );
}

 