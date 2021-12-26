import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_note_initialStore'

export const notesSlice = createSlice({
  name: 'notesSample',
  initialState: InitialStore,

  reducers: {
    // addNote: state => {
    //   ... do stuff here
    // },

    // editNote: (state, action, id) =>{
    //   ... do stuff here
    // }

  }, //end reducers

}) // end slice notesSlice 


// --- Export actions ---------------------------------------------

// export const { addNote, editNote } = notesSlice.actions



// --- Export selectors ------------------------------------------

export const allNotes = state => state.notes




// --- default Export reducers -----------------------------------

export default notesSlice.reducer