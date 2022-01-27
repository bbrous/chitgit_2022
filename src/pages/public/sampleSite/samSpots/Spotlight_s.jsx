/* function Spotlight(props) ------not plural -------------
 
  Plan ... includes sections for
  (a) Title
  (b) Status
  (c) SpotlightDetail()
  (d) Icon Menu Segment - - Note, chit and Attachments
  (e) Hamburger menu -- edit, delete, convert to chit
  
parent: SpotlightMain - pages/public/sampleSite/samSpots/SpotlightMain
------------------------------------*/


import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'

import {mediumLightGrey, mediumGrey, chitOrange, chitMediumGreen} from '../../../../styles/colors'

import {msToISO, sample_CurrentTimeStamp, futureSampleTime} from '../../../../app/helpers/dateHelper'

import{ 
  selectSpotlights,
  selectSpotlightFromArray,
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import{ 
  changeSpotlightCompletedStatus,
  changeSpotlightLastVisit
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'


import SpotlightDetail from './SpotlightDetail_s'

// ---Material Ui --------------------
 
 
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import NoteIcon from '../samComponents/Note_icon_s'
import EditIcon from '../samComponents/Edit_icon_s'
import DeleteIcon from '../samComponents/Delete_icon_s'
import ChitIcon from '../samComponents/Chit_icon_s'


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const TopWrapper= styled('div')({
  display: 'flex',
   flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.5rem 0 0 0',
  color: 'red',
 
  width: '98%',
  padding: '0 .5rem',

  fontSize: '1rem',
  
backgroundColor: 'white',
border: '1px solid #727376',
borderRadius: '5px',


'&.backgroundCompleted' : {
  backgroundColor: mediumLightGrey,
  color: 'white', 
   

},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '.5rem 0 0 0',
  color: 'red',
 
  width: '98%',
  padding: '0 .5rem',

  fontSize: '1rem',
  
  '&.backgroundCompleted' : {
     
    color: 'white', 
     
  
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Title= styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '8px 0',
  

  flexWrap: 'wrap',

  fontSize: '1.2rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
  marginRight: '1rem',
 
  [theme.breakpoints.down('sm')] : {
 
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
  '&:hover' : {
     
    border: '1px solid orange'
  },
 
  cursor: 'pointer',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumGrey,

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -----------------------------------

const DetailContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  width: '98%',
  margin: '0 0 .25rem 0',
  padding: '.5rem .25rem .1rem .25rem',

  fontSize: '.8rem',


  borderTop: '1px solid lightgrey',


  [theme.breakpoints.down('sm')]: {

  },
})

const DetailWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
  height: '100%',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {

  },
})

// --- Bottom menu  items -----


const BottomWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '8px',
  color: 'grey',
 width: '100%',
// backgroundColor: 'pink',



  [theme.breakpoints.down('sm')] : {

  },
})

const CheckBoxWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
const IconsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
  zIndex: '95',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const ClockIcon= styled(QueryBuilderIcon)({
  color: chitOrange,
  fontSize: '1rem',
 
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  
  '&.green': {
    color: chitMediumGreen,
  },

  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediummediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);


// ============================================

function Spotlight(props) {
let match = useParams()
// console.log('@@@ [spotlight_s]- params' , match)

// useEffect(()=>{
//   // console.log('@@@ [spotlight_s]- params' , match)


// }, [match])

 /* --- get url data ---
 the url contains 2 pieces of info - pageView (spotlights, etc) and id
 the open modal action wants to know which collection to search matching the id
 dbCollection = pageView from URL
 

 */
  const dbCollection = match.pageView
  const matchId = match.id
  const dispatch = useDispatch()
  const spotlightsArray = useSelector(selectSpotlights)

  // --- get spotlight object from mapStateToProps selector---
  // let spotlightDisplayed = props.spotlight.spotlight
  let spotlightDisplayed = selectSpotlightFromArray(spotlightsArray, matchId)

 

  // deconstruct spotlight object 
  const { id, spotlightStatus, title,  noteId } = spotlightDisplayed
  let spotlightNoteId = spotlightDisplayed.noteId

  // ---change the lastVisit date in Store ----
  // lastVisit used to reorder the spotlightNav side panel



  // ###### -- FOR use in production non-sample version #########

  // const [now, setNow] = useState(msToISO(Date.now()))

  // --- SAMPLE VERSION  

  //  Sets up a dummy time near March 14 2020 so that updates
  //  to completed time will be different 

  // --- set now = to March 14 2020 + small increment of time

  let randomFutureTime = futureSampleTime(sample_CurrentTimeStamp)
  const [now, setNow] = useState(msToISO(randomFutureTime))





  useEffect(() => {

    setNow(msToISO(now))

  }, [now])

  useEffect(() => {

    dispatch(changeSpotlightLastVisit({ id: id, visitedDate: now }))
  }, [id, dispatch, now])

  const [spotlightState, setSpotlightState] = useState('')

  useEffect(() => {

    setSpotlightState(spotlightStatus)

  }, [spotlightStatus])



  // --- handler functions -----------------


  const handleSpotlightCompletedStatus = (spotlightId) => {

console.log('[ Spotlight ] handleSpotlightCompletedStatus id ', spotlightId);

    let newSpotlightCompletedStatus, newSpotlightCompletedTime

    if (spotlightState === 'inactive') {
      newSpotlightCompletedStatus = 'completed'
      newSpotlightCompletedTime = ''
    }
    if (spotlightState === 'completed') {
      newSpotlightCompletedStatus = 'begun'
      newSpotlightCompletedTime = 'now'
    }
    if (spotlightState === 'begun') {
      newSpotlightCompletedStatus = 'completed'
      newSpotlightCompletedTime = ''

    }




    dispatch(changeSpotlightCompletedStatus(
      {
        id: spotlightId,
        spotlightStatus: newSpotlightCompletedStatus,
        completedTimeStamp: now
      }
    )
    )
  }

  // === func 'Spotlight' Return ============================

  return (
    <TopWrapper
      className={spotlightStatus === 'completed' ? "backgroundCompleted" : ""}
    >

      <TitleWrapper
        className={spotlightStatus === 'completed' ? "backgroundCompleted" : ""}
      >
        <div><CheckCircleWrapper onClick={() => handleSpotlightCompletedStatus(id)}>

          {spotlightStatus !== 'completed' &&
            <CheckCircle />
          }
          {spotlightStatus === 'completed' &&
            <CheckCircleCompleted><CheckIcon fontSize={'small'} /> </CheckCircleCompleted>
          }
        </CheckCircleWrapper></div>

        <Title>
          {title}

        </Title>
      </TitleWrapper>


      <DetailContainer>

        <DetailWrapper>
          <SpotlightDetail />


          <BottomWrapper>

            <CheckBoxWrapper>
              
            </CheckBoxWrapper>

            <IconsWrapper>
              <LightTooltip title='Set target end' arrow>
                <ClockIcon />
              </LightTooltip>
              <NoteIcon noteHolderId={id} noteHolderCollection ={dbCollection} noteId = {spotlightNoteId} />
              <ChitIcon id={id} dbCollection={dbCollection} />
              <DeleteIcon id={id} dbCollection={dbCollection} />
              <EditIcon id={id} dbCollection={dbCollection} />
            </IconsWrapper>

          </BottomWrapper>

        </DetailWrapper>
      </DetailContainer>
    </TopWrapper>
  )
}



export default Spotlight
