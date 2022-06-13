
// *** Sample topical sections ----------

import { createSelector } from 'reselect'

// Get all topicals sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_topicalSections_initialStore'

export const topicalSectionsSlice = createSlice({
  name: 'topicalSectionsSample',
  initialState: InitialStore,

  reducers: {

    addtopicalSectionsToStore: (state, action) => {

      // let topicalSectionsId = action.payload.topicalSectionsId
      // let topicalSections = action.payload.topicalSections
      // let topicalSectionsHolder = action.payload.topicalSectionsHolder
      // let dbCollection = action.payload.dbCollection
      // let newtopicalSectionsHolder = {dbCollection: dbCollection, id: topicalSectionsHolder}

      // let topicalSectionsObject = {
      //   id: topicalSectionsId,
      //   topicalSections: topicalSections,
      //   topicalSectionsHolders: [newtopicalSectionsHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_topicalSectionsSlice ] topicalSectionsId ', topicalSectionsId)
      // console.log('[ sam_topicalSectionsSlice ] newtopicalSectionsHolder ', newtopicalSectionsHolder)
      // console.log('[ sam_topicalSectionsSlice ] dbCollection ', dbCollection)

      // state.push(topicalSectionsObject)
    },



  updateEditedtopicalSections: (state, action) => {


    // let topicalSectionsId = action.payload.id
    // let newtopicalSections = action.payload.topicalSections
    
    

    // let topicalSectionsIndex = state.findIndex(index => index.id === topicalSectionsId)
    
    // state[topicalSectionsIndex].topicalSections  = newtopicalSections
   


  }, // end updateEditedtopicalSections

  addtopicalSectionsHolder: (state, action) => {


    // let topicalSectionsId = action.payload.topicalSectionsId
    // let topicalSectionsHolder = action.payload.topicalSectionsHolder
    // let dbCollection = action.payload.dbCollection
    // let newtopicalSectionsHolder = {dbCollection: dbCollection, id: topicalSectionsHolder}
    



    // let topicalSectionsIndex = state.findIndex(index => index.id === topicalSectionsId)

    // console.log('[ sam_topicalSectionsSlice ] topicalsIndex ', topicalsIndex)   
    
    // state[topicalsIndex].topicalsHolders.push(newtopicalsHolder)
   
  }, // end addtopicalsHolder

}

}) // end slice topicalsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTopicalSectionsToStore, 
  updateEditedTopicalSections,
  addTopicalSectionsHolder 

} = topicalSectionsSlice.actions



// --- Export selectors ------------------------------------------

export const selectTopicalSections = state => state.sample.topicals




// --- default Export reducers -----------------------------------

export default topicalSectionsSlice.reducer