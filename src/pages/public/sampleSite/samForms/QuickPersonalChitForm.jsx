/* function QuickPersonalChitForm_s (props) -------------------
 
opens a dialog box with form to add a chit in Calendar view
  
  parent: ./PersonalCalendar
------------------------------------*/

import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
 

import {mediumGrey, lightGrey, veryLightGrey, mediumLightGrey, chitBurgandyDull, chitLightBlueDull, darkGrey, chitBlueDull, chitBurgandy} from '../../../../styles/colors'

import { addPersonalChitToStore } from '../../../../app/redux/personalChitRedux/sam_personalChitSlice'
 import { UTCtoDateTradional } from '../../../../app/helpers/dateHelper'

 import { selectCategories, getCategoryObjectFromId  } from '../../../../app/redux/categoryRedux/sam_categorySlice'

import MonthNav from '../samChits/personal/MonthNav_s'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { UTCtoISO } from '../../../../app/helpers/dateHelper'
// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports ------------

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';


//  ---- Form component imports
import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { ChitRadio } from '../../../../forms/formComponents/ChitRadio'


// --- MUI --------------

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 
import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
import cuid from 'cuid'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


  //====================================

export default function QuickPersonalChitForm(props) {

  const dispatch = useDispatch()
  let sampleDate = new Date('2021-03-14T17:03:40.000Z') 

  let { refIndex, utcDate, month, displayChits, isToday, futureDay, categoryId } = props

  const allCategories = useSelector(selectCategories) // get all categories
  let categoryObject = getCategoryObjectFromId(allCategories, categoryId)
  let categoryName = categoryObject.category

  let formattedDate = UTCtoDateTradional(parseInt(utcDate))
 let formChitDate = new Date(parseInt(utcDate)).toISOString()

  // --- Dialog Box - open close ---
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // title: string().required('A title for your spotlight is required'),


});


  let defaultValues = {

    detail: '',
    chitType: 'personal',
    chitColor: 'copper',
    category: categoryId
  
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

//======= SUBMIT ================================== 

const { handleSubmit, reset, control, watch , setValue} = methods;

const submitForm = async (data) => {

console.log('[ Personal CHit Form ] data ', data);

let chitColor = data.chitColor

let newPersonalChitData = {
  id: cuid(),
  dateCreated: sampleDate.toISOString(),
  chitType: 'personalChit',
  chitColor: chitColor,
  category: categoryId,
  detail: data.detail,
  workRelated: 'notWorkRelated',
  duplicate: '',
  chitDate: formChitDate,
  keyWordArray: []
}

try {

  // --- start the loading spinner ---
  dispatch(changeLoadingStatus(true))
        // --- create new chit ------------
        dispatch(addPersonalChitToStore(newPersonalChitData))
        dispatch(changeLoadingStatus(false))
} catch (error) {

  // --- alert error + navigate + end spinner + reset form ---
  alert(error.message)
  dispatch(changeLoadingStatus(false))

  reset(defaultValues)
}// end try-catch
}
  return (
    <>
      {month === 'current' && isToday &&
        <TodayWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>


            <AddCircleIconWrapper onClick={handleClickOpen} />

          </DayWrapper>
        </TodayWrapper>
      }
      {month === 'current' && !isToday &&
        <CurrentMonthWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>

            {!futureDay &&
              <AddCircleIconWrapper onClick={handleClickOpen} />
            }
            {futureDay &&
              <DispabledAddCircleIconWrapper />
            }




          </DayWrapper>
        </CurrentMonthWrapper>


      }



      {month !== 'current' &&
        <OtherMonthWrapper >
          <DayWrapper>
            <Day >

              {props.day}
            </Day>



            {!futureDay &&
              <AddCircleIconWrapper onClick={handleClickOpen} />
            }
            {futureDay &&
              <DispabledAddCircleIconWrapper />
            }




          </DayWrapper>
        </OtherMonthWrapper>
      }


      <Dialog open={open} onClose={handleClose}>
        <TitleWrapper>Add Chit</TitleWrapper>
        <Preset>
          <PresetRow>

          <PresetLeft>  category : </PresetLeft>
              <PresetRight>{categoryName}  </PresetRight>

           

            </PresetRow>
            <PresetRow>

              <PresetLeft> chit date :</PresetLeft>
              <PresetRight> {formattedDate} </PresetRight>
            
          </PresetRow>
     
        </Preset>

        <FormProvider {...methods}>
 
 <FormWrapper onSubmit={handleSubmit(submitForm)}>
        




            {/* ------Chit-------------------------- */}

            <FormComponentWrapper>

 
<ComponentWrapperIndent>
  <RadiotWrapper>
    <ChitRadio
      name={"chitColor"}
      control={control}
      label={"logType"}
      options={[

        {
          label: "copper",
          value: "copper",
        },
        {
          label: "silver",
          value: "silver",
        },

        {
          label: "gold",
          value: "gold",
        },

        {
          label: "awChit",
          value: "red",
        },

        
        {
          label: "milestone",
          value: "milestone",
        },






      ]}
      defaultValue = {defaultValues.chitColor}
    />
  </RadiotWrapper>


  


</ComponentWrapperIndent>

    



            </FormComponentWrapper>
            <FormComponentWrapper>
 
                  <ComponentWrapper>


                    <StyledInput
                      name={"detail"}
                      control={control}
                      label={"detail"}
                      defaultValue={''}
                      placeholder='description'


                    />




                  </ComponentWrapper>

            

              </FormComponentWrapper>







            <DialogActions>
          <StyledButton onClick={handleClose}>Cancel</StyledButton>


          <StyledSubmitButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Submit Form
              </StyledSubmitButton>


        </DialogActions>
</FormWrapper>
</FormProvider>
      </Dialog>

    </>
  );
}
 
// --------------------------------

const CurrentMonthWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: 'white',
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'black',
  width: '100%',


})

const TodayWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: chitLightBlueDull,
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'black',
  width: '100%',


})

const DayWrapper= styled('div')({
  // display: 'block',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  
  width: '4.5rem',
  height: '4.5rem',
 
   overflow: 'hidden',
  verticalAlign: 'middle',
  textAlign: 'center',
 
  '& img' :{
    height: '3rem',
    marginBottom: '6px'
  },

})

const OtherMonthWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.8rem',
  backgroundColor: mediumLightGrey,
  borderTop: '1px solid #E6E7E8',
  borderBottom: '1px solid #E6E7E8',
  borderLeft: '1px solid #E6E7E8',
  borderRight: '1px solid #E6E7E8',
  color: 'white',
  width: '100%',


})




const Day = styled('div')({
  fontSize: '.65rem',
  position: 'absolute',
  top: '2px',
  right: '2px',

})



const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: lightGrey,
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: lightGrey,
    color: 'white',
    borderRadius: '50px',
    cursor: 'pointer'
  },

})

const DispabledAddCircleIconWrapper= styled(AddCircleIcon)({

  color: lightGrey,
  fontSize : '1.7rem',
  opacity: 0,
  '&:hover' : {
    backgroundColor: veryLightGrey,
    borderRadius: '50px',
   
  },

})
  
const FormWrapper = styled('form')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '98%',
  padding: '0 5%',

 backgroundColor: veryLightGrey,
  [theme.breakpoints.down('sm')]: {
    width: '100%',


  },

})

const TitleWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontSize: '1.2rem',
  width: '100%',
  margin: '.5rem 0',
  color: darkGrey,
  borderBottom: '1px solid grey',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const Preset = styled('div')({
 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: '.9rem',
  width: '100%',
  padding: '.25rem 0 .5rem .5rem',
  color: darkGrey,

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const PresetRow = styled('div')({
 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontSize: '.9rem',
  width: '100%',
  // margin: '.5rem 0',
  color: darkGrey,

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const PresetLeft = styled('div')({
 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.8rem',
  width: '30%',
  // margin: '.5rem 0',
  color: darkGrey,

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const PresetRight = styled('div')({
 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.9rem',
  width: '60%',
  // margin: '.5rem 0',
  color: chitBurgandy,

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})


const FormComponentWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: '.25rem',
  padding: '1rem',
  borderRadius: '5px',
backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const FormComponentWrapperIndent= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '80%',
  margin: '0 0 .75rem 5%',

 
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
  color: darkGrey,


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

const ComponentWrapperIndent= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '95%',
  marginLeft: '1.5rem',

 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})


const StyledSubmitButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  width: '8rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

//  --- Buttons -----------
const SubmitContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '95%',
  margin: '.75rem',

  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})



const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 1.5rem 0 6px',
  width: '5rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

const RadiotWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 
//  backgroundColor: 'yellow',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
