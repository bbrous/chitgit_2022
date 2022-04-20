/* function Log(props) -------------------

    maps the log sections for a specified log


  Children: ./LogSection
 
    parent: ./LogMain
------------------------------------*/


import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue, lightGrey, chitBurgandy} from '../../../../styles/colors'

import{ selectLogs} from '../../../../app/redux/logRedux/X_sam_selectors_Logs'
import { selectStatus, openLogForm } from '../../../../app/redux/statusRedux/sam_statusSlice'


import { sortLogsByDate, logFilter } from '../../../../app/helpers/chronicleHelpers';

import LogSection from './LogSection_s'
 
//  ---- Material Ui ------------------
import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

export default function Log() {
  let match = useParams()
  let id = match.id // get URL view location
  const dispatch = useDispatch()
  const allLogsArray = useSelector(selectLogs)
  const status = useSelector(selectStatus)

  const displayStatus = status.view.log.sectionId

  var logsArray = [...allLogsArray]; // mutable copy of allLogsArray



   //sort and filter all logs

   let sortedLogsByDate = sortLogsByDate(logsArray)
   let filteredLogs = logFilter(sortedLogsByDate, id)


   const logRows = () =>

   filteredLogs.map((row, index) => {

     return (
       <LogSection
         id={row.id}
         key={row.id}
         data={row}

       />
     )
   }
   ) //end map

   const handleClick = ()=>{
 
   
    console.log('[ LOG HEADER] open new form ');
     dispatch(openLogForm('new'))
     
   }
   
  return (
    <Wrapper>
      {filteredLogs.length > 0 && 
      <> 
     {logRows()}
     </>
    }
      {filteredLogs.length === 0 && displayStatus !== 'new' &&
        <LogsMessageWrapper>
          <MessageWrapper>
            You have no logs for this party yet .
            

          </MessageWrapper>
           

            <ButtonWrapper>

              <FormButton
                startIcon={<AddIcon />}
                onClick={() => handleClick()}
              >
                add Section
              </FormButton>

            </ButtonWrapper>

        


        </LogsMessageWrapper>

    }

    </Wrapper>
  )
}

//--- STYLES begin --------------------------

const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const LogsMessageWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '98%',
  height: '8rem',
  marginTop: '2rem',
  backgroundColor: lightGrey,
 
 
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const MessageWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'enter',
  alignItems: 'center',
  color: chitBurgandy,
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
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

