import produce from 'immer';
// import cuid from 'cuid';


// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import InitialStore from '../store/InitialStore'

import {  
          UPDATE_USER_AUTH,

        
        } from '../store/storeConstants';




    const initialState = {

      auth: ['auth_bot'],

    }


  const reducer_Auth = produce((draft = initialState, action) => {
    const { type, payload } = action;
    // console.log('hi', InitialStore)


  switch (type) {

          // --------------------------
          case UPDATE_USER_AUTH:
            {

              draft.auth = payload
      
              return draft
      
            } // end UPDATE_USER_AUTH
              


  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Auth


