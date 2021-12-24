import React, {Fragment, useState, useEffect } from 'react'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/X_sam_selectors_Spotlights'

import{chitOrange, lightGrey, chitOrangeVeryLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../../styles/colors'

import TaskItem from './TaskItem'


// React Sortable HOC ----------------------------------------------
import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CheckIcon from '@material-ui/icons/Check';




const theme = createMuiTheme(); // allows use of mui theme in styled component


// ==== Begin Styling ==================================================



// =======================================================

const TasksList = SortableContainer(({ items, 
  // spotlightData, spotlightId,
  changeDisplaySpotlight, changeTimerStatus, changeTaskCompletedStatus, changeSpotlightStartStatus} ) => {
 


  // console.log(' [SPOTLIGHT TASKS] - OOOOOOOO - items', items)
  // console.log(' [SPOTLIGHT TASKS SORT ] MARKEE - OOOOOOOO - props', spotlightData)


  return (

    <ul>
      {items.map((value, index) => (
        
            
        <TaskItem 
          key={`item-${index}`} 
          index={index} 
          value={value} 
          // spotlightData = {spotlightData}
          // spotlightId = {spotlightId}
          changeDisplaySpotlight= {changeDisplaySpotlight}
          changeTimerStatus = { changeTimerStatus}
          changeTaskCompletedStatus = {changeTaskCompletedStatus}
          changeSpotlightStartStatus = {changeSpotlightStartStatus}
          
        />
         
      ))}
    </ul>
  );
});

export default TasksList
