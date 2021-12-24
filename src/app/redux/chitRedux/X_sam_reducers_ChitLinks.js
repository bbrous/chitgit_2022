import produce from 'immer';
// import cuid from 'cuid';

import InitialStore from '../store/sampleStore/ex_chitLink_initialStore'

import {  
          
  // SHOW_SPOTLIGHT,


} from '../store/sampleStore/ex_storeConstants';


// console.log('[reducerChitLinks] initial chitLinks are: ', InitialStore)

let chitLinksArray = InitialStore


const initialState =  chitLinksArray

const reducer_ChitLinks = produce((draft = initialState, action) => {
  const { type, payload } = action;
  // console.log('hi', InitialStore)


  switch (type) {


      //======= Cases Above Here ========================================

      default:
        return draft
        
    } // end default
  
  });  //end Switch
  
  export default reducer_ChitLinks