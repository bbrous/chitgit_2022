import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {connect} from 'react-redux'
import {useHistory, useRouteMatch, match, withRouter} from 'react-router-dom'

import{ selectSpotlights, 
  makeSelectSpotlights,
  selectTasks,
  makeGetSpotlight,
  selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'

import { chitRedDark, chitBlueDull, chitOrangeLight, mediumGrey, chitBlueLight } from '../../../../styles/colors'

// import{addTask} from '../app/redux/actions/mainActions'
// import{taskIdGenerator, spotlightIdGenerator} from '../app/helpers/idKeyGenerators'
import cuid from 'cuid'
// Material UI =============================

import { styled, createMuiTheme, withStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import { TextField, 
          Button,
          RadioGroup,
          FormControlLabel,
          ThemeProvider,
          Radio,
   } from "@material-ui/core";

 
 

import Icon from "@material-ui/core/Icon";


const theme = createMuiTheme(); // mui theme for styled component

// ========================================

const Wrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 
   
  width: '100%',
  backgroundColor: mediumGrey,

})

const FormWrapper= styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '4px 1rem',
  borderRadius: '5px',
  // backgroundColor: 'white'


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


function SpotlightTaskForm(props) {
 

 console.log( '[SPOTLIGHT TASK FORM - match', props.match.params.itemId )

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

// &&&&&&&&&   ADD TASK ACTION HERE   &&&&&&&&&&&&&&&&&&&

  // let displayedId = props.display.private.spotLightDisplay.displayedSpotLightId
  // let currentTasks = props.display.private.data.spotlightData.spotlights[displayedId].tasks
  // let allSpotlights = props.display.private.data.spotlightData.spotlights

  let spotlightDisplayed = props.spotlight.spotlight
  const {id,  parent, completedTimeStamp, spotlightStatus, title, beginTimeStamp, endEst, timeEst, type,  note } = spotlightDisplayed

  // deconstruct spotlight object 
  // const {id,  parent, completedTimeStamp, spotlightStatus, title, beginTimeStamp, endEst, timeEst, type,  note } = spotlightDisplayed


  // console.log('SPOTLIGHT TASK FORM : tasks - ',  Object.keys(currentTasks))
  // let lastCurrentTask = Math.max(Object(currentTasks))
  // let highestValue
  // let allTaskValues = currentTasks.map((taskValue, index) => {
    

  //   return taskValue

  // })


    // const onSubmit = data => alert(JSON.stringify(data))
    const onSubmit = (data) => {
      let newId = data.taskType === 'spotlight' ? newSpotlightId: newTaskId

      console.log('&&&& [SPOTLIGHT TASK FORM] : data - ',  data)
      props.addTask(id, data, newId)
      reset()
    }


// &&&&&&&&&   ADD TASK ACTION HERE   &&&&&&&&&&&&&&&&&&&

let newTaskId = cuid()
let newSpotlightId = cuid()

  return (
    <Wrapper>
      <FormWrapper onSubmit = {handleSubmit(onSubmit)}>
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
       
    {/* <RadioButtonWrapper>
    <Controller
          as={
            
            <RadioGroup row aria-label="type"  defaultValue = 'task' name = 'taskType' > 
              <RadioLabel   
                value="task"
                control={<OrangeRadio />}
                label="Add as task"
               
              />
              <RadioLabel 
              value="spotlight" control={<OrangeRadio />} label="Add as spotlight" />
            </RadioGroup>
          }
          name="taskType"
          control={control}
        /> */}
            {/* <RadioBox>
              <input type="radio" id="sort" name="sort" value="asecending"
              defaultChecked = "checked"
              // onChange = {changeSort}
              />
              <RadioBoxLabel >Add as task

                  </RadioBoxLabel>
            </RadioBox>        
            <RadioBox>
              <input type="radio" id="sort" name="sort" value="descending"
              // onChange = {changeSort}
              />
              <RadioBoxLabel >Add as Spotlight

                  </RadioBoxLabel>
            </RadioBox> */}

          {/* </RadioButtonWrapper> */}
          
          
            
      </FormWrapper>
      
    </Wrapper>
  )
}

 

const actions = {
  // addTask
}


// export default connect(mapState, actions)(SpotlightTaskForm)

const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()

 
  return (state, ownProps) => 
     {
      const matchid = ownProps.match.params.detailId
       return {

         spotlight: getSpotlight(state, matchid),

     
     }}
 
  
 };
 

export default withRouter(connect(makeMapStateToProps, actions)(SpotlightTaskForm))
