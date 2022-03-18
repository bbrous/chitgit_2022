/*---- File - chitHelper.jsx 
   support file for chit functions

*/

// -- chit image addresses --
export const CHIT_ADDRESS = {
  awChit: 'images/chit_red.svg',
  goldChit: 'images/chit_gold.svg',
  silverChit: 'images/chit_silver.svg',
  copperChit: 'images/chit_copper.svg',
  promiseChit: 'images/chit_promise.svg',
  kindnessChit: 'images/chit_kindness.svg',
}


//==============================
export function chooseChitcoin(type, chitColor){

  /*
  
    NOTE :  These addresses come from the public folder not src
  
  
  */
  
    const address ={
      standardCopper:   'images/chitCoins/copper_standard.svg ',
      standardSilver:   'images/chitCoins/silver_standard.svg ',
      standardGold:     'images/chitCoins/gold_standard.svg ',
  
  
      promiseCopper: 'images/chitCoins/copper_promise.svg',
      promiseSilver: 'images/chitCoins/silver_promise.svg',
      promiseGold: 'images/chitCoins/gold_promise.svg',
  
  
      awChit: 'images/chitCoins/awChit.svg '
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
  
    // --------------
  
  
    if(chitColor === "red"){
      coinAddress = address.awChit
      return (coinAddress)
    }
  
  
  
  }
  
  
  export function choosePersonalCoin(chitColor){
  
    /*
  
    NOTE :  These addresses come from the public folder not src
  
  
  */
  
    let coinColor = chitColor
    let coinAddress
    
  
    const address ={
  
  
      personalCopper: 'images/chitCoins/copper_personal.svg',
      personalSilver: 'images/chitCoins/silver_personal.svg',
      personalGold:   'images/chitCoins/gold_personal.svg',
      multipleChits:   'images/chitCoins/multiple_chits.svg',
      awChit: 'images/chitCoins/awChit.svg ',
      star: 'images/chitCoins/star.svg '
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
  
    if(coinColor ==='multiple'){
      coinAddress = address.multipleChits
      return ( coinAddress )
    } 
  
    
    if(coinColor ==='milestone'){
      coinAddress = address.star
      return ( coinAddress )
    } 
  
  }
  
  