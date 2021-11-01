
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all Notes --------------------

export const selectNotes = (state) => state.sample.notes
export const makeSelectNotes = () => (state) => state.sample.notes

// console.log('s_SELECTORS ---- chrons : ', selectNotes)