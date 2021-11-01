import { createReducer } from './reducerUtil'


import {SET_PAGE} from '../store/storeConstants';
 



  const initialState = {
    page: 'home'

  }


  

  export const setPage = (state, payload) => {
    console.log("hey change view clicked")
   return  Object.assign({...state}, payload)
 
 }

  



// =================================================

  export default createReducer(initialState, {
    [SET_PAGE] : setPage
    
  })