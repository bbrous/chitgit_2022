
// -- create Options for  people select ----- 
let peopleObjectArray = []
let peopleOptionsArray = []

// -- get rid of "unknown" from all people
let filteredPeople = allPeople.filter(item => item.id !== 'unknown')

let sortedFilteredPeople = descendSorter(filteredPeople, 'name')

sortedFilteredPeople.map((person, index) => {
  peopleObjectArray.push({ id: person.id, name: person.name })


  return peopleObjectArray
}
) //end map

peopleObjectArray.map((person, index) => {

  let personExists = logsIdArray.includes(person.id)
  let personObject = { id: person.id, label: person.name }
  if (personExists) {
    // console.log('[ LOG SECTION FORM  ] Yes INCLUDED', personObject);




  }
  if (!personExists) {
    // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED', personObject);
    peopleOptionsArray.push(personObject)

  }

  return peopleOptionsArray
}
) //end map
