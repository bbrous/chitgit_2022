/* MainPage_NavButtons_s.jsx
  Large Navigation Buttons to Sample Site apps
       

    parent: src/pages/public/Sample.jsx

*/


import React from 'react'
 
import {useSelector} from 'react-redux'
import {NavLink, useParams } from 'react-router-dom'


import{highlightGrey } from '../../../../styles/colors'

import { selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'


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


const status = useSelector(selectStatus)
const chitView = status.view.chit.type
const chitId = status.view.chit.id
const chitLink = `/sample/${chitView}/${chitId}`

console.log('[ MainPage_NavButtons_s ] status ', status);


  return (
    <>

  
      <StyledLink to={chitLink}>
        <NavButton> Chits </NavButton>
      </StyledLink>

      <StyledLink to="/sample/logs" >
        <NavButton> Logs </NavButton>
      </StyledLink>

      <StyledLink to="/sample/topicals" >
        <NavButton> Topicals </NavButton>
      </StyledLink>

      <StyledLink to="/sample/journal" >
        <NavButton> Journal </NavButton>
      </StyledLink>



      <StyledLink to="/sample/spotlights" >
        <NavButton> Spotlights </NavButton>
      </StyledLink>

    </>
  )
}

export default MainPage_NavButtons_s