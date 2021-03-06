/* chitHelpers.js  .... IN   ChitGit_2022

getAllChits - all chits sorted by Date
chitFilter - two party chits - gets an individual's chits
categoryChitFilter - personal chits - get's a category's chits
choosePersonalCoin
twoPartyChitFilter
personalChitFilter

*/

import { ISOtoUTC } from "./dateHelper"
// -- chit image addresses --
export const CHIT_ADDRESS = {
  awChit: '/images/chit_red.svg',
  goldChit: '/images/chit_gold.svg',
  silverChit: '/images/chit_silver.svg',
  copperChit: '/images/chit_copper.svg',
  promiseChit: '/images/chit_promise.svg',
  kindnessChit: '/images/chit_kindness.svg',
}

// === Group = two party chit filter ======

/* -- func chitFilter ------------------
  @desc - gets all chits for a specific person Id
  @params - chits, id
  @required - func getAllChits(chits), func getPersonChits(chits, Id)
  @return -  name to be Displayed 

  1. get all chits (ordered by date)
  
---------------------*/

export function chitFilter(chits, filterId){

  let displayedChits

if(filterId === 'all' ){

  displayedChits = sortChitsByDate(chits)
  
}else{
  displayedChits = getPersonChits(chits, filterId)
}


return displayedChits
}


/* -- func twoPartyChitFilter ------------------
  @desc - gets all chits for a specific person Id
  @params - chits, id
  @return -  name to be Displayed 

  1. get all chits (ordered by date)
  2. 
---------------------*/ 
export function twoPartyChitFilter(chitsArray, filterId){

  console.log('[ CHitHelper ] filterId ', filterId);

  let displayedChitsArray

if(filterId === 'allChits' ){

  displayedChitsArray = chitsArray

}else if(filterId === 'workChits' ){


  displayedChitsArray = chitsArray.filter(item => item.workRelated === 'workRelated' )
  
}else if(filterId === 'goodWillChits' ){


  displayedChitsArray = chitsArray.filter(item => item.chitType === 'kindness' )
  
  
}else{
  displayedChitsArray = chitsArray.filter(item => item.otherPartyId === filterId )
}


return displayedChitsArray
}



/* -- func personalChitFilter ------------------
  @desc - gets all chits for a specific person Id
  @params - chits, id
  @return -  name to be Displayed 

  1. get all chits (ordered by date)
  2. 
---------------------*/ 
export function personalChitFilter(chitsArray, filterId){

  // console.log('[ CHitHelper ] filterId ', filterId);

  let displayedChitsArray

if(filterId === 'workChits' ){


  displayedChitsArray = chitsArray.filter(item => item.workRelated === 'workRelated' )
  
}else if(filterId === 'milestones' ){


  displayedChitsArray = chitsArray.filter(item => item.chitColor === 'milestone' )
  
  
}else{
  displayedChitsArray = chitsArray.filter(item => item.category === filterId )
}
 
// console.log('[ chitHelpers ] displayedChitsArray ', displayedChitsArray);

return displayedChitsArray
}

/* -- func getMilestonsOnly ------------------
  @desc - sorts all chits by date
  @params array of chits
  @return array sorted 

---------------------*/
export function getMilestonesOnly(chitsArray){

  let displayedMilestones = chitsArray.filter(item => item.chitColor === 'milestone')

  return displayedMilestones


}


/* -- func getAllChits ------------------
  @desc - sorts all chits by date
  @params array of chits
  @return array sorted 

---------------------*/
export function sortChitsByDate(chits){

  
  chits.sort((a, b) => (ISOtoUTC(a.chitDate) > ISOtoUTC(b.chitDate)) ? -1 : 1)

  return chits


}



/* -- func getPersonChits ------------------
  @desc - two party chits - gets an individual's chits
  @params array of chits
  @return array sorted 

---------------------*/
export function getPersonChits(chits, id){

  console.log('[ ChitHelpers xxxxxxxxxxxxxxxxx  getPersonChits ] id ', id);

  let personChits = chits.filter(function(chit){

    return chit.otherParty.otherPartyId === id

  }).sort((a, b) => (a.date > b.date) ? -1 : 1)

     
  return personChits


}

// ==== Group - personal chits filter =================

/* -- func categoryChitFilter ------------------
  @desc - gets all chits for a specific Id
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/

export function categoryChitFilter(chitsArray, categoryId){

  let displayedChits
  
if(categoryId === 'all' ){

  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)
  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId', categoryId)

  displayedChits = chitsArray
  
}else if(categoryId === 'milestones' ){

  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId ', categoryId)
  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)

  displayedChits = chitsArray.filter(function(chits){

    return chits.milestone === true

  })
}else{

  // console.log('[COMMON HELPER]** - categoryChitFilter: chitsArray', chitsArray)
  // console.log('[COMMON HELPER]** - categoryChitFilter: categoryId', categoryId)

  displayedChits = chitsArray.filter(function(chits){

    return chits.category === categoryId

  })
}




return displayedChits
}


/* -- func workChitFilter ------------------
  @desc - gets all chits for a specific Id
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/
export function workChitFilter(chitsArray, type){

  let displayedChits

if(type === 'all' ){

  displayedChits = chitsArray
  
}else if(type === 'personal' ){
  displayedChits = chitsArray.filter(function(chits){

    return chits.type === 'personal'

  })
}else{

  displayedChits = chitsArray.filter(function(chits){

    return chits.type !== 'personal'

  })
}




return displayedChits
}
/* -- func getPersonDisplayName ------------------
  @desc - creates name from id from redux store displayId
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/

export function getPersonDisplayName(chits, id){

  let personChits = chits.find(function(chit){


    return chit.otherPartyId === id

  })

  let personName = personChits.otherPartyName


     
  return personName


}

/* -- func getChitDetail ------------------
  @desc - gets single chit detail from array of chits
  @params - chits, id
  @return -  name to be Displayed 

---------------------*/

export function getChitDetail(chits, id){

  let chitDetail = chits.find(function(chit){

    return chit.chitId === id

  })

  
     
  return chitDetail


}

/* -- func chooseChitcoin ------------------
  @desc - gets  two party coin svg image address from public folder
  @params - type, color
  @return -  image address

---------------------*/



export function chooseTwoPartyChitCoin(type, chitColor){
  

  const address ={
    standardCopper:   '/images/chitCoins/copper_standard.svg ',
    standardSilver:   '/images/chitCoins/silver_standard.svg ',
    standardGold:     '/images/chitCoins/gold_standard.svg ',


    promiseCopper: '/images/chitCoins/copper_promise.svg',
    promiseSilver: '/images/chitCoins/silver_promise.svg',
    promiseGold: '/images/chitCoins/gold_promise.svg',

    kindnessCopper:   '/images/chitCoins/copper_kindness.svg ',
    kindnessSilver:   '/images/chitCoins/silver_kindness.svg ',
    kindnessGold:     '/images/chitCoins/gold_kindness.svg ',


    awChit: '/images/chitCoins/awChit.svg '
  }

  let coinAddress
 
  let coinColor = chitColor


  //---------------------
  if(type === "standard" && coinColor ==='copper'){
    coinAddress = address.standardCopper
    return ( coinAddress )
  }

  if(type === "standard" && coinColor ==='silver'){
    coinAddress = address.standardSilver
    return ( coinAddress )
  }

  if(type === "standard" && coinColor ==='gold'){
    coinAddress = address.standardGold
    return ( coinAddress )
  }


  // --------------

  if(type === "promise" && coinColor ==='copper'){
    coinAddress = address.promiseCopper
    return ( coinAddress )
  }

  if(type === "promise" && coinColor ==='silver'){
    coinAddress = address.promiseSilver
    return ( coinAddress )
  }

  if(type === "promise" && coinColor ==='gold'){
    coinAddress = address.promiseGold
    return ( coinAddress )
  }
  //---------------------
  if(type === "kindness" && coinColor ==='copper'){
    coinAddress = address.kindnessCopper
    return ( coinAddress )
  }

  if(type === "kindness" && coinColor ==='silver'){
    coinAddress = address.kindnessSilver
    return ( coinAddress )
  }

  if(type === "kindness" && coinColor ==='gold'){
    coinAddress = address.kindnessGold
    return ( coinAddress )
  }
  // --------------


  if(chitColor === "red"){
    coinAddress = address.awChit
    return (coinAddress)
  }



}

/* -- func choosePersonalCoin ------------------
  @desc - gets  personal coin svg image address from public folder
  @params - type, color
  @return -  image address

---------------------*/

export function choosePersonalCoin(chitColor){

  let coinColor = chitColor
  let coinAddress
  
/*

  NOTE :  These addresses come from the public folder not src


*/
  const address ={


    personalCopper: '/images/chitCoins/copper_personal.svg',
    personalSilver: '/images/chitCoins/silver_personal.svg',
    personalGold:   '/images/chitCoins/gold_personal.svg',
    multipleChits:   '/images/chitCoins/multiple_chits.svg',
    awChit: '/images/chitCoins/awChit.svg ',
    star: '/images/chitCoins/star.svg '
  }

  if( coinColor ==='copper'){
    coinAddress = address.personalCopper
    return ( coinAddress )
  }

  if(coinColor ==='silver'){
    coinAddress = address.personalSilver
    return ( coinAddress )
  }

  if(coinColor ==='gold'){
    coinAddress = address.personalGold
    return ( coinAddress )
  } 

  if(coinColor ==='red'){
    coinAddress = address.awChit
    return ( coinAddress )
  } 

  if(coinColor ==='awChit'){
    coinAddress = address.awChit
    return ( coinAddress )
  } 


  if(coinColor ==='multiple'){
    coinAddress = address.multipleChits
    return ( coinAddress )
  } 

  
  if(coinColor ==='milestone'){
    coinAddress = address.star
    return ( coinAddress )
  } 

}

export function chooseTwoPartyChitColor(chitType, chitValue, chitBurden){

  let chitColor,  totalChitValue
  if(!chitBurden && !chitValue) {
    totalChitValue = 0
  }else{
  totalChitValue = parseInt(chitValue) + parseInt(chitBurden)
}
 
  
  

  if(chitType === 'awChit'){chitColor = 'red'}else{

  if( totalChitValue < 25 ) { chitColor = 'copper' } 
  else if (totalChitValue > 24 && totalChitValue < 55 ) { chitColor = 'silver' } 
  else if (totalChitValue > 54 ){ chitColor= 'gold' }
  else{chitColor = 'copper'}
  }
  return chitColor
}

