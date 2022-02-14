import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_category_initialStore'

export const categoriesSlice = createSlice({
  name: 'categoriesSample',
  initialState: InitialStore,

  reducers: {

    addCategoryToStore: (state, action) => {

      let categoryId = action.payload.categoryId
      let category = action.payload.category
      let categoryHolder = action.payload.categoryHolder
      let dbCollection = action.payload.dbCollection
      let newCategoryHolder = {dbCollection: dbCollection, id: categoryHolder}

      let categoryObject = {
        id: categoryId,
        category: category,
        categoryHolders: [newCategoryHolder]
      }

      console.log('===============================================================')
      console.log('[ sam_categorySlice ] categoryId ', categoryId)
      console.log('[ sam_categorySlice ] newCategoryHolder ', newCategoryHolder)
      console.log('[ sam_categorySlice ] dbCollection ', dbCollection)

      state.push(categoryObject)
    },



  updateEditedCategory: (state, action) => {


    let categoryId = action.payload.id
    let newCategory = action.payload.category
    
    

    let categoryIndex = state.findIndex(index => index.id === categoryId)
    
    state[categoryIndex].category  = newCategory
   


  }, // end updateEditedCategory

  addCategoryHolder: (state, action) => {


    let categoryId = action.payload.categoryId
    let categoryHolder = action.payload.categoryHolder
    let dbCollection = action.payload.dbCollection
    let newCategoryHolder = {dbCollection: dbCollection, id: categoryHolder}
    



    let categoryIndex = state.findIndex(index => index.id === categoryId)

    console.log('[ sam_categorySlice ] categoryIndex ', categoryIndex)   
    
    state[categoryIndex].categoryHolders.push(newCategoryHolder)
   
  }, // end addCategoryHolder

}

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