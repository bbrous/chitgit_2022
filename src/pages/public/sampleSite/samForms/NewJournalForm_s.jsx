import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
// --- Form inputcomponent imports ---------


import { Editor } from '../../../../forms/formComponents/ChronicleEditor'
import { EditorShort } from '../../../../forms/formComponents/ChronicleEditorShort'
import { StyledChronicleMultiselect } from '../../../../forms/formComponents/StyledChronicleMultiselect';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

import { StyledInput } from '../../../../forms/formComponents/StyledInput'

import { addJournalToStore } from '../../../../app/redux/journalRedux/sam_journalSlice'
import { StyledDateTimePicker } from '../../../../forms/formComponents/StyledDateTimePicker'
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled, createTheme } from '@mui/material/styles'
import { chitBlueDull, mediumGrey, veryLightGrey, lightGrey, chitBurgandyDull } from '../../../../styles/colors'

const theme = createTheme(); // allows use of mui theme in styled component


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function NewJournalForm(props) {

  const {setOpenForm} = props



  return(
    <Scrollbars> 
    <Wrapper>

 
<MainWrapper>

      <ButtonWrapper>

        <StyledButton> Save and Close </StyledButton>
        <StyledButton> Save and Add New Section</StyledButton>
        <StyledButton onClick={()=>setOpenForm(false)}> Cancel</StyledButton>
      </ButtonWrapper>


    <SearchWrapper>
              <SearchTitle>Add search termsxxx Section Form</SearchTitle>
              <PeopleWrapper>
  people select

                {/* <StyledChronicleMultiselect
                  name={'people'}
                  control={control}
                  options={peopleOptionsArray}
                   
                  defaultValue={defaultValues.people}
                  placeholder='select or type people'

                /> */}
              </PeopleWrapper>

              <KeyWordWrapper>
  keyword select

              {/*   <StyledChronicleMultiselect
                  name={'keywords'}
                  // control={control}
                  // options={keywordsOptionsArray}
                  placeholder='select or type keywords'
                   
                  defaultValue={defaultValues.keywords}


                /> */}
              </KeyWordWrapper>

            </SearchWrapper>

            <DateContainer>
              <DateWrapper>

                date input

                {/* <Controller

                  name="dateTime"
                  control={control}


                  render={({ field }) => (
                    <StyledDateTimePicker {...field} ref={null} />
                  )} 
                /><CalendarTodayIcon style={{
                  color: '#A7A7A8',
                  fontSize: '1.2rem',
                  marginLeft: '5px'
                }}
                />*/}

              </DateWrapper>

            </DateContainer>



    <OuterContentWrapper>

    <TitleWrapper>

input form here

                  {/* <Controller

                    name="title"
                    control={control}
                    initialNote={'hi quill description'}

                    render={({ field }) => (
                      <EditorShort
                        {...field}
                        ref={null}
                        IniitalValue={defaultValues.title} />
                    )}

                  /> */}


                </TitleWrapper>


                <Content>

Quill here
{/* 
                  <Controller

                    name="content"
                    control={control}
                    initialNote={'hi quill description'}

                    render={({ field }) => (
                      <Editor
                        {...field}
                        ref={null}
                        IniitalValue={defaultValues.content} />
                    )}

                  /> */}


                </Content>


    </OuterContentWrapper>



    </MainWrapper>
    
    </Wrapper>
    </Scrollbars>
  )



}




// ==== Styles ===========================================


const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',

  width: '98%',
  height: '100%',
  // overflow: 'auto',
border: '2px solid #F285B5',
backgroundColor: veryLightGrey,

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

//  --- Buttons Wrapper  ---------------------------------

const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '80%',
  margin: '.25rem 0 6px  0',

  backgroundColor: 'aqua',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  padding: ' 0 1rem',
  height: '1.5rem',
  fontSize: '.8rem',
  textTransform: 'none',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

// ---- search Inputs ---------------------------------------

const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '99%',
  padding: '2px 0',
  margin: '0 0 3px o',
backgroundColor: 'orange',
  fontSize: '.6rem',
  height: '2rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const SearchTitle= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  marginRight: '1.5rem',
  fontSize: '.85rem',
  fontStyle: 'italic',
  height: '100%',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const PeopleWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'aqua',
  width: '30%',
height: '100%',
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
  marginLeft: '8px',
  width: '40%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})




const FormWrapper = styled('form')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '98%',
  height: '100%',
  margin: '5px 0',
  padding: '4px',
  backgroundColor: 'white',



  [theme.breakpoints.down('sm')]: {
    width: '100%',
  

  },

})

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '98%',
  height: '100%',
  marginBottom: '6px',
  paddingBottom: '6px',
 
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const DateContainer= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  // backgroundColor: veryLightGrey,
  backgroundColor: 'red',


  width: '100%',
  margin: '3px 0',
  borderRadius: '5px 5px 0 0',
  borderLeft: '1px solid #CFD0D1',
  borderTop: '1px solid #CFD0D1',
  borderRight: '1px solid #CFD0D1',
  height: '2rem',
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
  width: '35%',
  padding: '2px 6px',

  fontSize: '.8rem',
  height: '.8rem',

  '& span': {
    color: mediumGrey,
    marginLeft: '6px',
     
  },

  [theme.breakpoints.down('sm')] : {
    width: '100%'
  },


})


const OuterContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',
  

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ---- Content Wrapper -------------------------------------

const ContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  width: '100%',
  // marginTop:'6px',
  margin: 'auto',
  
  
  
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const TitleWrapper= styled('div')({

  display: 'flex',
 
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  fontSize: '.75rem',
  width: '30%',
  minHeight: '100%',
 
  backgroundColor: veryLightGrey,

 

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TimesWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  width: '100%',
  padding: '2px 6px',

  fontSize: '.65rem',
  color: mediumGrey,

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const HeadlineWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitBlueDull,
  width: '99%',
  padding: '6px 0',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})





const Content= styled('div')({
  flexGrow: 1,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '70%',

   
  // borderLeft: '1px solid #E6E7E8',
  backgroundColor: 'white',
   
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})



// ##############################################

const FormComponentWrapper= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: '.5rem',

 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ComponentName= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: 'darkGrey',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',

 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
 




  