import React from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'
import{chitOrangeLight, veryLightGrey, chitOrange} from '../../../../styles/colors'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'

import Spotlight from './Spotlight_s'
import SpotlightParent from './SpotlightParent_s'
import SpotlightTaskForm from './SpotlightTaskForm_s'
import SpotlightTasks from './SpotlightTasks_s'


import InfoIcon from '@material-ui/icons/Info'
import Paper from '@material-ui/core/Paper'

import { styled, createMuiTheme } from "@material-ui/core/styles"
const theme = createMuiTheme(); // allows use of mui theme in styled component


//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: chitOrangeLight,
  height: '100%',
  // maxWidth: '960px',
  // minHeight: '600px',

  // backgroundColor: 'red',

  width: '100%',

  [theme.breakpoints.down('sm')] : {
     
  },

})

const Container= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: chitOrange,
  width: '80%',

  // minHeight: '10rem',
  height: '90%',
  margin: '2rem 0 5% 0',
  
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: veryLightGrey,


})



// ------------------------------------
const Info= styled(InfoIcon)({
  display: 'block',
   
  position: 'absolute',
  top: '6px',
  right: '6px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
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


// ============================================================

function SpotlightMain_s(props) {

  let allSpotlights = props.spotlights

  console.log('[SpotlightMain]  all spotlights are: ',  allSpotlights)

  let spotlightDisplayed = props.spotlight

  const {parent} = spotlightDisplayed.spotlight
  console.log('[SpotlightMain]  spotlight Displayed is:  ',  spotlightDisplayed)


  return (
    <MainWrapper>

    <Info/>
    
    <Container>

      <SpotlightParent parentId = {parent}/>

       <Spotlight />



      <FormContainer>
        <SpotlightTaskForm />
      </FormContainer>


      <SpotlightTasks 
      // id={id} key={id} 
      />


    </Container>

  </MainWrapper>
  )
}

const makeMapStateToProps = () => {



  const getSpotlight = makeGetSpotlight()
  const spotlights = makeSelectSpotlights();
 //  const taskArray = selectSpotlightTaskArray();
 //  const tasks = selectTasks();
 
  return (state, ownProps) => 
     {
       console.log('[SPOTLIGHT MAIN] - own props: ', ownProps.match.params.detailId)
       const getAllSpotlights = selectSpotlights(state)
       const matchid = ownProps.match.params.detailId

      // const matchid = 'spot_1'
       return {
         spotlights: getAllSpotlights,
         spotlight: getSpotlight(state, matchid),
         // taskArray: taskArray(state, matchid),
         // taskObjects: tasks(state, matchid)
     
     }}
 
  
 };
 
 
 
 
 export default withRouter(connect(makeMapStateToProps)(SpotlightMain_s))
