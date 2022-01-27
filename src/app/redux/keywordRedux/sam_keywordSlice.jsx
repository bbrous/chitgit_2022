import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_keyword_initialStore'

export const keywordsSlice = createSlice({
  name: 'keywordsSample',
  initialState: InitialStore,

  reducers: {
    addKeywordToStore: (state, action) => {
  
      let keyword  = action.payload


      state.push(keyword)
    },

  }, //end reducers

  updateEditedKeyword: (state, action) => {


    let keywordId = action.payload.id
    let newkeyword = action.payload.keyword
    
    

    let keywordIndex = state.findIndex(index => index.id === keywordId)
    
    state[keywordIndex].keyword  = newkeyword
   


  }, // end updateEditedkeyword

  addKeywordHolder: (state, action) => {


    let keywordId = action.payload.id
    let newkeywordHolder = action.payload.keyword
    
    

    let keywordIndex = state.findIndex(index => index.id === keywordId)
    
    state[keywordIndex].keywordHolders.push(newkeywordHolder)
   
  }, // end addkeywordHolder
 

}) // end slice keywordsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addKeywordToStore, 
  updateEditedKeyword,
  addKeywordHolder

} = keywordsSlice.actions



// --- Export selectors ------------------------------------------

export const selectKeywords = state => state.sample.keywords




// --- default Export reducers -----------------------------------

export default keywordsSlice.reducer