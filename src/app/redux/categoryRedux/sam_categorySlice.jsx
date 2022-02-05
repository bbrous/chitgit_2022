import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_category_initialStore'

export const categoriesSlice = createSlice({
  name: 'categoriesSample',
  initialState: InitialStore,

  reducers: {
    addCategoryToStore: (state, action) => {
  
      let category  = action.payload


      state.push(category)
    },

  }, //end reducers

  updateEditedCategory: (state, action) => {


    let categoryId = action.payload.id
    let newCategory = action.payload.category
    
    

    let categoryIndex = state.findIndex(index => index.id === categoryId)
    
    state[categoryIndex].category  = newCategory
   


  }, // end updateEditedCategory

  addCategoryHolder: (state, action) => {


    let categoryId = action.payload.id
    let newCategoryHolder = action.payload.category
    
    

    let categoryIndex = state.findIndex(index => index.id === categoryId)
    
    state[categoryIndex].categoryHolders.push(newCategoryHolder)
   
  }, // end addCategoryHolder

}) // end slice categorysSlice 


// --- Export actions ---------------------------------------------

export const { 
  addCategoryToStore, 
  updateEditedCategory,
  addCategoryHolder 

} = categoriesSlice.actions



// --- Export selectors ------------------------------------------

export const selectCategories = state => state.sample.categories




// --- default Export reducers -----------------------------------

export default categoriesSlice.reducer