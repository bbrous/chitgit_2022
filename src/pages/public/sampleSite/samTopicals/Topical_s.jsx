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

import { sortLogsByDateAscending, sortLogsByDateDescending, noteFilter, topicalFilter } from '../../../../app/helpers/chronicleHelpers';

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
      - filtereSections
      - filteredNotes
      - allTopicals (combo of above)

  */

  let filteredSections = topicalFilter(allSectionsArray, id)
  let filteredNotes = noteFilter(allNotesArray, id)

  let allTopicals = [...filteredSections, ...filteredNotes]



  // console.log('@@@ [Topical]- filtered sections -- ' , filteredSections)
  // console.log('@@@ [Topical]- filtered notes -- ' , filteredNotes)
  // console.log('@@@ [Topical]- filtered allTopicals -- ' , allTopicals)


// ##########################################################
  // function to change the display order (oldest to newest)
  const handleSwitchState = (newState) => {
    // newState === false? setArrayOrder(true): setArrayOrder(false)
    // 
  }
// ##########################################################


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




      <SectionWrapper>
        <TopicalSection />
      </SectionWrapper>

      <NoteWrapper>
        <TopicalNote />
      </NoteWrapper>

      <NoteWrapper>
        <TopicalNote />
      </NoteWrapper>

      <NoteWrapper>
        <TopicalNote />
      </NoteWrapper>


      <SectionWrapper>
        <TopicalSection />
      </SectionWrapper>

      <NoteWrapper>
        <TopicalNote />
      </NoteWrapper>

      <NoteWrapper>
        <TopicalNote />
      </NoteWrapper>


      <SectionWrapper>
        <TopicalSection />
      </SectionWrapper>

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
    // height: '1.25rem',

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

  margin: '.25rem',
  padding: '.5rem',
   
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
    // height: '1.25rem',

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