import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import InitialStore from '../store/sampleStore/ex_spot_initialStore'
import cuid from 'cuid';
import {msToISO} from '../../../app/helpers/dateHelper'



export const spotlightsSlice = createSlice({
  name: 'spotights',
  initialState: InitialStore,

  reducers: {

    addSpotlightToStore: (state, action) => {
      console.log('REDUCER #########################################')
      let spotlight  = {
        id: cuid(),
        type: 'spotlight', 
        parent: '',
        lastVisit: msToISO(1647216060000),
        title: action.payload.title,
        spotlightStatus: 'inactive', 
        completedTimeStamp: '',
        completed: false,
        endEst: action.payload.endEst,
        note: '',
        chitId: '',
        taskArray: []
      }

      state.push(spotlight)
    },

    changeSpotlightCompletedStatus: (state, action) => {

    

      let spotId = action.payload.spotId
      let spotlightStatus = action.payload.spotlightStatus
      let completedTimeStamp = action.payload.completedTimeStamp

      let completedState = spotlightStatus === 'completed'? true: false

    //  get the index of the spotlight Object in store Spotlights Array
      let spotIndex = state.findIndex(index => index.id === spotId)
  
      state[spotIndex].spotlightStatus = spotlightStatus
      state[spotIndex].completedTimeStamp = completedTimeStamp
      state[spotIndex].completed = completedState
   
     
   }, // end CHANGE_SPOTLIGHT_COMPLETED_STATUS

   changeSpotlightLastVisit: (state, action) => {

    let spotId = action.payload.spotId
    let visitedDate = action.payload.visitedDate
    
    console.log('[sam_reducer_Spotlight] --- I got here')

  //  get the index of the spotlight Object in store Spotlights Array
  let spotIndex = state.findIndex(index => index.id === spotId)

    state[spotIndex].lastVisit = visitedDate

 
   
 }, // changeSpotlightLastVisit

 updateTaskArray: (state, action) => {

  let spotId = action.payload.spotId
  let newTaskArray = action.payload.newTaskArray
  
  console.log('[sam_reducer_Spotlight] --- I got here')

//  get the index of the spotlight Object in store Spotlights Array
let spotIndex = state.findIndex(index => index.id === spotId)

  state[spotIndex].taskArray = newTaskArray


 
}, // updateTaskArray



  }, //end reducers

}) // end slice spotlightsSlice 


// --- Export actions ---------------------------------------------

export const { 

  addSpotlightToStore, 
    updateSpotLightInStore, 
    changeSpotlightCompletedStatus,
    changeSpotlightLastVisit,
    updateTaskArray

  } = spotlightsSlice.actions



// --- Export selectors ------------------------------------------


export const selectSpotlights = (state) => state.sample.spotlights
export const makeSelectSpotlights = () => (state) => state.sample.spotlights
export const selectTasks = (state) => state.sample.tasks

export const selectSpotlightFromArray = (spotlightArray, id) => {
 
  let spotlight = spotlightArray.find(spotlight => spotlight.id === id) 
  return spotlight

}

// console.log('s_SELECTORS ---- spotlights : ', selectSpotlights)
// console.log('s_SELECTORS ---- spotlights : ', selectTasks)

export const selectSpotlight = (state, id) => {
  let spotlights = selectSpotlights(state)
  let spotlight = spotlights.find(spotlight => spotlight.id === id) 
  return spotlight

}

export const selectFilteredParentSpotlights = (state, status) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.parentId === '') 
  return filteredSpotlights

}

export const selectFilteredInactiveSpotlights = (state, status) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus === 'inactive') 
  return filteredSpotlights

}

export const selectFilteredBegunSpotlights = (state, status) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus === 'begun') 
  return filteredSpotlights

}

export const selectFilteredUnCompletedSpotlights = (state, status) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus !== 'completed') 
  return filteredSpotlights

}

export const selectFilteredCompletedSpotlights = (state, status) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus === 'completed') 
  return filteredSpotlights

}



export const selectParentSpotlight = (spotlightArray, id) => {
   
  let spotlight = spotlightArray.find(spotlight => spotlight.id === id) 
  return spotlight

}

const getSpotlight = (state, props) => state.sample.spotlights.find(spotlight => spotlight.id === props)

// selects single spotlight

export const makeGetSpotlight = () => createSelector(
  getSpotlight,
  spotlight => ( {spotlight})
)


// selects single spotlight

export const getAllSpotlights = () => createSelector(
  selectSpotlights,
    spotlights => spotlights
)

//  selects ordered task array from spotlight

export const selectSpotlightTaskArray = () => createSelector(
  getSpotlight,
  spotlight => spotlight.taskArray
)





// --- default Export reducers -----------------------------------

export default spotlightsSlice.reducer