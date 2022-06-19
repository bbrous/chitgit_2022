
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all topicals sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_topics_initialStore'

export const topicsSlice = createSlice({
  name: 'topicalsSample',
  initialState: InitialStore,

  reducers: {

    addTopicToStore: (state, action) => {
      let journal = action.payload

      state.push(journal)
    },



  updateEditedTopic: (state, action) => {


    // let topicalsId = action.payload.id
    // let newtopicals = action.payload.topicals
    
    

    // let topicalsIndex = state.findIndex(index => index.id === topicalsId)
    
    // state[topicalsIndex].topicals  = newtopicals
   


  }, // end updateEditedtopicals

 

}

}) // end slice topicalsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTopicToStore, 
  updateEditedTopic,


} = topicsSlice.actions



// --- Export selectors ------------------------------------------

export const selectTopics = state => state.sample.topics



// --- default Export reducers -----------------------------------

export default topicsSlice.reducer