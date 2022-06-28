/* function SpotlightTree(props) -------------------
       parent: sampleSite/Spotlights_s

  Holds Spotlight, task form and tasks ... includes sections for
  (sec a) info icon - to get help
  (sec b) current task -- shows last task worked on
  (sec c) Plan()
  (sec d) Task form
  (sec e) Sortable Tasks

  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights
------------------------------------*/

import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import{backgroundBlue, chitBurgandy, chitOrange, chitOrangeLight, chitOrangeVeryLight, darkGrey, veryLightGrey} from '../../../../styles/colors'

import ViewNav from '../../../../pages/navComponents/publicNav/sampleNav/Spotlight_View_nav_s'
import { Scrollbars } from 'react-custom-scrollbars';

import{ selectSpotlights, 
 
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

 import { selectTasks } from '../../../../app/redux/taskRedux/sam_tasksSlice'
  import { updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'
import { UTCtoDateTime } from '../../../../app/helpers/dateHelper'
 

// ####################################################################################

// import SortableTasks from './SortableTasks_s'

// ####################################################################################

//  ---- Material Ui ------------------
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info'
import NotesIcon from '@mui/icons-material/Notes';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { styled, createTheme  } from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component





const createTreeFromFlat = arr => {
  // The root is a placeholder to allow multiple top-level children
  const tree = {
    topLevel: {
      id: "topLevel",
      children: []
    }
  };

  // Every item gets added as a top level property of 'tree'
  arr.forEach(item => {
    tree[item.id] = {
      ...item,
      children: []
    };
  });

  Object.values(tree).forEach(item => {
    
    if (item.parentId) {

      
      // Now, since every item is already a prop of the tree, every parentId must be a prop of the tree
      // So every item can be added as a child to its parent
      tree[item.parentId].children.push(item);
    }
  });

  // So, you might think that now you have a tree where every item is a prop at the top level,
  // and contains only its immediate children.
  // But because each of those children is actually a reference to the top-level item, each item contains its entire set of descendents

  // So now, if we look at just the root prop (not all the other sibling props), it must contain the whole tree.
  return tree.topLevel.children;
};



  
// ============================================================


export default function SpotlightTree() {
  let navigate = useNavigate()
  const dispatch = useDispatch()


  // --- get all spotlights from the store
 

  let spotlightsArray = useSelector(selectSpotlights)
  let tasksArray = useSelector(selectTasks)

  const [allTasks, setAllTasks] = useState(tasksArray)
  const [allSpotlights, setAllSpotlights] = useState(spotlightsArray)

  useEffect(()=>{

    setAllTasks(tasksArray)
    setAllSpotlights(spotlightsArray)
  },[tasksArray, spotlightsArray])

  // --- prep for task list ---------------------------

 
  // filter all tasks by completed Status

let completedTasks = allTasks.filter(task => task.completed === true)
// console.log('[ Spotlight tree ] allTasks ', allTasks);
// console.log('[ Spotlight tree ] completed tasks ', completedTasks);

let unorderedTasks =[]
let adjustedDate, adjustedTaskObject

completedTasks.map((task, index) => {

 let date  = new Date(task.completedTimeStamp)
 adjustedDate = date.getTime()
 adjustedTaskObject = {

   id: task.id,
   completedTimeStamp: adjustedDate,
   completed: task.completed, 
   spotHolder: task.spotHolder,
   title: task.title

   
 }
 unorderedTasks.push(adjustedTaskObject)

 return unorderedTasks
}
) //end map

console.log('[ Spotlight tree ] unorderedTasks ', unorderedTasks);



let orderedTasks = unorderedTasks.slice().sort((a, b) => b.completedTimeStamp - a.completedTimeStamp)

console.log('[ Spotlight tree ] orderedTasks ', orderedTasks);




const displayCompletedTasks = orderedTasks.map((task, index) => {
 
  const {id, completedTimeStamp, spotHolder, title} = task
  let displayTime = UTCtoDateTime(completedTimeStamp)


  let taskObject = orderedTasks.filter(task => task.completed=== true)
  let taskName = taskObject.title

  // console.log('[Spotlight Tree - task] completed tasks completed', taskName)
  // console.log('[Spotlight Tree- task] completed tasks completed', taskObject.completed)
  // console.log('[Spotlight Tree- task] --------------------------------' )

  const  {day, month, weekday, hours, minutes, ampm} = displayTime







  
  
return (
  <TaskRow  key = {id} id = {id}>
  <TaskDate>  {weekday} {month} {day}---  8:22 PM </TaskDate>
  <TaskName> {title}</TaskName>

  {/* <LightTooltip   title = {titleMessage}  arrow>  */}
  <LightTooltip   
    title = {taskName}
     arrow
     placement="left"
     > 
  <SpotLink id = {spotHolder} onClick = {(evt)=> handleClick(evt)} >
     go to parent spotlight
  </SpotLink>
  </LightTooltip  >
</TaskRow>  

)
}
) //end map



  // --- prep for spotlight tree -----------------------

  /* --- change null "parentId's" to a dummy id
       used to create a tree object from a flat array

  */
  let newSpotlights = []
  let adjustedParentId, adjustedSpotlightObject

   allSpotlights.map((spotlight, index) => {


    !spotlight.parentId ? adjustedParentId = 'topLevel' : adjustedParentId = spotlight.parentId

    adjustedSpotlightObject = {
      id: spotlight.id,
      parentId: adjustedParentId,
      name: spotlight.title
    }
    newSpotlights.push(adjustedSpotlightObject)

    return newSpotlights
  }
  ) //end map


  /*  --- create a tree object from the flat object 
          - format it for MUI tree component

  */
  const tree = createTreeFromFlat(newSpotlights);

 
 
  // console.log('[Spotlight Tree] newSpotlights', newSpotlights)


  const allSpotlightsArray =  {
    "id": "top",
    "parentId": "root",
    "name": "All Spotlights",
    "children": [...tree]

  }

  // --- MUI tree creation function
  const renderTree = (nodes) => (


    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}
    
    >
      {nodes.name !== "All Spotlights" && 
      <TreeLink id = {nodes.id} onClick = {(evt)=> handleClick(evt)}>go to spotlight</TreeLink>
    }
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}

      
    </TreeItem>

  );

  let handleClick =(evt)=>{
    console.log('[ SpotlightTree ] clicked evt target id is:  ', evt.target.id);
    let spotlightId =  evt.target.id
    dispatch(updateStatusView({
      pageType: 'spotlight',
      pageView: 'detail',
      id : spotlightId
    }))
    navigate(`/sample/spotlights/${evt.target.id}`)
  }


  // === Main function return =================================

  return (
    <MainWrapper>
      <ViewNavWrapper>
        <ViewNav />
      </ViewNavWrapper>

    <TaskContainer>  
      
      <HeaderWrapper> Completed tasks list</HeaderWrapper>
      <Scrollbars >
        
      <StyledTaskView>



      <HeaderTaskRow>
          <HeaderTaskDate> Date Completed</HeaderTaskDate>
          <TaskName> Task</TaskName>
          <SpotLink></SpotLink>
           
        </HeaderTaskRow>
        {displayCompletedTasks}
     
        {/* <TaskRow>
          <TaskDate> Mon Jun 5 ---  8:22 PM </TaskDate>
          <TaskName> THis is the titleTHis is the titleTHis is the title</TaskName>
          <SpotLink> go to spotlight</SpotLink>
          <TaskNumber> 3 of 8 </TaskNumber>
        </TaskRow>
          
        <TaskRow>
          <TaskDate>  Mon Jun 5 ---  8:22 PM </TaskDate>
          <TaskName> THis is the title</TaskName>
          <SpotLink> go to spotlight</SpotLink>
          <TaskNumber> 3 of 8 </TaskNumber>
        </TaskRow>     

        <TaskRow>
          <TaskDate>  Mon Jun 5 ---  8:22 PM </TaskDate>
          <TaskName> THis is the title</TaskName>
          <SpotLink> go to spotlight</SpotLink>
          <TaskNumber> 3 of 8 </TaskNumber>
        </TaskRow>    */}

        


        </StyledTaskView>
        </Scrollbars >
      </TaskContainer>

      <TreeContainer>
      <HeaderWrapper> Spotlights tree</HeaderWrapper>
        <StyledTreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1 }}
        >
          {renderTree(allSpotlightsArray)}
        </StyledTreeView>

      </TreeContainer>

 
    </MainWrapper>



  );
}

 

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})



const ViewNavWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  marginBottom: '.5rem',
  height: '2rem',
  color: 'white',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

// ====Tree view =================================

const TreeContainer= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '88%',
  minHeight: '30vh',
  // paddingLeft: '3rem',
 
  margin: '2.25rem 0 0 0',
  
  
 
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const HeaderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '98%',
  height: '3rem',
  margin: ' 0 0 1.5rem 0 ',
  padding: '.25rem',
  
  borderBottom: '1px solid grey',
  
 
  fontSize: '1.2rem',
  color: chitBurgandy,


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})


const StyledTreeView = styled(TreeView)({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: '1rem',
  
  // width: '98%',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'orange',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const TreeLink= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 0 4px 1rem',
  
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
  // paddingLeft: '3rem',
 

  
  
 
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

// === Task View ====================================


const TaskContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '85%',
 
  height: '12rem',
  margin: ' 0 0 .25rem 0',

 
  fontSize: '.8rem',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})


const StyledTaskView = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginLeft: '5%' , 
  // width: '98%',
   
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})
const HeaderTaskRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'red',
  width: '98%',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 paddingLeft: '8px',
 marginBottom: '1rem',
 backgroundColor: veryLightGrey,


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})


const TaskRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  // width: '80%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '8px',
  width: '98%',
 
  marginBottom: '4px',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const TaskDate = styled('div')({
  display: 'block',
  
  // width: '80%',
 
  color: darkGrey,
  width: '10rem',
  marginRight: '1rem',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const HeaderTaskDate = styled('div')({
  display: 'block',
  
  // width: '80%',
 
  color: 'red',
  width: '10rem',
  marginRight: '1rem',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const TaskName = styled('div')({
  display: 'block',
 
  width: '15rem',
  marginRight: '1rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',



  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const SpotLink = styled('div')({
  display: 'block',
 
  
  width: '10rem',
  marginRight: '1rem',
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})

const TaskNumber = styled('div')({
  display: 'block',
  
  width: '10rem',
 
  
  // width: '98%',
  // height: '3rem',
  // margin: ' 0 0 .5rem 0 ',
  // padding: '.25rem',
 
//  backgroundColor: 'pink',


[theme.breakpoints.down('sm')] : {
// height: '1.25rem',
// backgroundColor: 'red'
},
})


const LightTooltip = withStyles({
  tooltip: {
    color: "black",
    backgroundColor: chitOrangeLight,
    boxShadow: '2px 3px 3px grey',
    // border: '1px solid grey',
  }
})(Tooltip);