import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_keyword_initialStore'

export const keywordsSlice = createSlice({
  name: 'keywordsSample',
  initialState: InitialStore,

  reducers: {
    addKeywordToStore: (state, action) => {
  
      let keywordId = action.payload.id
      let keyword = action.payload.keyword
      let keywordHolder = action.payload.keywordHolder
      let dbCollection = action.payload.dbCollection
      let newKeywordHolder = {dbCollection: dbCollection, id: keywordHolder}

      let keywordObject = {
        id: keywordId,
        keyword: keyword,
        keywordHolders: [newKeywordHolder]
      }



      state.push(keywordObject)
    }, // end addKeywordToStore


    updateEditedKeyword: (state, action) => {


      let keywordId = action.payload.id
      let newKeyword = action.payload.keyword
      
      
  
      let keywordIndex = state.findIndex(index => index.id === keywordId)
      
      state[keywordIndex].keyword  = newKeyword
     
  
  
    }, // end updateEditedKeyword

    addKeywordHolder: (state, action) => {


      let keywordId = action.payload.keywordId
      let keywordHolder = action.payload.keywordHolder
      let dbCollection = action.payload.dbCollection
      let newKeywordHolder = {dbCollection: dbCollection, id: keywordHolder}

  
  
      let keywordIndex = state.findIndex(index => index.id === keywordId)
  
       
      state[keywordIndex].keywordHolders.push(newKeywordHolder)
     
    }, // end addKeywordHolder


    deleteKeywordHolder: (state, action) => {


      let keyword = action.payload.keyword
      let keywordHolder = action.payload.keywordHolder
   
   
  
      let keywordIndex = state.findIndex(index => index.keyword === keyword)
  
    
  
      state[keywordIndex].keywordHolders = state[keywordIndex].keywordHolders.filter(item => item.id !== keywordHolder)
  
    }, // end deleteKeywordHolder





  }, //----- end reducers
 

}) // end slice keywordsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addKeywordToStore, 
  updateEditedKeyword,
  addKeywordHolder,
  deleteKeywordHolder

} = keywordsSlice.actions



// --- Export selectors ------------------------------------------

export const selectKeywords = state => state.sample.keywords




// --- default Export reducers -----------------------------------

export default keywordsSlice.reducer