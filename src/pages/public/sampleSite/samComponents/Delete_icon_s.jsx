/* Delete_icon

  Displays the garbage icon used by all ChitGit apps.
  A given app's delete function can trigger multiple actions.
  For example deleting a task removes the task from the tasks collection, 
  and delete's the task from the task's parent spotlight taskArray.

  @props - id - from item
         - source - task, spotlight, logSection etc.




*/




import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { mediumLightGrey, chitOrange, lightGrey, chitBurgandyDull, } from '../../../../styles/colors'

// --- redux imports

import { deleteTask, selectTasks } from '../../../../app/redux/taskRedux/sam_tasksSlice'
import { deleteTaskFromSpotlightArray, selectSpotlights, deleteSpotlight } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice';

// --- helper imports

import { createChildrenSpotlightsArray, createTaskListForSpotlight } from '../../../../app/helpers/spotlightHelpers';


// Material UI --------------------

import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'



import { styled, createTheme } from "@mui/material/styles"
import { withStyles } from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


export default function Delete_icon_s(props) {

  const { source, id, parentSpotlight } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const spotlightsArray = useSelector(selectSpotlights)

  let sourceMessage
  if (source === 'spotlight') {
    sourceMessage = `note - If you delete this spotlight, all descendent tasks and spotlights of this spotlight will also be deleted.  If you do not want that  - mark the spotlight as completed and it will be archived. Are you sure you want to delete this spotlight?  `
  } else {
    sourceMessage = `Are you sure you want to delete ${source} ?`
  }

  // --- Popup Dialog functions
  const [open, setOpen] = React.useState(false)

  const handleClick = (id, source) => {
    setOpen(true);

  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDelete = (id, source, parentSpotlight) => {




    // --- task delete --------------------------- 

    if (source === 'task') {

      /* --- delete task ---
        2 actions : 
            a. deletes task id from task collection
            b. deletes task id from parent spotlight's taskArray
      */


      let taskData = {
        id: id,
        source: source,

      }
      let spotlightTaskData = {
        id: id,
        source: source,
        parentSpotlight: parentSpotlight

      }

      dispatch(deleteTaskFromSpotlightArray(spotlightTaskData))
      dispatch(deleteTask(taskData))

    }// end if source === task

    // --- spotlight delete --------------------------- 

    if (source === 'spotlight') {

      /* --- delete spotlight ---
        1. create array of spotlight with id and all it's descendent spotlights
        2. map through spotlights array.taskArray to get all descendent tasks
           for spotlight Id and it's spotlight descendents
        3. map through spotlights and delete them (dispatch delete)
        4. map through tasks and delete them (dispatch delete)
      */



      let spotlightsChildren = createChildrenSpotlightsArray(id, spotlightsArray)
      let allSpotlightsToBeDeleted = [...spotlightsChildren, id]


      // ---2 get all descendent tasks

      let descendentTasks = []

      allSpotlightsToBeDeleted.map((spotlight, index) => {

        console.log('[ deleteIcon  ] - xxxxx', spotlight)


        let spotlightObjectTasks = createTaskListForSpotlight(spotlight, spotlightsArray)


        descendentTasks.push(...spotlightObjectTasks)
        return descendentTasks
      }
      ) //end map




      allSpotlightsToBeDeleted.forEach(spotlight => {
        setOpen(false)

        let spotlightData = {
          id: spotlight,
          source: source,

        }

        dispatch(deleteSpotlight(spotlightData))

      })

      descendentTasks.forEach(task => {


        let taskData = {
          id: task,
          source: source,

        }

        dispatch(deleteTask(taskData))

        console.log('[ deleteIcon  ] - delete Spotlight xxx ', taskData)


      })

      navigate(`/sample/spotlights`)


    }//  end if source === spotlight 


  }// --- end handleDelete


// --- main return Delete_icon -----------------------------

  return (
    <>


      <LightTooltip title='Delete' arrow>
        <Icon


          onClick={() => handleClick(id, source)}

        />
      </LightTooltip  >


      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <div>
            {sourceMessage}
          </div>
        </DialogContent>
        <DialogActions>
          <StyledButton

            variant="contained"
            color="primary"
            onClick={() => handleDelete(id, source, parentSpotlight)}
          >
            Yes - delete
          </StyledButton>

          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"

            onClick={handleDialogClose}
          >
            Cancel
          </StyledButton>

        </DialogActions>
      </Dialog>

    </>
  )
}


// ----------------------------



const Icon= styled(DeleteIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.95rem',
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

const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 1.5rem 0 6px',
 
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})


const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);
