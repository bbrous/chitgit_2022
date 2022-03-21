/* function TwoPartyLedgerRow (props) -------------------
 
 
  parent: ./TwoPartyLedger
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import cuid from 'cuid';
import { veryLightGrey, lightGrey } from '../../../../../styles/colors'
import { updateAccordionDisplay, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

// ---MUI ------
import { Paper } from '@mui/material';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import { styled, createTheme } from "@mui/material/styles"
import { withStyles } from '@mui/styles'

const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Wrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  //   alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  padding: '3px 6px',
  margin: '3px 0',
  borderRadius: '5px',
  border: '2px solid #F6F7F8',

  boxShadow: '1px 2px #CFD0D1'


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const HeaderWrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.7rem',
  borderBottom: '1px solid #E6E7E8',
  width: '100%',
  padding: '0 0 4px 0',
  margin: '0 0 4px 0',


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionWrapper = styled('div')({

  // backgroundColor: 'orange',

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: '.75rem',

 
  width: '100%',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionTopWrapper = styled('div')({

  // backgroundColor: 'yellow',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '30px',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionDetailWrapper = styled('div')({
  // backgroundColor: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '40px',
  margin: 0, padding: 0,


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


// const AccordionIconWrapper= styled('div')({
//     backgroundColor: 'grey',
//     display: 'flex',
//     position: 'relative',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontSize: '.7rem',
//     width: '16px',

//     margin:0, padding: 0,


//   //   [theme.breakpoints.down('sm')] : {
//   //     // width: '100%'
//   //   },

//     })

const MoreIcon = styled(ExpandMoreIcon)({

  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'absolute',
  top: '6px',
  right: '6px',

  borderRadius: '50px',
  fontSize: '.7rem',
  width: '16px',
  height: '16px',

  '&:hover': {
    backgroundColor: lightGrey
  }


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const LessIcon = styled(ExpandLessIcon)({

  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'absolute',
  bottom: '6px',
  right: '6px',
  borderRadius: '50px',
  fontSize: '.7rem',
  width: '16px',
  height: '16px',


  '&:hover': {
    backgroundColor: lightGrey
  }

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


// ==============================================================

export default function TwoPartyLedgerRow(props) {
  let dispatch = useDispatch()
  // let passedId = props.id
  let passedId = props.id
  let status = useSelector(selectStatus)
  let accordionId = status.accordionDisplay.id

  let displayDetail 
  if(passedId === accordionId){displayDetail = true}
  // const [showId, setShowId] = useState(false)
  useEffect(()=>{

    console.log('[ TwoPartyLedgerRow @@@@@@@@@@@ ] accordionId ', accordionId);
    



  },[accordionId, passedId])

  const openDetailPanel = (passedId)=>{
    dispatch(updateAccordionDisplay({id: passedId}))

  }

  const closeDetailPanel = (passedId)=>{
    dispatch(updateAccordionDisplay({id: ''}))

  }



// passedId === showId ? displayDetail = true : displayDetail = false
  return (
    
    <Wrapper key = {passedId}>
      <HeaderWrapper>


        <div>David Anderson</div>
        <div>July 4, 1968</div>

      </HeaderWrapper>
      <AccordionWrapper>
      {!displayDetail && 
        <MoreIcon 
        onClick = {()=> openDetailPanel(passedId)}
        /> 
        
      }

        {displayDetail && 
        <LessIcon 
        onClick = {()=> closeDetailPanel(passedId)}
        />
}
        <AccordionTopWrapper >
          {passedId} in top - (chit owed to David)
        </AccordionTopWrapper>

        {displayDetail && 
        <AccordionDetailWrapper>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetailWrapper>
        }
      </AccordionWrapper>




    </Wrapper>
  );
}

