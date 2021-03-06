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
import {useHistory,   withRouter} from 'react-router-dom'

import{backgroundBlue, chitOrange, chitOrangeVeryLight, veryLightGrey} from '../../../../styles/colors'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import ViewNav from '../../../../pages/navComponents/publicNav/sampleNav/Spotlight_View_nav_s'



// ####################################################################################

// import SortableTasks from './SortableTasks_s'

// ####################################################################################

//  ---- Material Ui ------------------

import InfoIcon from '@mui/icons-material/Info'
import NotesIcon from '@mui/icons-material/Notes';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const Container= styled(Paper)({
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

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: 'white',


})

const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  position: 'absolute',
  top: 0,
  left: '5%',


  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },




})


const ViewLink= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  margin: '0 1rem 0 0',
 
  textDecoration: 'underline',
  height: '2rem',
  color: backgroundBlue,



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },




})




          // ----------------------
          const FormContainer= styled('div')({
            display: 'flex',
            
            justifyContent: 'center',
            alignItems: 'center',
            
            width: '98%',
            margin: '.25rem 0 0 0',
            
            
          backgroundColor: veryLightGrey,
            fontSize: '.8rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '98%',
  margin: '.25rem 0 0 0',
  
  
backgroundColor: 'pink',
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})



// ============================================================


function SpotlightTree(props) {

  let id = props.match.params.detailId


  return (
    <MainWrapper>
        <ViewNavWrapper>
          <ViewNav/>
        </ViewNavWrapper>
        hellow tree
    </MainWrapper>
  )
}


const actions = {
  // // changeDisplaySpotlight,
  // changeSpotlightCompletedStatus,
  // changeDisplaySpotlight
}

const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()
  const Spotlights = makeSelectSpotlights();
 
 
  return (state, ownProps) => 
     {
       const matchid = ownProps.match.params.detailId
       return {
         spotlights: Spotlights(state),
         spotlight: getSpotlight(state, matchid),
         allTasksArray: selectTasks(state),
     
     }}
 

 };
 
 
 
 
 export default withRouter(connect(makeMapStateToProps, actions)(SpotlightTree))
