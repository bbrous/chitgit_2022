import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

export const statusSlice = createSlice({
  name: 'status',

  initialState: {
  
    loading: false,

    auth: {
      uid: '',
      loginStatus:  false,
      loginFirstName: '',
      loginLastName: '',
      lastVisit: '', // date time
    },
  
      modal: {
     
        modalDisplayed: false,
        modalType: '', // info or form
        modalPage: '', // spotlight, twoParty, note, etc.
        id: '',
      },
  
      initialMessage: {
     
        personal: true,
        twoParty: true,
        spotlights: true,
        logs: true,
        journal: true,
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
  
      journal: {
  
        journalId: '',  // if no chronId -- all else chronId stuff
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
      let id = action.payload.id ? action.payload.id : ''

      state.modal.modalType = action.payload.modalType
      state.modal.modalPage = action.payload.modalPage
      state.modal.id = id
      state.modal.modalDisplayed = true
    },

    closeModal: (state, action) => {
      state.modal.modalType = ''
      state.modal.modalPage = ''
      state.modal.modalDisplayed = false
      state.modal.id = ''

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
// --- Firebase status reducers -------------

    changeLoadingStatus: (state, action) => {
      state.loading = action.payload
                   
    },

    updateLoginStatus: (state, action) => {
      state.auth.loginStatus = action.payload
                   
    },

    updateUid: (state, action) => {
      state.auth.uid = action.payload
                   
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
  updateLoginStatus,
  changeLoadingStatus,
  updateUid

  } = statusSlice.actions



// --- Export selectors ------------------------------------------

export const selectStatus = state => state.sample.status //Sample site
export const selectLoadingStatus = state => state.status.loading//Sample site
export const selectLoginStatus = state => state.status.auth.loginStatus//Sample site

export const selectUid = state => state.status.auth.uid//Sample site

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