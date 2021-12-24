/* ---- PlanTaskForm()
    parent: sampleSite/samPlans/PlanMain_s

    Simple task form to add a task to Plan in Params

*/


import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {connect} from 'react-redux'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'

import{ 
  makeGetPlan,
  
  
} from '../../../../app/redux/planRedux/selectors_Plans'

// import{addTask} from '../app/redux/actions/mainActions'
// import{taskIdGenerator, spotlightIdGenerator} from '../app/helpers/idKeyGenerators'
import cuid from 'cuid'
// Material UI =============================


import Paper from '@material-ui/core/Paper'

import { TextField, 
          Button,
          RadioGroup,
          FormControlLabel,
          ThemeProvider,
          Radio,
   } from "@material-ui/core";
import {chitOrangeLight,chitBlueLight, veryLightGrey } from '../../../../styles/colors';
 
 

import Icon from "@material-ui/core/Icon";


import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// ========================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 
   
  width: '100%',
  backgroundColor: 'white',

})

const FormWrapper= styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '4px 1rem',
  borderRadius: '5px',
  width: '100%',
  backgroundColor: veryLightGrey


})


const StyledTextField= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '16rem',
  backgroundColor: 'white',
  marginRight: '8px',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.8rem',
  padding: '.4rem',
  
  }


})

const InputWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',

  
  // backgroundColor: 'blue',
  // width: '100%',
  
 

})

const RadioButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '4px',

  // backgroundColor: 'pink',
  width: '100%',
  padding: '0 10px',

})
 

const SubmitButton= styled(Button)({

  backgroundColor: chitBlueLight,
  color: 'white',
  border: 'none',
  padding: '0',
  width: '4rem',
  fontSize: '.7rem',
  textTransform: 'none',
  margin: '2px',
  '&:hover':
    {  
      backgroundColor: chitOrangeLight,
      border: 'none'
    },
 


})


const RadioLabel= styled(FormControlLabel)({
  color: 'grey',
  fontSize: '.5rem',
  '& .MuiFormControlLabel-label ': {
    fontSize: '.8rem'
  }
  

})
const ErrorWrapper= styled('div')({
  color: 'red',
// backgroundColor: 'pink',
width: '16rem',
marginLeft: '3%'
})

const taskType= styled(RadioGroup)({

})

const OrangeRadio = withStyles({
  root: {
    color: 'orange',
    icon: {
      color: 'blue'
    },
    '&$checked': {
      color: 'orange',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  },

  
  
  checked: {},
})((props) => <Radio color="default" {...props} />);

// =============================================


function PlanTaskForm(props) {
 

 console.log( '[Plan TASK FORM - match', props.match.params.itemId )

  const [selectedValue, setSelectedValue] = React.useState('task');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const {register, handleSubmit, watch, errors, control, setValue, reset} = useForm({
    defaultValues: {
      todo: '',
      taskType: 'task'

    }
})



  let displayedId = props.match.params.detailId





// &&&&&&&&&   ADD TASK ACTION HERE   &&&&&&&&&&&&&&&&&&&

let newTaskId = cuid()

    // const onSubmit = data => alert(JSON.stringify(data))
    // const onSubmit = (data) => {
    //   let newId = data.taskType === 'spotlight' ? newSpotlightId: newTaskId

    //   console.log('&&&& [SPOTLIGHT TASK FORM] : data - ',  data)
    //   props.addTask(displayedId, data, newId)
    //   reset()
    // }


  return (
    <Wrapper>
      <FormWrapper 
        // onSubmit = {handleSubmit(onSubmit)}
        
      >
      <InputWrapper> 
          <Controller as={StyledTextField} 
                  name="todo" 
                  InputProps={{ disableUnderline: true }}
                  control={control} 
                  placeholder = 'Add a new task'
                  defaultValue="" 
                  rules={{ 
                    required: true ,
                    maxLength: 40,
                  
                  }}
                  
                  />

                  {/* {errors.goal && errors.goal.type === "required" && 
                    <ErrorWrapper>First name is required</ErrorWrapper>}
                  {errors.goal && errors.goal.type === "maxLength" && 
                    <ErrorWrapper>Maximum characters 40</ErrorWrapper>} */}

          <SubmitButton type ="submit" > Submit </SubmitButton>
    </InputWrapper>
    {errors.todo && errors.todo.type === "required" && 
                    <ErrorWrapper>A description is required</ErrorWrapper>}
       

          
          
            
      </FormWrapper>
      
    </Wrapper>
  )
}

 

const actions = {
  // addTask
}


// export default connect(mapState, actions)(SpotlightTaskForm)

const makeMapStateToProps = () => {
  // const getPlan = makeGetPlan()

 
  // return (state, ownProps) => 
  //    {
  //     const matchid = ownProps.match.params.detailId
    
  //      return {

  //        plan: getPlan(state, matchid),

     
  //    }}
 
  
 };

export default withRouter(connect(makeMapStateToProps, actions)(PlanTaskForm))

