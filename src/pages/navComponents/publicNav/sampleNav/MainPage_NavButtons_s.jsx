/* MainPage_NavButtons_s.jsx
  Large Navigation Buttons to Sample Site apps
       

    parent: src/pages/public/Sample.jsx

*/


import React from 'react'
 
import {connect} from 'react-redux'
import {NavLink, match } from 'react-router-dom'


import{highlightGrey } from '../../../../styles/colors'


import Button from '@mui/material/Button'



import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const NavButton= styled(Button)({
  
   
  
  display: 'block',
  textTransform: 'none',
  fontFamily: 'sans-serif',
 
  color: 'white',
  border: '1px solid white',
  borderRadius: '10px',
  padding: '.3rem .8rem',
  
  fontSize: '1.2rem',
  height: '3rem',
  width: '7.5rem',
  margin: '0 1rem',
  '&:hover' : {
    
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#A8BEED'
  }


})


const StyledLink= styled(NavLink)({

  textDecoration: 'none',

})

// =====================================

function MainPage_NavButtons_s(props) {

//  set initial Spotlight Route with Spotlight ID
//  Spotlight Id resides in status reducer



  return (
    <>
      <StyledLink to="/sample/chits" >
            <NavButton> Chits </NavButton>
      </StyledLink>

      <StyledLink to="/sample/notes" >
            <NavButton> Notes </NavButton>
      </StyledLink>
 
      <StyledLink to="/sample/chronicles" >
            <NavButton> Chronicles </NavButton>
      </StyledLink>

      <StyledLink to="/sample/logs" >
            <NavButton> Logs </NavButton>
      </StyledLink>

      <StyledLink to="/sample/spotlights" >
            <NavButton> Spotlights </NavButton>
      </StyledLink>
 

    </>
  )
}

// export default MainPage_NavButtons_s
const actions = {
  // setPage 
}
const mapState = state => ({
  
});

export default connect(mapState, actions)(MainPage_NavButtons_s)


// const makeMapStateToProps = () => {
//   const getSpotlight = makeGetSpotlight()
//   const spotlights = makeSelectSpotlights();
//   const taskArray = selectSpotlightTaskArray();
//   const tasks = selectTasks();
 
//   return (state, ownProps) => 
//      {
//        const matchid = ownProps.match.params.itemId
//        return {
//          spotlights: spotlights(state),
//          spotlight: getSpotlight(state, matchid),
//          taskArray: taskArray(state, matchid),
//          taskObjects: tasks(state, matchid)
     
//      }}
 
  
//  };

// export default  connect(makeMapStateToProps)(MainPage_NavButtons_s)