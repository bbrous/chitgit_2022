 // --- clean group string

 let cleanedGroup = stripWhiteSpace(group)

 // --- see if Group exists already in people array
   let newGroupObject= allPeople.find( ( searchGroup ) => searchGroup.name === cleanedGroup )

 // --- get id of existent Group


 // console.log('[ Two Party CHIT form - preview ] GroupId ', GroupId);

 if(newGroupObject){
   let newOtherPartyId = newGroupObject.id

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
 
 }// end newPartyChitId

   dispatch(addTwoPartyChitToStore( newTwoPartyChitData )) 
   dispatch(addGroupHolder( 
     {
     id: newOtherPartyId,
     groupHolder: newTwoPartyChitId,
     dbCollection: 'twoPartyChits' 

     } 
   )) // end dispatch addGroupHlder
 } // end if newGroupObject (broup already exists)


} // end if otherPartyCollection === group

// --- group is new 
if(!newGroupObject){

 let newOtherPartyId = cuid()
 dispatch(addGroupToStore({
   id: newOtherPartyId, 
   name: broup,

 }
 )) // end dispatach addGroupToStore


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

}// end newPartyChitId

dispatch(addTwoPartyChitToStore( newTwoPartyChitData )) 
dispatch(addGroupHolder( 
 {
 id: newOtherPartyId,
 groupHolder: newTwoPartyChitId,
 dbCollection: 'twoPartyChits' 

 } 
)) // end dispatch addGroupnHlder





} // end if group is new



