/* function Chit_View_nav_s(props) -------------------
  Chooses between ledger view or calendar view.
  Also changes the color of the tab based on which view.

  parent:   pages/public/sampleSite/samChits/personal/personalMain

------------------------------------*/

import React, {Fragment} from "react"

import {useDispatch, useSelector} from 'react-redux'

import{ chitOrangeMedium, shadowBlue, veryLightGrey} from '../../../../styles/colors'


import{ selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'
import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'



import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const NavButton= styled('div')({

  // border: 'none',
  color: shadowBlue,

  textTransform: 'none',
  fontWeight: '400',
  paddingRight: '10px',
  paddingLeft: '10px',
  cursor: 'pointer',

  '& :hover': {
    // backgroundColor: '#2D259C',
    boxShadow: 'none'
 
  },
  [theme.breakpoints.down('sm')] : {
    // fontWeight: 'bold',
    fontSize: '.85rem',
    padding: '1px',
    
  },

  [theme.breakpoints.down('xs')] : {
    // fontWeight: 'bold',
    fontSize: '.75rem',
    padding: '1px',
    
  },

})

const NavButtonDisabled= styled('div')({

  textTransform: 'none',
 
  // backgroundColor: shadowBlue,
  // borderBottom: '2px solid white',
  borderRadius: '0',
 
  fontWeight: '400',
  marginRight: '8px',
  padding: '0 10px',
  backgroundColor: chitOrangeMedium,
  color: 'white',
  '&:disabled ' : {
    color: '#F58634',
    // borderBottom: '2px solid #F58634',
  },

  '& :hover': {
    backgroundColor: veryLightGrey,
  },
   
  [theme.breakpoints.down('sm')] : {
    fontWeight: 'bold',
    fontSize: '.85rem',
    padding: '1px',
    
  },
  [theme.breakpoints.down('xs')] : {
    fontWeight: 'Bold',
    fontSize: '.75rem',
    padding: '1px',
    
  }

})


const StyledLink= styled('div')({

    textDecoration: 'none',

})

// ================================================

function PersonalChitViewNav(props) {
  const dispatch = useDispatch()
  let view = useSelector(selectStatus).view.chit.display
  //  console.log('Chit VIEW NAV state: ' , view)

  /* func handleViewChange ---------------------------------
     changes the sample/statusview/Chit - display - in store
        based on what was clicked
  */
  function handleViewChange(evt) {

    dispatch(updateStatusView({
      pageType: 'chit',
      pageView: evt.target.id
    }))

  }

  return (

    <Fragment>

      <StyledLink >

        {view !== 'ledger' &&
          <NavButton
            id='ledger'
            onClick={(evt) => handleViewChange(evt)}

          >ledger View </NavButton>
        }

        {view === 'ledger' &&
          <NavButtonDisabled
            id='ledger'
            onClick={(evt) => handleViewChange(evt)}
          >Ledger View </NavButtonDisabled>
        }


      </StyledLink>

      <StyledLink   >

        {view !== 'calendar' &&
          <NavButton
            id='calendar'
            onClick={(evt) => handleViewChange(evt)}
          >calendar View </NavButton>
        }

        {view === 'calendar' &&
          <NavButtonDisabled disabled
          >calendar View
          </NavButtonDisabled>
        }

      </StyledLink>

    </Fragment>

  )// end return
}// --- end main  func PersonalChitViewNav
  
  // ----------------------------------------------


export default PersonalChitViewNav