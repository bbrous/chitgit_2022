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

  // console.log('[ optionDescendSorter ] m Array ', array);

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



  /* -- func stripWhiteSpace ------------------
   @desc - removes excess spaces from a string - replaces with a single space
           between each word

           then decides if it is keyword --> then all lower case
                        if category or topic ---> first word capitalized
   @params array, dbCollection 
   @return white space stripped string (first word capitalized or all lower case)
 
 ---------------------*/
 export function cleanOptions(stringArray, dbCollection){

  let strippedString, formattedStrippedArray, cleanOptions 
  // strip array of white space

  strippedString = stripWhiteSpace(stringArray).toLowerCase()
  formattedStrippedArray = strippedString.charAt(0).toUpperCase() + strippedString.slice(1)


  dbCollection === 'keywords' ? cleanOptions = strippedString  : cleanOptions = formattedStrippedArray
  return cleanOptions

}

 /* -- func checkIfWordExists ------------------
   @desc - compares category or keyword exists in array
   @params wordString, array, dbCollection 
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


 /* --- func isArrayDifferent -------------
  @desc - compares 2 arrays and outputs what of array1 is not
          in array2
  
   @params array1 items - type string, array2 items - type string
   @return  array of strings - if empty array - the same
          

 ---------------------*/

 export function isArrayDifferent(arrA, arrB) {

  let difference = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));

  return difference


 } // end findArrayDifference

  /* --- func isArrayDifferent -------------
  @desc - compares 2 arrays and outputs what of array1 is not
          in array2
  
   @params array1 items - type string, array2 items - type string
   @return  array of strings - if empty array - the same
          

 ---------------------*/

 export function doesArrayIncludeItem(item, array) {

  let included =  array.includes(item)

  return included


 } // end findArrayDifference