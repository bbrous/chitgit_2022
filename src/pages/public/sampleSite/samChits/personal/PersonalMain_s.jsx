/* function PersonalMain (props) -------------------
 

  parent: ../Chits_s
------------------------------------*/

import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import {veryLightGrey} from '../../../../../styles/colors'

import PersonalChitHeader from './PersonalChitHeader_s';
import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import PersonalLedger from './PersonalLedger_s';
import PersonalCalendar from './PersonalCalendar_s';
 

// --- MUI ----------

import Paper from '@mui/material/Paper'

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '95%',
//   alignItems: 'center',
//   backgroundColor: veryLightGrey,
//   width: '100%',
//   height: '100%',
// overflow: 'hidden',

//   [theme.breakpoints.down('sm')] : {
//     // width: '100%'
//   },

})

const NoneMessage= styled(Paper)({
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



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

// ====================

export default function PersonalMain_s(props) {
  let chitView= useSelector(selectStatus).view.chit.display
  let categoryView = useSelector(selectStatus).view.chit.id
  let [newCategoryView, setNewCategoryVIew] = useState(categoryView)

  useEffect(() => {
    // console.log('[Spotlights_s]  SpotlightPage is', spotlightView)
    setNewCategoryVIew(categoryView)
  }, [categoryView])

  console.log('[ Personal Main ] newCategoryView ================================ ', newCategoryView);
  
  return (
    <Wrapper>

     {!newCategoryView && 
       <NoneMessage>
       <div>Choose a category to be displayed</div>
       <div>or</div>
       <div>Create a new category</div>
     </NoneMessage>
    }

      {newCategoryView && <>
        <PersonalChitHeader />
        {chitView === 'ledger' && <PersonalLedger />}
        {chitView === 'calendar' && <PersonalCalendar />}
      </>
      }
    </Wrapper>
  );
}

