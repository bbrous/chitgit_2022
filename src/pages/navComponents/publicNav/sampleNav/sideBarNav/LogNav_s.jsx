/* function LogNav(props) -------------------

  Side bar navigation for Logs

  1a. select all logs
     1b. select all groups
     1c. select all people
     
  2. create filter options for filter selector

  3. get the names of the logs --
     use log.otherPartyId to query group or people collections
     for the name
  4. create an array of names with associated Id's - 2 steps
     - first create array of names with lot's of duplicates
     - get unique names / id's from duplicates array

  5. map through unique names array to create JSX
 

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
import { selectlogHolders } from '../../../../../app/redux/logHolderRedux/sam_logHolderSlice'

import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'

import { selectPeople} from '../../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice'


import SliderComponent from '../../../../../common_components/SliderComponent'

// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

 





// =========================================

function LogNav() {

  const dispatch = useDispatch()
  let navigate = useNavigate()
  let match = useParams()


 // --- displayId for setting background color of Nav Link ---

  let displayId = match.id

  const allLogHolders = useSelector(selectlogHolders)
  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)

  const [logHolderArray, setLogHolderArray] = useState(allLogHolders)
  useEffect(() => {
    setLogHolderArray(allLogHolders)
  }, [allLogHolders])




    // --- Map the categories for display in side panel

    let unsortedLogHoldersArray = [] 
    let logHolderObject
    logHolderArray.map((logHolder, index) => {

      if(logHolder.collection === 'people') {

      
        const person = allPeople.find(person =>  person.id === logHolder.id)

        logHolderObject = {id: person.id, name: person.name}
        // console.log('[ LogNav ] Ima person ', logHolderObject);
        // nameObject = {id: person.id, name: person.name}
        // console.log('[ LogSection ] Person Here ', nameObject);
      }
      
      if(logHolder.collection === 'groups') {

        const group = allGroups.find(group =>  group.id === logHolder.id)
        logHolderObject = {id: group.id, name: group.name}
        // console.log('[ LogNav ] Ima group ', logHolderObject);
      
   

      }

      unsortedLogHoldersArray.push(logHolderObject)
    
      return unsortedLogHoldersArray
      

    }) // end function displayCategory

 

const orderedLogHoldersArray = descendSorter(unsortedLogHoldersArray, 'name')

let displayLogHolderName = orderedLogHoldersArray.map((log, index) => {



  return (
    <Wrapper key={log.id} >
      {displayId === log.id &&
        <SelectorWrapperSelected elevation={1}

          id={log.id}
          onClick={(evt) => {
            handleChangeLog(evt)
          }}
        >

          {log.name}

        </SelectorWrapperSelected>


      }

      {displayId !== log.id &&

        <SelectorWrapper elevation={1}

          id={log.id}
          onClick={(evt) => {
            handleChangeLog(evt)
          }}
        >
          {log.name}

        </SelectorWrapper>



      }
    </Wrapper>
  )
}) //end map displayLogName


  // --- on click function that changes URL and Redux store status
  
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
  



<OrderWrapper>

 
</OrderWrapper>

<DisplayWrapper>
  {displayLogHolderName}
</DisplayWrapper>


        </>
 
  )
}

export default LogNav


// -------------------------------

const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  width: '100%',


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


