import React, {Fragment, useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/X_sam_selectors_Spotlights'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../../styles/colors'

// import{ changeSpotlightCompletedStatus, changeDisplaySpotlight} from '../../../app/redux/actions/mainActions'

import SpotlightDetail from './SpotlightDetail_s'
// import MenuPopupSpotlight from './MenuPopupSpotlight'
// import ClockPopup from './timer/TimerPopup'
// import NotePopup from './NotePopup'

/* -- Spotlight.jsx


*/


// import SpotLightTasks from './SpotLightTasks'
// import SpotLightTaskForm from '../../../forms/SpotLightTaskForm'





// ---Material Ui --------------------
import ForwardIcon from '@material-ui/icons/Forward';
import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper'



const theme = createMuiTheme(); // allows use of mui theme in styled component

// --------------------------------------------------
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
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumGrey,

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
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
  // color: mediumLightGrey,
  
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

const DetailContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  
  width: '98%',
  margin: '0 0 .25rem 0',
  padding: '.5rem .25rem .1rem .25rem', 
    
  
  // color: 'black',
  fontSize: '.8rem',

 
borderTop: '1px solid lightgrey',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '95%',
  height: '100%',
  
  // backgroundColor: 'red',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
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
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckBoxWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   

  


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
const MenuWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   marginLeft: '5px',
   width: '1.5rem',
   zIndex: '95',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const NoteIcon= styled(NotesIcon)({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  fontSize: '1.3rem',
  color: 'white',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1.6rem',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const FormattedCheckIcon = styled(CheckIcon)({

   
  color: 'white' ,
   fontSize: '.8rem',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



// ==================================================

const  Spotlight = (props) => {

    // get spotlight object from mapStateToProps selector
    let spotlightDisplayed = props.spotlight.spotlight

    // deconstruct spotlight object 
    const {id,  parent, completedTimeStamp, spotlightStatus, title, beginTimeStamp, endEst, timeEst, type,  note } = spotlightDisplayed
    

console.log('[SPOTLIGHT] spotlightDisplayed : :::::::::::::', spotlightDisplayed)

// handler functions -----------------

const handleChangeSpotlight= (spotlightId)=>{
   console.log('[Spotlight] - handleChangeSpotlight clicked' )
    // props.changeDisplaySpotlight(spotlightId)
    // props.openCloseSidePanel('hide')
    }



    const handleSpotlightCompletedStatus = () => {

      // 1. get current Spotlight completed status
      console.log('[Spotlight] - handleSpotlightCompletedStatus changed' )
      // console.log('[SPOTLIGHT] handleSpotlightCompletedStatus, id : ', id)
      
      // let currentSpotlightStatus = spotlightData.spotlights[id].spotlightStatus
  
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  
  
  
  
  
      // let newSpotlightCompletedStatus, newSpotlightCompletedTime 
  
      // if(spotlightState === 'inactive'){
      //   newSpotlightCompletedStatus = 'completed'
      //   newSpotlightCompletedTime = new Date()
      // }
      // if(spotlightState === 'completed'){
      //   newSpotlightCompletedStatus = 'begun'
      //   newSpotlightCompletedTime = ''
      // }
      // if(spotlightState === 'begun'){
      //   newSpotlightCompletedStatus = 'completed'
      //   newSpotlightCompletedTime = new Date()
        
      // }
    
      // props.changeSpotlightCompletedStatus(id, newSpotlightCompletedStatus, newSpotlightCompletedTime )
     
    
    
      console.log('[SPOTLIGHT TASKS] -- -------------------------' )
    
    }

    
// ================ return ==================

  return(

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
            <CheckCircleCompleted><FormattedCheckIcon /> </CheckCircleCompleted>
          }
        </CheckCircleWrapper></div>

        <Title>
          {title}

        </Title>
      </TitleWrapper>




      <DetailContainer>




        <DetailWrapper>

          {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

          <SpotlightDetail />




          {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
          <BottomWrapper>
            <CheckBoxWrapper>
              {/* <SpotlightCheckbox   
            checked = {true}  
            // onClick = {(evt)=> handleDefault(evt)}
          /> 
          <div>   make default popup  </div> */}
            </CheckBoxWrapper>

            <IconsWrapper>
              this is icon wrapper
              {/* <NotePopup
                // noteId = {noteId} 
                // type = 'spotlight'
                // spotlightData = {spotlightData}
                // spotlightId = {id}
                // taskId = ''
                // noteHolderId = {id}

                noteId='note_1'
                type='spotlight'
                spotlightData='data'
                spotlightId='spot_3'
                taskId=''
                noteHolderId='note-2'


              /> */}


            </IconsWrapper>
          </BottomWrapper>



        </DetailWrapper>


        <MenuWrapper>
          {/* <MenuPopupSpotlight  id = {id} type = {type}/> */}
          menu here
        </MenuWrapper>

      </DetailContainer>

    </TopWrapper>
    

  )//end return

}//end function SPotlight

// export default withRouter(Spotlight)

const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()

 
  return (state, ownProps) => 
     {
      const matchid = ownProps.match.params.detailId
       return {

         spotlight: getSpotlight(state, matchid),

     
     }}
 
  
 };

export default withRouter(connect(makeMapStateToProps)(Spotlight))