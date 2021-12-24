// // ---- 
/* File - SpotlightForm_s.jsx

  Form to add new spotlight to Redux/database

   contains child  components: 
      none

    parent: Modal_s - src/pages/public/sampleSite/samComponents/Modal_s

*/

import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {backgroundBlue, chitOrange, chitOrangeLight, lightGrey, darkGrey} from '../../../../styles/colors'

// import{
//   // addSpotLight, 
//   // updateSpotLight, 
// } from '../../../../app/redux/samStatus/sam_actions_Spotlights'

import{

  closeModal} from 
'../../../../app/redux/statusRedux/sam_statusSlice'



  import{ 
    addSpotlightToStore,
  // updateSpotLightInStore,
  
    
  } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import{ selectSpotlights, 
  selectSpotlightFromArray

  
} from '../../../../app/redux/spotlightRedux/X_sam_selectors_Spotlights'


// import {calculateEstimatedTime, msToStringDisplay,  msToISO} from '../../../../app/helpers/dateHelper'

// --- Material UI imports ----------
import { TextField, Checkbox, Button } from "@mui/material";




// --- MUI date picker -------------------
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

import Icon from "@mui/material/Icon";



import { styled, createTheme  } from "@mui/material/styles"
import { makeStyles  } from "@mui/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  zIndex: '95',
  // backgroundColor: 'pink',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const IconContainer= styled(Icon)({
  color: 'orange'

})

const FormContainer= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'white',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormHeader= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  margin: '4px 0 8px 0',
  fontSize: '1.1rem',
  color: backgroundBlue,

})

const FormWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  // backgroundColor: 'yellow',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
    // backgroundColor: 'green'
 
  }

})

const FormSegmentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '.5rem 0 1rem 0',


  // backgroundColor: 'yellow',
  width: '100%',


})

const CheckBoxWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '.5rem 0',


  // backgroundColor: 'yellow',
  width: '100%',


})

const SegmentHeader= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '4px',
  fontSize: '.85rem',
  width: '100%',
  padding: '2px 4px',
  backgroundColor: lightGrey

})

const FormInput= styled('div')({
   display: 'block'


})

const ErrorWrapper= styled('div')({
  color: 'red'

})

// ======  Fields   ==========================



const StyledTextField= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '26rem',

  '& input' : 
  {color: darkGrey,
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  
  }


})

const StyledMultiline= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  padding: '0',
  width: '26rem',
 
  
  '& textarea' : {
     
     fontSize: '.85rem'
  }


})

const TargetDateWrapper= styled('div')({
  border: '1px solid orange',
  borderRadius: '5px',
  width: '100%', 
  margin: '0 0 0 8px',
  
  '& input' : 
  { 
  height: '1rem',
  padding: '.4rem',
  fontSize: '.85rem',
  width: '15rem', 
  }
})

const TimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 
})

const TimeSection= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12 rem',
  // backgroundColor: 'red',

  margin: '.5rem 8px',
})

const TimeLabel= styled('div')({
  width: '2rem'

})

const TimeForm= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '2rem',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  border: 'none'
  
  }
  
})

const PopupCheckBox= styled(Checkbox)({
 
  '& input':
{  
  


  // backgroundColor: 'blue'
}
})


const SubmitWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
 


})

const SubmitButton= styled(Button)({

  backgroundColor: chitOrange,
  color: 'white',
  border: 'none',
  padding: '0',
  width: '8rem',

  '&:hover':
    {  
      backgroundColor: chitOrangeLight,
      border: 'none'
    },
 


})

// ================= Checkbox  ===============
const useStyles = makeStyles({
  root: {
   
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 18,
    height: 18,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      borderRadius: 3,
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundColor: 'orange',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});


// #########  TEMP FOR Sample Form ######################


const StyledSelectField= styled('select')({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '.5rem 0 2rem 8px',
  width: '26rem',
  color: darkGrey,
 
  padding: '.5rem 0',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  
  }
 


})




// ===== func SpotlightForm - main component ===================

function SpotlightForm(props) {
  const dispatch = useDispatch()
  console.log('[SPOTLIGHT FORM porps, ',  props)




  //  ######## TEMP  #################### 

  // let passedId  = 'spot_1'
  let passedId  = props.detailId
  const [endDate, setEndDate] = React.useState('');

  const handleChange = (event) => {
    setEndDate(event.target.value);
  };

  // console.log('DATE NOW DATE NOW DATE NOW - ISO - ',  msToISO(1592784001000 ))
 //  ######## TEMP  #################### 







  let allSpotlights = useSelector(selectSpotlights)


  const today = new Date() // for datepicker initial value


  //  --- Set up initial values in form based on if a passedId exists or not
  let initialValues

  // ---No spotlight ID is passed - fill in form (initialValues) null values
  if(!passedId) {

    console.log('[SPOTLIGHT FORM ] : passed ID IS NOT passed -- ')


    initialValues = {
      title: '',
      endEst:  null,
      // wks: '',
      // days: '',
      // hrs: '',
      // mins: '',
      note: '',

    }
  }



  // ---A spotlight ID is passed -  fill in form (initialValues) --

  if(passedId) {

    let initialSpotlightDetail = selectSpotlightFromArray(allSpotlights, passedId)

    console.log('[SPOTLIGHT FORM ] : initialSpotlightDetail IS passed - ', initialSpotlightDetail)

    initialValues = {
      title: initialSpotlightDetail.title,
      endEst:  initialSpotlightDetail.endEst,
       

    }
  } // end if No passedId

  // --- set up react-hook-form --------------------

  
  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
    
    defaultValues: initialValues
})

  // datepicker functions 
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
          
    const onSubmit = data => {
      dispatch(addSpotlightToStore(data) )
      /* --- if no passedId  ----
       - create a dummy ID using CUID
       - add a new spotlight with id = CUID
      */
  //     if(!passedId) { 
  //       console.log(' [SpotlightForm] , no Id so add new ', passedId)
  //       // no Id so create new ID and add spotlight
  //       let newSpotlightId = cuid()
  //       dispatch(()=>addSpotlightToStore('sdfgser') )
       
        
  // // ###### ---- Work ACTION ---  ##########################

  // console.log(' [SpotlightForm] , no Id so add cuid ', newSpotlightId)
  // console.log(' [SpotlightForm] , no Id so add data ', data)

  //       // props.addSpotLight(data, newSpotlightId) 

  // // ###### ---- Work ACTION ---  ##########################   
      
      
  //     } // end if !passedId

  //     // --- a passed ID  - update the existing spotlight ---- 

  //     if(passedId) {
  //       let {title, endEst} = data
         
   
  
  
  //       let newSpotlightDetail = {
  //         spotlightId: passedId,
  //         title: title,
  //         endEst: endEst,
       
  //       }

        // console.log(' [SpotlightForm] , Got an ID UPDATED SPOTLIGHT ', newSpotlightDetail)
        // console.log(' ------------------------- ' )


  // ###### ---- Work ACTION ---  ##########################  

        // props.updateSpotLight( newSpotlightDetail) 

  // ###### ---- Work ACTION ---  ##########################


      // } // end if passedId

  // ###### ---- CLOSE MODAL---  ##########################
     dispatch(closeModal())
     
// ###### ---- CLOSE MODAL---  ##########################


    }// --- end onSubmit -------

  //  === Return for SpotlightForm =====================

  return (
    <Wrapper>
      <FormContainer elevation = {2}>

      {!passedId &&   
        <FormHeader> Create New Spotlight</FormHeader>
      }
      {passedId &&   
        <FormHeader> Edit Spotlight</FormHeader>
      }

      <FormWrapper>


      <form onSubmit = {handleSubmit(onSubmit) }>


{/*  title  ----------- */}

            <FormSegmentWrapper>

              <SegmentHeader>
                Title - for spotlight goal, objective or task
              </SegmentHeader>

              <Controller as={StyledTextField} 
                  name="title" 
                  InputProps={{ disableUnderline: true }}
                  control={control} 
                  defaultValue="" 
                  rules={{ 
                    required: true ,
                    maxLength: 60
                  
                  }}
                  />

                  {errors.title && errors.title.type === "required" && 
                    <ErrorWrapper>Required field</ErrorWrapper>}
                  {errors.title && errors.title.type === "maxLength" && 
                    <ErrorWrapper>Maximum characters 60</ErrorWrapper>}
                    
            </FormSegmentWrapper>

{/*  Target Date ------- Sample uses dropdown ---- */}

            {/* <FormSegmentWrapper>
              <SegmentHeader>
                Target date - when you hope to get it done by: 
              </SegmentHeader>

              <FormInput>
                
                <TargetDateWrapper>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Controller
                        as={
                          <KeyboardDatePicker
                          
                            fullWidth
                            autoOk
                            // error={!!error}
                            inputVariant="outlined"
                            variant="inline"
                            format="MM dd yyyy"
                            // label="Year of registration"
                            // helperText={error}
                            value={selectedDate}
                            keyboardIcon={<IconContainer>today_icon</IconContainer>}
                            onChange={handleDateChange}
                            orientation = 'landscape'


                          />
                        }
                        control={control}
                        name="endEst"
                        placeholder="MM DD YYYY"
                      />
                    </MuiPickersUtilsProvider>
    
                </TargetDateWrapper>

              </FormInput>            
            </FormSegmentWrapper> */}

{/* ---  Temporary --------------------- */}

<FormSegmentWrapper>
              <SegmentHeader>
                Target date - when Bob plans to get it done by: 
              </SegmentHeader>

              <FormInput>
                


        <StyledSelectField 
        ref={register} name ='endEst'
          onChange={(evt) => handleChange(evt)}
          
        >
          <option value = '' >None</option>
          <option value =' 2020-03-23T00:00:01.000Z' >March 22, 2020</option>
          <option value = '2020-04-02T00:00:01.000Z'>April 2, 2020 </option>
          <option value = '2020-06-22T00:00:01.000Z'>June 22, 2020</option>
          
        </StyledSelectField>
    

              </FormInput>            
            </FormSegmentWrapper>









            <SubmitWrapper>
            <SubmitButton type ="submit" >Submit</SubmitButton> 
            </SubmitWrapper>

          </form>
{/* --- end form ---------------------------------------- */}

      </FormWrapper>


      </FormContainer>
    
    </Wrapper>
  )
}


 export default withRouter((SpotlightForm))
