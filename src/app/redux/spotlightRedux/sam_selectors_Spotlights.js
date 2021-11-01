
// *** Sample Spotlight Selectors ----------

import { createSelector } from 'reselect'



// Get all spotlights --------------------

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








