import produce from 'immer';
// import cuid from 'cuid';


// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import InitialStore from '../store/InitialStore'

import {  
          OPEN_CLOSE_SIDE_PANEL,
          // SHOW_SPOTLIGHT,
          // CLOSE_SPOTLIGHT,

          FETCH_SPOTLIGHTS,
          FETCH_ACCOUNT_INFO,


          CHANGE_DISPLAY_SPOTLIGHT,
          CHANGE_TASK_COMPLETED_STATUS,
          CHANGE_SPOTLIGHT_COMPLETED_STATUS,
          CHANGE_SPOTLIGHT_START_STATUS,

          ADD_SPOTLIGHT,
          UPDATE_SPOTLIGHT,
          DELETE_SPOTLIGHT,
          DELETE_TASK,
          OPEN_MODAL,
          CLOSE_MODAL,
          // OPEN_SPOTLIGHT_PAGE,
          // CLOSE_SPOTLIGHT_PAGE,
          // CHANGE_DISPLAY, 
          UPDATE_TASK_ARRAY,
          ADD_TASK,

          CHANGE_TIMER_STATUS,

          UPDATE_NOTE,
          ADD_NOTE
        
        } from '../store/storeConstants';




const initialState = {

// &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  status: {
    view: '',
    displaySidePanel: 'hide',
    display: 'spotlight',
    spotlightFormId: '',


    modalDisplayed: false,
    modalType: 'spotLightForm',
    modalId: '',

    // - for Spotlights.jsx ----------------------------

    spotLightDisplay: {




      displaySpotLight: 'show',  //initial or ''  or 'show ' 




      
      displayedSpotLightId: 'spot_1',
      // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  

      // displaySpotLightPage: false,
    },

    // for Notes.jsx ----------------------------------

    noteDisplay: {

      // TBD when you do notes ! 
    },
  }, // end status


  // &&&&&&&&  -- data  --  &&& --- change to ....  data: []   &&&&&&&&&&&&&&

  data: []



}


const reducer_Main = produce((draft = initialState, action) => {
  const { type, payload } = action;
  // console.log('hi', InitialStore)


  switch (type) {

      // --------------------------
      case FETCH_ACCOUNT_INFO:
        {
  
          console.log('[REDUCER MAIN fs ] |||||||||||FETCH_ACCOUNT_INFO||||||||||||||', payload)
          // draft.data.spotlightData.spotlights  = payload
          draft.data = payload
  
          return draft
  
        } // end FETCH_ACCOUNT_INFO
  
  
    // --------------------------

  // --------------------------
    case FETCH_SPOTLIGHTS:
      {

        // console.log('[REDUCER MAIN fs ] ||||||||||||||||||||||||||||||', payload)
        // draft.data.spotlightData.spotlights  = payload
        draft.data = payload

        return draft

      } // end FETCH_SPOTLIGHTS


  // --------------------------
    case OPEN_CLOSE_SIDE_PANEL:
      {

        draft.displaySidePanel = payload.displaySidePanel
        return draft;
      }// end OPEN_CLOSE_SIDE_PANEL



  // --------------------------
    case OPEN_MODAL:
      {

        let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId : ''

        draft.modalType = payload.modalType
        //  draft.spotlightFormId = payload.spotlightFormId
        draft.spotlightFormId = spotlightFormId
        draft.modalDisplayed = true
        return draft;

      }// end CHANGE_DISPLAY_SPOTLIGHT    

  // --------------------------
    case CLOSE_MODAL:
      {
        draft.modalType = ''
        draft.modalDisplayed = false
        draft.spotlightFormId = ''
        return draft;

      }// end OPEN_MODAL

  // --------------------------
    case CHANGE_DISPLAY_SPOTLIGHT:
      {

        // console.log('REDUCER MAIN - CHANGE_DISPLAY_SPOTLIGHT clicked reduce ')
        draft.status.spotLightDisplay.displayedSpotLightId = payload.displayedSpotLightId
        return draft;

      }// end CHANGE_DISPLAY_SPOTLIGHT

  // --------------------------
    case CHANGE_SPOTLIGHT_COMPLETED_STATUS:
      {

        let spotId = payload.spotId

        let spotlightStatus = payload.spotlightStatus
        let spotlightTimeStamp = payload.completedTimeStamp

        console.log('REDUCER MAIN - aaCHANGE_SPOTLIGHT_COMPLETED_STATUS clicked reduce ', spotlightStatus)


        draft.data.spotlightData.spotlights[spotId].spotlightStatus = spotlightStatus
        draft.data.spotlightData.spotlights[spotId].completedTimeStamp = spotlightTimeStamp

        return draft

      }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS




  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Main


