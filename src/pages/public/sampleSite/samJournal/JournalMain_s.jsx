/* function JournalMain(props) -------------------
       parent: sampleSite/Plans_s

  Holds Journal sections, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, chitAquaBlue, darkGrey, headerGrey, mediumLightGrey, chitLightGreen} from '../../../../styles/colors'

import { Scrollbars } from 'react-custom-scrollbars';

import JSections from './JSections_s'
// import JournalEntryForm from '../samForms/JournalEntryForm_s'
import NewJournalForm from '../samForms/NewJournalForm_s';
import SliderComponent from '../../../../common_components/SliderComponent'
//  ---- Material Ui ------------------

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

// =================================================================


function JournalMain(props) {
  const [arrayOrder, setArrayOrder] = useState(false)

  const [openForm, setOpenForm] = useState(false)


  const handleSwitchState = (newState) => {
    setArrayOrder(newState)
    // console.log('[Inside Spotlight Nav] new state is', newState)
  }

  return (
    <MainWrapper>


      <Container>
        <TopWrapper>
          <SliderWrapper>
            <SliderComponent
              handleSwitchState={handleSwitchState} //gets new state from child switch
              leftLabel='oldest first'
              rightLabel='latest first'
            />
          </SliderWrapper>



          <ButtonWrapper>

            <FormButton
            // startIcon={<AddIcon/>}
            onClick={()=>setOpenForm(true)}
            >
              add Section
            </FormButton>

          </ButtonWrapper>



        </TopWrapper>



        <MiddleWrapper
        style={{
          height: openForm ? '30vh' : ''
           
        }}
        
        >
        <Scrollbars >
          <SectionsContainer>
         
            <SectionWrapper>
            
              <JSections />
             
            </SectionWrapper>
            
          </SectionsContainer>
          </Scrollbars>
        </MiddleWrapper>
        {openForm && 
        <FormWrapper 
        // style={{
        //   backgroundColor: openForm ? 'salmon' : ''
           
        // }}
        
        >
           
          <NewJournalForm setOpenForm = {setOpenForm}/>






        </FormWrapper>
}
      </Container>

    </MainWrapper>
  )
}

export default JournalMain




//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  backgroundColor: 'green',

  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TopWrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
backgroundColor: 'white',
  width: '100%',
  marginBottom: '6px',
  padding: '.5rem 0 .75rem 0',
  
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})





const SliderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
 
  width: '100%',
  padding: '1rem 0',
//  marginTop: '16px',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})




const ButtonWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 

[theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const FormButton = styled(Button)({

 

  display: 'flex',
  textTransform: 'none',
  
 
  color: 'white',
  backgroundColor:  '#727376',
  fontWeight: 'normal',
  fontSize: '.85rem',
 
  width: '9.5rem',
  height: '1.2rem',
// margin: '0 1rem',
  
  '&:hover' : {
    // backgroundColor: chitBlueDull,
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#3B30CC'

  }


})

// ---- 



const MiddleWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  // minHeight: '13rem',
  backgroundColor: 'yellow',

  // minHeight: '10rem',

height: '73vh',
  
  overflowY: 'auto',

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
  width: '96%',
  padding:'0 2%',

  // minHeight: '10rem',
  // height: '90%',
  margin: '6px 0 5% 0',

  backgroundColor: 'pink',


  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },




})



const SectionsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: mediumLightGrey,
  paddingTop: '6px',

  width: '99%',
  minHeight: '13rem',
  
  // backgroundColor: 'yellow',

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
  // backgroundColor: 'blue',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})




const FormWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  // minHeight: '13rem',
  backgroundColor: 'orange',

  // minHeight: '10rem',
  // height: '90%',

  height: '43vh',
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})
 

// ========= END ==================================