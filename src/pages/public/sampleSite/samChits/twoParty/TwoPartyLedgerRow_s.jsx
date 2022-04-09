/* function TwoPartyLedgerRow (props) -------------------
 
 
  parent: ./TwoPartyLedger
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import cuid from 'cuid';
import { veryLightGrey, lightGrey, chitBlueDull, mediumGrey } from '../../../../../styles/colors'
import { updateAccordionDisplay, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import { selectPeople } from '../../../../../app/redux/peopleRedux/sam_peopleSlice';

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice';

import { chooseTwoPartyChitCoin } from '../../../../../app/helpers/chitHelpers';
import { choosePersonalCoin } from '../../../../../app/helpers/chitHelpers';
import { ISOtoUTC, UTCtoISO, UTCtoDateTradional , ISOtoTraditional} from '../../../../../app/helpers/dateHelper';

import EditIcon from '../../samComponents/Edit_icon_s'
import DeleteIcon from '../../samComponents/Delete_icon_s'
import Shared from '../../samComponents/Share_icon_s';
import TimeLock from '../../samComponents/TimeLock_icon_s';

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
  width: '98%',
  padding: '3px 6px',
  margin: '3px 0',
  borderRadius: '5px',
  border: '1px solid #A49AED',

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
  width: '40%',
 
 


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
  margin: '0 8px'
          
})

const IOU = styled(ForwardIcon)({
  transform: 'rotate(0deg)',
  fontSize: '1rem',
  color: 'red',
  margin: '0 8px'
          
})

const DateContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '20%',
color: 'blue'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

// ==- Accordion ------------------------

const AccordionWrapper = styled('div')({
 

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

  // backgroundColor: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.5rem',
  height: '3.5rem'
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitTypeWrapper = styled('div')({

  // backgroundColor: 'red',
  fontSize: '.65rem',
  color: mediumGrey
  


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

  // backgroundColor: 'pink',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 'calc(90% - 1rem)',
  padding: '0 0 0 1rem',
   borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const TopRightContainer = styled('div')({

  // backgroundColor: 'orange',
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontStyle: 'italic',
  fontSize: '.8rem',
  // fontWeight: 'bold',
  marginBottom: '4px'




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },


  
})
const BottomRightContainer = styled('div')({

  // backgroundColor: 'green',
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

const IconWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  marginRight: '6px',

  width: '40%',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==============================================================

export default function TwoPartyLedgerRow(props) {

  const {id, chitType, chitValue, chitColor, dateCreated, chitDate, timeLock, otherPartyCollection, otherPartyId, deedPerformedBy, workRelated, description, duplicate, sharedId, sharedTitle, message} = props.data

  let dispatch = useDispatch()
  
  let passedId = id
  
  let status = useSelector(selectStatus)
  let allGroups = useSelector(selectGroups)
  let allPeople = useSelector(selectPeople)


  // --- set up accordion display ----
  let accordionId = status.accordionDisplay.id
 
  let displayDetail 
  if(passedId === accordionId){displayDetail = true}

  const openDetailPanel = (passedId)=>{
    dispatch(updateAccordionDisplay({id: passedId}))

  }

  const closeDetailPanel = (passedId)=>{
    dispatch(updateAccordionDisplay({id: ''}))

  }

  //  --- define which coin is displayed

  let coinAddress = chooseTwoPartyChitCoin(chitType, chitColor)
 
  const pathToCoinImages = '../../../'
  const coinDisplayed = pathToCoinImages + coinAddress

  let chitDescription
  chitType ==='kindness'? chitDescription = 'good will': chitDescription = chitType

  //--- get Name to be displayed  ---
  let nameDisplayed, personObject, groupObject

  if(otherPartyCollection === 'people'){
    personObject = allPeople.find(person => person.id === otherPartyId)

    nameDisplayed = personObject.name
  }


 
  if(otherPartyCollection === 'groups'){
  groupObject = allGroups.find(group => group.id === otherPartyId)
 
  nameDisplayed = groupObject.name
}


  // --- set up IOU arrow color and message ---
  let  youOwe 
  
  otherPartyId === deedPerformedBy? youOwe = true: youOwe = false

  console.log('[ TWO party ledger ] otherPartyId ', otherPartyId);
  console.log('[ TWO party ledger ] deedPerformedBy ', deedPerformedBy);
  console.log('[ TWO party ledger ] you owe ------------------ ', youOwe);
  // convert Dates for display

  let styledChitDate = ISOtoTraditional(chitDate)

  return (
    
    <Wrapper key = {passedId}>
      <HeaderWrapper>

        <NameContainer>
          <NameWrapper>
            {nameDisplayed}
          </NameWrapper>
          {!youOwe && 
          <>
          <IOU/>
          <div> owes chit to you</div>
          </>}
          {youOwe && 
          <>
          <YouOweMe/>
          <div> You owe chit</div>
          </>}      

        </NameContainer>
        <DateContainer>{styledChitDate}</DateContainer>
        <IconWrapper> 
        <Shared/>
        <TimeLock/>
        <DeleteIcon/>
        <EditIcon/>



      </IconWrapper>
       

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
          <ChitTypeWrapper> {chitDescription} </ChitTypeWrapper>
            
          </ChitContainer>
    
          <RightContainer>

            <TopRightContainer>
              <div> Description:</div>

            </TopRightContainer>
            <BottomRightContainer>
{description}       

            </BottomRightContainer>
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

