// ######################################################

let nameObject
let nameObjectArray = []

filteredLogsArray.map((log, index) => {

    if(log.type === 'person') {
     
      const person = allPeople.find(person =>  person.id === log.otherPartyId)
      nameObject = {id: person.id, name: person.name}
      // console.log('[ LogSection ] Person Here ', nameObject);
    }else{
      const group = allGroups.find(group =>  group.id === log.otherPartyId)
      nameObject = {id: group.id, name: group.name}
      // console.log('[ LogSection ] Group Here ', nameObject);
    }

    nameObjectArray.push(nameObject)
    return (
      nameObjectArray
    )

  }


  ) //end map displayLogName
  

  console.log('[ LogSection ] nameObjectArray ', nameObjectArray);
  
 
  const ids = nameObjectArray.map(o => o.id)
  const unique = nameObjectArray.filter(({id}, index) => !ids.includes(id, index + 1))