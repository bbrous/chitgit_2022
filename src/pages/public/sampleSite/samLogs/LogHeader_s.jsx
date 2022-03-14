/*---- File - LogHeader.jsx
     Displays details about Log retrieved from Redux store
     
    Contains children: 
        CountdownDisplay_s'

      parent: LogMain -./LogsMain
*/

import React  from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'

import EditIcon from '../samComponents/Edit_icon_s'
import DeleteIcon from '../samComponents/Delete_icon_s'

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
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  margin: '1rem  0 .5rem 0',
  paddingBottom: '.5rem',


  width: '95%',
 


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



// ================================================
function LogHeader(props) {
 
  const match = useParams()

  const matchId = match.id

return (
<Wrapper>
    <TitleWrapper>
      
      <Title>
        Cybill
      </Title>
    </TitleWrapper>
    <BottomWrapper>
      <ButtonWrapper>

        <FormButton startIcon={<AddIcon />}> add Section</FormButton>
  
      </ButtonWrapper>

      <IconWrapper> 
        <DeleteIcon/>
        <EditIcon/>


      </IconWrapper>

    </BottomWrapper>

</Wrapper>




  )}// end func LogDetail

 
export default LogHeader