
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all SharedChit sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_sharedChit_initialStore'

export const sharedChitSlice = createSlice({
  name: 'SharedChitsSample',
  initialState: InitialStore,

  reducers: {

    addSharedChitToStore: (state, action) => {

      
    },



  updateEditedSharedChit: (state, action) => {


    // let SharedChitId = action.payload.id
    // let newSharedChit = action.payload.SharedChit
    
    

    // let SharedChitIndex = state.findIndex(index => index.id === SharedChitId)
    
    // state[SharedChitIndex].SharedChit  = newSharedChit
   


  }, // end updateEditedSharedChit

  addSharedChitHolder: (state, action) => {


  
   
  }, // end addSharedChitHolder

}

}) // end slice SharedChitsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addSharedChitToStore, 
  updateEditedSharedChit,
  addSharedChitHolder 

} = sharedChitSlice.actions



// --- Export selectors ------------------------------------------

export const selectAllSharedChitSections = state => state.sharedChit




// --- default Export reducers -----------------------------------

export default sharedChitSlice.reducer