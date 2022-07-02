/* function PersonalLedger (props) -------------------
 
  children: ./PersonalLedgerRow
  parent: ./PersonalMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { chitYellowMedium} from '../../../../../styles/colors'

import PersonalLedgerRow from './PersonalLedgerRow_s';
import SliderComponent from '../../../../../common_components/SliderComponent';

import { ISOtoUTC, UTCtoISO, UTCtoDateTradional } from '../../../../../app/helpers/dateHelper';
import { getMilestonesOnly } from '../../../../../app/helpers/chitHelpers';

import { selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';
 
import { selectAllPersonalChits } from '../../../../../app/redux/personalChitRedux/sam_personalChitSlice';

import { sortChitsByDate, personalChitFilter } from '../../../../../app/helpers/chitHelpers';

//  MUI 
import Paper from '@mui/material/Paper'

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


// ===================================================

export default function PersonalLedger(props) {
  let match = useParams()
  let id = match.id // get URL view location

  const [milestones, setMilestones] = useState(true)  // all chits

  let allPersonalChitsArray = useSelector(selectAllPersonalChits)//immutable
  var chitsArray = [...allPersonalChitsArray]; // mutable copy of allPersonalChitsArray


 //sort and filter all chits

  let filteredChits = personalChitFilter(chitsArray, id)
  let sortedChitsByDate = sortChitsByDate(filteredChits)

 //  sort and get milestone chits
 
  let milestoneChits = filteredChits.filter(milestone => milestone.chitColor === 'milestone')

  let sortedMilestonesByDate = sortChitsByDate(milestoneChits)

  // console.log('[PersonalLedger] - milestoneChits', milestoneChits)

//  #######################################################

//  #######################################################

// ADDRESS - array.length === 0

//  #######################################################


 if(milestones) {

  
 }

 if(!milestones) { console.log('[ PersonalLedgre by milestone ] filteredChits ', ); }





// ##################################################

//  #######################################################

  const allLedgerRows = () => {

    if(sortedChitsByDate.length > 0){ 

    let displayedRows = sortedChitsByDate.map((row, index) => {

      return (
        <PersonalLedgerRow
          id={row.id}
          key={row.id}
          data={row}

        />
      )
    }
    ) //end map
    return displayedRows
  }else{
    return(
      <NoChitMessageWrapper> No personal chits for this category</NoChitMessageWrapper>
    )
  }




  }// end allLedgerRows

  const milestonesOnlyRows = () => {
    if(sortedMilestonesByDate.length > 0){ 
    let displayedRows = sortedMilestonesByDate.map((row, index) => {

      return (
        <PersonalLedgerRow
          id={row.id}
          key={row.id}
          data={row}

        />
      )
    }
    ) //end map
    return displayedRows
  }else{
    return(
      <NoChitMessageWrapper> No milestones for this category</NoChitMessageWrapper>
    )
  }
  }// end allLedgerRows


// handleSwitch state - all chits vs milestones only

const handleSwitchState = (newState) => {
   console.log('[PersonalLedger] switch state', newState)
   setMilestones(newState)

}
  return (
    <Wrapper>
      <SliderWrapper> 
              <SliderComponent
              
          handleSwitchState={handleSwitchState} switch
          rightLabel='all chits'
          leftLabel=  'milestones only'
        />

</SliderWrapper>

      {milestones &&
        <>
          {allLedgerRows()}
        </>
      }

      {!milestones &&
        <>
          {milestonesOnlyRows()}
        </>
      }

    </Wrapper>
  );
}


// -----------------------------------------------------------------


const Wrapper= styled('div')({

  // backgroundColor: 'green' ,
  
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'calc(100% - 16px)' ,
  //   height: '100%',
  
  
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },
  
  })

  const SliderWrapper= styled('div')({

    backgroundColor: chitYellowMedium ,
    
      display: 'flex',
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 'calc(100% - 14px)',
      paddingLeft: '14px',
      paddingTop: '8px',
      height: '2.2rem',
    
    //   height: '100%',
    
    
    //   [theme.breakpoints.down('sm')] : {
    //     // width: '100%'
    //   },
    
    })

    const NoChitMessageWrapper= styled(Paper)({

      backgroundColor: 'white' ,
      
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% - 14px)',
        paddingLeft: '14px',
        marginTop: '8px',
        height: '5rem',
      
      //   height: '100%',
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })