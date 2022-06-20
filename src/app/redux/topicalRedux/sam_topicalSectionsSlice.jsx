
// *** Sample topical sections ----------

import { createSelector } from 'reselect'

// Get all topicals sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_topicalSections_initialStore'

export const topicalSectionsSlice = createSlice({
  name: 'topicalSectionsSample',
  initialState: InitialStore,

  reducers: {
 
    addTopicalSectionsToStore: (state, action) => {

      let topical = action.payload

      state.push(topical)
    },

    
  updateEditedTopicalSection: (state, action) => {

    let topicalSectionId = action.payload.id

    let editedTopicalSectionTopic = action.payload.topic
    let editedTopicalSectionKeywordArray = action.payload.keywordArray
    let editedTopicalSectionTitle = action.payload.title
    let editedTopicalSectionPeopleArray = action.payload.peopleArray
    let editedTopicalSectionLastEdit = action.payload.lastEdit
    let editedTopicalSectionDate = action.payload.topicalDate

    let editedTopicalSectionDetail = action.payload.detail


    let topicalIndex = state.findIndex(index => index.id === topicalSectionId)

console.log('[ sam_topicalSectionsSlice ] state[topicalIndex] ', state[topicalIndex]);
console.log('[ sam_topicalSectionsSlice ] editedTopicalSectionDate ', editedTopicalSectionDate);


    state[topicalIndex].topic = editedTopicalSectionTopic
    state[topicalIndex].detail = editedTopicalSectionDetail
    state[topicalIndex].keywordArray = editedTopicalSectionKeywordArray
    state[topicalIndex].title = editedTopicalSectionTitle
    state[topicalIndex].peopleArray = editedTopicalSectionPeopleArray
    state[topicalIndex].lastEdit = editedTopicalSectionLastEdit
    state[topicalIndex].topicalDate = editedTopicalSectionDate
   


  }, // end updateEditedTopicalSection


//   deleteTopicalSection: (state, action) => {


//     let topicalSectionId = action.payload

//     return state.filter(item => item.id !== topicalSectionId)
 
// }, // end deleteTopicalSection


}

}) // end slice topicalSectionssSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTopicalSectionsToStore, 
  updateEditedTopicalSection,
  addTopicalSectionsHolder 

} = topicalSectionsSlice.actions



// --- Export selectors ------------------------------------------

export const selectTopicalSections = state => state.sample.topicalSections

export const selectTopicalSectionFromArray = (topicalSectionArray, id) => {
 
  let topicalSection = topicalSectionArray.find(topicalSection => topicalSection.id === id) 
 
  return topicalSection
}



// --- default Export reducers -----------------------------------

export default topicalSectionsSlice.reducer