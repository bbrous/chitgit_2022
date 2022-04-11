/*---- File - KarmicHeader.jsx
     Displays header name for 2 party chits



      parent: TwoPartyMain -./TwoPartysMain
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitBurgandy} from '../../../../../styles/colors'

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
function KarmicHeader(props) {
 
  const match = useParams()

  const matchId = match.id
  let allChitsArray = useSelector(selectAllTwoPartyChits) //immutable
  let allGroups = useSelector(selectGroups)
  let allPeople = useSelector(selectPeople)

  

return (
<Wrapper>
    <TitleWrapper>
  
      <Title>
        Karmic View
      </Title>
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




  )}// end func TopicalDetail

 
export default KarmicHeader