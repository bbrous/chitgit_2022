
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all twoParty sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_twoPartyChit_initialStore'

export const twoPartySlice = createSlice({
  name: 'twoPartysSample',
  initialState: InitialStore,

  reducers: {

    addTwoPartyChitToStore: (state, action) => {

      let twoPartyChit = action.payload

      state.push(twoPartyChit)
    },



  updateEditedTwoPartyChit: (state, action) => {


    // let twoPartyChitId = action.payload.id
    // let newtwoParty = action.payload.twoParty
    
    

    // let twoPartyIndex = state.findIndex(index => index.id === twoPartyId)
    
    // state[twoPartyIndex].twoParty  = newtwoParty
   


  }, // end updateEditedtwoParty



}

}) // end slice twoPartysSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTwoPartyChitToStore, 
  updateEditedTwoPartyChit,
 

} = twoPartySlice.actions



// --- Export selectors ------------------------------------------

export const selectAllTwoPartyChits = state => state.sample.twoPartyChits




// --- default Export reducers -----------------------------------

export default twoPartySlice.reducer