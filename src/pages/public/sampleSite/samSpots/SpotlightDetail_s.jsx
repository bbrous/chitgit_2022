/*---- File - spotlightDetail.jsx
     Displays details about spotlight retrieved from Redux store
     
    Contains children: 
        CountdownDisplay_s'

      parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'


import{ 
  selectSpotlights,
  selectSpotlightFromArray,
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import CountdownDisplay from './CountdownDisplay_s'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  // marginLeft: '2.5rem',

  width: '100%',
  // backgroundColor: 'yellow',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

// ---- Status Block-------------

const StatusRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: lightGrey,
  marginBottom: '8px',
  padding: '2px 0',
  color: 'black',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StatusRowLeft = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingRight: '1rem',

  // backgroundColor: 'gold',





  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const StatusRowRight = styled('div')({
  display: 'flex',
  flexDirection: 'row',

  justifyContent: 'flex-start',
  alignItems: 'center',

  '&.greyHighlight': { color: darkGrey, fontWeight: 'bold' },
  '&.redHighlight': { color: 'red' },
  '&.greenHighlight': { color: 'green' },



  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// ---- Variables Block --------

const VariablesWrapper = styled('div')({
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'flex-start',


  width: '100%',
  // backgroundColor: 'blue',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const VariablesLeft = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '.25rem',
  fontSize: '.7rem',
  color: 'black',
  width: '50%',
  // backgroundColor: 'pink',






  borderRight: '1px solid grey',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const VariablesRight = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '.25rem',
  fontSize: '.7rem',
  color: 'black',
  width: '50%',
  // backgroundColor: 'orange',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})



// ---- Detail Block-------------

const DetailRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',

  // backgroundColor: 'pink',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})
const DetailRowLeft = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '6rem',
  color: 'grey',
  // backgroundColor: 'gold',


  '&.redHighlight': { color: 'red' },
  '&.greenHighlight': { color: 'green' },


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRight = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',

  // backgroundColor: 'green',

  '&.greyHighlight': { color: darkGrey, fontWeight: 'bold' },
  '&.redHighlight': { color: 'red' },
  '&.greenHighlight': { color: 'green' },

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ================================================
function SpotlightDetail(props) {
 
  const match = useParams()

  const matchId = match.detailId

  const spotlightsArray = useSelector(selectSpotlights)

  // --- get spotlight object from mapStateToProps selector---
  // let spotlightDisplayed = props.spotlight.spotlight
  let spotlightDisplayed = selectSpotlightFromArray(spotlightsArray, matchId)
  
  // (1) get parentId if exists in spotight from URL
  const {id, endEst, lastVisit, spotlightStatus} = spotlightDisplayed

  // (2) format for status display
  let statusDisplay

  if(spotlightStatus === 'completed') {statusDisplay = 'Spotlight Completed'}
  if(spotlightStatus === 'begun' ){statusDisplay = 'In Progress'}
  if(spotlightStatus === 'inactive' ){statusDisplay ='Not Yet Started'}


  
  // convert target Date in ISO to UTC for addition/subtraction etc
  let targetDate, beginDate, targetDateInMilliseconds

  if(endEst) {
    targetDateInMilliseconds = DatetoUTC(endEst)
    // format target Date in milliseconds for display
    targetDate  =  UTCtoDate(targetDateInMilliseconds)
  
    // console.log('[SPOTLIGHT Detail] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }

// ---- Return of main function -------------------------------------

  return (
    <Wrapper>

      <StatusRow>
        <StatusRowLeft>Status: </StatusRowLeft>
        {spotlightStatus === 'inactive' &&
          <StatusRowRight
          > {statusDisplay}
          </StatusRowRight>

        }
        {spotlightStatus === 'completed' &&
          <StatusRowRight
            className='redHighlight'
          > {statusDisplay}

          </StatusRowRight>

        }

        {spotlightStatus === 'begun' &&
          <StatusRowRight
            className='greenHighlight'

          > {statusDisplay}
          </StatusRowRight>

        }

      </StatusRow>

      <VariablesWrapper>

        <VariablesLeft>

          <DetailRow>
            <DetailRowLeft>Targeted End: </DetailRowLeft>

            {!endEst &&
              <DetailRowRight> No Targeted End  </DetailRowRight>
            }

            {endEst &&
              <DetailRowRight className='greyHighlight'>
                {UTCtoDateTradional(DatetoUTC(endEst))}
              </DetailRowRight>
            }

          </DetailRow>

          <DetailRow>
            <DetailRowLeft>Last Visited: </DetailRowLeft>
            <DetailRowRight className='greyHighlight'>
              {UTCtoDateTradional(DatetoUTC(lastVisit))}
            </DetailRowRight>

            <DetailRowRight

            >
              {beginDate}
            </DetailRowRight>

          </DetailRow>

        </VariablesLeft>

        <VariablesRight>

          <CountdownDisplay />


        </VariablesRight>

      </VariablesWrapper>

    </Wrapper>

  )
}// end func SpotlightDetail

 
export default SpotlightDetail
