/* function Parent(props) ------not plural -------------
    
Determines if there is a parent to the Spotlight
  if yes - creates a link with the title retrieved from the Redux store

parent: SpotlightMain - pages/public/sampleSite/samSpots/SpotlightMain
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams   } from 'react-router-dom'

import{chitOrange, chitOrangeLight, veryLightGrey, chitBlueDull} from '../../../../styles/colors'

// import{   
//   makeSelectSpotlights,
   
//   makeGetSpotlight,
//   selectParentSpotlight
//   // selectSpotlightTaskArray
  
// } from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'
import{ 
  selectSpotlights,
  selectSpotlightFromArray,
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'


import ForwardIcon from '@mui/icons-material/Forward';

import Paper from '@mui/material/Paper'

import { styled, createTheme } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

// -----------------------------------
const ParentContainer = styled(Paper)({
  display: 'block',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: 'grey',
  width: '98%',

  minHeight: '1rem',

  
  marginTop: '6px',
  padding: '0 .5rem',

  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const ParentDetail= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',

  color: chitBlueDull,
  fontSize: '.8rem',

// backgroundColor: 'aqua',

'& .parentTitle' : {
  color: 'red',
  marginRight: '4px'

},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ParentLinkWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  margin: '4px .5rem 4px 0',
  border: '1px solid orange',
  borderRadius: '200px',

  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ParentLink= styled(ForwardIcon)({
  display: 'inline-block',
  width: '1.1rem',
  height: '1.1rem',
  
  transform:'rotate(-90deg)',
    
  color: chitOrange,

  '&:hover' : {
    
    color: chitOrangeLight
  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==========================
function Parent(props) {
  let navigate = useNavigate()
  let match = useParams()
  const spotlightsArray = useSelector(selectSpotlights)
  let matchId = match.detailId
  let spotlightDisplayed = selectSpotlightFromArray(spotlightsArray, matchId)

  console.log('[Parent - matchId - ', match)
  // console.log('[Parent - spotlightDisplayed - ', spotlightDisplayed)

  // (1) get parentId if exists in spotight from URL
  const parentId = spotlightDisplayed.parentId

  // (2) if there is a parent - get the title
  let parentSpotlight, parentSpotlightTitle
  if (parentId) {
    parentSpotlight = selectSpotlightFromArray(spotlightsArray, parentId)
    parentSpotlightTitle = parentSpotlight.title
    
  }

  //(3) if parent - change the URL spotlight Id
  function handleChangeSpotlight(parentId) {
    navigate(`/sample/spotlights/${parentId}`)

  }

  return (
    <ParentContainer>
      {parentId &&
      <ParentDetail>

        <ParentLinkWrapper
        onClick = {()=>{handleChangeSpotlight(parentId)}}
        >
          <ParentLink />

        </ParentLinkWrapper>

        <div className='parentTitle' > Parent :  </div>
        <div>
          {parentSpotlightTitle}
    
        </div>
      </ParentDetail>
    }
    {!parentId &&
      <ParentDetail style={{color: "lightgrey"}} > No Parent  </ParentDetail>
    }
    </ParentContainer>
  )
}



 
 
 
 
 export default Parent
