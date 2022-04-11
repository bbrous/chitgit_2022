/* function KarmicView (props) -------------------
 
   
  parent: ./TwoPartyMain
------------------------------------*/

import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import {chitAquaBlue, veryLightGrey} from '../../../../../styles/colors'

import DonutGraph from './DonutGraph'
import KarmicLegend from './KarmicLegend'

import { selectAllTwoPartyChits } from '../../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice';

import { sortChitsByDate, twoPartyChitFilter } from '../../../../../app/helpers/chitHelpers';


// ---MUI ------
import { Paper } from '@mui/material';
 
import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled c
 
 
const Wrapper= styled(Paper)({

  // backgroundColor: 'green' ,
  
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'calc(100% - 16px)' ,
    height: '30rem',
  
  
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },
  
  })

  const TopWrapper= styled('div')({

    
    
      display: 'flex',
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%' ,
 
      // backgroundColor: 'yellow'
    
    
    //   [theme.breakpoints.down('sm')] : {
    //     // width: '100%'
    //   },
    
    })

    const BottomWrapper= styled('div')({

     
      
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%' ,
        height: '75%',
   
        backgroundColor: 'green' ,
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })

      const LeftBottomWrapper= styled('div')({

     
      
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%' ,
        height: '100%',
   
        backgroundColor: 'yellow' ,
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })
    
      const RightBottomWrapper= styled('div')({

     
      
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%' ,
        height: '100%',
   
        backgroundColor: 'pink' ,
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })

      // ========================================
export default function KarmicView_s(props) {
  return (
    <Wrapper>
      <TopWrapper>
        
      <KarmicLegend/>
      </TopWrapper>

   <BottomWrapper>
     
     <LeftBottomWrapper>
     <div>Karmic Balance</div>
     <DonutGraph/> 
     <div>Description</div>
     </LeftBottomWrapper>

     <RightBottomWrapper>
     <div># of Chits</div>
     <DonutGraph/> 
     <div>Description</div>
     </RightBottomWrapper>
   
   </BottomWrapper>
     




    </Wrapper>
  );
}

 