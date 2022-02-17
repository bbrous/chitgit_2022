import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import InitialStore from '../store/sampleStore/ex_spot_initialStore'
 


export const spotlightsSlice = createSlice({
  name: 'spotightsSample',
  initialState: InitialStore,

  reducers: {

    addSpotlightToStore: (state, action) => {
  
      let spotlight  = action.payload
 
      
      // {
      //   id: cuid(),
      //   type: 'spotlight', 
      //   parent: '',
      //   title: action.payload.title,
      //   spotlightStatus: 'inactive', 
      //   completedTimeStamp: '',
      //   completed: false,
      //   endEst: action.payload.endEst,
      //   note: '',
      //   chitId: '',
      //   taskArray: []
      // }

      state.push(spotlight)
    },

  // ---------------

    changeSpotlightCompletedStatus: (state, action) => {

    

      let spotId = action.payload.id
      let spotlightStatus = action.payload.spotlightStatus
      let completedTimeStamp = action.payload.completedTimeStamp

      let completedState = spotlightStatus === 'completed'? true: false

    //  get the index of the spotlight Object in store Spotlights Array
      let spotIndex = state.findIndex(index => index.id === spotId)
  
      state[spotIndex].spotlightStatus = spotlightStatus
      state[spotIndex].completedTimeStamp = completedTimeStamp
      state[spotIndex].completed = completedState
   
     

   }, // end CHANGE_SPOTLIGHT_COMPLETED_STATUS

  // ---------------

   updateEditedSpotlight: (state, action) => {


    let spotId = action.payload.id
    let newTitle = action.payload.title
    let newEndEst = action.payload.endEst
    let newParentId = action.payload.parentId

    let spotIndex = state.findIndex(index => index.id === spotId)
    
    state[spotIndex].title = newTitle
    state[spotIndex].endEst = newEndEst
    state[spotIndex].parentId = newParentId

  }, // end updateEditedSpotlight


  // ---------------

  updateSpotlightNoteId: (state, action) => {

console.log('[ updateSpotlightNoteId ] myVar ', action.payload.noteHolderId);
    let spotId = action.payload.noteHolderId
    let noteId = action.payload.noteId
    

    let spotIndex = state.findIndex(index => index.id === spotId)
    
    state[spotIndex].noteId = noteId
 

  }, // end updateSpotlightNoteId


  // ---------------

   changeSpotlightLastVisit: (state, action) => {
 
    let spotId = action.payload.id
    let visitedDate = action.payload.visitedDate
    
 

  //  get the index of the spotlight Object in store Spotlights Array
  let spotIndex = state.findIndex(index => index.id === spotId)

    state[spotIndex].lastVisit = visitedDate


   
 }, // changeSpotlightLastVisit

  // ---------------

 updateTaskArray: (state, action) => {

  let spotId = action.payload.spotId
  let newTaskArray = action.payload.newTaskArray
  
 

//  get the index of the spotlight Object in store Spotlights Array
let spotIndex = state.findIndex(index => index.id === spotId)

  state[spotIndex].taskArray = newTaskArray


 
}, // updateTaskArray

  // ---------------

addToTaskArray: (state, action) => {

  let spotId = action.payload.id
  let id = action.payload.id
  let type = action.payload.type
   
  
 

//  get the index of the spotlight Object in store Spotlights Array
let spotIndex = state.findIndex(index => index.id === spotId)


  // state[spotIndex].taskArray.push = {id: id, type: type}
  state[spotIndex].taskArray.push({id: id, type: type})

 
 
}, // updateTaskArray

  }, //end reducers

}) // end slice spotlightsSlice 


// --- Export actions ---------------------------------------------

export const { 

    addSpotlightToStore, 
    updateEditedSpotlight, 
    changeSpotlightCompletedStatus,
    changeSpotlightLastVisit,
    updateTaskArray,
    addToTaskArray,
    updateSpotlightNoteId

  } = spotlightsSlice.actions



// --- Export selectors ------------------------------------------


export const selectSpotlights = (state) => state.sample.spotlights
export const makeSelectSpotlights = () => (state) => state.sample.spotlights
export const selectTasks = (state) => state.sample.tasks

export const selectSpotlightFromArray = (spotlightArray, id) => {
 
  let spotlight = spotlightArray.find(spotlight => spotlight.id === id) 
  return spotlight

}
 
export const selectSpotlight = (state, id) => {
  let spotlights = selectSpotlights(state)
  let spotlight = spotlights.find(spotlight => spotlight.id === id) 
  return spotlight

}

export const selectFilteredParentSpotlights = (state, array) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.parentId === '') 
  return filteredSpotlights

}

export const selectFilteredInactiveSpotlights = (state, array) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus === 'inactive') 
  return filteredSpotlights

}

export const selectFilteredBegunSpotlights = (state, array) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus === 'begun') 
  return filteredSpotlights

}

export const selectFilteredUnCompletedSpotlights = (state, array) => {
  let spotlights = selectSpotlights(state)
  let filteredSpotlights = spotlights.filter(spotlight => spotlight.spotlightStatus !== 'completed') 
  return filteredSpotlights

}

export const selectFilteredCompletedSpotlights = (state, array) => {
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