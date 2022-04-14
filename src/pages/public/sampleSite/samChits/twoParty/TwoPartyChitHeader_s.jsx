/*---- File - TwoPartyChitHeader.jsx
     Displays header name for 2 party chits
     Displays add new button
     
    to get name to be displayed:
       1. get id from URL
       2. create title to be displayed (switch)
          allChits - all chits
          workChits= work chits
          good will chits,
          - for id's in URL
            3. find any chit matching the URL id
            4. find the collection in that chit (people or groups)
            5. get name by searching the collection matching the URL id


      parent: TwoPartyMain -./TwoPartysMain
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitBurgandy, mediumGrey} from '../../../../../styles/colors'

import { twoPartyChitFilter } from '../../../../../app/helpers/chitHelpers';
import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice'

import { selectPeople } from '../../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice';

import TwoPartyChitViewNav from '../../../../navComponents/publicNav/sampleNav/TwoPartyChit_View_nav_s'

//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '1rem  .5rem .5rem .5rem',
  paddingBottom: '.5rem',
 
   
  width: '90%',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'space-between',
  alignItems: 'center',
   
  
 
 
  width: '98%',
  padding: '0 1rem',
  // marginBottom: '.5rem',

  fontSize: '1rem',
  
  '&.backgroundCompleted' : {
     
    color: 'white', 
     
  
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const Title = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
   

  
  color: chitBurgandy,
  flexWrap: 'wrap',

  fontSize: '1.2rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const KarmaWrapperRed = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: 'red',
  fontSize: '.78rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const KarmaWrapperGreen = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: 'green',
  fontSize: '.78rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const KarmaTitle = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  marginRight: '6px',
  fontSize: '.78rem',
  fontStyle: 'italic',
  color: mediumGrey,

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const KarmaValue = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
  fontWeight: 'bold',
 

  fontSize: '.78rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




const BottomWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% - 12px)',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ButtonWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '33%',
[theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const FormButton = styled(Button)({

 

  display: 'flex',
  textTransform: 'none',
  
 
  color: 'white',
  backgroundColor:  '#727376',
  fontWeight: 'normal',
  fontSize: '.85rem',
  padding: '0 1.5rem',
  width: '9.5rem',
  height: '1.2rem',
margin: '0 1rem',
  
  '&:hover' : {
    // backgroundColor: chitBlueDull,
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#3B30CC'

  }


})

const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
// backgroundColor: 'green',

  position: 'relative',
  top: 0,
 
 
width: '33%',
  height: '2rem',
  // color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const BottomSpacerWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  marginRight: '6px',
  width: '33%',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// ================================================
function TwoPartyChitHeader(props) {
 
  const match = useParams()

  const matchId = match.id
  let allChitsArray = useSelector(selectAllTwoPartyChits) //immutable
  let allGroups = useSelector(selectGroups)
  let allPeople = useSelector(selectPeople)

  let title

  switch(matchId){
    case 'allChits':
    
      title ='All Chits';

      break;

    case 'workChits':
   
      title ='All Work Related Chits';
      break;

      case 'goodWillChits':
     
        title ='All Good Will Chits';
        break;

    default: 
    let headerObject = allChitsArray.find(element => element.otherPartyId === matchId)

    let collection = headerObject.otherPartyCollection
    
    if(collection === 'groups' ){
      let groupObject = allGroups.find(group => group.id === matchId)
  
      title = groupObject.name
      console.log('[ Two Party Chit Header ] we got a group ', title);
    }
    if(collection === 'people' ){
      let personObject = allPeople.find(person => person.id === matchId)

    title = personObject.name
  
      console.log('[ Two Party Chit Header ] we got People ', title);
    }
   
  }

  let karmicBalance = 0

  let filteredChits = twoPartyChitFilter(allChitsArray, match.id)
console.log('[ two party HEADER ] filteredChits ', filteredChits);

 
 let assets, liabilities 
  
filteredChits.map((chit, index) => {

  if(chit.chitType === 'awChit') {
    // assets
     
    karmicBalance = karmicBalance + chit.chitValue
 

    console.log('[ two party HEADER ] map owes me' ,  chit.chitValue);
    console.log('[ two party HEADER ] I owe',  karmicBalance);
     }
 
     if(chit.chitType !== 'awChit'  ) {
       if(chit.deedPerformedBy === chit.otherPartyId){
        karmicBalance = karmicBalance - chit.chitValue

        console.log('[ two party HEADER ] I owe',  chit.chitValue);
        console.log('[ two party HEADER ] I owe',  karmicBalance);
       }
   
       // assets
       if(chit.deedPerformedBy !== chit.otherPartyId){
        karmicBalance = karmicBalance + chit.chitValue

        console.log('[ two party HEADER ] map owes me',  chit.chitValue );
        console.log('[ two party HEADER ] I owe',  karmicBalance);
       }
       
     }

 
  return   karmicBalance
  }
  ) //end map

  console.log('[ two party HEADER ] karmicBalance @@@@@ ', karmicBalance);

return (
<Wrapper>
    <TitleWrapper>
  
      <Title>
        {title}
      </Title>
      {karmicBalance >= 0 && 
      <KarmaWrapperGreen>
        <KarmaTitle>
          Karmic Balance: 
        </KarmaTitle>

    
         <KarmaValue>
         {karmicBalance}
       </KarmaValue>
       </KarmaWrapperGreen>
        }

{karmicBalance < 0 && 
      <KarmaWrapperRed>
        <KarmaTitle>
          Karmic Balance: 
        </KarmaTitle>

    
         <KarmaValue>
         {karmicBalance}
       </KarmaValue>
       </KarmaWrapperRed>
        }
 
       
      
    </TitleWrapper>
    <BottomWrapper>
      <ButtonWrapper>

        <FormButton startIcon={<AddIcon />}> add Chit</FormButton>
    
      </ButtonWrapper>

      <ViewNavWrapper>
      
       <TwoPartyChitViewNav/>
      </ViewNavWrapper>
    

<BottomSpacerWrapper/>

    </BottomWrapper>

</Wrapper>




  )}// end func TwoPartyChitHeader

 
export default TwoPartyChitHeader