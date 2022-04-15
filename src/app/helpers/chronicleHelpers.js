/* chronicleHelpers.js  .... IN   ChitGit_2022

  Helper functions for logs, topicals and journal

*/

import { ISOtoUTC } from "./dateHelper"


/* -- func getAllChits ------------------
  @desc - sorts all chits by date
  @params array of chits
  @return array sorted 

---------------------*/




export function sortLogsByDate(logs){

  
  logs.sort((a, b) => (ISOtoUTC(a.logDate) > ISOtoUTC(b.logDate)) ? -1 : 1)

  return logs


}




/* -- func logsFilter ------------------
  @desc - gets all chits for a specific person or group Id
  @params - logs array, id

---------------------*/ 
export function logFilter(logsArray, filterId){

  console.log('[ ChronicleHelper ] filterId ', filterId);

  let displayedLogsArray


  displayedLogsArray = logsArray.filter(item => item.otherPartyId === filterId )



return displayedLogsArray
}