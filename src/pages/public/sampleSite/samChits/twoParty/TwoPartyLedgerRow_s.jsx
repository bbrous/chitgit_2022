/* function TwoPartyLedgerRow (props) -------------------
 
 
  parent: ./TwoPartyLedger
------------------------------------*/

import React   from 'react'
import { useSelector, useDispatch } from 'react-redux'
 
import { veryLightGrey, lightGrey, chitBlueDull, mediumGrey, chitBurgandy } from '../../../../../styles/colors'

import { updateAccordionDisplay, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice';

import { selectPeople } from '../../../../../app/redux/peopleRedux/sam_peopleSlice';

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice';

import { chooseTwoPartyChitCoin } from '../../../../../app/helpers/chitHelpers';

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


// ==============================================================

export default function TwoPartyLedgerRow(props) {

  const {id, chitType, chitValue, chitBurden, chitColor, dateCreated, chitDate, timeLock, otherPartyCollection, otherPartyId, deedPerformedBy, workRelated, description, duplicate, sharedId, sharedTitle, message, keyWordArray} = props.data

  // console.log('[ TwpPARTYLEDGER ROW ] keyWordArray ', keyWordArray);

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


  // convert Dates for display

  let styledChitDate = ISOtoTraditional(chitDate)
  let styledDateCreated = ISOtoTraditional(dateCreated)
  let styledTimeLock
  timeLock ? styledTimeLock = ISOtoTraditional(timeLock): styledTimeLock = 'no'


  // format workRelated
  let styledWorkRelated
  workRelated ? styledWorkRelated = 'yes': styledWorkRelated = 'no'

  // format deepd performed by
  let styledDeedDoneBy
  deedPerformedBy === otherPartyId ? styledDeedDoneBy = nameDisplayed: styledDeedDoneBy = 'you'

  // format keywords
  let styledKeywords = ''

  if (keyWordArray.length > 0) {
    //    keyWordArray.map((keyword) => {
    //   styledKeywords = styledKeywords  + keyword + ' , '

    //   return styledKeywords
    // }
    // ) //end map

  for(let i = 0; i < keyWordArray.length; i++){
    if(i === keyWordArray.length - 1){
      styledKeywords += keyWordArray[i]  
    }else{
    styledKeywords += keyWordArray[i] + ' , '
    }
  }
 

  }//end if keyword.length > 0

  if (keyWordArray.length === 0) {
styledKeywords = 'none'
  }

 
//  get total chit value

let totalChitValue = chitBurden + chitValue
 
 
 

  return (
    
    <Wrapper key = {passedId}>
      <HeaderWrapper>


        <DateContainer>{styledChitDate}</DateContainer>

        <NameContainer>
          <NameWrapper>
            {nameDisplayed}
          </NameWrapper>
          {!youOwe && 
          <>
          <IOU/>
          <div> Owes this chit to you</div>
          </>}
          {youOwe && 
          <>
          <YouOweMe/>
          <div> You owe this chit</div>
          </>}      

        </NameContainer>


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
         <AccordionBottomWrapper>
        <AccordionDetailWrapper>
          <LeftDetailWrapper></LeftDetailWrapper>
          <MiddleDetailWrapper>
            <DetailWrapper>
              <DetailTitle>Deed performed by:</DetailTitle>
              <Detail>{styledDeedDoneBy}</Detail>
              </DetailWrapper>

              <DetailWrapper>
              <DetailTitle>Chit created  by:</DetailTitle>
              <Detail> you </Detail>
              </DetailWrapper>

              <DetailWrapper>
              <DetailTitle>Date chit created:</DetailTitle>
              <Detail> {styledDateCreated} </Detail>
              </DetailWrapper>





          </MiddleDetailWrapper>

          <RightDetailWrapper>
          <DetailWrapper>
              <DetailTitle>Work related:</DetailTitle>
              <Detail> {styledWorkRelated} </Detail>
              </DetailWrapper>

              <DetailWrapper>
              <DetailTitle>Chit value</DetailTitle>
              <Detail> {totalChitValue} </Detail>
              </DetailWrapper>

              <DetailWrapper>
              <DetailTitle>Time Lock</DetailTitle>
              <Detail> {styledTimeLock} </Detail>
              </DetailWrapper>



          </RightDetailWrapper>
          
        </AccordionDetailWrapper>
       
            <SearchWrapper>
              <LeftSearchWrapper />
              <KeyWordWrapper>  <em> keywords:  </em>{styledKeywords}</KeyWordWrapper>

            </SearchWrapper>
        </AccordionBottomWrapper>
        }

      </AccordionWrapper>




    </Wrapper>
  );
}

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
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.7rem',
  width: '30%',
 
 


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
  fontSize: '.75rem',
  color: chitBurgandy,



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const YouOweMe = styled(ForwardIcon)({
  transform: 'rotate(180deg)',
  fontSize: '1rem',
  color: 'red',
  margin: '0 8px'
          
})

const IOU = styled(ForwardIcon)({
  transform: 'rotate(0deg)',
  fontSize: '1rem',
  color: 'green',
  margin: '0 8px'
          
})

const DateContainer = styled('div')({


  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '30%',
color: mediumGrey,

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
  marginBottom: '4px',
  color: mediumGrey,



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

const AccordionBottomWrapper = styled('div')({
  
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '96%',
  minHeight: '40px',
  margin: 0, 
  
  borderTop: '1px solid grey'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const AccordionDetailWrapper = styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '100%',
  minHeight: '40px',
  margin: 0, 
  paddingLeft: '1rem',
  // borderTop: '1px solid grey'

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


// --- Accordion Detail CSS ---

const LeftDetailWrapper = styled('div')({

 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.5rem',
 
  

 
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const MiddleDetailWrapper = styled('div')({
 
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',
   
  paddingTop: '8px',
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightDetailWrapper = styled('div')({

  // backgroundColor: 'pink',
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',
   
  paddingTop: '8px',
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const DetailWrapper = styled('div')({
 
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

const DetailTitle = styled('div')({

 
  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  fontStyle: 'italic',
  fontSize: '.75rem',
  color: mediumGrey,
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const Detail = styled('div')({

 
  display: 'flex',

  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '50%',
 
  // padding: '0 0 0 1rem',
  //  borderLeft: '1px solid #E6E7E8'

  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: veryLightGrey,
  width: '100%',
  
  margin: '5px 0 0 0',
backgroundColor: veryLightGrey,
  fontSize: '.6rem',
  height: '.8rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const LeftSearchWrapper = styled('div')({

 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4.5rem',
 
  

 
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const KeyWordWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'grey',
 
  '& em' :{
    marginRight: '1rem'
  },
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

