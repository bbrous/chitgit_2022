/* function Chrons(props) -------------------
  Chooses Plan display options
  a) if no Chrons --  message 1
  b) if Chrons but no detailId  in route --  message 2
  c) if  Chrons AND detailId  in route--  show Plan page

------------------------------------*/

import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ selectChrons } from '../../../../app/redux/journalRedux/sam_selectors_Journal'

import ChronMain from './ChronMain_s'

// -------Material UI 


import { styled, createTheme, withStyles  } from "@mui/material/styles"
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
function Chrons(props) {

  let match = useParams()
  
 
  // const ChronId = match.params.detailId 
  // const ChronsArray = props.ChronsArray

  // console.Chron('[Chrons_s] route ChronId is', ChronId)
  // console.Chron('[Chrons_s] retrieved Chrons are', ChronsArray)



  return (
    <Wrapper>
<ChronMain />
      {/* {ChronsArray.length === 0 &&
        <NoneMessage>
          <div>You have no active or completed Chrons</div>
          <div>Create a new Chron</div>
        </NoneMessage>

      } */}

      {/* {ChronsArray.length > 0 && !ChronId &&
        <NoneMessage>
          <div>Choose a Chron to be displayed</div>
          <div>or</div>
          <div>Create a new Chron</div>
        </NoneMessage>

      } */}


      {/* {ChronId && ChronsArray.length > 0 && <ChronsMain />} */}




    </Wrapper>
  )
}

const actions = {
  // changeLastChronDisplayed,  
  // openModal, 
  // closeModal
}

const mapState = state => ({
  // display: state,
  ChronsArray: selectChrons(state),
  
})

export default connect(mapState, actions)(Chrons)
