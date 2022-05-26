
  //  === update Keywords ===================================
  let defaultKeywordArray = defaultKeywordOptions
  let formKeywordArray = passedKeyWordArray // cleaned keyword array from form

  //  check if keyword form data submitted is different from default 
  let kewwordArrayDifference = isArrayDifferent(defaultKeywordArray, formKeywordArray)


  // --- only update keywords if keywordArrayDifference === [... someItems] ---

  if (kewwordArrayDifference.length > 0) {

    // map each keyword in the keyword difference array

    kewwordArrayDifference.forEach((item) => {

      // --- check if each keyword form data submitted is  different from default 

      let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultKeywordArray)

      if (!arrayItemInludedInDefault) {  // then it was added

        let keywordExists = checkIfWordExists(item, allKeywordsArray, 'keywords')


        // --- keyword from form is new  -------------------------------
        // --- brand new keyword - add to keyword collection

        if (!keywordExists) {

          // create new keyword 
          let keywordId = cuid() // #####   temp ############

          let newKeywordData = {
            id: keywordId,
            keyword: item,
            dbCollection: 'twoPartyChits',
            keywordHolder: id

          }
          dispatch(addKeywordToStore(newKeywordData))

        } // end newKeywordData


        // --- keyword just new in form --- update keyword holders
        if (keywordExists) {
          let updatedKeywordData = {
            keywordId: keywordExists.id,
            keywordHolder: id,
            dbCollection: 'twoPartyChits'

          }
          // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);


          
          dispatch(addKeywordHolder(updatedKeywordData))


        }// end if keywordExists 


      }  // end if arrayItemInludedInDefault


      // --- keyword missing from default - delete  

      if (arrayItemInludedInDefault) {  // then it was deleted in form

        // delete id from keyword item

        let keywordHolderToBeDeleted = {
          keyword: item,
          keywordHolder: id,
          // id: noteId
        }


        dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))




      }  // end if arrayItemInludedInDefault



    }) // end map kewwordArrayDifference


  } // end if kewwordArrayDifference --- 

//  ###########################################