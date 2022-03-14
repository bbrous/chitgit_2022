/* function LogMain(props) -------------------
       parent: sampleSite/Plans_s

  Holds Logs, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'

import{ selectLogs
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/logRedux/X_sam_selectors_Logs'

import Log from './Log_s'
import LogEntryForm from '../samForms/LogEntryForm_s'
import LogHeader from './LogHeader_s'
import SliderComponent from '../../../../common_components/SliderComponent'
//  ---- Material Ui ------------------

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const OuterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
position: 'relative',

  backgroundColor: 'white',
 

  // minHeight: '10rem',
  // height: '90%',
 width: '100%',
 height: '100%',
 overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },


})
const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const FilterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '90%',
  padding: '0 12px',
  // height: '3rem',
  margin: '.5rem  0 .5rem 0',
 
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const LeftTopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1%',
  color: backgroundBlue,
  fontSize: '1.2rem',
// backgroundColor: 'yellow',
  width: '33%',
  height: '3rem',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const RightTopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '33%',
  height: '3rem',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const Container= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',


  color: 'charcoal',
  width: '95%',

  // minHeight: '10rem',
  // height: '90%',
  margin: '0 0 5% 0',

  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

  backgroundColor: 'white',


})


const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  minHeight: '13rem',
  backgroundColor: 'lightGrey',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const SectionsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  minHeight: '13rem',
  // backgroundColor: 'yellow',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const NewWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '99%',
  height: '3rem',
  paddingLeft: '2px',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const SectionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  minHeight: '13rem',
  // backgroundColor: 'orange',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})


const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: 'grey',
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: 'lightGrey',
    borderRadius: '50px',
  },

})
 

// ===========================================

function LogMain(props) {
  const [arrayOrder, setArrayOrder] = useState(false)

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)
    console.log('[Inside Spotlight Nav] new state is', newState)
  }

  return (
    <OuterContainer> 
      <LogHeader/>

    <MainWrapper>
      
 
<FilterWrapper> 

<SliderComponent
  handleSwitchState={handleSwitchState} //gets new state from child switch
  leftLabel='oldest first'
  rightLabel='latest first'
/>
</FilterWrapper>
 
      <Container>


        <FormContainer>  <LogEntryForm />  </FormContainer>
       
        <SectionsContainer>
          <SectionWrapper>

             <Log/> 
          </SectionWrapper>

        </SectionsContainer>



      </Container>

    </MainWrapper>
    </OuterContainer>
  )
}

export default  LogMain
