import produce from 'immer';


// import InitialStore from '../store/InitialStore'



import {  
        CHANGE_LAST_SPOTLIGHT_DISPLAYED,
        OPEN_MODAL,
        CLOSE_MODAL,
        
        } from '../store/sampleStore/ex_storeConstants';


        // console.log('[reducerSpotlights] initial spotlights are: ', InitialStore.spotlights)

        // let spotlightsArray = InitialStore.spotlights


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
              modalType: 'spotLightForm',
              modalId: '',
            },

          lastView: {

            // for Chits.jsx ----------------------------------

            chit: {

              chitCategory: '',  // personal, work, twoParty
              chitFilter: '',  // for personal - topic
              // for two party - all or person
              // for work - all or person or topic

              // TBD when you do notes ! 
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

              noteFilter: ''
               
            },


            // for Inspiration.jsx ----------------------------------

            inspire: {

                inspireFilter: '' , // quote or last (chit + log + etc) or picture
                inspireId: ''
              // TBD when you do inspiration ! 
            },

          } // end lastView
        } // end Initial State



        // $$$$$$ Backup --- September 5   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

        // const initialState = {

        //   // &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
           
        //       view: '',
           
        //       display: 'spotlight',
        //       spotlightFormId: '',
          
          
        //       modalDisplayed: false,
        //       modalType: 'spotLightForm',
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





          const reducer_Status = produce((draft = initialState, action) => {
            const { type, payload } = action;
            // console.log('hi', InitialStore)


  switch (type) {

              // --------------------------
                case OPEN_MODAL:
                  {

                    let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId : ''

                    draft.modalType = payload.modalType
                    //  draft.spotlightFormId = payload.spotlightFormId
                    draft.spotlightFormId = spotlightFormId
                    draft.modalDisplayed = true
                    return draft;

                  }// end OPEN_MODAL  

              // --------------------------
                case CLOSE_MODAL:
                  {
                    draft.modalType = ''
                    draft.modalDisplayed = false
                    draft.spotlightFormId = ''
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





  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Status


