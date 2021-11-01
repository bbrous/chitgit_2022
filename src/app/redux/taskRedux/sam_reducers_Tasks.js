import produce from 'immer';
// import cuid from 'cuid';

import InitialStore from '../store/sampleStore/ex_task_initialStore'

import {  
          
  // SHOW_SPOTLIGHT,

} from '../store/sampleStore/ex_storeConstants';


// console.log('[reducerSpotlights] initial spotlights are: ', InitialStore)

let tasksArray = InitialStore

const initialState =  tasksArray

const reducer_Tasks = produce((draft = initialState, action) => {
  const { type, payload } = action;
  // console.log('hi', InitialStore)


  switch (type) {


    //     // --------------------------
    //     case FETCH_ACCOUNT_INFO:
    //       {
    
    //         console.log('[REDUCER MAIN fs ] |||||||||||FETCH_ACCOUNT_INFO||||||||||||||', payload)
    //         // draft.data.spotlightData.spotlights  = payload
    //         draft.data = payload
    
    //         return draft
    
    //       } // end FETCH_ACCOUNT_INFO
    
    
    //   // --------------------------
    
    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Tasks