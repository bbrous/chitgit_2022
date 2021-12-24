
// *** Sample Logs Selectors ----------

import { createSelector } from 'reselect'

// Get all logs --------------------

export const selectLogs = (state) => state.sample.logs
export const makeSelectLogs = () => (state) => state.sample.logs

// console.log('s_SELECTORS ---- logs : ', selectLogs)