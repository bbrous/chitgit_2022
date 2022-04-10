/* function Chits (props) -------------------

  contains 3 subcomponents 
  (1) if (initialMessage) from store - display chits explanation
                                  in PopoverModal
  (2) if (no initialMessage) - display ChitMain_s
  (3) Links to: PersonalMain, TwoPartyMain, and WorkMain



  children: ./chitMain
            navComponents/publicNav/sampleNav/Chit_Page_nav_s

  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/

import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {veryLightGrey} from '../../../../styles/colors'

import{ 
  selectStatus,
} from '../../../../app/redux/statusRedux/sam_statusSlice'
import ChitMain from './ChitMain_s'

import ChitPageView from '../../../navComponents/publicNav/sampleNav/Chit_Page_nav_s'
import PopoverModal from '../samComponents/PopoverModal'





// -------Material UI 


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },

})

const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '2rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
marginBottom: '6px',
  position: 'relative',
 


  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})
//=======




// ====================================
function Chits(props) {

  let match = useParams()
  let navigate = useNavigate()

  const ChitPage = match.pageView
  const ChitId = match.id

  const [pageDisplayed, setPageDisplayed] = useState(ChitPage)

  useEffect(()=> {
    setPageDisplayed(ChitPage)
  }, [ChitPage])

  let status = useSelector(selectStatus)
  const displayPopoverModalMessage = status.initialMessage[pageDisplayed]

  console.log('[ Chits_s ] displayPopoverModalMessage ', displayPopoverModalMessage);
  console.log('[ Chits_s ] match params ChitId', ChitId);

 



  return (
    <Wrapper>

      {displayPopoverModalMessage &&
        <PopoverModal pageType={ChitPage} />

      }

      <ViewNavWrapper>
        <ChitPageView />
      </ViewNavWrapper>

      <ChitMain />


    </Wrapper>
  )
}



export default Chits
