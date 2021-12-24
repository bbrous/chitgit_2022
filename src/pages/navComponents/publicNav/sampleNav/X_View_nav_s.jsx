import React, {Fragment, useState} from "react"
import { styled, createMuiTheme } from "@material-ui/core/styles"

import {NavLink, withRouter, useLocation} from 'react-router-dom'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import {connect} from 'react-redux'
// import{setPage} from '../../../app/redux/actions/landingActions'

// import {getPage} from '../../../app/helpers/locationHelper'
import{ chitOrangeLight, chitOrangeMedium, highlightGrey, lightGrey, shadowBlue, veryLightGrey} from '../../../../styles/colors'


// import{ 
//   sample_selectLastSpotlight
// } from '../../../../app/redux/statusRedux/sam_selectors_Status'
import{ selectStatus } from '../../../../app/redux/statusRedux/X_sam_selectors_Status'
import{ updateStatusView } from '../../../../app/redux/statusRedux/X_sam_actions_Status'
import Button from '@material-ui/core/Button'
 
const theme = createMuiTheme(); // allows use of mui theme in styled component



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

function ViewNav(props) {
  let match = useRouteMatch()






// TEMP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let initialView = props.status.view.spotlight.display

const [view, setView] = useState(initialView)

// TEMP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function handleViewChange(evt){
  console.log('[ViewNav ] - XXXXX evt : ', evt.target.id)
  // setView( evt.target.id)
  props.updateStatusView('spotlight', evt.target.id)
}
  return (


    
    <Fragment>

<StyledLink >

{view !== 'tree' &&
  <NavButton
  id='tree'
  onClick = {(evt) => handleViewChange(evt)}

  >Tree View </NavButton>
}

{view === 'tree' &&
  <NavButtonDisabled 
    id='tree'
  onClick = {(evt) => handleViewChange(evt)}

  >Tree View </NavButtonDisabled>
}


</StyledLink>

<StyledLink   >

{view !== 'detail' &&
  <NavButton
  id='detail'
    onClick = {(evt) => handleViewChange(evt)}

  >Detail View </NavButton>
}

{view === 'detail' &&
  <NavButtonDisabled  disabled
 
  // onClick = {handlePageChange}

  >Detail View </NavButtonDisabled>
}


</StyledLink>









  </Fragment>
  );
}

const actions = {

  // ############################################################
// #######  You ARE HERE - make action to change view   #########



updateStatusView



  // ##################################################
  // ##################################################
}

const mapState = state => ({
  page: state,
  status: selectStatus(state)
  // displaySpotlightId: sample_selectLastSpotlight(state)
});

export default connect(mapState, actions)(withRouter(ViewNav))