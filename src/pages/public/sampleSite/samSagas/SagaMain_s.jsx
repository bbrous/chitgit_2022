/* function SagaMain(props) -------------------
       parent: sampleSite/Plans_s

  Holds Sagas, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'

// import{ 
//   selectSagas
//   // selectSpotlightTaskArray
  
// } from '../../../../app/redux/SagaRedux/sam_SagaSlice'

import Saga from './Saga_s'
// import SagaEntryForm from '../samForms/SagaEntryForm_s'

import SliderComponent from '../../../../common_components/SliderComponent'
//  ---- Material Ui ------------------

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',


  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '100%',
  height: '3rem',
 
  // minHeight: '10rem',
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

const Container= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',


  color: 'charcoal',
  width: '90%',

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

function SagaMain(props) {
  const [arrayOrder, setArrayOrder] = useState(false)

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)
    console.log('[Inside Spotlight Nav] new state is', newState)
  }

  return (
    <MainWrapper>
      <TopWrapper>

        <LeftTopWrapper>Cybill</LeftTopWrapper>
        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='oldest first'
          rightLabel='latest first'
        />
        
        <RightTopWrapper></RightTopWrapper>
        </TopWrapper>

      <Container>

      <NewWrapper> add  section <AddCircleIconWrapper/> </NewWrapper>
        <FormContainer>  
          {/* <SagaEntryForm />  */}
          Form Here
           </FormContainer>
       
        <SectionsContainer>
          <SectionWrapper>
 <div>  Saga main here   </div>
             <Saga/> 
            
          </SectionWrapper>

        </SectionsContainer>



      </Container>

    </MainWrapper>
  )
}

export default  SagaMain
