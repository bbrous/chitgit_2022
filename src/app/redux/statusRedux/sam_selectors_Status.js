import { createSelector } from 'reselect'



// =========== SAMPLE SITE SELECTORS ============================

export const selectStatus = state => state.sample.status //Sample site

export const selectView = (page) => createSelector(
  [selectStatus],
  view => view[page].display
)


export const spotlightStatusId = (page) => createSelector(
  [selectStatus],
  view => view[page].spotFilter
)




