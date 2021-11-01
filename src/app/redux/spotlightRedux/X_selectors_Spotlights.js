import { createSelector } from 'reselect'
// import { selectData } from '../../selectors/Common_selectors'

//  note: selectData gets the "data" slice of Redux store


// Get all spotlights --------------------

export const selectSpotlights = (state) => state.data.spotlights
export const makeSelectSpotlights = () => (state) => state.data.spotlights



// export const selectSpotlight = (state, id) => {
//   let spotlights = selectSpotlights(state)
//   let spotlight = spotlights.find(spotlight => spotlight.id === id) 
//   return spotlight

// }

// Get spotlight -----THIS WORKS---------------





// const getSpotlight = (state, props) => state.data.spotlights.find(spotlight => spotlight.id === props)


// // selects single spotlight

// export const makeGetSpotlight = () => createSelector(
//     getSpotlight,
//     spotlight => ( {spotlight})
// )

// //  selects ordered task array from spotlight

// export const selectSpotlightTaskArray = () => createSelector(
//   getSpotlight,
//   spotlight => spotlight.taskArray
// )

// //  selects tasks from spotlight
// // export const selectTasks = createSelector(
// //   getSpotlight,
// //   spotlight => spotlight.tasks
   
// // )

// export const selectTasks = () => createSelector(
//   getSpotlight,
//   spotlight => spotlight.tasks
// )




