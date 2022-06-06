import produce from 'immer';
// import cuid from 'cuid';

import InitialStore from '../store/sampleStore/X_ex_chit_initialStore'

import {  
          
  // SHOW_SPOTLIGHT,


} from '../store/sampleStore/ex_storeConstants';


// console.log('[reducerChits] initial chits are: ', InitialStore)

let chitsArray = InitialStore


const initialState =  chitsArray

const reducer_Chits = produce((draft = initialState, action) => {
  const { type, payload } = action;
  // console.log('hi', InitialStore)


  switch (type) {


      //======= Cases Above Here ========================================

      default:
        return draft
        
    } // end default
  
  });  //end Switch
  
  export default reducer_Chits