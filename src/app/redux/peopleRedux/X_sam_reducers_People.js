import produce from 'immer';
// import cuid from 'cuid';

import InitialStore from '../store/sampleStore/ex_people_initialStore'



// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';


import {  
          
          // SHOW_SPOTLIGHT,

        
        } from '../store/sampleStore/ex_storeConstants';


        // console.log('[reducerPeople] initial people are: ', InitialStore)

        let peopleArray = InitialStore

const initialState =  peopleArray





const reducer_People = produce((draft = initialState, action) => {
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

              // // --------------------------
              //   case FETCH_SPOTLIGHTS:
              //     {

              //       // console.log('[REDUCER MAIN fs ] ||||||||||||||||||||||||||||||', payload)
              //       // draft.data.spotlightData.spotlights  = payload
              //       draft.data = payload

              //       return draft

              //     } // end FETCH_SPOTLIGHTS


              // // --------------------------
              //   case OPEN_CLOSE_SIDE_PANEL:
              //     {

              //       draft.displaySidePanel = payload.displaySidePanel
              //       return draft;
              //     }// end OPEN_CLOSE_SIDE_PANEL



              // // --------------------------
              //   case OPEN_MODAL:
              //     {

              //       let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId : ''

              //       draft.modalType = payload.modalType
              //       //  draft.spotlightFormId = payload.spotlightFormId
              //       draft.spotlightFormId = spotlightFormId
              //       draft.modalDisplayed = true
              //       return draft;

              //     }// end CHANGE_DISPLAY_SPOTLIGHT    

              // // --------------------------
              //   case CLOSE_MODAL:
              //     {
              //       draft.modalType = ''
              //       draft.modalDisplayed = false
              //       draft.spotlightFormId = ''
              //       return draft;

              //     }// end OPEN_MODAL

              // // --------------------------
              //   case CHANGE_DISPLAY_SPOTLIGHT:
              //     {

              //       // console.log('REDUCER MAIN - CHANGE_DISPLAY_SPOTLIGHT clicked reduce ')
              //       draft.status.spotLightDisplay.displayedSpotLightId = payload.displayedSpotLightId
              //       return draft;

              //     }// end CHANGE_DISPLAY_SPOTLIGHT

              // // --------------------------
              //   case CHANGE_SPOTLIGHT_COMPLETED_STATUS:
              //     {

              //       let spotId = payload.spotId

              //       let spotlightStatus = payload.spotlightStatus
              //       let spotlightTimeStamp = payload.completedTimeStamp

              //       console.log('REDUCER MAIN - aaCHANGE_SPOTLIGHT_COMPLETED_STATUS clicked reduce ', spotlightStatus)


              //       draft.data.spotlightData.spotlights[spotId].spotlightStatus = spotlightStatus
              //       draft.data.spotlightData.spotlights[spotId].completedTimeStamp = spotlightTimeStamp

              //       return draft

              //     }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS




  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_People


