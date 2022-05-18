
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

    let data = action.payload.data
    let twoPartyChitId = action.payload.data.id
    
    
    const { otherPartyCollection, chitType, chitColor,  chitValue, chitBurden,chitDate, person, group, deedPerformedBy, workRelated, description, keyWordArray, otherPartyId} = data


    let twoPartyIndex = state.findIndex(index => index.id === twoPartyChitId)
    
    // console.log('[ sam+twoPartyChitSlice - updateEditedTwoPartyChit ] data ', data);


    state[twoPartyIndex].chitType  = chitType
    state[twoPartyIndex].chitColor  = chitColor
    state[twoPartyIndex].chitBurden  = chitBurden
    state[twoPartyIndex].chitValue  = chitValue
    state[twoPartyIndex].chitDate  = chitDate
    state[twoPartyIndex].deedPerformedBy  = deedPerformedBy
    state[twoPartyIndex].workRelated  = workRelated
    state[twoPartyIndex].description  = description
    state[twoPartyIndex].keyWordArray  = keyWordArray
    
   


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