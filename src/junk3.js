let newOtherPartyId, newGroup, newPerson

if(otherPartyCollection === 'person'){

   /* 1. clean the form input - strip whitespace
           2. find the person in the peopleArray
           
           4. dispatch to store 
  */

  // clean the person string         
  let cleanedPerson = stripWhiteSpace(person)
  // see if person exists already in people array
  let newPersonObject= allPeople.find( ( searchPerson ) => searchPerson.name === cleanedPerson )

  if(newPersonObject){

    newOtherPartyId = newPersonObject.id
    console.log('[ twoPartyChitForm -SUBMIT ] YES newPersonObject.id ', newOtherPartyId);
  }
  if(!newPersonObject){
    newOtherPartyId = cuid()

    console.log('[ twoPartyChitForm -SUBMIT ] NO newPersonObject.id ', newOtherPartyId);
  }
    newPerson = {
      id: newOtherPartyId, 
      name: cleanedPerson, 
      type: 'person'
    }
}


if(otherPartyCollection === 'group'){

  /* 1. clean the form input - strip whitespace
          2. find the group in the groupArray
          
          4. dispatch to store 
 */

 // clean the group string         
 let cleanedGroup = stripWhiteSpace(group)
 // see if person exists already in people array
 let newGroupObject= allGroups.find( ( searchGroup ) => searchGroup.name === cleanedGroup )

 if(newGroupObject){

   newOtherPartyId = newGroupObject.id
   console.log('[ twoPartyChitForm -SUBMIT ] YES newGroupObject.id ', newOtherPartyId);
 }
 if(!newGroupObject){
   newOtherPartyId = cuid()

   console.log('[ twoPartyChitForm -SUBMIT ] NO newGroupObject.id ', newOtherPartyId);
 }


}









if(otherPartyCollection === 'group'){
 
  if(!newGroupObject){
    let cleanedGroup = stripWhiteSpace(group)
    let    newGroup = {
      id: newOtherPartyId, 
      name: cleanedGroup, 
      type: 'organization'
    }
    dispatch(addGroupToStore(newGroup))
  }
}

if(otherPartyCollection === 'person'){
  if(!newPersonObject){
    let cleanedPerson = stripWhiteSpace(person)
    let    newPerson = {
      id: newOtherPartyId, 
      name: cleanedPerson, 
      type: 'person'
    }
    dispatch(addPersonToStore(newPerson))
  }
}


let newTwoPartyChitData = {

  id: newTwoPartyChitId,

  description: description, 
  keyWordArray: [],
  chitDate: modifiedChitDate.toISOString(),
  dateCreated: modifiedChitCreatedDate.toISOString(),
  chitColor: chitColor,
  workRelated: workRelated,
  chitType: chitType,
  chitBurden: chitBurden,
  chitValue: chitValue,
  timeLock: '',
  otherPartyCollection: otherPartyCollection,
  otherPartyId: newOtherPartyId



   /*
   
    chitType: "awChit"
    chitBurden: 10
    chitValue: 10
    chitColor: "red"
    dateCreated: "2021-01-27T12:20:16.000Z"
    chitDate: "2021-01-27T12:20:16.000Z"
    timeLock: "2021-01-27T12:20:16.000Z"
    otherPartyCollection: "people"
    otherPartyId: "person_1"
    deedPerformedBy: "person_1"
    workRelated: true
   
   
   
   
   
   
   
   */ 






  // keyWordArray:  cleanKeyWordArray
}