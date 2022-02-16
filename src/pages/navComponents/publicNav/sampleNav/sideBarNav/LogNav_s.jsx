import React from 'react'
import {veryDarkBlue,lightGrey,  chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,darkGrey, chitAquaBlue, chitGold} from '../../../../../styles/colors'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


import { makeStyles  } from "@mui/styles"
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component



// -------------------------------

const Wrapper= styled('div')({

  display: 'block',
  position: 'relative',
  backgroundColor: 'white',
  // backgroundColor: 'orange',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})

const HeaderWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',

  
  height: '3rem',
  backgroundColor: '#F6F7F8',
  borderRadius: '0',
  marginBottom: '2px',


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})




const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});


const FilterWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'space-between',
  justifyContent: 'center',
  alignItems: 'flex-end',

  height: '1.6rem',
  width: '100%',
  borderRadius: '0',
  margin: '7px 0 0 0',
  // backgroundColor: '#727376',
  color: 'black',

  [theme.breakpoints.down('xs')]: {
    // display: 'none', s
  }

})


const Filter= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48%',
  height: '1.5rem',
  borderRadius: '5px 5px 0 0',
  margin: '1px',
  backgroundColor: 'white'
 



})




const CategoryContainer= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'red',
  width: '100%',
  margin: '5px auto',
  height: '100%' ,
  overflowY: 'auto',
  paddingBottom: '3px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const TreeWrapper= styled(TreeView)({


  // backgroundColor: 'green',
fontFamily: 'Roboto',
height: '90%',
padding: '10px',
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const HeaderItemWrapper= styled(TreeItem)({


  // backgroundColor: 'green',


'& 	.MuiTreeItem-label' :{
  fontFamily: 'Roboto',
  fontSize: '.9rem',
  color: darkGrey
},

margin: '.1rem 0',
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const ItemWrapper= styled(TreeItem)({


  // backgroundColor: 'green',


'& 	.MuiTreeItem-label' :{
  fontFamily: 'Roboto',
  fontSize: '.9rem',
  color: 'red'
},

margin: '.1rem 0',
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

// =========================================

function LogNav() {


  const classes = useStyles();
  return (
    <Wrapper>
 

  

        <TreeWrapper
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >




          <HeaderItemWrapper  nodeId="11" label="People (8)">
            <ItemWrapper style={{ color: 'red' }} nodeId="2" label="Kelly House" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Cybill" />

          </HeaderItemWrapper>

          <HeaderItemWrapper  nodeId="12" label="Companies (2)">
            <ItemWrapper style={{ color: 'black' }} nodeId="2" label="Kelly House" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="ATT" />

          </HeaderItemWrapper>

          <HeaderItemWrapper  nodeId="16" label="Groups  (12) ">
            <ItemWrapper style={{ color: 'black' }} nodeId="7" label="IRS">
              <ItemWrapper style={{ color: 'black' }} nodeId="8" label="2002 Taxes" />
              <ItemWrapper style={{ color: 'black' }} nodeId="9" label="Mom Refund" />
            </ItemWrapper>
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Lansbrook" >
              <ItemWrapper style={{ color: 'black' }} nodeId="8" label="insurance" />
              <ItemWrapper style={{ color: 'black' }} nodeId="9" label="dog" />
            </ItemWrapper>
          </HeaderItemWrapper>

          <HeaderItemWrapper  nodeId="15" label="Organizations (8)">
            <ItemWrapper style={{ color: 'black' }} nodeId="2" label="ChitaBit" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Wakeboard Boot" />

          </HeaderItemWrapper>

          <HeaderItemWrapper  nodeId="17" label="Topics/Stories (8)">
            <ItemWrapper style={{ color: 'black' }} nodeId="2" label="ChitaBit" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Wakeboard Boot" />

          </HeaderItemWrapper>

          <HeaderItemWrapper  nodeId="19" label="Other(0)">
           

          </HeaderItemWrapper>








        </TreeWrapper>
    
    </Wrapper>
  )
}

export default LogNav
