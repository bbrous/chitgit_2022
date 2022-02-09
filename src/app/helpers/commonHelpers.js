// commonHelpers.js  .... IN   ChitGit_2022



export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
} // end func capitalizeFirstLetter



/* -- func descendSorter ------------------
  @desc - sorts array of Objects by object parameter - ascending
  @params array, parameter   
  @return array sorted 

---------------------*/
export function optionDescendSorter(array){

  let  sortedArray  = array.sort((a, b) => (a > b ) ? 1 : -1)
 
   return sortedArray
 
 
 }

 /* -- func descendSorter ------------------
  @desc - sorts array of Objects by object parameter - ascending
  @params array, parameter   
  @return array sorted 

---------------------*/
export function descendSorter(arrayOfObjects, objectParameter){
 
  let  mutableArrayOfObjects = arrayOfObjects.slice()
 
   mutableArrayOfObjects.sort((a, b) => (a[objectParameter] > b[objectParameter]) ? 1 : -1)
 
   return mutableArrayOfObjects
 
 
 }
 
 /* -- func ascendSorter ------------------
   @desc - sorts array of Objects by object parameter
   @params array, parameter   
   @return array sorted 
 
 ---------------------*/
 export function ascendSorter(arrayOfObjects, objectParameter){
 
   
   let  mutableArrayOfObjects = arrayOfObjects.slice()
 
   mutableArrayOfObjects.sort((a, b) => (a[objectParameter] > b[objectParameter]) ? -1 : 1)
 
   return mutableArrayOfObjects
 
 
 }




 /* -- func stripWhiteSpace ------------------
   @desc - removes excess spaces from a string - replaces with a single space
           between each word
   @params array 
   @return white space stripped string
 
 ---------------------*/
 export function stripWhiteSpace(stringArray){
 
  let cleanSentence = stringArray.replace(/\s+/g, ' ').trim()
  return cleanSentence

}

 /* -- func checkIfWordExists ------------------
   @desc - compares category or keyword exists in array
   @params array 
   @return white space stripped string
 
 ---------------------*/


 
 export function checkIfWordExists(word, array, dbCollection){
  let collection = dbCollection
  let wordExists

  // console.log('[ COMMON HELPERS checkIfWordExists] word ', word);
  // console.log('[ COMMON HELPERS checkIfWordExists] array ', array);
  // console.log('[ COMMON HELPERS checkIfWordExists] dbCollection ', dbCollection);
  



  if(collection === 'categories'){

  wordExists = array.find( ({ category }) => category === word );

  // console.log('[ COMMON HELPERS checkIfWordExists] FINAL FINAL ', wordExists);

  return wordExists

} // end if collection === category



 }// end function checkIfWordExists