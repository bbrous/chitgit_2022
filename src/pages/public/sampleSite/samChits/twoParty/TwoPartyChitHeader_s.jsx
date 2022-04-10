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

import{chitBurgandy} from '../../../../../styles/colors'

import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice'

import { selectPeople } from '../../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../../app/redux/groupRedux/sam_groupSlice';

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
   
  justifyContent: 'flex-start',
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

const BottomWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100%-12px)',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ButtonWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  

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



return (
<Wrapper>
    <TitleWrapper>
  
      <Title>
        {title}
      </Title>
    </TitleWrapper>
    <BottomWrapper>
      <ButtonWrapper>

        <FormButton startIcon={<AddIcon />}> add Chit</FormButton>
    
      </ButtonWrapper>
    



    </BottomWrapper>

</Wrapper>




  )}// end func TopicalDetail

 
export default TwoPartyChitHeader