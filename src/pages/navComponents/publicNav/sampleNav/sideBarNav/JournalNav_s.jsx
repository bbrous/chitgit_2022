import React from 'react'
import {veryDarkBlue,lightGrey,  chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,darkGrey, chitAquaBlue, chitGold} from '../../../../../styles/colors'

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
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  height: '80%',
  width: '100%',
  borderRadius: '0',
  margin: '7px 0 0 0',
  // backgroundColor: '#727376',
  color: 'black',

  [theme.breakpoints.down('xs')]: {
    // display: 'none', s
  }

})


const CategorySelectWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
  // width: '16rem',
  backgroundColor: 'yellow',
  color: darkGrey,


})

const KeywordSelectWrapper= styled('div')({
 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'pink',
  color: darkGrey,


})







const StyledSelectField= styled('select')({
  border: '1px solid orange',
  borderRadius: '5px',
  width: '80%', 
  margin: '1rem 0 0 0 ',
  // width: '16rem',
  backgroundColor: 'white',
  color: darkGrey,


})

const Title= styled('div')({
 
 
  // width: '16rem',
  
  color: darkGrey,


})

const CheckBoxWrapper= styled('div')({
 
  display: 'flex',
  backgroundColor: 'orange',
  width: '75%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // width: '16rem',
  
  color: darkGrey,


})

const CheckBoxLabel= styled('div')({
 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  // width: '16rem',
  
  color: darkGrey,


})


// =========================================

function JournalNav() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  // const changeFilter = (evt)=>{

  //   setFilter(evt.target.value)
    

  // }

  return (
    <>
      <FilterWrapper  >
      <CategorySelectWrapper>

<Title> Filter by Month / Year</Title>

<StyledSelectField name="filters" id="filters"
// onChange={(evt) => changeFilter(evt)}
>
<option value="begun">January</option>
  <option value="uncompleted" >February</option>
  <option value="topLevel" >March</option>
 

</StyledSelectField>
<StyledSelectField name="filters" id="filters"
// onChange={(evt) => changeFilter(evt)}
>
<option value="begun">2021</option>

 

</StyledSelectField>

</CategorySelectWrapper>



        <CategorySelectWrapper>

          <Title> Filter by Person</Title>

          <StyledSelectField name="filters" id="filters"
          // onChange={(evt) => changeFilter(evt)}
          >
            <option value="uncompleted" >Joi Me</option>
            <option value="topLevel" >Steve - Starbucks</option>
            <option value="begun">Jill S</option>
            <option value="inactive">Mark Hedelson</option>
       
          </StyledSelectField>


        </CategorySelectWrapper>




        <CategorySelectWrapper>

          <Title> Filter by Category</Title>

          <StyledSelectField name="filters" id="filters"
          // onChange={(evt) => changeFilter(evt)}
          >
            <option value="uncompleted" >All uncompleted spotlights</option>
            <option value="topLevel" >Top level spotlights only</option>
            <option value="begun">Active only</option>
            <option value="inactive">Inactive only</option>
            <option value="all">All spotlights</option>
            <option value="completed">Completed only</option>
          </StyledSelectField>


        </CategorySelectWrapper>

        <KeywordSelectWrapper>
          <Title>Filter by Keyword</Title>

          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>

          </CheckBoxWrapper>
        
          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>
            
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>
            
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>
            
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>
            
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            
            <Checkbox {...label} defaultChecked size="small" />
            <CheckBoxLabel> Label </CheckBoxLabel>
            
          </CheckBoxWrapper>  


        </KeywordSelectWrapper>
              


      </FilterWrapper>

    </>
  )
}

export default JournalNav
