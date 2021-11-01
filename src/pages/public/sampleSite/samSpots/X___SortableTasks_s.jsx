// ---- File - samSpots/SortableTasks_s.jsx

import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import{ 
  selectSpotlights,
  makeGetSpotlight

} from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'
import{ 
  selectTasks,
 

} from '../../../../app/redux/taskRedux/sam_selectors_Tasks'
import {
  closestCenter,
  DndContext, 
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {TaskItem} from './TaskItem_s';
import {Item} from './Item';



import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component


// ==== Begin Styling ==================================================

const Wrapper= styled('div')({
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  margin:'2px auto',
    // height: '600px',

backgroundColor: 'purple',
// overflow: 'auto'

})

const ItemWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin:'2px 0'
    // height: '600px',

// backgroundColor: 'purple',
// overflow: 'auto'

})




// let listArray = [
//   { fruit: "Granada", id: '1a' , taste: 'good'},
//   { fruit: "Eldia", id: '2a' , taste: 'ok'},
//   { fruit: "Anana", id: '3a' , taste: 'eh'},
//   { fruit: "andes", id: '4a' , taste: 'yum'},
//   { fruit: "Frambuesa", id: '5a' , taste: 'meh'},
//   { fruit: "Coco", id: '6a' , taste: 'ohboy'},
//   { fruit: "Humo", id: '7a' , taste: 'more please'},
//   { fruit: "Banana", id: '8a' , taste: 'the best'},
//   { fruit: "Jarana", id: '9a' , taste: 'yuck'},
//   { fruit: "Damasco", id: '10a' , taste: 'ptoi'},
//   { fruit: "Insulina", id: '11a' , taste: 'ahhh'}

 
// ];

// ======================================================

function SortableTasks(props) {


  
// get spotlight object from mapStateToProps selector
let spotlightDisplayed = props.spotlight.spotlight

// get taskArray from spotlight displayed
let listArray = spotlightDisplayed.taskArray

console.log('[SORTABLE TASKS - spotlight displayed', spotlightDisplayed.taskArray)
// console.log('[SORTABLE TASKS - all spotlights', props.allSpotlights)

  const [activeId, setActiveId] = useState(null);

  const [items, setItems] = useState(listArray);


// ====###################################################################
// ====#######  SEND TO REDUX STORE OR DATABASE HERE ################ 
// ====###################################################################
  useEffect(() => {   
    setItems(listArray)
 
    // console.log('SortableTasks - items in Use EFFECT' , items)
   
 
  },[listArray])

// ====###################################################################
// ====###################################################################
// ====###################################################################



  // const [items, setItems] = useState(['1', '2', '3', '4']);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Wrapper>
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
  {/* // --- Sortable Context ------------------------------------------- */}

      <SortableContext 
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >

  {/* // --- Map  ------------------------------------------------------ */}      

        {items.map((item, indx) => <TaskItem key={item.id} {...item} 
        allSpotlights = {props.allSpotlights}
        allTasks = {props.allTasks}
        />)}


        
      </SortableContext>
     
      <DragOverlay>

        {activeId ? <Item id={activeId} /> : null}
      </DragOverlay>
    </DndContext>
    </Wrapper>
  );

  
  
  function handleDragStart(event) {
    const {active} = event;
    
    setActiveId(active.id);
  }

  // --- Handle Drag End -----------------------------------------------
  
  function handleDragEnd(event) {
    const {active, over} = event;
    console.log('OVER ID is : ', over.id)
    console.log('active ID is : ', active.id)

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item=>item.id === active.id)
        const newIndex = items.findIndex(item=>item.id === over.id)
        console.log('oldIndex = ', oldIndex)
        console.log('[SORTABLE TASKS - newIndex', newIndex)


        return arrayMove(items, oldIndex, newIndex);
      });
    }
    console.log('DRAG END ITEMS: ', items)
    setActiveId(null);
  }
}

const makeMapStateToProps = () => {
  const getSpotlight = makeGetSpotlight()

 
  return (state, ownProps) => 
     {
      const matchid = ownProps.match.params.detailId
       return {

         spotlight: getSpotlight(state, matchid),
         allSpotlights: selectSpotlights(state),
         allTasks: selectTasks(state)

     
     }}
 
  
 };

export default withRouter(connect(makeMapStateToProps)(SortableTasks))