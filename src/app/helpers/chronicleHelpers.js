/* chronicleHelpers.js  .... IN   ChitGit_2022

  Helper functions for logs, topicals and journal

*/

import { ISOtoUTC } from "./dateHelper"


/* -- func getAllChits ------------------
  @desc - sorts all chits by date
  @params array of chits
  @return array sorted 

---------------------*/




export function sortLogsByDateAscending(logs){

  
  logs.sort((a, b) => (ISOtoUTC(a.logDate) > ISOtoUTC(b.logDate)) ? -1 : 1)

  return logs


}

export function sortLogsByDateDescending(logs){

  
  logs.sort((a, b) => (ISOtoUTC(a.logDate) < ISOtoUTC(b.logDate)) ? -1 : 1)

  return logs


}


export function sortTopicalsByDateAscending(topicals){

  
  topicals.sort((a, b) => (ISOtoUTC(a.topicalSortDate) > ISOtoUTC(b.topicalSortDate)) ? -1 : 1)

  return topicals


}

export function sortTopicalsByDateDescending(topicals){

  
  topicals.sort((a, b) => (ISOtoUTC(a.topicalSortDate) < ISOtoUTC(b.topicalSortDate)) ? -1 : 1)

  return topicals


}


/* -- func filters various  ------------------
  @desc - gets all of collection for a specific id
  @params - logs array, id
            topicalSections array, id
            notes array, id

---------------------*/ 
export function logFilter(logsArray, filterId){

  console.log('[ ChronicleHelper ] filterId ', filterId);

  let displayedLogsArray


  displayedLogsArray = logsArray.filter(item => item.otherPartyId === filterId )



return displayedLogsArray
}

export function topicalFilter(topicalsArray, filterId){

  console.log('[ ChronicleHelper ] filterId ', filterId);

  let displayedTopicalsArray

  displayedTopicalsArray = topicalsArray.filter(item => item.topic === filterId )

return displayedTopicalsArray
}

export function noteFilter(notesArray, filterId){

  console.log('[ ChronicleHelper ] filterId ', filterId);

  let displayedNotesArray

  displayedNotesArray = notesArray.filter(item => item.noteHolderId === filterId )

return displayedNotesArray
}

// ----------------------------------------