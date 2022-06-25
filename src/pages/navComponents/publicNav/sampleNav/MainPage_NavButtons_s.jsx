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

function MainPage_NavButtons_s(props) {

//  set initial Spotlight Route with Spotlight ID
//  Spotlight Id resides in status reducer


const status = useSelector(selectStatus)
const chitView = status.view.chit.type
const chitId = status.view.chit.id
const chitLink = `/sample/${chitView}/${chitId}`

// console.log('[ MainPage_NavButtons_s ] status ', status);
const topicalsId = status.view.topical.id
const topicalLink = `/sample/topicals/${topicalsId}`

const logsId = status.view.log.id
const logLink = `/sample/logs/${logsId}`

  return (
    <Wrapper>

  
      <StyledLink to={chitLink}>
        <NavButton> Chits </NavButton>
      </StyledLink>

      <StyledLink to= {logLink} >
        <NavButton> Logs </NavButton>
      </StyledLink>

      <StyledLink to= {topicalLink} >
        <NavButton> Topicals </NavButton>
      </StyledLink>

      <StyledLink to="/sample/journal" >
        <NavButton> Journal </NavButton>
      </StyledLink>



      <StyledLink to="/sample/spotlights" >
        <NavButton> Spotlights </NavButton>
      </StyledLink>

    </Wrapper>
  )
}

export default MainPage_NavButtons_s


// -----------------------------------------------------------------

const NavButton= styled(Button)({
  
   
  
  display: 'flex',
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
  },

  [theme.breakpoints.down('md')] : {
    display: 'flex',
     fontSize: '.9rem',
  height: '2rem',
 padding: '0 4px',
 width: '5.5rem',
 margin: '0 .5rem',
  },

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
     fontSize: '.7rem',
  height: '2rem',
  width: '4rem',
 padding: '0 4px'
    
  },
  


})


const StyledLink= styled(NavLink)({

  textDecoration: 'none',

})

const Wrapper = styled('div')({
 
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',

    [theme.breakpoints.down('xs')] : {
       
 
      
      
    }
   

})
