/* function LogNav(props) -------------------

  Side bar navigation for Logs

  1a. select all logs
     1b. select all groups
     
  2. create filter options from groups
    - get unique id values for type from logs (person, company, etc)
    - map through unique values in groups to get names
    - return array of options - 
     <option value = name> {name} </option>




  3. filter logs by group and people
  4. map through #4 for people and group
 



  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/


import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { lightGrey, veryLightGrey,   mediumGrey,   chitBurgandy, chitOrange} from '../../../../../styles/colors'

// --- helpers
import { unformattedUTCtoDate, DatetoUTC} from '../../../../../app/helpers/dateHelper'
import { ascendSorter, descendSorter, uniqueItemsInObjectField} from '../../../../../app/helpers/commonHelpers'

//--- redux store slices --------------------------
import { 
  selectLogs
} from '../../../../../app/redux/logRedux/sam_logsSlice'

import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'

import { selectPeople} from '../../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice'


import SliderComponent from '../../../../../common_components/SliderComponent'

// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

 



// -------------------------------

const Wrapper= styled('div')({

  display: 'block',
  position: 'relative',


  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const FilterWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '16px',
  // height: '1.6rem',
  width: '100%',
  borderRadius: '0',
  margin: '7px 0 0 0',
  backgroundColor: 'white',
  color: 'black',

  [theme.breakpoints.down('xs')]: {
    // display: 'none', s
  }

})
const StyledSelectField= styled('select')({
  border: '1px solid orange',
  borderRadius: '5px',
  width: '80%', 
  margin: '1rem 0 0 0 ',
  // width: '16rem',
  backgroundColor: 'white',
  color: mediumGrey,


})

const OrderWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  fontSize: '.8em',
  margin: '8px 0 16px 0'

})



const DisplayWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
  borderTop: '2px solid grey',
  paddingBottom: '4px'
})


const SelectorWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',

  cursor: 'pointer',
  borderRadius: '0',
    '&:hover' : {
      // backgroundColor: veryLightGrey,
      color: chitOrange,
    },
  })

  
const SelectorWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  color: 'white',
  backgroundColor: mediumGrey,



})




// =========================================

function LogNav() {

  const dispatch = useDispatch()

  let navigate = useNavigate()
  let match = useParams()


 // --- displayId for setting background color of Nav Link ---

 let displayId = match.id

  //  --- get and update all Logs when new log added  ---  
  const allLogs = useSelector(selectLogs)


  
  const [LogsArray, setLogsArray] = useState(allLogs)

  useEffect(() => {
    setLogsArray(allLogs)
  }, [allLogs])

   // ---1c get all people -----
  const allPeople = useSelector(selectPeople)

  const [peopleArray, setPeopleArray] = useState(allPeople)
  useEffect(() => {
    setPeopleArray(allPeople)
  }, [allPeople])

   // ---1c get all people -----

  const allGroups = useSelector(selectGroups)

  const [groupsArray, setGroupsArray] = useState(allGroups)
  useEffect(() => {
   setGroupsArray(allGroups)
  }, [allGroups])


  //  --- set the filter for Logs  ---
  
  const [filter, setFilter] = useState('allLogs')

  const changeFilter = (evt)=>{

    setFilter(evt.target.value)
    
  }


  // ######################################################
// create filtered arrays here ---------------------

console.log('[ LogSection ] LogsArray ', LogsArray);

console.log('[ LogSection ] filter ', filter);





















  //make options for select filter

  let uniqueTypes = uniqueItemsInObjectField(allLogs, 'type')
      let uniqueOptions = uniqueTypes.map((log, index) => {

        return (
          <option value= {log}  key = {index} >{log} </option>
        )
    
      }
    
    
      ) //end map displayLogName


 

// ######################################################

let filteredLogsArray  



if(filter === 'allLogs'){ filteredLogsArray = allLogs }else{
  filteredLogsArray = allLogs.filter(log => log.type === filter)
}

// let filteredLogsArray = uniqueItemsInObjectField(allLogs, filter)
console.log('[ LogSection ] filter ------ ', filter );
console.log('[ LogSection ] boy ------ ', filteredLogsArray );





let nameObject
let nameObjectArray = []


// create array of name objects WITH duplicates




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
  
 // create array of name objects with NO  duplicates

  const ids = nameObjectArray.map(o => o.id)
  const uniqueLogNames = nameObjectArray.filter(({id}, index) => !ids.includes(id, index + 1))

  // --- order names a-Z

  const orderedUniqueLogNames = descendSorter(uniqueLogNames, 'name')

  console.log('[ LogSection ] uniqueLogNames ', uniqueLogNames);


  




  // --- displayLogName --- the map of jsx with uniqueLogNames 
 
  let displayLogName = orderedUniqueLogNames.map((log, index) => {
    if (displayId === log.id) {
   
    return (
    
      <SelectorWrapperSelected elevation={1}
      key = {index} 
      id = {log.id}
      onClick = {(evt)=>{
        handleChangeLog(evt)
      }}
    >
      {log.name}

    </SelectorWrapperSelected>


    )
    }

    if (displayId !== log.id) {
   
      return (
      
        <SelectorWrapper elevation={1}
        key = {index} 
        id = {log.id}
        onClick = {(evt)=>{
          handleChangeLog(evt)
        }}
      >
        {log.name}
  
      </SelectorWrapper>
  
  
      )
      }


  }


  ) //end map displayLogName
  



  
    // --- func For slider -  to change order of array (asc, desc) ---

    const handleSwitchState = (newState) => {
      // setArrayOrder(newState)
      console.log('[Inside Spotlight Nav] new state is', newState)
    }

    const handleChangeLog = (evt) => {
      let newLog = evt.currentTarget.id
      navigate(`/sample/logs/${newLog}`)
    
      dispatch(updateStatusView({
        pageType: 'log',
   
      
        id: newLog
      }))
    }

    
// === MAIN return ===================================================

  return (
<>
  

<FilterWrapper  >

<StyledSelectField name="filters" id="filters"
  onChange={(evt) => changeFilter(evt)}
>
  <option key = '99' value="allLogs" >All logs  </option>
  {uniqueOptions}
 
  

</StyledSelectField>

</FilterWrapper>

<OrderWrapper>

 
</OrderWrapper>

<DisplayWrapper>
  {displayLogName}
</DisplayWrapper>


        </>
 
  )
}

export default LogNav
