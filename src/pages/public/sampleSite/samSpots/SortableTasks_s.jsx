/* ---- File - samSpots/SortableTasks_s.jsx
    - hats off to DND-kit for this one
    - drag and drop to reorder tasks for a given spotlight
    
    child requirements - TaskItem_s

    parent: SpotlightMain - pages/public/sampleSite/samSpots/SpotlightMain
       - uses URL to get spotlight ID
   

*/
 
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import{ 
  selectSpotlights,
  updateTaskArray,
  selectTasks,
  selectSpotlightFromArray 
} from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'



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



import { styled, createTheme, withStyles  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

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


// ======================================================

function SortableTasks(props) {
  let dispatch = useDispatch()
  const match = useParams()

  let allSpotlights = useSelector(selectSpotlights)
  let allTasks = useSelector(selectTasks)
  let currentSpotlight = match.id


  // 1 --- get current spotlight 
  
  let spotlightDisplayed = selectSpotlightFromArray(allSpotlights, currentSpotlight)

  // 2 ---get taskArray from spotlight displayed
  let taskArray = spotlightDisplayed.taskArray


  // 3 --- set and update the local state of the taskArray

  const [items, setItems] = useState(taskArray);
  useEffect(() => {   
    setItems(taskArray)
  }, [taskArray])


  //-- state used by DND-kit for dragging
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // --- Return for SortableTasks function ----------------------------------- 

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

  {/* // 4 --- Map  spotlight tasks ------------------------------------- */}      

        {items.map((item, indx) => <TaskItem key={item.id} {...item} 
        allSpotlights = {allSpotlights}
        allTasks = {allTasks}
        />)}

        
      </SortableContext>
     
      <DragOverlay>

        {activeId ? <Item id={activeId} /> : null}
      </DragOverlay>
    </DndContext>
    </Wrapper>
  );

   // --- DND-kit functions --------------------------------------------
  
  function handleDragStart(event) {
    const {active} = event;
    
    setActiveId(active.id);
  }

  // --- Handle Drag End 
  
  function handleDragEnd(event) {
    const {active, over} = event;

    // --- get spotlight Id from URL in order to dispatch to Redux store
    let spotlightId = match.id

    // --- recreate the taskArray in the new order
    if (active.id !== over.id) {
      let newArrayOrder = (items) => {
        const oldIndex = items.findIndex(item=>item.id === active.id)
        const newIndex = items.findIndex(item=>item.id === over.id)

        return arrayMove(items, oldIndex, newIndex);
      };
      
    // --- set the local state to display the taskArray in the new order
      setItems(newArrayOrder)


  // ####  production - DATABASE UPDATE HERE ##########################
  // ####  production - DATABASE UPDATE HERE ##########################


    // --- update Redux store with the new ordered taskArray
      dispatch(updateTaskArray({spotId: spotlightId, newTaskArray: newArrayOrder(items)}))

    }// end if active id
  
  // ####  production - DATABASE UPDATE HERE ##########################
  // ####  production - DATABASE UPDATE HERE ##########################


    setActiveId(null);
  }

}// end func SortableTasks



export default SortableTasks