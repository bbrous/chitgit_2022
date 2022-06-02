/* function editIcon_s -------------
     
 Opens edit form in Modal
  
parent: Spotlight - pages/public/sampleSite/samSpots/Spotlight
        and TaskItem - pages/public/sampleSite/samSpots/TaskItem  
------------------------------------*/

import React from 'react'
 
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import { useSelector} from 'react-redux'

import{mediumLightGrey, chitOrange, lightGrey, chitBurgandyDull, } from '../../../../styles/colors'
// import{changeLastSpotlightDisplayed,  openModal, closeModal} from '../../../../app/redux/statusRedux/sam_action_Status'
// import{ selectPlans } from '../../../../app/redux/planRedux/sam_selectors_Plans'

import { selectSpotlights } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import {createChildrenSpotlightsArray} from '../../../../app/helpers/spotlightHelpers'
// Material UI --------------------
 
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button'



import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

// ================================


function handleClick(passedId, passedSource){

  console.log('[Edit Icon - I be clicked - source', passedSource)
  console.log('[Edit Icon - I be clicked - id', passedId)
 
}

// ==== MAIN FUNCTION EDIT ==========================================

function Edit(props) {

  const allSpotlights = useSelector(selectSpotlights)

  const {source, id} = props
  const [open, setOpen] = React.useState(false);

 

  const handleDialogClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  // Temp variables @@@@@@@@@@@@@@@@@@@@@@@@@@@@
  let type = 'task'
  let passedId = 'spot_1_task_1'
  // let noteId = ''


  // --- edit function ----------------------------
 
  const handleClick = (id, source) => {
    setOpen(true);

  
    let allSpotlightsToBeDeleted =[]
    let childrenSpotlights =  createChildrenSpotlightsArray(id, allSpotlights)
    allSpotlightsToBeDeleted = [id, ...childrenSpotlights]

    console.log('[ DeleteIcon  ] allSpotlightsToBeDeleted ', allSpotlightsToBeDeleted);





  };

  return (
    <>

   
      <LightTooltip   title = 'Delete'  arrow> 
      <Icon


        onClick={()=>handleClick(id, source)}
       
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
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleDialogClose}
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


export default Edit


 
 

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
