/* function Log(props) -------------------

    maps the log sections for a specified log


  Children: ./LogSection
 
    parent: ./LogMain
------------------------------------*/


import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'

import{ selectLogs} from '../../../../app/redux/logRedux/X_sam_selectors_Logs'


import { sortLogsByDate, logFilter } from '../../../../app/helpers/chronicleHelpers';

import LogSection from './LogSection_s'
 
//  ---- Material Ui ------------------
 
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
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

export default function Log() {
  let match = useParams()
  let id = match.id // get URL view location

  const allLogsArray = useSelector(selectLogs)
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


   
  return (
    <Wrapper>

     {logRows()}
    </Wrapper>
  )
}
