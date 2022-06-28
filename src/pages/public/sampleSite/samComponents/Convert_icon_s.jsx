/* function Convert_item_s -------------
     
  Converts a task to a Spotlight - opens form in Modal

  1. Props pass taskId of task
     Props pass spotId of parent spotlight

  2. Find - task title from allTasks using taskId 
  3. Create new spotlight 
      a.  parentId = spotId
      b.  title = task title
      c.  newSpotId = cuid()
   4. * update * taskId from spotId's taskArray   
            with newSpotlightId
             
        
  
parent: TaskItem - pages/public/sampleSite/samSpots/TaskItem  
------------------------------------*/

import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'

import{mediumLightGrey, chitOrange, } from '../../../../styles/colors'
import cuid from 'cuid'  // #### for sample site only ####


import { selectSpotlights, addSpotlightToStore, convertTaskInTaskArray } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'
import { selectTasks, deleteTask } from '../../../../app/redux/taskRedux/sam_tasksSlice'

// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';

import CachedIcon from '@mui/icons-material/Cached';


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component






function Convert(props) {

  let dispatch = useDispatch()
 
  let {taskId, parentId} = props

 const spotlightsArray = useSelector(selectSpotlights)
 const tasksArray = useSelector(selectTasks)


 function handleClick(taskId, parentId, spotlightsArray, tasksArray){
  let spotlightObject = spotlightsArray.find(spot => spot.id === parentId)
  let taskObject = tasksArray.find(task => task.id === taskId)

  let taskTitle = taskObject.title

  let newSpotlightId = cuid()

  
  let newSpotlightData = {
    id: newSpotlightId,
    type: 'spotlight',
    parentId: parentId,
    currentTaskId: '',
    title: taskTitle,
    spotlightStatus: 'inactive',
    completedTimeStamp: '',
    // completed: false,
    lastVisit: new Date().toISOString(),
    endEst: '',
    note: '',
    chitId: '',
    taskArray: []

  }


  dispatch(addSpotlightToStore(newSpotlightData))
  // console.log('@@@ [Convert]- taskTitle' , taskTitle)
  console.log('@@@ [Convert]- taskId' , taskId)

  dispatch(convertTaskInTaskArray({id: taskId, spotId: parentId, newSpotlightId: newSpotlightId}))

  dispatch(deleteTask({id: taskId}))
}

  return (
    <>

   
      <LightTooltip   title = 'Convert to Spotight'  arrow> 
      <Icon


        onClick={()=>handleClick(taskId, parentId, spotlightsArray, tasksArray)}
       
      />
      </LightTooltip  >
 






    </>
  )
}


export default Convert

// -----------------------------------------------------------------

 
 

const Icon= styled(CachedIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.95rem',
  // color: chitOrange,
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
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
// ================================
