/* function TwoPartyNav(props) -------------------

  Side bar navigation for TwoParty Chits

  1a. select all two party chits
     1b. select all groups
     1c. select all people
  2. filter allTwoParty Chits by people 
  3. filter allTwoParty Chits by group 
  4. get unique id values for otherParty for #2 and #3
  5. map through #4 for people and group
     5a. find by id details for each
     5b. return display




  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { lightGrey, veryLightGrey,   mediumGrey,   chitBurgandy, chitOrange} from '../../../../../styles/colors'

import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice'

import { selectPeople} from '../../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice'

import { ascendSorter, descendSorter, uniqueItemsInObjectField} from '../../../../../app/helpers/commonHelpers'


import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'


import SliderComponent from '../../../../../common_components/SliderComponent'


// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component




// ==============================================================

function TwoPartyNav() {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let match = useParams()



  // --- displayId for setting background color of Nav Link ---

  let displayId = match.id

  // --- define whether calendar or ledger display

  let initialStatus = useSelector(selectStatus)
  let twoPartyView = initialStatus.view.chit.twoPartyDisplay

  const [display, setDisplay] = useState(twoPartyView)
  useEffect(() => {
    setDisplay(twoPartyView)

  }, [twoPartyView])


  // ---1a  get all two party chits
  const allChits = useSelector(selectAllTwoPartyChits)

  const [twoPartyChitsArray, setsetTwoPartyChitsArray] = useState(allChits)
  useEffect(() => {
    setsetTwoPartyChitsArray(allChits)
  }, [allChits])

  // ---1b get all people -----
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

  // ---2 filter ---  get people only  two party chits

  const allPeopleChits = twoPartyChitsArray.filter(people => {
    return people.otherPartyCollection === 'people';
  });

   // ---3 filter ---  get groups only two party chits
  const allGroupsChits = twoPartyChitsArray.filter(group => {
    return group.otherPartyCollection === 'groups';
  });

  
  // --- 4 get unique people  ... and ... unique groups
  let allPeopleArray = uniqueItemsInObjectField(allPeopleChits, 'otherPartyId')
  let allGroupsArray = uniqueItemsInObjectField(allGroupsChits, 'otherPartyId')


  // console.log('[ TwoPartyNav ] allGroupsChits ', allGroupsChits);
 


 // --- 5 map through allPeopleArray - get data from allPeople by id   


  const unsortedNamesOfPeople = allPeopleArray.map((id, index) => {

    let personObject = allPeople.find(person => person.id === id)
    return (
      personObject

    )
  }
  ) //end map allPeopleArray

  const [arrayOrder, setArrayOrder] = useState(false)


  let ascendingPeople = ascendSorter(unsortedNamesOfPeople, 'name')
  let descendingPeople = descendSorter(unsortedNamesOfPeople, 'name')

  let sortedPeople
  if (arrayOrder === true) { sortedPeople = ascendingPeople } else if (arrayOrder === false) { sortedPeople = descendingPeople }

  // console.log('[ PersonalNav ] sortedPeople ', sortedPeople);

const handleSwitchState = (newState) => {
  setArrayOrder(newState)

}

const handleChangePerson = (evt) => {
  let newPerson = evt.currentTarget.id
  navigate(`/sample/twoPartyChits/${newPerson}`)

  dispatch(updateStatusView({
    pageType: 'twoPartyChit',
    pageView: 'ledger',
    type: 'twoPartyChits',
    id: newPerson
  }))
}


const displayPeople =sortedPeople.map((person, index) => {


  let name =person.name

  
/* func chooseDisplayType ---------------------------------
   desc: css changes highlight of person selected
---------------------------------------------------*/
const chooseDisplayType =()=>{
  if(displayId !== person.id){
   
// console.log('[ PERSONAL NAV] person.id ', person.id);

  return(

    

    <SelectorWrapper elevation={1}
      key = {index} 
      id = {person.id}
      onClick = {(evt)=>{
        handleChangePerson(evt)
      }}
    >
           {name}
          </SelectorWrapper>
    

  )}
    
  if(displayId === person.id){

    return(

      <SelectorWrapperSelected elevation={1}
        key = {index} 
        id = {person.id}
        onClick = {(evt)=>{
          handleChangePerson(evt)
        }}
      >
             {name}
            </SelectorWrapperSelected>
      

    )}   
      }
      
  return chooseDisplayType()


  }) // end function displayPeople




 // --- 5 map through allGroupsArray - get data from allGroups by id   


 const unsortedNamesOfGroups = allGroupsArray.map((id, index) => {

  let groupObject = allGroups.find(group => group.id === id)
  return (
    groupObject

  )
}
) //end map allGroupArray

 


 
let descendingGroups = descendSorter(unsortedNamesOfGroups, 'name')

let  sortedGroups = descendingGroups

// console.log('[ PersonalNav ] sortedGroups ', sortedGroups);
 

const handleChangeGroup = (evt) => {
let newGroup = evt.currentTarget.id
navigate(`/sample/twoPartyChits/${newGroup}`)

dispatch(updateStatusView({
  pageType: 'chit',
  pageView: display,
  type: 'twoPartyChits',
  id: newGroup
}))
}


const displayGroups =sortedGroups.map((group, index) => {


let name =group.name


/* func chooseDisplayType ---------------------------------
 desc: css changes highlight of person selected
---------------------------------------------------*/
const chooseDisplayType =()=>{
if(displayId !== group.id){
 
// console.log('[ PERSONAL NAV] person.id ', person.id);

return(

  

  <SelectorWrapper elevation={1}
    key = {index} 
    id = {group.id}
    onClick = {(evt)=>{
      handleChangePerson(evt)
    }}
  >
         {name}
        </SelectorWrapper>
  

)}
  
if(displayId === group.id){

  return(

    <SelectorWrapperSelected elevation={1}
      key = {index} 
      id = {group.id}
      onClick = {(evt)=>{
        handleChangePerson(evt)
      }}
    >
           {name}
          </SelectorWrapperSelected>
    

  )}   
    }
    
return chooseDisplayType()


}) // end function displayGroups





  // --- Main Return  ----------------------

  return (
    <Wrapper>
    { allPeople.length ===  0 && <NoneMessage> 
  Create a new Personal Chit Person
   </NoneMessage> }
   
  
   { allPeople.length > 0 && <> 
  
        {displayId !== 'allChits' &&
          <StaticWrapper elevation={1}
            id='allChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
            All Chtis
          </StaticWrapper>
  
        }
        {displayId === 'allChits' &&
          <StaticWrapperSelected elevation={1}
            id='allChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
            All Chits
          </StaticWrapperSelected>
  
        }
  
        {displayId !== 'workChits' &&
          <StaticWrapper elevation={1}
            id='workChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
            Work Chits
          </StaticWrapper>
  
        }
        {displayId === 'workChits' &&
          <StaticWrapperSelected elevation={1}
            id='workChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
           All Work Chits
          </StaticWrapperSelected>
  
        }

{displayId !== 'goodWillChits' &&
          <StaticWrapper elevation={1}
            id='goodWillChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
            Good Will Chits
          </StaticWrapper>
  
        }
        {displayId === 'goodWillChits' &&
          <StaticWrapperSelected elevation={1}
            id='goodWillChits'
            onClick={(evt) => {
              handleChangePerson(evt)
            }}
          >
            Good Will Chits
          </StaticWrapperSelected>
  
        }




        <OrderWrapper>
          <div>People</div>


          <SliderComponent
            handleSwitchState={handleSwitchState} //gets new state from child switch
            leftLabel='a-Z'
            rightLabel='z-A'
          />

        </OrderWrapper>
        <DisplayWrapper>

          <PeopleWrapper>
            {displayPeople}
          </PeopleWrapper>
          <OrderWrapper> Groups  </OrderWrapper>
          <PeopleWrapper>

            {displayGroups}
          </PeopleWrapper>


        </DisplayWrapper>
  
         </>
        } 
      </Wrapper>
  )
} // end TwoPartyNav


export default TwoPartyNav
// -----------------------------------------------------------------


const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '98%',
  height: '100%',
  padding: '4px 2px 16px 2px',
  marginTop: '4px',
  backgroundColor: 'white',
  overflow: 'auto',

  
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const OrderWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  fontSize: '.8em',
  color: chitBurgandy,
  margin: '8px 0 0 0',
  // border: '1px solid purple',
  backgroundColor: lightGrey,
})

const DisplayWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
 
 
})


const StaticWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'black',
  
  
  cursor: 'pointer',
  width: '100%',
  height: '2rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  border: '1px solid #F6F7F8', 
 
    '&:hover' : {
      // backgroundColor: 'white',
        color: chitOrange,
    },


})
const StaticWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'white',
  backgroundColor: mediumGrey,
   
  

  width: '100%',
  height: '2rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',


})

const PeopleWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  marginTop: '5px',
  maxHeight: '65vh' ,
  overflowY: 'auto',
  paddingBottom: '3px',


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


const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '3rem',
  borderRadius: '10px',
  textAlign: 'center',
  color: chitBurgandy,

  
})
