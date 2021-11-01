
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all Chrons --------------------

export const selectChrons = (state) => state.sample.chrons
export const makeSelectChrons = () => (state) => state.sample.chrons

// console.log('s_SELECTORS ---- chrons : ', selectChrons)