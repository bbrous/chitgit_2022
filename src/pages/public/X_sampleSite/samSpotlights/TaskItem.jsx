import React, {Fragment, useState, useEffect } from 'react'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'

import{chitOrange, lightGrey, chitOrangeVeryLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../../styles/colors'

import TaskTimerDisplay from './timer/TaskTimerDisplay'
import {startingElapsedTime} from '../../../../app/helpers/timerHelpers'
import { msToStringDisplay} from '../../../../app/helpers/dateHelper'



import MenuPopupTasks from './MenuPopupTasks'
import TimerPopup from './timer/TimerPopup'
import NotePopup from '../samNotes/NotePopup'

// import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CheckIcon from '@material-ui/icons/Check';


// React Sortable HOC ----------------------------------------------
import { SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";


const theme = createMuiTheme(); // allows use of mui theme in styled component

// -----Begin Styling

const ItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '99%',
  // border: '1px solid white',
  margin: '4px 0',
  backgroundColor: 'white',
  
  '&.backgroundCompleted' : {
    backgroundColor: mediumLightGrey,
    color: 'white', 
     
  
  }
  
})



const SpotlightItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '99%',
  // border: '1px solid orange',
  backgroundColor: chitOrangeVeryLight,
  margin: '4px 0',

  '&.backgroundCompleted' : {backgroundColor: mediumLightGrey, color: 'white'}
  
})


const SpotlightTaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
   
  
})

const TaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  
  
})




const TaskBlockWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
 
//  backgroundColor: 'red',
 

  
})

const TaskBlock = styled('div')({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-start',
  // width: '100%',

})

const DragDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'orange',
 
  height: '100%',
  width: '1.2rem',
  margin: '0 8px 4px 2px',
  // marginBottom: '4px',
  cursor: 'pointer',
  
  '&:hover' : {
    // backgroundColor:chitOrangeVeryLight
    border: '1px solid #FADAC1'
  }

  
})

const TitleWrapper= styled('div')({
  
  

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapperCompleted = styled('div')({
  
  

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumLightGrey,
 
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


 
const NotificationWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  width: '100%',
  height: '1.1rem',
  // backgroundColor: 'yellow',
  marginTop: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const SpotLightWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  width: '100%',
  marginBottom: '4px',
 
 

  
})

const StatusWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'red',
  marginLeft: '2.2rem',
  fontSize: '.6rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Status= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  color: 'green'
 
})

const IconWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'green',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const SpotlightTag= styled('div')({
  display:'block',
  color: 'red',
  fontSize: '.8rem',
  textDecoration: 'underline',
  // height: '1rem',
  // backgroundColor: 'yellow',
  cursor: 'pointer',

  '&:hover': {
    color: chitOrange
  },
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// ============================================================

const TasksItem = SortableElement(({ handleClick, value , spotlightData, spotlightId, changeDisplaySpotlight, changeTimerStatus, changeTaskCompletedStatus, changeSpotlightStartStatus} ) => {

  return(
    <div>
      
      Here's a sortable item

    </div>

  )// end SortableItem

})// end SortableItem

export default TasksItem
