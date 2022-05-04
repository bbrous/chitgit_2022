/* function Chit_View_nav_s(props) -------------------
  Chooses between twoPartyChits view or detail view.
  Also changes the color of the tab based on which view.

  parent: Chits - pages/public/sampleSite/samSpots/Chits

------------------------------------*/

import React, {Fragment} from "react"
import {NavLink, useLocation, useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import{ mediumLightGrey, shadowBlue, veryLightGrey, chitLavendar, chitBlueDull} from '../../../../styles/colors'


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
const Wrapper = styled('div')({


  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '.8rem',
  
  padding: '20px 16px',
  borderBottom: '2px solid #CFD0D1',


  [theme.breakpoints.down('sm')] : {
    // fontWeight: 'bold',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2px 0'
    
    // width: '150px'
    
  },


})



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

function ChitViewNav(props) {

  const status = useSelector(selectStatus)
  let personalChitId = status.view.personalChit.id
  let twoPartyChitId = status.view.twoPartyChit.id

  let navigate = useNavigate()
  const dispatch = useDispatch()
  let match = useParams()
  let page = match.pageView
  
  //  console.log('chit VIEW NAV state: ' , view)

  /* func handleViewChange ---------------------------------
     changes the sample/statusview/chit - display - in store
        based on what was clicked
  */
  function handleViewChange(evt) {

    // dispatch(updateStatusView({
    //   pageType: 'chit',
    //   pageView: 'ledger',
    //   type: evt.target.value
    // }))
let chitId
    let newPage = evt.target.value
    newPage === 'personalChits' ? chitId = personalChitId: chitId = twoPartyChitId

// console.log('[ PAGE NAV ] newPage ', newPage);
// console.log('[ PAGE NAV ] chitId ', chitId);

    navigate(`/sample/${evt.target.value}/${chitId}`)
  }

  return (

    <Wrapper>

<FormControl component="fieldset" onChange = {(evt) => handleViewChange(evt) }>

<RadioGroup 
  row aria-label="gender" 
  name="row-radio-buttons-group"
  defaultValue = {page}
>
  <StyledLabel value="twoPartyChits"
 
  control={<StyledRadio />} label="Two Party Chits" />
  <StyledLabel value="personalChits" control={<StyledRadio />} label="Personal Chits" />

   
</RadioGroup>
</FormControl>

    </Wrapper>

  )// end return
}// --- end main  func chitViewNav
  
  // ----------------------------------------------


export default ChitViewNav