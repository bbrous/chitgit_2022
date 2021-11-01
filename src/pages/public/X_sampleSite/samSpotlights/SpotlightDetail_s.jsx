import React, {Fragment, useState, useEffect } from 'react'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'


import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../../styles/colors'

import {UTCtoDate, DatetoUTC, convertMS, msToStringDisplay} from '../../../../app/helpers/dateHelper'

// import CountDownDisplay from './timer/CountDownDisplay'







// import{ changeSpotlightCompletedStatus} from '../../../app/redux/actions/mainActions'

 

/*  -- Spotlight Detail Page -- 

    Displays the top portion of Spotlight.jsx

    Pulls and formats date and time estimates from database.
    There are 2 possible estimates - a date goal and/or a time goal
    These are displayed as "Targeted End" or "Est Time" respectively.

    "Began"  is a formatted form of "timeStamp"
    beginTimeStamp is null to begin with
    A date is put into beginTimeStamp when any single Spotlight task 
    is completed, or any single task's clock is started.
    
    "Ended" comes from completedTimeStamp which is null to begin with.
    A date value is input int completedTimeStamp when user checks completed circle.

    Only the timeEst object is in milliseconds.  All other date fields
    are dates. For calculations, dates are first changed to milliseconds.
    After calculations, the results are converted into formatted strings.
    
*/

import { styled, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme(); // allows use of mui theme in styled component


//  -------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  // marginLeft: '2.5rem',

  width: '100%',
  // backgroundColor: 'yellow',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
  
  },
})

const StatusRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: lightGrey,
  marginBottom: '8px',
  padding: '2px 0',
  color: 'black',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StatusRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingRight: '1rem',

  // backgroundColor: 'gold',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
     
  },
})

const StatusRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  '&.blueHighlight' : {color: chitBlueDull, fontWeight: 'bold'},
  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},

 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -----------------------------------

const VariablesWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  

  width: '100%',
  // backgroundColor: 'blue',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
  
  },
})

const VariablesLeft= styled('div')({
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

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
 
  },
})

const VariablesRight= styled('div')({
  display: 'flex',
  flexDirection: 'column',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '.25rem',
  fontSize: '.7rem',
  color: 'black',
  width: '50%',
  // backgroundColor: 'orange',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
     
  },
})

const DetailRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 width: '100%',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})

const DetailRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '6rem',
 color: 'grey',
  // backgroundColor: 'gold',
   

  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // backgroundColor: 'green',
  
  '&.blueHighlight' : {color: chitBlueDull, fontWeight: 'bold'},
  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRemaining= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 width: '100%',
// backgroundColor: 'aqua',
marginTop: '8px',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})



const DetailRowDifference= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '8px',
 


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})



const DetailRowLeftDifference= styled('div')({

 
 color: 'grey',
  
   

  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRightDifference= styled('div')({
  display: 'flex',
  flexDirection: 'row',
 
  justifyContent: 'center',
  alignItems: 'center',
   
 
  
  '&.blueHighlight' : {color: chitBlueDull, fontWeight: 'bold'},
  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CompletedWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
   
 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




// ======================================================

function SpotlightDetail(props) {


    // get spotlight object from mapStateToProps selector
    let spotlightDisplayed = props.spotlight.spotlight

    // deconstruct spotlight object 
    const {id,  parent, completedTimeStamp, spotlightStatus, title, beginTimeStamp, endEst, timeEst, type,  note } = spotlightDisplayed

  console.log('SPOTLIGHT DETAIL ------- spotlightDisplayed', spotlightDisplayed)

    // format for status display
    let statusDisplay

    if(spotlightStatus === 'completed') {statusDisplay = 'Spotlight Completed'}
    if(spotlightStatus === 'begun' ){statusDisplay = 'In Progress'}
    if(spotlightStatus === 'inactive' ){statusDisplay ='Not Yet Started'}
  

  // ---- DATE Display Formatting ---------------------------------------

  // convert target Date in ISO to UTC for addition/subtraction etc
  let targetDate, beginDate, targetDateInMilliseconds, beginDateInMilliseconds, completedDateInMilliseconds

  if (endEst) {
    targetDateInMilliseconds = DatetoUTC(endEst)
    // format target Date in milliseconds for display
    targetDate = UTCtoDate(targetDateInMilliseconds)

    // console.log('[SPOTLIGHT Detail] -- REMAINING' ,  days, hours, mins, secs)


  } else {
    targetDate = 'No target date provided'

  }
  if (beginTimeStamp) {
    beginDateInMilliseconds = DatetoUTC(beginTimeStamp)
    // format target Date in milliseconds for display
    beginDate = UTCtoDate(beginDateInMilliseconds)

    // console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs)


  } else {
    targetDate = 'No target date provided'

  }

  // calculation to define if DATE goal achieved or not

  completedDateInMilliseconds = DatetoUTC(completedTimeStamp)
  let endDate = UTCtoDate(completedDateInMilliseconds)
  let dateDifferenceMS = targetDateInMilliseconds - completedDateInMilliseconds
  let dateDifference = msToStringDisplay(Math.abs(dateDifferenceMS))

  // calculation to define if TIME goal achieved or not 

  let targetTime = msToStringDisplay(timeEst)
  let differenceTimeInMilliseconds = timeEst - (completedDateInMilliseconds - beginDateInMilliseconds)
  let differenceTime = msToStringDisplay(Math.abs(differenceTimeInMilliseconds))




  return (
    <Wrapper>

{/* -----   Status Row  ----------- */}

      <StatusRow>

        <StatusRowLeft>Status: </StatusRowLeft>

        {spotlightStatus === 'inactive' &&
          <StatusRowRight> {statusDisplay} </StatusRowRight>
        }
        {spotlightStatus === 'completed' &&
          <StatusRowRight className='redHighlight'> {statusDisplay} </StatusRowRight>
        }

        {spotlightStatus === 'begun' &&
          <StatusRowRight className='greenHighlight'> {statusDisplay} </StatusRowRight>
        }
      </StatusRow>

{/* -----   Variables Wrapper ----------- */}

      <VariablesWrapper>

      {/* ---Left SIDE - Date Targetd  ------------------ */}
        <VariablesLeft>

          <DetailRow>
            <DetailRowLeft>Targeted End: </DetailRowLeft>

            {!endEst &&
              <DetailRowRight> No Targeted End  </DetailRowRight>
            }

            {endEst &&
              <DetailRowRight className='blueHighlight'>
                {targetDate}
              </DetailRowRight>
            }

          </DetailRow>

          <DetailRow>

            <DetailRowLeft>Began: </DetailRowLeft>
            <DetailRowRight> {beginDate}  </DetailRowRight>

          </DetailRow>

          {!completedTimeStamp &&
            <DetailRowRemaining>
              {/* <CountDownDisplay spotlightId={id} /> */}
            </DetailRowRemaining>
          }

          {spotlightStatus === 'completed' &&
            <CompletedWrapper>
              <DetailRow>

                <DetailRowLeft>Ended: </DetailRowLeft>
                <DetailRowRight> {UTCtoDate(DatetoUTC(completedTimeStamp))} </DetailRowRight>

              </DetailRow>

              {/* ------Target date missed ------------- */}

              {endEst && dateDifferenceMS < 0 &&
                <DetailRowDifference>
                  <DetailRowLeftDifference
                    className='redHighlight'

                  > Target date missed by: </DetailRowLeftDifference>

                  <DetailRowRightDifference
                    className='redHighlight'

                  >
                    - {dateDifference.weeks} w ::
                    {dateDifference.days} d ::
                    {dateDifference.hours} h ::
                    {dateDifference.minutes} m ::

                  </DetailRowRightDifference>


                </DetailRowDifference>
              }

              {/* ------Target date made ------------- */}

              {endEst && dateDifferenceMS > 0 &&
                <DetailRowDifference>
                  <DetailRowLeftDifference
                    className='greenHighlight'
                  >Goal achieved by: </DetailRowLeftDifference>

                  <DetailRowRightDifference
                    className='greenHighlight'

                  >
                    {dateDifference.weeks} w ::
                    {dateDifference.days} d ::
                    {dateDifference.hours} h ::
                    {dateDifference.minutes} m ::

                  </DetailRowRightDifference>


                </DetailRowDifference>
              }

            </CompletedWrapper>
          }
        </VariablesLeft>

      {/* ---RIGHT SIDE - Time Estimates ------------------ */}

        <VariablesRight>

        {/* Time estimate made ------ */}

          {timeEst > 0 &&
            <DetailRow>
              <DetailRowLeft>Est Time: </DetailRowLeft>

              <DetailRowRight>
                {targetTime.weeks > 0 &&
                  <div>{targetTime.weeks} w ::   </div>
                }
                {targetTime.days > 0 &&
                  <div>{targetTime.days} d ::   </div>
                }

                {targetTime.hours} h ::
                {targetTime.minutes} m
              </DetailRowRight>


            </DetailRow>
          }

        {/* No Time estimate made ------*/}

          {!timeEst &&
            <DetailRow>
              <DetailRowLeft>Est Time: </DetailRowLeft>

              <DetailRowRight>
                No target time created
              </DetailRowRight>

            </DetailRow>
          }
          <DetailRow>
            <DetailRowLeft>Began: </DetailRowLeft>


            <DetailRowRight>{
              beginTimeStamp ? beginDate : ''
            }</DetailRowRight>

          </DetailRow>

          {spotlightStatus === 'completed' &&
            <CompletedWrapper>
              <DetailRow>
                <DetailRowLeft>Ended: </DetailRowLeft>

                <DetailRowRight>{endDate}</DetailRowRight>


              </DetailRow>


              {timeEst && differenceTimeInMilliseconds < 0 &&
                <DetailRowDifference>
                  <DetailRowLeftDifference
                    className='redHighlight'

                  > Target time missed by: </DetailRowLeftDifference>

                  <DetailRowRightDifference
                    className='redHighlight'

                  >
                    {differenceTime.weeks} w ::
                    {differenceTime.days} d ::
                    {differenceTime.hours} h ::
                    {differenceTime.minutes} m

                  </DetailRowRightDifference>


                </DetailRowDifference>
              }
              {timeEst && differenceTimeInMilliseconds > 0 &&
                <DetailRowDifference>
                  <DetailRowLeftDifference
                    className='greenHighlight'
                  >Time target achieved by: </DetailRowLeftDifference>

                  <DetailRowRightDifference
                    className='greenHighlight'

                  >
                    {differenceTime.weeks} w ::
                    {differenceTime.days} d ::
                    {differenceTime.hours} h ::
                    {differenceTime.minutes} m

                  </DetailRowRightDifference>


                </DetailRowDifference>
              }


            </CompletedWrapper>
          }

        </VariablesRight>

      </VariablesWrapper>

    </Wrapper>

  ) // end return

} // end function SpotlightDetail 

 

const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()

 
  return (state, ownProps) => 
     {
      const matchid = ownProps.match.params.detailId
       return {

         spotlight: getSpotlight(state, matchid),

     
     }}
 
  
 };

export default withRouter(connect(makeMapStateToProps)(SpotlightDetail))
