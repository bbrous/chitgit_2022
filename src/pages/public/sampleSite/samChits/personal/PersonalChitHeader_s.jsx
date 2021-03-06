/*---- File - TopicalHeader.jsx
     Displays details about Topical retrieved from Redux store
     
    Contains children: 
        CountdownDisplay_s'

      parent: TopicalMain -./TopicalsMain
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey, chitBurgandy} from '../../../../../styles/colors'
import PersonalChitViewNav from '../../../../navComponents/publicNav/sampleNav/PersonalChit_View_nav_s';
import EditIcon from '../../samComponents/Edit_icon_s'
import DeleteIcon from '../../samComponents/Delete_icon_s'

import { selectCategories } from '../../../../../app/redux/categoryRedux/sam_categorySlice'
//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component


// ================================================
function PersonalChitHeader(props) {
 
  const match = useParams()
  const matchId = match.id
  console.log('[ Personal Header ] matchId ', matchId);

  const allCategories = useSelector(selectCategories)

  let displayName

  if(matchId === 'milestones'){displayName = 'Milestones'}
  else if(matchId === 'workChits'){displayName = 'WorkChits'}
  else {
    let categoryObject = allCategories.find((category) => category.id  === matchId)
    displayName = categoryObject.category

  }

return (
<Wrapper>
    <TitleWrapper>
      <TitleLabel> Category : </TitleLabel>
      <Title>
        {displayName}
      </Title>
    </TitleWrapper>
    <BottomWrapper>
      <ButtonWrapper>

        <FormButton startIcon={<AddIcon />}> add Chit</FormButton>
    
      </ButtonWrapper>
      <ViewNavWrapper>
      <PersonalChitViewNav/>
      </ViewNavWrapper>

      <IconWrapper> 
        <DeleteIcon/>
        <EditIcon/>


      </IconWrapper>

    </BottomWrapper>

</Wrapper>




  )}// end func TopicalDetail

 
export default PersonalChitHeader



// -----------------------------------------------------------------

const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  margin: '1rem  0 .5rem 0',
  paddingBottom: '.5rem',

   
  width: '90%',
 


  [theme.breakpoints.down('md')]: {
    margin: '1rem  0 .5rem 0',
width: '100%',  },
})

const TitleWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  
 
 
  width: '98%',
  padding: '0 .5rem',
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
  

  [theme.breakpoints.down('md')] : {
    backgroundColor: 'yellow'
   
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

[theme.breakpoints.down('md')] : {
  fontSize: '.75rem',
  padding: '0 .5rem',
  width: '7.5rem',
  margin: '0 0',
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

const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
// backgroundColor: 'green',

  position: 'relative',
  top: 0,
 
 

  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})