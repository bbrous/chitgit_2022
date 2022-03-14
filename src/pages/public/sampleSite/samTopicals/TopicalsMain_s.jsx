/* function TopicalsMain(props) -------------------
       parent: sampleSite/Topicalss_s

  Holds Topicals,

  parent: Topicals - pages/public/sampleSite/samSpots/Topicals
------------------------------------*/

import React , {useState} from 'react'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'

import { useParams } from 'react-router'

import TopicalHeader from './TopicalHeader_s'
import TopicalDetail from './TopicalsContent_s'
import SliderComponent from '../../../../common_components/SliderComponent'
import TopicalFilters from './TopicalFilters_s'


// import TopicalsTaskForm from '../samForms/TopicalsTaskForm_s'
// import SortableTasks from './SortableTasks_s'

//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'



import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Container = styled('div')({
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


const MainWrapper = styled('div')({
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
 overflow: 'auto',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },


})

const FilterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '95%',
  padding: '0 12px',
  // height: '3rem',
  margin: '.5rem  0 .5rem 0',
 
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
  marginTop: '1rem',
 
  // width: '50%',
  height: '100%',
 
  // minHeight: '10rem',
  

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const FormWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
backgroundColor: 'lightgrey',
  width: '95%',
  height: '8rem',
  paddingBottom: '6rem',
 


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})
 

 

// ====================================================

function TopicalsMain(props) {
  let match = useParams()
  // console.log('@@@ [TopicalsMAIN]- params' , match)


  const [arrayOrder, setArrayOrder] = useState(false)

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)
    console.log('[Inside Spotlight Nav] new state is', newState)
  }


  return (
    <Container>
    <TopicalHeader/>
      <MainWrapper>
    
      

        <FilterWrapper> 
         <TopicalFilters/>
        <SliderWrapper>

         
        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='oldest first'
          rightLabel='latest first'
        />
   
        </SliderWrapper>


        </FilterWrapper>     

          <FormWrapper> Hidden Form Component </FormWrapper>

          <TopicalDetail/>



      </MainWrapper>
    </Container>
  )
}// end func TopicalsMain


 export default TopicalsMain