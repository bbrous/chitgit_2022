/* function Log(props) -------------------
       parent: ./LogMain

  Holds Logs, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, mediumLightGrey, veryLightGrey, chitBlueDull} from '../../../../styles/colors'

import{ selectLogs
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/logRedux/X_sam_selectors_Logs'

import ChitIcon from '../samComponents/Chit_icon_s'
 
//  ---- Material Ui ------------------
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import LockClockIcon from '@mui/icons-material/LockClock';
import DeleteIcon from '@mui/icons-material/Delete';
 
import { styled, createTheme  } from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',
  marginBottom: '6px',
  paddingBottom: '6px',
overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TopWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  marginTop: '6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const DateWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '50%',
  padding: '2px 6px',

  fontSize: '.8rem',
  height: '.8rem',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const IconWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '50%',
  padding: '2px 6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ----------------------------------
const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  padding: '2px 6px',

  fontSize: '.6rem',
  height: '.8rem',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})
const CategoryWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'aqua',
  width: '25%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const KeyWordWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'orange',
  width: '25%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ----------------------------------
const ContentWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'pink',
  width: '99%',
  padding: '6px',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const HeaderWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitBlueDull,
  width: '99%',
  padding: '6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const Content= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '99%',
  padding: '6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// -------------
const StyledEditIcon= styled(EditIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.9rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledLockClockIcon= styled(LockClockIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '1.1rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledDeleteIcon= styled(DeleteIcon)({
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '.95rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);
//  =====================================================================

export default function LogSection() {
  return (
    <MainWrapper>
      <TopWrapper>
        <DateWrapper>Date</DateWrapper>
        <IconWrapper>

          <LightTooltip title='Edit' arrow>
            <StyledEditIcon />
          </LightTooltip>

          <ChitIcon />
          <LightTooltip title='ChitGit timestamp' arrow>
            <StyledLockClockIcon />
          </LightTooltip>

          <LightTooltip title='Delete' arrow>
            <StyledDeleteIcon />
          </LightTooltip>
        </IconWrapper>
      </TopWrapper>
      <SearchWrapper>
        <CategoryWrapper>category: aaaa</CategoryWrapper>
        <KeyWordWrapper>keywords:  bb cc dd</KeyWordWrapper>

      </SearchWrapper>
      <CategoryWrapper></CategoryWrapper>
      <ContentWrapper>
        <HeaderWrapper> a Header here </HeaderWrapper>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </Content>


      </ContentWrapper>

    </MainWrapper>
  )
}
