import React from 'react'
import {veryDarkBlue,lightGrey,  chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,darkGrey, chitAquaBlue, chitGold, mediumGrey, chitBurgandy} from '../../../../../styles/colors'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Checkbox from '@mui/material/Checkbox';

import { makeStyles  } from "@mui/styles"
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component






// =========================================

function JournalNav() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  // const changeFilter = (evt)=>{

  //   setFilter(evt.target.value)
    

  // }

  return (
    <Wrapper>


      <YearWrapper elevation={1}>
        <FilterTitle> Filter</FilterTitle>

        <StyledSelectField name="filters" id="filters"
        // onChange={(evt) => changeFilter(evt)}
        >

          <option value="2021">2021</option>
          <option value="2022">2022</option>

        </StyledSelectField>

      </YearWrapper>
      <MonthContainer>


      <MonthWrapper>March</MonthWrapper>
      <MonthWrapper>February</MonthWrapper>
      <MonthWrapper>January</MonthWrapper>

      </MonthContainer>

    </Wrapper>
  )
}

export default JournalNav
// -------------------------------

const Wrapper= styled('div')({

  display: 'block',
  width: '100%',
  position: 'relative',
  backgroundColor: 'white',
  // backgroundColor: 'orange',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})


const YearWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'black',
  
  
  cursor: 'pointer',
  width: '100%',
  height: '6rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
 
  borderRadius: '0',
  border: '1px solid #F6F7F8', 
 
    '&:hover' : {
      // backgroundColor: 'white',
        color: chitOrange,
    },


})


const FilterTitle= styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '1.1rem',
  color: chitBurgandy,
  marginBottom: '1rem',
  })

const MonthContainer= styled('div')({

  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  // backgroundColor: 'orange',

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})
const MonthWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 8px',

  cursor: 'pointer',
  borderRadius: '0',
    '&:hover' : {
      // backgroundColor: veryLightGrey,
      color: chitOrange,
    },
  })

  
const MonthWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  color: 'white',
  backgroundColor: mediumGrey



})




// const useStyles = makeStyles({
//   root: {
//     height: 240,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });



const StyledSelectField= styled('select')({
  border: '1px solid grey',
  borderRadius: '5px',
  width: '80%', 
  textAlign: 'center',
  fontSize: '.85rem',
  // width: '16rem',
  padding: '4px',
  backgroundColor: 'white',
  color: darkGrey,


})