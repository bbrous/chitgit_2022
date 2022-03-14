/*---- File - TopicalsContent.jsx
     Displays sections and notes from Redux stores
     
     1. get all notes for Topical
     2. get all sections for Topical
     3. merge (1) and (2)
     4. order by date
     5. map combined, ordered by date array

     container is flex row
        - sections take 100%
        - notes have margins so they show side by side if between sections
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'

import TopicalSection from './TopicalSection_s'
import TopicalNote from './TopicalNote_s'
//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

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

// ================================================
function TopicalsContent(props) {
 
  const match = useParams()

  const matchId = match.id

return (
<Wrapper>


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




  )}// end func TopicalsContent

 
export default TopicalsContent