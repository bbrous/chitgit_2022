import produce from 'immer';


// import InitialStore from '../store/InitialStore'



import {  
        CHANGE_LAST_SPOTLIGHT_DISPLAYED,
        OPEN_MODAL,
        CLOSE_MODAL,
        CHANGE_STATUS_INITIAL_MESSAGE,
        UPDATE_STATUS_VIEW
        } from '../store/sampleStore/ex_storeConstants';


        // console.log('[reducerSpotlights] initial spotlights are: ', InitialStore.spotlights)

        // let spotlightsArray = InitialStore.spotlights

        // const initialState = {

        //   // &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
           
        //       view: '',
           
        //       display: 'spotlight',
        //       spotlightFormId: '',
          
          
        //       modalDisplayed: false,
        //       modalType: 'spotlightForm',
        //       modalId: '',
          
        //       // - for Spotlights.jsx ----------------------------
          
        //       spotLightDisplay: {
   
        //         displaySpotLight: 'show',  //initial or ''  or 'show ' 
        //         displayedSpotLightId: 'spot_2',
        //         // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
          
        //         // displaySpotLightPage: false,
        //       },
          
        //       // for Notes.jsx ----------------------------------
          
        //       noteDisplay: {
          
        //         // TBD when you do notes ! 
        //       },
          
          
          
        //     // &&&&&&&&  -- data  --  &&& --- change to ....  data: []   &&&&&&&&&&&&&&
          
        //     // data: []
          
          
          
        //   }

// =============NEW STUFF =============================================
// =============NEW STUFF =============================================
// =============NEW STUFF =============================================


const initialState = {

  // &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  auth: {
   
    logStatus:  true,
    logFirstName: 'Bob',
    logLastName: '',
    lastVisit: '', // date time
  },

   
    modal: {
   
      modalDisplayed: false,
      modalType: '',
      detailId: '',
    },

    initialMessage: {
   
      personal: true,
      twoParty: true,
      spotlights: true,
      logs: true,
      chronicles: true,
      notes: true,


    },

  view: {

    // for Chits.jsx ----------------------------------

    personal: {

      personalType: '',  // personal, work, twoParty
      personalFilter: '',  // for personal - topic
      // for two party - all or person
      // for work - all or person or topic
      display: 'ledger'  // ledger or calendar
      // TBD when you do notes ! 
    },

    twoParty: {

      twoPartyType: '',  // personal, work, twoParty
      twoPartyFilter: '',  // for personal - topic
      // for two party - all or person
      // for work - all or person or topic
      display: 'ledger'  // ledger or calendar
      // TBD when you do notes ! 
    },


    spotlight: {

      spotId : '',
      spotFilter: 'all',  // all or active or completed (from sidebar Nav)
      display: 'tree'  // tree or detail

      
      // displaySpotLight: 'show',  //initial or ''  or 'show ' 
      // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
      // displaySpotLightPage: false,
    },


    // for Logs.jsx ----------------------------------

    log: {

      logId: '',  // if no logId -- all else logId stuff
      
      
    },


    // for Chronicles.jsx ----------------------------------

    chron: {

      chronId: '',  // if no chronId -- all else chronId stuff
    },

    // for Notes.jsx ----------------------------------

    note: {

      noteFilter: '',
      display: 'ledger'  // ledger or block
       
    },


    // for Inspiration.jsx ----------------------------------

    inspire: {
        
        inspireFilter: 'story' , // quote or last (chit + log + etc) or picture or story
        inspireId: ''
      // TBD when you do inspiration ! 
    },

  } // end lastView
} // end Initial State


// =============NEW STUFF =============================================
// =============NEW STUFF =============================================
// =============NEW STUFF =============================================



          const reducer_Status = produce((draft = initialState, action) => {
            const { type, payload } = action;
            // console.log('hi', InitialStore)


  switch (type) {

              // --------------------------
                // case OPEN_MODAL:
                //   {

                //     let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId : ''

                //     draft.modalType = payload.modalType
                //     //  draft.spotlightFormId = payload.spotlightFormId
                //     draft.spotlightFormId = spotlightFormId
                //     draft.modalDisplayed = true
                //     return draft;

                //   }// end OPEN_MODAL  

                case OPEN_MODAL:
                  {

                    let detailId = payload.detailId ? payload.detailId : ''

                    draft.modal.modalType = payload.modalType
                   
                    draft.modal.detailId = detailId
                    draft.modal.modalDisplayed = true
                    return draft;

                  }// end OPEN_MODAL 

              // --------------------------
                case CLOSE_MODAL:
                  {
                    draft.modal.modalType = ''
                    draft.modal.modalDisplayed = false
                    draft.modal.detailId = ''
                    return draft;

                  }// end CLOSE_MODAL

              // --------------------------
                case CHANGE_LAST_SPOTLIGHT_DISPLAYED:
                  {

                    console.log('REDUCER_STATUS - CHANGE_LAST_SPOTLIGHT_DISPLAYED clicked reduce ')
                    draft.spotLightDisplay.displayedSpotLightId = payload.displayedSpotLightId
                    return draft;

                  }// end CHANGE_LAST_SPOTLIGHT_DISPLAYED

              // --------------------------

              case CHANGE_STATUS_INITIAL_MESSAGE: {

                draft.initialMessage[payload.pageType] = false
                return draft;

              }// end CHANGE_LAST_SPOTLIGHT_DISPLAYED  


              // --------------------------

              case UPDATE_STATUS_VIEW: {

                draft.view[payload.pageType].display = payload.pageView
                return draft;

              }// end CHANGE_LAST_SPOTLIGHT_DISPLAYED  

  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Status


