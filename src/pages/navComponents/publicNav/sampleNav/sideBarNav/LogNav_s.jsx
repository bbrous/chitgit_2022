import React from 'react'
import {veryDarkBlue,lightGrey,  chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,mutedBackgroundBlue, chitAquaBlue} from '../../../../../styles/colors'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper'; 
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';



import {styled, createMuiTheme, makeStyles}  from '@material-ui/core/styles'

const theme = createMuiTheme(); // allows use of mui theme in styled component


// -------------------------------

const Wrapper= styled('div')({

  display: 'block',
  position: 'relative',
  backgroundColor: lightGrey,
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

const Header= styled('div')({

  display: 'block',
  fontSize: '1.2rem',
  
  color: chitRedDark
  



})

const NewWrapper= styled(Paper)({

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  
  height: '2rem',
  backgroundColor: 'white',
  borderRadius: '0',
  marginBottom: '2px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', s
  }

})

const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: chitOrange,
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    borderRadius: '50px',
  },

})

const New= styled('div')({

  display: 'block',
  marginRight: '6px',
  
  color: mutedBackgroundBlue,
  // fontWeight: 'bold'
  

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
  backgroundColor: 'white',
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

const ItemWrapper= styled(TreeItem)({


  // backgroundColor: 'green',

fontFamily: 'Roboto',
 
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
      <HeaderWrapper elevation={3}>
        <Header> Logs   </Header>

      </HeaderWrapper>
      <NewWrapper elevation={1}>
        <New> new Log </New>

        <AddCircleIconWrapper />
      </NewWrapper>


      <FilterWrapper  >

        <Filter> Categories</Filter>
        <Filter> Key words</Filter>

      </FilterWrapper>

      <CategoryContainer>

        <TreeWrapper
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >




          <ItemWrapper style={{ color: mutedBackgroundBlue }} nodeId="1" label="People (8)">
            <ItemWrapper style={{ color: 'black' }} nodeId="2" label="Kelly House" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Lynn" />

          </ItemWrapper>

          <ItemWrapper style={{ color: mutedBackgroundBlue }} nodeId="6" label="Organizations  (12) ">
            <ItemWrapper style={{ color: 'black' }} nodeId="7" label="IRS">
              <ItemWrapper style={{ color: 'black' }} nodeId="8" label="2002 Taxes" />
              <ItemWrapper style={{ color: 'black' }} nodeId="9" label="Mom Refund" />
            </ItemWrapper>
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Lansbrook" >
              <ItemWrapper style={{ color: 'black' }} nodeId="8" label="insurance" />
              <ItemWrapper style={{ color: 'black' }} nodeId="9" label="dog" />
            </ItemWrapper>
          </ItemWrapper>

          <ItemWrapper style={{ color: mutedBackgroundBlue }} nodeId="1" label="Topics/Stories (8)">
            <ItemWrapper style={{ color: 'black' }} nodeId="2" label="ChitaBit" />
            <ItemWrapper style={{ color: 'black' }} nodeId="3" label="Wakeboard Boot" />

          </ItemWrapper>










        </TreeWrapper>
      </CategoryContainer>
    </Wrapper>
  )
}

export default LogNav
