/* function Chit_View_nav_s(props) -------------------
  Chooses between twoPartyChits view or detail view.
  Also changes the color of the tab based on which view.

  parent: Chits - pages/public/sampleSite/samSpots/Chits

------------------------------------*/

import React, {Fragment} from "react"
import {NavLink, useLocation, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import{ mediumLightGrey, shadowBlue, veryLightGrey, chitLavendar} from '../../../../styles/colors'


import{ selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'
import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'



import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const Wrapper = styled('div')({

  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '.8rem',
  margin: '0 6px',
  borderBottom: '2px solid #CFD0D1',
  [theme.breakpoints.down('sm')] : {
    // fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2px 0'
    
    // width: '150px'
    
  },


})

const NavButton= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
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
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  textTransform: 'none',
 
  // backgroundColor: shadowBlue,
  // borderBottom: '2px solid white',
  borderRadius: '0',
 
  fontWeight: '400',
  marginRight: '8px',
  padding: '0 10px',
  backgroundColor: mediumLightGrey,
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


const StyledLink= styled(NavLink)({
  
width: '33%',
  textDecoration: 'none',

})

// ================================================

function ChitViewNav(props) {
  const dispatch = useDispatch()
  let match = useParams()
  let page = match.pageView
  let view = useSelector(selectStatus).view.chit.type
  //  console.log('chit VIEW NAV state: ' , view)

  /* func handleViewChange ---------------------------------
     changes the sample/statusview/chit - display - in store
        based on what was clicked
  */
  function handleViewChange(evt) {

    dispatch(updateStatusView({
      pageType: 'chit',
      pageView: 'ledger',
      type: evt.target.id
    }))

  }

  return (

    <Wrapper>

<StyledLink to="/sample/chits/twoPartyChits" >

        {page !== 'twoPartyChits' &&
          <NavButton
            id='twoPartyChits'
            onClick={(evt) => handleViewChange(evt)}

          >aTwo Party Chit  View </NavButton>
        }

        {page === 'twoPartyChits' &&
          <NavButtonDisabled
            id='twoPartyChits'
            onClick={(evt) => handleViewChange(evt)}
          >Two Party Chit View </NavButtonDisabled>
        }


      </StyledLink>

      <StyledLink to="/sample/chits/personalChits" >

        {page !== 'personalChits' &&
          <NavButton
            id='personalChits'
            onClick={(evt) => handleViewChange(evt)}

          >Personal Chit View </NavButton>
        }

        {page === 'personalChits' &&
          <NavButtonDisabled
            id='personalChits'
            onClick={(evt) => handleViewChange(evt)}
          >Personal Chit View </NavButtonDisabled>
        }


      </StyledLink>


      <StyledLink to="/sample/chits/workChits" >

{page !== 'workChits' &&
  <NavButton
    id='workChits'
    onClick={(evt) => handleViewChange(evt)}

  >Work Chit View </NavButton>
}

{page === 'workChits' &&
  <NavButtonDisabled
    id='workChits'
    onClick={(evt) => handleViewChange(evt)}
  >Work Chit View </NavButtonDisabled>
}


</StyledLink>

    </Wrapper>

  )// end return
}// --- end main  func chitViewNav
  
  // ----------------------------------------------


export default ChitViewNav