/* ---- File - samSpots/TaskItem_s.jsx
    item formatted for use in Sortable tasks
    
    child requirements - none

    parent: SortableTasks - pages/public/sampleSite/samSpots/SortableTasks
       - uses URL to get spotlight ID
   

*/
 

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
// import "./styles.css";

import{mediumLightGrey, mediumGrey, chitOrangeVeryLight, chitOrange, lightGrey, darkGrey} from '../../../../styles/colors'

import {Item} from './Item';
import NoteIcon from '../samComponents/Note_icon_s'
import EditIcon from '../samComponents/Edit_icon_s'
import DeleteIcon from '../samComponents/Delete_icon_s'
import ChitIcon from '../samComponents/Chit_icon_s'
import ConvertIcon from '../samComponents/Convert_icon_s'



import {selectTasks, changeTaskCompletedStatus } from '../../../../app/redux/taskRedux/sam_tasksSlice';


// import MenuPopupTasks from './MenuPopupTasks'

// import NotePopup from './NotePopup'

// ####################################################
// ####################################################
// ####################################################


import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component



export function TaskItem(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id, type, allSpotlights, allTasks} = props

 
  

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: props.id});
  
  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition,
  // };


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
 
    // border: "2px solid red",
    backgroundColor: mediumLightGrey,
    // margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1
  };


// let objectItem


const [title, setTitle] = useState('');
const [taskStatus, setTaskStatus] = useState('');

const [objectItem, setObjectItem] = useState({
  title: '',
  completed: ''
});


  useEffect(() => {
    if (type === 'spotlight') {
      setObjectItem(allSpotlights.find(spotlightItem => spotlightItem.id === props.id))
      if (objectItem) {
        setTitle(objectItem.title)
        setTaskStatus(objectItem.completed)
      }//end if objectItem
    }// end if type === spotlight

    if (type === 'task') {
      setObjectItem(allTasks.find(taskItem => taskItem.id === props.id))
      if (objectItem) {
        setTitle(objectItem.title)
        setTaskStatus(objectItem.completed)
      }//end if objectItem
    }// end if type === task

  }, [allSpotlights, allTasks, id, type, objectItem, props.id])

// console.log('[ TaskItem !!!! ] taskStatus ', taskStatus);
// ======  DUMMY Initial Values ==================== //
// ---------Get from Database ---------------------- //

// let taskStatus = false
let completed = false



  // --- handler functions -----------------


  const handleTaskCompletedStatus = (taskId) => {

    let dateNow = '2022-05-30T17:21:10.265Z'
    let ISODateNow = new Date('2022-05-30T17:21:10.265Z').toISOString()
    // console.log('[ TaskItem ] handleTaskCompletedStatus id ', taskId);

   let taskObject =  allTasks.find(taskItem => taskItem.id === id)
    
   console.log('[ TaskItem ] handleTaskCompletedStatus id ',    taskObject );
   console.log('[ TaskItem ] handleTaskCompletedStatus id ',    id );
   let completedStatus
   taskObject.completed === false ? completedStatus = true: completedStatus = false
        
    let data = {
      taskId: props.id,
      completed: completedStatus,
      completedTimeStamp: ISODateNow
    }
 
  
  
    dispatch(changeTaskCompletedStatus(data))


      }
 

      const changeDisplaySpotlight = (evt) => {

        let spotlightId = evt.currentTarget.id
        navigate(`/sample/spotlights/${spotlightId}`)

      }

  //  set up drag for Sortable Element using a handle
  // const DragHandle = sortableHandle(() => <DragDiv>:::</DragDiv>);

// ---------Get from Database ---------------------- //
// ======  DUMMY Initial Values ==================== //
  return (
    <div>
    <ItemContainer 
      ref={setNodeRef} 
      style={style} 
      // {...listeners} 
      // {...attributes}
      >


        {type === 'task' &&   

      <ItemWrapper
        className =  {taskStatus ? "backgroundCompleted" : ""}
      > 
      <StyledHandle {...listeners} {...attributes}>:::</StyledHandle>
      {/* <DragHandle /> */}
      
      {/* <div>Hey dude I from 
        {props.id}     {props.type} - {props.id}
        </div> */}
        
     
          <TaskWrapper>
            <TaskBlockWrapper>

              <SpotLightWrapper>
                <IconWrapper>
                  &nbsp;
                </IconWrapper>
              </SpotLightWrapper>

              <TaskBlock>
<div>
              <CheckCircleWrapper 
            
            // onClick={()=> handleTaskCompletedStatus( 'bulah')}
            onClick = {()=> handleTaskCompletedStatus(id)}
            
            >

              {!taskStatus && 
              <CheckCircle/>
              }
              { taskStatus && 
              <CheckCircleCompleted><CheckIcon fontSize = {'small'} /> </CheckCircleCompleted> 
              }


              
              
              </CheckCircleWrapper>

</div>
              {!completed && 
              <TitleWrapper> 
                
                {props.type} - {props.id} -{title}
                
                </TitleWrapper> 
              }
              { completed && 
              <TitleWrapperCompleted>  
                {/* {title} */}
                {props.type} - {props.id} -{title}
                
                </TitleWrapperCompleted> 
              }

              </TaskBlock>

              <NotificationWrapper>

                <StatusWrapper>

              

                </StatusWrapper>

                <IconWrapper>

                  {/* XXXXXXXXXX  Edit for Spotlights only XXXXXXXXXXXXXXXXXX  */}
                  {/* XXXXXXXXXX Delete for Tasks only XXXXXXXXXXXXXXXXXX  */}
                  {type === 'task' && 
                  <ConvertIcon id = {id} type = {type} />
                }
                  <NoteIcon id = {id} type = {type} />
                
                  <ChitIcon id = {id} type = {type} />
                  {type === 'task' &&
                    <DeleteIcon id = {id} source = 'task'  />
                  }
                  {type === 'spotlight' &&
                    <EditIcon id = {id} type = {type} />
                  }



                </IconWrapper>







              </NotificationWrapper>





            </TaskBlockWrapper>
          </TaskWrapper>












        
        </ItemWrapper>

}






{type === 'spotlight' &&   

<SpotlightItemWrapper
  className =  {taskStatus ? "backgroundCompleted" : ""}
> 
<StyledHandle {...listeners} {...attributes}>:::</StyledHandle>
{/* <DragHandle /> */}

{/* <div>Hey dude I from 
  {props.id}     {props.type} - {props.id}
  </div> */}
  

    <TaskWrapper>
      <TaskBlockWrapper>

        <SpotLightWrapper>
          <IconWrapper>
            &nbsp;
          </IconWrapper>
          {type === 'spotlight' && 
            <SpotlightTag  id = {props.id}
              onClick={(evt)=> changeDisplaySpotlight(evt)}
            >go to Spotlight</SpotlightTag>
          } 
        </SpotLightWrapper>

        <TaskBlock>
<div>
        <CheckCircleWrapper> </CheckCircleWrapper>

</div>
        {!completed && 
        <TitleWrapper> 
          
          {props.type} - {props.id} -{title}
          
          </TitleWrapper> 
        }
        { completed && 
        <TitleWrapperCompleted>  
          {/* {title} */}
          {props.type} - {props.id} -{title}
          
          </TitleWrapperCompleted> 
        }

        </TaskBlock>

        <NotificationWrapper>

          <StatusWrapper>

          

          </StatusWrapper>

          <IconWrapper>

            {/* XXXXXXXXXX  Edit for Spotlights only XXXXXXXXXXXXXXXXXX  */}
            {/* XXXXXXXXXX Delete for Tasks only XXXXXXXXXXXXXXXXXX  */}
            {type === 'task' && 
            <ConvertIcon id = {id} type = {type} />
          }
            <NoteIcon id = {id} type = {type} />
          
            <ChitIcon id = {id} type = {type} />
            {type === 'task' &&
              <DeleteIcon id = {id} source = 'task' />
            }
            {type === 'spotlight' &&
              <EditIcon id = {id} type = {type} />
            }



          </IconWrapper>







        </NotificationWrapper>





      </TaskBlockWrapper>
    </TaskWrapper>












  
  </SpotlightItemWrapper>

}






        
    </ItemContainer>
    </div>
  );
}



export default TaskItem



// ------------------------------------------------------------------

const ItemContainer = styled(Item)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '100%',
  // border: '1px solid white',

  

  
})


const SpotlightItemWrapper = styled(Paper)({


  
  display: 'flex',
  justifyContent: 'flex-start',
 alignItems: 'center',

  width: '90%',
  // border: '1px solid orange',
  backgroundColor: chitOrangeVeryLight,
  margin: '4px auto',

  '&.backgroundCompleted' : {backgroundColor: lightGrey, color: darkGrey}
  
})



const ItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'flex-start',
 alignItems: 'center',

  width: '90%',
  // border: '1px solid white',
  margin: '4px auto',
  backgroundColor: 'white',
  
  '&.backgroundCompleted' : {backgroundColor: lightGrey, color: darkGrey},
     
  

  
})


const Handle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  width: '2rem',
 
  '&:hover':{
    backgroundColor: 'lightgrey',
    cursor: 'grab'
  }
  
  
})



const TaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  
  // backgroundColor: 'pink'
  
})

const TaskBlockWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
 
//  backgroundColor: 'red',
 

  
})

const SpotLightWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  width: '100%',
  marginBottom: '4px',
 

  
})

const TaskBlock = styled('div')({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-start',
  // width: '100%',

})

const IconWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'green',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ------Completed Circle ------------------------

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumLightGrey,
 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
  '&:hover' : {
     
    border: '1px solid orange'
  },
  // color: mediumLightGrey,
  
  cursor: 'pointer',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumGrey,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapper= styled('div')({
  
  

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapperCompleted = styled('div')({
  
  

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ------Notifications div ---------------------

const NotificationWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  width: '100%',
  height: '1.1rem',
  // backgroundColor: 'yellow',
  marginTop: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const StatusWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'red',
  marginLeft: '2.2rem',
  fontSize: '.6rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Status= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  color: 'green'
 
})

const StyledHandle= styled(Handle)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 ',
  width:  '1.8rem',
  height: '1.8rem',
 
  margin: '0 12px 0 4px',
borderRadius: '50px',

  
'&:hover' : {
  backgroundColor: mediumLightGrey,
},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const SpotlightTag= styled('div')({
  display:'block',
  color: 'red',
  fontSize: '.8rem',
  textDecoration: 'underline',
  // height: '1rem',
  // backgroundColor: 'yellow',
  cursor: 'pointer',
  marginRight: '8rem',
  '&:hover': {
    color: 'red'
  },
   
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
// =================================