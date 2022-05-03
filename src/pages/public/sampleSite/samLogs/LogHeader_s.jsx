/*---- File - LogHeader.jsx
     Displays details about Log retrieved from Redux store
     
    Contains children: 
        CountdownDisplay_s'

      parent: LogMain -./LogsMain
*/

import React  from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {UTCtoDate, DatetoUTC,  UTCtoDateTradional} from '../../../../app/helpers/dateHelper'
import{lightGrey, darkGrey} from '../../../../styles/colors'


import { Scrollbars } from 'react-custom-scrollbars';

import EditIcon from '../samComponents/Edit_icon_s'
import DeleteIcon from '../samComponents/Delete_icon_s'

//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
 
import { selectLogs } from '../../../../app/redux/logRedux/sam_logsSlice'
import { selectStatus, openLogForm } from '../../../../app/redux/statusRedux/sam_statusSlice'

import { selectPeople } from '../../../../app/redux/peopleRedux/sam_peopleSlice'

import { selectGroups } from '../../../../app/redux/groupRedux/sam_groupSlice';

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component


// ================================================
function LogHeader(props) {
 
  const match = useParams()
  const dispatch = useDispatch()
  const matchId = match.id
  let allLogsArray = useSelector(selectLogs) //immutable
  let allGroups = useSelector(selectGroups)
  let allPeople = useSelector(selectPeople)

  let allPeopleAndGroups = [...allGroups, ...allPeople]

  // console.log('[ LogHeader ] allPeopleAndGroups ', allPeopleAndGroups);


  // --- get the name 
  let name, type, collection, meta
  let nameObject = allPeopleAndGroups.find(element => element.id === matchId)
  
  nameObject.type === 'person'? collection = 'people' : collection = 'groups'
  name = nameObject.name
  meta = nameObject.meta
  const handleClick = ()=>{
 
   
  //  console.log('[ LOG HEADER] open new form ');
    dispatch(openLogForm('new'))
    
  }
 

// ====  Main Return =======================================

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleWrapperLeft>
        <Title>
          {name}
        </Title>


        <ButtonWrapper>

          <FormButton 
          startIcon={<AddIcon/>}
          onClick={()=>handleClick()}
          > 
          add Section
          </FormButton>

        </ButtonWrapper>
        </TitleWrapperLeft>

        <IconWrapper>
          <DeleteIcon />
          <EditIcon />
        </IconWrapper>


        {collection !== 'people' && 
          <DetailWrapper> 
        <Scrollbars style={{ height: 50 }}>
      
            {meta}
            
         </Scrollbars>
        </DetailWrapper>
        
}
      </TitleWrapper>


    </Wrapper>

  )
}// end func LogDetail

 
export default LogHeader


// -----------------------------------------------------------------

const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  margin: '1rem  0 .5rem 0',
  padding: '.25rem',
 

// backgroundColor: 'pink',
  width: '95%',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const TitleWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  width: '100%',
  
 
   

  fontSize: '1rem',

  // backgroundColor: 'orange',
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapperLeft= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: '100%',
  width: '40%',
  padding: ' .5rem',
 
 
  fontSize: '1rem',
  
//  backgroundColor: 'yellow',
  
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})



const DetailWrapper= styled('div')({
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
 

  padding: '4px 8px',
  // width: '18rem',
  width: '35%',
  height: '95%',
  border: '1px solid #E6E7E8',
  fontSize: '.75rem',
  backgroundColor: '#F6F7F8',
  margin: '.25rem',
 
  overflow:'auto',
 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
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
// margin: '0 1rem',
  
  '&:hover' : {
    // backgroundColor: chitBlueDull,
    textDecoration: 'none',
    border: '1px solid #A8BEED' ,
    color: '#3B30CC'

  }


})

const IconWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'center',
  alignItems: 'flex-end',
 
 height: '98%',
 width: '30%',
 marginRight: '5%',

  // backgroundColor: 'pink',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})






