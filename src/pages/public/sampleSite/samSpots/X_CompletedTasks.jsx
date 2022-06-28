/* function SpotlightTree(props) -------------------
       parent: sampleSite/Spotlights_s

  Holds Spotlight, task form and tasks ... includes sections for
  (sec a) info icon - to get help
  (sec b) current task -- shows last task worked on
  (sec c) Plan()
  (sec d) Task form
  (sec e) Sortable Tasks

  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import {connect} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'

import{backgroundBlue, chitOrange, chitOrangeVeryLight, veryLightGrey} from '../../../../styles/colors'

import ViewNav from '../../../navComponents/publicNav/sampleNav/Spotlight_View_nav_s'

import{ selectSpotlights } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import{ selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'

import { selectTasks } from '../../../../app/redux/taskRedux/sam_tasksSlice'

// 

//  ---- Material Ui ------------------

;
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component


// ============================================================


function CompletedTasks(props) {



  return (
    <MainWrapper>

      <ViewNavWrapper>
        <ViewNav />
      </ViewNavWrapper>

     
      <TasksWrapper> 

        <TaskWrapper>
          <DateWrapper> Tue, Nov 1 2022</DateWrapper>
          <TaskItem> I am an\ Task Item</TaskItem>
          
          <SpotlightItem> Spotlight title </SpotlightItem>
          <SpotlightLink> Go to spotlight </SpotlightLink>
        </TaskWrapper>

      </TasksWrapper>
    </MainWrapper>
  )
}


 
 
 
 
 export default CompletedTasks
 
// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


 


const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '3rem',
 


  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})



          // ----------------------
          const TasksWrapper= styled('div')({
            display: 'flex',
            
            justifyContent: 'flex-start',
            alignItems: 'center',
            
            width: '80%',
            margin: '.25rem 0 0 0',
            
            
          backgroundColor: veryLightGrey,
            


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '95%',
  // margin: '.25rem 0 0 0',
  
  
backgroundColor: 'pink',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const DateWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '22%',
  // margin: '.25rem 0 0 0',
  
  
backgroundColor: 'orange',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const TaskItem= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '22%',
  // margin: '.25rem 0 0 0',
  
  
backgroundColor: 'orange',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const SpotlightItem= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '22%',
  // margin: '.25rem 0 0 0',
  
  
backgroundColor: 'red',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})


const SpotlightLink= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '22%',
  // margin: '.25rem 0 0 0',
  cursor: 'pointer',
  textDecoration: 'underline',
  backgroundColor: 'yellow',
color: 'blue',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})