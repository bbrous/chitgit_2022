/* function KarmicView (props) -------------------
 
   
  parent: ./TwoPartyMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {chitAquaBlue, chitBurgandy, veryLightGrey} from '../../../../../styles/colors'


import DonutGraph from './DonutGraph'
import KarmicLegend from './KarmicLegend'

import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice';

import { sortChitsByDate, twoPartyChitFilter } from '../../../../../app/helpers/chitHelpers';


// ---MUI ------
import { Paper } from '@mui/material';
 
import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled c
 
 
const Wrapper = styled(Paper)({

 

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 'calc(100% - 16px)',
  height: '30rem',


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const TopWrapper = styled('div')({



  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',

 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const HeaderWrapper = styled('div')({



  fontSize: '1.3rem',
  // color: chitBurgandy

 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const BottomWrapper = styled('div')({



  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '75%',




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const LeftBottomWrapper = styled('div')({



  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',
 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const RightBottomWrapper = styled('div')({



  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '40%',
  height: '100%',

  backgroundColor: 'yellow'

 


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})




const GraphWrapper = styled('div')({

 

  display: 'flex',


  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '75%',
  marginTop: '5vh'




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const CenterValueRed = styled('div')({

  position: 'absolute',
  // left: '50%',
  top: '40%',
  display: 'block',
  color: 'red',


  fontSize: '2rem',

  textAlign: 'justify',
  '& .emphasize': {
    decoration: 'underline',
    fontWeight: 'bold'
  },



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const CenterValueGreen = styled('div')({

  position: 'absolute',
  // left: '50%',
  top: '40%',
  display: 'block',
  color: '#00C49F',


  fontSize: '2rem',

  textAlign: 'justify',
  '& .emphasize': {
    decoration: 'underline',
    fontWeight: 'bold'
  },



  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const NoteWrapper = styled('div')({



  display: 'block',
  color: '#2B6D6D',
  textAlign: 'center',
  width: '25%',
  fontSize: '.75rem',
  margin: '.5rem .5rem 0 0',
  border: '1px solid grey',
  borderRadius: '5px',
  padding: '3px',
  '& span' :{
    decoration: 'underline',
    fontWeight: 'bold'
  },

  '& div' :{
    fontSize: '.65rem',
    textAlign: 'center',
    
  }




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

      // ========================================
export default function KarmicView_s(props) {

  let allChits = useSelector(selectAllTwoPartyChits)
  let liabilities = 0
  let assets = 0
  let chitsOwed = 0
  let owedChits = 0
  let karmicSum = 0

  let a = allChits.map((chit) =>{
    // liability

    if(chit.chitType === 'awChit') {
   // assets
    
    assets = assets + chit.chitValue
    owedChits = owedChits + 1

    }

    if(chit.chitType !== 'awChit') {
      if(chit.deedPerformedBy === chit.otherPartyId){
        liabilities = liabilities + chit.chitValue
        chitsOwed = chitsOwed + 1
      }
  
      // assets
      if(chit.deedPerformedBy !== chit.otherPartyId){
        assets = assets + chit.chitValue
        owedChits = owedChits + 1
      }
      
    }


    return {liabilities: liabilities, assets: assets, chitsOwed: chitsOwed, owedChits: owedChits}
  }
  
  )
  karmicSum =  assets -liabilities  
 
  return (
    <Wrapper>
      <TopWrapper>
      <NoteWrapper>
            Your <span>
              karmic balance </span> is the
            total of weights you assigned to all of your
            two party chits.
            <div> (chits you owe - chits owed to you) </div>
          </NoteWrapper>
       
      </TopWrapper>

      <BottomWrapper>
    
          <HeaderWrapper> Karmic Balance</HeaderWrapper>
          <GraphWrapper>

            < DonutGraph 
              assets = {assets}
              liabilities = {liabilities}
              
            />

            {karmicSum < 0 && 
            <CenterValueRed>{karmicSum}</CenterValueRed>
}
{karmicSum >= 0 && 
            <CenterValueGreen>{karmicSum}</CenterValueGreen>
}


          </GraphWrapper>


          <KarmicLegend 
            chitsOwed = {chitsOwed}
            owedChits = {owedChits}
            assets = {assets}
            liabilities = {liabilities}
          />
 
      </BottomWrapper>





    </Wrapper>
  );
}

 