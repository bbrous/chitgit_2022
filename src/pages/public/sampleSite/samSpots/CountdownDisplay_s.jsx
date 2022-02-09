/* ---- File - samSpots/CountdownDisplay_s.jsx
  Timer used to display time remaining between now() and estimated complete
  Changes color from green (time remaining till estimated end) to
                     red (time past due)
  
  parent: SpotlightDetail - pages/public/sampleSite/samSpots/SpotlightDetail
  
*/

import React, {useState, useEffect}  from 'react'
import {connect, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {DatetoUTC,  msToStringDisplay} from '../../../../app/helpers/dateHelper'
import{ chitBlueDull} from '../../../../styles/colors'

import{   
  // makeSelectSpotlights,
  // selectTasks,
  // makeGetSpotlight,
  selectSpotlights,
  selectSpotlightFromArray
  
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 
 
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})

const DetailRowDifference= styled('div')({
  display: 'flex',
  flexDirection: 'row',
 width: '100%',
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

const DetailItemWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
 
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
// backgroundColor: 'yellow',

  '& div' :{
    display: 'flex',
    flexDirection: 'column',
   
    justifyContent: 'center',
    alignItems: 'center',

  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



const DetailWrapper= styled('div')({

 
  display: 'flex',
  flexDirection: 'column',
 
  justifyContent: 'flex-start',
  alignItems: 'center',
   
 width: '80%',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



const Minus= styled('span')({
  color: 'red',
  margin: '0 1rem',
  fontWeight: 'bold'
})
// ====================================================

function CountdownDisplay(props) {
  const match = useParams()

  const matchId = match.id
   
  // (1) get parentId if exists in spotight from URL
  // const {endEst, } = props.spotlight.spotlight

  const spotlightsArray = useSelector(selectSpotlights)

  // --- get spotlight object from mapStateToProps selector---
  // let spotlightDisplayed = props.spotlight.spotlight
  const {endEst }= selectSpotlightFromArray(spotlightsArray, matchId)

//  ########  TEMP DATE FOR SAMPLE ##############################

  // const [currentTime, setCurrentTime] = useState(Date.now()); 
  const [currentTime, setCurrentTime] = useState(1615747644000); //Mar 14, 2021

  useEffect(() => {

    if (endEst) {
      const timer = setInterval(() => {
        setCurrentTime(prevCount => prevCount + 1000); // <-- Change this line!

      }, 1000);
      return () => {
        clearInterval(timer);
      };

    }
  }, [endEst]);

 

  // calculation to define if DATE goal achieved or not
  // convert target Date in ISO to UTC for addition/subtraction etc

  let endDateInMilliseconds , dateDifference, dateDifferenceMS

  if(endEst){
    endDateInMilliseconds = DatetoUTC(endEst)
    dateDifferenceMS =  endDateInMilliseconds - currentTime
   
   dateDifference = msToStringDisplay(Math.abs(dateDifferenceMS))
  
  }else{ console.log('nope not here')}

// -----  return()   --------------------------------------

  return (
    <Wrapper>
      {endEst && dateDifferenceMS > 0 &&
        <DetailWrapper>

          <div>Time till due:</div>

          <DetailRowDifference className='greenHighlight'>

            <DetailItemWrapper>
              <div>wks </div>
              <div>{dateDifference.weeks} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div>days </div>
              <div>{dateDifference.days} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div> hrs </div>
              <div> {dateDifference.hours}</div>

            </DetailItemWrapper>
            <DetailItemWrapper>
              <div>mins</div>
              <div> {dateDifference.minutes} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div> secs</div>
              <div> {dateDifference.seconds}  </div>
            </DetailItemWrapper>

          </DetailRowDifference>
        </DetailWrapper>


      }

      {endEst && dateDifferenceMS <= 0 &&

        <DetailWrapper>

          <div>Time over due:</div>

          <DetailRowDifference className='redHighlight'>
            <DetailItemWrapper>
              <div></div>
              <Minus> - </Minus>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div>wks </div>
              <div>{dateDifference.weeks} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div>days </div>
              <div>{dateDifference.days} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div> hrs </div>
              <div> {dateDifference.hours}</div>

            </DetailItemWrapper>
            <DetailItemWrapper>
              <div>mins</div>
              <div> {dateDifference.minutes} </div>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <div> secs</div>
              <div> {dateDifference.seconds}  </div>
            </DetailItemWrapper>

          </DetailRowDifference>
        </DetailWrapper>
      }


      {!endEst && <div> No Targeted End Date </div>}

    </Wrapper>
  ) // end return
} // end function CountdownDisplay --------------------


 
 export default CountdownDisplay
