/* function Chit_View_nav_s(props) -------------------
  Chooses between ledger view or calendar view.
  Also changes the color of the tab based on which view.

  parent:   pages/public/sampleSite/samChits/personal/personalMain

------------------------------------*/

import React, {Fragment} from "react"

import {useDispatch, useSelector} from 'react-redux'

import{ chitOrangeMedium, shadowBlue, chitBlueDull} from '../../../../styles/colors'


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
    fontSize: '.8rem',
    color: 'red'
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

function TwoPartyChitViewNav(props) {
  const dispatch = useDispatch()
  let view = useSelector(selectStatus).view.twoPartyChit.display
  let twoPartyId = useSelector(selectStatus).view.twoPartyChit.id
  //  console.log('Chit VIEW NAV state: ' , view)

  /* func handleViewChange ---------------------------------
     changes the sample/statusview/Chit - display - in store
        based on what was clicked
  */
  function handleViewChange(evt) {

    dispatch(updateStatusView({
      pageType: 'twoPartyChit',
      pageView: evt.target.value,
      type: 'twoPartyChits',
      id: twoPartyId
    }))

  }

  return (

    <Fragment>

<FormControl component="fieldset" onChange = {(evt) => handleViewChange(evt) }>

<RadioGroup 
  row aria-label="twoParty" 
  name="row-radio-buttons-group"
  value = {view ?? ""}
>
<StyledLabel value="ledger" control={<StyledRadio />} label="Ledger View" />
    <StyledLabel value="karmic" control={<StyledRadio />} label="Karmic View" />
    

</RadioGroup>
</FormControl>

    </Fragment>

  )// end return
}// --- end main  func twoPartyChitViewNav
  
  // ----------------------------------------------


export default TwoPartyChitViewNav