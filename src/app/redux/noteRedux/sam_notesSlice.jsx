import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_note_initialStore'

export const notesSlice = createSlice({
  name: 'notesSample',
  initialState: InitialStore,

  reducers: {

    addNoteToStore: (state, action) => {
  
      let note  = action.payload


      state.push(note)
    },


    updateEditedNote: (state, action) => {


      let noteId = action.payload.id
      let newNoteContent = action.payload.noteContent
      let lastEdit = action.payload.lastEdit
  
      let noteIndex = state.findIndex(index => index.id === noteId)
      
      state[noteIndex].noteContent = newNoteContent
      state[noteIndex].lastEdit = lastEdit

  
    }, // end updateEditedNote

  }// end reducers

}) // end slice notesSlice 


// --- Export actions ---------------------------------------------

export const { 
    addNoteToStore, 
    updateEditedNote 
} = notesSlice.actions



// --- Export selectors ------------------------------------------

export const selectNotes = state => state.sample.notes

export const selectNoteFromArray = (noteArray, id) => {

  let note = noteArray.find(note => note.id === id) 

  return note

}
 



// --- default Export reducers -----------------------------------

export default notesSlice.reducer