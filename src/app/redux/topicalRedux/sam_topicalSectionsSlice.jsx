
// *** Sample topical sections ----------

import { createSelector } from 'reselect'

// Get all topicals sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_topicalSections_initialStore'

export const topicalSectionsSlice = createSlice({
  name: 'topicalSectionsSample',
  initialState: InitialStore,

  reducers: {
 
    addTopicalSectionsToStore: (state, action) => {

      let topical = action.payload

      state.push(topical)
    },


}

}) // end slice topicalSectionssSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTopicalSectionsToStore, 
  updateEditedTopicalSections,
  addTopicalSectionsHolder 

} = topicalSectionsSlice.actions



// --- Export selectors ------------------------------------------

export const selectTopicalSections = state => state.sample.topicalSections




// --- default Export reducers -----------------------------------

export default topicalSectionsSlice.reducer