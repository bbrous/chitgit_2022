import React from "react"
 

import {NavLink, useLocation} from 'react-router-dom'
import {useHistory, useParams, match} from 'react-router-dom'
import {connect} from 'react-redux'
// import{setPage} from '../../../app/redux/actions/landingActions'

// import {getPage} from '../../../app/helpers/locationHelper'
import{backgroundBlue, bodyBlue, chitOrange, chitOrangeVeryLight, darkGrey, highlightGrey, lightGrey, shadowBlue, veryLightGrey} from '../../../../styles/colors'





import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 
import { styled, createTheme  } from "@mui/material/styles"
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

  // border: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: '100%',

  color: shadowBlue,

  textTransform: 'none',
  fontWeight: '400',
  paddingRight: '10px',
  paddingLeft: '10px',
  
  '&:hover': {
    backgroundColor: veryLightGrey,
    boxShadow: 'none',
 
  },


  [theme.breakpoints.down('sm')] : {
    display: 'flex',
justifyContent: 'flex-start',
alignItems:'center',
    fontSize: '.85rem',
    padding: '2px 5px',
    width: '10rem',
    borderTop: '1px solid white'
  },

})

const NavButtonDisabled= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: '100%',

  color: chitOrange,
  
  textTransform: 'none',
  fontWeight: '400',
  paddingRight: '10px',
  paddingLeft: '10px',
  backgroundColor: veryLightGrey,

  '& :hover': {
    backgroundColor: veryLightGrey,
  },
   
  [theme.breakpoints.down('sm')] : {
    display: 'flex',
justifyContent: 'flex-start',
alignItems:'center',
    fontSize: '.9rem',
    padding: '2px 15px',
    width: '10rem',
    margin: '1px 0',
  },

})
 



const StyledLink= styled(NavLink)({

    textDecoration: 'none',

})

const Greeting = styled('div')({
  paddingLeft: '5px',
  display: 'none',

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    height: '1.25rem',
    marginTop: '.25rem',
    fontSize: '.rem',
    backgroundColor: backgroundBlue,
    marginBottom: '3px'
    
  }

})

const Submenu = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '5px',


  [theme.breakpoints.down('sm')] : {

    
  }

})


// ================================================

function PageNav(props) {
  let match = useParams()

//   let location = useLocation()
//   let page = getPage(location)
let handleClose = props.handleClose
let page

  if(!match.pageView){page = 'twoParty'}else{page = match.pageView}

console.log('[PageNav ] - page location : ', page)
// let page = 'twoParty'

// Popover ---------
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClosePopper = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;




  return (


    
    <Wrapper>
<Greeting> Bob's Sample Site </Greeting>
<StyledLink to="/sample" >

{page !== 'home' &&
  <NavButton
    id='home'
  onClick = {handleClose}

  >Home </NavButton>
}

{page === 'home' &&
  <NavButtonDisabled disabled
    id='home'
  // onClick = {handleClose}

  >Home </NavButtonDisabled>
}


</StyledLink>


{/* ========================================================= */}


       

            <StyledLink to="/sample/chits/twoParty" >
              {page !== 'twoParty' &&
                <NavButton
                  id='twoParty'
                  onClick={handleClose}

                >Two Party Chits </NavButton>
              }

              {page === 'twoParty' &&
                <NavButtonDisabled disabled
                  id='twoParty'
                // onClick = {handleClose}

                >Two Party Chits </NavButtonDisabled>
              }

            </StyledLink>


            <StyledLink to="/sample/chits/personal" >
              {page !== 'personal' &&
                <NavButton
                  id='personal'
                  onClick={handleClose}

                >Personal Chits </NavButton>
              }

              {page === 'personal' &&
                <NavButtonDisabled disabled
                  id='personal'
                // onClick = {handleClose}

                >Personal Chits </NavButtonDisabled>
              }

            </StyledLink>

            <StyledLink to="/sample/chits/work" >
              {page !== 'work' &&
                <NavButton
                  id='work'
                  onClick={handleClose}

                >Work Chits </NavButton>
              }

              {page === 'work' &&
                <NavButtonDisabled disabled
                  id='work'
                // onClick = {handleClose}

                >Work Chits </NavButtonDisabled>
              }

            </StyledLink>









{/* ========================================================= */}


<StyledLink to="/sample/logs" >

{page !== 'logs' &&
  <NavButton
    id='logs'
  onClick = {handleClose}

  >Logs </NavButton>
}

{page === 'logs' &&
  <NavButtonDisabled disabled
    id='logs'
  // onClick = {handleClose}

  >Logs </NavButtonDisabled>
}


</StyledLink>

<StyledLink to="/sample/chronicles" >

{page !== 'chronicles' &&
  <NavButton
    id='chronicles'
  onClick = {handleClose}

  >Chronicles </NavButton>
}

{page === 'chronicles' &&
  <NavButtonDisabled disabled
    id='chronicles'
  // onClick = {handleClose}

  >Chronicles </NavButtonDisabled>
}


</StyledLink>
<StyledLink to="/sample/notes" >

{page !== 'notes' && 
  <NavButton
    id = 'notes' 
    onClick = {handleClose}
  
  >Notes </NavButton>
}

{page === 'notes' && 
  <NavButtonDisabled disabled
    id = 'notes' 
    // onClick = {handleClose}
  
  >Notes </NavButtonDisabled>
}


</StyledLink>

{/* <StyledLink to="/sample/inspire" >

{page !== 'inspire' && 
  <NavButton
    id = 'inspire' 
    onClick = {handleClose}
  
  >Inspire </NavButton>
}

{page === 'inspire' && 
  <NavButtonDisabled disabled
    id = 'inspire' 
    // onClick = {handleClose}
  
  >Inspire </NavButtonDisabled>
}


</StyledLink> */}

<StyledLink to="/sample/spotlights" >

{page !== 'spotlights' && 
  <NavButton
    id = 'spotlights' 
    onClick = {handleClose}
  
  >Spotlights </NavButton>
}

{page === 'spotlights' && 
  <NavButtonDisabled disabled
    id = 'spotlights' 
    // onClick = {handleClose}
  
  >Spotlights </NavButtonDisabled>
}


</StyledLink>







  </Wrapper>
  );
}

const actions = {
  // setPage 
}

const mapState = state => ({
  page: state,
  
});

export default connect(mapState, actions)(PageNav)