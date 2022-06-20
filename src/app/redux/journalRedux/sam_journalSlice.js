
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
 
    
    let editedJournalKeywordArray = action.payload.keywordArray
    let editedJournalTitle = action.payload.title
    let editedJournalPeopleArray = action.payload.peopleArray
    let editedJournalLastEdit = action.payload.lastEdit
    let editedJournalDate = action.payload.journalDate

    let editedJournalContent = action.payload.content


    let journalIndex = state.findIndex(index => index.id === journalId)

    console.log('[ sam_journalSlice ] state[journalIndex] ', state[journalIndex]);
    console.log('[ sam_journalSlice ] payload ', action.payload);
    
    state[journalIndex].content = editedJournalContent
   state[journalIndex].keywordArray = editedJournalKeywordArray
  state[journalIndex].title = editedJournalTitle
  state[journalIndex].peopleArray = editedJournalPeopleArray
  state[journalIndex].lastEdit = editedJournalLastEdit
  state[journalIndex].journalDate = editedJournalDate
   


  }, // end updateEditedjournal


  deleteJournalSection: (state, action) => {


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