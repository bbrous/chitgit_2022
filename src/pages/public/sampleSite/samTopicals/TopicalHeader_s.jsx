/*---- File - TopicalHeader.jsx
     Displays details about Topical retrieved from Redux store
     
    Contains children: 
        CountdownDisplay_s'

      parent: TopicalMain -./TopicalsMain
*/

import React  from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'

import Edit_icon from '../samComponents/Edit_icon_s'
import Delete_icon from '../samComponents/Delete_icon_s'

//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import { selectTopics } from '../../../../app/redux/topicRedux/sam_topicSlice';

import { openModal, openTopicalForm, openTopicalSectionForm } from '../../../../app/redux/statusRedux/sam_statusSlice'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component




// ================================================
function TopicalHeader(props) {
 
  const match = useParams()

  const matchId = match.id
  const dispatch = useDispatch()


  // --- get the topic name 
  const allTopics = useSelector(selectTopics)
  let topicObject = allTopics.find(element => element.id === matchId)
  let topic 
  matchId === 'junkyard' ? topic =  'Junkyard' : topic = topicObject.topic

  
  const openNewSectionForm = ()=>{
 
   
     console.log('[ LOG HEADER] open new Sectionform ');
      dispatch(openTopicalSectionForm('new'))
      
    }

    const openNewNoteForm = ()=>{
 
   
      console.log('[ LOG HEADER] open new NOTE form ');
      dispatch(openModal(
        {
          modalParams: {
            modalType: 'form',
            dbCollection: 'notes', // dbCollection passed to modal
            id: '',
            noteHolderCollection: 'topics', // dbCollection FROM icon clicked
            noteHolderId: matchId
  
          }
        }
  
      ))
       
     }

     const handleClick = ()=>{
 
   
      //  console.log('[ LOG HEADER] open new form ');
        dispatch(openTopicalForm('new'))
        
      }
    

return (
<Wrapper>
    <TitleWrapper>
      <TitleLabel> Topic : </TitleLabel>
      <Title>
        {topic}
      </Title>
    </TitleWrapper>
    <BottomWrapper>
      <ButtonWrapper>

        <FormButton 
          startIcon={<AddIcon />}
          onClick={()=>openNewSectionForm()}
          > add Section
        </FormButton>

        <FormButton 
          startIcon={<AddIcon />}
          onClick={()=>openNewNoteForm()}
          > add Note
        </FormButton>
      </ButtonWrapper>

      <IconWrapper> 
        <Delete_icon/>
        <Edit_icon/>


      </IconWrapper>

    </BottomWrapper>

</Wrapper>




  )}// end func TopicalDetail

 
export default TopicalHeader


// -----------------------------------------------------------------

const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
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
  padding: '0 .5rem',
  marginBottom: '.5rem',

  fontSize: '1rem',
  
  '&.backgroundCompleted' : {
     
    color: 'white', 
     
  
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleLabel= styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  margin: '0 8px ',
  

  flexWrap: 'wrap',

  fontSize: '.9rem',
  color: darkGrey,
  fontStyle: 'italic',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Title = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
   

  
  color: 'red',
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
  width: '100%',
 
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ButtonWrapper = styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
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
  
[theme.breakpoints.down('sm')] : {
  fontSize: '.75rem',
  padding: '0 .75rem',
  width: '8.5rem',
  height: '1.2rem',
  margin: '0 .35rem',
},



  '&:hover' : {
    // backgroundColor: chitBlueDull,
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#3B30CC'

  }


})

const IconWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  marginRight: '6px',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})