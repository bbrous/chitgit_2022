/* function Reports(props) -------------------


##########   IMPORTANT !!! ###########################################

 here is where you can clean up keywords and people


delete a person - will kill everything with that person in it -- , chits, logs, everything

delete a keyword - eliminates serach term everywhere it is used


##########   IMPORTANT !!! ###########################################




------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {chitBright, chitBurgandy, darkGrey, mediumGrey, veryLightGrey} from '../../../../styles/colors'


// -------Material UI 
 

import Paper from '@mui/material/Paper'

import { styled, createTheme, withStyles  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component






// ====================================
export default function Reports(props) {

  let match = useParams()
  
 



  return (
    <Wrapper>
 <MessageWrapper>
Reports are a premium offering not shown in Sample. <br />
Reports allow you to filter and sort all chits, 
logs, topicals and journal entry to create custom 
pdf printable reports of your data that you can save and share.  
 
 </MessageWrapper>

    </Wrapper>
  )
}

// -----------------------------------------------------------------
const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  marginTop: '4rem',
overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const MessageWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '60%',
  minHeight: '12rem',
 border: '1px solid #E6E7E8',
textAlign: 'justified',
padding: '2rem',
color: darkGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})


//=======
