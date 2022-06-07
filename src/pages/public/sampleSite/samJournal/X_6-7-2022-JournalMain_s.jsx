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



import JSections from './JSections_s'
// import JournalEntryForm from '../samForms/JournalEntryForm_s'

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

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
// backgroundColor: 'red',
  width: '100%',
  // height: '3rem',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const FilterWrapper = styled('div')({
   position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '2rem',
  color: darkGrey,
  fontSize: '.8rem',
// backgroundColor: 'yellow',
paddingLeft: '6px',
 marginBottom: '1rem',
  // height: '3rem',
  marginTop: '6px',
  
overflow: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})
const FilterHeader = styled('div')({
 position: 'relative',
  color: chitAquaBlue,
  fontWeight: 'bold',
  fontSize: '.85rem',
  minWidth: '4rem',


  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})



const CategoryWrapper = styled('div')({
  position: 'relative' ,
  display: 'flex',
  minWidth: '25%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginRight: '1.5rem',
  // backgroundColor: 'orange',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const KeywordWrapper = styled('div')({
  position: 'relative' ,
  display: 'flex',
  maxWidth: '50%',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginRight: '1.5rem',
  // backgroundColor: 'orange',

 overflow: 'hidden',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const FilterLabel = styled('span')({
 minWidth: '5rem',
 color: headerGrey,
 fontWeight: 'bold',
})

const Filter = styled('span')({

/* 
only works with Display: block not flex
*/

position: 'relative' ,
  display: 'block',
  overflow: 'hidden',
      
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})



const SliderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '100%',
  
 marginTop: '16px',

  
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
  
// backgroundColor: 'grey',
  width: '99%',
  
  paddingLeft: '2px',
 
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
  margin: '6px 0 5% 0',

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
  backgroundColor: mediumLightGrey,
  paddingTop: '6px',

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

function JournalMain(props) {
  const [arrayOrder, setArrayOrder] = useState(false)

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



          <FilterWrapper>
            <FilterHeader>Filters</FilterHeader>

            <CategoryWrapper>

              <FilterLabel>Category :  </FilterLabel>
              <Filter>Work</Filter>
            </CategoryWrapper>

            <KeywordWrapper>
              <FilterLabel>Keywords :  </FilterLabel>
              <Filter>deck, projectsdeck, projectsdeck, projectsdeck, projectsdeck, projectsdeck, projects</Filter>
            </KeywordWrapper>

          </FilterWrapper>



        </TopWrapper>
     
        
     
       
        <SectionsContainer>
          <SectionWrapper>

             <JSections/> 
             <>  EntryFormHere Button  </>
          </SectionWrapper>

        </SectionsContainer>



      </Container>

    </MainWrapper>
  )
}

export default  JournalMain
