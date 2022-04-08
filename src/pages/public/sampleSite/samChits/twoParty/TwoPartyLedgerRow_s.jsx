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

import { chooseTwoPartyChitCoin } from '../../../../../app/helpers/chitHelpers';
import { choosePersonalCoin } from '../../../../../app/helpers/chitHelpers';
import { ISOtoUTC, UTCtoISO, UTCtoDateTradional } from '../../../../../app/helpers/dateHelper';

// ---MUI ------
import { Paper } from '@mui/material';

import ForwardIcon from '@mui/icons-material/Forward';
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

// ---- Top header-------------------

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

const NameContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.7rem',
 
  width: '50%',
 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})



const NameWrapper = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.7rem',



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const YouOweMe = styled(ForwardIcon)({
  transform: 'rotate(180deg)',
  fontSize: '1rem',
  color: 'green',
          
})

const IOU = styled(ForwardIcon)({
  transform: 'rotate(0deg)',
  fontSize: '1rem',
  color: 'red',
          
})

const DateContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',

color: 'blue'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

// ==- Accordion ------------------------

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
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '30px',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitContainer = styled('div')({

  backgroundColor: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const StyledImage = styled('img')({

 
  display: 'flex',
 
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '2.5rem',
  height: '2.5rem',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightContainer = styled('div')({

  backgroundColor: 'pink',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 width: '100%',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightTopContainer = styled('div')({

  backgroundColor: 'orange',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },


  
})
const RightBottomContainer = styled('div')({

  backgroundColor: 'green',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
   
 




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

const DetailWrapper = styled('div')({
  backgroundColor: 'pink',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '55%',



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})
const SharedDetailWrapper = styled('div')({
  backgroundColor: 'orange',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '40%',



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
  let description = props.description
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


  let coinAddress = choosePersonalCoin('silver')
 

  const pathToCoinImages = '../../../'
  const coinDisplayed = pathToCoinImages + coinAddress



// passedId === showId ? displayDetail = true : displayDetail = false
  return (
    
    <Wrapper key = {passedId}>
      <HeaderWrapper>

        <NameContainer>
          <NameWrapper>
            David Anderson
          </NameWrapper>
          <IOU/>
          <div> owes chit to you</div>

        </NameContainer>
        <DateContainer>July 4, 1968</DateContainer>

      </HeaderWrapper>


      <AccordionWrapper>

        {!displayDetail &&
          <MoreIcon
            onClick={() => openDetailPanel(passedId)}
          />

        }

        {displayDetail &&
          <LessIcon
            onClick={() => closeDetailPanel(passedId)}
          />
        }


        <AccordionTopWrapper >

          <ChitContainer>
          <StyledImage src={coinDisplayed} alt="coin" />
            
          </ChitContainer>
    
          <RightContainer>

            <RightTopContainer>
              <div> Description:</div>
              <div> icons icons </div>
            </RightTopContainer>
            <RightBottomContainer>
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>     
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>    
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>
<div> {passedId} in top - (chit owed to David) </div>            

            </RightBottomContainer>
          </RightContainer>   



        </AccordionTopWrapper>

        {displayDetail && 
        <AccordionDetailWrapper>
          <DetailWrapper>
            <div>detail 1</div>
            <div>detail 1</div>
            <div>detail 1</div>
            <div>detail 1</div>
          </DetailWrapper>

          <SharedDetailWrapper>
            shared detail 
          </SharedDetailWrapper>
        </AccordionDetailWrapper>
        }
      </AccordionWrapper>




    </Wrapper>
  );
}

