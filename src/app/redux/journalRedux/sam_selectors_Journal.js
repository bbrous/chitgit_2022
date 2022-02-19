
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all Journal sections --------------------

export const selectJSections = (state) => state.sample.journal
export const makeSelectJournal = () => (state) => state.sample.journal

// console.log('s_SELECTORS ---- journal : ', selectjournal)