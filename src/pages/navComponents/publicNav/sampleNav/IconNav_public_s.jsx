import React, {useEffect} from "react"
import{ lightGrey, mediumGrey} from '../../../../styles/colors'

import {NavLink, withRouter, useLocation} from 'react-router-dom'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import {connect} from 'react-redux'

// import{changeDisplay} from '../../../app/redux/actions/mainActions'

// import {getPage} from '../../../app/helpers/locationHelper'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People'

import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HighlightIcon from '@material-ui/icons/Highlight';
import NotesIcon from '@material-ui/icons/Notes';
import Description from '@material-ui/icons/Description';
import Info from '@material-ui/icons/Info';



const theme = createMuiTheme(); // allows use of mui theme in styled component

// -----------------------
const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%', 
  width: '100%',

  [theme.breakpoints.down('xs')] : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
// backgroundColor: 'aqua'
  },
   
  
})

const ToolBarSpacer= styled('div')({
  display: 'block',

  height: '5rem',
  // height: '100%', padding: '2px',
  // marginRight: '12px',

  [theme.breakpoints.down('xs')] : {
    height: '4rem',
    // marginTop: '40%'
    // justifyContent: 
  },

   
})


const IconWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100%', padding: '2px',
  // marginRight: '12px',
  height: '2rem',
  width: '2rem',
 
// backgroundColor: 'lightGrey',

borderRadius: '50px',

[theme.breakpoints.down('xs')] : {
  marginTop: '1rem',
},
 
   
})

const IconWrapperSelected= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100%', padding: '2px',
  // marginRight: '12px',
  height: '2rem',
  width: '2rem',
  
backgroundColor: mediumGrey,
 
borderRadius: '50px',
 
disabled: true,

[theme.breakpoints.down('xs')] : {
  marginTop: '1rem',
},
 
   
})



const StyledLink= styled(NavLink)({

  display: 'block',
 

  textDecoration: 'none',



})



// ==============================================

const IconNav = (props) => {

  let match = useRouteMatch()

//   let location = useLocation()
//   let page = getPage(location)

let page

  if(!match.params.pageView){page = 'twoParty'}else{page = match.params.pageView}

console.log('[ViewNav ] - page location : ', page)
// let page = 'twoParty'

//---works ---
    // useEffect(
    //   ()=>{props.changeDisplay(page)},[page] 
    //   )
  
  // console.log('[Main Nav]... props --- ', view)

  return (
    <Wrapper>
      <ToolBarSpacer/>
{/* 
      <PeopleIcon style={{ color: lightGrey }}/>
      <PersonIcon style={{ color: lightGrey }}/>
      <WorkIcon style={{ color: lightGrey }}/>
      <MenuBookIcon style={{ color: lightGrey }}/>
      <Description style={{ color: lightGrey }}/> */}

      <StyledLink to="/sample" >


      {page !== 'home' &&
        <IconWrapper aria-label="twoParty">
          <HomeIcon style={{ color: lightGrey }}/>
        </IconWrapper>
      }

      {page === 'home' &&
        <IconWrapperSelected aria-label="two Party link">
          <HomeIcon style={{ color: lightGrey }}/>
        </IconWrapperSelected>
      }

      </StyledLink>

      <StyledLink to="/sample/twoParty" >


            {page !== 'twoParty' && 
              <IconWrapper aria-label="two party chits">
                <PeopleIcon style={{ color: lightGrey }}/>
              </IconWrapper>
            }

            {page === 'twoParty' && 
              <IconWrapperSelected aria-label="two party chits">
                <PeopleIcon style={{ color: lightGrey }}/>
              </IconWrapperSelected>
            }
            
      </StyledLink>

      <StyledLink to="/sample/personal" >

            {page !== 'personal' && 
              <IconWrapper aria-label="personal chits">
                <PersonIcon style={{ color: lightGrey }}/>
              </IconWrapper>
            }

            {page === 'personal' && 
              <IconWrapperSelected aria-label="personal chits">
                <PersonIcon style={{ color: lightGrey }}/>
              </IconWrapperSelected>
            }

      </StyledLink>

      <StyledLink to="/sample/work" >

            {page !== 'work' && 
              <IconWrapper aria-label="work chits">
                <WorkIcon style={{ color: lightGrey }}/>
              </IconWrapper>
            }

            {page === 'work' && 
              <IconWrapperSelected aria-label="work chits">
                <WorkIcon style={{ color: lightGrey }}/>
              </IconWrapperSelected>
            }

      </StyledLink>

      <StyledLink to="/sample/spotlights" >

        {page !== 'spotlights' && 
          <IconWrapper aria-label=" spotlights">
            <HighlightIcon style={{ color: lightGrey }}/>
          </IconWrapper>
        }

        {page === 'spotlights' && 
          <IconWrapperSelected aria-label=" spotlights">
            <HighlightIcon style={{ color: lightGrey }}/>
          </IconWrapperSelected>
        }

      </StyledLink>

      <StyledLink to="/sample/notes" >

        {page !== 'notes' && 
          <IconWrapper aria-label="notes">
            <NotesIcon style={{ color: lightGrey }}/>
          </IconWrapper>
        }

        {page === 'notes' && 
          <IconWrapperSelected aria-label="notes">
            <NotesIcon style={{ color: lightGrey }}/>
          </IconWrapperSelected>
        }


      </StyledLink>

      <StyledLink to="/sample/logs" >

        {page !== 'logs' && 
          <IconWrapper aria-label="logs">
            <MenuBookIcon style={{ color: lightGrey }}/>
          </IconWrapper>
        }

        {page === 'logs' && 
          <IconWrapperSelected aria-label="logs">
            <MenuBookIcon style={{ color: lightGrey }}/>
          </IconWrapperSelected>
        }

      </StyledLink> 

      <ToolBarSpacer/>
    </Wrapper>
  ) 
}

const actions = {
  // changeDisplay 
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(withRouter(IconNav))
