/* function Spotlight_View_nav_s(props) -------------------
  Chooses between tree view or detail view.
  Also changes the color of the tab based on which view.

  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights

------------------------------------*/

import React, {Fragment} from "react"

import {useDispatch, useSelector} from 'react-redux'

import{ chitOrangeMedium, shadowBlue, chitBlueDull, veryLightGrey ,} from '../../../../styles/colors'


import{ selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'
import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'


// --- MUI ---
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const StyledLabel= styled(FormControlLabel)({
  color: 'grey',
  fontSize: '.5rem',
  '& .MuiFormControlLabel-label ': {
    fontSize: '.8rem'
  }
  

})
// -----------------------------------

const StyledRadio = withStyles({
  root: {
    
    color: chitBlueDull,
   
    icon: {
      color: chitBlueDull,
      
    },
    '&$checked': {
      color: chitBlueDull,
    },
    '&:hover': {
      backgroundColor: 'none',
    },

    '& svg ' : {
      width : '1rem',
      height: '1rem',
      // backgroundColor: 'green'
    
    }

    
    
  },

  
  
  checked: {},
})((props) => <Radio color="default" {...props} />);



// ================================================

function SpotlightViewNav(props) {
  const dispatch = useDispatch()
  let view = useSelector(selectStatus).view.spotlight.display


  // console.log('SPOTLIGHT VIEW NAV view ====================: ', view)

  /* func handleViewChange ---------------------------------
     changes the sample/statusview/spotlight - display - in store
        based on what was clicked
  */
  function handleViewChange(evt) {

    dispatch(updateStatusView({
      pageType: 'spotlight',
      pageView: evt.target.value
    }))

  }

  return (

    <Fragment>

      <FormControl component="fieldset" onChange={(evt) => handleViewChange(evt)}>

        <RadioGroup
          row aria-label="gender"
          name="row-radio-buttons-group"
          value = {view ?? ""}
        >
          <StyledLabel value="detail" control={<StyledRadio />} label="Spotlight View" />
          <StyledLabel value="completedTasks" control={<StyledRadio />} label="Completed Tasks View" />

          <StyledLabel value="tree" control={<StyledRadio />} label="Tree View" />

        </RadioGroup>
      </FormControl>

    </Fragment>

  )// end return
}// --- end main  func SpotlightViewNav

  // ----------------------------------------------


export default SpotlightViewNav