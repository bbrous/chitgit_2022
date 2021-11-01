// --- File: pages/navComponents/publicNav/sampleNav/SpotlightNav
// --- Navigation for Spotlights in Side Panel

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'

import { lightGrey, darkGrey, chitRedDark, mediumLightGrey,chitBlueDull, veryLightGrey, chitOrangeMedium, mediumGrey} from '../../../../../styles/colors'


import { unformattedUTCtoDate, DatetoUTC} from '../../../../../app/helpers/dateHelper'
import { ascendSorter, descendSorter} from '../../../../../app/helpers/commonHelpers'


import{ updateStatusView } from '../../../../../app/redux/statusRedux/sam_statusSlice'


import{ 
  selectSpotlights, 
  selectFilteredParentSpotlights,
  selectFilteredCompletedSpotlights,
  selectFilteredBegunSpotlights,
  selectFilteredInactiveSpotlights,
  selectFilteredUnCompletedSpotlights

 } from '../../../../../app/redux/spotlightRedux/sam_spotlightsSlice'



import SliderComponent from '../../../../../common_components/SliderComponent'



// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Wrapper= styled('div')({

  display: 'block',
  backgroundColor: lightGrey,

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})


const FilterWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'space-between',
  justifyContent: 'center',
  alignItems: 'flex-end',

  height: '1.6rem',
  width: '100%',
  borderRadius: '0',
  margin: '7px 0 0 0',
  backgroundColor: 'white',
  color: 'black',

  [theme.breakpoints.down('xs')]: {
    // display: 'none', s
  }

})



const SpotlightWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
  color: chitBlueDull,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem .5rem .5rem',
  borderRadius: '0',
  cursor: 'pointer',
  border: '2px solid white',

    '&:hover' : {
      backgroundColor: veryLightGrey,
      
    },

  
    '&.spotlightCompleted' : {
      backgroundColor: mediumLightGrey, 
    },

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const SpotlightWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '100%',
 
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem .5rem .5rem',
  borderRadius: '0',
  color: 'black',
  backgroundColor: mediumGrey,
  border: '2px solid orange',
  

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const TitleWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap' ,
  width: '100%',
//  backgroundColor: lightGrey,
 color: chitRedDark,
  fontSize: '.85rem',
  margin: '.2rem .1rem',
  
  fontWeight: 'bold',
  borderRadius: '0',
  
  '&.spotlightCompleted' : {
    color: 'white', 
  },


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const TitleWrapperSelected = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',

  color: 'white',
  fontSize: '.85rem',
  margin: '.2rem .1rem',

  borderRadius: '0',


  [theme.breakpoints.down('xs')]: {
    // display: 'none', 
  }

})

const DetailsWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '95%',
  marginLeft: '.8rem',
 
  fontSize: '.75rem',
  color: darkGrey,

  '&.greenHighlight' : {color: 'green'},
  '&.redHighlight' : {color: 'red'},
  '&.greyHighlight' : {color: darkGrey},
  '&.whiteHighlight' : {color: 'white'},
  '&.spotlightCompleted' : {
    color: 'white', 
  },

 
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const DetailsWrapperSelected= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  width: '95%',
  marginLeft: '.8rem',
 
  fontSize: '.75rem',
  color: 'white',

 
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

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
})

const NoneWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
  borderTop: '2px solid grey',
  paddingTop: '2rem',
  color: 'red'
})

const StyledSelectField= styled('select')({
  border: '1px solid orange',
  borderRadius: '5px',
  width: '80%', 
  margin: '1rem 0 0 0 ',
  // width: '16rem',
  backgroundColor: 'white',
  color: darkGrey,


})



// ========================================================

function SpotlightNav(props)  {

  const dispatch = useDispatch()

  let history = useHistory()
  let match = useRouteMatch()

  // --- displayId for setting background color of Nav Link ---

  let displayId = match.params.detailId

  
  //  --- get and update all Spotlights when new spotlight added  ---  
  const allSpotlights = useSelector(selectSpotlights)

  const [SpotlightsArray, setSpotlightsArray] = useState(allSpotlights)

  useEffect(() => {
    setSpotlightsArray(allSpotlights)
  }, [allSpotlights])


  //  --- set the filter for Spotlights  ---
  
    const [filter, setFilter] = useState('uncompleted')


  /*  --- set the filter for Spotlights  ---
      Filtered spotlight array to be  mapped - (SpotlightArrayDisplayed)
      Default is 'all spotlights'
      filter in useEffect changes (SpotlightArrayDisplayed)
  */


  const FilteredParentArray = useSelector(selectFilteredParentSpotlights)
  const FilteredUncompletedArray = useSelector(selectFilteredUnCompletedSpotlights)
  const FilteredBegunArray = useSelector(selectFilteredBegunSpotlights)
  const FilteredCompletedArray = useSelector(selectFilteredCompletedSpotlights)
  const FilteredInactiveArray = useSelector(selectFilteredInactiveSpotlights)
  const [SpotlightArrayDisplayed, setSpotlightArrayDisplayed] = useState(SpotlightsArray)



    useEffect(() => {   
      
    if(filter === 'all') {setSpotlightArrayDisplayed(SpotlightsArray)}
    if(filter === 'topLevel') {setSpotlightArrayDisplayed(FilteredParentArray)}
    if(filter === 'uncompleted') {setSpotlightArrayDisplayed(FilteredUncompletedArray)}
    if(filter === 'begun') {setSpotlightArrayDisplayed(FilteredBegunArray)}
    if(filter === 'completed') {setSpotlightArrayDisplayed(FilteredCompletedArray)}
    if(filter === 'inactive') {setSpotlightArrayDisplayed(FilteredInactiveArray)}

    }, [
      filter,
      SpotlightsArray,
      FilteredParentArray,
      FilteredUncompletedArray,
      FilteredBegunArray,
      FilteredCompletedArray,
      FilteredInactiveArray
    ]);
    

  /* --- set the order for filtered spotlights mapped (arrayOrder)  ---
    Default is latest first
    Uses Material UI's  slider component (boolean)
    Order is determined by last time the spotlight was visited
  */
  
    
  const [arrayOrder, setArrayOrder] = useState(false)
    
  let ascendingSpotlights = ascendSorter(SpotlightArrayDisplayed, 'lastVisit')
  let descendingSpotlights = descendSorter(SpotlightArrayDisplayed, 'lastVisit')

  let sortedSpotlights
  if (arrayOrder === false) { sortedSpotlights = ascendingSpotlights } else if (arrayOrder === true) { sortedSpotlights = descendingSpotlights }





    // --- func For slider -  to change order of array (asc, desc) ---

    const handleSwitchState = (newState) => {
      setArrayOrder(newState)
      console.log('[Inside Spotlight Nav] new state is', newState)
    }




  // ---  func to change the URL id for spotlight to be displayed
  // ---  also changes the status view to detail if it was in tree mode
  
  const handleChangeSpotlight = (evt) => {

    history.push(`/sample/spotlights/${evt.currentTarget.id}`)
    // props.updateStatusView('spotlight', 'detail')
    dispatch(updateStatusView({
      pageType: 'spotlight',
      pageView: 'detail'
    }))
  }


  /*  ====  Map the Spotlights for display =========================

      - requires to reformat date fields retrieved from database
      - changes the color used for className in countdown component
        based on whether the targeted end date has yet to be reached
        or not

  */
  const displaySpotlights = sortedSpotlights.map((Spotlight, index) => {
 
    // --- title to be displayed
    let SpotlightTitle = Spotlight.title
    let spotlightStatus = Spotlight.spotlightStatus

    // console.log('########################### - completed', spotlightStatus)

    // --- reformat the date fields for display
    let dateEst = Spotlight.endEst ? unformattedUTCtoDate(Spotlight.endEst) : 'None'
    let lastVisit = unformattedUTCtoDate(Spotlight.lastVisit)
    let numberOfTasks = Spotlight.taskArray.length

 

    // --- determine if a targeted end was created by user
    let difference = Spotlight.endEst ? DatetoUTC(Date.now()) - DatetoUTC(Spotlight.endEst) : 0

    /* --- choose the color highlight for the countdown component ---
        spotlight status =  completed -> color = white
        spotlight status =  Not completed and positive -> color = green
        spotlight status =  Not completed and negative -> color = red
    */
    
    let differenceHighlight = difference > 0 && spotlightStatus !== 'completed' ? 'redHighlight' : 'greenHighlight'

    if (difference > 0 && spotlightStatus !== 'completed')   { differenceHighlight = 'redHighlight' }
    else if (difference < 0 && spotlightStatus !== 'completed') { differenceHighlight = 'greenHighlight' }else if(spotlightStatus === 'completed'){
      differenceHighlight = 'whiteHighlight'
    }


    else { differenceHighlight = 'greyHighlight' }



    /* func chooseDisplayType ---------------------------------
       css changes highlight of spotlight selected
    ---------------------------------------------------*/

    const chooseDisplayType = () => {

      if (displayId !== Spotlight.id) {

        return (

          <SpotlightWrapper elevation={1}
            key={index}
            id={Spotlight.id}
            onClick={(evt) => {
              handleChangeSpotlight(evt)
            }}
            className={spotlightStatus === 'completed' ? "spotlightCompleted" : ""}
          >
            <TitleWrapper
            className={spotlightStatus === 'completed' ? "spotlightCompleted" : ""}
            >
              {SpotlightTitle}
              
              </TitleWrapper>

            <DetailsWrapper 
            className={differenceHighlight}
            
            > Target complete: {dateEst}</DetailsWrapper>
            <DetailsWrapper
            className={spotlightStatus === 'completed' ? "spotlightCompleted" : ""}
            >
              Status: {spotlightStatus} 
              </DetailsWrapper>
            <DetailsWrapper 
            className={spotlightStatus === 'completed' ? "spotlightCompleted" : ""}
            >
              Tasks: {numberOfTasks} 
              </DetailsWrapper>

          </SpotlightWrapper>


        )
      }

      if (displayId === Spotlight.id) {

        return (

          <SpotlightWrapperSelected elevation={1}
            key={index}
            id={Spotlight.id}
            onClick={(evt) => {
              handleChangeSpotlight(evt)
            }}
          >
            <TitleWrapperSelected>{SpotlightTitle}</TitleWrapperSelected>
            <DetailsWrapperSelected
            > Target complete: {dateEst}</DetailsWrapperSelected>

            <DetailsWrapperSelected>Status: {spotlightStatus} </DetailsWrapperSelected>
            <DetailsWrapperSelected>tasks: {numberOfTasks}</DetailsWrapperSelected>

          </SpotlightWrapperSelected>


        )
      }
    }

    return chooseDisplayType()


  }) // end function displaySpotlights
  


  // ----- func changeFilter change the filter when change slider

  const changeFilter = (evt)=>{

    setFilter(evt.target.value)
    

  }

// =================================================================
// === RETURN for main function ===================================

  return (
    <>


      <FilterWrapper  >

        <StyledSelectField name="filters" id="filters"
          onChange={(evt) => changeFilter(evt)}
        >
          <option value="uncompleted" >All uncompleted spotlights</option>
          <option value="topLevel" >Top level spotlights only</option>
          <option value="begun">Active only</option>
          <option value="inactive">Inactive only</option>
          <option value="all">All spotlights</option>
          <option value="completed">Completed only</option>
        </StyledSelectField>

      </FilterWrapper>

      <OrderWrapper>

        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='desc'
          rightLabel='asc'
        />

      </OrderWrapper>

      {SpotlightArrayDisplayed.length > 0 &&
        <DisplayWrapper>

          {displaySpotlights}

        </DisplayWrapper>
      }

      {SpotlightArrayDisplayed.length === 0 &&
        <NoneWrapper>

          No Spotlights for this filter

        </NoneWrapper>
      }

    </>
  ) // end return

} // end function SpotlightNav

// ================================================

export default SpotlightNav
