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
 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%' ,
     
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
   
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
     
 
    
    
    //   [theme.breakpoints.down('sm')] : {
    //     // width: '100%'
    //   },
    
    })

    const HeaderWrapper= styled('div')({

      // backgroundColor: 'green' ,
      display: 'flex',
 
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
        width: '100%',
        borderBottom: '1px solid #CFD0D1',
        marginBottom: '6px'

    
      
      
      //   [theme.breakpoints.down('sm')] : {
      //     // width: '100%'
      //   },
      
      })

      const RowWrapper= styled('div')({

        // backgroundColor: 'green' ,
        display: 'flex',
   
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
          width: '100%'
      
        
        
        //   [theme.breakpoints.down('sm')] : {
        //     // width: '100%'
        //   },
        
        })

      const ItemWrapper= styled('div')({

        // backgroundColor: 'green' ,
        display: 'flex',
   
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
          width: '55%'
      
        
        
        //   [theme.breakpoints.down('sm')] : {
        //     // width: '100%'
        //   },
        
        })

        const NumberWrapper= styled('div')({

          // backgroundColor: 'green' ,
          display: 'flex',
   
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
            width: '15%'
        
          
          
          //   [theme.breakpoints.down('sm')] : {
          //     // width: '100%'
          //   },
          
          })

          
        const AssetWrapper= styled('div')({

          // backgroundColor: 'green' ,
          display: 'flex',
   
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
            width: '15%',
            color: 'green'
        
          
          
          //   [theme.breakpoints.down('sm')] : {
          //     // width: '100%'
          //   },
          
          })


          const LiabilityWrapper= styled('div')({

            // backgroundColor: 'green' ,
            display: 'flex',
   
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
              width: '15%',
          
            color: 'red',
            
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
                backgroundColor: '#00C49F',
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

  const {owedChits, chitsOwed, assets, liabilities} = props
  return (
    <>
            <LegendWrapper>
            
            <LegendBox>
              <HeaderWrapper>
                <ItemWrapper></ItemWrapper>
                <NumberWrapper># of chits</NumberWrapper>
                <AssetWrapper>Assets</AssetWrapper>
                <LiabilityWrapper>Liabilities</LiabilityWrapper>
              </HeaderWrapper>

               <RowWrapper>
                <ItemWrapper>
                  <LegendIconTop/>
              <LegendDescription> Chits owed to You</LegendDescription>
               </ItemWrapper>
              <NumberWrapper>{chitsOwed}</NumberWrapper>
              <AssetWrapper>{assets}</AssetWrapper>
              
              </RowWrapper>
              
             <RowWrapper>
               <ItemWrapper><LegendIconBottom/>
              <LegendDescription> Chits you Owe: </LegendDescription>
              </ItemWrapper>
              <NumberWrapper>{owedChits}</NumberWrapper>
              <AssetWrapper></AssetWrapper>
              <LiabilityWrapper>- {liabilities}</LiabilityWrapper>
             </RowWrapper> 
            </LegendBox>
      
          
      
          </LegendWrapper> 
      
    </>
  );
}

 