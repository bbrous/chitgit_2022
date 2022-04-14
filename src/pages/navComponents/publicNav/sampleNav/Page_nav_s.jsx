import React from "react"
 

import {NavLink,  useLocation} from 'react-router-dom'
import { useParams, match} from 'react-router-dom'
import {useSelector} from 'react-redux'
// import{setPage} from '../../../app/redux/actions/landingActions'

// import {getPage} from '../../../app/helpers/locationHelper'
import{backgroundBlue, bodyBlue, chitBlueLight, chitOrange, chitOrangeVeryLight, chitSkyBlue, darkGrey, highlightGrey, lightGrey, shadowBlue, veryLightGrey} from '../../../../styles/colors'

import { selectStatus } from "../../../../app/redux/statusRedux/sam_statusSlice"

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


// --------------------------------


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
    color: chitBlueLight,
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
  // backgroundColor: veryLightGrey,

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

  const status = useSelector(selectStatus)
const chitView = status.view.chit.type
const chitId = status.view.chit.id
const chitLink = `/sample/${chitView}/${chitId}`

const topicalsId = status.view.topical.id
const topicalLink = `/sample/topicals/${topicalsId}`

const logsId = status.view.log.id
const logLink = `/sample/logs/${logsId}`

 
let handleClose = props.handleClose
let page

  if(!match.pageView){page = 'twoParty'}else{page = match.pageView}
 

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

<StyledLink to= {chitLink}>
{page !== 'personalChits' && 
<NavButton
      aria-describedby={id} variant="contained" onClick={handleClick}

    >Chits </NavButton>
}

{page === 'personalChits' && 
  <NavButtonDisabled disabled
    id = 'spotlights' 
    // onClick = {handleClose}
  
  >Chits </NavButtonDisabled>
}





</StyledLink>

{/* ========================================================= */}

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




<StyledLink to= {logLink}>

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


<StyledLink to= {topicalLink} >

{page !== 'topicals' &&
  <NavButton
    id='topicals'
  onClick = {handleClose}

  >Topicals </NavButton>
}

{page === 'topicals' &&
  <NavButtonDisabled disabled
    id='topicals'
  // onClick = {handleClose}

  >Topicals </NavButtonDisabled>
}


</StyledLink>

<StyledLink to="/sample/journal" >

{page !== 'journal' &&
  <NavButton
    id='journal'
  onClick = {handleClose}

  >Journal </NavButton>
}

{page === 'journal' &&
  <NavButtonDisabled disabled
    id='Journal'
  // onClick = {handleClose}

  >Journal </NavButtonDisabled>
}


</StyledLink>
<StyledLink to="/sample/people" >

{page !== 'people' && 
  <NavButton
    id = 'people' 
    onClick = {handleClose}
  
  >People </NavButton>
}

{page === 'people' && 
  <NavButtonDisabled disabled
    id = 'people' 
    // onClick = {handleClose}
  
  >People </NavButtonDisabled>
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








  </Wrapper>
  );
}


export default PageNav