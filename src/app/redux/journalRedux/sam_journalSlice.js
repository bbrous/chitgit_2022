
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

      let journal = action.payload

      state.push(journal)
    },



  updateEditedJournal: (state, action) => {

    let journalId = action.payload.id
 
    
    let newJournalKeywordArray = action.payload.keywordArray
    let newJournalTitle = action.payload.title
    let newJournalPeopleArray = action.payload.peopleArray
    let newJournalLastEdit = action.payload.lastEdit
    let newJournalDate = action.payload.journalDate

    let newJournalDetail = action.payload.detail


    let journalIndex = state.findIndex(index => index.id === journalId)

    console.log('[ sam_journalSlice ] state[journalIndex] ', state[journalIndex]);
    console.log('[ sam_journalSlice ] payload ', action.payload);
    
    state[journalIndex].detail = newJournalDetail
   state[journalIndex].keywordArray = newJournalKeywordArray
  state[journalIndex].title = newJournalTitle
  state[journalIndex].peopleArray = newJournalPeopleArray
  state[journalIndex].lastEdit = newJournalLastEdit
  state[journalIndex].journalDate = newJournalDate
   


  }, // end updateEditedjournal


  deleteLogSection: (state, action) => {


    let journalSectionId = action.payload

    return state.filter(item => item.id !== journalSectionId)
 
}, // end deleteJournalSection

}

}) // end slice journalsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addJournalToStore, 
  updateEditedJournal,
  deleteJournalSection


} = journalSlice.actions



// --- Export selectors ------------------------------------------

export const selectJournals = state => state.sample.journal

export const selectJournalFromArray = (journalArray, id) => {
 
  let journal = journalArray.find(journal => journal.id === id) 
 
  return journal
}


// --- default Export reducers -----------------------------------

export default journalSlice.reducer