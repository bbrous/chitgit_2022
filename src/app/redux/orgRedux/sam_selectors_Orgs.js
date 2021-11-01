
// *** Sample Organization Selectors ----------

import { createSelector } from 'reselect'

// Get all logs --------------------

export const selectOrganizations = (state) => state.sample.organizations
export const makeSelectSpotlights = () => (state) => state.sample.organizations

// console.log('s_SELECTORS ---- selectPeople : ', selectPeople)