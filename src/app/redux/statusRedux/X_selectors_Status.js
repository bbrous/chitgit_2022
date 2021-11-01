import { createSelector } from 'reselect'

const selectStatus = state => state.status


// Get last spotlight displayed --------------------

export const selectLastSpotlight = createSelector(
  [selectStatus],
  status => status.spotLightDisplay.displayedSpotLightId
)





