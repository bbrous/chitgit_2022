
// *** Sample People Selectors ----------

import { createSelector } from 'reselect'

// Get all logs --------------------

export const selectPeople = (state) => state.sample.people
export const makeSelectSpotlights = () => (state) => state.sample.people

console.log('s_SELECTORS ---- selectPeople : ', selectPeople)