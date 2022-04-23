/* commonHelpers.js  .... IN   ChitGit_2022

capitalizeFirstLetter(string)                
optionDescendSorter(array)                     - sorts select-input options
asecendSorter(arrayOfObjects, objectParameter) - sorts array of objects
descendSorter(arrayOfObjects, objectParameter) - sorts array of objects
cleanOptions(stringArray, dbCollection)        - cleans select input options
checkIfWordExists(word, array, dbCollection)
isArrayDifferent(arrA, arrB)                   - compares 2 arrays
doesArrayIncludeItem(item, array)
uniqueItemsInObjectField(array, parameterKey)  - gets unique values from
                                                 field in array of objects
doesArrayOfObjectsIncludeItem(item, arrayOfObjects, objectField) 



*/

// ==========================================================================

/* -- func capitalizeFirstLetter ------------------
  @desc - capitalizes the first letter of a string
  @params string   
  @return string with first letter capitalized

---------------------*/
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
} // end func capitalizeFirstLetter



/* -- func optionDescendSorter ----- for select input ---
  @desc - sorts array   of strings for select input
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

if(collection === 'keywords'){

  wordExists = array.find( ({ keyword }) => keyword === word );

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

  /* --- func doesArrayIncludeItem -------------
  @desc - does the array include an item
   @params array1 item - type string, array - type array of strings
   @return  array of strings - if empty array - the same
          

 ---------------------*/

 export function doesArrayIncludeItem(item, array) {

  let included =  array.includes(item)

  return included


 } // end findArrayDifference


   /* --- func doesArrayOfObjectsIncludeItem -------------
  @desc - does the array of Objects include an item
   @params array item - type string,
    array - type array of Objects
    field name- type string
   @return  true or false
          

 ---------------------*/

 export function doesArrayOfObjectsIncludeItem(item, arrayOfObjects, objectField) {

  let arrayOfItems = []
  arrayOfObjects.map((arrayObject, index) => {
  

    
    arrayOfItems.push(arrayObject[objectField])


  return arrayOfItems

  }

  
  ) //end map


  let included =  arrayOfObjects.includes(item)

  return included


 } // end findArrayDifference


  /* --- func uniqueItemsInObjectField -------------
  @desc - creates an array of unique items in a given field
  
   @params array , field name
   @return  array of unique items
          
   use like: 
        var array = [
        {"name": "Joe", "age": 17}, 
        {"name": "Bob", "age": 17}, 
        {"name": "Carl", "age": 35}
      ];

      var ages = uniqueBy(array, "age");
      console.log(ages); // [17, 35]
      ---------------------*/

 export function uniqueItemsInObjectField(arrayOfObjects, parameterKey){

  let objectsArray = arrayOfObjects


  let arrayOfOnlyParameters = objectsArray.map((object) => object[parameterKey])
  let arrayOfUniques = [...new Set(arrayOfOnlyParameters)]
  return(
    arrayOfUniques

  )
}