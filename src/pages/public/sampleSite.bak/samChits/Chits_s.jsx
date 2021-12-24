/* function Chits (props) -------------------
  Chooses Plan display options
  a) if no Chits --  message 1
  b) if Chits but no detailId  in route --  message 2
  c) if  Chits AND detailId  in route--  show Plan page

  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ selectChits } from '../../../../app/redux/chitRedux/X_sam_selectors_Chits'

import ChitMain from './ChitMain_s'

// -------Material UI 


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

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
overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '2rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})
//=======




// ====================================
function Chits(props) {

  let match = useParams()
  
 
  // const ChitId = match.params.detailId 
  // const ChitsArray = props.ChitsArray

  // console.Chit('[Chits_s] route ChitId is', ChitId)
  // console.Chit('[Chits_s] retrieved Chits are', ChitsArray)



  return (
    <Wrapper>
<ChitMain />
      {/* {ChitsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed Chits</div>
          <div>Create a new Chit</div>
        </NoneMessage>

      } */}

      {/* {ChitsArray.length > 0 && !ChitId &&
        <NoneMessage>
          <div>Choose a Chit to be displayed</div>
          <div>or</div>
          <div>Create a new Chit</div>
        </NoneMessage>

      } */}


      {/* {ChitId && ChitsArray.length > 0 && <ChitsMain />} */}




    </Wrapper>
  )
}

const actions = {
  // changeLastChitDisplayed,  
  // openModal, 
  // closeModal
}

const mapState = state => ({
  // display: state,
  ChitsArray: selectChits(state),
  
})

export default connect(mapState, actions)(Chits)
