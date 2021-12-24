/* Main_help.jsx

  Main help page wrapper

   contains child  components: 
      Help_spotlights_s
      Help_notes_s
      etc


    parent: Modal_s - src/pages/public/sampleSite/samComponents/Modal_s

*/


import React from 'react'
import {connect} from 'react-redux'

import { veryLightGrey } from '../../../../styles/colors'


import{ openModal } from '../../../../app/redux/statusRedux/X_sam_actions_Status'

import HelpSpotlights from './Help_spotlights_s'
import HelpNotes from './Help_notes_s'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


function MainHelp(props) {

  const {helpPage} = props

  return (
    <MainWrapper>

      <div>Main Help</div>
      <div> passed page is : {helpPage} </div>
      <div> ------------------------------------------------------------ </div>
      <div> --  above is in pages/public/sampleSite/samHelpMain_help_s --</div>
      <div> ------------------------------------------------------------ </div>
      
      {helpPage === 'spotlights' &&

        <HelpSpotlights />

      }

      {helpPage === 'notes' &&
        <HelpNotes />

      }
    </MainWrapper>
  )
}

const actions = {
  // changeLastPlanDisplayed,  
  openModal, 
  // closeModal
}

const mapState = state => ({
  // display: state,
  // plansArray: selectPlans(state),
  
})

export default connect(mapState, actions)(MainHelp)
