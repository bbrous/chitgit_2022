import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import InitialStore from '../store/sharedChit_initialStore'

export const sharedChitSlice = createSlice({
  name: 'sharedChitSlice',
  initialState: InitialStore,

  // initialState: {
  //   sharedChitForm: {
  //     sharedId: '',
  //     sharedLinkAddress: '',

  //     receiverId: '',
  //     receiverName: '',

  //     senderId: '',
  //     chitCategory: '', // twoParty , personal
  //     chitId: '',
  //     deedPerformedBy: '',

  //     chitType: '', //kindness, awChit, etc
  //     chitColor: '',

  //     chitDate: '',
  //     sharedDate: '',
       
  //     sharedTitle: '',
  //     message: '',

  //   }
  // }, // end Initial State

  reducers: {

    addSharedChit: (state, action) => {

      // console.log('[ samStatus_slice ] pageType', action.payload.pageType);

      state.view[action.payload.pageType].display = action.payload.pageView

                   
    },


    updateSharedChit: (state, action) => {

      console.log('[ samStatus_slice ] pageType', action.payload.pageType);
      state.view[action.payload.pageType].display = action.payload.pageView
      // state.view[action.payload.pageType].type = action.payload.type
      state.view[action.payload.pageType].id = action.payload.id
                   
    },
  }, //end reducers

}) // end slice statusSlice 


// --- Export actions ---------------------------------------------

export const { 
  addSharedChit,
  updateSharedChit

  } = sharedChitSlice.actions



// --- Export selectors ------------------------------------------

export const selectSharedChits = state => state.sharedChits //Sample site



 






// --- default Export reducers -----------------------------------

export default sharedChitSlice.reducer