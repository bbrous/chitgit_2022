/* function SpotlightMain(props) -------------------
       parent: sampleSite/Spotlights_s

  Holds Spotlight, task form and tasks ... includes sections for
  (sec a) info icon - to get help
  (sec b) parent spotlight (if exists)
  (sec c) Spotlight()
  (sec d) Spotlight/Task form
  (sec e) Sortable Tasks

  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights
------------------------------------*/

import React from 'react'

import{chitOrange,  veryLightGrey} from '../../../../styles/colors'

import { useParams } from 'react-router'
import Spotlight from './Spotlight_s'
import Parent from './Parent_s'

import SpotlightTaskForm_s from '../samForms/SpotlightTaskForm_s'
import SortableTasks from './SortableTasks_s'


//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'



import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------



const Container = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',


  color: chitOrange,
  width: '90%',

  // minHeight: '10rem',
  // height: '90%',
  margin: '2.5rem 0 5% 0',

  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

  backgroundColor: 'white',


})


// ----------------------
const FormContainer = styled('div')({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  width: '98%',
  margin: '.25rem 0 0 0',


  backgroundColor: veryLightGrey,
  fontSize: '.8rem',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '98%',
  margin: '.25rem 0 0 0',


  backgroundColor: 'pink',
  fontSize: '.8rem',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ============================================================

function SpotlightMain(props) {
  let match = useParams()
  // console.log('@@@ [SPOTLIGHTMAIN]- params' , match)
  return (
    <>

      <Container>
    
        <Parent />
       
        <Spotlight />

        <FormContainer>

 

          <SpotlightTaskForm_s />





        </FormContainer>

        <TaskWrapper>
          <SortableTasks />
        </TaskWrapper>



      </Container>
    </>
  )
}// end func SpotlightMain


 export default SpotlightMain
