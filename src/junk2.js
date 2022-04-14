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


  // =======================================
    //  --- set the filter selector for Logs  ---
  
    const [filter, setFilter] = useState('allLogs')

    const changeFilter = (evt)=>{
  
      setFilter(evt.target.value)
      
    }
  
    /* --- make options for select filter
        From all the people and groups in those collections,
        only display an option for the specific types 
        that have a log ... ie (person, company, charity, etc)
    */
  
    let uniqueTypes = uniqueItemsInObjectField(allLogs, 'type')
        let uniqueOptions = uniqueTypes.map((log, index) => {
  
          return (
            <option value= {log}  key = {index} >{log} </option>
          )
      
        }
      
        ) //end map displayLogName
  
    /* --- filter logsArray ---------------------
        1. show all logs or,
        2. show logs only for give type
    */
  
      let filteredLogsArray  
  
      if(filter === 'allLogs'){ filteredLogsArray = allLogs }else{
        filteredLogsArray = allLogs.filter(log => log.type === filter)
      }
  
  
  
    // --- create array of name objects that has duplicates 
    //     (nameObjectArray)
  
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
    
  
  
    
   // ---create array of name objects with NO  duplicates
  
    const ids = nameObjectArray.map(o => o.id)
    const uniqueLogNames = nameObjectArray.filter(({id}, index) => !ids.includes(id, index + 1))
  
    // --- order names a-Z
  
    const orderedUniqueLogNames = descendSorter(uniqueLogNames, 'name')
  
   
  
    // --- displayLogName --- maps the jsx of uniqueLogNames 