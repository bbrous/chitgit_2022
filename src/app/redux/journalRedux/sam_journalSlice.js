
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all Journal sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_journal_initialStore'

export const journalSlice = createSlice({
  name: 'journalsSample',
  initialState: InitialStore,

  reducers: {

    addJournalToStore: (state, action) => {

      // let journalId = action.payload.journalId
      // let journal = action.payload.journal
      // let journalHolder = action.payload.journalHolder
      // let dbCollection = action.payload.dbCollection
      // let newjournalHolder = {dbCollection: dbCollection, id: journalHolder}

      // let journalObject = {
      //   id: journalId,
      //   journal: journal,
      //   journalHolders: [newjournalHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_journalSlice ] journalId ', journalId)
      // console.log('[ sam_journalSlice ] newjournalHolder ', newjournalHolder)
      // console.log('[ sam_journalSlice ] dbCollection ', dbCollection)

      // state.push(journalObject)
    },



  updateEditedjournal: (state, action) => {


    // let journalId = action.payload.id
    // let newjournal = action.payload.journal
    
    

    // let journalIndex = state.findIndex(index => index.id === journalId)
    
    // state[journalIndex].journal  = newjournal
   


  }, // end updateEditedjournal

  addjournalHolder: (state, action) => {


    // let journalId = action.payload.journalId
    // let journalHolder = action.payload.journalHolder
    // let dbCollection = action.payload.dbCollection
    // let newjournalHolder = {dbCollection: dbCollection, id: journalHolder}
    



    // let journalIndex = state.findIndex(index => index.id === journalId)

    // console.log('[ sam_journalSlice ] journalIndex ', journalIndex)   
    
    // state[journalIndex].journalHolders.push(newjournalHolder)
   
  }, // end addjournalHolder

}

}) // end slice journalsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addjournalToStore, 
  updateEditedjournal,
  addjournalHolder 

} = journalSlice.actions



// --- Export selectors ------------------------------------------

export const selectAllJournalSections = state => state.sample.journal




// --- default Export reducers -----------------------------------

export default journalSlice.reducer