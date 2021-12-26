import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

export const statusSlice = createSlice({
  name: 'statusSample',

  initialState: {

    // &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  
    auth: {
     
      logStatus:  true,
      logFirstName: 'Bobby',
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
  }, // end Initial State

  reducers: {
    openModal: (state, action) => {
      console.log('REDUCER OpenModal here : ', action.payload.modalType)
      let detailId = action.payload.detailId ? action.payload.detailId : ''

      state.modal.modalType = action.payload.modalType

      state.modal.detailId = detailId
      state.modal.modalDisplayed = true
    },

    closeModal: (state, action) => {
      state.modal.modalType = ''
      state.modal.modalDisplayed = false
      state.modal.detailId = ''

    },
    
    changeLastSpotlightDisplayed: (state, action) => {
      state.spotLightDisplay.displayedSpotLightId = action.payload.displayedSpotLightId
                   
    },

    changeStatusInitialMessage: (state, action) => {
      state.initialMessage[action.payload.pageType] = false
                   
    },


    updateStatusView: (state, action) => {
      state.view[action.payload.pageType].display = action.payload.pageView
                   
    },
  }, //end reducers

}) // end slice statusSlice 


// --- Export actions ---------------------------------------------

export const { 

  openModal, 
  closeModal,
  changeStatusInitialMessage, 
  changeLastSpotlightDisplayed,
  updateStatusView,

  } = statusSlice.actions



// --- Export selectors ------------------------------------------

export const selectStatus = state => state.sample.status //Sample site

export const selectView = (page) => createSelector(
  [selectStatus],
  view => view[page].display
)


export const spotlightStatusId = (page) => createSelector(
  [selectStatus],
  view => view[page].spotFilter
)







// --- default Export reducers -----------------------------------

export default statusSlice.reducer