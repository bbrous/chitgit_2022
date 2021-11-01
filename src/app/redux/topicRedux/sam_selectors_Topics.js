
// *** Sample Organization Selectors ----------

import { createSelector } from 'reselect'

// Get all logs --------------------

export const selectTopics = (state) => state.sample.topics
export const makeSelectSpotlights = () => (state) => state.sample.organizations

// console.log('s_SELECTORS ---- selectTopics : ', selectTopics)