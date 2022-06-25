/* function Topical(props) -------------------

    maps the topicalSections && notes for a specified topical


  Children: ./TopicalSection
            ./TopicalNote
 
    parent: ./LogMain
------------------------------------*/



import React , {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'


import{lightGrey, darkGrey} from '../../../../styles/colors'

import TopicalSection from './TopicalSection_s'
import TopicalNote from './TopicalNote_s'

import { selectTopicalSections } from '../../../../app/redux/topicalRedux/sam_topicalSectionsSlice';

import { selectNotes } from '../../../../app/redux/noteRedux/sam_notesSlice';

import { selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice';

import { sortTopicalsByDateAscending, sortTopicalsByDateDescending, noteFilter, topicalFilter ,  } from '../../../../app/helpers/chronicleHelpers';

import SliderComponent from '../../../../common_components/SliderComponent'
import TopicalFilters from './TopicalFilters_s'



//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component



// =======================================================


function Topical(props) {

  let match = useParams()
  let id = match.id // get URL view location
  const dispatch = useDispatch()

  const allTopicalSectionsArray = useSelector(selectTopicalSections)
  const allTopicalNotesArray = useSelector(selectNotes)
  const status = useSelector(selectStatus)



  
  /*
    get all topicalSections for topicals
    get all notes topicals

  */

  const [allSectionsArray, setAllSectionsArray] = useState(allTopicalSectionsArray)

  useEffect(()=>{

    setAllSectionsArray(allTopicalSectionsArray)

  },[allTopicalSectionsArray])

  const [allNotesArray, setAllNotesArray] = useState(allTopicalNotesArray)

  useEffect(()=>{

    setAllNotesArray(allTopicalNotesArray)

  },[allTopicalNotesArray])

  /*
    create the 3 filtered entities for topicalId
    but because each sections objects and notes objects
    have no distinguishing attribute 
    
    ... need to add a 
    topicalType to each array ... so that they can be
    distinguished when  displayed.

    ... also need to add a sortDate so that combined
        sections and notes can be sorted (asc, desc)

      - filtereSections
      - filteredNotes
      - allTopicals (combo of above)

  */

         
      
      let modifiedSectionsArray = []
      let newSectionObject
      allSectionsArray.map((item,  index) => {
       newSectionObject = {...item, topicalType: 'section', topicalSortDate: item.topicalDate}
       modifiedSectionsArray.push(newSectionObject)
      return modifiedSectionsArray
      }
      ) //end map

      let modifiedNotesArray = []
      let newNoteObject
      allNotesArray.map((item,  index) => {
       newNoteObject = {...item, topicalType: 'note', topicalSortDate: item.noteDate}

       modifiedNotesArray.push(newNoteObject)
      return modifiedNotesArray
      }
      ) //end map

      console.log('[ Topical_s] modifiedNotesArray ', modifiedNotesArray);
  
 
    // --- filter the notes and sections array by topical Id
    let filteredSections = topicalFilter(modifiedSectionsArray, id)
    let filteredNotes = noteFilter(modifiedNotesArray, id)

    // --- create the new combined allTopicals array
    let allFilteredTopicals = [...filteredSections, ...filteredNotes]

   

    // --- get the displayType from status view redux store
    // --- choose which array (section, note, all) is to be displayed
    
    let displayType = status.view.topical.displayType
    let topicalArrayDisplayed

    if(displayType === 'all'){topicalArrayDisplayed = allFilteredTopicals}
    if(displayType === 'sections'){topicalArrayDisplayed = filteredSections}
    if(displayType === 'notes'){topicalArrayDisplayed = filteredNotes}


    // console.log('[ Topical_s] displayType ', displayType);
    // console.log('[ Topical_s] array ', topicalArrayDisplayed);


    // --- order topicalArrayDisplayed (ascendding, descending)
    const [arrayOrder, setArrayOrder] = useState(false)

 
     
    let sortedTopical = [...topicalArrayDisplayed]

    if(arrayOrder === true) {  sortedTopical = sortTopicalsByDateDescending(sortedTopical) }
    if(arrayOrder === false) { sortedTopical = sortTopicalsByDateAscending(sortedTopical) }

    console.log('[ Topical] arrayOrder ', arrayOrder);
console.log('@@@ [Topical]- sortedTopical -- ' , sortedTopical)
 

    // --- create the display ----

    const topicalsDisplay = () =>

    sortedTopical.map((row, index) => {
 
      if(row.topicalType === 'section'){
      return (
        <SectionWrapper key={row.id}>
        <TopicalSection 
         id={row.id}
         key={row.id}
         data={row}
        
        />
      </SectionWrapper>
      )
    }else{
      

      return (
        <NoteWrapper key={row.id}>
        <TopicalNote 
         id={row.id}
         key={row.id}
         data={row}
        
        />
      </NoteWrapper>
      )
    
    }




    }
    ) //end map
    




// ##########################################################
  // function to change the display order (oldest to newest)
  const handleSwitchState = (newState) => {
    newState === false? setArrayOrder(true): setArrayOrder(false)
    // 
  }



  return (
    <Wrapper>


      <FilterWrapper>
        <TopicalFilters />

        <SliderWrapper>
          <SliderComponent
            handleSwitchState={handleSwitchState} //gets new state from child switch
            leftLabel='oldest first'
            rightLabel='latest first'
          />

        </SliderWrapper>


      </FilterWrapper>     

{topicalsDisplay()}



    </Wrapper>


  ) // end main return
} // end Main Function Topical

export default Topical



// -----------------------------------------------------------------

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  // alignItems: 'center',
  // marginLeft: '2.5rem',
  flexWrap: 'wrap',
  width: '95%',
  // backgroundColor: 'yellow',


  [theme.breakpoints.down('sm')]: {
    width: '100%',

  },
})

const SectionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',

  // margin: '1rem 0 ',
  padding: '.5rem',
   
  width: '100%',

  // height: '8rem',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const NoteWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',

 
  padding: '.5rem',
  marginRight: '4rem',
  width: '10rem',

  height: '10rem',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const FilterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '95%',
  padding: '0 12px',
  // height: '3rem',
  margin: '.5rem  0 .5rem 0',
 
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    flexDirection: 'column',
    width: '100%',
    padding: '0 4px',
  },

})



const SliderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1rem',
 
  // width: '50%',
  height: '100%',
 
  // minHeight: '10rem',
  

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})