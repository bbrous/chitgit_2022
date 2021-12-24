
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all Chits --------------------

export const selectChits = (state) => state.sample.Chits
export const makeSelectChits = () => (state) => state.sample.Chits

// console.log('s_SELECTORS ---- chrons : ', selectChits)