if(!arrayItemInludedInDefault) {  // then it was added

  // (6c) keyword from form already exists ------------------------

  let keywordId 
  let keywordExists = checkIfWordExists(item, keywordsArray , 'keywords')

  if(keywordExists) { 
    let updatedKeywordData = {
      keywordId: keywordExists.id,
      keywordHolder: id,
      dbCollection: 'notes'

    }
  // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);



     dispatch(addKeywordHolder(updatedKeywordData))


  }// end if keywordExists 

  // --- keyword from form is new  -----------------------------------------

  if (!keywordExists) {

    // create new keyword 
    keywordId = cuid() // #####   temp ############

    let newKeywordData = {
      id: keywordId,
      keyword: item,
      dbCollection: 'notes',
      keywordHolder:  id 

  }} // end newKeywordData

}  // end if !arrayItemInludedInDefault

