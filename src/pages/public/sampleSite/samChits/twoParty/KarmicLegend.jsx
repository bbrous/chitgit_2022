/* function KarmicView (props) -------------------
 
   
  parent: ./TwoPartyMain
------------------------------------*/

import React from 'react'



// ---MUI ------
import { Paper } from '@mui/material';
 
import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled c
 
 
const LegendWrapper= styled('div')({

  
  
    display: 'flex',
 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '8rem' ,
    height: '3rem',
    fontSize: '.7rem',
    lineHeight: 1.8,
    padding: '3px 8px',
    border: '1px solid grey',
    margin: '3px 6px 3px 0',
    borderRadius: '5px',
  
  
  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },
  
  })
 
  const LegendBox= styled('div')({

    // backgroundColor: 'green' ,
    
      display: 'flex',
   
      flexDirection: 'row',
      justifyContent: 'flexStart',
      alignItems: 'center',
      width: '100%',
      // backgroundColor: 'yellow'
    
    
    //   [theme.breakpoints.down('sm')] : {
    //     // width: '100%'
    //   },
    
    })

    const LegendIconTop= styled('div')({

      // backgroundColor: 'green' ,
      
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '.7rem',
          height: '.7rem',
        backgroundColor: 'green',
        borderRadius: '30px'
    
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })


      const LegendIconBottom= styled('div')({

        // backgroundColor: 'green' ,
        
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '.7rem',
          height: '.7rem',
          backgroundColor: 'red',
          borderRadius: '30px'
      
        
        
        //   [theme.breakpoints.down('sm')] : {
        //     // width: '100%'
        //   },
        
        })

        const LegendDescription= styled('div')({

          // backgroundColor: 'green' ,
          
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '8px'
        
          
          
          //   [theme.breakpoints.down('sm')] : {
          //     // width: '100%'
          //   },
          
          })



export default function KarmicLegend(props) {
  return (
    <>
            <LegendWrapper>
            
            <LegendBox>
              <LegendIconTop/>
              <LegendDescription> Owed to You</LegendDescription>
            </LegendBox>
      
            <LegendBox>
              <LegendIconBottom/>
              <LegendDescription> You Owe </LegendDescription>
            </LegendBox>
      
          </LegendWrapper> 
      
    </>
  );
}

 