
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all topicals sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_topical_initialStore'

export const topicalsSlice = createSlice({
  name: 'topicalsSample',
  initialState: InitialStore,

  reducers: {

    addTopicalsToStore: (state, action) => {

      // let topicalsId = action.payload.topicalsId
      // let topicals = action.payload.topicals
      // let topicalsHolder = action.payload.topicalsHolder
      // let dbCollection = action.payload.dbCollection
      // let newtopicalsHolder = {dbCollection: dbCollection, id: topicalsHolder}

      // let topicalsObject = {
      //   id: topicalsId,
      //   topicals: topicals,
      //   topicalsHolders: [newtopicalsHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_topicalsSlice ] topicalsId ', topicalsId)
      // console.log('[ sam_topicalsSlice ] newtopicalsHolder ', newtopicalsHolder)
      // console.log('[ sam_topicalsSlice ] dbCollection ', dbCollection)

      // state.push(topicalsObject)
    },



  updateEditedTopicals: (state, action) => {


    // let topicalsId = action.payload.id
    // let newtopicals = action.payload.topicals
    
    

    // let topicalsIndex = state.findIndex(index => index.id === topicalsId)
    
    // state[topicalsIndex].topicals  = newtopicals
   


  }, // end updateEditedtopicals

  addTopicalsHolder: (state, action) => {


    // let topicalsId = action.payload.topicalsId
    // let topicalsHolder = action.payload.topicalsHolder
    // let dbCollection = action.payload.dbCollection
    // let newTopicalsHolder = {dbCollection: dbCollection, id: topicalsHolder}
    



    // let topicalsIndex = state.findIndex(index => index.id === topicalsId)

    // console.log('[ sam_topicalsSlice ] topicalsIndex ', topicalsIndex)   
    
    // state[topicalsIndex].topicalsHolders.push(newtopicalsHolder)
   
  }, // end addtopicalsHolder

}

}) // end slice topicalsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTopicalsToStore, 
  updateEditedTopicals,
  addTopicalsHolder 

} = topicalsSlice.actions



// --- Export selectors ------------------------------------------

export const selectTopicals = state => state.sample.topicals




// --- default Export reducers -----------------------------------

export default topicalsSlice.reducer